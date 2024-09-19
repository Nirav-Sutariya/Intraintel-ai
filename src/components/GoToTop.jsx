import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GoToTopImg from '../assets/icons/GoToTop.png';

const GoToTop = () => {

    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const hiddenRoutes = ['/login', '/signup', '/resetpassword', '/ForgetPasswordViaEmail'];

    // Show the button when scrolled down by a certain amount
    const toggleVisibility = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Check if the current route is in the hiddenRoutes array
    const shouldHideButton = hiddenRoutes.includes(location.pathname);

    return (
        <div className=''>
            <div className="fixed bottom-4 2xl:bottom-32 right-4 2xl:right-20">
                {!shouldHideButton && isVisible && (
                    <div onClick={scrollToTop} className='py-[17px] px-5 rounded-full bg-[#0068E5] shadow-[0px_5px_15px_0px_#00000059]'>
                        <img src={GoToTopImg} alt="" />
                    </div>
                )}
            </div>
        </div>
    );
}

export default GoToTop;
