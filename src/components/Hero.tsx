"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
    {
        image: '/assets/hero-bridge.jpg',
        alt: 'HEMS Ambulance at Birchenough Bridge'
    },
    {
        image: '/assets/hero-fleet.jpg',
        alt: 'HEMS Ambulance Fleet Ready for Deployment'
    },
    {
        image: '/assets/hero-team-1.jpg',
        alt: 'HEMS Medical Team'
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative w-full h-[95vh] min-h-[700px] overflow-hidden bg-slate-950 flex items-center">
            
            {/* FULL SCREEN CAROUSEL BACKGROUND */}
            <AnimatePresence mode='wait'>
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={slides[current].image}
                        alt={slides[current].alt}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Cinematic Gradient Overlay - Stronger for readability */}
                    <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* CONTENT OVERLAY */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* Text Column */}
                    <motion.div 
                        key={`text-${current}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        {/* Badge - Larger & Pulsing */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(14,165,233,0.3)] animate-pulse">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hems-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-hems-accent"></span>
                            </span>
                            <span className="text-sm font-bold text-hems-accent uppercase tracking-widest">Live Response Network</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight font-heading drop-shadow-2xl">
                            Life-saving response for <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 filter drop-shadow-none">every highway incident.</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-slate-100 mb-10 leading-relaxed max-w-xl drop-shadow-lg font-medium">
                            HEMS connects motorists, dispatchers, and medical teams in real time to cut response times and save more lives on African highways.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link 
                                href="/contact" 
                                className="bg-linear-to-br from-slate-900 to-slate-800 text-white px-8 py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(30,41,59,0.5)] hover:-translate-y-1 group"
                            >
                                Book a Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link 
                                href="/#how-it-works" 
                                className="px-8 py-5 rounded-xl font-bold text-lg text-white hover:bg-white/10 flex items-center justify-center gap-2 transition-colors border border-white/20 backdrop-blur-sm"
                            >
                                See How It Works
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="border-t border-white/10 pt-8">
                            <p className="text-sm text-slate-400 uppercase tracking-wider mb-4 font-bold">Trusted by Highway Authorities & EMS</p>
                            <div className="flex gap-6 opacity-60">
                                <div className="h-8 px-3 bg-white/10 rounded flex items-center justify-center text-xs text-white font-bold backdrop-blur-sm">MINISTRY OF TRANSPORT</div>
                                <div className="h-8 px-3 bg-white/10 rounded flex items-center justify-center text-xs text-white font-bold backdrop-blur-sm">TRAFFIC COUNCIL</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* CAROUSEL CONTROLS */}
            <div className="absolute bottom-10 right-10 z-20 flex gap-6 items-center">
                <div className="flex items-center gap-3">
                    {slides.map((_, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => setCurrent(idx)}
                            className={`h-2 rounded-full transition-all duration-500 ease-out ${idx === current ? 'w-8 bg-hems-accent' : 'w-2 bg-white/30 hover:bg-white/60'}`} 
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
                
                <div className="flex gap-2">
                    <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white transition-all backdrop-blur-md hover:scale-110">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-white/20 border border-white/10 text-white transition-all backdrop-blur-md hover:scale-110">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

        </section>
    );
}
