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
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Architectural Background */}
            <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <Quote className="w-12 h-12 text-blue-200 mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 tracking-tight">
                        Trusted by the people <br/>
                        <span className="text-slate-400">we protect.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative group bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="absolute -left-2 -top-4 text-6xl text-blue-100 font-serif opacity-50">"</div>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8 relative z-10 font-medium">
                                {t.content}
                            </p>
                            <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-100 to-white flex items-center justify-center text-blue-600 font-bold border border-blue-50">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">{t.name}</p>
                                    <p className="text-slate-400 text-sm">{t.role}</p>
                                </div>
                                <div className="ml-auto flex gap-0.5">
                                    {[...Array(t.rating)].map((_, r) => (
                                        <Star key={r} className="w-4 h-4 text-amber-400 fill-current" />
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
