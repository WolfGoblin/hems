export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        For emergencies, call <strong>591</strong> immediately. For general inquiries or to book a demo, please use the form below.
                    </p>
                    <ul className="space-y-4">
                        <li className="font-bold text-hems-primary">📞 591 (Emergency)</li>
                        <li>📍 179 Five Avenue, Harare</li>
                        <li>✉️ info@hems.co.zw</li>
                    </ul>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                            <input type="text" className="w-full p-3 rounded-lg border border-slate-200" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Email</label>
                            <input type="email" className="w-full p-3 rounded-lg border border-slate-200" placeholder="name@company.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                            <textarea className="w-full p-3 rounded-lg border border-slate-200 h-32" placeholder="How can we help?"></textarea>
                        </div>
                        <button className="w-full bg-hems-primary text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
