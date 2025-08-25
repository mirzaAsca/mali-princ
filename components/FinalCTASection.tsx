"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Calendar, Crown, Sparkles } from "lucide-react";
import Link from "next/link";

interface FinalCTASectionProps {
  className?: string;
}

export default function FinalCTASection({
  className = "",
}: FinalCTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className={`py-24 px-4 relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.15),transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Crown className="w-8 h-8 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider">
              Spremni za Akciju?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-luxury">
            Započnite Svoj{" "}
            <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Premium Doživljaj
            </span>
          </h2>

          <p className="text-xl text-elegant max-w-3xl mx-auto mb-12">
            Ne čekajte da vaš event bude običan. Kontaktirajte nas danas i
            pretvorite svoju viziju u nezaboravnu stvarnost.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link href="/kontakt">
            <button className="btn-premium text-lg px-8 py-4 group">
              <Phone className="inline mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Pozovite Odmah: 060 320 3835
            </button>
          </Link>

          <Link href="/paketi">
            <button className="btn-outline-premium text-lg px-8 py-4 group">
              <Calendar className="inline mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Pogledajte Pakete
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-amber-400 mb-4 flex justify-center">
              <Sparkles className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-luxury">
              Besplatna Konsultacija
            </h3>
            <p className="text-elegant text-sm">
              Personalizovana ponuda prilagođena vašim potrebama
            </p>
          </div>

          <div className="text-center">
            <div className="text-amber-400 mb-4 flex justify-center">
              <Crown className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-luxury">
              Premium Kvalitet
            </h3>
            <p className="text-elegant text-sm">
              Garantovano zadovoljstvo ili povrat novca
            </p>
          </div>

          <div className="text-center">
            <div className="text-amber-400 mb-4 flex justify-center">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-luxury">
              24/7 Podrška
            </h3>
            <p className="text-elegant text-sm">
              Tu smo za vas u svakom trenutku
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
