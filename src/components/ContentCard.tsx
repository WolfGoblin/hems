import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ContentCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    href?: string;
    variant?: 'primary' | 'white';
}

export default function ContentCard({ 
    title, 
    description, 
    icon: Icon, 
    href,
    variant = 'white' 
}: ContentCardProps) {
    const isPrimary = variant === 'primary';
    
    return (
        <div className={`
            group relative p-8 rounded-2xl transition-all duration-300
            ${isPrimary 
                ? 'bg-hems-primary text-white shadow-xl shadow-hems-primary/20' 
                : 'bg-white text-gray-800 shadow-md hover:shadow-xl hover:shadow-hems-primary/10 border border-gray-100'
            }
            hover:-translate-y-1
        `}>
            <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors
                ${isPrimary ? 'bg-white/10 text-white' : 'bg-hems-primary/5 text-hems-primary group-hover:bg-hems-primary group-hover:text-white'}
            `}>
                <Icon className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-bold mb-3 font-heading">{title}</h3>
            <p className={`
                mb-6 leading-relaxed
                ${isPrimary ? 'text-blue-100' : 'text-gray-600'}
            `}>
                {description}
            </p>

            {href && (
                <Link 
                    href={href}
                    className={`
                        inline-flex items-center gap-2 font-semibold text-sm transition-all
                        ${isPrimary ? 'text-white hover:gap-3' : 'text-hems-primary hover:gap-3'}
                    `}
                >
                    Learn More <ArrowRight className="w-4 h-4" />
                </Link>
            )}
        </div>
    );
}
