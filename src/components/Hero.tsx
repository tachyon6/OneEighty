import { Logo } from "./Logo";

export default function Hero() {
    return (
        <div className='relative overflow-hidden min-h-screen'>
            <div className='absolute inset-0'>
                <img
                    src='https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=2000&q=80'
                    alt='Background'
                    className='w-full h-full object-cover opacity-20'
                />
                <div className='absolute inset-0 bg-gradient-candy opacity-90'></div>
            </div>

            <nav className='relative z-10 p-4 md:p-6 bg-white/50 backdrop-blur-sm border-b border-primary-200/50'>
                <div className='container mx-auto'>
                    <Logo />
                </div>
            </nav>

            <div className='relative z-10 container mx-auto px-4 py-12 md:py-24 flex items-center min-h-[calc(100vh-80px)]'>
                <div className='w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center'>
                    <div className='text-center md:text-left space-y-6'>
                        <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200/50'>
                            <span className='text-primary-600 font-semibold font-logo'>OneEighty</span>
                        </div>
                        <h1
                            className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight'
                            style={{ fontFamily: "SB Aggro" }}
                        >
                            키크고 훈훈한
                            <br />
                            <span className='text-primary-500'>남자 소개받을래?</span>
                        </h1>
                        <p className='text-lg md:text-xl text-gray-700 font-tway'>
                            180 넘는 수도권 명문대 재학생들로
                            <br className='md:hidden' />
                            시작하는 설렘
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                            <a
                                href='https://smore.im/form/ihfnOfyT7b'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='group relative w-fit mx-auto sm:mx-0 px-6 md:px-8 py-3 rounded-full font-semibold text-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
                            >
                                <div className='absolute inset-0 bg-gradient-sunset transition-transform group-hover:scale-105'></div>
                                <span className='relative z-10'>지금 신청하기</span>
                            </a>
                        </div>
                        <p className='text-sm text-gray-600'>* 재학생 인증으로 신뢰할 수 있는 프로필만 제공해요</p>
                    </div>
                    <div className='relative hidden md:block'>
                        <div className='absolute inset-0 bg-gradient-radial from-accent-peach/30 via-accent-lavender/30 to-transparent rounded-full blur-3xl'></div>
                        <img
                            src='https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
                            alt='Campus life'
                            className='relative z-10 w-full h-[600px] object-cover rounded-3xl shadow-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
