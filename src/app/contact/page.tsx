"use client";

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <main className="pt-24 min-h-screen bg-gray-50">
            <div className="bg-hems-blue py-16 text-white text-center">
                <h1 className="text-4xl font-bold font-heading mb-4">Contact Us</h1>
                <p className="text-gray-300">We are here for you 24/7. Reach out for emergencies or inquiries.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 border-b pb-4">Get in Touch</h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-hems-red/10 p-3 rounded-lg text-hems-red">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Emergency Numbers (24/7)</h3>
                                <p className="text-xl font-black text-hems-red">591 (Toll Free)</p>
                                <p className="text-lg text-gray-700">0808 0630</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-hems-blue/10 p-3 rounded-lg text-hems-blue">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Headquarters</h3>
                                <p className="text-gray-600">179 Five Avenue,<br />Harare, Zimbabwe</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-hems-blue/10 p-3 rounded-lg text-hems-blue">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Operating Hours</h3>
                                <p className="text-green-600 font-bold">Open 24 Hours / 7 Days a Week</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-hems-blue/10 p-3 rounded-lg text-hems-blue">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Email Us</h3>
                                <p className="text-gray-600">info@hems.co.zw</p>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner border border-gray-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.123456789!2d31.05!3d-17.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzEyLjAiUyAzMcKwMDMnMDAuMCJF!5e0!3m2!1sen!2szw!4v1600000000000!5m2!1sen!2szw"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Map Location"
                        ></iframe>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-fit">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hems-blue focus:ring-2 focus:ring-hems-blue/20 outline-none transition-all" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hems-blue focus:ring-2 focus:ring-hems-blue/20 outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hems-blue focus:ring-2 focus:ring-hems-blue/20 outline-none transition-all">
                                <option>Select a Topic...</option>
                                <option>Emergency Feedback</option>
                                <option>Corporate Training Enquiry (Coming Soon)</option>
                                <option>Membership & Partnerships</option>
                                <option>General Inquiry</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-hems-blue focus:ring-2 focus:ring-hems-blue/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                        </div>

                        <button type="button" className="w-full bg-hems-blue hover:bg-blue-900 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl">
                            <Send className="w-5 h-5" /> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
