import React from 'react';
import Logo from '../../assets/logo.svg';
import ForgetPasswordViaEmailImg from '../../assets/images/ForgetPasswordViaEmail.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ForgetPasswordViaEmail = () => {
    return (
        <div>
            <div className='flex justify-center pt-10 lg:pt-20 px-[30px]'>
                <div className='max-w-[1560px] w-full'>
                    <img src={Logo} alt="" />
                    <div className='flex flex-wrap md:flex-nowrap justify-between items-center gap-5 mt-20 lg:mt-[100px] lg:ml-[85px]'>
                        <div className='max-w-[600px] w-full order-2 md:order-1'>
                            <h6 className='text-2xl lg:text-[40px] lg:leading-[50px] font-extrabold text-[#0068E5] text-center '>Reset Password</h6>
                            <p className='text-lg lg:text-2xl text-[#020F20] text-center'>Please enter your registered email,</p>
                            <p className='text-lg lg:text-2xl text-[#020F20] text-center'>  we will send a link for reset your password on it</p>
                            <label htmlFor="firstName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5] mt-4 lg:mt-10"> Email
                                <input type="text" id="firstName" name="firstName" required placeholder='Enter your registered email' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            </label>
                            <div className='flex justify-center mt-5 lg:mt-10'>
                                <Button>Get Link</Button>
                            </div>
                        </div>
                        <div className='max-w-[617px] w-full order-1 md:order-2'>
                            <img src={ForgetPasswordViaEmailImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-[30px] mt-10 sm:mt-20 lg:mt-[140px]'>
                <div className='flex justify-center border-t border-[#BBBBBB] w-full'>
                    <div className='flex flex-wrap justify-between gap-5 py-[10px]  w-full max-w-[1560px]'>
                        <p className='text-base lg:text-xl text-[#020F20]'>Powered by the IntraIntel.ai</p>
                        <div className='flex gap-8'>
                            <Link to="/privacypolicy" className='text-base lg:text-lg text-[#020F20]' >Privacy Policy</Link>
                            <Link to="/termsconditions" className='text-base lg:text-lg text-[#020F20]' >Terms & conditions</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPasswordViaEmail;
