import React from 'react';
import BenefitCard from './BenefitCard';
import { advanced, baseApp, zeroTradeFees } from '../assets/home/index';

const benefitsList = [
  {
    img: advanced,
    title: 'Powerful tools, designed for the advanced trader',
    text: 'Powerful analytical tools with the safety and security of Coinhub deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.',
    btn: 'Start trading',
  },
  {
    img: baseApp,
    title: 'Zero trading fees, more rewards.',
    text: 'Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.',
    btn: 'Claim free trial',
    order: 2,
    subBtn: 'COINHUB ONE',
  },
  {
    img: zeroTradeFees,
    title: 'Countless ways to earn crypto with the Base App.',
    text: 'An everything app to trade, create, discover, and chat, all in one place.',
    btn: 'Learn more',
    subBtn: 'BASE APP',
  },
];

const Benefits = () => {
  return (
    <>
      {benefitsList.map((benefit, i) => (
        <BenefitCard img={benefit.img} title={benefit.title} text={benefit.text} btn={benefit.btn} order={benefit.order} subBtn={benefit.subBtn} key={i} />
      ))}
    </>
  );
};

export default Benefits;
