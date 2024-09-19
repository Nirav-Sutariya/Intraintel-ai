import React from 'react';
import Hero from './Hero';
import Statistics from './Statistics';
import OutTeam from './OutTeam';
import PurposeMissionAbout from './PurposeMissionAbout';

const AboutMain = () => {
    return (
        <>
            <div className='flex justify-center px-[30px]'>
                <div className='max-w-[1560px]'>
                    <Hero />
                    <PurposeMissionAbout />
                </div>
            </div>
            <div className='flex justify-center bg-[#3898EC] mt-[50px] lg:mt-[70px] xl:mt-[120px] px-[30px]'>
                <div className='max-w-[1560px]'>
                    <Statistics />
                </div>
            </div>
            <div className='flex justify-center px-[30px]'>
                <div className='max-w-[1560px]'>
                    <OutTeam />
                </div>
            </div>
        </>
    );
}

export default AboutMain;
