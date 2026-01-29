import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import StatsBand from "@/components/StatsBand";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <div className="relative z-20">
        <Reveal width="100%">
           <StatsBand />
        </Reveal>
      </div>

      <Reveal width="100%" delay={0.1}>
        <ServicesSection />
      </Reveal>

      <Reveal width="100%" delay={0.2}>
        <Partners />
      </Reveal>

      <Reveal width="100%" delay={0.1}>
        <Testimonials />
      </Reveal>
    </main>
  );
}
