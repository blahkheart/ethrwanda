import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface InterviewSlide {
  id: number;
  title: string;
  description?: string;
  thumbnailSrc: string;
  videoSrc: string;
}

interface InterviewCarouselProps {
  interviews: InterviewSlide[];
}

const CarouselControl = ({
  type,
  title,
  handleClick,
  disabled,
}: {
  type: string;
  title: string;
  handleClick: () => void;
  disabled: boolean;
}) => (
  <button
    className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 
        border-3 border-transparent rounded-full focus:border-primary focus:outline-none 
        hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 
        ${type === "previous" ? "rotate-180" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed hover:translate-y-0" : ""}`}
    title={title}
    onClick={handleClick}
    disabled={disabled}
  >
    <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
  </button>
);

export function InterviewCarousel({ interviews }: InterviewCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState<InterviewSlide | null>(null);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? interviews.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === interviews.length ? 0 : next);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-12">
      <div className="relative h-[400px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {interviews.map((interview) => (
            <div key={interview.id} className="w-full flex-shrink-0 px-4">
              <div
                className="relative aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden 
                            shadow-lg group cursor-pointer"
                onClick={() => setActiveVideo(interview)}
              >
                <img
                  src={interview.thumbnailSrc}
                  alt={interview.title}
                  className="w-full h-full object-cover transition-all duration-300 
                           group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex size-16 sm:size-20 items-center justify-center rounded-full 
                                bg-black/20 backdrop-blur-sm transition-transform duration-300 
                                group-hover:scale-110"
                  >
                    <Play className="size-6 sm:size-8 text-white" />
                  </div>
                </div>
                <div
                  className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b 
                              from-black/80 to-transparent opacity-0 transform -translate-y-full
                              transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  <h3 className="text-white text-lg font-semibold text-center">
                    {interview.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-1 text-center">
                    {interview.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
        <CarouselControl
          type="previous"
          title="Previous interview"
          handleClick={handlePreviousClick}
          disabled={current === 0}
        />
        <CarouselControl
          type="next"
          title="Next interview"
          handleClick={handleNextClick}
          disabled={current === interviews.length - 1}
        />
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-4xl mx-4 aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 backdrop-blur-sm
                         text-white hover:bg-white/20 transition-colors"
              >
                <X className="size-5" />
              </button>
              <iframe
                src={activeVideo.videoSrc}
                className="w-full h-full rounded-xl border border-white/20"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
