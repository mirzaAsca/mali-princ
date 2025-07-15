"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Eye,
  Heart,
  ArrowRight,
  Sparkles,
  Play,
  ZoomIn,
  ExternalLink,
} from "lucide-react";

interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  category: string;
  categoryDisplay: string;
  featured: boolean;
}

interface RecentWorkSectionProps {
  className?: string;
}

const FEATURED_PHOTOS: GalleryPhoto[] = [
  {
    id: "1",
    src: "/gallery/Ketering/Ketering_Hullk-15.jpg",
    alt: "Elegantna prezentacija hrane",
    category: "ketering",
    categoryDisplay: "Premium Catering",
    featured: true,
  },
  {
    id: "2",
    src: "/gallery/Ketering_Hulk/HulkApps_Ketering-12.jpg",
    alt: "Korporativni event",
    category: "hulk",
    categoryDisplay: "Korporativni Eventi",
    featured: true,
  },
  {
    id: "3",
    src: "/gallery/Ketering_board/Ketering_Investitori-5.jpg",
    alt: "Investitorski događaj",
    category: "investitori",
    categoryDisplay: "Business Eventi",
    featured: true,
  },
  {
    id: "4",
    src: "/gallery/Ketering_board_v2/Ketering_Investitori_v2-10.jpg",
    alt: "Ekskluzivni business događaj",
    category: "investitori_v2",
    categoryDisplay: "Ekskluzivni Eventi",
    featured: true,
  },
  {
    id: "5",
    src: "/gallery/Ketering/Ketering_Hullk-8.jpg",
    alt: "Kreativna prezentacija jela",
    category: "ketering",
    categoryDisplay: "Kreativni Catering",
    featured: true,
  },
  {
    id: "6",
    src: "/gallery/Ketering_Hulk/HulkApps_Ketering-20.jpg",
    alt: "Profesionalna usluga",
    category: "hulk",
    categoryDisplay: "Profesionalni Servis",
    featured: true,
  },
  {
    id: "7",
    src: "/gallery/Ketering_board/Ketering_Investitori-15.jpg",
    alt: "Luksuzna dekoracija stola",
    category: "investitori",
    categoryDisplay: "Luksuzni Setup",
    featured: true,
  },
  {
    id: "8",
    src: "/gallery/Ketering_board_v2/Ketering_Investitori_v2-25.jpg",
    alt: "Savršena organizacija",
    category: "investitori_v2",
    categoryDisplay: "Savršena Organizacija",
    featured: true,
  },
];

export default function RecentWorkSection({
  className = "",
}: RecentWorkSectionProps) {
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const toggleLike = (photoId: string) => {
    setLikedPhotos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(photoId)) {
        newSet.delete(photoId);
      } else {
        newSet.add(photoId);
      }
      return newSet;
    });
  };

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.1),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider">
              Naš Rad
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant mb-4">
            Najnoviji
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-2">
              Projekti
            </span>
          </h2>

          <p className="text-lg text-amber-400/80 max-w-2xl mx-auto mb-8">
            Pogled u naše nedavne culinary kreacije i nezaboravne događaje koje
            smo imali čast organizirati
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-6 glass-card px-8 py-4 rounded-full"
          >
            <div className="text-center">
              <div className="text-xl font-bold text-amber-400">117+</div>
              <div className="text-amber-400/70 text-sm">Fotografija</div>
            </div>
            <div className="w-px h-8 bg-amber-400/30" />
            <div className="text-center">
              <div className="text-xl font-bold text-amber-400">4</div>
              <div className="text-amber-400/70 text-sm">Kategorije</div>
            </div>
            <div className="w-px h-8 bg-amber-400/30" />
            <div className="text-center">
              <div className="text-xl font-bold text-amber-400">50+</div>
              <div className="text-amber-400/70 text-sm">Eventi</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURED_PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 3 ? "md:col-span-1 lg:row-span-2" : ""
              }`}
              onMouseEnter={() => setHoveredPhoto(photo.id)}
              onMouseLeave={() => setHoveredPhoto(null)}
            >
              {/* Photo Container */}
              <div className="relative overflow-hidden rounded-xl bg-black/20 h-64 lg:h-80">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="glass-card px-3 py-1 text-xs font-medium text-amber-400 rounded-full">
                    {photo.categoryDisplay}
                  </span>
                </div>

                {/* Action Buttons */}
                <div
                  className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
                    hoveredPhoto === photo.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(photo.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      likedPhotos.has(photo.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                  <Link
                    href="/galerija"
                    className="w-8 h-8 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Link>
                </div>

                {/* Photo Info */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-semibold text-white mb-1">{photo.alt}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-amber-400 text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>Premium Kvalitet</span>
                    </div>
                    <Link
                      href="/galerija"
                      className="text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-amber-400/10 transition-opacity duration-300 ${
                    hoveredPhoto === photo.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-amber-400 mb-4 flex justify-center">
              <Eye className="w-12 h-12" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-elegant mb-4">
              Pogledajte Kompletnu Galeriju
            </h3>

            <p className="text-amber-400/80 text-lg mb-8 max-w-2xl mx-auto">
              Otkrijte sve naše culinary kreacije i inspirišite se za vaš
              sljedeći događaj. Više od 117 fotografija čeka da budu otkrivene.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/galerija">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-premium text-lg px-8 py-4 rounded-full font-semibold flex items-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  Pogledaj Sve Fotografije
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-outline-premium text-lg px-8 py-4 rounded-full font-semibold flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Rezerviši Konsultaciju
                </motion.button>
              </Link>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-amber-400/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">∞</div>
                <div className="text-amber-400/70 text-sm">Kreativnost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">5★</div>
                <div className="text-amber-400/70 text-sm">Kvalitet</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1">
                  24/7
                </div>
                <div className="text-amber-400/70 text-sm">Podrška</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 left-10 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-10 w-40 h-40 bg-amber-600/5 rounded-full blur-3xl" />
    </section>
  );
}
