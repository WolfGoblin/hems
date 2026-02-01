"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
    { src: '/assets/staff-1.jpg', alt: 'HEMS Medical Team' },
    { src: '/assets/staff-2.jpg', alt: 'Trauma Specialists' },
    { src: '/assets/staff-3.jpg', alt: 'Rapid Response Unit' },
    { src: '/assets/fleet-lineup.jpg', alt: 'Ambulance Fleet' },
    { src: '/assets/fleet-action.jpg', alt: 'Emergency Deployment' },
];

export default function TrustGallery() {
    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-hems-blue font-bold tracking-wider uppercase mb-2">Trusted by Zimbabwe</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real professionals, real fleet, real results. Our dedicated team is always ready to serve.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative h-48 md:h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
