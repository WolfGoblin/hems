"use client";

import Image from 'next/image';

const partners = [
    { name: "Insurance Council of Zimbabwe", acron: "ICZ" },
    { name: "Traffic Safety Council of Zimbabwe", acron: "TSCZ" },
];

export default function Partners() {
    return (
        <section id="partners" className="py-20 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-hems-blue font-bold tracking-wider uppercase mb-2">Partnerships & Governance</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        HEMS is committed to national road safety through strategic alliances with key regulatory bodies. We operate under strict clinical governance and safety protocols.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative w-32 h-16">
                                <Image
                                    src="/assets/partner-icz.png"
                                    alt="ICZ Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">Insurance Council of Zimbabwe</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Our partnership with ICZ ensures guaranteed response for insured vehicles and supports national road safety initiatives, reducing the financial burden on accident victims.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="relative w-32 h-16">
                                <Image
                                    src="/assets/partner-tscz.jpg"
                                    alt="TSCZ Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">Traffic Safety Council of Zimbabwe</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Working together with TSCZ to educate drivers, implement safety campaigns, and provide rapid post-crash care to minimize highway fatalities.
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-semibold text-gray-500">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> EMA Regulated</span>
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> AHPCZ Registered</span>
                    <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full" /> Certified Advanced Life Support</span>
                </div>
            </div>
        </section>
    );
}
