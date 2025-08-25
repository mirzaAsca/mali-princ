"use client";

import Link from "next/link";
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
  Calendar,
  Heart,
  Gift,
  Baby,
  Cake,
  Trophy,
} from "lucide-react";
import ElegantBackgroundAnimation from "../../components/ElegantBackgroundAnimation";

export default function PaketiPage() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, () => ({
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

      {/* Concise Packages Grid */}
      <PackagesGridSection />

      {/* Why Us */}
      <FeaturesSection />

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
      className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <ElegantBackgroundAnimation />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/assets/images/mali-princ-logo.svg"
              alt="Mali Princ - Paketi"
              width={280}
              height={280}
              className="logo-glow w-48 h-48 md:w-64 md:h-64"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-xl"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-luxury"
        >
          Naši Paketi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl mb-6 text-elegant max-w-4xl mx-auto"
        >
          Pregled svih paketa — kratko, jasno i sa direktnim linkovima na
          detaljne stranice.
        </motion.p>
      </div>
    </section>
  );
}

function PackagesGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const packages = [
    {
      icon: Utensils,
      title: "OFFICE FOOD",
      blurb: "Topli dnevni obroci na vašu adresu, tačno na vrijeme.",
      meta: "Min. 5 osoba · Sarajevo",
      href: "/paketi/office-food",
    },
    {
      icon: Crown,
      title: "CATERING ORGANIZATOR",
      blurb: "Kompletna organizacija i posluživanje hrane za događaje.",
      meta: "Min. 15 osoba · Dekor i osoblje",
      href: "/paketi/catering-organizator",
    },
    {
      icon: Trophy,
      title: "CATERING ZA EVENTE",
      blurb: "Korporativni i protokolarni eventi sa personalizovanim menijem.",
      meta: "Meni po mjeri · Koordinacija",
      href: "/paketi/catering-za-evente",
    },
    {
      icon: Heart,
      title: "CATERING ZA VJENČANJA",
      blurb: "Bez stresa — buffet ili posluživanje, desertna zona i dekor.",
      meta: "Degustacija · Floor manager",
      href: "/paketi/catering-za-vjencanja",
    },
    {
      icon: Cake,
      title: "CATERING ZA ROĐENDANE",
      blurb: "Tematska dekoracija, kolači i zalogaji za sve uzraste.",
      meta: "Sweet & salty · Stolovi/stolice",
      href: "/paketi/catering-za-rodjendane",
    },
    {
      icon: Sparkles,
      title: "DJEV OJAČKO VEČE",
      blurb: "Fotogeničan setup, finger food i ženski vibe.",
      meta: "Teme · Floristika",
      href: "/paketi/catering-za-djevojacko-vece",
    },
    {
      icon: Baby,
      title: "BABY SHOWER",
      blurb: "Pastelne dekoracije, candy bar i emotivna atmosfera.",
      meta: "Gift box · Voćni aranžmani",
      href: "/paketi/catering-za-baby-shower",
    },
    {
      icon: Gift,
      title: "GODIŠNJICE",
      blurb: "Romantični setup za dvoje ili mali gathering.",
      meta: "Svijeće · Luksuzno posuđe",
      href: "/paketi/catering-za-godisnjice",
    },
  ];

  return (
    <section ref={ref} className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-luxury">
            Izaberite Paket
          </h2>
          <p className="text-elegant max-w-2xl mx-auto">
            Sažet pregled paketa — kliknite za detalje, cijene i galeriju.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card rounded-2xl p-6 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <pkg.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center text-luxury mb-2">
                {pkg.title}
              </h3>
              <p className="text-elegant text-center text-sm mb-2">
                {pkg.blurb}
              </p>
              <p className="text-muted-foreground text-center text-xs mb-4">
                {pkg.meta}
              </p>
              <div className="text-center">
                <Link
                  href={pkg.href}
                  className="btn-premium inline-block px-6 py-2 text-sm"
                >
                  Detalji i cijene
                </Link>
              </div>
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
      icon: ChefHat,
      title: "Master Chef Tim",
      description: "15+ godina iskustva u pripremi vrhunskih jela",
    },
    {
      icon: Award,
      title: "Svježe Namirnice",
      description: "Lokalno nabavljene, najkvalitetnije namirnice",
    },
    {
      icon: Users,
      title: "Profesionalni Servis",
      description: "Besprijekorna usluga s pažnjom na svaki detalj",
    },
    {
      icon: Utensils,
      title: "Personalizirani Meni",
      description: "Kreiran prema vašim željama i potrebama",
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
            Zašto Mali Princ
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Ono što nas čini posebnima u svijetu cateringa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-luxury">
                {feature.title}
              </h3>
              <p className="text-elegant">{feature.description}</p>
            </motion.div>
          ))}
        </div>
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
            Spremni za Rezervaciju?
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Kontaktirajte nas za personalnu konsultaciju i prilagođenu ponudu
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
            <Calendar className="inline mr-2 h-5 w-5" />
            Zakažite Konsultaciju
          </button>
        </motion.div>
      </div>
    </section>
  );
}
