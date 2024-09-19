import React from 'react';
import Hero from './Hero';
import PricingTable from './PricingTable';
import FAQ from '../Home/FAQ';
import RequestADemo from './RequestADemo';

const PricingMain = () => {
    return (
        <div>
            <div className='flex justify-center mb-[50px] lg:mb-[70px] xl:mb-[120px] px-[30px]'>
                <div className='max-w-[1560px]'>
                    <Hero />
                    <PricingTable />
                    <RequestADemo />
                    <FAQ />
                </div>
            </div>
        </div>
    );
}

export default PricingMain;
