"use client";
import { useState } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/assets/slide-1.jpg',
    '/assets/slide-2.jpg',
    '/assets/slide-3.jpg',
    '/assets/gallery-new-1.jpg',
    '/assets/gallery-new-2.jpg',
    '/assets/gallery-new-3.jpg',
    '/assets/gallery-new-4.jpg',
    '/assets/gallery-new-5.jpg',
];

export default function Gallery() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <main className="pt-28 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
                <h1 className="text-4xl font-bold font-heading mb-4 text-hems-blue">Our Gallery</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">Witness our state-of-the-art fleet and dedicated medical professionals in action across Zimbabwe.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative h-72 cursor-pointer group rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                        onClick={() => setSelected(img)}
                    >
                        <Image src={img} alt={`Gallery Image ${idx + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 right-4 text-white">
                                <ZoomIn />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                        onClick={() => setSelected(null)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white p-2 hover:text-hems-red bg-white/10 rounded-full transition-colors"
                            onClick={() => setSelected(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="relative w-full max-w-6xl h-[85vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image src={selected} alt="Full view" fill className="object-contain" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
