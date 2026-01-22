"use client";

import { Truck, Activity, BookOpen, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Truck,
        title: "24/7 Nationwide Accident Response",
        desc: "Rapid deployment fleet covering major Zimbabwean highways ensuring help is always within reach.",
        color: "bg-blue-50 text-hems-blue"
    },
    {
        icon: Activity,
        title: "Certified Trauma Specialists",
        desc: "Our team consists of highly trained paramedics and doctors specializing in trauma and critical care.",
        color: "bg-red-50 text-hems-red"
    },
    {
        icon: BookOpen,
        title: "Professional First Aid Training",
        desc: "Comprehensive training programs for corporates and individuals to handle emergencies effectively.",
        color: "bg-green-50 text-green-700"
    },
    {
        icon: Building2,
        title: "Secure Hospital Transfers",
        desc: "Safe and medically supervised patient transport between healthcare facilities across the country.",
        color: "bg-purple-50 text-purple-700"
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
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group border border-gray-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-hems-blue transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.desc}
                            </p>
                            <a href="#" className="inline-flex items-center text-sm font-bold text-hems-blue hover:text-hems-red transition-colors">
                                Learn more <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
