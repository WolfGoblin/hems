import { ArrowRight, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
    return (
        <main className="pt-24 min-h-screen">
            {/* Header */}
            <section className="bg-hems-blue text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/slide-2.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About HEMS</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">Serving Zimbabwe with integrity, speed, and professional care.</p>
                </div>
            </section>

            {/* Vision/Mission */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="mb-12">
                            <h2 className="text-hems-red font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-8 h-1 bg-hems-red inline-block" /> Our Vision
                            </h2>
                            <p className="text-3xl font-bold text-gray-900 leading-tight">
                                To be the leading provider of emergency medical services, ensuring no life is lost due to delayed response on Zimbabwean highways.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-hems-red font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="w-8 h-1 bg-hems-red inline-block" /> Our Mission
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To provide rapid, professional, and life-saving medical interventions through a dedicated fleet and expert personnel, utilizing state-of-the-art technology and compassionate care.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-hems-blue/5 rounded-full -mr-10 -mt-10" />
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <ShieldCheck className="text-hems-blue w-8 h-8" />
                            Core Values
                        </h3>
                        <ul className="space-y-6">
                            {[
                                { val: 'Integrity', desc: ' Honest and transparent in all our operations.' },
                                { val: 'Speed', desc: 'Every second counts in saving lives.' },
                                { val: 'Professionalism', desc: 'Expert care by certified specialists.' },
                                { val: 'Care', desc: 'Compassionate treatment for every patient.' }
                            ].map((item) => (
                                <li key={item.val} className="flex items-start gap-4">
                                    <div className="bg-hems-red/10 p-2 rounded-lg">
                                        <CheckCircle2 className="text-hems-red w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="font-bold text-gray-900 block text-lg">{item.val}</span>
                                        <span className="text-gray-500 text-sm">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Corporate Profile / Partners */}
            <section className="bg-gray-50 py-20 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 text-center max-w-4xl">
                    <Users className="w-12 h-12 text-hems-blue mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Road Safety</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Highway Emergency Medical Services (HEMS) is proud to partner with the <strong>Insurance Council of Zimbabwe (ICZ)</strong> and the <strong>Traffic Safety Council of Zimbabwe</strong>. Together, we are building a safer national network where emergency response is reliable, accessible, and world-class.
                    </p>
                    <div className="w-24 h-1 bg-hems-red mx-auto rounded-full" />
                </div>
            </section>
        </main>
    )
}
