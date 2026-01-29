"use client";

import Image from 'next/image';

const partners = [
    { name: "Insurance Council of Zimbabwe", acron: "ICZ" },
    { name: "Traffic Safety Council of Zimbabwe", acron: "TSCZ" },
];

export default function Partners() {
    return (
        <section className="py-20 bg-white border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-slate-400 font-bold uppercase tracking-widest mb-12 text-xs">
                    Proud Partners in National Road Safety
                </p>

                <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
                    {[
                        { src: "/assets/partner-icz.png", alt: "Insurance Council of Zimbabwe" },
                        { src: "/assets/partner-tscz.jpg", alt: "Traffic Safety Council of Zimbabwe" }
                    ].map((partner, idx) => (
                        <div 
                            key={idx} 
                            className="relative w-48 h-24 group transition-all duration-500 hover:scale-105"
                        >
                            <Image
                                src={partner.src}
                                alt={partner.alt}
                                fill
                                className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
