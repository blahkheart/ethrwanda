import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// MediaItemType defines the structure of a media item
interface MediaItemType {
  id: number;
  type: string;
  title: string;
  desc: string;
  url: string;
  span: string;
}
// MediaItem component renders either a video or image based on item.type
const MediaItem = ({
  item,
  className,
  onClick,
}: {
  item: MediaItemType;
  className?: string;
  onClick?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Reference for video element
  const [isInView, setIsInView] = useState(false); // To track if video is in the viewport
  const [isBuffering, setIsBuffering] = useState(true); // To track if video is buffering

  // Intersection Observer to detect if video is in view and play/pause accordingly
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting); // Set isInView to true if the video is in view
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current); // Start observing the video element
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current); // Clean up observer when component unmounts
      }
    };
  }, []);
  // Handle video play/pause based on whether the video is in view or not
  useEffect(() => {
    let mounted = true;

    const handleVideoPlay = async () => {
      if (!videoRef.current || !isInView || !mounted) return; // Don't play if video is not in view or component is unmounted

      try {
        if (videoRef.current.readyState >= 3) {
          setIsBuffering(false);
          await videoRef.current.play(); // Play the video if it's ready
        } else {
          setIsBuffering(true);
          await new Promise((resolve) => {
            if (videoRef.current) {
              videoRef.current.oncanplay = resolve; // Wait until the video can start playing
            }
          });
          if (mounted) {
            setIsBuffering(false);
            await videoRef.current.play();
          }
        }
      } catch (error) {
        console.warn("Video playback failed:", error);
      }
    };

    if (isInView) {
      handleVideoPlay();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }

    return () => {
      mounted = false;
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute("src");
        videoRef.current.load();
      }
    };
  }, [isInView]);

  // Render either a video or image based on item.type

  if (item.type === "video") {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="auto"
          style={{
            opacity: isBuffering ? 0.8 : 1,
            transition: "opacity 0.2s",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={item.url} // Image source URL
      alt={item.title} // Alt text for the image
      className={`${className} object-cover cursor-pointer`} // Style the image
      onClick={onClick} // Trigger onClick when the image is clicked
      loading="lazy" // Lazy load the image for performance
      decoding="async" // Decode the image asynchronously
    />
  );
};

// GalleryModal component displays the selected media item in a modal
interface GalleryModalProps {
  selectedItem: MediaItemType;
  isOpen: boolean;
  onClose: () => void;
  setSelectedItem: (item: MediaItemType | null) => void;
  mediaItems: MediaItemType[]; // List of media items to display in the modal
}
const GalleryModal = ({
  selectedItem,
  isOpen,
  onClose,
  setSelectedItem,
  mediaItems,
}: GalleryModalProps) => {
  if (!isOpen) return null;

  const handleThumbnailClick = (e: React.MouseEvent, item: MediaItemType) => {
    e.stopPropagation(); // Prevent click from closing modal
    setSelectedItem(item);
  };

  return (
    <>
      {/* Blur Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-10"
        onClick={onClose}
      />

      {/* Main Modal */}
      <motion.div
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        className="fixed inset-0 w-full min-h-screen sm:h-[90vh] md:h-[600px] 
                  rounded-none sm:rounded-lg md:rounded-xl overflow-hidden z-20"
        onClick={onClose}
      >
        {/* Main Content */}
        <div className="h-full flex flex-col">
          <div className="flex-1 p-2 sm:p-3 md:p-4 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedItem.id}
                className="relative w-full aspect-[16/9] max-w-[95%] sm:max-w-[85%] md:max-w-3xl 
                         h-auto max-h-[70vh] rounded-lg overflow-hidden shadow-md"
                initial={{ y: 20, scale: 0.97 }}
                animate={{
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    mass: 0.5,
                  },
                }}
                exit={{
                  y: 20,
                  scale: 0.97,
                  transition: { duration: 0.15 },
                }}
              >
                <MediaItem
                  item={selectedItem}
                  className="w-full h-full object-contain bg-gray-900/20"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Thumbnail Strip Container */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* Scrollable Thumbnail Container */}
            <div
              className="relative max-w-[90%] mx-auto overflow-x-auto scrollbar-hide py-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-2 px-4 min-w-max justify-start sm:justify-center">
                {mediaItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                               rounded-lg overflow-hidden cursor-pointer 
                               ${
                                 item.id === selectedItem.id
                                   ? "ring-2 ring-white"
                                   : "opacity-50"
                               }`}
                    whileHover={{ scale: 1.05, opacity: 1 }}
                    onClick={(e) => handleThumbnailClick(e, item)}
                  >
                    <MediaItem
                      item={item}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

interface InteractiveBentoGalleryProps {
  mediaItems: MediaItemType[];
  title: string;
  description?: string;
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
  mediaItems,
  title,
  description,
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
  const [items, setItems] = useState(mediaItems);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="container px-4 py-8 mt-32">
      <div className="mb-28 text-center">
        <motion.h1
          className="text-2xl mb-8 sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent 
                             bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                             dark:from-white dark:via-gray-200 dark:to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {description}
        </motion.p>
      </div>
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={items}
          />
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[150px]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`media-${item.id}`}
                className={`relative overflow-hidden rounded-xl cursor-move ${item.span}`}
                onClick={() => !isDragging && setSelectedItem(item)}
                variants={{
                  hidden: { y: 50, scale: 0.9, opacity: 0 },
                  visible: {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                      delay: index * 0.05,
                    },
                  },
                }}
                whileHover={{ scale: 1.02 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(_, info) => {
                  setIsDragging(false);
                  const moveDistance = info.offset.x + info.offset.y;
                  if (Math.abs(moveDistance) > 50) {
                    const newItems = [...items];
                    const draggedItem = newItems[index];
                    const targetIndex =
                      moveDistance > 0
                        ? Math.min(index + 1, items.length - 1)
                        : Math.max(index - 1, 0);
                    newItems.splice(index, 1);
                    newItems.splice(targetIndex, 0, draggedItem);
                    setItems(newItems);
                  }
                }}
              >
                <MediaItem
                  item={item}
                  className="absolute inset-0 w-full h-full"
                  onClick={() => !isDragging && setSelectedItem(item)}
                />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <h3 className="relative text-white text-xs sm:text-sm md:text-base font-medium line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="relative text-white/70 text-[10px] sm:text-xs md:text-sm mt-0.5 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveBentoGallery;
