import React from 'react';
import HeroImg from '../../assets/images/Home/Hero.png';
import Button from '../../components/Button';

const Hero = () => {
    return (
        <>
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-3 lg:gap-8 mt-[50px] lg:mt-[120px]'>
                <div className='max-w-[747px] w-full order-2 md:order-1'>
                    <h1 className='text-3xl lg:text-[40px] lg:leading-[50px] xl:text-[50px] xl:leading-[65px] 2xl:text-[60px] 2xl:leading-[80px] font-bold'>Unlock the Power of Your Data with Intelligent Storage Solutions</h1>
                    <Button className=" mt-[30px] lg:mt-[40px] xl:mt-[56px]">Request A Demo </Button>
                </div>
                <div className='w-full order-1 md:order-2'>
                    <img src={HeroImg} alt="" />
                </div>
            </div>
        </>
    );
}

export default Hero;
