"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  Utensils,
  Star,
  MapPin,
  Clock,
  Award,
  Phone,
  Calendar,
} from "lucide-react";
import Image from "next/image";

export default function CateringSarajevoPage() {
  const cateringImages = [
    "/gallery/Ketering/Ketering_Hullk.jpg",
    "/gallery/Ketering/Ketering_Hullk-2.jpg",
    "/gallery/Ketering/Ketering_Hullk-3.jpg",
    "/gallery/Ketering/Ketering_Hullk-4.jpg",
    "/gallery/Ketering/Ketering_Hullk-5.jpg",
    "/gallery/Ketering/Ketering_Hullk-6.jpg",
  ];

  const services = [
    {
      icon: ChefHat,
      title: "Dobavljač hrane i pića za catering",
      description:
        "Vrhunski poslovni i privatni catering u Sarajevu sa kreativnim finger food, hladnim platama i tradicionalnim jelima",
      features: [
        "Kreativni finger food",
        "Hladne plate",
        "Domaća tradicionalna jela",
        "Specijaliteti od teletine i piletine",
      ],
    },
    {
      icon: Utensils,
      title: "Konferencije i Seminari",
      description:
        "Profesionalno posluživanje za korporativne događaje u Sarajevu",
      features: [
        "Finger food",
        "Hladne plate",
        "Profesionalno posluživanje",
        "Punctual delivery",
      ],
    },
    {
      icon: Star,
      title: "Svadbe i Proslave",
      description:
        "Tradicionalna jela i specijaliteti za vaše najvažnije trenutke u Sarajevu",
      features: [
        "Tradicionalna jela",
        "Specijaliteti od teletine",
        "Specijaliteti od piletine",
        "Kreativni meniji",
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
              Dobavljač Hrane i Pića za Catering Sarajevo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-elegant max-w-4xl mx-auto">
              Vrhunski poslovni i privatni catering u Sarajevu. Specijalizirani
              smo za konferencije, seminare, korporativne zabave, kao i svadbe,
              rođendane i druge svečanosti. Na meniju su kreativni finger food,
              hladne plate, domaća tradicionalna jela i specijaliteti od
              teletine i piletine – sve po narudžbi.
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
                href="/paketi"
                className="glass-card px-8 py-4 text-elegant hover:text-luxury transition-colors duration-300"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Pregledajte Pakete
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
              Naši Catering Radovi
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Pogledajte naše najbolje catering kreacije i profesionalno
              posluživanje
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cateringImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-card hover:shadow-gold transition-all duration-500"
              >
                <Image
                  src={image}
                  alt={`Catering rad ${index + 1} - Mali Princ Sarajevo`}
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
              Naše Catering Usluge
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Od poslovnih događaja do privatnih proslava - mi smo vaš pouzdan
              partner za sve catering potrebe u Sarajevu i okolini.
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

      {/* About Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              O Nama - Mali Princ Catering Sarajevo
            </h2>
            <div className="glass-card rounded-2xl p-8 text-center max-w-4xl mx-auto">
              <p className="text-elegant text-lg leading-relaxed">
                Mali Princ Catering Sarajevo – vrhunski poslovni i privatni
                catering u Sarajevu. Specijalizirani smo za konferencije,
                seminare, korporativne zabave, kao i svadbe, rođendane i druge
                svečanosti. Na meniju su kreativni finger food, hladne plate,
                domaća tradicionalna jela i specijaliteti od teletine i piletine
                – sve po narudžbi. Rezervišite danas i osigurajte besprijekornu
                uslugu.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Gde Radimo
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Od centra do periferije - naše catering usluge su dostupne u svim
              dijelovima Sarajeva i okolnim gradovima.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                className="glass-card rounded-xl p-6 text-center hover:shadow-gold transition-all duration-300 group"
              >
                <MapPin className="w-8 h-8 mx-auto mb-3 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-luxury">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Spremni za Vaš Događaj?
            </h2>
            <p className="text-xl text-elegant mb-8">
              Kontaktirajte nas danas za besplatnu konsultaciju i
              personalizovanu ponudu za vaš catering u Sarajevu.
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
                Pošaljite Upit
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
