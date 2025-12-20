import React from 'react';
import { coinbaseLogo } from '../assets/home';
import { FaSearch, FaBars, FaGlobeAmericas, FaTimes, FaChevronRight } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navlinks = [
    { name: 'Cryptocurrencies', link: '#' },
    { name: 'Individuals', link: '#' },
    { name: 'Businesses', link: '#' },
    { name: 'Institutions', link: '#' },
    { name: 'Developers', link: '#' },
    { name: 'Company', link: '#' },
  ];

  return (
    <div className="flex flex-col relative">
      <div className="flex gap-4 h-16 px-4 justify-between fixed w-full z-[90] shadow-sm bg-white">
        <div className="flex">
          <img src={coinbaseLogo} className="w-8 shrink-0" alt="Coinbase Logo" />
        </div>

        <div className="hidden lg:flex flex-[2] items-center gap-6 font-bold">
          {navlinks.map((navlink, i) => (
            <a href={navlink.link} key={i} className=" px-4 py-2 rounded-full hover:bg-state">
              {navlink.name}
            </a>
          ))}
        </div>

        <div className="flex justify-end gap-2 flex-[2]">
          <div className="flex justify-center items-center">
            <button className="bg-surface p-4 rounded-full hover:bg-gray-200">
              <FaSearch />
            </button>
          </div>

          <div className="justify-center items-center hidden md:flex">
            <button className="bg-surface p-4 rounded-full hover:bg-gray-200">
              <FaGlobeAmericas />
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <button className="font-bold bg-surface rounded-3xl py-2 px-8 whitespace-nowrap hover:bg-gray-200">Sign in</button>
          </div>

          <div className="flex items-center">
            <button className="font-bold bg-primary text-white rounded-3xl py-2 px-8 whitespace-nowrap">Sign up</button>
          </div>

          <div className="flex justify-center items-center lg:hidden">
            <button className="bg-surface p-4 rounded-full" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className={`flex-1 flex flex-col py-8 pt-24 justify-between w-full h-screen fixed bg-white z-[80] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col gap-4">
          {navlinks.map((navlink, i) => (
            <a href={navlink} key={i} className="text-2xl px-4 py-2 rounded-full hover:bg-state flex justify-between items-center">
              <span>{navlink.name}</span>
              <span>
                <FaChevronRight size={16} />
              </span>
            </a>
          ))}
        </div>

        <div className="flex px-4 gap-4">
          <div className="justify-center items-center">
            <button className="bg-surface p-3 rounded-full hover:bg-gray-200">
              <FaGlobeAmericas />
            </button>
          </div>

          <div className="md:flex items-center">
            <button className="font-bold bg-surface rounded-3xl py-2 px-8 whitespace-nowrap hover:bg-gray-200">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
