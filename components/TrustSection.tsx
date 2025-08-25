// "use client";

// import { useState, useEffect } from "react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import {
//   Award,
//   Shield,
//   CheckCircle,
//   Star,
//   Crown,
//   FileCheck,
//   Clock,
//   Users,
//   BadgeCheck,
// } from "lucide-react";

// interface TrustSectionProps {
//   className?: string;
// }

// interface TrustItem {
//   id: string;
//   icon: any;
//   title: string;
//   description: string;
//   badge?: string;
//   color: string;
// }

// const TRUST_ITEMS: TrustItem[] = [
//   {
//     id: "1",
//     icon: Award,
//     title: "Certifikovana Kvaliteta",
//     description:
//       "Posjedujemo sve potrebne dozvole i certifikate za pripremu i dostavu hrane po najvišim standardima",
//     badge: "HACCP",
//     color: "text-blue-400",
//   },
//   {
//     id: "2",
//     icon: Shield,
//     title: "Garantovano Zadovoljstvo",
//     description:
//       "100% garancija zadovoljstva ili povrat novca. Vaše povjerenje je naša najveća vrijednost",
//     badge: "100%",
//     color: "text-green-400",
//   },
//   {
//     id: "3",
//     icon: Crown,
//     title: "Premium Partner Status",
//     description:
//       "Zvanični premium partner vodećih hotela i korporacija u Sarajevu i okolici",
//     badge: "VIP",
//     color: "text-amber-400",
//   },
//   {
//     id: "4",
//     icon: CheckCircle,
//     title: "Bezbjednosni Standardi",
//     description:
//       "Striktno poštovanje svih zdravstvenih i bezbjednosnih protokola u pripremi i dostavi",
//     badge: "ISO",
//     color: "text-purple-400",
//   },
//   {
//     id: "5",
//     icon: Clock,
//     title: "Tačnost Dostave",
//     description:
//       "98% naših dostava stigno na vrijeme. Vaš schedule je naš prioritet",
//     badge: "98%",
//     color: "text-orange-400",
//   },
//   {
//     id: "6",
//     icon: BadgeCheck,
//     title: "Verifikovana Kompanija",
//     description:
//       "Registrovana i licencirana kompanija sa transparentnim poslovanjem i referencama",
//     badge: "VERIFIED",
//     color: "text-cyan-400",
//   },
// ];

// // Achievements section removed for a leaner homepage

// export default function TrustSection({ className = "" }: TrustSectionProps) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <section
//       ref={ref}
//       className={`py-20 lg:py-32 relative overflow-hidden ${className}`}
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,215,0,0.08),transparent_70%)] pointer-events-none" />

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Shield className="w-6 h-6 text-amber-400" />
//             <span className="text-amber-400 font-medium uppercase tracking-wider">
//               Povjerenje & Sigurnost
//             </span>
//           </div>

//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-elegant mb-4">
//             Vaša Sigurnost je Naš
//             <span className="text-luxury bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent ml-2">
//               Prioritet
//             </span>
//           </h2>

//           <p className="text-lg text-amber-400/80 max-w-2xl mx-auto">
//             Gradimo povjerenje kroz transparentnost, kvaliteta i dugogodišnje
//             iskustvo u catering industriji
//           </p>
//         </motion.div>

//         {/* Trust Items Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//           {TRUST_ITEMS.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="glass-card rounded-xl p-8 text-center group hover:shadow-gold transition-all duration-300 relative overflow-hidden"
//             >
//               {/* Badge */}
//               {item.badge && (
//                 <div className="absolute top-4 right-4">
//                   <span className="bg-amber-400/20 border border-amber-400/30 text-amber-400 text-xs font-bold px-2 py-1 rounded-full">
//                     {item.badge}
//                   </span>
//                 </div>
//               )}

//               {/* Icon */}
//               <div
//                 className={`${item.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}
//               >
//                 <item.icon className="w-12 h-12" />
//               </div>

//               {/* Content */}
//               <h3 className="text-xl font-bold text-elegant mb-4 group-hover:text-amber-400 transition-colors duration-300">
//                 {item.title}
//               </h3>

//               <p className="text-amber-400/70 leading-relaxed text-sm">
//                 {item.description}
//               </p>

//               {/* Hover Effect */}
//               <div className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-20 left-10 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-600/5 rounded-full blur-3xl" />
//     </section>
//   );
// }
