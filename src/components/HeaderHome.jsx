import React from 'react';
import { coinbaseLogo } from '../assets/home';
import { FaRegCopyright, FaLinkedin, FaInstagram, FaTiktok, FaGlobe } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const footerLinks = [
  {
    title: 'Company',
    links: ['About', 'Careers', 'Affiliates', 'Blog'],
  },
  {
    title: 'Individuals',
    links: ['Buy & sell', 'Earn free crypto', 'Base App', 'Coinhub One'],
  },
  {
    title: 'Developers',
    links: ['Developer Platform', 'Base', 'Server Wallets', 'Embedded Wallets'],
  },
  {
    title: 'Support',
    links: ['Help center', 'Contact us', 'Create account', 'ID verification'],
  },
  {
    title: 'Learn',
    links: ['Explore', 'Market statistics', 'Coinhub Bytes newsletter', 'Crypto basics'],
  },
  {
    title: 'Businesses',
    links: ['Asset Listings', 'Coinhub Business', 'Payments', 'Commerce'],
  },
  {
    title: 'Institutions',
    links: ['Prime', 'Staking', 'Exchange', 'International Exchange'],
  },
  {
    title: 'Asset prices',
    links: ['Bitcoin price', 'Ethereum price', 'Solana price', 'XRP price'],
  },
  {
    title: 'Stock prices',
    links: ['NVIDIA price', 'Apple price', 'Microsoft price', 'Amazon price'],
  },
];

const socialMedaLogos = [<FaSquareXTwitter size={24} />, <FaLinkedin size={24} />, <FaInstagram size={24} />, <FaTiktok size={24} />];

const HeaderHome = () => {
  return (
    <div className="px-6 py-12 bg-surface">
      <div className=" gap-2 grid lg:grid-cols-[1fr_3fr] lg:gap-0">
        <div className="h-16 w-fit">
          <img src={coinbaseLogo} className="h-full w-full object-cover" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h3 className="font-bold">{footerLink.title}</h3>
              <ul className="text-muted text-sm">
                <li className="flex flex-col gap-2">
                  {footerLink.links.map((link, i) => (
                    <a href="#" key={i}>
                      {link}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="my-4 flex flex-col gap-6">
        <div className="flex gap-12 border-b border-gray-300 py-4">
          {socialMedaLogos.map((logo, i) => (
            <div key={i}>{logo}</div>
          ))}
        </div>

        <div className="flex flex-col gap-2 md:flex-row">
          <p className="flex gap-2 items-center ">
            <FaRegCopyright /> 2026 Coinhub
          </p>
          <div className="flex flex-col gap-2 text-muted md:flex-row lg:justify-between flex-1">
            <div className="flex flex-col gap-2 md:flex-row">
              <p>Privacy</p>
              <p>Terms & Conditions </p>
            </div>
            <p className="flex gap-2 items-center">
              <FaGlobe /> Global • English
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
