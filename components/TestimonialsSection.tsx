"use client";

import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight, Users } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  originalText?: string;
  date: string;
  verified: boolean;
  highlight?: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sema Corbo",
    role: "Event Organizer",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    text: "Apsolutno ukusna hrana i besprijekorna usluga! ✨ Toplo preporučujem svima koji razmišljaju o organizaciji bilo kakvog događaja!",
    originalText:
      "Absolutely delicious food and impeccable service! ✨ Would highly recommend to anyone thinking of hosting any type of event!",
    date: "prije 5 dana",
    verified: true,
    highlight: "besprijekorna usluga",
  },
  {
    id: "2",
    name: "Edvin Mulabdic",
    role: "Private Client",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    text: "Naručio sam catering za rođendan, bilo je odlično. Posebno su dobre bile teleće šnicle u sosu. Također su se potrudili i oko bezglutenske porcije. Sve pohvale 😊",
    date: "prije mjesec dana",
    verified: true,
    highlight: "teleće šnicle u sosu",
  },
  {
    id: "3",
    name: "Belma Peskic",
    role: "Corporate Client",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    text: "Uživamo u Mali Princ usluzi kroz naš firmirani catering, i iskreno sam oduševljena svaki put. Hrana je uvijek svježa, super ukusna i prekrasno ukrašena—zaista se vidi koliko ljubavi i truda ulažu u svako jelo.",
    originalText:
      "We've been enjoying Mali Princ by Samra through our company catering, and I'm honestly blown away every time. The food is always fresh, super tasty, and beautifully decorated—it really shows how much love and effort they put into every dish.",
    date: "prije mjesec dana",
    verified: true,
    highlight: "ljubav i trud u svako jelo",
  },
  {
    id: "4",
    name: "Đanin Bečirović",
    role: "Office Manager",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    text: "Nedavno smo koristili Mali Princ za našu firminu večeru i iskreno, bio je to hit! Bilo je toliko ukusne hrane, ali čokoladna baklava je bila definitivno ono što se izdvojilo – ljudi su je hvalili!",
    originalText:
      "We recently used Mali Princ for our office dinner, and honestly, it was a hit! There was so much delicious food, but the chocolate baklava was a definite standout – people were raving about it!",
    date: "prije mjesec dana",
    verified: true,
    highlight: "čokoladna baklava",
  },
  {
    id: "5",
    name: "Haris Muharemović",
    role: "Local Guide",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    text: "Mali Princ je jedan od, ako ne i najbolji catering servis u Sarajevu. Samra i njen tim ne samo da spremaju preukusnu i raznovrsnu hranu, već istu dostave na vrijeme, po dogovoru, sa širokim osmijehom na licu.",
    date: "prije mjesec dana",
    verified: true,
    highlight: "najbolji catering servis u Sarajevu",
  },
  {
    id: "6",
    name: "Pavel Pavelka",
    role: "Business Client",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    text: "Umijece, stil i profesionalnost. Tople preporuke.",
    date: "prije mjesec dana",
    verified: true,
    highlight: "umijece, stil i profesionalnost",
  },
  {
    id: "7",
    name: "Elvedin Šatara",
    role: "Private Event",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    text: "Sve preporuke za catering Mali Princ. Nadmašili su sva naša očekivanja, od samih ideja za organizaciju, do savršene hrane i nenadmašne dekoracije. Prava mala bajka.",
    date: "prije mjesec dana",
    verified: true,
    highlight: "nadmašili sva očekivanja",
  },
  {
    id: "8",
    name: "Marina Nikolas Becirovic",
    role: "Corporate Client",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    text: "Ne mogu dovoljno reći lijepih stvari o ovoj catering kompaniji! Od početka do kraja, iskustvo je bilo besprijekorno, profesionalno i stvarno impresivno. Koristimo ih za sve naše korporativne događaje!",
    originalText:
      "I can't say enough great things about this catering company! From start to finish, the experience was seamless, professional, and genuinely impressive. We have used them for all our corporate events, big and small!",
    date: "prije mjesec dana",
    verified: true,
    highlight: "besprijekorno i profesionalno",
  },
];

export default function TestimonialsSection({
  className = "",
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.1),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider">
              Mišljenja Klijenata
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant mb-4">
            Što Kažu Naši
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-2">
              Zadovoljni Klijenti
            </span>
          </h2>

          <p className="text-lg text-amber-400/80 max-w-2xl mx-auto mb-8">
            Preko 50+ recenzija s 5 zvjezdica na Google Reviews potvrđuje našu
            predanost kvaliteti
          </p>

          {/* Overall Rating Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-4 glass-card px-8 py-4 rounded-full"
          >
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <div className="text-elegant">
              <span className="text-2xl font-bold text-amber-400">5.0</span>
              <span className="text-amber-400/70 ml-2">na Google Reviews</span>
            </div>
            <div className="text-amber-400/70">•</div>
            <div className="text-amber-400/70">50+ recenzija</div>
          </motion.div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-amber-400/20">
              <Quote className="w-12 h-12" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 fill-amber-400 text-amber-400 mx-1"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-elegant leading-relaxed mb-8 max-w-4xl mx-auto">
              "{TESTIMONIALS[currentIndex].text}"
            </blockquote>

            {/* Highlight */}
            {TESTIMONIALS[currentIndex].highlight && (
              <div className="inline-block bg-amber-400/10 border border-amber-400/30 rounded-full px-4 py-2 mb-6">
                <span className="text-amber-400 text-sm font-medium">
                  💛 {TESTIMONIALS[currentIndex].highlight}
                </span>
              </div>
            )}

            {/* Author Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 flex items-center justify-center">
                <span className="text-xl font-bold text-amber-400">
                  {TESTIMONIALS[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-elegant text-lg">
                  {TESTIMONIALS[currentIndex].name}
                </div>
                <div className="text-amber-400/70">
                  {TESTIMONIALS[currentIndex].role} •{" "}
                  {TESTIMONIALS[currentIndex].date}
                </div>
                {TESTIMONIALS[currentIndex].verified && (
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-green-400 text-sm">
                      Verified Google Review
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400/10 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-amber-400 w-8"
                    : "bg-amber-400/30 hover:bg-amber-400/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Reviews Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
        >
          {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
            <div
              key={`mini-${testimonial.id}`}
              className="glass-card rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-elegant text-sm mb-4 line-clamp-3">
                "{testimonial.text.substring(0, 100)}..."
              </p>
              <div className="font-medium text-amber-400 text-sm">
                {testimonial.name}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-amber-400/70 mb-6">
            Postanite i vi dio naših zadovoljnih klijenata
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium text-lg px-8 py-4 rounded-full font-semibold"
          >
            Rezerviši Besplatnu Konsultaciju
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
