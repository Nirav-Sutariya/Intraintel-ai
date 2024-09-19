import React from 'react';
import Logo from '../../assets/logo.svg';
import LoginImg from '../../assets/images/Login.png';
import Google from '../../assets/icons/GoogleLogin.png';
import Facbook from '../../assets/icons/FacbookLogin.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='flex justify-center pt-10 lg:pt-20 px-[30px]'>
                <div className='max-w-[1560px] w-full'>
                    <img src={Logo} alt="" />
                    <div className='flex flex-wrap md:flex-nowrap justify-between gap-5 mt-10 lg:mt-[60px] lg:ml-[85px]'>
                        <div className='max-w-[600px] w-full order-2 md:order-1'>
                            <h6 className='text-2xl lg:text-[40px] lg:leading-[50px] font-extrabold text-[#0068E5] text-center '>Welcome back</h6>
                            <p className='text-lg lg:text-2xl text-[#020F20] text-center'>Login  your account</p>
                            <label htmlFor="firstName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5] mt-4 lg:mt-10"> Email
                                <input type="text" id="firstName" name="firstName" required placeholder='Enter your email' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            </label>
                            <label htmlFor="firstName" className="block text-lg lg:text-[22px] lg:leading-[32px] text-[#0068E5] mt-3 lg:mt-5"> Password
                                <input type="text" id="firstName" name="firstName" required placeholder='Enter your password' className="block text-base lg:text-[18px] lg:leading-[26px] w-full px-3 lg:px-[18px] py-2 lg:py-3 mt-1 lg:mt-[10px] border border-[#0068E5] rounded-xl bg-transparent focus:outline-none" />
                            </label>
                            <div className='flex justify-end'>
                                <Link to="/resetpassword" className='text-base lg:text-lg text-[#0068E5] text-end mt-3'>Lost Password?</Link>
                            </div>
                            <label className='text-sm lg:text-lg text-[#0068E5] flex items-center gap-2 mt-2 lg:mt-4'>
                                <input type='checkbox' className='w-3 lg:w-[18px] h-3 lg:h-[18px]' /> I agree to procced with my personal data
                            </label>
                            <div className='flex justify-center mt-5 lg:mt-10'>
                                <Button>Sign In</Button>
                            </div>
                            <div className="flex items-center gap-5 my-3 lg:my-6">
                                <hr className="flex-grow border-t border-[#BBBBBB]" />
                                <p className='text-sm lg:text-lg text-[#020F20] text-center my-3 lg:my-5'>Or Continue With</p>
                                <hr className="flex-grow border-t border-[#BBBBBB]" />
                            </div>
                            <div className='flex justify-center gap-5'>
                                <img src={Google} alt=""/>
                                <img src={Facbook} alt=""/>
                            </div>
                            <p className='text-sm lg:text-lg font-semibold text-center mt-4 lg:mt-10'>Don’t have an account? <Link to="/signup" className='text-[#0068E5]'>Sign Up</Link></p>
                        </div>
                        <div className='max-w-[617px] w-full order-1 md:order-2'>
                            <img src={LoginImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-[30px] mt-7'>
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
        </>
    );
}

export default Login;
