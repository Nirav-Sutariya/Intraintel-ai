import React, { useState } from 'react';
import X from '../assets/images/Footer/X.png';
import XHover from '../assets/images/Footer/XHover.png';
import Google from '../assets/images/Footer/Google.png';
import YouTub from '../assets/images/Footer/YouTub.png';
import Facbook from '../assets/images/Footer/Facbook.png';
import Logo from '../assets/images/Footer/FooterLogo.png';
import YouTubHover from '../assets/images/Footer/YouTubHover.png';
import GoogleHover from '../assets/images/Footer/GoogleHover.png';
import FacbookHover from '../assets/images/Footer/FacbookHover.png';
import Button from './Button';
import { Link } from 'react-router-dom';

const Footer = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (email) {
            console.log(`Subscribed with email: ${email}`);
        } else {
            console.log('Please enter an email address.');
        }
    };
    return (
        <>
            <div className='flex justify-center bg-[#3898EC] py-[50px] lg:py-[120px] px-[30px] capitalize'>
                <div className='flex flex-wrap md:flex-nowrap justify-between gap-10 md:gap-5 w-full max-w-[1560px]'>
                    <div className='sm:max-w-[300px] lg:max-w-[507px]'>
                        <img className='w-[200px] lg:w-auto' src={Logo} alt="" />
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#EEF5FD] mt-5'>Seamlessly connect your data sources and harness the power of Generative AI to generate intelligent, human-like content. All while keeping your data secure within your own storage and files.</p>
                        <div className='flex gap-[18px] mt-4 md:mt-8'>
                            <div className="icon-wrapper">
                                <img src={Google} alt="" className="icon-normal w-[40px] lg:w-auto" />
                                <img src={GoogleHover} alt="" className="icon-hover w-[40px] lg:w-auto" />
                            </div>
                            <div className="icon-wrapper">
                                <img src={Facbook} alt="" className="icon-normal w-[40px] lg:w-auto" />
                                <img src={FacbookHover} alt="" className="icon-hover w-[40px] lg:w-auto" />
                            </div>
                            <div className="icon-wrapper">
                                <img src={X} alt="" className="icon-normal w-[40px] lg:w-auto" />
                                <img src={XHover} alt="" className="icon-hover w-[40px] lg:w-auto" />
                            </div>
                            <div className="icon-wrapper">
                                <img src={YouTub} alt="" className="icon-normal w-[40px] lg:w-auto" />
                                <img src={YouTubHover} alt="" className="icon-hover w-[40px] lg:w-auto" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col max-w-[113px]'>
                        <a href="/" className='text-lg lg:text-[22px] lg:leading-10 text-[#EEF5FD]'>Home</a>
                        <a href="/" className='text-lg lg:text-[22px] lg:leading-10 text-[#EEF5FD]'>About Us</a>
                        <a href="/" className='text-lg lg:text-[22px] lg:leading-10 text-[#EEF5FD]'>Pricing</a>
                        <a href="/" className='text-lg lg:text-[22px] lg:leading-10 text-[#EEF5FD]'>Contact</a>
                    </div>
                    <div className='max-w-[507px]'>
                        <h3 className='text-2xl lg:text-[30px] lg:leading-[42px] text-[#EEF5FD]'>Get Updates Earlier</h3>
                        <p className='text-base lg:text-[20px] lg:leading-[30px] text-[#EEF5FD] mt-3 lg:mt-5'>Stay Updated with the Latest in Intraintel. Subscribe to our newsletter for insights, updates, and exclusive offers delivered straight to your inbox</p>
                        <form className='mt-[26px]'>
                            <div className="flex pl-4 bg-[#EEF5FD] rounded-xl">
                                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-transparent focus:outline-none" />
                                <Button onClick={handleSubmit}> Subscribe </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='flex justify-center bg-[#3898EC] px-[30px] capitalize'>
                <div className='flex flex-wrap justify-between gap-5 py-[10px] border-t border-[#EEF5FD] w-full max-w-[1560px]'>
                    <p className='text-base lg:text-xl text-[#EEF5FD]'>Powered by the IntraIntel.ai</p>
                    <div className='flex gap-8'>
                        <Link to="/privacypolicy" className='text-base lg:text-lg text-[#EEF5FD]' >Privacy Policy</Link>
                        <Link to="/termsconditions" className='text-base lg:text-lg text-[#EEF5FD]' >Terms & conditions</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
