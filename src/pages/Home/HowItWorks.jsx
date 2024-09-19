import React from 'react';
import AccessDashboard from '../../assets/images/Home/AccessDashboard.png';

const HowItWorks = () => {
    return (
        <>
            <div className='mt-[50px] lg:mt-[70px] xl:mt-[120px] text-center capitalize'>
                <h1 className='text-4xl sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[80px] font-bold text-[#0068E5]'>How It Works? </h1>
                <div className='flex justify-center'>
                    <p className='text-base lg:text-[18px] lg:leading-[28px] font-medium text-[#020F20] tracking-[0.5px] mt-3 mb-[50px] max-w-[1100px]'>Discover  our AI-driven system intelligently manages and optimizes storage. From automated organization to seamless scalability, we make storage management effortless and efficient</p>
                </div>
            </div>
            <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-10 lg:gap-[100px] capitalize'>
                <div className='max-w-[690px] w-full'>
                    <h4 className='text-2xl lg:text-[32px] lg:leading-[42px] font-semibold text-[#0068E5]'>Access Your Dashboard</h4>
                    <p className='text-base lg:text-[20px] lg:leading-[30px] text-justify mt-3 lg:mt-8'>Once you sign up and choose your plan, you’ll gain access to your personalized Dashboard. The dashboard serves as your control center, where you can easily manage your cloud connections, models, and data analytics all in one place. It’s designed to be user-friendly, so everything you need is right at your fingertips.</p>
                </div>
                <div className='w-full '>
                    <img className='shadow-[0px_24px_56px_0px_#0068E529] rounded-xl' src={AccessDashboard} alt="" />
                </div>
            </div>
        </>
    );
}

export default HowItWorks;
