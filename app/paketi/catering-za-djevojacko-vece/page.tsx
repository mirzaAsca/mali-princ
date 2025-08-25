"use client";

import { motion } from "framer-motion";
import { Sparkles, Phone, Calendar, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CateringDjevojackoVecePage() {
  const includes = [
    "Finger food i mini kolači — 35KM/osobi",
    "Personalizirane kartice za gošće — 10KM/osobi",
    "Tematska dekoracija — 70KM",
    "Set za igru: 'Koliko poznaješ mladu?' — 100KM",
    "Florna postavka — 150KM",
    "Aromatični mirisi — 50KM",
  ];
  const forWho =
    "Za kumu, prijateljice, sestre – sve koje žele veče bez logistike.";
  const example = "Za 5 osoba — 595KM";
  const gallery = [
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2-10.jpg",
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2-13.jpg",
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2-19.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1B1C21] to-[#0F0F0F]">
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,215,0,0.12),transparent_55%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-luxury mb-3">
            Catering za Djevojačko Veče Sarajevo
          </h1>
          <p className="text-elegant max-w-3xl mx-auto">
            Elegantan setup, finger food i dekor — večer za pamćenje.
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <a href="tel:+387603203835" className="btn-premium">
              <Phone className="w-4 h-4 mr-2" />
              Pozovite
            </a>
            <Link href="/kontakt" className="glass-card px-6 py-3">
              <Calendar className="w-4 h-4 inline mr-2" />
              Zatraži ponudu
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Details */}
      <section className="px-4 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-card rounded-2xl p-8 lg:col-span-2">
            <h2 className="text-2xl font-bold text-luxury mb-4">Uključuje</h2>
            <ul className="space-y-2">
              {includes.map((i) => (
                <li key={i} className="flex items-start text-elegant">
                  <Star className="w-4 h-4 text-amber-400 mr-2 mt-0.5" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-luxury mb-2">Za koga</h3>
            <p className="text-elegant mb-4">{forWho}</p>
            <div className="text-sm text-muted-foreground">
              Primjer: {example}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {gallery.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-2xl glass-card"
            >
              <Image
                src={src}
                alt={`Djevojačko veče ${i + 1}`}
                width={800}
                height={600}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Conversion */}
      <section className="px-4 pb-24 text-center">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-luxury mb-3">
            Rezervišite djevojačko veče
          </h2>
          <p className="text-elegant mb-6">
            Kontaktirajte nas za tematske prijedloge i detaljan plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+387603203835" className="btn-premium">
              <Phone className="w-4 h-4 mr-2" />
              Pozovite
            </a>
            <Link href="/kontakt" className="glass-card px-6 py-3">
              <Calendar className="w-4 h-4 inline mr-2" />
              Rezerviši konsultaciju
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
