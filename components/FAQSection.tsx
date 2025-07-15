"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Phone,
  Clock,
  Users,
  Utensils,
  Calendar,
  CreditCard,
  MapPin,
} from "lucide-react";

interface FAQSectionProps {
  className?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: any;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "1",
    question: "Koliko unaprijed treba rezervisati catering uslugu?",
    answer:
      "Preporučujemo rezervaciju najmanje 7-14 dana unaprijed za manje događaje, a za veće događaje (vjenčanja, korporativni eventi) 2-4 sedmice ranije. Za hitne slučajeve, kontaktirajte nas direktno - trudićemo se da pronađemo rješenje.",
    category: "Rezervacija",
    icon: Calendar,
  },
  {
    id: "2",
    question: "Koje su opcije plaćanja dostupne?",
    answer:
      "Prihvatamo gotovinu, bankovni transfer, kartice (Visa/Mastercard) i rate na 2-3 mjeseca za veće događaje. Obično se traži akontacija od 30-50% pri rezervaciji, a ostatak se plaća po dostavi.",
    category: "Plaćanje",
    icon: CreditCard,
  },
  {
    id: "3",
    question: "Možete li se prilagoditi posebnim dijetalnim potrebama?",
    answer:
      "Apsolutno! Imamo iskustva sa vegetarijanskim, veganskim, bezglutenskim, halal i ostalim specijalnim dijetama. Molimo da nas informišete o svim alergijama ili ograničenjima prilikom rezervacije.",
    category: "Hrana",
    icon: Utensils,
  },
  {
    id: "4",
    question: "Koje područje dostave pokrivate?",
    answer:
      "Primarno pokrivamo Sarajevo i okolinu (30km radius). Za događaje van ovog područja, moguća je organizacija uz dodatnu naknadu za transport. Kontaktirajte nas za specifičnu lokaciju.",
    category: "Dostava",
    icon: MapPin,
  },
  {
    id: "5",
    question: "Da li osiguravate posude, stolnjak i opremu za serviranje?",
    answer:
      "Da, u cijenu uključujemo sav potreban pribor za jelo, tanjire, čaše, salvete i osnovnu opremu za serviranje. Također možemo osigurati stolnjake, dekoracije i dodatnu opremu po potrebi.",
    category: "Oprema",
    icon: Users,
  },
  {
    id: "6",
    question: "Koliko traje dostava i postavka?",
    answer:
      "Standardna dostava traje 30-60 minuta prije događaja. Postavka hrane i opreme obično traje 15-30 minuta. Za kompleksnije događaje, možemo doći ranije za detaljnu pripremu.",
    category: "Dostava",
    icon: Clock,
  },
  {
    id: "7",
    question: "Šta se dešava ako nisam zadovoljan uslugom?",
    answer:
      "Imamo 100% garanciju zadovoljstva. Ako niste zadovoljni našom uslugom, kontaktirajte nas u roku od 24h i riješićemo problem ili vratiti novac. Vaše povjerenje je naš prioritet.",
    category: "Garancija",
    icon: HelpCircle,
  },
  {
    id: "8",
    question: "Možete li organizovati last-minute događaje?",
    answer:
      "Za manje događaje (do 20 osoba), često možemo organizovati isti dan ili sljedeći dan. Za veće događaje trebamo više vremena za pripremu. Pozovite nas i proverićemo dostupnost.",
    category: "Rezervacija",
    icon: Phone,
  },
];

const CATEGORIES = [
  "Sve",
  "Rezervacija",
  "Plaćanje",
  "Hrana",
  "Dostava",
  "Oprema",
  "Garancija",
];

export default function FAQSection({ className = "" }: FAQSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("Sve");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredFAQs =
    selectedCategory === "Sve"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 relative overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(255,215,0,0.08),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider">
              Često Postavljana Pitanja
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant mb-4">
            Sve Što Trebate
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-2">
              Znati
            </span>
          </h2>

          <p className="text-lg text-amber-400/80 max-w-2xl mx-auto">
            Odgovori na najčešća pitanja o našim catering uslugama i procesu
            organizacije
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-400 border-amber-400 text-black font-medium"
                  : "border-amber-400/30 text-amber-400 hover:border-amber-400 hover:bg-amber-400/10"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden hover:shadow-gold transition-all duration-300"
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="text-amber-400 group-hover:scale-110 transition-transform duration-300">
                        <faq.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-elegant text-lg group-hover:text-amber-400 transition-colors duration-300">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="text-amber-400 group-hover:scale-110 transition-transform duration-300">
                      {expandedItem === faq.id ? (
                        <ChevronUp className="w-6 h-6" />
                      ) : (
                        <ChevronDown className="w-6 h-6" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {expandedItem === faq.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-amber-400/20"
                      >
                        <div className="p-6 pt-4">
                          <p className="text-amber-400/80 leading-relaxed">
                            {faq.answer}
                          </p>

                          {/* Category Badge */}
                          <div className="mt-4">
                            <span className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-medium px-3 py-1 rounded-full">
                              {faq.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="text-amber-400 mb-4 flex justify-center">
              <MessageCircle className="w-12 h-12" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-elegant mb-4">
              Još Uvijek Imate Pitanja?
            </h3>

            <p className="text-amber-400/80 text-lg mb-8">
              Naš tim je spreman da odgovori na sva vaša pitanja i pomoći vam u
              organizaciji savršenog događaja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium text-lg px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto sm:mx-0"
              >
                <Phone className="w-5 h-5" />
                Pozovite Nas
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-premium text-lg px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto sm:mx-0"
              >
                <MessageCircle className="w-5 h-5" />
                Pošaljite Poruku
              </motion.button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-amber-400/20">
              <div className="text-center">
                <div className="text-amber-400 font-medium mb-1">Telefon</div>
                <div className="text-elegant">+387 60 320 3835</div>
              </div>
              <div className="text-center">
                <div className="text-amber-400 font-medium mb-1">Email</div>
                <div className="text-elegant">vip@maliprinc.ba</div>
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
