import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import StatsBand from "@/components/StatsBand";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <StatsBand />
      <ServicesSection />
      <Partners />
      <Testimonials />
    </main>
  );
}
