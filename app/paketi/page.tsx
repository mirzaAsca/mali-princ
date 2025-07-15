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
  Heart,
  Gift,
  Baby,
  Cake,
  Trophy,
} from "lucide-react";
import ElegantBackgroundAnimation from "../../components/ElegantBackgroundAnimation";

export default function PaketiPage() {
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, () => ({
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

      {/* Main Packages Section */}
      <MainPackagesSection />

      {/* Catering Types Section */}
      <CateringTypesSection />

      {/* Features Section */}
      <FeaturesSection />

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
              alt="Mali Princ - Paketi"
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
          Naši Paketi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 text-elegant max-w-4xl mx-auto"
        >
          Otkrijte savršen paket za vaše potrebe - od svakodnevnih obroka do
          nezaboravnih proslava
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="btn-premium text-lg px-8 py-4">
            <Crown className="inline mr-2 h-5 w-5" />
            Istražite Pakete
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

function MainPackagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainPackages = [
    {
      title: "OFFICE FOOD",
      subtitle: "Za one koji hranu naručuju na poslu",
      description:
        "Da li vam je dosadilo svaki dan razmišljati šta naručiti? Odakle naručiti? Da li hrana koju naručujete često kasni, ili je nezadovoljavajućeg okusa?",
      whatIs:
        "OFFICE FOOD je usluga pripreme i isporuke hrane na vaše radno mjesto u unaprijed dogovorenom vremenskom terminu",
      features: [
        "Svježe pripremljen ukusan i topao obrok",
        "Dostavka u tačno dogovorenom vremenu",
        "Lokacija Sarajevo",
        "Minimalno 5 osoba po paketu",
        "Mjesečni meni prilagođen vašim željama",
        "Uzimamo u obzir sve alergene",
      ],
      benefits: [
        "Ukusna jela",
        "Unikatni recepti",
        "Svježe organske namirnice",
        "Isporuka na vrijeme",
      ],
      payment: "Mjesečna pretplata",
      icon: Utensils,
    },
    {
      title: "CATERING ORGANIZATOR",
      subtitle: "Za one koji imaju dešavanja",
      description:
        "Da li vam svaki predstojećih rođendan ili neka proslava predstavlja stres? Da li želite oduševiti goste hranom i luksuznom proslavom?",
      whatIs:
        "CATERING ORGANIZATOR paket je kompletna usluga pripreme i posluživanja hrane, te organizacija kompletnog event-a uključujući kompletnu postavku i dekoraciju stolova i stolica na elegantnom posuju",
      features: [
        "Kompletna organizacija event-a",
        "Catering za različite tipove dešavanja",
        "Elegantno posluživanje",
        "Kompletna dekoracija",
        "Lokacija Sarajevo",
        "Minimalno 15 osoba po paketu",
      ],
      benefits: [
        "Premium Catering obrok",
        "Elegantno posuđe za posluživanje",
        "Profesionalno osoblje",
        "Kompletna organizacija",
      ],
      payment: "Jednokratno",
      icon: Crown,
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
            Glavni Paketi
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Dva glavna paketa prilagođena različitim potrebama
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {mainPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card rounded-lg p-8 hover:shadow-gold transition-all duration-300"
            >
              <div className="text-amber-400 mb-6 flex justify-center">
                <pkg.icon className="h-12 w-12" />
              </div>

              <h3 className="text-3xl font-bold mb-2 text-luxury text-center">
                {pkg.title}
              </h3>
              <p className="text-xl text-elegant text-center mb-6">
                {pkg.subtitle}
              </p>

              <p className="text-elegant mb-6">{pkg.description}</p>

              <div className="bg-premium-card rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3 text-luxury">
                  Šta je {pkg.title}?
                </h4>
                <p className="text-elegant">{pkg.whatIs}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-luxury">
                  Uključuje:
                </h4>
                <ul className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-elegant">
                      <Star className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-luxury">
                  Šta dobijam?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {pkg.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-elegant">
                      <Award className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-luxury/20 pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-elegant text-sm">Način plaćanja:</p>
                    <p className="text-luxury font-semibold">{pkg.payment}</p>
                  </div>
                  <button className="btn-premium">Zatraži Ponudu</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CateringTypesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cateringTypes = [
    {
      icon: Trophy,
      title: "CATERING ZA EVENTE",
      subtitle: "Profesionalno. Elegantno. Tačno na vrijeme.",
      description:
        "Bez obzira planiraš li seminar, poslovnu večeru, otvorenje ili team building – naš CATERING ZA EVENTE omogućava ti da budeš domaćin, a ne logističar.",
      includes: [
        "Personalizovani meni (klasični, vege, finger food) - 28KM/osobi",
        "Posluživanje i osoblje 70KM/sat",
        "Dekoracija stola (u boji i stilu brenda) 40KM",
        "Barski stolovi 25KM/kom",
        "Prijem gostiju i koordinacija na dan događaja 50KM/sat",
        "Gift kutije za goste 20KM/paket",
      ],
      forWho:
        "Za HR menadžere, organizatore evenata, direktore i agencije kojima treba pouzdan partner.",
      example: "Za 15 osoba — 1065KM",
      cta: "Zatraži ponudu za svoj event",
    },
    {
      icon: Heart,
      title: "CATERING ZA VJENČANJA",
      subtitle: "Vjenčanje bez stresa – s okusima koji se pamte.",
      description:
        "Bez obzira na veličinu svadbe, jedno je sigurno – želiš da sve bude savršeno. Mi nismo samo catering – mi smo tvoj tihi tim koji brine da hrana, atmosfera i detalji pričaju istu priču: tvoju.",
      includes: [
        "Svečani meni (buffet ili posluživanje) 70KM/osobi",
        "Desertna zona i torta (opcija) 15KM/osobi",
        "Dekoracija stolova i šatora 15KM/osobi",
        "Konobar i floor manager 80KM/sat",
        "Priprema i raspremanje lokacije 15KM/osobi",
      ],
      forWho:
        "Za parove koji žele predivno vjenčanje – bez potrebe da zovu 5 različitih firmi.",
      example: "Za 50 osoba — 6070KM",
      cta: "Rezerviši termin za degustaciju",
    },
    {
      icon: Cake,
      title: "CATERING ZA ROĐENDANE",
      subtitle: "Rođendan koji djeca (i odrasli) ne zaboravljaju.",
      description:
        "Zaboravi na lonce, haos i zadnji minut. Mi pripremamo sve: od ukusnih zalogaja do tematske dekoracije. Ti uživaš s gostima – a mi brinemo o svemu.",
      includes: [
        "Obrok + desert (dječiji, klasični, vege) 28KM/osobi",
        "Stolovi i stolice 25KM/kom",
        "Dekoracija + baloni 100KM",
        "Posuđe, salvete, čaše u tonu 10KM/osobi",
      ],
      forWho:
        "Za supružnike i prijatelje koji žele jednostavno, ali nezaboravno slavlje.",
      example: "Za 15 osoba — 745KM",
      cta: "Isplaniraj rođendan bez stresa",
    },
    {
      icon: Sparkles,
      title: "CATERING ZA DJEVOJAČKO VEČE",
      subtitle: "Veče koje miriše na uspomene.",
      description:
        "Veče za vas – mora biti posebno. Elegantni zalogaji, fotogeničan setup, ženski vibe – sve spremno da se sjećaš večeri cijeli život.",
      includes: [
        "Finger food i mini kolači 35KM/osobi",
        "Personalizirane kartice za gošće 10KM/osobi",
        "Tematska dekoracija 70KM",
        "Set za igru: 'Koliko poznaješ mladu?' 100KM",
        "Florna postavka 150KM",
        "Aromatični mirisi 50KM",
      ],
      forWho:
        "Za kumu, prijateljice, sestre – sve koje žele veče bez logistike.",
      example: "Za 5 osoba — 595KM",
      cta: "Rezerviši djevojačko veče",
    },
    {
      icon: Baby,
      title: "CATERING ZA BABY SHOWER",
      subtitle: "Slavimo novi život – s toplinom, pažnjom i stilom.",
      description:
        "Baby shower je jedan od najnježnijih trenutaka koje možeš organizirati. Mi ti pomažemo da sve izgleda divno, teče glatko – i bude emotivno koliko treba.",
      includes: [
        "Candy bar i finger food (sweet & salty) 28KM/osobi",
        "Pastelna dekoracija (roze, plava, neutralna) 50KM",
        "Voćni aranžmani 10KM/osobi",
        "Mini gift kutije za gošće 20KM/kom",
        "Setup i raspremanje 100KM",
      ],
      forWho:
        "Za buduće mame, prijateljice i sestre koje žele proslavu punu pažnje.",
      example: "Za 15 osoba — 1020KM",
      cta: "Zatraži plan baby shower-a",
    },
    {
      icon: Gift,
      title: "CATERING ZA GODIŠNJICE",
      subtitle: "Godine su prolazile. Ljubav je ostala. Slavimo je dostojno.",
      description:
        "Za ljubavi koje traju – zaslužena pažnja i elegancija. Mi pripremamo atmosferu, vi preuzimate zasluge",
      includes: [
        "Romantična večera za dvoje ili mini gathering 120KM",
        "Dekoracija stola i svijeće 50KM",
        "Luksuzno posuđe 50KM",
        "Desertni stol (sa natpisima i simbolima) 40KM",
        "Personalizovana poruka 30KM",
        "Sweet box 70KM",
        "Stol + stolice 100KM",
        "Stolno cvijeće + buket 200KM",
      ],
      forWho: "Za partnere koji slave ljubav i žele intimu bez haosa.",
      example: "Za 2 osobe — 660KM",
      cta: "Napravi večeru koja će se pamtiti",
    },
  ];

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
            Specijalizirani Catering
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Šest različitih vrsta cateringa za sve vaše posebne trenutke
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cateringTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card rounded-lg p-8 hover:shadow-gold transition-all duration-300"
            >
              <div className="text-amber-400 mb-6 flex justify-center">
                <type.icon className="h-10 w-10" />
              </div>

              <h3 className="text-2xl font-bold mb-2 text-luxury text-center">
                {type.title}
              </h3>
              <p className="text-lg text-elegant text-center mb-4 font-medium">
                {type.subtitle}
              </p>

              <p className="text-elegant mb-6">{type.description}</p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-luxury">
                  Uključuje:
                </h4>
                <ul className="space-y-2">
                  {type.includes.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-elegant text-sm"
                    >
                      <Star className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-luxury/20 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold mb-2 text-luxury">
                  Za koga:
                </h4>
                <p className="text-elegant text-sm">{type.forWho}</p>
              </div>

              <div className="border-t border-luxury/20 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-elegant text-sm">Primjer:</p>
                    <p className="text-luxury font-semibold">{type.example}</p>
                  </div>
                </div>
                <button className="btn-premium w-full text-center">
                  {type.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: ChefHat,
      title: "Master Chef Tim",
      description: "15+ godina iskustva u pripremi vrhunskih jela",
    },
    {
      icon: Award,
      title: "Svježe Namirnice",
      description: "Lokalno nabavljene, najkvalitetnije namirnice",
    },
    {
      icon: Users,
      title: "Profesionalni Servis",
      description: "Besprijekorna usluga s pažnjom na svaki detalj",
    },
    {
      icon: Utensils,
      title: "Personalizirani Meni",
      description: "Kreiran prema vašim željama i potrebama",
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
            Zašto Mali Princ
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Ono što nas čini posebnima u svijetu cateringa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card rounded-lg p-8 text-center group hover:shadow-gold transition-all duration-300"
            >
              <div className="text-amber-400 mb-4 flex justify-center">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-luxury">
                {feature.title}
              </h3>
              <p className="text-elegant">{feature.description}</p>
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
            Spremni za Rezervaciju?
          </h2>
          <p className="text-xl text-elegant max-w-2xl mx-auto">
            Kontaktirajte nas za personalnu konsultaciju i prilagođenu ponudu
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
            <Calendar className="inline mr-2 h-5 w-5" />
            Zakažite Konsultaciju
          </button>
        </motion.div>
      </div>
    </section>
  );
}
