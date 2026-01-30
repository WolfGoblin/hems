"use client";

import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "The HEMS team arrived within 15 minutes of our collision on the Beitbridge road. Their calm professionalism stabilized my father immediately. Truly world-class service.",
        author: "Tawanda M.",
        role: "Family Transport",
        context: "Highway Collision, Masvingo Rd - Dec 2025"
    },
    {
        quote: "I never thought I'd need an ambulance, but when I did, 591 was the only number that answered instantly. The paramedics were kind, fast, and incredibly skilled.",
        author: "Sarah J.",
        role: "Private Motorist",
        context: "Medical Emergency, Harare - Jan 2026"
    },
    {
        quote: "As a logistics manager, knowing HEMS partners with ICZ gives us peace of mind for our drivers nationwide. Their response time is unmatched.",
        author: "Mr. G. Moyo",
        role: "Logistics Director",
        context: "Corporate Fleet Partner"
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
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-100 italic mb-6 leading-relaxed relative z-10">
                                "{t.quote}"
                            </p>

                            <div className="mt-auto">
                                <div className="text-xs font-bold text-hems-red uppercase tracking-wide mb-1">{t.context}</div>
                                <h4 className="font-bold text-white text-lg">{t.author}</h4>
                                <p className="text-sm text-gray-400">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
