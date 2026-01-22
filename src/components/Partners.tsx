"use client";

import Image from 'next/image';

const partners = [
    { name: "Insurance Council of Zimbabwe", acron: "ICZ" },
    { name: "Traffic Safety Council of Zimbabwe", acron: "TSCZ" },
];

export default function Partners() {
    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-400 font-medium uppercase tracking-widest mb-8 text-sm">Proud Partners in National Road Safety</p>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-500">
                    <div className="relative w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            src="/assets/partner-icz.png"
                            alt="Insurance Council of Zimbabwe"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative w-48 h-24 grayscale hover:grayscale-0 transition-all duration-300">
                        <Image
                            src="/assets/partner-tscz.jpg"
                            alt="Traffic Safety Council of Zimbabwe"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
