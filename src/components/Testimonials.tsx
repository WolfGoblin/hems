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
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <Quote className="w-12 h-12 text-hems-accent mx-auto mb-8 opacity-50" />
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                        Trusted by the people <br/>
                        <span className="text-slate-500">we protect.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute -left-4 -top-4 text-6xl text-slate-800 font-serif opacity-50">"</div>
                            <p className="text-xl text-slate-300 leading-relaxed mb-8 relative z-10 font-light">
                                {t.content}
                            </p>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-hems-accent to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-900/50">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-white">{t.name}</p>
                                    <p className="text-slate-500 text-sm">{t.role}</p>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {[...Array(t.rating)].map((_, r) => (
                                        <Star key={r} className="w-4 h-4 text-hems-accent fill-current" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
