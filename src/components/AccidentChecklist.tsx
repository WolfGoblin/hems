"use client";

import { motion } from 'framer-motion';
import { AlertTriangle, Phone, MapPin, HeartPulse, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        icon: AlertTriangle,
        title: "Ensure Safety",
        desc: "Do not move injured persons unless in immediate danger. Turn on hazard lights."
    },
    {
        icon: Phone,
        title: "Call 591 Immediately",
        desc: "Dial our toll-free number. Be ready to describe the location and nature of the accident."
    },
    {
        icon: MapPin,
        title: "Share Location",
        desc: "Send a GPS pin if possible or identify landmarks (mile markers, bridges, towns)."
    },
    {
        icon: HeartPulse,
        title: "Stay Calm & Assess",
        desc: "Check for breathing and bleeding. Reassure victims that help is on the way."
    }
];

export default function AccidentChecklist() {
    return (
        <section id="accident-guide" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-hems-red p-12 text-white flex flex-col justify-center">
                        <h2 className="text-3xl font-heading font-bold mb-6">What to do in an Accident</h2>
                        <p className="text-white/90 mb-8 leading-relaxed">
                            Knowing the right steps can save a life before our team arrives. Save this guide and share it with loved ones.
                        </p>
                        <a
                            href="tel:591"
                            className="bg-white text-hems-red font-bold py-4 px-8 rounded-full text-center hover:bg-gray-100 transition-colors shadow-lg animate-pulse"
                        >
                            Emergency: Call 591
                        </a>
                    </div>

                    <div className="lg:w-2/3 p-8 lg:p-12">
                        <div className="grid md:grid-cols-2 gap-8">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                                            <step.icon className="w-6 h-6 text-hems-red" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="text-green-500 w-5 h-5" />
                                Be Prepared
                            </h4>
                            <p className="text-sm text-gray-500">
                                Save <strong>591</strong> and <strong>0808 0630</strong> in your phone today. It could be the most important number you never want to use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
