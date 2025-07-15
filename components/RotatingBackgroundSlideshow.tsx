"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RotatingBackgroundSlideshowProps {
  className?: string;
}

const BACKGROUND_IMAGES = [
  "/gallery/Ketering_board/Ketering_Investitori-21.jpg",
  "/gallery/Ketering_board/Ketering_Investitori-31.jpg",
  "/gallery/Ketering_board/Ketering_Investitori-33.jpg",
  "/gallery/Ketering_board_v2/Ketering_Investitori_v2-32.jpg",
  "/gallery/Ketering_board_v2/Ketering_Investitori_v2-6.jpg",
];

export default function RotatingBackgroundSlideshow({
  className = "",
}: RotatingBackgroundSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    const preloadImages = async () => {
      const promises = BACKGROUND_IMAGES.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = src;
        });
      });

      await Promise.all(promises);
      setIsLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <div className="absolute inset-0 bg-black/80" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${BACKGROUND_IMAGES[currentImageIndex]}')`,
              filter: "brightness(0.12) contrast(1.1)",
            }}
          />

          {/* Multiple overlay effects for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.06)_0%,transparent_50%)] animate-pulse" />

          {/* Subtle moving gradient for premium effect */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 30%, rgba(255,215,0,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 70%, rgba(255,215,0,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 30%, rgba(255,215,0,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {BACKGROUND_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-amber-400 shadow-lg"
                : "bg-white/30 hover:bg-white/50"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20">
        <motion.div
          className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: Infinity,
          }}
          key={currentImageIndex}
        />
      </div>
    </div>
  );
}
