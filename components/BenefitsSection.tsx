"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  AlertTriangle,
  Clock,
  Users,
  ChefHat,
  Sparkles,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

interface Problem {
  icon: any;
  title: string;
  description: string;
  consequence: string;
}

interface Solution {
  icon: any;
  title: string;
  description: string;
  deliveryTitle?: string;
  deliveryDescription?: string;
}

interface DeliveryMethod {
  icon: any;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  className?: string;
}

const PROBLEMS: Problem[] = [
  {
    icon: AlertTriangle,
    title: "Stres oko planiranja eventa i cateringa",
    description: "Nema vremena za plan, dobavljače i detalje",
    consequence: "Svaki propust se primijeti na vaš veliki dan",
  },
  {
    icon: Users,
    title: "Nezadovoljstvo kvalitetom hrane na važnim događajima",
    description: "Hrana je 'ok', ali ne 'wow'",
    consequence: "Gosti ostaju ravnodušni, a vi gubite priliku da oduševite",
  },
  {
    icon: Clock,
    title: "Gubitak vremena na organizaciju umjesto uživanja",
    description: "Dok rješavate logistiku, propuštate vlastiti događaj",
    consequence: "Vaš event postaje obaveza umjesto iskustva",
  },
];

const SOLUTIONS: Solution[] = [
  {
    icon: Users,
    title: "Dedicated event manager",
    description:
      "Jedna osoba preuzima 100% koordinacije. Vi samo odobravate, mi izvršavamo",
    deliveryTitle: "Post-event podrška",
    deliveryDescription: "Wrap-up, evaluacija i preporuke za naredni put",
  } as any,
  {
    icon: ChefHat,
    title: "Premium meni sa 50+ opcija",
    description:
      "Birate između pažljivo kuriranih menija koji 'dižu' standard događaja",
    deliveryTitle: "Premium Catering (meni + servis)",
    deliveryDescription:
      "Za događaje od 20 do 300+ gostiju. All-inclusive servis",
  } as any,
  {
    icon: Clock,
    title: "Personalizovani plan u 24h",
    description:
      "Za 24 sata dobijate kompletan plan (meni, servis, tok događaja) – jasno, bez stresa",
    deliveryTitle: "Event Organizacija A–Ž",
    deliveryDescription:
      "Koncept, produkcija, catering i koordinacija – jedan tim, jedan rezultat",
  } as any,
];

const DELIVERY_METHODS: DeliveryMethod[] = [
  {
    icon: ChefHat,
    title: "Premium Catering (meni + servis)",
    description: "Za događaje od 20 do 300+ gostiju. All-inclusive servis",
  },
  {
    icon: Sparkles,
    title: "Event Organizacija A–Ž",
    description:
      "Koncept, produkcija, catering i koordinacija – jedan tim, jedan rezultat",
  },
  {
    icon: Shield,
    title: "Post-event podrška",
    description: "Wrap-up, evaluacija i preporuke za naredni put",
  },
];

export default function BenefitsSection({
  className = "",
}: BenefitsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={`py-24 px-4 relative ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.08),transparent_50%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
            Šta Dobijate ?
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto">
            Plan u 24h, premium meni i kompletna koordinacija – vi uživate, mi
            radimo
          </p>
        </motion.div>

        {/* Blok 1: Vaši problemi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-luxury">
            Prepoznajete li se u ovim problemima?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROBLEMS.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-lg p-6 text-center border-l-4 border-red-500/50"
              >
                <div className="text-red-400 mb-4 flex justify-center">
                  <problem.icon className="h-10 w-10" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-luxury">
                  {problem.title}
                </h4>
                <p className="text-elegant text-sm mb-3">
                  {problem.description}
                </p>
                <p className="text-red-400/80 text-sm font-medium">
                  {problem.consequence}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blok 2: Naša rješenja */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-luxury">
            To je za nas lahko
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SOLUTIONS.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-lg p-6 text-center border-l-4 border-green-500/50"
              >
                <div className="text-green-400 mb-4 flex justify-center">
                  <solution.icon className="h-10 w-10" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-luxury">
                  {solution.title}
                </h4>
                <p className="text-elegant text-sm mb-4">
                  {solution.description}
                </p>
                {solution.deliveryTitle && (
                  <div className="mt-4 pt-4 border-t border-luxury/20">
                    <div className="text-amber-400 font-semibold mb-1">
                      {solution.deliveryTitle}
                    </div>
                    <div className="text-elegant text-xs">
                      {solution.deliveryDescription}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blok 4: Šta još dobijate - Bonusovi i Garancije */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-luxury">
            GRATIS ZA SVE EVENTE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="glass-card rounded-lg p-6 border-4 border-amber-400 ring-2 ring-amber-400/30 ring-offset-2 ring-offset-black shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                <CheckCircle className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-luxury">
                Besplatna postavka stolova
              </h4>
              <p className="text-elegant text-sm mb-3">
                Profesionalna postavka i dekoracija stolova za vaš event
              </p>
              <div className="text-amber-400 font-bold">
                Vrijednost: 150€ - GRATIS
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="glass-card rounded-lg p-6 border-4 border-amber-400 ring-2 ring-amber-400/30 ring-offset-2 ring-offset-black shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                <ChefHat className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-luxury">
                Besplatno iznajmljivanje chef dish posuđa
              </h4>
              <p className="text-elegant text-sm mb-3">
                Profesionalno posuđe za premium prezentaciju vašeg eventa
              </p>
              <div className="text-amber-400 font-bold">
                Vrijednost: 100€ - GRATIS
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="glass-card rounded-lg p-6 border-4 border-amber-400 ring-2 ring-amber-400/30 ring-offset-2 ring-offset-black shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                <Sparkles className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-luxury">
                Besplatne jednokratne ambalaže
              </h4>
              <p className="text-elegant text-sm mb-3">
                Elegantne ambalaže koje čine vaš event još posebnijim
              </p>
              <div className="text-amber-400 font-bold">
                Vrijednost: 80€ - GRATIS
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="glass-card rounded-lg p-6 border-4 border-amber-400 ring-2 ring-amber-400/30 ring-offset-2 ring-offset-black shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                <ArrowRight className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-luxury">
                Besplatna dostava
              </h4>
              <p className="text-elegant text-sm mb-3">
                Dostavljamo na vašu lokaciju bez dodatnih troškova
              </p>
              <div className="text-amber-400 font-bold">
                Vrijednost: 50€ - GRATIS
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="glass-card rounded-lg p-6 border-4 border-amber-400 ring-2 ring-amber-400/30 ring-offset-2 ring-offset-black shadow-lg hover:shadow-amber-400/20 transition-all duration-300"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                <Shield className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-luxury">
                Bez plaćanja unaprijed
              </h4>
              <p className="text-elegant text-sm mb-3">
                Plaćate tek nakon što ste zadovoljni našom uslugom
              </p>
              <div className="text-amber-400 font-bold">
                Bez rizika, bez obaveza
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="glass-card rounded-lg p-6 border border-green-400/30"
            >
              <div className="text-green-400 mb-4 flex justify-center">
                <Shield className="h-12 w-12" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-luxury">
                100% Garancija
              </h4>
              <p className="text-elegant text-sm mb-3">
                Ako niste zadovoljni, vraćamo vam 100% novca
              </p>
              <div className="text-green-400 font-bold">
                Bez rizika, bez pitanja
              </div>
            </motion.div>
          </div>

          {/* CTA Dugmad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <button className="btn-premium text-lg px-8 py-4 rounded-full font-semibold">
              <Clock className="inline mr-2 h-5 w-5" />
              Zatražite plan u 24h
            </button>
            <button className="btn-outline-premium text-lg px-8 py-4 rounded-full font-semibold">
              <ChefHat className="inline mr-2 h-5 w-5" />
              Book degustaciju
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
