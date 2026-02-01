"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, MapPin, ShieldCheck, Users, Siren } from 'lucide-react';

const slides = [
    {
        image: '/assets/hero-slider-1.jpg',
        title: "Saving Lives on Zimbabwe's Highways",
        subtitle: "Average response time of under 20 minutes. We reach you when it matters most.",
    },
    {
        image: '/assets/hero-slider-2.jpg',
        title: "Rapid Response, Reliable Recovery",
        subtitle: "We ensure no life is lost due to delayed response on Zimbabwean highways.",
    },
    {
        image: '/assets/hero-slider-3.jpg',
        title: "World-Class Emergency Fleet",
        subtitle: "17 Ambulances and 5 Rapid Responders ready to deploy 24/7.",
    }
];

const highways = [
    "Harare – Bulawayo",
    "Harare – Mutare",
    "Beitbridge – Masvingo",
    "Harare – Chirundu",
    "Bulawayo – Victoria Falls"
];

const stats = [
    { icon: MapPin, label: "Nationwide Coverage", value: "17+ Bases" },
    { icon: ShieldCheck, label: "ICZ & TSCZ Partners", value: "Official" },
    { icon: Users, label: "Trauma Specialists", value: "Certified" },
    { icon: Phone, label: "Toll-Free Access", value: "591" },
];

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [highwayIdx, setHighwayIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const highwayTimer = setInterval(() => {
            setHighwayIdx((prev) => (prev + 1) % highways.length);
        }, 3000);
        return () => clearInterval(highwayTimer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-hems-blue">
            {/* Background Image Slider */}
            <div className="absolute inset-0">
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
                    </motion.div>
                </AnimatePresence>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-hems-blue/95 via-hems-blue/75 to-hems-blue/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-hems-blue/90 via-transparent to-hems-blue/40" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center pt-24 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left Column - Text Content */}
                        <motion.div
                            key={current + "-text"}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-white"
                        >
                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight font-heading">
                                {slides[current].title}
                            </h1>

                            {/* Supporting Text */}
                            <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-xl leading-relaxed">
                                {slides[current].subtitle}
                            </p>

                            {/* Auto-cycling Highway Coverage */}
                            <div className="flex items-center gap-2 text-gray-200 mb-8">
                                <MapPin className="w-5 h-5 text-hems-red" aria-hidden="true" />
                                <span className="text-base">Currently covering: </span>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={highwayIdx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="text-base font-bold text-white"
                                    >
                                        {highways[highwayIdx]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <a
                                    href="tel:591"
                                    aria-label="Call emergency number 591"
                                    className="bg-hems-red hover:bg-red-700 active:scale-95 text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-hems-red/40 hover:shadow-xl hover:shadow-hems-red/50 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50"
                                >
                                    <Siren className="w-6 h-6" aria-hidden="true" />
                                    Call 591 Now
                                </a>
                                <a
                                    href="/about"
                                    className="bg-white/10 backdrop-blur-md hover:bg-white/20 active:bg-white/30 text-white border-2 border-white/40 px-10 py-5 rounded-full font-bold text-xl transition-all flex items-center justify-center gap-2 group hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50"
                                >
                                    Meet Our Team
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                                </a>
                            </div>

                            {/* Reassurance Line */}
                            <p className="text-base text-gray-300 mb-8">
                                Toll-free from any network · 24/7 response across major Zimbabwean highways
                            </p>

                            {/* Partner Trust Badges */}
                            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                                <span className="text-sm text-gray-400 uppercase tracking-wider">In partnership with</span>
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <span className="text-base font-bold text-white">ICZ</span>
                                    </div>
                                    <div className="bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2">
                                        <span className="text-base font-bold text-white">TSCZ</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - Stats Grid (visible on larger screens) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="hidden lg:grid grid-cols-2 gap-5"
                        >
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + idx * 0.1 }}
                                    className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 hover:bg-white/20 hover:scale-105 transition-all group cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-hems-red/25 flex items-center justify-center group-hover:bg-hems-red/40 transition-colors">
                                            <stat.icon className="w-7 h-7 text-hems-red" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-black text-white">{stat.value}</p>
                                            <p className="text-sm text-gray-300 uppercase tracking-wide">{stat.label}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Mobile Stats Strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="lg:hidden mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
                    >
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center border border-white/15"
                            >
                                <stat.icon className="w-6 h-6 text-hems-red mx-auto mb-2" aria-hidden="true" />
                                <p className="text-xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-gray-300 uppercase tracking-wide">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`h-3 rounded-full transition-all duration-300 ${idx === current ? 'w-10 bg-hems-red' : 'w-3 bg-white/50 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>

            {/* Curved Divider */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <path
                        d="M0 100L60 92C120 84 240 68 360 60C480 52 600 52 720 56C840 60 960 68 1080 72C1200 76 1320 76 1380 76L1440 76V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z"
                        fill="white"
                    />
                </svg>
            </div>
        </div>
    );
}
