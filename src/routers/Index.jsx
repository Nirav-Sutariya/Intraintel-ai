import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeMain from '../pages/Home/HomeMain';
import AboutMain from '../pages/About/AboutMain';
import PricingMain from '../pages/Pricing/PricingMain';
import ContactUsMain from '../pages/ContactUs/ContactUsMain';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions';
import Login from '../pages/Login/Login';
import Signup from '../pages/Signup/Signup';
import ResetPassword from '../pages/ForgetPassword/ResetPassword';
import ForgetPasswordViaEmail from '../pages/ForgetPassword/ForgetPasswordViaEmail';
import GoToTop from '../components/GoToTop';


const Layout = ({ children }) => {
    const location = useLocation();

    // Hide Header and Footer for specific routes like "/login"
    const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/resetpassword' || location.pathname === '/ForgetPasswordViaEmail';

    return (
        <>
            {!hideHeaderFooter && <Header />}
            {children}
            {!hideHeaderFooter && <Footer />}
        </>
    );
};

const Index = () => {

    return (
        <div>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomeMain />} />
                        <Route path="/about" element={<AboutMain />} />
                        <Route path="/pricing" element={<PricingMain />} />
                        <Route path="/contactus" element={<ContactUsMain />} />
                        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                        <Route path="/termsconditions" element={<TermsConditions />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/resetpassword" element={<ResetPassword />} />
                        <Route path="/ForgetPasswordViaEmail" element={<ForgetPasswordViaEmail />} />
                    </Routes>
                <GoToTop />
                </Layout>
            </Router>
        </div>
    );
}

export default Index;
