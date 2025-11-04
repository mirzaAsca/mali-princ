"use client";

import { useState, useEffect, lazy, Suspense, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Crown,
  ChefHat,
  Sparkles,
  Utensils,
  Phone,
  Star,
  Award,
  Clock,
  Users,
  Camera,
  ImageIcon,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Heart,
  Cake,
  Gift,
  Baby,
} from "lucide-react";
import OfferCreatorModal from "../components/OfferCreatorModal";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

// Performance logging
const logPerformance = (action: string, data?: any) => {
  if (process.env.NODE_ENV === "development") {
    console.log(`[PERF] ${action}`, data ? data : "");
  }
};

// Lazy load heavy components
const TestimonialsSection = lazy(
  () => import("../components/TestimonialsSection")
);
const PartnersStrip = lazy(() => import("../components/PartnersStrip"));
const BenefitsSection = lazy(() => import("../components/BenefitsSection"));
const FAQSection = lazy(() => import("../components/FAQSection"));
const FinalCTASection = lazy(() => import("../components/FinalCTASection"));
const ElegantBackgroundAnimation = lazy(
  () => import("../components/ElegantBackgroundAnimation")
);
const RotatingBackgroundSlideshow = lazy(
  () => import("../components/RotatingBackgroundSlideshow")
);

// Simplified count-up hook with minimal complexity
const useCountUpWithPlus = (target: number, duration: number = 1000) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logPerformance("Count-up animation started", { target, duration });
          let start = 0;
          const increment = target / (duration / 50); // Much slower frequency

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setValue(target);
              clearInterval(timer);
              logPerformance("Count-up animation completed");
            } else {
              setValue(Math.floor(start));
            }
          }, 50); // Much slower updates
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
};

const useCountUpWithPercent = (target: number, duration: number = 1000) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          logPerformance("Percent count-up animation started", {
            target,
            duration,
          });
          let start = 0;
          const increment = target / (duration / 50); // Much slower frequency

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setValue(target);
              clearInterval(timer);
              logPerformance("Percent count-up animation completed");
            } else {
              setValue(Math.floor(start));
            }
          }, 50); // Much slower updates
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return { value: `${value}%`, ref };
};

// Scroll throttling hook with performance logging
const useScrollThrottle = (callback: () => void, delay: number = 32) => {
  const lastCall = useRef(0);

  return useCallback(() => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      logPerformance("Scroll event throttled", { delay });
      callback();
    }
  }, [callback, delay]);
};

export default function Homepage() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);
  const [showBackgroundEffects, setShowBackgroundEffects] = useState(false);
  const [showOfferCreator, setShowOfferCreator] = useState(false);

  useEffect(() => {
    logPerformance("Homepage component mounted");

    // Minimal particle count for better performance
    const newParticles = Array.from({ length: 5 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5, // Much smaller particles
      opacity: Math.random() * 0.1 + 0.05, // Much lower opacity
    }));
    setParticles(newParticles);
    logPerformance("Particles initialized", { count: newParticles.length });

    // Delay background effects to improve LCP
    const timer = setTimeout(() => {
      setShowBackgroundEffects(true);
      logPerformance("Background effects enabled");
    }, 2000); // Increased delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-luxury min-h-screen">
      {/* Minimal Floating Particles - Static positioning */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-amber-400/10 to-amber-600/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <HeroSection
        showBackgroundEffects={showBackgroundEffects}
        onOpenOfferCreator={() => setShowOfferCreator(true)}
      />

      {/* Lazy loaded sections with Suspense */}
      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <PartnersStrip />
        <CaseStudyFeatureSection />
        <BenefitsSection />
        <StepsSection />
        <BeforeAfterTransformationSection />
        <TestimonialsSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <FAQSection />
      </Suspense>

      <FinalCTASection />

      {/* Offer Creator Modal */}
      <OfferCreatorModal
        isOpen={showOfferCreator}
        onClose={() => setShowOfferCreator(false)}
      />
    </div>
  );
}

function HeroSection({
  showBackgroundEffects,
  onOpenOfferCreator,
}: {
  showBackgroundEffects: boolean;
  onOpenOfferCreator: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isInView) {
      logPerformance("Hero section in view");
    }
  }, [isInView]);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-black"
    >
      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        {/* Main Content - Left Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-left">
            {/* Trust Indicators - Above Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-wrap gap-4 mb-6 text-amber-400/80 text-sm"
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>10.000+ Posluženih Zalogaja</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-amber-400" />
                <span>5.0 ⭐ Google Reviews</span>
              </div>
              {/* <div className="flex items-center gap-2"><Award className="w-5 h-5" /><span>100% Zadovoljstvo Klijenata</span></div> */}
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-luxury leading-tight"
            >
              Premium catering &
              <span className="text-lucury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-3">
                organizator događanja
              </span>
            </motion.h1>

            {/* Premium Badge - Below Title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <Crown className="w-4 h-4 text-amber-400" />
                <span className="text-amber-400 font-medium uppercase tracking-wider text-xs">
                  Sarajevo Elite Event Partner
                </span>
              </div>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-xl md:text-2xl text-amber-400/90 mb-8 max-w-2xl leading-relaxed"
            >
              Organizujte savršen event u Sarajevu u 3 jednostavna koraka. Od
              intimnih proslava do korporativnih događaja.
            </motion.p>

            {/* CTA Buttons - Proper Positioning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenOfferCreator}
                className="btn-premium text-base px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 flex-1"
              >
                <Crown className="inline mr-2 h-4 w-4" />
                Kreirajte Ponudu
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-outline-premium text-base px-5 py-3 rounded-full font-semibold transition-all duration-300 flex-1"
              >
                <Phone className="inline mr-2 h-4 w-4" />
                Pozovite Odmah
              </motion.button>
            </motion.div>

            {/* Additional Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="text-amber-400/70 text-sm"
            >
              <p>
                Besplatne konsultacije • Brza dostava • Garantovano zadovoljstvo
              </p>
            </motion.div>
          </div>

          {/* Right Column - Gallery Showcase */}
          <div className="text-center">
            {/* Gallery Slideshow - Simplified */}
            <div className="relative mb-6">
              <div className="relative h-96 md:h-[500px] w-full max-w-lg mx-auto">
                {[
                  {
                    src: "/gallery/Ketering/Ketering_Hullk-15.jpg",
                    alt: "Premium catering setup",
                  },
                  {
                    src: "/gallery/Ketering/Ketering_Hullk-17.jpg",
                    alt: "Elegant table arrangement",
                  },
                  {
                    src: "/gallery/Ketering/Ketering_Hullk-22.jpg",
                    alt: "Professional catering service",
                  },
                  {
                    src: "/gallery/Ketering/Ketering_Hullk-8.jpg",
                    alt: "Beautiful food presentation",
                  },
                ].map((image, index) => (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      scale: currentSlide === index ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`absolute inset-0 ${
                      currentSlide === index ? "z-10" : "z-0"
                    }`}
                  >
                    <div className="relative h-full w-full rounded-xl overflow-hidden glass-card">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 500px"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                  </motion.div>
                ))}

                {/* Fixed Button Overlay - Always Visible */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 pointer-events-none">
                  {/* Fixed Label - Same Style as Other Sections */}
                  <div className="absolute top-4 left-4 z-30">
                    <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full border border-amber-400/30">
                      <span className="text-sm font-medium">
                        5000+ slika u galeriji
                      </span>
                    </div>
                  </div>

                  {/* Button - Moved Lower */}
                  <div className="mt-16">
                    <Link href="/galerija">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-premium text-base px-6 py-3 rounded-full font-semibold flex items-center gap-2 group pointer-events-auto"
                      >
                        <span>Pogledajte galeriju</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev === 0 ? 3 : prev - 1))
                }
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev === 3 ? 0 : prev + 1))
                }
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-amber-400 w-6"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterTransformationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const transformationSlides = [
    {
      id: 1,
      beforeImage: "/amateur/amateur1.jpg",
      afterImage: "/gallery/Ketering/Ketering_Hullk-15.jpg",
      beforeText: "Vaš Event Prije",
      afterText: "Vaš Event Poslije",
      emotionalOverlay: "Transformišite običan catering u premium iskustvo",
      numericalResult: "10x Elegantniji",
      description: "Od običnog obroka do nezaboravnog ukusa",
    },
    {
      id: 2,
      beforeImage: "/amateur/amateur2.jpg",
      afterImage: "/gallery/Ketering_board/Ketering_Investitori-21.jpg",
      beforeText: "Običan Catering",
      afterText: "Premium Event",
      emotionalOverlay: "Uzdignite vaš event na elite nivo",
      numericalResult: "5x Više Komentiran",
      description: "Vaši gosti će govoriti o vašem eventu mjesecima",
    },
    {
      id: 3,
      beforeImage: "/amateur/amateur3.jpg",
      afterImage: "/gallery/Ketering_Hulk/HulkApps_Ketering-12.jpg",
      beforeText: "Stres oko planiranja",
      afterText: "Besbrižno uživanje",
      emotionalOverlay: "Prebacite sve brige na nas",
      numericalResult: "100% Bez Stresa",
      description: "Vi se opuštate, mi se brinemo za sve",
    },
    {
      id: 4,
      beforeImage: "/amateur/amateur4.jpg",
      afterImage: "/gallery/Ketering_board_v2/Ketering_Investitori_v2-32.jpg",
      beforeText: "Običan ukus",
      afterText: "Nezaboravan ukus",
      emotionalOverlay: "Svaki zalogaj je umjetničko djelo",
      numericalResult: "50+ Premium Opcija",
      description: "Personalizovani meni za vaše najposebnije trenutke",
    },
    {
      id: 5,
      beforeImage: "/amateur/amateur5.jpg",
      afterImage: "/gallery/Ketering/Ketering_Hullk-21.jpg",
      beforeText: "Običan event",
      afterText: "Premium iskustvo",
      emotionalOverlay: "Vaš event postaje legenda",
      numericalResult: "98% Zadovoljstvo",
      description: "Garantovano nezaboravno iskustvo",
    },
  ];

  useEffect(() => {
    if (isInView) {
      logPerformance("Before/After Transformation section in view");
    }
  }, [isInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformationSlides.length);
    }, 6000); // 6 sekundi po slide-u

    return () => clearInterval(interval);
  }, [transformationSlides.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section ref={ref} className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Vaš catering ne treba izgledati obično
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto"></p>
        </motion.div>

        {/* Transformation Slideshow */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative"
            >
              {/* Background Pair: Before and After */}
              <div className="relative rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 h-96 md:h-[500px]">
                  {/* Before Image */}
                  <div className="glass-card rounded-2xl p-2 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" />
                    <Image
                      src={transformationSlides[currentSlide].beforeImage}
                      alt={`Before ${currentSlide + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      priority={currentSlide === 0}
                    />
                    {/* label moved to top-right, larger size */}
                    <div className="absolute top-4 right-4 glass-card px-4 py-2 rounded-full text-sm md:text-base font-semibold text-amber-400">
                      Obicni catering
                    </div>
                  </div>

                  {/* After Image */}
                  <div className="glass-card rounded-2xl p-2 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" />
                    <Image
                      src={transformationSlides[currentSlide].afterImage}
                      alt={`After ${currentSlide + 1}`}
                      fill
                      className="object-cover rounded-xl"
                      priority={currentSlide === 0}
                    />
                    {/* label larger */}
                    <div className="absolute top-4 left-4 glass-card px-4 py-2 rounded-full text-sm md:text-base font-semibold text-amber-400">
                      Mali Princ Catering
                    </div>
                  </div>
                </div>

                {/* Overlays Content intentionally removed per request (only tags remain) */}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {transformationSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-amber-400 scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to transformation slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              handleSlideChange(
                (currentSlide - 1 + transformationSlides.length) %
                  transformationSlides.length
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous transformation slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() =>
              handleSlideChange(
                (currentSlide + 1) % transformationSlides.length
              )
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next transformation slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-1 bg-black/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-400 to-amber-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      number: "01",
      title: "Odaberite paket",
      description:
        "Izaberite paket koji odgovara vašim potrebama i preferencijama",
    },
    {
      number: "02",
      title: "Dogovorimo sve detalje",
      description:
        "Da, ispunjavamo želje! I prilagođavamo se prema vašem budžetu",
    },
    {
      number: "03",
      title: "Uživajte u našoj usluzi",
      description: "Ipak nemamo treći korak",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }} // Reduced duration
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Kako Funkcionira?
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Jednostavan proces u 3 koraka koji vam omogućava da uživate bez
            brige
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }} // Reduced duration and delay
              className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300"
            >
              <div className="text-6xl font-bold text-luxury mb-4 opacity-20">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-luxury">
                {step.title}
              </h3>
              <p className="text-elegant">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Static counters for better performance
  const clientsCounter = { value: "5000+", ref: () => {} };
  const experienceCounter = { value: "15+", ref: () => {} };
  const satisfactionCounter = { value: "98%", ref: () => {} };
  const availabilityCounter = { value: "24/7", ref: () => {} };

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/gallery/Ketering/Ketering_Hullk-15.jpg')",
            filter: "brightness(0.2)",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }} // Reduced duration
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury">
              Mi smo vaša nova omiljena adresa za
            </h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <Utensils className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-luxury">
                    Preukusne zalogaje
                  </h3>
                  <p className="text-elegant">
                    Svaki obrok pripremljen s ljubavlju i pažnjom
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-luxury">
                    Nutricionističku prehranu
                  </h3>
                  <p className="text-elegant">
                    Zdravo i ukusno za vaše svakodnevne potrebe
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-luxury">
                    Organizaciju svih vrsta proslava
                  </h3>
                  <p className="text-elegant">
                    Bez stresa i brige, mi se brinemo za sve
                  </p>
                </div>
              </div>
            </div>
            <button className="btn-premium mt-8">Saznajte Više O Nama</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }} // Reduced duration
            className="grid grid-cols-2 gap-8"
          >
            <div className="glass-card rounded-lg p-6 text-center">
              <div
                ref={clientsCounter.ref}
                className="text-3xl md:text-4xl font-bold text-luxury mb-2"
              >
                {clientsCounter.value}
              </div>
              <p className="text-elegant">Zadovoljnih Klijenata</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <div
                ref={experienceCounter.ref}
                className="text-3xl md:text-4xl font-bold text-luxury mb-2"
              >
                {experienceCounter.value}
              </div>
              <p className="text-elegant">Godina Iskustva</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <div
                ref={satisfactionCounter.ref}
                className="text-3xl md:text-4xl font-bold text-luxury mb-2"
              >
                {satisfactionCounter.value}
              </div>
              <p className="text-elegant">Zadovoljstvo Klijenata</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">
                24/7
              </div>
              <p className="text-elegant">Dostupnost</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Crown,
      title: "Office Food",
      description:
        "Za one koji hranu naručuju na poslu. Svježu, ukusnu i na vrijeme.",
    },
    {
      icon: ChefHat,
      title: "Catering Organizator",
      description: "Kompletna usluga za vaše najbitnije trenutke i proslave.",
    },
    {
      icon: Sparkles,
      title: "Luksuzni Eventi",
      description: "Planiranje i izvršavanje nezaboravnih događanja.",
    },
    {
      icon: Utensils,
      title: "Personalizirani Meni",
      description: "Meni kreiran prema vašim željama i potrebama.",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/gallery/Ketering_Hulk/HulkApps_Ketering-12.jpg')",
            filter: "brightness(0.25)",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }} // Reduced duration
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Naše Premium Usluge
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Otkrijte savršenstvo kulinarskih usluga prilagođenih vašim potrebama
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }} // Reduced duration and delay
              className="glass-card rounded-lg p-8 text-center" // Removed hover effects
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-luxury">
                {service.title}
              </h3>
              <p className="text-elegant">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Award,
      title: "Kvalitet Nagrađen",
      description: "Prepoznato savršenstvo u kulinarskim uslugama",
    },
    {
      icon: Clock,
      title: "Tačnost Servisa",
      description: "Besprijekorna koordinacija za vaše događaje",
    },
    {
      icon: Users,
      title: "Profesionalni Tim",
      description: "Iskusno osoblje posvećeno vašem zadovoljstvu",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-premium-card relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Zašto Odabrati Mali Princ
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Iskusite razliku koju čine pažnja na detalje i strast za savršenstvo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="text-amber-400 mb-6 flex justify-center">
                <feature.icon className="h-12 w-12" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-luxury">
                {feature.title}
              </h3>
              <p className="text-elegant text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyFeatureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      logPerformance("VIP Partners section in view");
    }
  }, [isInView]);

  const vipPackages = [
    {
      key: "office",
      icon: Utensils,
      title: "OFFICE FOOD",
      blurb: "Topli dnevni obroci na vašu adresu",
      href: "/paketi/office-food",
      basePrice: 25,
      minPeople: 5,
      features: [
        "Svježe pripremljen ukusan i topao obrok",
        "Dostavka u tačno dogovorenom vremenu",
        "Mjesečni meni prilagođen vašim željama",
      ],
      image: "/gallery/Ketering_board_v2/Ketering_Investitori_v2-4.jpg",
    },
    {
      key: "eventi",
      icon: Trophy,
      title: "EVENTI",
      blurb: "Korporativni i protokolarni eventi",
      href: "/paketi/catering-za-evente",
      basePrice: 100,
      minPeople: 20,
      features: [
        "Meni po mjeri za vaš event",
        "Profesionalna koordinacija",
        "Premium dekoracija i setup",
      ],
      image: "/gallery/Ketering_board/Ketering_Investitori-21.jpg",
    },
    {
      key: "vjencanja",
      icon: Heart,
      title: "VJENČANJA",
      blurb: "Bez stresa — buffet ili posluživanje",
      href: "/paketi/catering-za-vjencanja",
      basePrice: 70,
      minPeople: 30,
      features: [
        "Svečani meni (buffet ili posluživanje)",
        "Desertna zona i torta (opcija)",
        "Dekoracija stolova i šatora",
      ],
      image: "/gallery/Ketering_board_v2/Ketering_Investitori_v2-27.jpg",
    },
    {
      key: "rodjendani",
      icon: Cake,
      title: "ROĐENDANI",
      blurb: "Tematska dekoracija, kolači i zalogaji",
      href: "/paketi/catering-za-rodjendane",
      basePrice: 50,
      minPeople: 15,
      features: [
        "Tematska dekoracija",
        "Kolači i zalogaji za sve uzraste",
        "Stolovi i stolice uključeni",
      ],
      image: "/gallery/Ketering_Hulk/HulkApps_Ketering-11.jpg",
    },
    {
      key: "djevojacko",
      icon: Sparkles,
      title: "DJEVOJAČKO VEČE",
      blurb: "Fotogeničan setup i finger food",
      href: "/paketi/catering-za-djevojacko-vece",
      basePrice: 59,
      minPeople: 12,
      features: [
        "Fotogeničan setup",
        "Finger food i ženski vibe",
        "Teme i floristika",
      ],
      image: "/gallery/Ketering_board_v2/Ketering_Investitori_v2-10.jpg",
    },
    {
      key: "baby",
      icon: Baby,
      title: "BABY SHOWER",
      blurb: "Pastelne dekoracije i candy bar",
      href: "/paketi/catering-za-baby-shower",
      basePrice: 54,
      minPeople: 12,
      features: [
        "Pastelne dekoracije",
        "Candy bar i emotivna atmosfera",
        "Gift box i voćni aranžmani",
      ],
      image: "/gallery/Ketering_board_v2/Ketering_Investitori_v2-2.jpg",
    },
    {
      key: "godisnjice",
      icon: Gift,
      title: "GODIŠNJICE",
      blurb: "Romantični setup i luksuzno posuđe",
      href: "/paketi/catering-za-godisnjice",
      basePrice: 63,
      minPeople: 10,
      features: [
        "Romantični setup za dvoje",
        "Svijeće i luksuzno posuđe",
        "Mali gathering opcija",
      ],
      image: "/gallery/Ketering_Hulk/HulkApps_Ketering-10.jpg",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-36 md:py-40 px-6 relative overflow-visible bg-premium-card"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Odaberite paket
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto">
            Posebne cijene i prioritetna usluga za naše najvjernije klijente.
            Ponuda vrijedi samo za mjesec Septembar.
          </p>
        </motion.div>

        {/* Horizontal Scrollable Carousel */}
        <div className="relative mt-8 mb-20">
          <div className="flex gap-6 overflow-x-auto overflow-y-visible snap-x snap-mandatory scroll-smooth pt-16 pb-12">
            {vipPackages.map((pkg, index) => {
              const discounted = Math.round(pkg.basePrice * 0.6);
              return (
                <motion.div
                  key={pkg.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative group snap-start min-w-[300px] md:min-w-[360px] flex-shrink-0"
                >
                  {/* Unified top-left label style */}
                  <div className="absolute top-2 left-2 z-40">
                    {pkg.key === "eventi" && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        -30% za VIP partnere
                      </span>
                    )}
                    {pkg.key === "vjencanja" && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        Najpopularnije
                      </span>
                    )}
                    {pkg.key === "office" && (
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-600 text-black px-3 py-1 rounded-full text-xs font-bold shadow-md">
                        Uskoro
                      </span>
                    )}
                  </div>

                  <div
                    className={`glass-card relative rounded-2xl p-6 border border-amber-400/20 min-h-[560px]`}
                  >
                    {/* Package Image */}
                    {pkg.image && (
                      <div
                        className={`relative h-32 mb-4 rounded-lg overflow-hidden ${
                          pkg.key === "office" ? "grayscale" : ""
                        }`}
                      >
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      </div>
                    )}

                    {/* Package Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                        <pkg.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-luxury">
                          {pkg.title}
                        </h3>
                        <p className="text-elegant text-sm">{pkg.blurb}</p>
                      </div>
                    </div>

                    {/* Features - Using real data */}
                    <div className="space-y-2 mb-6">
                      {pkg.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center gap-2 text-sm text-elegant"
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA - Waitlist for Office Food */}
                    <div className="text-center pt-2">
                      <Link
                        href={pkg.key === "office" ? "/kontakt" : pkg.href}
                        className="btn-premium text-base px-8 py-3 rounded-full font-semibold inline-flex items-center justify-center w-full"
                      >
                        {pkg.key === "office" ? "Obavijesti me" : "Odaberi"}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View All Packages CTA */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/paketi" className="btn-premium text-base px-8 py-4">
              Pogledajte sve pakete →
            </Link>
            <Link
              href="/kontakt"
              className="btn-outline-premium text-base px-8 py-4"
            >
              Zatražite VIP ponudu
            </Link>
          </div>
          <p className="text-sm text-elegant mt-4 opacity-80">
            * VIP partneri imaju prioritet u rezervacijama i posebne uslovе
          </p>
        </div>
      </div>
    </section>
  );
}
