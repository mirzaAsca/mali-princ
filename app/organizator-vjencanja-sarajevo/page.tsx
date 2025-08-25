"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Diamond,
  Users,
  Star,
  MapPin,
  Clock,
  Award,
  Phone,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function OrganizatorVjencanjaSarajevoPage() {
  const weddingImages = [
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2.jpg",
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2-2.jpg",
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2-3.jpg",
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2-4.jpg",
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2-5.jpg",
    "/gallery/Ketering_board_v2/Ketering_Investitori_v2-6.jpg",
  ];

  const services = [
    {
      icon: Diamond,
      title: "Organizator vjenčanja",
      description:
        "Kompletna organizacija vašeg vjenčanja u Sarajevu - od prstena do posljednjeg plesa",
      features: [
        "Timeline i raspored",
        "Budžet planiranje",
        "Vendor koordinacija",
        "Dnevna koordinacija",
      ],
    },
    {
      icon: Heart,
      title: "Usluge vjenčanja",
      description: "Sve usluge potrebne za savršeno vjenčanje u Sarajevu",
      features: [
        "Catering i meni",
        "Dekoracija i cvijeće",
        "Entertainment",
        "Fotografija i video",
      ],
    },
    {
      icon: Users,
      title: "Kompletna Organizacija",
      description:
        "Od ideje do realizacije - mi brinemo o svim detaljima vašeg vjenčanja",
      features: [
        "Venue selection",
        "Vendor management",
        "Guest coordination",
        "Timeline management",
      ],
    },
  ];

  const venues = [
    "Vijećnica",
    "SCC Rooftop",
    "BBI Center",
    "Hotel Europe",
    "Hotel Bristol",
    "Ilidža Terme",
  ];

  const process = [
    {
      number: "01",
      title: "Konsultacija",
      description: "Razgovaramo o vašoj viziji vjenčanja u Sarajevu",
    },
    {
      number: "02",
      title: "Planiranje",
      description: "Kreiramo detaljan plan i odabiremo venue u Sarajevu",
    },
    {
      number: "03",
      title: "Realizacija",
      description: "Organizujemo i koordiniramo sve aspekte vjenčanja",
    },
    {
      number: "04",
      title: "Vaš Dan",
      description: "Vi uživate dok mi brinemo o svim detaljima",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F0F] via-[#1B1C21] to-[#0F0F0F]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-amber-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-luxury">
              Organizator Vjenčanja Sarajevo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-elegant max-w-4xl mx-auto">
              Mali Princ - vaš pouzdan partner za organizaciju savršenog
              vjenčanja u Sarajevu. Od prstena do posljednjeg plesa, mi brinemo
              o svim detaljima da vaš dan bude nezaboravan.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+387603203835"
                className="btn-premium flex items-center gap-3 text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Pozovite 060 320 3835
              </a>
              <a
                href="/kontakt"
                className="glass-card px-8 py-4 text-elegant hover:text-luxury transition-colors duration-300"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Besplatna Konsultacija
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Naša Vjenčanja
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Pogledajte naše najljepše organizovana vjenčanja i savršenu
              koordinaciju
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-card hover:shadow-gold transition-all duration-500"
              >
                <Image
                  src={image}
                  alt={`Vjenčanje ${index + 1} - Mali Princ Sarajevo`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Naše Vjenčanje Usluge
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Kompletna organizacija vjenčanja u Sarajevu - od ideje do
              realizacije.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500 group"
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Najromantičnije Lokacije u Sarajevu
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Poznajemo sve najromantičnije lokacije u Sarajevu za vaše
              vjenčanje.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {venues.map((venue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                className="glass-card rounded-xl p-6 text-center hover:shadow-gold transition-all duration-300 group"
              >
                <Heart className="w-8 h-8 mx-auto mb-3 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-luxury">{venue}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Kako Organizujemo Vaše Vjenčanje
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Naš 4-korakni proces osigurava da vaše vjenčanje bude savršeno i
              nezaboravno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500 group"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
      </section>

      {/* GMB Description Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              O Nama - Mali Princ Organizacija Vjenčanja
            </h2>
            <div className="glass-card rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <p className="text-elegant text-lg leading-relaxed">
                Mali Princ je vaš pouzdan partner za organizaciju savršenog
                vjenčanja u Sarajevu. Specijalizirani smo za organizaciju
                vjenčanja od ideje do realizacije. Naš tim stručnjaka brine o
                svim detaljima da vaš dan bude nezaboravan i savršen.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Spremni za Vaše Vjenčanje?
            </h2>
            <p className="text-xl text-elegant mb-8">
              Kontaktirajte nas danas za besplatnu konsultaciju i
              personalizovanu ponudu za organizaciju vašeg vjenčanja u Sarajevu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+387603203835"
                className="btn-premium flex items-center gap-3 text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5" />
                Pozovite Sada
              </a>
              <a
                href="/kontakt"
                className="glass-card px-8 py-4 text-elegant hover:text-luxury transition-colors duration-300"
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
