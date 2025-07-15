"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  Heart,
  Filter,
  Grid3X3,
  List,
  ZoomIn,
} from "lucide-react";

interface Photo {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

interface GalleryProps {
  className?: string;
}

const GALLERY_CATEGORIES = [
  { key: "all", name: "Sve Fotografije", count: 0 },
  { key: "ketering", name: "Ketering", count: 25 },
  { key: "hulk", name: "HulkApps Ketering", count: 26 },
  { key: "investitori", name: "Investitori", count: 33 },
  { key: "investitori_v2", name: "Investitori V2", count: 33 },
];

const PHOTOS_PER_PAGE = 12;

export default function Gallery({ className = "" }: GalleryProps) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [displayedPhotos, setDisplayedPhotos] = useState<Photo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());

  const observerRef = useRef<HTMLDivElement>(null);

  // Initialize photos
  useEffect(() => {
    const initializePhotos = () => {
      const allPhotos: Photo[] = [];

      // Ketering category
      for (let i = 1; i <= 25; i++) {
        const filename =
          i === 1 ? "Ketering_Hullk.jpg" : `Ketering_Hullk-${i}.jpg`;
        allPhotos.push({
          id: `ketering-${i}`,
          src: `/gallery/Ketering/${filename}`,
          alt: `Mali Princ Ketering ${i}`,
          category: "ketering",
          width: 800,
          height: 600,
        });
      }

      // HulkApps Ketering category
      for (let i = 1; i <= 26; i++) {
        const filename =
          i === 1 ? "HulkApps_Ketering.jpg" : `HulkApps_Ketering-${i}.jpg`;
        allPhotos.push({
          id: `hulk-${i}`,
          src: `/gallery/Ketering_Hulk/${filename}`,
          alt: `HulkApps Ketering Event ${i}`,
          category: "hulk",
          width: 800,
          height: 600,
        });
      }

      // Investitori category
      for (let i = 1; i <= 33; i++) {
        const filename =
          i === 1
            ? "Ketering_Investitori.jpg"
            : `Ketering_Investitori-${i}.jpg`;
        allPhotos.push({
          id: `investitori-${i}`,
          src: `/gallery/Ketering_board/${filename}`,
          alt: `Investitori Event ${i}`,
          category: "investitori",
          width: 800,
          height: 600,
        });
      }

      // Investitori V2 category
      for (let i = 1; i <= 33; i++) {
        const filename =
          i === 1
            ? "Ketering_Investitori_v2.jpg"
            : `Ketering_Investitori_v2-${i}.jpg`;
        allPhotos.push({
          id: `investitori_v2-${i}`,
          src: `/gallery/Ketering_board_v2/${filename}`,
          alt: `Investitori V2 Event ${i}`,
          category: "investitori_v2",
          width: 800,
          height: 600,
        });
      }

      setPhotos(allPhotos);

      // Update category counts
      GALLERY_CATEGORIES[0].count = allPhotos.length;

      return allPhotos;
    };

    initializePhotos();
  }, []);

  // Filter photos by category
  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  // Load more photos
  const loadMorePhotos = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
      const endIndex = startIndex + PHOTOS_PER_PAGE;
      const newPhotos = filteredPhotos.slice(startIndex, endIndex);

      if (newPhotos.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedPhotos((prev) => [...prev, ...newPhotos]);
        setCurrentPage((prev) => prev + 1);
      }

      setLoading(false);
    }, 500);
  }, [currentPage, filteredPhotos, loading, hasMore]);

  // Reset when category changes
  useEffect(() => {
    setDisplayedPhotos(filteredPhotos.slice(0, PHOTOS_PER_PAGE));
    setCurrentPage(2);
    setHasMore(filteredPhotos.length > PHOTOS_PER_PAGE);
  }, [selectedCategory, filteredPhotos]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          loadMorePhotos();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [loadMorePhotos, hasMore, loading]);

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

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return;

    const currentIndex = displayedPhotos.findIndex(
      (p) => p.id === selectedPhoto.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : displayedPhotos.length - 1;
    } else {
      newIndex =
        currentIndex < displayedPhotos.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedPhoto(displayedPhotos[newIndex]);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-amber-400" />
          <span className="text-elegant font-medium">Kategorije:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category.key
                  ? "bg-amber-400 border-amber-400 text-black font-medium"
                  : "border-amber-400/30 text-amber-400 hover:border-amber-400 hover:bg-amber-400/10"
              }`}
            >
              {category.name}
              <span className="ml-1 text-sm opacity-70">
                ({category.count})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="mb-6 flex justify-center gap-2">
        <button
          onClick={() => setViewMode("masonry")}
          className={`p-2 rounded-lg border-2 transition-all duration-300 ${
            viewMode === "masonry"
              ? "bg-amber-400 border-amber-400 text-black"
              : "border-amber-400/30 text-amber-400 hover:border-amber-400"
          }`}
        >
          <Grid3X3 className="w-5 h-5" />
        </button>
        <button
          onClick={() => setViewMode("grid")}
          className={`p-2 rounded-lg border-2 transition-all duration-300 ${
            viewMode === "grid"
              ? "bg-amber-400 border-amber-400 text-black"
              : "border-amber-400/30 text-amber-400 hover:border-amber-400"
          }`}
        >
          <List className="w-5 h-5" />
        </button>
      </div>

      {/* Gallery Grid */}
      <div
        className={`${
          viewMode === "masonry"
            ? "columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        }`}
      >
        {displayedPhotos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group cursor-pointer ${
              viewMode === "masonry"
                ? "mb-4 break-inside-avoid"
                : "aspect-square"
            }`}
            onClick={() => openLightbox(photo)}
          >
            <div className="relative overflow-hidden rounded-lg bg-black/20">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className={`w-full transition-transform duration-300 group-hover:scale-105 ${
                  viewMode === "grid" ? "h-full object-cover" : "h-auto"
                }`}
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(photo.id);
                    }}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      likedPhotos.has(photo.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
        </div>
      )}

      {/* Infinite Scroll Trigger */}
      <div ref={observerRef} className="h-10" />

      {/* End Message */}
      {!hasMore && displayedPhotos.length > 0 && (
        <div className="text-center py-8">
          <p className="text-amber-400 font-medium">
            Prikazane su sve fotografije ({displayedPhotos.length})
          </p>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={selectedPhoto.width}
                height={selectedPhoto.height}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("prev");
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("next");
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Actions */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(selectedPhoto.id);
                  }}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    likedPhotos.has(selectedPhoto.id)
                      ? "bg-red-500 text-white"
                      : "bg-black/50 text-white hover:bg-black/70"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
