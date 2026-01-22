"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone, ArrowRight } from 'lucide-react';

const slides = [
    {
        image: '/assets/slide-1.jpg', // Fleet
        title: "Rapid Response, Reliable Recovery",
        subtitle: "We ensure no life is lost due to delayed response on Zimbabwean highways.",
        cta: "Our Fleet"
    },
    {
        image: '/assets/slide-2.jpg', // Action
        title: "Seconds Save Lives.",
        subtitle: "24/7 Rapid Response Units stationed for immediate deployment.",
        cta: "Emergency Numbers"
    },
    {
        image: '/assets/slide-3.jpg', // Care
        title: "Professional Care You Can Trust.",
        subtitle: "Certified trauma specialists delivering advanced life support.",
        cta: "About Us"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <div className="relative h-[85vh] w-full overflow-hidden bg-gray-900 mt-20">
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
                    <div className="absolute inset-0 bg-gradient-to-r from-hems-blue/90 via-hems-blue/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                            <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                                {slides[current].cta}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
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
    );
}
