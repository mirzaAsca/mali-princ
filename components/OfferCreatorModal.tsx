"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  Image as ImageIcon,
  Calendar,
  Clock,
} from "lucide-react";
import Image from "next/image";

// Types for the form data
interface ContactInfo {
  name: string;
  phone: string;
}

interface EventDetails {
  eventType: string;
  date: string;
  time?: string;
  peopleCount: number;
  normPerPerson: number;
  duration: string;
}

interface FoodPreferences {
  selectedPackage?: string;
  selectedGalleryItems: string[];
  customPreferences: string;
  allergens: string[];
}

interface Accessories {
  plates: boolean;
  balloons: boolean;
  redCarpet: boolean;
  royalPillow: boolean;
  decorations: boolean;
  staffCount: number;
}

interface OfferFormData {
  contact: ContactInfo;
  event: EventDetails;
  food: FoodPreferences;
  accessories: Accessories;
}

interface OfferCreatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Predefined event types
const EVENT_TYPES = [
  "Korporativni Event",
  "Vjenčanje",
  "Rođendan",
  "Godišnjica",
  "Poslovni Ručak",
  "Koktel Party",
  "Gala Večera",
  "Ostalo",
];

// Predefined packages with descriptions
const PACKAGES = [
  {
    id: "Premium Catering Paket",
    name: "Premium Catering Paket",
    description:
      "Kompletna usluga za vaše najbitnije trenutke. Uključuje profesionalno osoblje, elegantnu prezentaciju i vrhunsku gastronomiju.",
    details:
      "• Profesionalno osoblje (konobari, šef kuhinje)\n• Elegantna prezentacija hrane\n• Premium kvalitet sastojaka\n• Fleksibilni meni prilagođen vašim potrebama\n• Kompletna organizacija događaja\n• Dostava i postavljanje",
  },
  {
    id: "Office Food Paket",
    name: "Office Food Paket",
    description:
      "Svježa i ukusna hrana za vaš tim. Dnevne dostave, zdrave opcije i fleksibilni meniji prilagođeni poslovnim potrebama.",
    details:
      "• Dnevne dostave u vašu kancelariju\n• Zdrave opcije za tim\n• Fleksibilni meniji\n• Redovne dostave (dnevno, nedeljno, mjesečno)\n• Posebne ponude za velike timove\n• Besplatna dostava",
  },
  {
    id: "Luksuzni Eventi Paket",
    name: "Luksuzni Eventi Paket",
    description:
      "Nezaboravni događaji sa premium uslugom. Od vjenčanja do korporativnih eventa, sve sa najvišim standardima.",
    details:
      "• Vjenčanja i proslave\n• Korporativni eventi\n• Rođendani i godišnjice\n• Galerijski događaji\n• Premium dekoracija\n• Profesionalna fotografija hrane",
  },
  {
    id: "Personalizirani Meni",
    name: "Personalizirani Meni",
    description:
      "Meni kreiran prema vašim specifičnim željama i potrebama. Potpuna personalizacija za jedinstveno iskustvo.",
    details:
      "• Individualni pristup svakom klijentu\n• Kreiranje menija prema vašim preferencama\n• Posebne dijetalne zahtjeve\n• Alergeni i restrikcije\n• Kulturološki prilagođeni meniji\n• Degustacija prije događaja",
  },
];

// Duration options
const DURATION_OPTIONS = ["Do 1 sata", "1-2 sata", "3+ sata"];

// Accessory options
const ACCESSORY_OPTIONS = [
  { id: "plates", label: "Restoranski Tanjiri + escajg" },
  { id: "balloons", label: "Baloni" },
  {
    id: "redCarpet",
    label: "Crveni Tepih + elegantna ogradica",
  },
  {
    id: "royalPillow",
    label: "Royal jastuk sa makazicama i svecanom vrpcom",
  },
  {
    id: "decorations",
    label: "Aksesoari, svijecnjaci, ukrasi",
  },
];

// Gallery images with tags for filtering
const GALLERY_IMAGES = [
  {
    url: "/gallery/Ketering/Ketering_Hullk-2.jpg",
    tags: ["Finger Food", "Gotova Jela"],
  },
  {
    url: "/gallery/Ketering/Ketering_Hullk-3.jpg",
    tags: ["Slatki Program", "Vocne Salate"],
  },
  {
    url: "/gallery/Ketering/Ketering_Hullk-4.jpg",
    tags: ["Gotova Jela", "Hladne Plate"],
  },
  { url: "/gallery/Ketering/Ketering_Hullk-5.jpg", tags: ["Finger Food"] },
  { url: "/gallery/Ketering/Ketering_Hullk-6.jpg", tags: ["Slatki Program"] },
  { url: "/gallery/Ketering/Ketering_Hullk-7.jpg", tags: ["Gotova Jela"] },
  { url: "/gallery/Ketering/Ketering_Hullk-8.jpg", tags: ["Hladne Plate"] },
  { url: "/gallery/Ketering/Ketering_Hullk-9.jpg", tags: ["Vocne Salate"] },
  {
    url: "/gallery/Ketering/Ketering_Hullk-10.jpg",
    tags: ["Finger Food", "Gotova Jela"],
  },
  { url: "/gallery/Ketering/Ketering_Hullk-11.jpg", tags: ["Slatki Program"] },
  {
    url: "/gallery/Ketering/Ketering_Hullk-12.jpg",
    tags: ["Gotova Jela", "Hladne Plate"],
  },
  { url: "/gallery/Ketering/Ketering_Hullk-13.jpg", tags: ["Vocne Salate"] },
  { url: "/gallery/Ketering/Ketering_Hullk-14.jpg", tags: ["Finger Food"] },
  { url: "/gallery/Ketering/Ketering_Hullk-15.jpg", tags: ["Slatki Program"] },
  { url: "/gallery/Ketering/Ketering_Hullk-16.jpg", tags: ["Gotova Jela"] },
  { url: "/gallery/Ketering/Ketering_Hullk-17.jpg", tags: ["Hladne Plate"] },
  { url: "/gallery/Ketering/Ketering_Hullk-18.jpg", tags: ["Vocne Salate"] },
  {
    url: "/gallery/Ketering/Ketering_Hullk-19.jpg",
    tags: ["Finger Food", "Gotova Jela"],
  },
  { url: "/gallery/Ketering/Ketering_Hullk-20.jpg", tags: ["Slatki Program"] },
  {
    url: "/gallery/Ketering/Ketering_Hullk-21.jpg",
    tags: ["Gotova Jela", "Hladne Plate"],
  },
  { url: "/gallery/Ketering/Ketering_Hullk-22.jpg", tags: ["Vocne Salate"] },
  { url: "/gallery/Ketering/Ketering_Hullk-23.jpg", tags: ["Finger Food"] },
  { url: "/gallery/Ketering/Ketering_Hullk-24.jpg", tags: ["Slatki Program"] },
  { url: "/gallery/Ketering/Ketering_Hullk-25.jpg", tags: ["Gotova Jela"] },
];

const GALLERY_TAGS = [
  "Finger Food",
  "Slatki Program",
  "Gotova Jela",
  "Hladne Plate",
  "Vocne Salate",
];

// Gratis items to show after submit
const GRATIS_ITEMS = [
  "Besplatne konsultacije!",
  "Besplatno iznajmljivanje cheff dish proffesional posudja!",
  "Besplatne jednokratne ambalaze!",
  "Besplatna dostava!",
  "Bez placanja unaprijed!",
  "100% garanciju na kvalitet ili vracamo pare!",
];

export default function OfferCreatorModal({
  isOpen,
  onClose,
}: OfferCreatorModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OfferFormData>({
    contact: { name: "", phone: "" },
    event: {
      eventType: "",
      date: "",
      peopleCount: 0,
      normPerPerson: 7,
      duration: "",
    },
    food: {
      selectedGalleryItems: [],
      customPreferences: "",
      allergens: [],
    },
    accessories: {
      plates: false,
      balloons: false,
      redCarpet: false,
      royalPillow: false,
      decorations: false,
      staffCount: 0,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showGratisAnimation, setShowGratisAnimation] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [currentGratisItem, setCurrentGratisItem] = useState(0);
  const [showCloseConfirmation, setShowCloseConfirmation] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);

  const totalSteps = 8;

  const updateFormData = (section: keyof OfferFormData, data: any) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], ...data },
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setHasStartedForm(true);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Show gratis animation first
    setShowGratisAnimation(true);
    setCurrentGratisItem(0);

    // Animate through gratis items with longer display time
    for (let i = 0; i < GRATIS_ITEMS.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 2500)); // Longer display time
      setCurrentGratisItem(i);
    }

    // Show review after gratis animation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setShowGratisAnimation(false);
    setShowReview(true);
    setIsSubmitting(false); // Stop the loading state
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Submit to API
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowReview(false);
        setShowConfetti(true);
        setIsSubmitting(false);

        // Close modal after 2 seconds
        setTimeout(() => {
          onClose();
          setShowConfetti(false);
          setCurrentStep(1);
          setShowGratisAnimation(false);
          setShowReview(false);
          setCurrentGratisItem(0);
          setFormData({
            contact: { name: "", phone: "" },
            event: {
              eventType: "",
              date: "",
              peopleCount: 0,
              normPerPerson: 7,
              duration: "",
            },
            food: {
              selectedGalleryItems: [],
              customPreferences: "",
              allergens: [],
            },
            accessories: {
              plates: false,
              balloons: false,
              redCarpet: false,
              royalPillow: false,
              decorations: false,
              staffCount: 0,
            },
          });
        }, 2000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setIsSubmitting(false);
      // You could show an error message here
    }
  };

  const getStepTitle = (step: number) => {
    const titles = {
      1: "Kontakt Informacije",
      2: "Vrsta Događaja",
      3: "Datum Događaja",
      4: "Broj Gostiju",
      5: "Trajanje Događaja",
      6: "Preferencije Hrane",
      7: "Alergeni",
      8: "Dodatni Aksesoari",
    };
    return titles[step as keyof typeof titles] || "";
  };

  const getStepDescription = (step: number) => {
    const descriptions = {
      1: "Molimo vas da unesete vaše osnovne kontakt informacije",
      2: "Odaberite vrstu događaja koji planirate",
      3: "Odaberite datum vašeg događaja",
      4: "Koliko gostiju očekujete?",
      5: "Koliko dugo će trajati vaš događaj?",
      6: "Odaberite hranu prema vašim preferencijama",
      7: "Navedite alergene koje trebamo izbjegavati",
      8: "Odaberite dodatne aksesoare za vaš događaj",
    };
    return descriptions[step as keyof typeof descriptions] || "";
  };

  if (!isOpen) return null;

  const handleCloseAttempt = () => {
    if (hasStartedForm && currentStep > 1) {
      setShowCloseConfirmation(true);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleCloseAttempt}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative glass-card w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl rounded-2xl border border-gray-800"
        style={{ fontFamily: "inherit" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4 bg-transparent">
          <div>
            <h2 className="text-3xl font-bold text-luxury">
              Kreirajte Vašu Ponudu
            </h2>
            <p className="text-elegant mt-1 text-base">
              {getStepTitle(currentStep)} - Korak {currentStep} od {totalSteps}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-elegant hover:text-amber-400 transition-colors"
            aria-label="Zatvori"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-8 pb-2">
          <div className="w-full bg-gray-800/40 rounded-full h-2">
            <motion.div
              className="bg-amber-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6 max-h-[60vh] overflow-y-auto bg-luxury/90">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-luxury mb-2">
                  {getStepTitle(currentStep)}
                </h3>
                <p className="text-elegant text-base">
                  {getStepDescription(currentStep)}
                </p>
              </div>

              {/* Step Content */}
              {currentStep === 1 && (
                <ContactStep
                  data={formData.contact}
                  onChange={(data) => updateFormData("contact", data)}
                />
              )}

              {currentStep === 2 && (
                <EventTypeStep
                  data={formData.event}
                  onChange={(data) => updateFormData("event", data)}
                />
              )}

              {currentStep === 3 && (
                <DateStep
                  data={formData.event}
                  onChange={(data) => updateFormData("event", data)}
                />
              )}

              {currentStep === 4 && (
                <PeopleStep
                  data={formData.event}
                  onChange={(data) => updateFormData("event", data)}
                />
              )}

              {currentStep === 5 && (
                <DurationStep
                  data={formData.event}
                  onChange={(data) => updateFormData("event", data)}
                />
              )}

              {currentStep === 6 && (
                <FoodStep
                  data={formData.food}
                  onChange={(data) => updateFormData("food", data)}
                />
              )}

              {currentStep === 7 && (
                <AllergenStep
                  data={formData.food}
                  onChange={(data) => updateFormData("food", data)}
                />
              )}

              {currentStep === 8 && (
                <AccessoriesStep
                  data={formData.accessories}
                  onChange={(data) => updateFormData("accessories", data)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="bg-luxury/95 px-8 py-6 border-t border-gray-800 flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-4 py-2 text-elegant hover:text-luxury disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Prethodni
          </button>

          <div className="flex items-center gap-3">
            {currentStep === totalSteps ? (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-premium px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Slanje...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    Pošaljite Ponudu
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={nextStep}
                className="btn-premium px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
              >
                SLJEDEĆI
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Gratis Animation */}
        <AnimatePresence>
          {showGratisAnimation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-60 flex items-center justify-center"
            >
              <div className="text-center">
                <motion.div
                  key={currentGratisItem}
                  initial={{ scale: 0, opacity: 0, y: 50, rotate: -10 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                  }}
                  exit={{ scale: 0, opacity: 0, y: -50, rotate: 10 }}
                  transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 150,
                  }}
                  className="bg-gradient-to-br from-amber-400 to-amber-600 text-white px-8 py-6 rounded-2xl shadow-2xl max-w-md mx-auto relative overflow-hidden"
                >
                  {/* Animated background elements */}
                  <motion.div
                    animate={{
                      rotate: 360,
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  />

                  <motion.div
                    initial={{ scale: 0, y: 50 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="text-6xl mb-4"
                  >
                    ✅
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
                    className="text-2xl font-bold mb-2"
                  >
                    {GRATIS_ITEMS[currentGratisItem]}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-amber-100 text-sm font-semibold"
                  >
                    🎉 GRATIS! 🎉
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Review Order */}
        <AnimatePresence>
          {showReview && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-60 flex items-center justify-center"
            >
              <div className="bg-luxury rounded-2xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto">
                <h2 className="text-3xl font-bold text-luxury mb-6 text-center">
                  Pregled Vaše Ponude
                </h2>

                <div className="space-y-6">
                  {/* Contact Info */}
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-400 mb-4">
                      Kontakt Informacije
                    </h3>
                    <p className="text-elegant">Ime: {formData.contact.name}</p>
                    <p className="text-elegant">
                      Telefon: {formData.contact.phone}
                    </p>
                  </div>

                  {/* Event Details */}
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-400 mb-4">
                      Detalji Događaja
                    </h3>
                    <p className="text-elegant">
                      Vrsta: {formData.event.eventType}
                    </p>
                    <p className="text-elegant">Datum: {formData.event.date}</p>
                    <p className="text-elegant">
                      Broj gostiju: {formData.event.peopleCount}
                    </p>
                    <p className="text-elegant">
                      Norm po osobi: {formData.event.normPerPerson} zalogaja
                    </p>
                    <p className="text-elegant">
                      Trajanje: {formData.event.duration}
                    </p>
                  </div>

                  {/* Food Preferences */}
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-400 mb-4">
                      Preferencije Hrane
                    </h3>
                    {formData.food.selectedPackage && (
                      <p className="text-elegant">
                        Paket: {formData.food.selectedPackage}
                      </p>
                    )}
                    {formData.food.customPreferences && (
                      <p className="text-elegant">
                        Dodatne preferencije: {formData.food.customPreferences}
                      </p>
                    )}
                    {formData.food.allergens.length > 0 && (
                      <p className="text-elegant">
                        Alergeni: {formData.food.allergens.join(", ")}
                      </p>
                    )}
                    {formData.food.selectedGalleryItems.length > 0 && (
                      <div>
                        <p className="text-elegant mb-2">Odabrane slike:</p>
                        {(() => {
                          // Group selected images by tags
                          const groupedImages: { [key: string]: string[] } = {};
                          formData.food.selectedGalleryItems.forEach(
                            (imageUrl) => {
                              const image = GALLERY_IMAGES.find(
                                (img) => img.url === imageUrl
                              );
                              if (image) {
                                image.tags.forEach((tag) => {
                                  if (!groupedImages[tag]) {
                                    groupedImages[tag] = [];
                                  }
                                  if (!groupedImages[tag].includes(imageUrl)) {
                                    groupedImages[tag].push(imageUrl);
                                  }
                                });
                              }
                            }
                          );

                          return (
                            <div className="space-y-3">
                              {Object.entries(groupedImages).map(
                                ([tag, images]) => (
                                  <div
                                    key={tag}
                                    className="border border-gray-700 rounded-lg p-3"
                                  >
                                    <h6 className="text-amber-400 font-semibold mb-2">
                                      {tag}:
                                    </h6>
                                    <div className="grid grid-cols-3 gap-2">
                                      {images.map((imageUrl, index) => (
                                        <div key={index} className="relative">
                                          <Image
                                            src={imageUrl}
                                            alt="Odabrana hrana"
                                            width={80}
                                            height={80}
                                            className="rounded-lg object-cover"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          );
                        })()}
                      </div>
                    )}
                  </div>

                  {/* Accessories */}
                  <div className="glass-card p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-amber-400 mb-4">
                      Dodatni Aksesoari
                    </h3>
                    {Object.entries(formData.accessories).map(
                      ([key, value]) => {
                        if (key === "staffCount") return null;
                        if (value) {
                          return (
                            <p key={key} className="text-elegant">
                              ✓{" "}
                              {
                                ACCESSORY_OPTIONS.find((opt) => opt.id === key)
                                  ?.label
                              }
                            </p>
                          );
                        }
                        return null;
                      }
                    )}
                    {formData.accessories.staffCount > 0 && (
                      <p className="text-elegant">
                        Konobari: {formData.accessories.staffCount}
                      </p>
                    )}
                  </div>

                  {/* Gratis Items */}
                  <div className="glass-card p-6 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <h3 className="text-xl font-semibold text-amber-400 mb-4">
                      🎁 Besplatno Uključeno
                    </h3>
                    {GRATIS_ITEMS.map((item, index) => (
                      <p
                        key={index}
                        className="text-elegant flex items-center gap-2"
                      >
                        <span className="text-amber-400">✓</span>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={() => setShowReview(false)}
                    className="btn-outline-premium px-6 py-3 rounded-lg font-semibold"
                  >
                    Nazad
                  </button>
                  <button
                    onClick={handleFinalSubmit}
                    disabled={isSubmitting}
                    className="btn-premium px-6 py-3 rounded-lg font-semibold flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Slanje...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        Potvrdi Ponudu
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confetti Animation */}
        <AnimatePresence>
          {showConfetti && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 flex items-center justify-center"
            >
              {/* Confetti particles */}
              {[...Array(100)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    x: Math.random() * window.innerWidth,
                    y: -20,
                    opacity: 1,
                    scale: 0,
                  }}
                  animate={{
                    y: window.innerHeight + 20,
                    opacity: 0,
                    scale: 1,
                    rotate: 720,
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                  className="absolute pointer-events-none"
                  style={{
                    left: Math.random() * 100 + "%",
                    fontSize: Math.random() * 20 + 20 + "px",
                    animationDelay: Math.random() * 3 + "s",
                  }}
                >
                  {
                    [
                      "🎉",
                      "🎊",
                      "✨",
                      "💫",
                      "🌟",
                      "🎈",
                      "🎁",
                      "💎",
                      "🎆",
                      "🎇",
                      "🧨",
                      "🎐",
                    ][Math.floor(Math.random() * 12)]
                  }
                </motion.div>
              ))}

              <div className="text-center relative z-10">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                  className="bg-gradient-to-br from-amber-400 to-amber-600 text-white px-8 py-6 rounded-2xl shadow-2xl max-w-md mx-auto"
                >
                  <motion.div
                    animate={{
                      rotate: [0, -10, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-6xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4">Čestitamo!</h3>
                  <p className="text-xl mb-2">
                    Uspješno ste kreirali ponudu na Mali Princ - Food & Stories
                  </p>
                  <p className="text-amber-100 mb-6">
                    Javit ćemo vam se u najkraćem roku!
                  </p>
                  <button
                    onClick={() => {
                      setShowConfetti(false);
                      onClose();
                      setCurrentStep(1);
                      setShowGratisAnimation(false);
                      setShowReview(false);
                      setCurrentGratisItem(0);
                      setFormData({
                        contact: { name: "", phone: "" },
                        event: {
                          eventType: "",
                          date: "",
                          peopleCount: 0,
                          normPerPerson: 7,
                          duration: "",
                        },
                        food: {
                          selectedGalleryItems: [],
                          customPreferences: "",
                          allergens: [],
                        },
                        accessories: {
                          plates: false,
                          balloons: false,
                          redCarpet: false,
                          royalPillow: false,
                          decorations: false,
                          staffCount: 0,
                        },
                      });
                    }}
                    className="btn-premium px-6 py-3 rounded-lg font-semibold"
                  >
                    Zatvori
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Close Confirmation Dialog */}
        <AnimatePresence>
          {showCloseConfirmation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-70 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="bg-luxury rounded-lg p-6 max-w-md w-full border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-luxury mb-4">
                  Sigurni ste da želite zatvoriti?
                </h3>
                <p className="text-elegant mb-6">
                  Vaši podaci će biti izgubljeni ako zatvorite modal bez
                  završetka.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowCloseConfirmation(false)}
                    className="btn-outline-premium px-4 py-2 rounded-lg flex-1"
                  >
                    Nastavi
                  </button>
                  <button
                    onClick={() => {
                      setShowCloseConfirmation(false);
                      onClose();
                    }}
                    className="btn-premium px-4 py-2 rounded-lg flex-1"
                  >
                    Zatvori
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// Step Components with enhanced animations
function ContactStep({
  data,
  onChange,
}: {
  data: ContactInfo;
  onChange: (data: Partial<ContactInfo>) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div>
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Ime i Prezime *
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => onChange({ name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          placeholder="Unesite vaše ime i prezime"
          required
        />
      </div>
      <div>
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Kontakt Telefon *
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          placeholder="+387 60 000 000"
          required
        />
      </div>
    </motion.div>
  );
}

function EventTypeStep({
  data,
  onChange,
}: {
  data: EventDetails;
  onChange: (data: Partial<EventDetails>) => void;
}) {
  const [customEventType, setCustomEventType] = useState("");

  // Update custom event type when data changes
  React.useEffect(() => {
    if (
      data.eventType &&
      data.eventType !== "Ostalo" &&
      !EVENT_TYPES.includes(data.eventType)
    ) {
      setCustomEventType(data.eventType);
    }
  }, [data.eventType]);

  // Prevent re-renders from losing focus
  const handleCustomEventChange = (value: string) => {
    setCustomEventType(value);
    // Only update if the value is different to prevent unnecessary re-renders
    if (data.eventType !== value) {
      onChange({ eventType: value });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <p className="text-elegant mb-4">
        Koju vrstu događaja/eventa/prigode ili nešto slično imate?
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {EVENT_TYPES.map((type, index) => (
          <motion.button
            key={type}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => {
              if (type === "Ostalo") {
                onChange({ eventType: "Ostalo" });
              } else {
                onChange({ eventType: type });
                setCustomEventType("");
              }
            }}
            className={`p-4 rounded-lg border-2 transition-all ${
              data.eventType === type
                ? "border-amber-500 bg-amber-50 text-amber-700"
                : "border-gray-200 hover:border-amber-300"
            }`}
          >
            {type}
          </motion.button>
        ))}
      </div>

      {data.eventType === "Ostalo" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4"
        >
          <label className="block text-base font-semibold text-amber-400 mb-2">
            Opisite vaš događaj
          </label>
          <textarea
            value={customEventType}
            onChange={(e) => handleCustomEventChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="Opisite detaljno vaš događaj..."
            rows={3}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

function DateStep({
  data,
  onChange,
}: {
  data: EventDetails;
  onChange: (data: Partial<EventDetails>) => void;
}) {
  // Set today's date as default if not set
  React.useEffect(() => {
    if (!data.date) {
      const today = new Date().toISOString().split("T")[0];
      onChange({ date: today });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-base font-semibold text-amber-400 mb-2">
            Odaberite Datum *
          </label>
          <div className="relative">
            <input
              type="date"
              value={data.date}
              onChange={(e) => onChange({ date: e.target.value })}
              className="w-full px-4 py-3 pl-12 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              required
              min={new Date().toISOString().split("T")[0]}
            />
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400 pointer-events-none z-10" />
          </div>
        </div>
        <div>
          <label className="block text-base font-semibold text-amber-400 mb-2">
            Vrijeme (8:00 - 22:00)
          </label>
          <div className="relative">
            <select
              value={data.time || "18:00"}
              onChange={(e) => onChange({ time: e.target.value })}
              className="w-full px-4 py-3 pl-12 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            >
              <option value="08:00">08:00</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-amber-400" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PeopleStep({
  data,
  onChange,
}: {
  data: EventDetails;
  onChange: (data: Partial<EventDetails>) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Koliko ljudi će prisustvovati? *
        </label>
        <input
          type="number"
          value={data.peopleCount}
          onChange={(e) => onChange({ peopleCount: parseInt(e.target.value) })}
          className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-elegant/60 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          placeholder="Unesite broj gostiju"
          min="1"
          required
        />
      </div>

      <div>
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Normativ po osobi (zalogaji)
        </label>
        <select
          value={data.normPerPerson}
          onChange={(e) =>
            onChange({ normPerPerson: parseInt(e.target.value) })
          }
          className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-elegant/60 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        >
          <option value={5}>5 zalogaja/osobi</option>
          <option value={6}>6 zalogaja/osobi</option>
          <option value={7}>7 zalogaja/osobi (preporučeno)</option>
          <option value={8}>8 zalogaja/osobi</option>
          <option value={9}>9 zalogaja/osobi</option>
          <option value={10}>10 zalogaja/osobi</option>
        </select>
      </div>
    </motion.div>
  );
}

function DurationStep({
  data,
  onChange,
}: {
  data: EventDetails;
  onChange: (data: Partial<EventDetails>) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <p className="text-elegant mb-4">Trajanje eventa</p>
      <div className="space-y-3">
        {DURATION_OPTIONS.map((duration, index) => (
          <motion.button
            key={duration}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onChange({ duration })}
            className={`w-full p-4 rounded-lg border-2 transition-all ${
              data.duration === duration
                ? "border-amber-500 bg-amber-50 text-amber-700"
                : "border-gray-200 hover:border-amber-300"
            }`}
          >
            {duration}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

function FoodStep({
  data,
  onChange,
}: {
  data: FoodPreferences;
  onChange: (data: Partial<FoodPreferences>) => void;
}) {
  const [showGallery, setShowGallery] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string>("");

  const toggleGalleryItem = (imageUrl: string) => {
    const newSelectedItems = data.selectedGalleryItems.includes(imageUrl)
      ? data.selectedGalleryItems.filter((item) => item !== imageUrl)
      : [...data.selectedGalleryItems, imageUrl];
    onChange({ selectedGalleryItems: newSelectedItems });
  };

  const filteredImages = selectedTag
    ? GALLERY_IMAGES.filter((img) => img.tags.includes(selectedTag))
    : GALLERY_IMAGES;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div>
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Odaberite paket (opciono)
        </label>
        <select
          value={data.selectedPackage || ""}
          onChange={(e) => onChange({ selectedPackage: e.target.value })}
          className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        >
          <option value="">Odaberite paket...</option>
          {PACKAGES.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.name}
            </option>
          ))}
        </select>

        {/* Selected package details */}
        {data.selectedPackage && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 p-4 bg-amber-500/10 border border-amber-400/30 rounded-lg"
          >
            {PACKAGES.find((pkg) => pkg.id === data.selectedPackage) && (
              <div>
                <h4 className="font-semibold text-amber-400 mb-2 text-lg">
                  {
                    PACKAGES.find((pkg) => pkg.id === data.selectedPackage)
                      ?.name
                  }
                </h4>
                <p className="text-elegant mb-3">
                  {
                    PACKAGES.find((pkg) => pkg.id === data.selectedPackage)
                      ?.description
                  }
                </p>
                <div className="text-elegant text-sm">
                  <h5 className="font-semibold text-amber-400 mb-2">
                    Uključeno:
                  </h5>
                  <div className="space-y-1">
                    {PACKAGES.find((pkg) => pkg.id === data.selectedPackage)
                      ?.details.split("\n")
                      .map((detail, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <span className="text-amber-400 mt-1">•</span>
                          <span>{detail.replace("• ", "")}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>

      <div>
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Dodatne preferencije hrane
        </label>
        <textarea
          value={data.customPreferences}
          onChange={(e) => onChange({ customPreferences: e.target.value })}
          className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-elegant/60 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          rows={4}
          placeholder="Navedite sve hranu koju preferirate..."
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <label className="block text-base font-semibold text-amber-400">
            Odaberite hranu iz naše galerije
          </label>
          <button
            onClick={() => setShowGallery(!showGallery)}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ImageIcon className="w-4 h-4" />
            {showGallery ? "Sakrij galeriju" : "Prikaži galeriju"}
          </button>
        </div>

        {showGallery && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-4"
          >
            {/* Filter Tags */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag("")}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTag === ""
                    ? "bg-amber-500 text-white"
                    : "bg-gray-700 text-elegant hover:bg-gray-600"
                }`}
              >
                Sve
              </button>
              {GALLERY_TAGS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedTag === tag
                      ? "bg-amber-500 text-white"
                      : "bg-gray-700 text-elegant hover:bg-gray-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 max-h-64 overflow-y-auto p-4 bg-black/20 rounded-lg">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => toggleGalleryItem(image.url)}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    data.selectedGalleryItems.includes(image.url)
                      ? "border-amber-400 ring-2 ring-amber-400/50"
                      : "border-gray-600 hover:border-amber-300"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt="Hrana iz galerije"
                    width={100}
                    height={100}
                    className="w-full h-24 object-cover"
                  />
                  {data.selectedGalleryItems.includes(image.url) && (
                    <div className="absolute inset-0 bg-amber-400/20 flex items-center justify-center">
                      <Check className="w-6 h-6 text-white bg-amber-500 rounded-full p-1" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {data.selectedGalleryItems.length > 0 && (
          <div className="mt-4">
            <p className="text-elegant text-sm mb-2">
              Odabrano {data.selectedGalleryItems.length} slika
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function AllergenStep({
  data,
  onChange,
}: {
  data: FoodPreferences;
  onChange: (data: Partial<FoodPreferences>) => void;
}) {
  const [customAllergen, setCustomAllergen] = useState("");
  const allergens = [
    "Gluten",
    "Laktoza",
    "Orah",
    "Jaja",
    "Riba",
    "Školjke",
    "Soja",
    "Sesam",
  ];

  const toggleAllergen = (allergen: string) => {
    const newAllergens = data.allergens.includes(allergen)
      ? data.allergens.filter((a) => a !== allergen)
      : [...data.allergens, allergen];
    onChange({ allergens: newAllergens });
  };

  const addCustomAllergen = () => {
    if (
      customAllergen.trim() &&
      !data.allergens.includes(customAllergen.trim())
    ) {
      onChange({ allergens: [...data.allergens, customAllergen.trim()] });
      setCustomAllergen("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <p className="text-elegant mb-4">
        Navedite sve alergene koje želite izbjegavati
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {allergens.map((allergen, index) => (
          <motion.label
            key={allergen}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={data.allergens.includes(allergen)}
              onChange={() => toggleAllergen(allergen)}
              className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
            />
            <span className="text-luxury">{allergen}</span>
          </motion.label>
        ))}
      </div>

      {/* Custom allergen input */}
      <div className="mt-6">
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Dodajte drugi alergen
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={customAllergen}
            onChange={(e) => setCustomAllergen(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            placeholder="Unesite alergen..."
            onKeyPress={(e) => e.key === "Enter" && addCustomAllergen()}
          />
          <button
            onClick={addCustomAllergen}
            className="btn-premium px-4 py-3 rounded-lg"
          >
            Dodaj
          </button>
        </div>
      </div>

      {/* Selected allergens display */}
      {data.allergens.length > 0 && (
        <div className="mt-4">
          <p className="text-elegant text-sm mb-2">Odabrani alergeni:</p>
          <div className="flex flex-wrap gap-2">
            {data.allergens.map((allergen, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm flex items-center gap-2 cursor-pointer hover:bg-amber-500/30 transition-colors"
                onClick={() => toggleAllergen(allergen)}
              >
                {allergen}
                <X className="w-3 h-3" />
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function AccessoriesStep({
  data,
  onChange,
}: {
  data: Accessories;
  onChange: (data: Partial<Accessories>) => void;
}) {
  const [customRequest, setCustomRequest] = useState("");
  const toggleAccessory = (accessory: keyof Accessories) => {
    onChange({ [accessory]: !data[accessory] });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <p className="text-elegant mb-4">Da li želite dodatne aksesoare?</p>

      <div className="space-y-3">
        {ACCESSORY_OPTIONS.map((accessory, index) => (
          <motion.label
            key={accessory.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={data[accessory.id as keyof Accessories] as boolean}
                onChange={() =>
                  toggleAccessory(accessory.id as keyof Accessories)
                }
                className="w-4 h-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500"
              />
              <span className="text-luxury">{accessory.label}</span>
            </div>
          </motion.label>
        ))}
      </div>

      {/* Custom requests */}
      <div>
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Dodatni zahtjevi (opciono)
        </label>
        <textarea
          value={customRequest}
          onChange={(e) => setCustomRequest(e.target.value)}
          className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          rows={3}
          placeholder="Navedite sve dodatne zahtjeve koji nisu u listi..."
        />
      </div>

      <div>
        <label className="block text-base font-semibold text-amber-400 mb-2">
          Broj konobara (opciono)
        </label>
        <select
          value={data.staffCount}
          onChange={(e) => onChange({ staffCount: parseInt(e.target.value) })}
          className="w-full px-4 py-3 border border-gray-800 rounded-lg bg-black/60 text-luxury placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
        >
          <option value={0}>Bez osoblja</option>
          <option value={1}>1 konobar</option>
          <option value={2}>2 konobara</option>
          <option value={3}>3 konobara</option>
          <option value={4}>4 konobara</option>
          <option value={5}>5 konobara</option>
        </select>
      </div>
    </motion.div>
  );
}
