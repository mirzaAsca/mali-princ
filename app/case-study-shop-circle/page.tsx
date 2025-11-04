"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Crown,
  ChefHat,
  Phone,
  Star,
  Users,
  Calendar,
  Quote,
  CheckCircle,
  Globe,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function CaseStudyShopCirclePage() {
  const menuItems = [
    {
      category: "FINGER FOOD",
      items: [
        "Zalogajčići sa kavijarom od lososa",
        "Juneći steak zalogaji",
        "Teleći medaljoni u zalogajima",
        "Plate sa suhomesnatim proizvodima, sirom, orašastim plodovima i voćem",
        "Pileće trakice u susamu",
        "Mini sendviči i slane rolnice",
      ],
    },
    {
      category: "GLAVNA JELA",
      items: [
        "Teleći medaljoni u sosu",
        "Juneći medaljoni",
        "Tradicionalna dolma (punjene paprike i tikvice)",
        "Mješavina bosanskog roštilja",
        "Pileće rolnice u bijelom sosu",
        "Mini tradicionalne pite (sir, krompir, špinat)",
      ],
    },
    {
      category: "PRILOZI I SALATE",
      items: [
        "Povrće s roštilja",
        "Krompir iz rerne",
        "Salata od cherry paradajza, mozzarelle i rikole",
      ],
    },
    {
      category: "VEGETARIJANSKE OPCIJE",
      items: ["Punjene gljive", "Rižoto od povrća u sosu", "Selekcija sireva"],
    },
    {
      category: "DESERTI",
      items: [
        "Čokoladna divit baklava",
        "Brownies kolači",
        'Banana "Ledena kocka" u čašama',
        "Hurmašice i punjene hurme",
        "Cvjetni muffini",
      ],
    },
  ];

  const results = [
    {
      icon: Users,
      number: "90",
      label: "Zadovoljnih gostiju",
      description: "Posluženo bez ijedne greške",
    },
    {
      icon: ChefHat,
      number: "50+",
      label: "Premium jela",
      description: "Uključujući 10+ veganskih opcija",
    },
    {
      icon: CheckCircle,
      number: "0",
      label: "Reklamacija",
      description: "Na hranu, uslugu ili organizaciju",
    },
    {
      icon: Star,
      number: "5.0",
      label: "Ocjena",
      description: "100% garancija zadovoljstva ispunjena",
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
            <div className="mb-6">
              <span className="inline-block bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium border border-amber-400/30">
                Case Study
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-luxury">
              Od kavijara do sarme
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-elegant max-w-4xl mx-auto">
              Ko kaže da u keteringu ne možete imati specijalitete domaće i
              internacionalne kuhinje?
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/kontakt"
                className="btn-premium flex items-center gap-3 text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5" />
                Zatražite ponudu
              </Link>
              <a
                href="tel:+387603203835"
                className="glass-card px-8 py-4 text-elegant hover:text-luxury transition-colors duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Pozovite nas
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Snapshot Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Snapshot Događaja
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Detalji o uspješnoj organizaciji korporativne večere za Shop
              Circle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-luxury">Klijent</h3>
              <p className="text-elegant text-lg font-semibold">
                Shop Circle LTD
              </p>
              <p className="text-amber-400/70 text-sm">London, UK</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-luxury">Događaj</h3>
              <p className="text-elegant text-sm">
                Korporativna večera za investitore i tim
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-luxury">
                Broj gostiju
              </h3>
              <p className="text-elegant text-3xl font-bold text-amber-400">
                90
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-luxury">
                Vrijeme realizacije
              </h3>
              <p className="text-elegant text-sm">
                Događaj organizovan 7 dana od prvog kontakta
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-luxury">Rezultat</h3>
              <p className="text-elegant text-lg">
                Besprijekorno iskustvo koje je potvrdilo našu 100% garanciju
                zadovoljstva i rezultiralo dugoročnim partnerstvom.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury">
                Globalna Tehnološka Scena Susreće Domaće Gostoprimstvo
              </h2>
              <div className="space-y-4 text-elegant text-lg leading-relaxed">
                <p>
                  Shop Circle je vodeća tehnološka kompanija sa sjedištem u
                  Londonu, specijalizovana za razvoj e-commerce rješenja koja
                  koriste hiljade brendova širom svijeta.
                </p>
                <p>
                  Kao globalno orijentisana firma sa uredom i u Sarajevu, njihov
                  tim je navikao na najviše standarde u svemu što radi.
                </p>
                <p>
                  Kada je došlo vrijeme da organizuju strateški važan "Board
                  Meeting" i ugoste ključne investitore iz Velike Britanije,
                  SAD-a, Italije i Indije, znali su da im je potreban partner
                  koji može isporučiti više od običnog keteringa.
                </p>
                <p>
                  Izabrali su Mali Princ jer su prepoznali našu sposobnost da
                  preuzmemo kompletnu organizaciju na sebe. Njihova office
                  menadžerica, Marina Bećirović, dobila je sve prijedloge i
                  personalizovane ponude u rekordnom roku.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-4 relative overflow-hidden shadow-lg">
                <Image
                  src="/gallery/Ketering_board/Ketering_Investitori-21.jpg"
                  alt="Elegantna postavka stola sa logom Shop Circle"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">
                    Elegantna postavka stola
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Izazov: Impresionirati Svjetske Putnike Ukusima Bosne
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Glavni izazov bio je kreirati gastronomsko iskustvo koje će
              zadovoljiti izuzetno visoka očekivanja
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-6 text-elegant text-lg leading-relaxed">
                <p>
                  Gosti su bili internacionalni investitori, ljudi koji su
                  posjetili neke od najboljih svjetskih restorana i čiji je ukus
                  istančan i zahtjevan.
                </p>
                <p>
                  Postojala je opravdana zabrinutost: Kako spojiti tradicionalna
                  bosanska jela poput sarme sa sofisticiranim zalogajima kao što
                  je kavijar, a da sve izgleda skladno i premium?
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-luxury">
                    Dodatni izazovi:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Raznolike dijete:</strong> Potreba za kreativnim
                        i ukusnim gluten-free i veganskim opcijama koje nisu
                        samo "reda radi".
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Logistika:</strong> Organizacija u kratkom roku
                        od samo sedam dana.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <strong>Pritisak:</strong> Događaj je imao ogroman
                        značaj za klijenta, jer je cilj bio ne samo
                        impresionirati investitore, već i ojačati veze unutar
                        tima.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="text-amber-400 mb-6 flex justify-center">
                <Quote className="h-16 w-16" />
              </div>
              <blockquote className="text-elegant text-lg leading-relaxed mb-6 italic">
                "Naša najveća briga bila je kako pronaći savršen balans. Željeli
                smo da naši  gosti osjete autentičnu dobrodošlicu
                i okuse Bosne, ali na način koji odgovara njihovim 
                standardima."
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-luxury text-lg">
                  Marina Bećirović
                </div>
                <div className="text-amber-400/70">Office Manager</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Rješenje: Koncept "Od Kavijara do Sarme"
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Naš pristup bio je hrabar i direktan. Umjesto da biramo između
              tradicionalnog i modernog, odlučili smo ih spojiti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="space-y-4 text-elegant text-lg leading-relaxed">
                <p>
                  Kreirali smo koncept "Od kavijara do sarme", premium meni koji
                  je goste vodio na putovanje kroz najbolje od oba svijeta.
                </p>
                <p>
                  Proces je tekao besprijekorno kroz nekoliko ključnih faza:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <strong>Briefing i razumijevanje:</strong> Na prvom
                      sastanku smo pažljivo saslušali ciljeve i bojazni
                      klijenta.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <strong>Dizajn menija:</strong> U roku od 24 sata
                      predstavili smo personalizovani meni sa preko 50
                      specijaliteta.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <strong>Logistika i planiranje:</strong> Naš tim je
                      dizajnirao cirkularnu postavku švedskog stola.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <strong>Realizacija:</strong> Na dan događaja, naš tim je
                      preuzeo sve – od postavke, preko besprijekornog servisa,
                      do finalnog čišćenja.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="glass-card rounded-2xl p-4 relative overflow-hidden shadow-lg">
                <Image
                  src="/gallery/Ketering/Ketering_Hullk-15.jpg"
                  alt="Krupni plan sarajevske sarme pored zalogaja sa kavijarom"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">
                    Sarajevska sarma pored zalogaja sa kavijarom
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Menu Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-luxury">
              Meni Događaja (Premium Selekcija)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-card rounded-2xl p-6 hover:shadow-gold transition-all duration-500"
                >
                  <h4 className="text-xl font-bold mb-4 text-amber-400 border-b border-amber-400/30 pb-2">
                    {category.category}
                  </h4>
                  <ul className="space-y-2 text-left">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-elegant text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Rezultati: Partnerstvo Rođeno iz Savršenog Događaja
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Večera je bila potpuni uspjeh. Spoj nespojivog postao je glavna
              tema razgovora, a gosti su bili oduševljeni.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center hover:shadow-gold transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                  <result.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  {result.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-luxury">
                  {result.label}
                </h3>
                <p className="text-elegant text-sm">{result.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-elegant text-lg leading-relaxed">
                Nakon ovog događaja, Shop Circle nas je angažovao za sve svoje
                korporativne potrebe, potvrđujući da smo postali njihov pouzdani
                partner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Mišljenje Klijenta
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Direktan feedback od Marine Bećirović, Office Manager-a Shop
              Circle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-6 h-6 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-amber-400 font-semibold">5.0</span>
              </div>
              <blockquote className="text-elegant text-lg leading-relaxed mb-6 italic">
                <div className="mb-4">
                  "I can't say enough great things about this catering company!
                  From start to finish, the experience was seamless,
                  professional, and genuinely impressive. Samra was incredibly
                  organized, responsive, and attentive to every detail from
                  dietary preferences to last-minute adjustments."
                </div>

                <div>
                  "And the food? Absolutely phenomenal. Every dish was
                  beautifully presented and packed with flavor. We have used
                  them for all our corporate events, big and small! Guests
                  couldn't stop raving about it, and many even asked for the
                  caterer's contact info!"
                </div>
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-luxury text-lg">
                  Marina Nikolas Becirović
                </div>
                <div className="text-amber-400/70">
                  Office Manager, Shop Circle
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-4 text-luxury">Prevod</h3>
              <blockquote className="text-elegant text-lg leading-relaxed mb-6 italic">
                <div className="mb-4">
                  "Nemam dovoljno riječi hvale za ovu ketering kompaniju! Od
                  početka do kraja, iskustvo je bilo besprijekorno,
                  profesionalno i zaista impresivno. Samra je bila nevjerovatno
                  organizovana, brza u odgovorima i posvećena svakom detalju, od
                  prehrambenih preferencija do izmjena u posljednjem trenutku."
                </div>

                <div>
                  "A hrana? Apsolutno fenomenalna. Svako jelo je bilo prelijepo
                  prezentovano i puno ukusa. Angažovali smo ih za sve naše
                  korporativne događaje, velike i male! Gosti nisu prestajali da
                  je hvale, a mnogi su čak tražili i kontakt informacije!"
                </div>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-luxury">
              Uživaju u Hrani i Razgovoru
            </h2>
            <p className="text-xl text-elegant max-w-3xl mx-auto">
              Pogledajte kako su gosti uživali u našem premium meniju
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "/gallery/Ketering_board/Ketering_Investitori-14.jpg",
              "/gallery/Ketering_board/Ketering_Investitori-21.jpg",
              "/gallery/Ketering_board/Ketering_Investitori-32.jpg",
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass-card hover:shadow-gold transition-all duration-500"
              >
                <Image
                  src={image}
                  alt={`Catering event ${index + 1} - Mali Princ Sarajevo`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-24 px-4 bg-premium-card relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-luxury">
              Zaključak
            </h2>
            <div className="space-y-6 text-elegant text-lg leading-relaxed max-w-4xl mx-auto mb-12">
              <p>
                Shop Circle je trebao partnera koji razumije da hrana nije samo
                obrok, već ključni dio poslovnog iskustva – posebno kada
                ugošćujete VIP klijente.
              </p>
              <p>
                Naš uspjeh leži u sposobnosti da slušamo, razumijemo i
                isporučimo rješenje koje prevazilazi očekivanja.
              </p>
              <p>
                Ako želite da vaš korporativni događaj ostavi nezaboravan utisak
                i besprijekorno spoji lokalni šarm sa svjetskim standardima,
                Mali Princ je vaš idealan partner.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/kontakt"
                className="btn-premium flex items-center gap-3 text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5" />
                Zatražite ponudu
              </Link>
              <a
                href="tel:+387603203835"
                className="glass-card px-8 py-4 text-elegant hover:text-luxury transition-colors duration-300"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Pozovite nas
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
