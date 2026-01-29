"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/#services' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav 
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' 
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-hems-action text-white p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-md">
                         <span className="text-2xl font-black font-heading tracking-tighter">H</span>
                    </div>
                    <span className={`text-2xl font-black font-heading tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'} drop-shadow-sm`}>
                        HEMS
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.name}
                            href={link.href} 
                            className={`text-sm font-bold uppercase tracking-wide transition-all duration-200 relative group ${
                                pathname === link.href ? 'text-hems-action' : (scrolled ? 'text-slate-600 hover:text-hems-action' : 'text-slate-200 hover:text-white')
                            }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-hems-action transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                        </Link>
                    ))}

                    <a 
                        href="tel:591" 
                        className="bg-linear-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 animate-[pulse-glow_2s_infinite]"
                    >
                        <Phone className="w-4 h-4 fill-current" />
                        <span>Emergency: 591</span>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-bold text-gray-800 hover:text-hems-primary py-2 border-b border-gray-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-4">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full bg-hems-primary text-white py-4 rounded-xl font-bold shadow-lg"
                                >
                                    Book a Demo
                                </Link>
                                <a
                                    href="tel:591"
                                    className="flex items-center justify-center gap-2 w-full bg-red-50 text-hems-action py-4 rounded-xl font-bold border-2 border-red-100"
                                >
                                    <Phone className="w-5 h-5 fill-current" />
                                    EMERGENCY: 591
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
