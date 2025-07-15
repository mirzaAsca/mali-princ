"use client";

import { useState, useEffect } from "react";
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
  Mail,
  MapPin,
} from "lucide-react";
import TestimonialsSection from "../components/TestimonialsSection";
import RecentWorkSection from "../components/RecentWorkSection";
import TrustSection from "../components/TrustSection";
import FAQSection from "../components/FAQSection";
import ElegantBackgroundAnimation from "../components/ElegantBackgroundAnimation";
import RotatingBackgroundSlideshow from "../components/RotatingBackgroundSlideshow";
import { useCountUpWithPlus, useCountUpWithPercent } from "../hooks/useCountUp";

export default function Homepage() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative overflow-hidden bg-luxury min-h-screen">
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20"
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
      <HeroSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Steps Section */}
      <StepsSection />

      {/* Premium Experience Section */}
      <PremiumExperienceSection />

      {/* About Section */}
      <AboutSection />

      {/* Client Success Section */}
      <ClientSuccessSection />

      {/* Recent Work Section */}
      <RecentWorkSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Trust Section */}
      <TrustSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0">
        <RotatingBackgroundSlideshow />
        <ElegantBackgroundAnimation />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full">
            <Crown className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">
              Sarajevo's #1 Premium Catering
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/assets/images/mali-princ-logo.svg"
              alt="Mali Princ - Food and Stories"
              width={400}
              height={400}
              className="logo-glow w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-xl"></div>
          </div>
        </motion.div>

        {/* 5-Star Rating */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <div className="flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-elegant font-medium">5.0</span>
            <span className="text-amber-400/70">•</span>
            <span className="text-amber-400/70 text-sm">
              50+ Google Reviews
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-amber-400/90 max-w-4xl mx-auto leading-relaxed"
        >
          Pravo vrijeme za vašeg privatnog kuhara za svaki dan i organizatora
          svih bitnih dešavanja u 4 koraka
        </motion.p>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-10 text-amber-400/70 text-sm"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>5000+ Zadovoljnih Klijenata</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>15+ Godina Iskustva</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>24/7 Dostupnost</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium text-lg px-10 py-5 rounded-full font-semibold shadow-lg transition-all duration-300"
          >
            <Crown className="inline mr-2 h-5 w-5" />
            Istražite Naše Pakete
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline-premium text-lg px-10 py-5 rounded-full font-semibold transition-all duration-300"
          >
            <Phone className="inline mr-2 h-5 w-5" />
            Pozovite Odmah: 060 320 3835
          </motion.button>
        </motion.div>

        {/* Additional CTA Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 text-amber-400/60 text-sm"
        >
          <p>
            💎 Besplatna konsultacija • 🚀 Brza dostava • ⭐ Garantovano
            zadovoljstvo
          </p>
        </motion.div>
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
        "Da, ispunjavamo želje! Prilagođavamo sve prema vašim željama",
    },
    {
      number: "03",
      title: "Iskoristite uštedene sate",
      description: "Uživajte u uštedenom vremenu za vas i vaše najbliže",
    },
    {
      number: "04",
      title: "Ipak nemamo četvrtog koraka",
      description: "Preporuka: Uživate u našoj usluzi",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Kako Funkcionira?
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Jednostavan proces u 4 koraka koji vam omogućava da uživate bez
            brige
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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

  // Animated counters
  const clientsCounter = useCountUpWithPlus(5000, 2500);
  const experienceCounter = useCountUpWithPlus(15, 2000);
  const satisfactionCounter = useCountUpWithPercent(98, 2200);
  const availabilityCounter = { value: "24/7", ref: () => {} }; // Static value

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
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="glass-card rounded-lg p-6 text-center group hover:shadow-gold transition-all duration-300">
              <div
                ref={clientsCounter.ref}
                className="text-3xl md:text-4xl font-bold text-luxury mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                {clientsCounter.value}
              </div>
              <p className="text-elegant">Zadovoljnih Klijenata</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center group hover:shadow-gold transition-all duration-300">
              <div
                ref={experienceCounter.ref}
                className="text-3xl md:text-4xl font-bold text-luxury mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                {experienceCounter.value}
              </div>
              <p className="text-elegant">Godina Iskustva</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center group hover:shadow-gold transition-all duration-300">
              <div
                ref={satisfactionCounter.ref}
                className="text-3xl md:text-4xl font-bold text-luxury mb-2 group-hover:scale-110 transition-transform duration-300"
              >
                {satisfactionCounter.value}
              </div>
              <p className="text-elegant">Zadovoljstvo Klijenata</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center group hover:shadow-gold transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2 group-hover:scale-110 transition-transform duration-300">
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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
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
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300"
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

function PremiumExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/gallery/Ketering_board/Ketering_Investitori-15.jpg"
                alt="Premium Catering Experience"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 glass-card rounded-lg p-4">
                <div className="text-2xl font-bold text-luxury">500+</div>
                <div className="text-amber-400/80 text-sm">
                  Uspješnih Evenata
                </div>
              </div>

              <div className="absolute top-6 right-6 glass-card rounded-lg p-4">
                <div className="text-2xl font-bold text-luxury">24h</div>
                <div className="text-amber-400/80 text-sm">Express Dostava</div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full">
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
                Premium Iskustvo
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-luxury leading-tight">
              Svaki Detalj je
              <span className="text-amber-400 ml-2">Savršen</span>
            </h2>

            <p className="text-xl text-elegant leading-relaxed">
              Od izbora najfinijih namirnica do poslednjeg detalja prezentacije
              - mi stvaramo kulinarske doživljaje koji ostaju u pamćenju zauvek.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-luxury mb-2">
                    Majstorska Priprema
                  </h3>
                  <p className="text-elegant">
                    Naši kuvari sa međunarodnim iskustvom stvaraju jela koja su
                    prava umetnička dela.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-luxury mb-2">
                    Elegantna Prezentacija
                  </h3>
                  <p className="text-elegant">
                    Svaki tanjir je priča za sebe - vizuelno zadovoljstvo koje
                    prethodi ukusnom.
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-premium text-lg px-8 py-4">
              <Star className="inline mr-2 h-5 w-5" />
              Rezervišite Premium Iskustvo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ClientSuccessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clientStories = [
    {
      image: "/gallery/Ketering_board/Ketering_Investitori-10.jpg",
      title: "Korporativni Event",
      description: "Organizacija za 200+ gostiju uz besprekoran servis",
      client: "Tech Company Sarajevo",
    },
    {
      image: "/gallery/Ketering_board/Ketering_Investitori-25.jpg",
      title: "Ekskluzivna Proslava",
      description: "Intiman event sa premium menijem i white glove servisom",
      client: "Privatni Klijent",
    },
    {
      image: "/gallery/Ketering_board/Ketering_Investitori-20.jpg",
      title: "Business Meeting",
      description: "Poslovni ručak sa menijem prilagođenim dijetnim potrebama",
      client: "Investment Fund",
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 bg-premium-card relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">
              Naši Klijenti
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
            Priče
            <span className="text-amber-400 ml-2">Zadovoljstva</span>
          </h2>

          <p className="text-xl text-elegant max-w-3xl mx-auto">
            Svaki event je nova prilika da pokažemo zašto su nas klijenti birali
            više od 5000 puta za svoje najvažnije trenutke.
          </p>
        </motion.div>

        {/* Client Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card rounded-xl overflow-hidden group hover:shadow-gold transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {story.title}
                  </h3>
                  <p className="text-amber-400/90 text-sm">{story.client}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-elegant leading-relaxed mb-4">
                  {story.description}
                </p>

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-amber-400/70 text-sm">
                    Perfektan rezultat
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-elegant mb-6">
            Spremni ste postati deo naše liste zadovoljnih klijenata?
          </p>
          <button className="btn-premium text-lg px-8 py-4">
            <Phone className="inline mr-2 h-5 w-5" />
            Počnimo Planiranje Vašeg Eventa
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            Stupite u Kontakt
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Spremni ste kreirati nezaboravno kulinarske iskustvo? Razgovarajmo o
            vašoj viziji
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.a
            href="tel:+38760320385"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300 block"
          >
            <div className="text-amber-400 mb-4 flex justify-center">
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-luxury">
              Pozovite Nas
            </h3>
            <p className="text-elegant">+387 60 320 3835</p>
          </motion.a>

          <motion.a
            href="mailto:vip@maliprinc.ba"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300 block"
          >
            <div className="text-amber-400 mb-4 flex justify-center">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-luxury">
              Pošaljite Email
            </h3>
            <p className="text-elegant">vip@maliprinc.ba</p>
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300 block"
          >
            <div className="text-amber-400 mb-4 flex justify-center">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-luxury">
              Posjetite Nas
            </h3>
            <p className="text-elegant">Novo Sarajevo, Šipad Building</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <button className="btn-premium text-lg px-8 py-4">
            <Mail className="inline mr-2 h-5 w-5" />
            Započnite Svoje Kulinarske Putovanje
          </button>
        </motion.div>
      </div>
    </section>
  );
}
