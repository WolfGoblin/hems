"use client";

import { Truck, Activity, BookOpen, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Truck,
        title: "24/7 Nationwide Accident Response",
        desc: "Rapid deployment fleet covering major Zimbabwean highways. Our ambulances are positioned for minimal response times.",
        color: "bg-blue-50 text-hems-blue",
        forWho: "Highway travelers, Trucking companies",
        benefit: "Avg. 20 min response time"
    },
    {
        icon: Activity,
        title: "Certified Trauma Specialists",
        desc: "Our team consists of highly trained paramedics and doctors specializing in trauma and critical care stabilization.",
        color: "bg-red-50 text-hems-red",
        forWho: "Accident victims, Critical patients",
        benefit: "Advanced Life Support on-site"
    },
    {
        icon: BookOpen,
        title: "Professional First Aid Training",
        desc: "Comprehensive training programs to empower your team to handle emergencies effectively before help arrives.",
        color: "bg-green-50 text-green-700",
        forWho: "Corporates, Schools, Drivers",
        benefit: "Internationally recognized certification"
    },
    {
        icon: Building2,
        title: "Secure Hospital Transfers",
        desc: "Safe, comfortable, and medically supervised patient transport between healthcare facilities anywhere in Zimbabwe.",
        color: "bg-purple-50 text-purple-700",
        forWho: "Private patients, Hospitals",
        benefit: "Continuity of expert care"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-hems-red font-bold tracking-wider uppercase mb-2">Our Services</h2>
                    <h3 className="text-4xl font-heading font-bold text-gray-900">Comprehensive Emergency Care</h3>
                    <div className="w-24 h-1 bg-hems-blue mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all group border border-gray-100 flex flex-col h-full"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-hems-blue transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-gray-500 text-sm mb-4 flex-grow">
                                {service.desc}
                            </p>

                            <div className="pt-4 border-t border-gray-50 mt-auto space-y-3">
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Best For</span>
                                    <span className="text-sm font-medium text-gray-700">{service.forWho}</span>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Primary Benefit</span>
                                    <span className="text-sm font-bold text-hems-blue">{service.benefit}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
