"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, ArrowRight, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface GalleryShowcaseProps {
  className?: string;
}

// Featured gallery images - selecting some of the best ones
const FEATURED_IMAGES = [
  {
    src: "/gallery/Ketering/Ketering_Hullk-15.jpg",
    alt: "Premium catering setup",
    category: "Premium Event",
  },
  {
    src: "/gallery/Ketering/Ketering_Hullk-17.jpg",
    alt: "Elegant table arrangement",
    category: "Table Setup",
  },
  {
    src: "/gallery/Ketering/Ketering_Hullk-22.jpg",
    alt: "Professional catering service",
    category: "Service",
  },
  {
    src: "/gallery/Ketering/Ketering_Hullk-8.jpg",
    alt: "Beautiful food presentation",
    category: "Food Presentation",
  },
  {
    src: "/gallery/Ketering/Ketering_Hullk-11.jpg",
    alt: "Event coordination",
    category: "Event Management",
  },
  {
    src: "/gallery/Ketering/Ketering_Hullk-25.jpg",
    alt: "Complete event setup",
    category: "Full Setup",
  },
];

export default function GalleryShowcase({
  className = "",
}: GalleryShowcaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={`py-24 px-4 relative ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider">
              Naš Rad
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Pogledajte našu
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-3">
              galeriju
            </span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto">
            Svaki event je priča o savršenstvu. Pogledajte kako transformišemo
            obične događaje u nezaboravna iskustva.
          </p>
        </motion.div>

        {/* Featured Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {FEATURED_IMAGES.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl glass-card hover:shadow-gold transition-all duration-300"
            >
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-400/90 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {image.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">Pogledaj detalje</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-luxury mb-4">
              Želite vidjeti više?
            </h3>
            <p className="text-elegant text-lg mb-8">
              Naša galerija sadrži stotine fotografija iz različitih događaja -
              od intimnih proslava do velikih korporativnih eventa.
            </p>

            <Link href="/galerija">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium text-lg px-8 py-4 rounded-full font-semibold flex items-center gap-3 mx-auto group"
              >
                <span>Pogledajte punu galeriju</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            <div className="mt-6 text-center">
              <p className="text-amber-400/80 text-sm">
                Preko 100+ uspješno organizovanih događaja
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
