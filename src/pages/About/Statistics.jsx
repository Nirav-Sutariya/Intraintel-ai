import React from 'react';
import Satisfied from '../../assets/images/About/Satisfied.png';

const Statistics = () => {
    return (
        <div className='flex justify-center xl:justify-between flex-wrap gap-x-[40px] gap-y-[50px] lg:gap-y-[100px] py-[72px]'>
            <div className='flex items-center gap-4 lg:p-4 max-w-[300px] lg:max-w-[410px] w-full'>
                <img className='p-5 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] bg-[#EEF5FD]' src={Satisfied} alt="" />
                <div>
                    <h1 className='text-3xl lg:text-[64px] lg:leading-[52px] font-extrabold text-[#EEF5FD]'>400+</h1>
                    <p className='text-base lg:text-[22px] leading-[32px] text-[#020F20] lg:mt-4'>Satisfied Clients</p>
                </div>
            </div>
            <div className='flex items-center gap-4 lg:p-4 max-w-[300px] lg:max-w-[410px] w-full'>
                <img className='p-5 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] bg-[#EEF5FD]' src={Satisfied} alt="" />
                <div>
                    <h1 className='text-3xl lg:text-[64px] lg:leading-[52px] font-extrabold text-[#EEF5FD]'>8+</h1>
                    <p className='text-base lg:text-[22px] leading-[32px] text-[#020F20] lg:mt-4'>Storage Integration</p>
                </div>
            </div>
            <div className='flex items-center gap-4 lg:p-4 max-w-[300px] lg:max-w-[410px] w-full'>
                <img className='p-5 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] bg-[#EEF5FD]' src={Satisfied} alt="" />
                <div>
                    <h1 className='text-3xl lg:text-[64px] lg:leading-[52px] font-extrabold text-[#EEF5FD]'>24*7</h1>
                    <p className='text-base lg:text-[22px] leading-[32px] text-[#020F20] lg:mt-4'>Enhanced Security</p>
                </div>
            </div>
            <div className='flex items-center gap-4 lg:p-4 max-w-[300px] lg:max-w-[410px] w-full'>
                <img className='p-5 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] bg-[#EEF5FD]' src={Satisfied} alt="" />
                <div>
                    <h1 className='text-3xl lg:text-[64px] lg:leading-[52px] font-extrabold text-[#EEF5FD]'>96%</h1>
                    <p className='text-base lg:text-[22px] leading-[32px] text-[#020F20] lg:mt-4'>Efficient Analysis</p>
                </div>
            </div>
            <div className='flex items-center gap-4 lg:p-4 max-w-[300px] lg:max-w-[410px] w-full'>
                <img className='p-5 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] bg-[#EEF5FD]' src={Satisfied} alt="" />
                <div>
                    <h1 className='text-3xl lg:text-[64px] lg:leading-[52px] font-extrabold text-[#EEF5FD]'>100%</h1>
                    <p className='text-base lg:text-[22px] leading-[32px] text-[#020F20] lg:mt-4'>Customer Satisfaction</p>
                </div>
            </div>
            <div className='flex items-center gap-4 lg:p-4 max-w-[400px] lg:max-w-[410px] w-full'>
                <img className='p-5 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] bg-[#EEF5FD]' src={Satisfied} alt="" />
                <div>
                    <h1 className='text-3xl lg:text-[64px] lg:leading-[52px] font-extrabold text-[#EEF5FD]'>100%</h1>
                    <p className='text-base lg:text-[22px] leading-[32px] text-[#020F20] lg:lg:mt-4'>Quality Assurance</p>
                </div>
            </div>
        </div>
    );
}

export default Statistics;
