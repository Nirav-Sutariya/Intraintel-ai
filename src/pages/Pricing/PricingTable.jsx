import React from 'react';
import Line from '../../assets/images/Home/Line 60.png';

const PricingTable = () => {
    return (
        <>
            <div className='flex justify-center capitalize'>
                <div className='grid sm:grid-cols-2 xl:grid-cols-4 max-w-[750px] xl:max-w-none gap-5 mb-5'>
                    <div className='flex flex-wrap justify-center pt-6 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] lg:min-h-[701px]'>
                        <div className='text-center w-full'>
                            <button className="text-base py-[7px] px-10 text-white rounded-xl bg-[#3898EC]">Free Tier</button>
                            <p className='text-3xl lg:text-[64px] lg:leading-[75px] font-bold text-[#020F20] mt-8'>$0 <span className='text-base lg:text-[32px] font-normal'>/Month</span></p>
                            <p className='text-xl text-[#BBBBBB] text-center mt-4'>$ 0/Year</p>
                            <img className='my-6' src={Line} alt="" />
                            <div className='pl-10 pr-3 pb-8 border-top'>
                                <ul className='text-base lg:text-xl text-[#020F20] font-medium list-disc text-start mt-4 '>
                                    <li>Up to 1 GB data Storage</li>
                                    <li>Up to 50 queries/day</li>
                                    <li>Basic security features</li>
                                    <li>End-to-end encryption</li>
                                    <li>Community support</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-end text-center w-full'>
                            <a href='/' className="text-lg lg:text-[24px] lg:leading-[32px] p-3 lg:p-4 text-[#EEF5FD] bg-[#3898EC] rounded-b-xl w-full">Get Started</a>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center pt-6 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] lg:min-h-[701px] border-2 border-[#3898EC] relative overflow-hidden'>
                        <div className='absolute w-[200px] pt-8 pb-3 pl-4 -right-[67px] -top-5 sm:pl-3 sm:-right-16 sm:-top-4 text-center bg-[#3898EC] rotate-[40deg]'>
                            <p className='text-base sm:text-lg font-semibold text-[#EEF5FD]'>Popular</p>
                        </div>
                        <div className='text-center w-full'>
                            <button className="text-base py-[7px] px-10 text-white rounded-xl bg-[#3898EC]">Basic Tier</button>
                            <p className='text-3xl lg:text-[64px] lg:leading-[75px] font-bold text-[#020F20] mt-8'>$10 <span className='text-base lg:text-[32px] font-normal'>/Month</span></p>
                            <p className='text-xl text-[#BBBBBB] text-center mt-4'>$ 100/Year</p>
                            <img className='my-6' src={Line} alt="" />
                            <div className='pl-10 pr-3 pb-8 border-top'>
                                <ul className='text-base lg:text-xl text-[#020F20] font-medium list-disc text-start mt-4 '>
                                    <li>Up to 20 GB data Storage</li>
                                    <li>Up to 200 Queries/day</li>
                                    <li>Basic security features</li>
                                    <li>End-to-end encryption</li>
                                    <li>Community support</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-end text-center w-full'>
                            <a href='/' className="text-lg lg:text-[24px] lg:leading-[32px] p-3 lg:p-4 text-[#EEF5FD] bg-[#3898EC] rounded-b-xl w-full">Upgrade</a>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center pt-6 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] lg:min-h-[701px]'>
                        <div className='text-center w-full'>
                            <button className="text-base py-[7px] px-10 text-white rounded-xl bg-[#3898EC]">Starter Tier</button>
                            <p className='text-3xl lg:text-[64px] lg:leading-[75px] font-bold text-[#020F20] mt-8'>$30 <span className='text-base lg:text-[32px] font-normal'>/Month</span></p>
                            <p className='text-xl text-[#BBBBBB] text-center mt-4'>$ 0/Year</p>
                            <img className='my-6' src={Line} alt="" />
                            <div className='pl-10 pr-3 pb-8 border-top'>
                                <ul className='text-base lg:text-xl text-[#020F20] font-medium list-disc text-start mt-4 '>
                                    <li>Up to 100 GB data Storage</li>
                                    <li> Unlimited queries/day</li>
                                    <li>Advanced security features</li>
                                    <li>End-to-end encryption</li>
                                    <li>24/7 premium support</li>
                                    <li>Priority query processing</li>
                                    <li>Access new features & updates</li>
                                    <li>add multiple queries in one go</li>
                                    <li>Document upload feature</li>
                                    <li>Access exclusive webinars </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-end text-center w-full'>
                            <a href='/' className="text-lg lg:text-[24px] lg:leading-[32px] p-3 lg:p-4 text-[#EEF5FD] bg-[#3898EC] rounded-b-xl w-full">Upgrade</a>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center pt-6 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] lg:min-h-[701px]'>
                        <div className='text-center w-full'>
                            <button className="text-base py-[7px] px-10 text-white rounded-xl bg-[#3898EC]">Enterprise Tier</button>
                            <p className='text-2xl lg:text-[32px] lg:leading-[44px] font-bold text-[#020F20] mt-12 mb-10 px-12 lg:px-10'>Customized Service</p>
                            <img className='my-6' src={Line} alt="" />
                            <div className='pl-10 pr-3 pb-8 border-top'>
                                <ul className='text-base lg:text-xl text-[#020F20] font-medium list-disc text-start mt-4'>
                                    <li>Customized  Dara Storage</li>
                                    <li>Unlimited queries/Day</li>
                                    <li>Priority query processing</li>
                                    <li>High security features</li>
                                    <li>customized encryption</li>
                                    <li>a dedicated account manager</li>
                                    <li>Customizable  API Access</li>
                                    <li>On-premise deployment options</li>
                                    <li>detailed demo of the product.</li>
                                    <li>All features of starter tier</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex items-end text-center w-full'>
                            <a href='/' className="text-lg lg:text-[24px] lg:leading-[32px] p-3 lg:p-4 text-[#EEF5FD] bg-[#3898EC] rounded-b-xl w-full">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PricingTable;