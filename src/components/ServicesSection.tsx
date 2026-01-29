"use client";

import { motion } from 'framer-motion';
import { Truck, Activity, BookOpen, Building2, Phone, CalendarClock } from 'lucide-react';
import ContentCard from './ContentCard';

const services = [
    {
        title: "Advanced Life Support",
        description: "ICU-level care on the move. Our vehicles are equipped with ventilators, defibrillators, and critical care monitoring.",
        icon: Activity,
        variant: 'primary'
    },
    {
        title: "Basic Life Support",
        description: "Essential medical transport for non-critical stable patients requiring medical supervision.",
        icon: Truck,
        variant: 'white'
    },
    {
        title: "Inter-Hospital Transfers",
        description: "Seamless bed-to-bed transfers between healthcare facilities with continuous monitoring.",
        icon: Building2,
        variant: 'white'
    },
    {
        title: "Event Medical Cover",
        description: "On-site medical standby for corporate events, sports days, and public gatherings.",
        icon: BookOpen,
        variant: 'white'
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-red-100/50 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-hems-accent font-bold tracking-widest uppercase text-sm">Our Capabilities</span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mt-4 mb-6 tracking-tight">
                        Comprehensive care, <br/>
                        <span className="text-slate-400">delivered with precision.</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Whether it's a critical emergency or a scheduled transfer, HEMS provides world-class medical transport tailored to patient needs.
                    </p>
                </div>

                {/* Feature Blocks (Bento Top) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Emergency Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative overflow-hidden rounded-4xl bg-linear-to-br from-blue-950 to-slate-900 p-10 md:p-14 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-[1.01] transition-all duration-500"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl group-hover:bg-red-600/20 transition-all duration-700" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-red-500/30">
                                <Phone className="w-7 h-7 text-white animate-pulse" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Emergency Response</h3>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-sm">
                                Immediate dispatch for life-threatening situations. Our ICUs on wheels are ready 24/7.
                            </p>
                            <a href="tel:591" className="inline-flex items-center gap-2 text-white font-bold text-lg border-b border-red-500 pb-1 hover:text-red-400 transition-colors">
                                Call 591 Now <span className="text-red-500">→</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Scheduled Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative overflow-hidden rounded-4xl bg-white p-10 md:p-14 shadow-xl border border-slate-100"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-all duration-700" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
                                <CalendarClock className="w-7 h-7 text-hems-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Scheduled Transport</h3>
                            <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-sm">
                                Reliable transfers for appointments, dialysis, and hospital discharges. Comfort guaranteed.
                            </p>
                            <a href="/contact" className="inline-flex items-center gap-2 text-hems-primary font-bold text-lg border-b border-blue-200 pb-1 hover:text-blue-600 transition-colors">
                                Book Transport <span className="text-blue-400">→</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Service Grid (Bento Bottom) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (idx * 0.1) }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-l-4 hover:border-l-hems-accent transition-all duration-400 group"
                        >
                            <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 origin-left">
                                <service.icon className="w-10 h-10 text-hems-accent" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                            <p className="text-slate-500 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
