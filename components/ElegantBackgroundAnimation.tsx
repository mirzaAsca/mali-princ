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

    const elements: FloatingElement[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      icon: icons[i % icons.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 30, // 30-60px
      opacity: Math.random() * 0.3 + 0.2, // 0.2-0.5
      duration: Math.random() * 20 + 15, // 15-35s
      delay: Math.random() * 10, // 0-10s delay
    }));

    setFloatingElements(elements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Elegant Shimmer Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/5 to-transparent animate-shimmer"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(255,215,0,0.03) 25%, rgba(255,215,0,0.08) 50%, rgba(255,215,0,0.03) 75%, transparent 100%)",
            transform: "translateX(-100%)",
            animation: "shimmer 8s ease-in-out infinite",
          }}
        />
      </div>

      {/* Elegant Rotating Decorative Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(255,215,0,0.02) 90deg, transparent 180deg, rgba(255,215,0,0.02) 270deg, transparent 360deg)",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
            }}
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute w-64 h-64 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(255,215,0,0.03) 120deg, transparent 240deg, rgba(255,215,0,0.03) 360deg)",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
            }}
          />

          {/* Center Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0deg, rgba(255,215,0,0.04) 60deg, transparent 120deg, rgba(255,215,0,0.04) 180deg, transparent 240deg, rgba(255,215,0,0.04) 300deg, transparent 360deg)",
              transform: "translate(-50%, -50%)",
              left: "50%",
              top: "50%",
            }}
          />
        </div>
      </div>

      {/* Floating Culinary Icons */}
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
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              rotate: [0, 360],
              opacity: [
                element.opacity,
                element.opacity * 0.6,
                element.opacity,
              ],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div
              style={{
                width: `${element.size}px`,
                height: `${element.size}px`,
                filter: "blur(0.5px)",
              }}
            >
              <IconComponent className="text-amber-400/50 w-full h-full" />
            </div>
          </motion.div>
        );
      })}

      {/* Subtle Particle Field */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1.2, 0.5],
              y: [0, -100, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Elegant Border Glow */}
      <div
        className="absolute inset-0 border border-amber-400/5 rounded-lg"
        style={{
          boxShadow:
            "inset 0 0 50px rgba(255,215,0,0.02), 0 0 100px rgba(255,215,0,0.01)",
        }}
      />
    </div>
  );
}
