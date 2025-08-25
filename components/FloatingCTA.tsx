"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Mail,
  X,
  ChevronUp,
  Calendar,
  Star,
} from "lucide-react";

// Performance logging
const logPerformance = (action: string, data?: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[PERF] FloatingCTA: ${action}`, data ? data : "");
  }
};

interface FloatingCTAProps {
  className?: string;
}

export default function FloatingCTA({ className = "" }: FloatingCTAProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Optimized scroll handler with increased throttling
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show after scrolling 300px
    const newIsVisible = scrollTop > 300;
    if (newIsVisible !== isVisible) {
      setIsVisible(newIsVisible);
      logPerformance("Visibility changed", {
        isVisible: newIsVisible,
        scrollTop,
      });
    }

    // Calculate scroll progress
    const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
    const newProgress = Math.min(progress, 100);
    if (Math.abs(newProgress - scrollProgress) > 5) {
      // Only update if significant change
      setScrollProgress(newProgress);
      logPerformance("Scroll progress updated", { progress: newProgress });
    }
  }, [isVisible, scrollProgress]);

  useEffect(() => {
    logPerformance("FloatingCTA mounted");

    // Increased throttling for better performance
    let ticking = false;
    let scrollCount = 0;

    const throttledScrollHandler = () => {
      scrollCount++;
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
          if (scrollCount > 10) {
            logPerformance("High scroll frequency detected", {
              count: scrollCount,
            });
            scrollCount = 0;
          }
        });
        ticking = true;
      }
    };

    // Increased passive listener delay
    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });

    logPerformance("Scroll listener attached");

    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
      logPerformance("Scroll listener removed");
    };
  }, [handleScroll]);

  const handleCall = () => {
    window.open("tel:+38760320385", "_self");
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Pozdrav! Interesuje me vaša catering usluga. Molim vas kontaktirajte me za više informacija."
    );
    window.open(`https://wa.me/38760320385?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    window.open(
      "mailto:vip@maliprinc.ba?subject=Upit za catering uslugu",
      "_self"
    );
  };

  const handleBooking = () => {
    // Scroll to contact section or open booking form
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Simplified Scroll Progress Ring */}
      <div className="absolute inset-0 -m-2">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="rgba(255, 215, 0, 0.2)"
            strokeWidth="3"
            fill="transparent"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="rgb(255, 215, 0)"
            strokeWidth="3"
            fill="transparent"
            strokeDasharray={`${scrollProgress * 1.76} 176`}
            className="transition-all duration-500" // Increased duration for smoother updates
          />
        </svg>
      </div>

      {/* Expanded Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-4 space-y-3"
          >
            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 glass-card px-4 py-3 rounded-full text-amber-400 hover:bg-amber-400/10 transition-all duration-300 shadow-lg"
            >
              <ChevronUp className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">
                Na Vrh
              </span>
            </button>

            {/* Book Consultation */}
            <button
              onClick={handleBooking}
              className="flex items-center gap-3 glass-card px-4 py-3 rounded-full text-amber-400 hover:bg-amber-400/10 transition-all duration-300 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">
                Rezerviši Konsultaciju
              </span>
            </button>

            {/* Email */}
            <button
              onClick={handleEmail}
              className="flex items-center gap-3 glass-card px-4 py-3 rounded-full text-amber-400 hover:bg-amber-400/10 transition-all duration-300 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">
                Email
              </span>
            </button>

            {/* WhatsApp */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">
                WhatsApp
              </span>
            </button>

            {/* Call */}
            <button
              onClick={handleCall}
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-nowrap">
                Pozovi Odmah
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <button
        onClick={() => {
          setIsExpanded(!isExpanded);
          logPerformance("CTA button clicked", { isExpanded: !isExpanded });
        }}
        className="relative w-12 h-12 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black shadow-xl hover:shadow-2xl transition-all duration-300 group"
      >
        {/* Simplified Pulsing Animation */}
        <div className="absolute inset-0 bg-amber-400 rounded-full animate-ping opacity-5 group-hover:opacity-10" />

        {/* Icon */}
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </button>

      {/* Simplified Floating Message */}
      <AnimatePresence>
        {!isExpanded && isVisible && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.3, delay: 1 }}
            className="absolute bottom-0 right-16 mb-2 mr-2"
          >
            <div className="glass-card px-4 py-2 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-amber-400 text-sm font-medium">
                  Besplatna Konsultacija
                </span>
              </div>
              <p className="text-elegant text-xs">
                Kontaktiraj nas za personalizovanu ponudu!
              </p>

              {/* Arrow pointing to button */}
              <div className="absolute bottom-3 -right-2 w-0 h-0 border-l-8 border-l-amber-400/20 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
