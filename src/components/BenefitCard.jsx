import React from 'react';
import { coinbaseLogo } from '../assets/home';

const BenefitCard = ({ title, text, btn, order = 1, subBtn }) => {
  const orderClass = order === 2 ? 'md:order-2' : 'md:order-1';

  return (
    <div className="flex lg:justify-center">
      <div className="px-4 py-12 flex flex-col gap-8 md:flex-row md:items-center lg:max-w-6xl lg:gap-16">
        <div className={`rounded-3xl overflow-hidden shadow-md flex justify-center h-72 bg-surface md:flex-1 ${orderClass}`}>
          <img src="https://placehold.co/800x400?text=Under+Maintenance" className="w-full h-full object-cover" alt="Advanced Benefits" />
        </div>
        <div className="flex flex-col gap-4 md:flex-1 md:order-1">
          {subBtn && (
            <span>
              <button className="flex border border-gray-200 rounded-2xl px-4 py-2 items-center gap-2">
                <div className="w-4 h-4 flex-shrink-0">
                  <img src={coinbaseLogo} className="w-full h-full brightness-0" alt="Coinhub Logo" />
                </div>
                <p className="text-muted">{subBtn}</p>
              </button>
            </span>
          )}

          <h2 className="text-4xl">{title}</h2>
          <p className="text-muted">{text}</p>
          <button className="bg-[#0A0B0D] text-white w-fit px-8 py-4 rounded-full font-bold">{btn}</button>
        </div>
      </div>
    </div>
  );
};

export default BenefitCard;
