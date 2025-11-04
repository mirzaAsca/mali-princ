"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUslugeOpen, setIsUslugeOpen] = useState(false);
  const [isPaketiOpen, setIsPaketiOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainMenuItems = [{ href: "/", label: "Početna" }];

  const paketiItems = [
    { href: "/paketi/office-food", label: "Office Food" },
    { href: "/paketi/catering-za-evente", label: "Catering za Evente" },
    { href: "/paketi/catering-za-vjencanja", label: "Catering za Vjenčanja" },
    { href: "/paketi/catering-za-rodjendane", label: "Catering za Rođendane" },
    {
      href: "/paketi/catering-za-djevojacko-vece",
      label: "Catering za Djevojačko Veče",
    },
    {
      href: "/paketi/catering-za-baby-shower",
      label: "Catering za Baby Shower",
    },
    { href: "/paketi/catering-za-godisnjice", label: "Catering za Godišnjice" },
  ];

  const uslugeItems = [
    { href: "/catering-sarajevo", label: "Catering" },
    { href: "/organizator-dogadjanja-sarajevo", label: "Organizacija" },
    { href: "/organizator-vjencanja-sarajevo", label: "Vjenčanja" },
    { href: "/najam-catering-opreme-sarajevo", label: "Najam Opreme" },
    { href: "/ugostitelj-sarajevo", label: "Ugostitelj" },
    { href: "/proizvodaca-hrane-sarajevo", label: "Proizvodnja" },
    { href: "/usluge-vjencanja-sarajevo", label: "Usluge Vjenčanja" },
    {
      href: "/kompanija-za-upravljanje-i-organizovanje-dogadjaja-sarajevo",
      label: "Upravljanje",
    },
    {
      href: "/usluge-iznajmljivanja-opreme-zabave-sarajevo",
      label: "Najam Zabave",
    },
  ];

  const otherMenuItems = [
    { href: "/galerija", label: "Galerija" },
    { href: "/case-study-shop-circle", label: "Case Study" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-premium shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/assets/images/mali-princ-logo.svg"
                alt="Mali Princ"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20 transition-all duration-300 group-hover:scale-110 logo-glow"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Menu Items */}
            {mainMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-elegant hover:text-luxury transition-all duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* Paketi Dropdown */}
            <div
              className="relative flex-shrink-0"
              onMouseEnter={() => setIsPaketiOpen(true)}
              onMouseLeave={() => setIsPaketiOpen(false)}
            >
              <Link
                href="/paketi"
                className="relative text-elegant hover:text-luxury transition-all duration-300 font-medium group inline-flex items-center gap-1"
              >
                <span>Paketi</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <AnimatePresence>
                {isPaketiOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 glass-premium rounded-xl border border-luxury/20 shadow-xl overflow-hidden z-50"
                    style={{ position: "absolute", top: "100%", left: "0" }}
                  >
                    <div className="py-2">
                      {paketiItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-elegant hover:text-luxury hover:bg-luxury/10 transition-all duration-200 text-sm cursor-pointer"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Usluge Dropdown */}
            <div className="relative flex-shrink-0">
              <button
                className="relative text-elegant hover:text-luxury transition-all duration-300 font-medium group cursor-pointer flex items-center gap-1"
                onMouseEnter={() => setIsUslugeOpen(true)}
                onMouseLeave={() => setIsUslugeOpen(false)}
              >
                <span>Usluge</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isUslugeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 glass-premium rounded-xl border border-luxury/20 shadow-xl overflow-hidden z-50"
                    onMouseEnter={() => setIsUslugeOpen(true)}
                    onMouseLeave={() => setIsUslugeOpen(false)}
                    style={{ position: "absolute", top: "100%", left: "0" }}
                  >
                    <div className="py-2">
                      {uslugeItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="block px-4 py-3 text-elegant hover:text-luxury hover:bg-luxury/10 transition-all duration-200 text-sm cursor-pointer"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Menu Items */}
            {otherMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-elegant hover:text-luxury transition-all duration-300 font-medium group"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Admin Panel Button - Only visible in development */}
            {process.env.NODE_ENV === "development" && (
              <button
                onClick={() => window.open("/admin/orders", "_blank")}
                className="btn-outline-premium hidden lg:flex items-center space-x-2 px-4 py-2 text-xs"
              >
                📊 Admin
              </button>
            )}

            <Link
              href="/kontakt"
              className="btn-premium hidden lg:flex items-center space-x-2 px-6 py-2 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Rezerviši</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-elegant hover:text-luxury transition-colors p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-premium border-t border-luxury/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Main Menu Items */}
              {mainMenuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-elegant hover:text-luxury transition-colors py-2 text-lg"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Paketi Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: mainMenuItems.length * 0.1 }}
                className="border-top border-luxury/20 pt-4"
              >
                <div className="text-luxury font-semibold mb-2 text-sm uppercase tracking-wide">
                  Paketi
                </div>
                {paketiItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (mainMenuItems.length + index + 1) * 0.1,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-elegant hover:text-luxury transition-colors py-2 text-lg pl-4"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Mobile Usluge Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: (mainMenuItems.length + paketiItems.length) * 0.1,
                }}
                className="border-t border-luxury/20 pt-4"
              >
                <div className="text-luxury font-semibold mb-2 text-sm uppercase tracking-wide">
                  Usluge
                </div>
                {uslugeItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay:
                        (mainMenuItems.length +
                          paketiItems.length +
                          index +
                          1) *
                        0.1,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-elegant hover:text-luxury transition-colors py-2 text-lg pl-4"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Other Menu Items */}
              {otherMenuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay:
                      (mainMenuItems.length +
                        paketiItems.length +
                        uslugeItems.length +
                        index +
                        1) *
                      0.1,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-elegant hover:text-luxury transition-colors py-2 text-lg"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay:
                    (mainMenuItems.length +
                      paketiItems.length +
                      uslugeItems.length +
                      otherMenuItems.length +
                      1) *
                    0.1,
                }}
              >
                <Link
                  href="/kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-premium inline-flex items-center space-x-2 px-6 py-3 text-sm mt-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>Rezerviši</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
