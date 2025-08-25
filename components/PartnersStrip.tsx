"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PartnerLogo {
  alt: string;
  src: string;
}

interface PartnersStripProps {
  logos?: PartnerLogo[];
  className?: string;
}

const DEFAULT_LOGOS: PartnerLogo[] = [
  { alt: "PowerCommerce", src: "/logos/logotype_PowerCommerce_1.svg" },
  { alt: "FlyRank", src: "/logos/FlyRank_Website_Logo.svg" },
  { alt: "Praella", src: "/logos/Praella_Logo.svg" },
  { alt: "Hulk Apps", src: "/logos/Hulk_Logo_New_200x.svg" },
  {
    alt: "Google Developers",
    src: "/logos/png-transparent-google-developers-google-developer-expert-web-development-google-developer-groups-google-text-logo-web-hosting-service.png",
  },
  { alt: "Shop Circle", src: "/logos/Shop Circle.svg" },
  { alt: "Ergomed", src: "/logos/Ergomed_Cover.webp" },
];

export default function PartnersStrip({
  logos,
  className = "",
}: PartnersStripProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const items = logos && logos.length > 0 ? logos : DEFAULT_LOGOS;

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-handshake w-6 h-6 text-amber-400"
            >
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
            </svg>
            <span className="text-amber-400 font-medium uppercase tracking-wider">
              Naši Partneri
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant mb-4"
          >
            Kompanije nam{" "}
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              vjeruju
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-amber-400/80 max-w-2xl mx-auto"
          >
            Organizacija i priprema hrane za korporativne evente
          </motion.p>
        </div>

        {/* Logo marquee */}
        <div className="relative">
          <div className="flex gap-12 items-center animate-marquee">
            {items.map((logo, index) => (
              <div
                key={logo.alt + index}
                className="flex-shrink-0 glass-card rounded-lg p-4 hover:shadow-gold transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {items.map((logo, index) => (
              <div
                key={`duplicate-${logo.alt}-${index}`}
                className="flex-shrink-0 glass-card rounded-lg p-4 hover:shadow-gold transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
