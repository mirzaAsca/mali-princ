"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Početna" },
    { href: "/o-nama", label: "O nama" },
    { href: "/paketi", label: "Paketi" },
    { href: "/galerija", label: "Galerija" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-premium" : "bg-transparent"
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
            {menuItems.map((item) => (
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
              {menuItems.map((item, index) => (
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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: menuItems.length * 0.1 }}
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
