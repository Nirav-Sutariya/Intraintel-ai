import React from 'react';
import Purpose from '../../assets/images/Home/Purpose.png';
import Mission from '../../assets/images/Home/Mission.png';

const PurposeMissionAbout = () => {
    return (
        <>
            <div className='py-[50px] capitalize'>
                <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-8 lg:gap-[100px] xl:gap-[125px]'>
                    <div className='max-w-[690px] w-full'>
                        <h1 className='text-3xl sm:text-[40px] sm:leading-[50px] lg:text-[64px] lg:leading-[80px] font-bold text-[#0068E5]'>Our Purpose</h1>
                        <img className='block md:hidden py-5' src={Purpose} alt="" />
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] text-justify mt-3 lg:mt-8'>At IntraIntel.AI, we aim to empower individuals and organizations to confidently make data-driven decisions. We understand that your data is not just a collection of numbers and text; it's a valuable asset that is key to unlocking insights, driving innovation, and achieving your goals. That's why we've created a platform that allows you to harness the power of GenerativeAI within the secure boundaries of your own storage and data files.</p>
                    </div>
                    <div className='hidden md:block max-w-[535px] w-full'>
                        <img src={Purpose} alt="" />
                    </div>
                </div>
                <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-8 lg:gap-[100px] xl:gap-[125px] mt-[70px] lg:mt-[120px]'>
                    <div className='hidden md:block max-w-[535px] w-full order-2 md:order-1'>
                        <img src={Mission} alt="" />
                    </div>
                    <div className='max-w-[690px] w-full order-1 md:order-2'>
                        <h1 className='text-3xl sm:text-[40px] sm:leading-[50px] lg:text-[64px] lg:leading-[80px] font-bold text-[#0068E5]'>Our Mission</h1>
                        <img className='block md:hidden py-5' src={Mission} alt="" />
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] text-justify mt-3 lg:mt-8'>Our mission is to democratize access to AI-driven insights, making it possible for everyone to benefit from the transformative potential of AI, regardless of their technical expertise or the size of their data sets. We aim to :</p>
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] text-justify mt-2'><span className='font-bold'>Enable Seamless Interactions:</span>Provide an intuitive platform allowing users to interact meaningfully with their data.</p>
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] text-justify mt-2'><span className='font-bold'>Prioritize Security:</span>Ensure the highest security and compliance standards, allowing you to focus on what matters most—your data.</p>
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] text-justify mt-2'><span className='font-bold'>Offer Flexibility:</span>You can choose your preferred Large Language Model (LLM) and storage options without locking you into a single solution.</p>
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] text-justify mt-2'><span className='font-bold'>Drive Innovation:</span>Continuously improve and expand our offerings to meet the evolving needs of our users.</p>
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] text-justify mt-2'><span className='font-bold'>Support and Educate:</span>Offer robust support and educational resources to help you get the most out of your data.</p>
                    </div>
                </div>
            </div>

            <div className='mt-[50px] lg:mt-[70px] xl:mt-[120px] capitalize'>
                <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] text-justify mt-3 lg:mt-8'>At IntraIntel.ai, we transform how businesses leverage internal data. Using state-of-the-art AI and ML, our platform crafts precise, human-like content from vast intranet sources. With expertise spanning government, medical, research, and finance sectors, we aim to boost efficiency, expedite responses, and prioritize human-centric tasks like strategic decision-making.</p>
            </div>
        </>
    );
}

export default PurposeMissionAbout;
