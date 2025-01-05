import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    imageUrl?: string;
}

export function FeatureCard({ icon: Icon, title, description, imageUrl }: FeatureCardProps) {
    return (
        <div className='relative group overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-radial from-accent-peach/30 via-accent-lavender/30 to-transparent rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100'></div>
            <div className='relative rounded-xl bg-gradient-to-br from-white/80 to-primary-100/50 backdrop-blur-sm border border-primary-200/50 transition-all duration-300 group-hover:translate-y-[-2px] overflow-hidden'>
                {imageUrl && (
                    <div className='h-48 overflow-hidden'>
                        <img
                            src={imageUrl}
                            alt={title}
                            className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500'
                        />
                    </div>
                )}
                <div className='p-8'>
                    <h3 className='text-xl font-semibold text-gray-900 mb-3 font-tway'>{title}</h3>
                    <p className='text-gray-600'>{description}</p>
                </div>
            </div>
        </div>
    );
}
