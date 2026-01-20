import React from 'react';
import { GoArrowUpRight, GoArrowDownLeft } from 'react-icons/go';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';
import SlotCounter from 'react-slot-counter';
import TrableCoins from './TrableCoins';
import TopGainers from './TopGainers';
import NewOnCoinbase from './NewOnCoinbase';

const categories = ['Tradable', 'Top gainers', 'New on Coinhub'];
const catagoryContent = {
  Tradable: <TrableCoins />,
  'Top gainers': <TopGainers />,
  'New on Coinhub': <NewOnCoinbase />,
};

const ExploreTokens = () => {
  const [activeCategory, setActiveCategory] = useState('Tradable');
  return (
    <div className="px-4 py-8 bg-surface flex flex-col gap-4 lg:flex-row lg:justify-between lg:px-8 lg:py-24 lg:gap-70">
      <div className="flex flex-col gap-4 lg:justify-center lg:flex-1">
        <h2 className="text-4xl max-w-96 md:max-w-none lg:text-5xl lg:w-[500px]">Explore millions of tokens, all in one place.</h2>
        <p className="text-muted">One trusted account for trading everything</p>
        <button className="w-fit bg-[#0A0B0D] rounded-full py-4 text-white font-bold px-8">See more assets</button>
      </div>

      <div className="bg-[#0A0B0D] text-white rounded-3xl px-8 py-8 flex flex-col gap-8 lg:flex-1">
        <div className="flex gap-8 font-bold overflow-hidden">
          {categories.map((category, i) => (
            <button key={i} onClick={() => setActiveCategory(category)} className={`${activeCategory === category ? 'bg-gray-100/10' : ''} px-4 py-2 rounded-full whitespace-nowrap active:scale-95 transition`}>
              {category}
            </button>
          ))}
        </div>
        {/* {coin.map((coinX, i) => (
          <div className="text-white flex gap-4" key={i}>
            <div className="w-8">
              <img src={coinX.img} alt={coinX.name} />
            </div>
            <h3 className="flex-1 text-2xl">{coinX.name}</h3>
            <div className="flex-[2] flex flex-col items-end ">
              <h4 className="p-0 m-0 leading-none tracking-[0.3em]">IDR {coinX.idr.toLocaleString()}</h4>
              <CountUp className="tracking-[0.3em]" start={0} end={10} duration={1} separator="." decimal="," decimals={0} prefix="IDR " preserveValue={true} useEasing={false} />

              <Odometer
                value={coinX.idr}
                format="(,ddd).dd" // Format: Pake koma pemisah ribuan, dan 2 digit desimal
                duration={1000} // Durasi animasi (ms) - Odometer ngatur ini otomatis biasanya
              />

              <div>
                <span className="mr-2 font-bold tracking-[0.1em]">IDR</span>
                <SlotCounter charClassName="tracking-[0.1em] text-xl font-mono" autoAnimationStart={false} value={coinX.idr.toLocaleString()} />
              </div>

              <div className={`flex p-0 m-0 items-center ${coinX.isUp ? `text-[#27AD75]` : `text-[#F0616D]`}`}>
                {coinX.isUp ? <GoArrowUpRight /> : <GoArrowDownLeft />}

                <p className="leading-none">{coinX.gain} %</p>
              </div>
            </div>
          </div>
        ))} */}
        {/* <TrableCoins /> */}
        {/* <TopGainers /> */}
        {catagoryContent[activeCategory]}
      </div>
    </div>
  );
};

export default ExploreTokens;
