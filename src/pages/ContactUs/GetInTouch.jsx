import React, { useState } from 'react';
import Button from '../../components/Button';
import Map from '../../assets/images/Home/Map.png';
import Phone from '../../assets/images/Home/Phone.png';
import Email from '../../assets/images/Home/Email.png';

const GetInTouch = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission (you can modify this to suit your needs)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here (e.g., API call)
    };


    return (
        <>
            <div className='flex flex-wrap lg:flex-nowrap justify-between gap-5 rounded-xl shadow-[0px_7px_29px_0px_#64646F33] p-5 mb-[50px] lg:mb-[70px] xl:mb-[120px] capitalize'>
                <div className='sm:p-10 w-full'>
                    <h3 className='text-xl lg:text-[32px] lg:leading-[42px] font-semibold text-[#020F20] mb-4 lg:mb-[30px]'>We are here to help you!</h3>

                    <form onSubmit={handleSubmit} >
                        <div className='grid sm:grid-cols-2 gap-5'>
                            <label htmlFor="firstName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> First Name
                                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder='Enter your name' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            </label>
                            <label htmlFor="lastName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> Last Name
                                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder='Enter your surname' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            </label>
                            <label htmlFor="email" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> Email
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Enter your email' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            </label>
                            <label htmlFor="phone" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5]"> Phone Number
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder='Enter your contact number' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] bg-transparent rounded-xl focus:outline-none" />
                            </label>
                        </div>
                        <label htmlFor="message" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5] mt-5"> Message
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="2" placeholder='Let us know how we can assist you' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                        </label>
                        <div className='flex justify-center mt-4 lg:mt-[30px]'>
                            <Button type="submit" className="py-2 px-[30px] text-white hover:bg-[#0068E5]">Submit </Button>
                        </div>
                    </form>
                </div>
                <div className='p-5 lg:p-10 bg-[#3898EC] rounded-xl lg:max-w-[487px] max-w-none w-full'>
                    <h3 className='text-xl lg:text-[32px] lg:leading-[42px] text-[#EEF5FD]'>Our Details</h3>
                    <div className='flex items-center gap-5 lg:gap-11 mt-5 sm:mt-[59px] px-[13px]'>
                        <img className='w-6 sm:w-auto' src={Map} alt="Map Icon" />
                        <div>
                            <p className='text-base lg:text-[22px] lg:leading-[32px] text-white'>Location</p>
                            <p className='text-sm lg:text-lg text-white'>Lorem Ipsum is simply dummy text</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 lg:gap-11 mt-9 sm:mt-[67px] px-[13px]'>
                        <img className='w-6 sm:w-auto' src={Phone} alt="Map Icon" />
                        <div>
                            <p className='text-base lg:text-[22px] lg:leading-[32px] text-white'>Phone</p>
                            <p className='text-sm lg:text-lg text-white'>+1 234 567 890</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 lg:gap-11 mt-9 sm:mt-[67px] px-[13px]'>
                        <img className='w-6 sm:w-auto' src={Email} alt="Map Icon" />
                        <div>
                            <p className='text-base lg:text-[22px] lg:leading-[32px] text-white'>Email</p>
                            <p className='text-sm lg:text-lg text-white'>Inraintel@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GetInTouch;
