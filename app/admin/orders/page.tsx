"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Phone,
  Mail,
  Calendar,
  Users,
  Package,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

// Gallery images with tags for filtering (same as in OfferCreatorModal)
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

interface Order {
  id: string;
  contact: {
    name: string;
    phone: string;
  };
  event: {
    eventType: string;
    date: string;
    peopleCount: number;
    normPerPerson: number;
    duration: string;
  };
  food: {
    selectedPackage?: string;
    selectedGalleryItems: string[];
    customPreferences: string;
    allergens: string[];
  };
  accessories: {
    plates: boolean;
    balloons: boolean;
    redCarpet: boolean;
    royalPillow: boolean;
    decorations: boolean;
    staffCount: number;
  };
  submittedAt: string;
  status: "pending" | "contacted" | "confirmed" | "completed";
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch real data from API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        const result = await response.json();

        if (result.success) {
          setOrders(result.orders);
        } else {
          console.error("Failed to fetch orders:", result.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500 text-yellow-900";
      case "contacted":
        return "bg-blue-500 text-blue-900";
      case "confirmed":
        return "bg-green-500 text-green-900";
      case "completed":
        return "bg-gray-500 text-gray-900";
      default:
        return "bg-gray-500 text-gray-900";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Na čekanju";
      case "contacted":
        return "Kontaktiran";
      case "confirmed":
        return "Potvrđen";
      case "completed":
        return "Završen";
      default:
        return "Nepoznato";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-luxury flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-elegant">Učitavanje narudžbi...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-luxury mb-2">
            Upravljanje Narudžbama
          </h1>
          <p className="text-elegant">
            Pregled svih narudžbi kreiranih kroz survey formu
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-luxury mb-6">
                Sve Narudžbe ({orders.length})
              </h2>
              <div className="space-y-4">
                {orders.map((order, index) => (
                  <motion.div
                    key={order.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedOrder(order)}
                    className={`glass-card p-4 rounded-lg cursor-pointer transition-all hover:bg-amber-500/10 ${
                      selectedOrder?.id === order.id
                        ? "ring-2 ring-amber-400"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-luxury">
                            {order.contact.name}
                          </h3>
                          <p className="text-elegant text-sm">
                            {order.event.eventType}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {getStatusText(order.status)}
                        </span>
                        <p className="text-elegant text-sm mt-1">
                          {new Date(order.submittedAt).toLocaleDateString(
                            "bs-BA"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-amber-400" />
                        <span className="text-elegant">
                          {new Date(order.event.date).toLocaleDateString(
                            "bs-BA"
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-amber-400" />
                        <span className="text-elegant">
                          {order.event.peopleCount} gostiju
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-amber-400" />
                        <span className="text-elegant">
                          {order.food.selectedPackage || "Bez paketa"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ImageIcon className="w-4 h-4 text-amber-400" />
                        <span className="text-elegant">
                          {order.food.selectedGalleryItems.length} slika
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="lg:col-span-1">
            {selectedOrder ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-lg p-6"
              >
                <h2 className="text-2xl font-semibold text-luxury mb-6">
                  Detalji Narudžbe
                </h2>

                <div className="space-y-6">
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-3">
                      Kontakt Informacije
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-amber-400" />
                        <span className="text-elegant">
                          {selectedOrder.contact.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-amber-400" />
                        <span className="text-elegant">
                          {selectedOrder.contact.phone}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-3">
                      Detalji Događaja
                    </h3>
                    <div className="space-y-2 text-elegant">
                      <p>Vrsta: {selectedOrder.event.eventType}</p>
                      <p>
                        Datum:{" "}
                        {new Date(selectedOrder.event.date).toLocaleDateString(
                          "bs-BA"
                        )}
                      </p>
                      <p>Broj gostiju: {selectedOrder.event.peopleCount}</p>
                      <p>
                        Norm po osobi: {selectedOrder.event.normPerPerson}{" "}
                        zalogaja
                      </p>
                      <p>Trajanje: {selectedOrder.event.duration}</p>
                    </div>
                  </div>

                  {/* Food Preferences */}
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-3">
                      Preferencije Hrane
                    </h3>
                    <div className="space-y-2 text-elegant">
                      {selectedOrder.food.selectedPackage && (
                        <p>Paket: {selectedOrder.food.selectedPackage}</p>
                      )}
                      {selectedOrder.food.customPreferences && (
                        <p>
                          Dodatne preferencije:{" "}
                          {selectedOrder.food.customPreferences}
                        </p>
                      )}
                      {selectedOrder.food.allergens.length > 0 && (
                        <p>
                          Alergeni: {selectedOrder.food.allergens.join(", ")}
                        </p>
                      )}
                      {selectedOrder.food.selectedGalleryItems.length > 0 && (
                        <div>
                          <p className="mb-2">Odabrane slike:</p>
                          {(() => {
                            // Group selected images by tags
                            const groupedImages: { [key: string]: string[] } =
                              {};
                            selectedOrder.food.selectedGalleryItems.forEach(
                              (imageUrl) => {
                                const image = GALLERY_IMAGES.find(
                                  (img) => img.url === imageUrl
                                );
                                if (image) {
                                  image.tags.forEach((tag) => {
                                    if (!groupedImages[tag]) {
                                      groupedImages[tag] = [];
                                    }
                                    if (
                                      !groupedImages[tag].includes(imageUrl)
                                    ) {
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
                                      <div className="grid grid-cols-2 gap-2">
                                        {images.map((imageUrl, index) => (
                                          <div key={index} className="relative">
                                            <Image
                                              src={imageUrl}
                                              alt="Odabrana hrana"
                                              width={60}
                                              height={60}
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
                  </div>

                  {/* Accessories */}
                  <div>
                    <h3 className="text-lg font-semibold text-amber-400 mb-3">
                      Dodatni Aksesoari
                    </h3>
                    <div className="space-y-2 text-elegant">
                      {Object.entries(selectedOrder.accessories).map(
                        ([key, value]) => {
                          if (key === "staffCount") return null;
                          if (value) {
                            const accessory = [
                              {
                                id: "plates",
                                label: "Restoranski Tanjiri + escajg",
                              },
                              { id: "balloons", label: "Baloni" },
                              {
                                id: "redCarpet",
                                label: "Crveni Tepih + elegantna ogradica",
                              },
                              {
                                id: "royalPillow",
                                label:
                                  "Royal jastuk sa makazicama i svecanom vrpcom",
                              },
                              {
                                id: "decorations",
                                label: "Aksesoari, svijecnjaci, ukrasi",
                              },
                            ].find((opt) => opt.id === key);
                            return <p key={key}>✓ {accessory?.label}</p>;
                          }
                          return null;
                        }
                      )}
                      {selectedOrder.accessories.staffCount > 0 && (
                        <p>Konobari: {selectedOrder.accessories.staffCount}</p>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex gap-2">
                      <button className="btn-premium px-4 py-2 rounded-lg text-sm">
                        Kontaktiraj
                      </button>
                      <button className="btn-outline-premium px-4 py-2 rounded-lg text-sm">
                        Promijeni Status
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="glass-card rounded-lg p-6 text-center">
                <Eye className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                <p className="text-elegant">
                  Odaberite narudžbu za pregled detalja
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
