"use client";

import Link from 'next/link';
import { Facebook, MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-black font-heading mb-6 flex items-center gap-2 tracking-tighter">
                            <span className="text-hems-action text-4xl">✚</span> HEMS
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-8 pr-4">
                            Setting the gold standard for emergency road response. Dedication, speed, and professional care when you need it most.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-hems-primary hover:text-white transition-all hover:-translate-y-1">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-hems-primary hover:text-white transition-all hover:-translate-y-1">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-hems-primary hover:text-white transition-all hover:-translate-y-1">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-hems-action rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/about" className="hover:text-hems-action transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-hems-action"></span> About Us</Link></li>
                            <li><Link href="/#services" className="hover:text-hems-action transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-hems-action"></span> Our Services</Link></li>
                            <li><Link href="/media" className="hover:text-hems-action transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-hems-action"></span> News & Media</Link></li>
                            <li><Link href="/gallery" className="hover:text-hems-action transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-hems-action"></span> Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-hems-action transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-hems-action"></span> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-hems-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-6 text-gray-400">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-hems-action group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5 shrink-0" />
                                </div>
                                <span className="leading-tight">179 Five Avenue,<br />Harare, Zimbabwe</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-hems-action group-hover:text-white transition-colors">
                                    <Phone className="w-5 h-5 shrink-0" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Emergency</span>
                                    <a href="tel:591" className="text-white font-bold text-lg hover:text-hems-action transition-colors">591</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-hems-primary group-hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 shrink-0" />
                                </div>
                                <a href="mailto:info@hems.co.zw" className="hover:text-white transition-colors">info@hems.co.zw</a>
                            </li>
                        </ul>
                    </div>

                    {/* Partners */}
                    <div>
                        <h4 className="font-bold text-lg mb-8 text-white relative inline-block">
                            Strategic Partners
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-hems-accent rounded-full"></span>
                        </h4>
                        <div className="flex flex-col gap-4">
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                <p className="text-sm font-semibold text-gray-300">Insurance Council of Zimbabwe</p>
                                <p className="text-xs text-gray-500 mt-1">Official Partner</p>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                <p className="text-sm font-semibold text-gray-300">Traffic Safety Council</p>
                                <p className="text-xs text-gray-500 mt-1">Road Safety Initiative</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Highway Emergency Medical Services. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
