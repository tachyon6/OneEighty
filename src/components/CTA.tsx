import React from "react";
import { Heart } from "lucide-react";

export default function CTA() {
    return (
        <section className='relative py-20 overflow-hidden'>
            {/* Gradient background with multiple layers */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-r from-accent-peach/40 via-accent-lavender/30 to-accent-mint/20'></div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10'></div>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-coral/20 via-accent-peach/20 to-transparent rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-mint/20 via-accent-lavender/20 to-transparent rounded-full blur-3xl'></div>

            <div className='relative container mx-auto px-4'>
                <div className='max-w-3xl mx-auto text-center'>
                    <Heart className='w-12 h-12 text-primary-400 mx-auto mb-6 animate-pulse' />
                    <h2 className='text-3xl font-bold text-gray-900 mb-4 font-aggro'>
                        주변에서 찾기 힘든, 완벽 스펙 남성과의 특별한 만남
                    </h2>
                    <p className='text-xl text-gray-600 mb-8'>지금 바로 신청하세요!</p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a
                            href='https://smore.im/form/ihfnOfyT7b'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
                        >
                            <div className='absolute inset-0 bg-gradient-sunset transition-transform group-hover:scale-105'></div>
                            <span className='relative z-10'>매칭 신청하기</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
