"use client";

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Tafadzwa M.",
        role: "Patient",
        content: "The response time was incredible. I was in shock after the accident, but the HEMS team was calm, professional, and took control immediately. They saved my life.",
        rating: 5
    },
    {
        name: "Sarah K.",
        role: "Parent",
        content: "When my son needed urgent transport to Harare, HEMS was there. The ambulance was like a mobile ICU. I felt he was in the safest hands possible.",
        rating: 5
    },
    {
        name: "Insurance Council Rep",
        role: "Partner",
        content: "HEMS has revolutionized road safety response in Zimbabwe. Their fleet and personnel are simply world-class.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-hems-blue text-white overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-20 opacity-5">
                <Quote size={400} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <h2 className="text-hems-red font-bold tracking-wider uppercase mb-2">Testimonials</h2>
                    <h3 className="text-4xl font-heading font-bold">Trusted by Zimbabwe</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(t.rating)].map((_, r) => (
                                    <Star key={r} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-200 mb-6 italic leading-relaxed">"{t.content}"</p>
                            <div>
                                <p className="font-bold text-lg">{t.name}</p>
                                <p className="text-gray-400 text-sm">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
