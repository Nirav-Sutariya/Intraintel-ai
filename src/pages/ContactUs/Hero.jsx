import React from 'react';
import ContactUs from '../../assets/images/ContactUs/ContactUs.png';

const Hero = () => {
    return (
        <>
            <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-10 md:gap-3 lg:gap-8 mt-[50px] lg:mt-[120px] mb-[50px] lg:mb-[100px] xl:mb-[150px]'>
                <div className='max-w-[747px] w-full order-2 md:order-1'>
                    <h1 className='text-[50px] lg:leading-[50px] xl:text-[80px] xl:leading-[90px] 2xl:text-[100px] 2xl:leading-[130px] font-bold text-[#0068E5]'>Contact Us</h1>
                    <p className='text-xl lg:text-[32px] lg:leading-[42px] font-medium text-[#020F20] mt-4 lg:mt-[35px]'>Get in Touch with Our Experts for Support, Questions, or Custom Solutions</p>
                </div>
                <div className='w-full order-1 md:order-2 max-w-[671px]'>
                    <img src={ContactUs} alt="" />
                </div>
            </div>
        </>
    );
}

export default Hero;
