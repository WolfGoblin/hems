"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/#services' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 h-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex-shrink-0 flex items-center gap-2">
                    <div className="relative h-20 w-60">
                        <Image
                            src="/assets/hems-logo-v2.png"
                            alt="HEMS Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-hems-blue font-medium transition-colors text-sm uppercase tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:flex items-center">
                    <a
                        href="tel:591"
                        className="bg-hems-red text-white py-2.5 px-6 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-hems-red/30 hover:bg-red-600 transition-all transform hover:scale-105"
                    >
                        <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                        <Phone className="w-4 h-4 fill-current" />
                        <span>EMERGENCY: 591</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-hems-blue p-2">
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
                                    href="tel:08080630"
                                    className="block w-full text-center bg-hems-blue text-white py-3 rounded-lg font-bold"
                                >
                                    Call Support: 0808 0630
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
