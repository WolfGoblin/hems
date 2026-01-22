"use client";

import { Facebook, Calendar, Tag, ArrowRight } from 'lucide-react';

export default function Media() {
    return (
        <main className="pt-24 min-h-screen bg-gray-50">
            <div className="py-12 bg-gray-900 text-white mb-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold font-heading mb-4">News & Media Center</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">Stay informed with the latest updates, road safety tips, and press releases from HEMS.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12 pb-20">
                <div className="lg:col-span-2 space-y-8">
                    {/* Blog Posts */}
                    {[1, 2, 3].map((item) => (
                        <article key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
                            <div className="h-64 bg-gray-200 relative bg-[url('/assets/slide-1.jpg')] bg-cover bg-center">
                                <div className="absolute top-4 left-4 bg-hems-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Press Release
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 23, 2026</span>
                                    <span className="flex items-center gap-1"><Tag className="w-4 h-4" /> Safety</span>
                                </div>
                                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4 hover:text-hems-blue cursor-pointer">
                                    HEMS Increases Fleet Deployment for Festive Season Safety
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    To ensure rapid response during the high-traffic holiday period, HEMS has strategically positioned ambulances across all major highways in Zimbabwe...
                                </p>
                                <a href="#" className="inline-flex items-center gap-2 text-hems-blue font-bold hover:text-hems-red transition-colors">
                                    Read Full Story <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <aside className="space-y-8">
                    {/* Facebook Feed Placeholder */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                        <h3 className="font-bold text-xl flex items-center gap-2 mb-6 border-b pb-4">
                            <Facebook className="text-blue-600 w-6 h-6" />
                            Social Updates
                        </h3>

                        {/* Mock Feed Item */}
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-gray-300 rounded-full" />
                                    <div>
                                        <p className="font-bold text-sm">HEMS Zimbabwe</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 mb-3">Road safety alert: Heavy rains reported on Harare-Bulawayo road. Please drive with caution and keep your headlights on.</p>
                                <div className="h-32 bg-gray-200 rounded-lg bg-[url('/assets/slide-2.jpg')] bg-cover bg-center" />
                            </div>

                            <div className="bg-gray-50 p-4 rounded-xl">
                                {/* Another mock item */}
                                <p className="text-sm text-gray-700">First aid training session at our HQ today! #MedicalSafety #Zimbabwe</p>
                            </div>
                        </div>

                        <a href="#" className="block w-full text-center bg-[#1877F2] text-white font-bold py-3 rounded-xl mt-6 hover:bg-blue-700 transition-colors shadow-lg">
                            Follow HEMS on Facebook
                        </a>
                    </div>
                </aside>
            </div>
        </main>
    );
}
