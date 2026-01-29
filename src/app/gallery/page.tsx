export default function Gallery() {
    return (
        <div className="min-h-screen pt-32 px-8 max-w-7xl mx-auto">
            <h1 className="text-5xl font-heading font-black mb-8 text-slate-900">Gallery</h1>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                See our fleet and improved response capabilities in action.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 opacity-50">
                 <div className="aspect-video bg-slate-200 rounded-2xl"></div>
                 <div className="aspect-video bg-slate-200 rounded-2xl"></div>
                 <div className="aspect-video bg-slate-200 rounded-2xl"></div>
            </div>
        </div>
    );
}
