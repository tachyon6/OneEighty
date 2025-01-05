import React from "react";
import { TestimonialCard } from "./testimonials/TestimonialCard";
import { testimonials } from "./testimonials/testimonialData";

export default function Testimonials() {
    return (
        <section className='relative py-20 overflow-hidden'>
            {/* Gradient background */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-r from-accent-mint/20 via-accent-lavender/30 to-accent-peach/20'></div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10'></div>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-mint/30 via-accent-lavender/20 to-transparent rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-peach/30 via-accent-coral/20 to-transparent rounded-full blur-3xl'></div>

            <div className='relative container mx-auto px-4'>
                <div className='max-w-3xl mx-auto text-center mb-16'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4 font-aggro'>실제 후기</h2>
                    <p className='text-gray-600'>우리 서비스를 통해 특별한 만남을 가진 회원님들의 이야기</p>
                </div>
                <div className='grid md:grid-cols-3 gap-8'>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
