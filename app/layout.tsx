import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import dynamic from "next/dynamic";

// Dynamically import FloatingCTA to reduce initial bundle size
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"), {
  ssr: false,
  loading: () => null,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
});

export const metadata: Metadata = {
  title: "Mali Princ - Premium Catering & Event Management",
  description:
    "Transformišemo obične momente u nezaboravna iskustva kroz vrhunsku gastronomiju i besprekoran servis.",
  generator: "v0.dev",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B1C21",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
