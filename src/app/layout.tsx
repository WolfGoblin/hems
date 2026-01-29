import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Changed Montserrat to Outfit
import Navbar from "@/components/Navbar";
import StickyContactBar from "@/components/StickyContactBar";
import Footer from "@/components/Footer";
import FilmGrain from "@/components/FilmGrain"; // Added FilmGrain
import "./globals.css";

const inter = Inter({
  variable: "--font-inter", // Updated to match globals.css
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit", // Updated to match globals.css
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HEMS - Highway Emergency Medical Services",
  description: "Setting the Standard for Emergency Road Response in Zimbabwe. Call Toll Free: 591.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Updated font variables and added FilmGrain */ }
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans`}>
        <FilmGrain />
        <Navbar />
        {children}
        <StickyContactBar />
        <Footer />
      </body>
    </html>
  );
}
