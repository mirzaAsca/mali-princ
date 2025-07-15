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
  Heart,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import ElegantBackgroundAnimation from "../../components/ElegantBackgroundAnimation";

export default function ONamaPage() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, () => ({
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

      {/* Story Section */}
      <StorySection />

      {/* Mission Section */}
      <MissionSection />

      {/* Values Section */}
      <ValuesSection />

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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1)_0%,transparent_50%)] animate-pulse"></div>
        <ElegantBackgroundAnimation />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <Image
              src="/assets/images/mali-princ-logo.svg"
              alt="Mali Princ - O nama"
              width={320}
              height={320}
              className="logo-glow w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-amber-600/20 blur-xl"></div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-luxury"
        >
          O Nama
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 text-elegant max-w-4xl mx-auto"
        >
          Mali Princ – catering tim specijaliziran za ljude koji nemaju vremena
          za komplikacije, ali žele da svaki obrok bude ukusan, a događaj bez
          stresa
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="btn-premium text-lg px-8 py-4">
            <Heart className="inline mr-2 h-5 w-5" />
            Naša Priča
          </button>
          <button className="btn-outline-premium text-lg px-8 py-4">
            <Phone className="inline mr-2 h-5 w-5" />
            Kontaktirajte Nas
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury">
              Naša Priča & Misija
            </h2>
            <p className="text-lg text-elegant mb-6 leading-relaxed">
              Sve je počelo s jednostavnom idejom: pružiti ljudima više od
              obroka – pružiti im mir i pouzdanost u svakodnevnom životu.
            </p>
            <p className="text-lg text-elegant mb-6 leading-relaxed">
              Uočili smo koliko stresa može izazvati nepravovremena dostava,
              netačne narudžbe i opći haos u organizaciji obroka ili događaja.
              Odlučili smo to promijeniti.
            </p>
            <p className="text-lg text-elegant mb-8 leading-relaxed">
              Naša misija je da svaki korisnik osjeća kao da ima lični tim za
              hranu, dekor i logistiku, koji mu štedi vrijeme, preuzima
              odgovornost i impresionira goste.
            </p>
            <button className="btn-premium">Saznajte Više</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">
                2009
              </div>
              <p className="text-elegant">Godina Osnivanja</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">
                15+
              </div>
              <p className="text-elegant">Godina Iskustva</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">
                5000+
              </div>
              <p className="text-elegant">Zadovoljnih Klijenata</p>
            </div>
            <div className="glass-card rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-luxury mb-2">
                98%
              </div>
              <p className="text-elegant">Zadovoljstvo Klijenata</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-4 bg-premium-card relative">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury">
            Zašto to radimo?
          </h2>
          <p className="text-2xl text-elegant max-w-4xl mx-auto leading-relaxed">
            Jer znamo kako se osjećaš kad si opet ti ta osoba koja mora
            „spašavati stvar". I zato smo odlučili da ti to više nikad ne budeš.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-lg p-12 max-w-4xl mx-auto"
        >
          <div className="text-amber-400 mb-6 flex justify-center">
            <Crown className="h-16 w-16" />
          </div>
          <h3 className="text-3xl font-bold mb-6 text-luxury">
            Mali Princ nije samo catering
          </h3>
          <p className="text-xl text-elegant leading-relaxed">
            Mali Princ je partner u tvojoj svakodnevnici, proslavi, poslu i
            kući. Mi smo tu da preuzimamo odgovornost i omogućimo ti da se
            fokusiraš na ono što je stvarno važno.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const values = [
    {
      icon: Award,
      title: "Izvrsnost",
      description:
        "Težimo savršenstvu u svakom detalju naših usluga, od izbora namirnica do finalne prezentacije.",
    },
    {
      icon: Heart,
      title: "Strast",
      description:
        "Ljubav prema kulinarstvu i zadovoljstvo naših klijenata su pokretačka snaga svega što radimo.",
    },
    {
      icon: Users,
      title: "Povezanost",
      description:
        "Gradimo dugotrajne odnose s klijentima kroz povjerenje, razumijevanje i posvećenost.",
    },
    {
      icon: Sparkles,
      title: "Inovacija",
      description:
        "Konstantno unapređujemo naše usluge i pristupe kako bismo ostali korak ispred očekivanja.",
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
            Naše Vrijednosti
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Principi koji nas vode u svakodnevnom radu i koji čine osnovu našeg
            pristupa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300"
            >
              <div className="text-amber-400 mb-6 flex justify-center">
                <value.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-luxury">
                {value.title}
              </h3>
              <p className="text-elegant">{value.description}</p>
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
            Spremni ste za iskustvo bez stresa?
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Kontaktirajte nas i dozvolite nam da se pobrinemo za sve
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
            <Heart className="inline mr-2 h-5 w-5" />
            Postanite Dio Mali Princ Porodice
          </button>
        </motion.div>
      </div>
    </section>
  );
}
