import React from 'react';
import Button from '../../components/Button';
import AboutUsImg from '../../assets/images/Home/AboutUs.png';

const AboutUs = () => {
    return (
        <div className='mt-[50px] lg:mt-[70px] xl:mt-[120px] mb-[70px] lg:mb-[115px] text-center capitalize'>
            <h1 className='text-4xl sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[80px] font-bold text-[#0068E5]'>About Us</h1>
            <div className='flex justify-center'>
                <p className='text-base lg:text-[18px] lg:leading-[28px] font-medium text-[#020F20] tracking-[0.5px] mt-3 mb-[50px] max-w-[1100px]'>At the forefront of innovation, we provide AI-driven solutions to streamline and optimize your storage management.
                    Our technology ensures efficiency, scalability, and intelligent automation for your business needs</p>
            </div>
            <div className='flex flex-wrap md:flex-nowrap justify-center items-center gap-[50px]'>
                <div className='max-w-[675px] w-full'>
                    <img src={AboutUsImg} alt="" />
                </div>
                <div className='w-full text-justify'>
                    <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20]'>At intaintel.AI, you're not just getting answers; you're gaining a deeper understanding of your data while maintaining the highest standards of security and compliance. The freedom to choose your preferred LLM and storage options ensures you're not locked into a single solution. Start your journey towards data-driven decision-making today.</p>
                    <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-2'>Integrate seamlessly with your existing data storage solutions like GCP, Google Drive, AWS, Azure, Box, SharePoint, OneDrive, Personal Storage Device, or other drives. Your data never leaves your secure environment, ensuring compliance and peace of mind.</p>
                    <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-2'>We are committed to helping you unlock the intelligence within your data, securely and seamlessly. Join us on this exciting journey towards a future where data-driven decision-making is not just a buzzword but a reality for all.</p>
                    <Button className="mt-[50px]">Learn More</Button>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
