import React from "react";

export default function Footer() {
    return (
        <footer className='py-12 bg-gray-50 border-t border-gray-200'>
            <div className='container mx-auto px-4'>
                <div className='text-gray-500 text-sm space-y-2'>
                    <div className='mb-6'>
                        <h3 className='text-base font-bold text-gray-900 mb-2'>BOLTLAB</h3>
                    </div>
                    <div className='space-y-1'>
                        <p>사업자 등록번호 : 290-15-02231</p>
                        <p>대표자 : 송준혁</p>
                        <p>소재지 : 서울 성동구 뚝섬로13길 38 KT&G상상플래닛</p>
                        <p>
                            문의 :{" "}
                            <a href='mailto:tachyon@boltlab.co' className='hover:text-gray-700 underline'>
                                tachyon@boltlab.co
                            </a>
                        </p>
                    </div>
                    <div className='pt-6 text-xs text-gray-400'>
                        <p>© 2024 BOLTLAB. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
