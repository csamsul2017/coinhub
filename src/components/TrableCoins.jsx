import React from 'react';
import { useState, useEffect } from 'react';
import { bnbCoin, btcCoin, ethCoin, usdcCoin, usdtCoin, xrpCoin } from '../assets/home/index';
import { GoArrowUpRight, GoArrowDownLeft } from 'react-icons/go';
import SlotCounter from 'react-slot-counter';

const coins = [
  {
    img: btcCoin,
    name: 'BTC',
    idr: 12345678234,
    openPrice: 12345678234,
    gain: 0,
    isUp: true,
  },
  {
    img: ethCoin,
    name: 'ETH',
    idr: 35345345,
    openPrice: 35345345,
    gain: 0,
    isUp: true,
  },
  {
    img: usdtCoin,
    name: 'USDT',
    idr: 354353,
    openPrice: 354353,
    gain: 0,
    isUp: true,
  },
  {
    img: bnbCoin,
    name: 'BNB',
    idr: 46546456,
    openPrice: 46546456,
    gain: 0,
    isUp: true,
  },
  {
    img: xrpCoin,
    name: 'XRP',
    idr: 435435435,
    openPrice: 435435435,
    gain: 0,
    isUp: true,
  },
  {
    img: usdcCoin,
    name: 'USDC',
    idr: 100000,
    openPrice: 100000,
    gain: 0,
    isUp: true,
  },
];

const TrableCoins = () => {
  const [coin, setCoin] = useState(coins);
  useEffect(() => {
    const timer = setInterval(() => {
      setCoin(prevCoins => {
        return prevCoins.map(coin => {
          const updateProbability = Math.random() < 0.3;

          if (!updateProbability) {
            return coin;
          }

          const priceAdjustment = Math.random() > 0.5;
          const priceChanges = Math.floor(Math.random() * 10000);
          let newPrice;

          if (priceAdjustment) {
            newPrice = coin.idr + priceChanges;
          } else {
            newPrice = coin.idr - priceChanges;
          }

          const newGain = ((newPrice - coin.openPrice) / coin.openPrice) * 100;

          return {
            ...coin,
            idr: newPrice,
            gain: newGain.toFixed(2),
            isUp: newGain > 0,
          };
        });
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {coin.map((coinX, i) => (
        <div className="text-white flex gap-4" key={i}>
          <div className="w-8">
            <img src={coinX.img} alt={coinX.name} />
          </div>
          <h3 className="flex-1 text-2xl">{coinX.name}</h3>
          <div className="flex-[2] flex flex-col items-end ">
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
      ))}
    </div>
  );
};

export default TrableCoins;
