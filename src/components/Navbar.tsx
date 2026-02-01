"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/#services' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-md'
                : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                    <div className="relative h-16 w-48">
                        <Image
                            src="/assets/hems-logo-v2.png"
                            alt="HEMS Logo"
                            fill
                            className={`object-contain object-left transition-all ${scrolled ? '' : 'brightness-0 invert'
                                }`}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors text-sm uppercase tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm ${scrolled
                                    ? 'text-gray-700 hover:text-hems-blue focus:ring-hems-blue/50'
                                    : 'text-white/90 hover:text-white focus:ring-white/50'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:flex items-center">
                    <a
                        href="tel:591"
                        aria-label="Call emergency number 591"
                        className="bg-hems-red text-white py-2.5 px-6 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-hems-red/30 hover:bg-red-700 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-hems-red/50"
                    >
                        <div className="w-2 h-2 rounded-full bg-white animate-ping" aria-hidden="true" />
                        <Phone className="w-4 h-4 fill-current" aria-hidden="true" />
                        <span>EMERGENCY: 591</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-2 focus:outline-none focus:ring-2 rounded-lg ${scrolled
                                ? 'text-hems-blue focus:ring-hems-blue/50'
                                : 'text-white focus:ring-white/50'
                            }`}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-semibold text-hems-blue hover:text-hems-red border-b border-gray-50 pb-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="tel:591"
                                    className="block w-full text-center bg-hems-red text-white py-3 rounded-lg font-bold"
                                >
                                    Emergency: Call 591
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
