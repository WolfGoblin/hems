import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <Hero />
      <Services />
      <Partners />
      <Testimonials />
    </main>
  );
}
