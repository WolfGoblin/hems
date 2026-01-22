"use client";

import Link from 'next/link';
import { Facebook, MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                            <span className="text-hems-red text-4xl">✚</span> HEMS
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Setting the standard for emergency road response. Dedicated to saving lives on Zimbabwe's highways.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" className="p-2 bg-gray-800 rounded-full hover:bg-hems-blue transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-hems-blue transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-hems-blue transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/about" className="hover:text-hems-red transition-colors">About Us</Link></li>
                            <li><Link href="/#services" className="hover:text-hems-red transition-colors">Our Services</Link></li>
                            <li><Link href="/media" className="hover:text-hems-red transition-colors">News & Media</Link></li>
                            <li><Link href="/gallery" className="hover:text-hems-red transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-hems-red transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-hems-red flex-shrink-0 mt-1" />
                                <span>179 Five Avenue,<br />Harare, Zimbabwe</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-hems-red flex-shrink-0" />
                                <a href="tel:591" className="hover:text-white">Toll Free: 591</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-hems-red flex-shrink-0" />
                                <a href="tel:08080630" className="hover:text-white">0808 0630</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-hems-red flex-shrink-0" />
                                <a href="mailto:info@hems.co.zw" className="hover:text-white">info@hems.co.zw</a>
                            </li>
                        </ul>
                    </div>

                    {/* Partners/Legal */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Powered By</h4>
                        <p className="text-gray-400 mb-4">
                            In partnership with:
                        </p>
                        <div className="flex flex-col gap-2 font-semibold text-gray-300">
                            <span>Insurance Council of Zimbabwe (ICZ)</span>
                            <span>Traffic Safety Council of Zimbabwe</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Highway Emergency Medical Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
