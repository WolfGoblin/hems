"use client";

import { motion } from "framer-motion";
import { Users, Ambulance, MapPin, Clock } from "lucide-react";

const stats = [
    { label: "Years Serving Zimbabwe", value: "15+", icon: Clock },
    { label: "Successful Transports", value: "12k+", icon: Ambulance },
    { label: "Cities Covered", value: "24", icon: MapPin },
    { label: "Medical Specialists", value: "50+", icon: Users },
];

export default function StatsBand() {
    return (
        <div className="relative z-20 -mt-24 pb-24 pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-10 shadow-2xl pointer-events-auto"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center text-center px-4">
                                    <div className="mb-4">
                                        <Icon className="w-8 h-8 text-hems-accent" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-tight">
                                        {stat.value}
                                    </h4>
                                    <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
