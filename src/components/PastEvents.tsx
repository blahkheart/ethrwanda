import { Particles } from "./ui/particles";
import { useTheme } from "./theme-provider";
import { useState, useEffect } from "react";
import useParticleProperties from "@/hooks/useParticleProperties";
import { PastEventsTimeline } from "./EventsTimeline";
import { PastEventsGallery } from "./PastEventsGallery";
import { InterviewCarousel } from "./InterviewsCarousel";
import { WinningProjects } from "./WinningProjects";
const interviews = [
  {
    id: 1,
    title: "Interview with John Doe",
    description: "Discussing the future of web development",
    thumbnailSrc: "https://startup-template-sage.vercel.app/hero-dark.png",
    videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
  },
  {
    id: 1,
    title: "Interview with John Doe",
    description: "Discussing the future of web development",
    thumbnailSrc: "https://startup-template-sage.vercel.app/hero-dark.png",
    videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
  },
  {
    id: 1,
    title: "Interview with John Doe",
    description: "Discussing the future of web development",
    thumbnailSrc: "https://startup-template-sage.vercel.app/hero-dark.png",
    videoSrc: "https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb",
  },
  // ... more interviews
];



const PastEvents = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const particleProps = useParticleProperties();
    
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
    
  return (
    <div className="relative min-h-screen w-full">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={particleProps.quantity}
        staticity={particleProps.staticity}
        color={color}
        ease={particleProps.ease}
      />

      {/* Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-bold text-center mb-44 text-white">
            Past Events & Workshops
          </h2>

          <div className="grid grid-cols-1 gap-8">
            <div>
              <PastEventsTimeline />
            </div>

            <div>
              <div className="grid grid-cols-1">
                <PastEventsGallery />
              </div>
            </div>
          </div>

          <div className="my-40">
            <h3 className="text-2xl lg:text-4xl text-center font-bold text-white mb-16">Interviews</h3>
            <div className="grid grid-cols-1 gap-4">
              <InterviewCarousel interviews={interviews} />
            </div>
          </div>

          <div className="mt-11 mb-40">
            <WinningProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
