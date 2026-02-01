"use client";

import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Users, Phone } from 'lucide-react';

const stats = [
    { icon: MapPin, label: "Nationwide Coverage", value: "17+ Bases", detail: "Strategically located" },
    { icon: ShieldCheck, label: "ICZ & TSCZ Partners", value: "Official", detail: "Authorized coverage" },
    { icon: Users, label: "Trauma Specialists", value: "Certified", detail: "Advanced medical care" },
    { icon: Phone, label: "Toll-Free Access", value: "591", detail: "Free from any network" },
];

export default function QuickStats() {
    return (
        <section className="relative z-20 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-gray-200/50 border border-gray-100 group hover:border-hems-blue/20 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex flex-col items-center lg:items-start">
                            <div className="w-14 h-14 rounded-2xl bg-hems-blue/5 flex items-center justify-center mb-4 group-hover:bg-hems-blue group-hover:scale-110 transition-all duration-300">
                                <stat.icon className="w-7 h-7 text-hems-blue group-hover:text-white transition-colors" />
                            </div>
                            <div className="text-center lg:text-left">
                                <p className="text-3xl font-black text-hems-blue mb-1">{stat.value}</p>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{stat.label}</p>
                                <p className="text-sm text-gray-500 font-medium">{stat.detail}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
