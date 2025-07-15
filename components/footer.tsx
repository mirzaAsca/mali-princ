"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Crown,
  Star,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-luxury border-t border-luxury relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <Image
                  src="/assets/images/mali-princ-logo.svg"
                  alt="Mali Princ"
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 transition-all duration-300 group-hover:scale-110 logo-glow"
                />
              </div>
              <span className="text-2xl font-bold text-luxury">Mali Princ</span>
            </Link>

            <p className="text-elegant mb-6 leading-relaxed">
              Vaša nova omiljena adresa za preukusne zalogaje, nutricionističku
              prehranu i organizaciju svih vrsta proslava.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-elegant">+387 60 320 3835</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-elegant">vip@maliprinc.ba</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-elegant">
                  Novo Sarajevo, Šipad Building
                </span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-luxury">Usluge</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/paketi"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Office Food
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/paketi"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Catering Organizator
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/galerija"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Galerija Evenata
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Konsultacije
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-luxury">
              Kompanija
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/o-nama"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  O nama
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/paketi"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Naši Paketi
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/galerija"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Galerija
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Kontakt
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog Section */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-luxury">Blog</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Recepti
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Savjeti za Proslavu
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/paketi"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Paket 3
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-elegant hover:text-luxury transition-colors duration-300 relative group"
                >
                  Kontakt
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Premium Badge */}
        <div className="border-t border-luxury/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-elegant text-sm">Pratite nas:</span>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-elegant hover:text-luxury transition-colors duration-300 p-2 rounded-full glass-card hover:shadow-gold"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-elegant hover:text-luxury transition-colors duration-300 p-2 rounded-full glass-card hover:shadow-gold"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-elegant hover:text-luxury transition-colors duration-300 p-2 rounded-full glass-card hover:shadow-gold"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Crown className="w-4 h-4 text-amber-400" />
              <span className="text-elegant text-sm">
                Premium Catering od 2009
              </span>
            </div>
          </div>
        </div>

        {/* Copyright & Rating */}
        <div className="border-t border-luxury/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-elegant text-sm">
                5-zvjezdica Premium Servis
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-elegant text-sm">
                © 2024 Mali Princ. Sva prava zadržana.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Izrađeno s ljubavlju za kulinarsko savršenstvo
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
