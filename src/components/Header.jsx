import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Menu from '../assets/images/Header/Menu.png';
import Close from '../assets/images/Header/Close.png';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

    // Toggle menu visibility
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const closeMenu = () => {
        setMenuVisible(false);
    }

    const handleLinkClick = (link) => {
        setActiveLink(link); 
        closeMenu();
    };

    return (
        <>
            <div className='flex justify-center px-[30px]'>
                <div className='hidden lg:flex justify-between items-center gap-5 max-w-[1560px] w-full mt-10'>
                    <Link to="/" onClick={() => handleLinkClick('home')}> <img className='w-[300px] xl:w-auto' src={Logo} alt="" /> </Link>
                    <div className='flex gap-4 xl:gap-8'>
                        <div className='flex items-center gap-7 xl:gap-12'>
                            <Link to="/" className={`text-[20px] leading-[30px] hover:text-[#0068E5] ${activeLink === 'home' ? 'text-[#0068E5] font-bold' : 'text-[#020F20]'}`} onClick={() => handleLinkClick('home')}>Home</Link>
                            <Link to="/about" className={`text-[20px] leading-[30px] hover:text-[#0068E5] ${activeLink === 'about' ? 'text-[#0068E5] font-bold' : 'text-[#020F20]'}`} onClick={() => handleLinkClick('about')}>About Us</Link>
                            <Link to="/pricing" className={`text-[20px] leading-[30px] hover:text-[#0068E5] ${activeLink === 'pricing' ? 'text-[#0068E5] font-bold' : 'text-[#020F20]'}`} onClick={() => handleLinkClick('pricing')}>Pricing</Link>
                            <Link to="/contactus" className={`text-[20px] leading-[30px] hover:text-[#0068E5] ${activeLink === 'contactus' ? 'text-[#0068E5] font-bold' : 'text-[#020F20]'}`} onClick={() => handleLinkClick('contactus')}>Contact Us</Link>
                            <Link to="/login" className='text-[20px] leading-[30px] text-[#020F20] hover:text-[#0068E5] pr-4 xl:pr-8 border-r border-[#0068E5]' onClick={() => handleLinkClick('home')}>Login</Link>
                        </div>
                        <Link to="/signup"><Button className="px-4">Sign Up</Button></Link>
                    </div>
                </div>
            </div>

            <div className='lg:hidden block w-full'>
                <div className='flex items-center gap-6 p-5'>
                    <img src={Menu} alt="" onClick={toggleMenu} />
                    <Link to="/" onClick={() => handleLinkClick('home')}><img className='w-[150px] xl:w-auto' src={Logo} alt="" /></Link>
                </div>
                {menuVisible && (
                    <div className='fixed inset-0 bg-[#000000B8] z-50'>
                        <div className='flex flex-col p-5 absolute top-0 bg-[#EEF5FD] max-w-[200px] w-full h-full'>
                            <div>
                                <img className='w-[150px] xl:w-auto' src={Logo} alt="" />
                                <Link to="/" onClick={() => handleLinkClick('home')}> <img className='absolute top-5 left-[210px]' src={Close} alt="" onClick={closeMenu} /></Link>
                            </div>
                            <div className='flex flex-col flex-grow gap-[25px] py-10'>
                                <Link to="/" className='text-sm text-[#020F20] hover:font-bold hover:text-[#0068E5]' onClick={() => handleLinkClick('home')}>Home</Link>
                                <Link to="/about" className='text-sm text-[#020F20] hover:font-bold hover:text-[#0068E5]' onClick={() => handleLinkClick('about')}>About Us</Link>
                                <Link to="/pricing" className='text-sm text-[#020F20] hover:font-bold hover:text-[#0068E5]' onClick={() => handleLinkClick('pricing')}>Pricing</Link>
                                <Link to="/contactus" className='text-sm text-[#020F20] hover:font-bold hover:text-[#0068E5]' onClick={() => handleLinkClick('contactus')}>Contact Us</Link>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <a href="/" className='text-sm text-[#0068E5] text-center p-2 w-full rounded-md border border-[#0068E5]'>Login</a>
                                <a href="/" className="text-sm text-[#EEF5FD] text-center p-2 w-full rounded-md bg-[#0068E5] ">Sign Up</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>

    );
}

export default Header;
