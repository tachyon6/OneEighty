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
        <div className='relative overflow-hidden'>
            <div className='relative rounded-xl bg-gradient-to-br from-white/80 to-primary-100/50 backdrop-blur-sm border border-primary-200/50'>
                {imageUrl && (
                    <div className='h-48 overflow-hidden'>
                        <img src={imageUrl} alt={title} className='w-full h-full object-cover' />
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
