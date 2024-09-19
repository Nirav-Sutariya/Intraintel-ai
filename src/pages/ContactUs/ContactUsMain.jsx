import React from 'react';
import Hero from './Hero';
import GetInTouch from './GetInTouch';

const ContactUsMain = () => {
    return (
        <div>
              <div className='flex justify-center px-[30px]'>
                <div className='max-w-[1560px]'>
                    <Hero />
                    <GetInTouch />
                </div>
            </div>
        </div>
    );
}

export default ContactUsMain;
