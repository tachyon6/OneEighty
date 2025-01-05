import React from "react";
import { Shield, UserCheck, Lock, AlertCircle } from "lucide-react";

const safetyFeatures = [
    {
        icon: Shield,
        title: "이중 안전장치",
        description: "실제 지인 + 명문대 재학 확인으로 최소한의 신뢰도 확보",
    },
    {
        icon: Lock,
        title: "블라인드 프로필 열람",
        description: "매칭된 상대 이외에는 프로필 비공개",
    },
    {
        icon: AlertCircle,
        title: "신고 제도",
        description: "관리자 신고 문의 및 신고된 사용자 블랙리스트 관리",
    },
];

export default function Safety() {
    return (
        <section className='py-20 bg-rose-50'>
            <div className='container mx-auto px-4'>
                <div className='max-w-3xl mx-auto text-center mb-16'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-4 font-aggro'>안전한 만남을 위한 약속</h2>
                    <p className='text-gray-600'>여러분의 안전과 프라이버시를 최우선으로 생각합니다</p>
                </div>
                <div className='grid md:grid-cols-3 gap-8'>
                    {safetyFeatures.map((feature, index) => (
                        <div key={index} className='bg-white p-6 rounded-xl text-center'>
                            <feature.icon className='w-12 h-12 text-rose-500 mx-auto mb-4' />
                            <h3 className='text-xl font-semibold text-gray-900 mb-2 font-tway'>{feature.title}</h3>
                            <p className='text-gray-600'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
