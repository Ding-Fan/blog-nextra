//! work in progress
import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import GalleryImage from "./image/GalleryImage";

interface MobileGalleryProps extends React.HTMLAttributes<HTMLElement> {
  photos: string[];
}

const variants = {
  initial: {
    y: "0%",
    opacity: 1,
    position: "absolute" as const,
  },
  animate: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 1,
    position: "absolute" as const,
  }),

  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 1,
    position: "absolute" as const,
  }),
};

const MobileGallery: React.FC<MobileGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [deltaY, setDeltaY] = useState(0);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex < 0 || newIndex >= photos.length) {
      return; // Prevent index out of bounds
    }
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
    setDirection(newDirection);
  };

  const handlers = useSwipeable({
    onSwiping: ({ deltaY }) => {
      setDeltaY(deltaY);
    },
    onSwiped: ({ absY }) => {
      paginate(absY > 0 ? 1 : -1);
    },
    preventScrollOnSwipe: true,
    delta: 50,
    trackTouch: true,
    trackMouse: true,
  });

  // Prevent body scroll when in fullscreen mode
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  return (
    <div
      className={`${
        isFullscreen ? "fixed inset-0 z-50 bg-black" : "relative h-96"
      } transition-all duration-200 overflow-hidden`}
    >
      {/* Floating Button */}
      <button
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        className="absolute top-4 right-4 z-50 bg-gray-800 text-white p-2 rounded-full"
      >
        {isFullscreen ? "Close" : "Fullscreen"}
      </button>

      {/* Image Display */}
      <div {...handlers} className="w-full h-full relative flex items-center">
        {/* Previous Image */}
        {prevIndex !== null && (
          <motion.div
            custom={direction}
            variants={variants}
            initial={{ y: "-100%" }}
            style={{
              position: "absolute",
            }}
            className="w-full h-full object-cover"
          >
            <GalleryImage loading="eager" src={photos[prevIndex]} />
          </motion.div>
        )}
        {/* Current Image */}
        <motion.div
          custom={direction}
          variants={variants}
          drag
          className="w-full h-full object-cover"
        >
          <GalleryImage loading="eager" src={photos[currentIndex]} />
        </motion.div>
      </div>
    </div>
  );
};

export default MobileGallery;
