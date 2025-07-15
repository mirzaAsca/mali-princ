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
  Calendar,
  Send,
  MessageCircle,
} from "lucide-react";
import ElegantBackgroundAnimation from "../../components/ElegantBackgroundAnimation";

export default function KontaktPage() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 35 }, () => ({
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

      {/* Contact Info Section */}
      <ContactInfoSection />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Location Section */}
      <LocationSection />
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
              alt="Mali Princ - Kontakt"
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
          Kontakt
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 text-elegant max-w-4xl mx-auto"
        >
          Kontaktirajte nas i dozvolite nam da se pobrinemo za sve. Vjerujte
          našem iskustvu i stručnosti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="btn-premium text-lg px-8 py-4">
            <Phone className="inline mr-2 h-5 w-5" />
            Pozovite Nas
          </button>
          <button className="btn-outline-premium text-lg px-8 py-4">
            <Mail className="inline mr-2 h-5 w-5" />
            Pošaljite Email
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function ContactInfoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactMethods = [
    {
      icon: Phone,
      title: "Pozovite Nas",
      description: "Direktna linija za brze upite",
      contact: "+387 60 320 3835",
      subtext: "Dostupno 24/7 za hitne slučajeve",
      action: "tel:+38760320385",
    },
    {
      icon: Mail,
      title: "Pošaljite Email",
      description: "Za detaljne upite i rezervacije",
      contact: "vip@maliprinc.ba",
      subtext: "Odgovaramo u roku od 2 sata",
      action: "mailto:vip@maliprinc.ba",
    },
    {
      icon: MapPin,
      title: "Posjetite Nas",
      description: "Naša lokacija u Sarajevu",
      contact: "Novo Sarajevo, Šipad Building",
      subtext: "Radnim danima 09:00 - 18:00",
      action: "#",
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
            Kako Nas Možete Kontaktirati
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Odaberite način komunikacije koji vam najbolje odgovara
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300 block"
            >
              <div className="text-amber-400 mb-6 flex justify-center">
                <method.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-luxury">
                {method.title}
              </h3>
              <p className="text-elegant mb-4">{method.description}</p>
              <div className="bg-luxury/20 rounded-lg p-4 mb-4">
                <p className="text-luxury font-semibold">{method.contact}</p>
              </div>
              <p className="text-muted-foreground text-sm">{method.subtext}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 px-4 bg-premium-card relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Pošaljite Upit
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Popunite formu i naš tim će vam se javiti u najkraćem mogućem roku
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-lg p-8"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-luxury font-semibold mb-2">
                  Ime i Prezime *
                </label>
                <input
                  type="text"
                  className="w-full p-4 bg-luxury/10 border border-luxury/20 rounded-lg text-elegant focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Vaše ime i prezime"
                />
              </div>
              <div>
                <label className="block text-luxury font-semibold mb-2">
                  Email Adresa *
                </label>
                <input
                  type="email"
                  className="w-full p-4 bg-luxury/10 border border-luxury/20 rounded-lg text-elegant focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="vasa@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-luxury font-semibold mb-2">
                  Broj Telefona *
                </label>
                <input
                  type="tel"
                  className="w-full p-4 bg-luxury/10 border border-luxury/20 rounded-lg text-elegant focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="+387 60 123 456"
                />
              </div>
              <div>
                <label className="block text-luxury font-semibold mb-2">
                  Tip Događaja
                </label>
                <select className="w-full p-4 bg-luxury/10 border border-luxury/20 rounded-lg text-elegant focus:border-amber-400 focus:outline-none transition-colors">
                  <option>Odaberite tip događaja</option>
                  <option>Vjenčanje</option>
                  <option>Rođendan</option>
                  <option>Korporativni Event</option>
                  <option>Djevojačko Veče</option>
                  <option>Baby Shower</option>
                  <option>Godišnjica</option>
                  <option>Office Food</option>
                  <option>Ostalo</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-luxury font-semibold mb-2">
                  Datum Događaja
                </label>
                <input
                  type="date"
                  className="w-full p-4 bg-luxury/10 border border-luxury/20 rounded-lg text-elegant focus:border-amber-400 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-luxury font-semibold mb-2">
                  Broj Gostiju
                </label>
                <input
                  type="number"
                  className="w-full p-4 bg-luxury/10 border border-luxury/20 rounded-lg text-elegant focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Približan broj gostiju"
                />
              </div>
            </div>

            <div>
              <label className="block text-luxury font-semibold mb-2">
                Poruka *
              </label>
              <textarea
                rows={6}
                className="w-full p-4 bg-luxury/10 border border-luxury/20 rounded-lg text-elegant focus:border-amber-400 focus:outline-none transition-colors resize-none"
                placeholder="Opišite vaše potrebe i želje..."
              ></textarea>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="privacy"
                className="w-5 h-5 text-amber-400 bg-luxury/10 border border-luxury/20 rounded focus:ring-amber-400"
              />
              <label htmlFor="privacy" className="text-elegant">
                Slažem se sa{" "}
                <span className="text-amber-400 cursor-pointer">
                  politikom privatnosti
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn-premium text-lg px-8 py-4 w-full"
            >
              <Send className="inline mr-2 h-5 w-5" />
              Pošaljite Upit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
            Naša Lokacija
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Posjetite nas u srcu Sarajeva za personalnu konsultaciju
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-lg p-8"
          >
            <div className="text-amber-400 mb-6 flex justify-center">
              <MapPin className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-luxury text-center">
              Mali Princ Catering
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-luxury font-semibold">Adresa:</p>
                  <p className="text-elegant">Novo Sarajevo, Šipad Building</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-luxury font-semibold">Radno vrijeme:</p>
                  <p className="text-elegant">
                    Ponedjeljak - Petak: 09:00 - 18:00
                  </p>
                  <p className="text-elegant">Subota: 10:00 - 16:00</p>
                  <p className="text-elegant">Nedjelja: Zatvoreno</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-luxury font-semibold">Telefon:</p>
                  <p className="text-elegant">+387 60 320 3835</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-luxury font-semibold">Email:</p>
                  <p className="text-elegant">vip@maliprinc.ba</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-luxury/20">
              <button className="btn-premium w-full">
                <Calendar className="inline mr-2 h-5 w-5" />
                Zakažite Susret
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-lg p-8 text-center"
          >
            <div className="text-amber-400 mb-6 flex justify-center">
              <MessageCircle className="h-16 w-16" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-luxury">
              Spremni za Razgovor?
            </h3>
            <p className="text-xl text-elegant mb-8 leading-relaxed">
              Naš tim je spreman da saslušaji vaše ideje i pomoći vam da
              ostvarite savršen događaj. Kontaktirajte nas danas i počnimo
              planiranje.
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-elegant">5.0 od 5</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Ocjena na osnovu 250+ zadovoljnih klijenata
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="btn-premium flex-1">
                <Phone className="inline mr-2 h-4 w-4" />
                Pozovite Nas
              </button>
              <button className="btn-outline-premium flex-1">
                <Mail className="inline mr-2 h-4 w-4" />
                Pošaljite Email
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
