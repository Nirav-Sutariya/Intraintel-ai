import React from 'react';
import Hero from './Hero';
import Features from './Features';
import AboutUs from './AboutUs';
import PurposeMission from './PurposeMission';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import FAQ from './FAQ';
import GetInTouch from './GetInTouch';

const HomeMain = () => {
    return (
        <>
            <div className='flex justify-center px-[30px]'>
                <div className='max-w-[1560px]'>
                    <Hero />
                    <Features />
                    <AboutUs />
                </div>
            </div>
            <div className='flex justify-center bg-[#CCE1FA] px-[30px]'>
                <div className='max-w-[1560px]'>
                    <PurposeMission />
                </div>
            </div>
            <div className='flex justify-center px-[30px]'>
                <div className='max-w-[1560px]'>
                    <HowItWorks/>
                    <Pricing/>
                    <FAQ/>
                    <GetInTouch/>
                </div>
            </div>
        </>
    );
}

export default HomeMain;
