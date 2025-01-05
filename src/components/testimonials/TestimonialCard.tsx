import React from "react";
import { LucideIcon } from "lucide-react";

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    icon: LucideIcon;
}

export function TestimonialCard({ quote, author, role, icon: Icon }: TestimonialCardProps) {
    return (
        <div className='bg-white p-6 rounded-lg shadow-md'>
            <div className='flex items-center mb-4'>
                <Icon className='w-12 h-12 text-gray-400' />
                <div className='ml-4'>
                    <h4 className='text-lg font-semibold text-gray-900'>{author}</h4>
                    <p className='text-gray-600'>{role}</p>
                </div>
            </div>
            <p className='text-gray-600 italic'>{quote}</p>
        </div>
    );
}
