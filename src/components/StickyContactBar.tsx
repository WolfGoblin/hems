"use client";

import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StickyContactBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(30,58,138,0.1)] border-t border-gray-100 p-4 pb-6 md:hidden">
            <div className="flex justify-between items-center gap-4 max-w-sm mx-auto">
                <a href="tel:08080630" className="flex flex-col text-hems-blue font-bold leading-tight active:scale-95 transition-transform">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">24/7 Support</span>
                    <span className="text-lg">0808 0630</span>
                </a>

                <motion.a
                    href="tel:591"
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-hems-red hover:bg-red-700 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 font-black text-xl shadow-lg shadow-hems-red/30 transition-colors"
                >
                    <Phone className="w-6 h-6 fill-current" />
                    <span>591</span>
                </motion.a>
            </div>
        </div>
    );
}
