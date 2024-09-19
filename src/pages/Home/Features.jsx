import React from 'react';
import Advanced from '../../assets/images/Home/Advanced.png';
import DataHandling from '../../assets/images/Home/DataHandling.png';
import UserCentric from '../../assets/images/Home/UserCentric.png';
import MultiSector from '../../assets/images/Home/MultiSector.png';
import RealTimeProcessing from '../../assets/images/Home/RealTimeProcessing.png';
import CustomIntegration from '../../assets/images/Home/CustomIntegration.png';

const Features = () => {
    return (
        <div className='mt-[100px] lg:mt-[150px] xl:mt-[243px] text-center capitalize'>
            <h1 className='text-4xl sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[80px] font-bold text-[#0068E5]'>Our Features </h1>
            <p className='text-base lg:text-[18px] lg:leading-[28px] font-medium text-[#020F20] tracking-[0.5px] mt-3 mb-[50px]'>Seamless data management, unified data access, and AI-driven search for enhanced productivity and insights</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div>
                    <div className='flex justify-center relative'>
                        <img className='absolute top-0 w-[150px] lg:w-auto' src={Advanced} alt="" />
                    </div>
                    <div className='mt-[75px] lg:mt-[90px] p-4 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] text-center'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-[#020F20] pt-[40px] lg:pt-[60px] pb-2 lg:pb-4'>Advanced AI & ML</h4>
                        <p className='text-base lg:text-xl text-[#020F20]'>Utilize state-of-the-art AI and ML algorithms to craft human-like content tailored to specific questions.</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center relative'>
                        <img className='absolute top-0 w-[150px] lg:w-auto' src={DataHandling} alt="" />
                    </div>
                    <div className='mt-[75px] lg:mt-[90px] p-4 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] text-center'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-[#020F20] pt-[40px] lg:pt-[60px] pb-2 lg:pb-4'>Secure Data Handling</h4>
                        <p className='text-base lg:text-xl text-[#020F20]'>Process data within the company's security boundary, ensuring confidentiality and compliance.</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center relative'>
                        <img className='absolute top-0 w-[150px] lg:w-auto' src={UserCentric} alt="" />
                    </div>
                    <div className='mt-[75px] lg:mt-[90px] p-4 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] text-center'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-[#020F20] pt-[40px] lg:pt-[60px] pb-2 lg:pb-4'>User-Centric Design</h4>
                        <p className='text-base lg:text-xl text-[#020F20]'>We believe technology should be intuitive. With a user-friendly interface, IntraIntel.ai ensures that you can leverage the power of AI.</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center relative'>
                        <img className='absolute top-0 w-[150px] lg:w-auto' src={MultiSector} alt="" />
                    </div>
                    <div className='mt-[75px] lg:mt-[90px] p-4 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] text-center lg:min-h-[255px]'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-[#020F20] pt-[40px] lg:pt-[60px] pb-2 lg:pb-4'>Multi-Sector Expertise</h4>
                        <p className='text-base lg:text-xl text-[#020F20]'>From government and medical to research and finance, IntraIntel.ai is versatile.</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center relative'>
                        <img className='absolute top-0 w-[150px] lg:w-auto' src={RealTimeProcessing} alt="" />
                    </div>
                    <div className='mt-[75px] lg:mt-[90px] p-4 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] text-center'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-[#020F20] pt-[40px] lg:pt-[60px] pb-2 lg:pb-4'>Real-Time Processing</h4>
                        <p className='text-base lg:text-xl text-[#020F20]'>Say goodbye to waiting. With our real-time API integrations, IntraIntel.ai ensures rapid data ingestion and immediate content generation.</p>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center relative'>
                        <img className='absolute top-0 w-[150px] lg:w-auto' src={CustomIntegration} alt="" />
                    </div>
                    <div className='mt-[75px] lg:mt-[90px] p-4 lg:p-8 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] text-center lg:min-h-[255px]'>
                        <h4 className='text-xl lg:text-2xl font-semibold text-[#020F20] pt-[40px] lg:pt-[60px] pb-2 lg:pb-4'>Custom Integration</h4>
                        <p className='text-base lg:text-xl text-[#020F20]'>Every business or person has unique need need to perform their job, and so is its data.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
