import React from 'react';
import { coinbaseLogo } from '../assets/home';
import { FaSearch, FaBars, FaGlobeAmericas, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="flex border border-red-100 gap-4 h-16 px-4 justify-between">
      <div className="flex">
        <img src={coinbaseLogo} className="w-8 shrink-0" alt="Coinbase Logo" />
      </div>

      <div className="hidden lg:flex flex-[2] items-center gap-6 font-bold">
        <a href="#">Cryptocurrencies</a>
        <a href="#">Individuals</a>
        <a href="#">Businesses</a>
        <a href="#">Institutions</a>
        <a href="#">Developers</a>
        <a href="#">Company</a>
      </div>

      <div className="flex justify-end gap-2 flex-[2]">
        <div className="flex justify-center items-center">
          <button className="bg-surface p-4 rounded-full">
            <FaSearch />
          </button>
        </div>

        <div className="justify-center items-center hidden md:flex">
          <button className="bg-surface p-4 rounded-full">
            <FaGlobeAmericas />
          </button>
        </div>

        <div className="hidden md:flex items-center">
          <button className="font-bold bg-surface rounded-3xl py-2 px-8 whitespace-nowrap">Sign in</button>
        </div>

        <div className="flex items-center">
          <button className="font-bold bg-primary text-white rounded-3xl py-2 px-8 whitespace-nowrap">Sign up</button>
        </div>

        <div className="flex justify-center items-center lg:hidden">
          <button className="bg-surface p-4 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
