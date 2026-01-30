"use client";

import { motion } from 'framer-motion';
import { Clock, PhoneIncoming, Users, ShieldCheck } from 'lucide-react';

const stats = [
    { icon: PhoneIncoming, value: "10+", label: "Avg. Daily Calls Handled" },
    { icon: Clock, value: "20 min", label: "Average Response Time" },
    { icon: Users, value: "300+", label: "Patients Assisted Last Month" },
    { icon: ShieldCheck, value: "100%", label: "Strict Protocol Adherence" },
];

export default function ImpactStats() {
    return (
        <section className="py-16 bg-hems-blue text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-hems-red/80 font-bold tracking-wider uppercase mb-2">Our Impact</h2>
                    <h3 className="text-3xl font-heading font-bold">Making a Difference Every Day</h3>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 hover:bg-white/20 transition-colors"
                        >
                            <div className="bg-hems-red/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <stat.icon className="w-8 h-8 text-hems-red" />
                            </div>
                            <div className="text-4xl font-black mb-2">{stat.value}</div>
                            <div className="text-sm font-medium text-gray-300 uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
