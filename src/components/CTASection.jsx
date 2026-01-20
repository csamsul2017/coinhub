import React from 'react';
import { imageControl } from '../assets/home/index';

const CTASection = () => {
  return (
    <div className="px-8 py-12">
      <div className="flex flex-col gap-52">
        <div className="flex flex-col gap-24 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-5xl md:text-7xl">Take control of your money</h2>
            <p className="text-xl">Start your portfolio today and discover crypto</p>
            <div className="flex flex-col gap-4 md:flex-row">
              <input type="text" className="border p-4 rounded-lg border-gray-500 md:w-96 " placeholder="satoshi@nakamoto.com" />
              <button className="bg-primary text-white py-4 px-8 rounded-full font-bold ">Sign up</button>
            </div>
          </div>

          <div className="h-1/2 overflow-hidden flex-1">
            <img src={imageControl} className="w-full h-full object-contain" alt="" />
          </div>
        </div>

        <div className="text-center text-sm flex flex-col gap-4 text-muted lg:px-72">
          <p>DEX trading is offered by Coinhub Bermuda Technologies Ltd.</p>

          <p>
            ¹ Valid for new users who make a cryptocurrency purchase of at least $50 or more on Coinhub. Limited while supplies last or Coinhub revokes this incentive at its sole discretion. Coinhub reserves the right to change the terms,
            for any reason. Void where prohibited or if Coinhub determines that the customer is not eligible. Average reward is approximately $52.
          </p>

          <p>
            Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to
            participate in any investment or trading strategy or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
