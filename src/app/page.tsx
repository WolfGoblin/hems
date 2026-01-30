import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import ImpactStats from "@/components/ImpactStats";
import AccidentChecklist from "@/components/AccidentChecklist";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <Hero />

      {/* Expanded About Summary */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-hems-blue font-bold tracking-wider uppercase mb-4">About HEMS</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our mission is to set the gold standard for emergency medical response in Zimbabwe.
            With a fleet of <span className="font-bold text-hems-blue">17 fully-equipped ambulances</span> and
            <span className="font-bold text-hems-blue"> 5 rapid response vehicles</span> stationed at strategic bases nationwide,
            we have successfully assisted <span className="font-bold text-hems-blue">300+ patients</span> in the last month alone.
            We don't just respond; we save lives with speed, skill, and compassion.
          </p>
          <a href="/about" className="text-hems-red font-bold hover:underline">Read our full story &rarr;</a>
        </div>
      </section>

      <Services />
      <ImpactStats />
      <AccidentChecklist />
      <Partners />
    </main>
  );
}
