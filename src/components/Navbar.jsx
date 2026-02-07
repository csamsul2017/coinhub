import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="relative flex flex-col">
      <div className="flex gap-4 h-16 px-4 justify-between fixed w-full z-[90] shadow-sm bg-white lg:px-8">
        <div className="flex py-2 shrink-0">
          <img src={coinbaseLogo} className="object-contain w-full h-full " alt="Coinhub Logo" />
        </div>

        <div className="hidden lg:flex flex-[2] items-center gap-6 font-bold">
          {navlinks.map((navlink, i) => (
            <a href={navlink.link} key={i} className="px-4 py-2 rounded-full hover:bg-state">
              {navlink.name}
            </a>
          ))}
        </div>

        <div className="flex justify-end gap-2 flex-[2]">
          <div className="flex items-center justify-center">
            <button className="p-4 rounded-full bg-surface hover:bg-gray-200">
              <FaSearch />
            </button>
          </div>

          <div className="items-center justify-center hidden md:flex">
            <button className="p-4 rounded-full bg-surface hover:bg-gray-200">
              <FaGlobeAmericas />
            </button>
          </div>

          <div className="items-center hidden md:flex">
            <Link to="/signin" className="px-8 py-2 font-bold bg-surface rounded-3xl whitespace-nowrap hover:bg-gray-200">
              Sign in
            </Link>
          </div>

          <div className="flex items-center">
            <Link to="/signup" className="px-8 py-2 font-bold text-white bg-primary rounded-3xl whitespace-nowrap hover:bg-primary/90">
              Sign up
            </Link>
          </div>

          <div className="flex items-center justify-center lg:hidden">
            <button className="p-4 rounded-full bg-surface" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className={`flex-1 flex flex-col py-8 pt-24 justify-between w-full h-screen fixed bg-white z-[80] ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col gap-4">
          {navlinks.map((navlink, i) => (
            <a href={navlink} key={i} className="flex items-center justify-between px-4 py-2 text-2xl rounded-full hover:bg-state">
              <span>{navlink.name}</span>
              <span>
                <FaChevronRight size={16} />
              </span>
            </a>
          ))}
        </div>

        <div className="flex gap-4 px-4">
          <div className="items-center justify-center">
            <button className="p-3 rounded-full bg-surface hover:bg-gray-200">
              <FaGlobeAmericas />
            </button>
          </div>

          <div className="items-center md:flex">
            <button className="px-8 py-2 font-bold bg-surface rounded-3xl whitespace-nowrap hover:bg-gray-200">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
