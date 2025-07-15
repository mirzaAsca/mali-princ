import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mali Princ - Premium Catering & Event Management",
  description:
    "Transformišemo obične momente u nezaboravna iskustva kroz vrhunsku gastronomiju i besprekoran servis.",
  generator: "v0.dev",
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
