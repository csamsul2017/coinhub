import React from 'react';
import CryptoNewsCard from './CryptoNewsCard';
import { usdcCyrptoNews, bankCryptoNews, timeCryptoNews } from '../assets/home/index';

const newsList = [
  {
    img: usdcCyrptoNews,
    title: 'USDC: This digital dollar for the global crypto economy',
    content: 'Coinhub believes crypto will be part of the solution for creating an open financial system that is both more efficient and more equitable. We co-founded the Centre...',
  },
  {
    img: bankCryptoNews,
    title: 'Can crypto really replace your bank account',
    content: 'If you’re a big enough fan of crypto, you’ve probably heard the phrase “be your own bank” or the term “bankless” — the idea being that crypto can offer more...',
  },
  {
    img: timeCryptoNews,
    title: 'When is the best time to invest in crypto?',
    content: 'Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause uncertainty, fear of...',
  },
];

const CryptoNews = () => {
  return (
    <div className="flex flex-col gap-8 bg-surface px-4 py-16 lg:px-48">
      <div className="flex flex-col gap-4 md:gap-12 md:flex-row">
        <h2 className="text-5xl md:flex-1">New to crypto? Learn some crypto basics</h2>

        <div className="flex flex-col md:flex gap-4 md:gap-4 md:flex-1">
          <p className="text-gray-600 text-xl">Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between</p>
          <button className="bg-black text-white w-fit p-4 px-8 rounded-full font-bold h-fit">Read More</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {newsList.map((news, i) => (
          <CryptoNewsCard img={news.img} title={news.title} content={news.content} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CryptoNews;
