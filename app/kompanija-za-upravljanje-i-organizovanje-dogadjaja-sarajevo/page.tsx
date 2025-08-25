"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Star,
  MapPin,
  Clock,
  Award,
  Phone,
  Calendar,
  Settings,
  Target,
  Zap,
  Shield,
} from "lucide-react";
import Image from "next/image";

export default function KompanijaZaUpravljanjeOrganizovanjeDogadjajaSarajevoPage() {
  const eventManagementImages = [
    "/gallery/Ketering_board/Ketering_Investitori.jpg",
    "/gallery/Ketering_board/Ketering_Investitori-2.jpg",
    "/gallery/Ketering_board/Ketering_Investitori-3.jpg",
    "/gallery/Ketering_board/Ketering_Investitori-4.jpg",
    "/gallery/Ketering_board/Ketering_Investitori-5.jpg",
    "/gallery/Ketering_board/Ketering_Investitori-6.jpg",
  ];

  const services = [
    {
      icon: Building2,
      title: "Upravljanje Događajima",
      description:
        "Profesionalno upravljanje i organizovanje događaja u Sarajevu",
      features: [
        "Planiranje događaja",
        "Koordinacija tima",
        "Upravljanje budžetom",
        "Kontrola kvaliteta",
      ],
    },
    {
      icon: Users,
      title: "Tim Building Događaji",
      description: "Specijalizovani za team building događaje u Sarajevu",
      features: [
        "Team building aktivnosti",
        "Korporativni događaji",
        "Motivacioni programi",
        "Tim rad i kooperacija",
      ],
    },
    {
      icon: Settings,
      title: "Organizovanje i Koordinacija",
      description: "Kompletno organizovanje i koordinacija događaja u Sarajevu",
      features: [
        "Logistika događaja",
        "Koordinacija sa dobavljačima",
        "Upravljanje vremenom",
        "Kontrola procesa",
      ],
    },
  ];

  const areas = [
    "Centar Sarajeva",
    "Novo Sarajevo",
    "Ilidža",
    "Vogošća",
    "Hadžići",
    "Ilijaš",
    "Trnovo",
    "Pale",
  ];

  const process = [
    {
      number: "01",
      title: "Analiza Potreba",
      description: "Analiziramo vaše potrebe i zahtjeve za događaj u Sarajevu",
    },
    {
      number: "02",
      title: "Strategija",
      description: "Kreiramo strategiju i plan za upravljanje događajem",
    },
    {
      number: "03",
      title: "Implementacija",
      description: "Implementiramo strategiju sa profesionalnim timom",
    },
    {
      number: "04",
      title: "Monitoring",
      description: "Pratimo i optimizujemo procese događaja",
    },
  ];

  const stats = [
    { icon: Star, number: "15+", label: "Godina Iskustva" },
    { icon: Award, number: "500+", label: "Uspješnih Događaja" },
    { icon: Users, number: "1000+", label: "Zadovoljnih Klijenata" },
  ];

  const companyFeatures = [
    "Profesionalno upravljanje",
    "Tim building događaji",
    "Korporativna organizacija",
    "Koordinacija događaja",
    "Upravljanje budžetom",
    "Kontrola kvaliteta",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1B1C21] to-[#0F0F0F]">
      {/* Hero Section with Corporate Theme */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/35 to-amber-600/35"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(255,215,0,0.15),transparent_55%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,215,0,0.15),transparent_55%)]"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="inline-block p-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mb-6"
              >
                <Building2 className="w-12 h-12 text-white" />
              </motion.div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-luxury">
              Kompanija za Upravljanje i Organizovanje Događaja Sarajevo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-elegant max-w-4xl mx-auto">
              Mali Princ - vaša pouzdana kompanija za upravljanje i
              organizovanje događaja u Sarajevu. Specijalizovani smo za team
              building događaje i korporativnu organizaciju.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+387603203835"
                className="btn-premium flex items-center gap-3 text-lg px-8 py-4 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Pozovite 060 320 3835
              </a>
              <a
                href="/kontakt"
                className="glass-card px-8 py-4 text-elegant hover:text-luxury transition-all duration-300 hover:shadow-gold"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Besplatna Konsultacija
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Stats with Corporate Design */}
      <section className="py-16 px-4 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500 group border border-amber-500/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-luxury mb-2">
                  {stat.number}
                </div>
                <div className="text-elegant">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Features Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Naše Kompanijske Karakteristike
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Sve što vam treba za uspješno upravljanje događajima u Sarajevu
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {companyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card rounded-xl p-6 text-center hover:shadow-gold transition-all duration-300 group cursor-pointer border border-amber-500/20"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-luxury group-hover:text-amber-400 transition-colors">
                  {feature}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery with Corporate Layout */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Naši Projekti Upravljanja
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Pogledajte naše najbolje projekte upravljanja događajima u
              Sarajevu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventManagementImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-card hover:shadow-gold transition-all duration-500 border border-amber-500/20"
              >
                <Image
                  src={image}
                  alt={`Upravljanje događajima ${
                    index + 1
                  } - Mali Princ Sarajevo`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">
                    Projekat {index + 1}
                  </h3>
                  <p className="text-sm">Sarajevo, Bosna i Hercegovina</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Corporate Cards */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Naše Kompanijske Usluge
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Kompletno rješenje za upravljanje i organizovanje događaja u
              Sarajevu.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500 group relative overflow-hidden border border-amber-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-luxury">
                    {service.title}
                  </h3>
                  <p className="text-elegant mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-elegant flex items-center justify-center gap-2"
                      >
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas with Corporate Design */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Gde Pružamo Usluge Upravljanja
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Naše usluge upravljanja su dostupne u svim dijelovima Sarajeva i
              okolnim gradovima.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.05 }}
                className="glass-card rounded-xl p-6 text-center hover:shadow-gold transition-all duration-300 group cursor-pointer border border-amber-500/20"
              >
                <MapPin className="w-8 h-8 mx-auto mb-3 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-luxury group-hover:text-amber-400 transition-colors">
                  {area}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Corporate Timeline */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Naš Proces Upravljanja
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Strukturiran 4-korakni proces koji osigurava uspjeh vašeg
              događaja.
            </p>
          </motion.div>

          <div className="relative">
            {/* Corporate Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-amber-500 to-amber-600 hidden lg:block rounded-full"></div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500 group relative border border-amber-500/20"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <span className="text-2xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-luxury">
                    {step.title}
                  </h3>
                  <p className="text-elegant leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Corporate Theme */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              O Nama - Mali Princ Upravljanje Događajima
            </h2>
            <div className="glass-card rounded-2xl p-8 text-center max-w-4xl mx-auto relative overflow-hidden border border-amber-500/20">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-amber-600/5"></div>
              <div className="relative z-10">
                <p className="text-elegant text-lg leading-relaxed">
                  Mali Princ je vaša pouzdana kompanija za upravljanje i
                  organizovanje događaja u Sarajevu. Specijalizovani smo za team
                  building događaje i korporativnu organizaciju. Naš tim
                  stručnjaka brine o svim aspektima upravljanja događajima.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Corporate Background */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-amber-600/30 to-amber-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Spremni za Vaše Upravljanje Događajima?
            </h2>
            <p className="text-xl text-elegant mb-8">
              Kontaktirajte nas danas za besplatnu konsultaciju i
              personalizovanu ponudu za upravljanje događajima u Sarajevu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+387603203835"
                className="btn-premium flex items-center gap-3 text-lg px-8 py-4 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Pozovite Sada
              </a>
              <a
                href="/kontakt"
                className="glass-card px-8 py-4 text-elegant hover:text-luxury transition-all duration-300 hover:shadow-gold"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Besplatna Konsultacija
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
