import React from 'react';
import DevRoy from '../../assets/images/About/DevRoy.png';
import AarushiSharma from '../../assets/images/About/AarushiSharma.png';

const OutTeam = () => {
    return (
        <div className='my-[50px] lg:my-[70px] xl:my-[120px] capitalize'>
            <div className='text-center'>
                <h1 className='text-4xl sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[80px] font-bold text-[#0068E5]'>Our Team</h1>
                <div className='flex justify-center'>
                    <p className='text-base lg:text-[18px] lg:leading-[28px] font-medium text-[#020F20] tracking-[0.5px] mt-3 mb-[50px] max-w-[1100px]'>Meet the Experts Behind Our AI-Driven Solutions. Our dedicated team combines innovation and expertise to deliver exceptional storage management services</p>
                </div>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap gap-5'>
                <div className='flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-5 lg:gap-8 p-3 rounded-xl shadow-[0px_7px_29px_0px_#64646F33]'>
                    <div className='w-full max-w-[351px]'>
                        <img src={DevRoy} alt="" />
                    </div>
                    <div className='py-3 w-full'>
                        <h1 className='text-2xl xl:text-[32px] xl:leading-[42px] font-semibold text-[#0068E5]'>Dev Roy</h1>
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-2'>CEO, Intraintel.aI</p>
                        <p className='text-base xl:text-[20px] xl:leading-[30px] text-[#020F20] mt-3 xl:mt-8'>As the visionary leader of Intraintel, Dev Roy brings over 10 years of experience in technology and business strategy. His dedication to innovation and excellence drives our mission to deliver cutting-edge solutions and exceptional value to our clients.</p>
                    </div>
                </div>
                <div className='flex flex-wrap sm:flex-nowrap gap-3 lg:gap-8 p-3 rounded-xl shadow-[0px_7px_29px_0px_#64646F33]'>
                    <div className='w-full max-w-[351px]'>
                    <img src={AarushiSharma} alt="" />
                    </div>
                    <div className='mt-3 w-full'>
                        <h1 className='text-2xl xl:text-[32px] xl:leading-[42px] font-semibold text-[#0068E5]'>Aarushi Sharma</h1>
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-2'>CTO, Intraintel.AI</p>
                        <p className='text-base xl:text-[20px] xl:leading-[30px] text-[#020F20] mt-3 xl:mt-8'>With deep expertise in technology and development, Aarushi Sharma drives our technical advancements and product innovation. Her passion for emerging technologies and unwavering commitment to excellence ensure we remain at the forefront of the industry.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OutTeam;
