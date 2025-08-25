"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChefHat,
  Utensils,
  Crown,
  Sparkles,
  Coffee,
  Wine,
  Cake,
  Star,
} from "lucide-react";

// Performance logging
const logPerformance = (action: string, data?: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[PERF] BackgroundAnimation: ${action}`, data ? data : "");
  }
};

interface FloatingElement {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function ElegantBackgroundAnimation() {
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>(
    []
  );

  useEffect(() => {
    logPerformance("BackgroundAnimation mounted");

    const icons = [
      ChefHat,
      Utensils,
      Crown,
      Sparkles,
      Coffee,
      Wine,
      Cake,
      Star,
    ];

    // Reduced from 6 to 4 floating elements for better performance
    const elements: FloatingElement[] = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      icon: icons[i % icons.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 15, // 15-30px (reduced from 20-40px)
      opacity: Math.random() * 0.15 + 0.1, // 0.1-0.25 (reduced from 0.1-0.3)
      duration: Math.random() * 20 + 20, // 20-40s (increased from 10-25s for slower movement)
      delay: Math.random() * 10, // 0-10s delay (increased for more spread)
    }));

    setFloatingElements(elements);
    logPerformance("Floating elements initialized", { count: elements.length });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Simplified Shimmer Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/2 to-transparent"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.01) 25%, rgba(255,215,0,0.02) 50%, rgba(255,215,0,0.01) 75%, transparent 100%)",
            transform: "translateX(-100%)",
            animation: "shimmer 20s ease-in-out infinite", // Much slower animation
          }}
        />
      </div>

      {/* Simplified Floating Culinary Icons */}
      {floatingElements.map((element) => {
        const IconComponent = element.icon;
        return (
          <motion.div
            key={element.id}
            className="absolute"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -15, 0], // Reduced movement
              x: [0, 8, -8, 0], // Reduced movement
              opacity: [
                element.opacity,
                element.opacity * 0.8,
                element.opacity,
              ],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
            onAnimationStart={() => {
              logPerformance("Floating element animation started", {
                id: element.id,
              });
            }}
          >
            <div
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
              }}
            >
              <IconComponent className="text-amber-400/30 w-full h-full" />
            </div>
          </motion.div>
        );
      })}

      {/* Simplified Particle Field - Reduced from 4 to 2 particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 2 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.15, 0.1],
              scale: [0.5, 0.8, 0.5],
              y: [0, -30, 0], // Reduced movement
            }}
            transition={{
              duration: Math.random() * 15 + 10, // Increased duration
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
            onAnimationStart={() => {
              logPerformance("Particle animation started", { id: i });
            }}
          />
        ))}
      </div>

      {/* Simplified Border Glow */}
      <div
        className="absolute inset-0 border border-amber-400/2 rounded-lg"
        style={{
          boxShadow: "inset 0 0 20px rgba(255,215,0,0.005)", // Reduced glow
        }}
      />
    </div>
  );
}
