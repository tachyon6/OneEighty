import React from "react";
import { FeatureCard } from "./features/FeatureCard";
import { features } from "./features/featureData";

export default function Features() {
    return (
        <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-3xl mx-auto text-center mb-16'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4 font-aggro'>
                        우리가 특별한 이유
                        <br className='md:hidden' />
                        알려줄게요!
                    </h2>
                    <p className='text-gray-600'>
                        기존 소개팅 앱의 한계를 넘어,
                        <br className='md:hidden' />
                        검증된 만남을 무료로 제공합니다
                    </p>
                </div>
                <div className='grid md:grid-cols-2 gap-8'>
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
