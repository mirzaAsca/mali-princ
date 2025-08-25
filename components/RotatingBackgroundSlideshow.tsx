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
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Preload images with better error handling
    const preloadImages = async () => {
      const loadPromises = BACKGROUND_IMAGES.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setLoadedImages((prev) => new Set([...prev, src]));
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load image: ${src}`);
            resolve(); // Continue even if image fails
          };
          img.src = src;
        });
      });

      await Promise.all(loadPromises);
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
    }, 10000); // Increased to 10 seconds for better performance

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8, // Reduced from 1s
            ease: "easeInOut",
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

          {/* Simplified overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
