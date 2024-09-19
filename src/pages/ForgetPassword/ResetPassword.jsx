import React from 'react';
import Logo from '../../assets/logo.svg';
import SignupImg from '../../assets/images/Signup.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div>
            <div className='flex justify-center pt-10 lg:pt-20 px-[30px]'>
                <div className='max-w-[1560px] w-full'>
                    <img src={Logo} alt="" />
                    <div className='flex flex-wrap items-center justify-between md:flex-nowrap gap-5 mt-10 lg:mt-[87px] lg:ml-[85px]'>
                        <div className='max-w-[600px] w-full order-2 md:order-1'>
                            <h6 className='text-2xl lg:text-[40px] lg:leading-[50px] font-extrabold text-[#0068E5] text-center '>Get Started</h6>
                            <p className='text-lg lg:text-2xl text-[#020F20] text-center '>With IntraIntel.AI</p>
                            <label htmlFor="firstName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5] mt-2 lg:mt-5"> Password
                                <input type="text" id="firstName" name="firstName" required placeholder='Create a new password' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            </label>
                            <label htmlFor="firstName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5] mt-2 lg:mt-5"> Confirm Password
                                <input type="text" id="firstName" name="firstName" required placeholder='Re-enter your new password' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            </label>

                            <div className='flex justify-center mt-5 lg:mt-10'>
                                <Button>Continue</Button>
                            </div>
                        </div>
                        <div className='max-w-[617px] w-full order-1 md:order-2'>
                            <img src={SignupImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-[30px] mt-24'>
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

export default ResetPassword;
