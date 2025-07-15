"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Gallery from "../../components/Gallery";
import {
  Camera,
  Star,
  Award,
  Crown,
  ChefHat,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Heart,
  Eye,
} from "lucide-react";

export default function GalerijaPage() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, () => ({
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

      {/* Gallery Section */}
      <GallerySection />

      {/* Stats Section */}
      <StatsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.1),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Mali Princ Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image
                src="/assets/images/mali-princ-logo.svg"
                alt="Mali Princ Logo"
                width={200}
                height={200}
                className="logo-glow w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
              />
              <div className="absolute -inset-4 bg-amber-400/20 rounded-full blur-xl opacity-50" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-elegant mb-6">
            Galerija
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent block">
              Naših Evenata
            </span>
          </h1>

          <p className="text-lg md:text-xl text-amber-400/80 max-w-2xl mx-auto leading-relaxed">
            Otkrijte magiju naših culinarskih kreacija kroz objektiv. Svaki
            event je priča, svako jelo je umjetničko djelo, a svaki trenutak je
            nezaboravan.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-amber-400">
              <Camera className="w-5 h-5" />
              <span>117+ Fotografija</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <Award className="w-5 h-5" />
              <span>4 Kategorije</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <Star className="w-5 h-5" />
              <span>Premium Kvalitet</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-600/10 rounded-full blur-3xl" />
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-elegant mb-4">
            Svaki Event je
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-2">
              Priča za Sebe
            </span>
          </h2>
          <p className="text-amber-400/80 text-lg max-w-2xl mx-auto">
            Od intimnih okupljanja do velikih korporativnih evenata, svaki
            trenutak je savršeno uhvaćen
          </p>
        </motion.div>

        {/* Gallery Component */}
        <Gallery />
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    {
      icon: <Camera className="w-8 h-8" />,
      number: "117+",
      label: "Fotografija",
      description: "U našoj galeriji",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      number: "50+",
      label: "Evenata",
      description: "Uspješno realizovanih",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "5000+",
      label: "Zadovoljnih",
      description: "Gostiju",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "15+",
      label: "Godina",
      description: "Iskustva",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-elegant mb-4">
            Naši Rezultati
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-2">
              Govore za Sebe
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:shadow-gold transition-all duration-300"
            >
              <div className="text-amber-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-elegant mb-2">
                {stat.number}
              </div>
              <div className="text-amber-400 font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-amber-400/70 text-sm">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-elegant mb-4">
            Spremni za Vaš
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-2">
              Nezaboravan Event?
            </span>
          </h2>
          <p className="text-amber-400/80 text-lg max-w-2xl mx-auto mb-8">
            Kontaktirajte nas danas i zajedno ćemo kreirati savršen event koji
            će ostaviti trajno sjećanje
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-amber-400">
              <Phone className="w-5 h-5" />
              <span>+387 60 320 3835</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <Mail className="w-5 h-5" />
              <span>vip@maliprinc.ba</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <MapPin className="w-5 h-5" />
              <span>Novo Sarajevo</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-premium text-lg px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto"
          >
            <Phone className="w-5 h-5" />
            Rezerviši Termin
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
