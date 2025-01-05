import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '무료',
    features: [
      '첫 1회 매칭 제공',
      '기본 프로필 열람',
      '앱 내 메시징'
    ]
  },
  {
    name: 'Premium',
    price: '월 49,900원',
    features: [
      '무제한 매칭 신청',
      '전문가 1:1 컨설팅',
      '상세 프로필 열람',
      '우선 매칭 서비스'
    ]
  },
  {
    name: 'VIP',
    price: '월 99,900원',
    features: [
      'VVIP 남성 라인업 우선 매칭',
      '오프라인 미팅 현장 케어',
      '주선 담당 매니저 배정',
      '프리미엄 혜택 모두 포함'
    ]
  }
];

export default function Plans() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            멤버십 플랜
          </h2>
          <p className="text-gray-600">
            나에게 맞는 플랜을 선택하세요
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-3xl font-bold text-rose-500 mb-6">
                {plan.price}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-rose-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition-colors">
                시작하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}