"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Users, Ambulance, MapPin, Clock } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                // @ts-ignore
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
}

const stats = [
    { label: "Years Serving Zimbabwe", value: 15, suffix: "+", icon: Clock },
    { label: "Successful Transports", value: 12000, suffix: "+", icon: Ambulance },
    { label: "Cities Covered", value: 24, suffix: "", icon: MapPin },
    { label: "Medical Specialists", value: 50, suffix: "+", icon: Users },
];

export default function StatsBand() {
    return (
        <div className="relative z-20 -mt-24 pb-24 pointer-events-none">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white border border-slate-100 rounded-3xl p-12 shadow-xl pointer-events-auto"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div key={idx} className="flex flex-col items-center text-center px-4">
                                    <div className="mb-4 bg-blue-50 p-4 rounded-2xl text-hems-accent">
                                        <Icon className="w-8 h-8" strokeWidth={2} />
                                    </div>
                                    <h4 className="text-4xl md:text-5xl font-black mb-2 font-heading tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </h4>
                                    <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">
                                        {stat.label}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
