import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "여성만 가입할 수 있나요?",
        answer: "네, 본 서비스는 여성 회원 전용입니다. 남성분들은 저희가 사전에 개별 검증하여 후보 DB로만 등록하고 있습니다.",
    },
    {
        question: "남성 회원(후보자)은 어떻게 검증하나요?",
        answer: "팀 내부 인맥과 실제 지인 네트워크를 통해 1차 검증(재학 증명, 신뢰도), 그리고 2차 신분 확인(키, 연락처, SNS, 대학 등록증 등)을 진행합니다.",
    },
    {
        question: "개인정보는 안전하게 보호되나요?",
        answer: "회원님의 프로필은 철저히 보안 처리되며, 매칭이 성사되어 서로가 동의한 경우에만 제한적으로 공유합니다.",
    },
    {
        question: "매칭은 어떻게 진행되나요?",
        answer: "회원님의 프로필과 선호도를 기반으로 매주 3회, 엄선된 남성 회원을 무료로 소개해드립니다. 모든 매칭 서비스는 무료로 제공됩니다.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className='py-20 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='max-w-3xl mx-auto'>
                    <h2 className='text-3xl font-bold text-gray-900 text-center mb-12 font-aggro'>자주 묻는 질문</h2>
                    <div className='space-y-4'>
                        {faqs.map((faq, index) => (
                            <div key={index} className='border border-gray-200 rounded-lg overflow-hidden'>
                                <button
                                    className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50'
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className='font-semibold text-gray-900'>{faq.question}</span>
                                    {openIndex === index ? (
                                        <ChevronUp className='w-5 h-5 text-gray-500' />
                                    ) : (
                                        <ChevronDown className='w-5 h-5 text-gray-500' />
                                    )}
                                </button>
                                {openIndex === index && (
                                    <div className='px-6 py-4 bg-gray-50'>
                                        <p className='text-gray-600'>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
