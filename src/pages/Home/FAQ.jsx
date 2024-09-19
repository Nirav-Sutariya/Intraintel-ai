import React, { useState } from 'react';
import FAQArrow from '../../assets/images/Home/FAQArrow.png';

const FAQ = () => {

    const [isOpen, setIsOpen] = useState(0); // Example with 3 FAQ items

    // Toggle function to open/close the FAQ section
    const toggleFAQ = (index) => {
        // Copy the current state and toggle the selected index
        setIsOpen(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <div className='capitalize'>
            <div className='mt-[50px] lg:mt-[70px] xl:mt-[120px] text-center'>
                <h1 className='text-4xl sm:text-[50px] sm:leading-[60px] lg:text-[64px] lg:leading-[80px] font-bold text-[#0068E5]'>Frequently Asked Questions</h1>
                <div className='flex justify-center'>
                    <p className='text-base lg:text-[18px] lg:leading-[28px] font-medium text-[#020F20] tracking-[0.5px] mt-3 mb-[50px] max-w-[1100px]'>Got Questions? We've Got Answers. Explore FAQs to learn more about how our AI-powered storage management works and how it can benefit your work</p>
                </div>
            </div>

            {/* Accordion Section */}
            <div className="py-5 lg:py-[35px] px-5 lg:px-10 rounded-xl bg-[#CCE1FA]">
                <div className="flex justify-between items-center cursor-pointer gap-2" onClick={() => toggleFAQ(0)}>
                    <h2 className="text-xl lg:text-[30px] lg:leading-[40px] font-bold text-[#020F20]">What is IntraIntel.AI?</h2>
                    <img src={FAQArrow} alt="Toggle Arrow" className={`transition-transform duration-300 w-7 lg:w-auto ${isOpen === 0 ? 'rotate-180' : ''}`} />
                </div>
                {isOpen === 0 && (
                    <p className="text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-3 lg:mt-5 pr-5 lg:pr-10">
                        IntraIntel.AI is an AI-powered platform enabling you to run generative AI models like ChatGPT on your data within your storage and security boundaries. You can ask questions and generate content based on your data.
                    </p>
                )}
            </div>

            <div className="py-5 lg:py-[35px] px-5 lg:px-10 rounded-xl bg-[#CCE1FA] mt-5">
                <div className="flex justify-between items-center cursor-pointer gap-2" onClick={() => toggleFAQ(1)}>
                    <h2 className="text-xl lg:text-[30px] lg:leading-[40px] font-bold text-[#020F20]">What should my data look like?</h2>
                    <img src={FAQArrow} alt="Toggle Arrow" className={`transition-transform duration-300 w-7 lg:w-auto ${isOpen === 1 ? 'rotate-180' : ''}`} />
                </div>
                {isOpen === 1 && (
                    <p className="text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-3 lg:mt-5 pr-5 lg:pr-10">
                        IntraIntel.AI is an AI-powered platform enabling you to run generative AI models like ChatGPT on your data within your storage and security boundaries. You can ask questions and generate content based on your data.
                    </p>
                )}
            </div>

            <div className="py-5 lg:py-[35px] px-5 lg:px-10 rounded-xl bg-[#CCE1FA] mt-5">
                <div className="flex justify-between items-center cursor-pointer gap-2" onClick={() => toggleFAQ(2)}>
                    <h2 className="text-xl lg:text-[30px] lg:leading-[40px] font-bold text-[#020F20]">Can I give instructions to the Generative AI model?</h2>
                    <img src={FAQArrow} alt="Toggle Arrow" className={`transition-transform duration-300 w-7 lg:w-auto ${isOpen === 2 ? 'rotate-180' : ''}`} />
                </div>
                {isOpen === 2 && (
                    <p className="text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-3 lg:mt-5 pr-5 lg:pr-10">
                        IntraIntel.AI is an AI-powered platform enabling you to run generative AI models like ChatGPT on your data within your storage and security boundaries. You can ask questions and generate content based on your data.
                    </p>
                )}
            </div>

            <div className="py-5 lg:py-[35px] px-5 lg:px-10 rounded-xl bg-[#CCE1FA] mt-5">
                <div className="flex justify-between items-center cursor-pointer gap-2" onClick={() => toggleFAQ(3)}>
                    <h2 className="text-xl lg:text-[30px] lg:leading-[40px] font-bold text-[#020F20]">Where is my data stored?</h2>
                    <img src={FAQArrow} alt="Toggle Arrow" className={`transition-transform duration-300 w-7 lg:w-auto ${isOpen === 3 ? 'rotate-180' : ''}`} />
                </div>
                {isOpen === 3 && (
                    <p className="text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-3 lg:mt-5 pr-5 lg:pr-10">
                        IntraIntel.AI is an AI-powered platform enabling you to run generative AI models like ChatGPT on your data within your storage and security boundaries. You can ask questions and generate content based on your data.
                    </p>
                )}
            </div>

            <div className="py-5 lg:py-[35px] px-5 lg:px-10 rounded-xl bg-[#CCE1FA] mt-5">
                <div className="flex justify-between items-center cursor-pointer gap-2" onClick={() => toggleFAQ(4)}>
                    <h2 className="text-xl lg:text-[30px] lg:leading-[40px] font-bold text-[#020F20]">What models are supported?</h2>
                    <img src={FAQArrow} alt="Toggle Arrow" className={`transition-transform duration-300 w-7 lg:w-auto ${isOpen === 4 ? 'rotate-180' : ''}`} />
                </div>
                {isOpen === 4 && (
                    <p className="text-base lg:text-[20px] lg:leading-[30px] text-[#020F20] mt-3 lg:mt-5 pr-5 lg:pr-10">
                        IntraIntel.AI is an AI-powered platform enabling you to run generative AI models like ChatGPT on your data within your storage and security boundaries. You can ask questions and generate content based on your data.
                    </p>
                )}
            </div>
        </div>
    );
}

export default FAQ;
