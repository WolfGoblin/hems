"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, MapPin, Clock, Users } from 'lucide-react';

const slides = [
    {
        image: '/assets/hero-new-2.jpg', // Fleet lineup
        title: "Saving Lives on Zimbabwe’s Highways.",
        subtitle: "Average response time of under 20 minutes. We reach you when it matters most.",
        cta: "Our Fleet",
        link: "/gallery"
    },
    {
        image: '/assets/hero-new-4.jpg', // Action shot / crash scene
        title: "Rapid Response, Reliable Recovery",
        subtitle: "We ensure no life is lost due to delayed response on Zimbabwean highways.",
        cta: "Get Emergency Help",
        link: "tel:591"
    },
    {
        image: '/assets/hero-new-3.jpg', // Night/Emergency
        title: "World-Class Emergency Care.",
        subtitle: "17 Ambulances, 5 Rapid Responders, and Certified Trauma Teams ready 24/7.",
        cta: "About HEMS",
        link: "/about"
    },
    {
        image: '/assets/hero-new-1.jpg', // ICZ/Partners
        title: "Partnered for Your Safety.",
        subtitle: "Proudly working with ICZ and TSCZ to secure Zimbabwe's roads.",
        cta: "Our Partners",
        link: "/#partners"
    }
];

const features = [
    { icon: MapPin, text: "Nationwide Highway Coverage" },
    { icon: ShieldCheck, text: "Official Partners: ICZ & TSCZ" },
    { icon: Users, text: "Certified Trauma Specialists" },
    { icon: Phone, text: "Toll-Free Access: 591" },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-gray-900 mt-24 flex flex-col">
            <div className="relative h-[85vh] w-full">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[current].image}
                            alt={slides[current].title}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-hems-blue/90 via-hems-blue/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 flex items-center z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
                        <motion.div
                            key={current + "-text"}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight drop-shadow-lg font-heading">
                                {slides[current].title}
                            </h1>
                            <p className="text-lg md:text-2xl mb-8 text-gray-100 font-light max-w-xl leading-relaxed drop-shadow-md">
                                {slides[current].subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="tel:591" className="bg-hems-red hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-105 animate-pulse">
                                    <Phone className="w-5 h-5 fill-current" />
                                    Call 591 Now
                                </a>
                                <a href={slides[current].link} className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                                    {slides[current].cta}
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Controls */}
                <div className="absolute bottom-10 right-4 md:right-10 z-20 flex items-center gap-4">
                    <div className="flex gap-2">
                        {slides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrent(idx)}
                                className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-hems-red w-8' : 'bg-white/50 hover:bg-white'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Why HEMS is Different Strip */}
            <div className="bg-hems-blue text-white py-6 border-t border-white/10 relative z-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex flex-col lg:flex-row items-center gap-3">
                                <div className="bg-hems-red/20 p-2 rounded-full">
                                    <feature.icon className="w-6 h-6 text-hems-red" />
                                </div>
                                <span className="font-bold text-sm md:text-base leading-tight">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
