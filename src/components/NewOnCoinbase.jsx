import { useState, useEffect } from 'react';
import { bnbCoin, coin2z, asterCoin, jupiterCoin, tonCoin, xplCoin } from '../assets/home/index';
import { GoArrowUpRight, GoArrowDownLeft } from 'react-icons/go';
import SlotCounter from 'react-slot-counter';

const coins = [
  {
    img: bnbCoin,
    name: 'BNB',
    idr: 12345678,
    openPrice: 12345678,
    gain: 0,
    isUp: true,
  },
  {
    img: coin2z,
    name: '2Z',
    idr: 34543,
    openPrice: 34543,
    gain: 0,
    isUp: true,
  },
  {
    img: asterCoin,
    name: 'ASTER',
    idr: 435435,
    openPrice: 435435,
    gain: 0,
    isUp: true,
  },
  {
    img: jupiterCoin,
    name: 'JUPITER',
    idr: 34545464,
    openPrice: 3454546,
    gain: 0,
    isUp: true,
  },
  {
    img: tonCoin,
    name: 'TON',
    idr: 12345678,
    openPrice: 12345678,
    gain: 0,
    isUp: true,
  },
  {
    img: xplCoin,
    name: 'XPL',
    idr: 444445555,
    openPrice: 444445555,
    gain: 0,
    isUp: true,
  },
];

const NewOnCoinbase = () => {
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
    <div className="flex flex-col gap-4">
      {coin.map((coinX, i) => (
        <div className="text-white flex gap-4" key={i}>
          <div className="w-8">
            <img src={coinX.img} className="shrink-0" alt={coinX.name} />
          </div>
          <h3 className="flex-1 text-2xl">{coinX.name}</h3>
          <div className="flex-[2] flex flex-col items-end ">
            <div className="flex">
              <span className="mr-2 font-bold tracking-[0.1em] md:text-2xl">IDR</span>
              <SlotCounter charClassName="tracking-[0.1em] text-xl font-mono leading-none md:text-3xl" autoAnimationStart={false} value={coinX.idr.toLocaleString()} />
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

export default NewOnCoinbase;
