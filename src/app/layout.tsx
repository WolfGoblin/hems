import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import StickyContactBar from "@/components/StickyContactBar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
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
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans`}
      >
        <Navbar />
        {children}
        <StickyContactBar />
        <Footer />
      </body>
    </html>
  );
}
