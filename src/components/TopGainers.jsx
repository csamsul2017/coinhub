import React from 'react';
import { mCoin, nightCoin, perpCoin, syrupCoin, thqCoin, zkpCoin } from '../assets/home/index';
import { GoArrowUpRight, GoArrowDownLeft } from 'react-icons/go';
import SlotCounter from 'react-slot-counter';

const coins = [
  {
    img: mCoin,
    name: 'M',
    idr: 12345678,
    openPrice: 12345678,
    gain: 0,
    isUp: true,
  },
  {
    img: nightCoin,
    name: 'NIGHT',
    idr: 34543,
    openPrice: 34543,
    gain: 0,
    isUp: true,
  },
  {
    img: perpCoin,
    name: 'PERP',
    idr: 435435,
    openPrice: 435435,
    gain: 0,
    isUp: true,
  },
  {
    img: syrupCoin,
    name: 'SYRUP',
    idr: 3454546464645465,
    openPrice: 3454546464645465,
    gain: 0,
    isUp: true,
  },
  {
    img: thqCoin,
    name: 'THQ',
    idr: 12345678,
    openPrice: 12345678,
    gain: 0,
    isUp: true,
  },
  {
    img: zkpCoin,
    name: 'ZKP',
    idr: 444445555,
    openPrice: 444445555,
    gain: 0,
    isUp: true,
  },
];

const TopGainers = () => {
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

export default TopGainers;
