import React from "react";
import { UserPlus, Users, MessageCircle, ThumbsUp } from "lucide-react";

const steps = [
    {
        icon: UserPlus,
        title: "가입 신청 & 프로필 등록",
        description: "간단한 프로필 작성으로 시작하세요.",
    },
    {
        icon: Users,
        title: "맞춤형 매칭",
        description: "24시간 내 엄선된 프로필을 받아보세요.",
    },
    {
        icon: MessageCircle,
        title: "소통 & 첫 만남",
        description: "편안한 방식으로 대화를 시작하세요.",
    },
    {
        icon: ThumbsUp,
        title: "피드백 & 재매칭",
        description: "더 정확한 매칭을 위해 피드백을 반영합니다.",
    },
];

export default function HowItWorks() {
    return (
        <section className='relative py-20 overflow-hidden'>
            {/* Gradient background */}
            <div className='absolute inset-0'>
                <div className='absolute inset-0 bg-gradient-to-r from-accent-peach/30 via-accent-lavender/20 to-accent-mint/10'></div>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10'></div>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-coral/20 via-accent-peach/20 to-transparent rounded-full blur-3xl'></div>
            <div className='absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent-mint/20 via-accent-lavender/20 to-transparent rounded-full blur-3xl'></div>

            <div className='relative container mx-auto px-4'>
                <div className='max-w-3xl mx-auto text-center mb-16'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4 font-aggro'>이용 방법</h2>
                    <p className='text-gray-600'>간단한 4단계로 특별한 만남을 시작하세요</p>
                </div>
                <div className='grid md:grid-cols-4 gap-8'>
                    {steps.map((step, index) => (
                        <div key={index} className='relative group'>
                            <div className='relative'>
                                <div className='w-16 h-16 bg-gradient-to-br from-white to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300'>
                                    <step.icon className='w-8 h-8 text-primary-500' />
                                </div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-2 text-center font-tway'>
                                    {step.title}
                                </h3>
                                <p className='text-gray-600 text-center'>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && (
                                <div className='hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-200 to-primary-100 transform -translate-x-8' />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
