import React, { useEffect, useRef, useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import IconCoinhub from '../IconCoinhub';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShieldAlt, FaChartBar, FaRegFileAlt, FaTimes, FaLongArrowAltLeft } from 'react-icons/fa';
import SignOut from '../SignOut';
import UserMenu from './UserMenu';
import ProfileTabs from './ProfileTabs';
import NavAccount from './NavAccount';

const navList = [
  { icon: <FaUserCircle />, title: 'Profile', navigate: 'profile' },
  { icon: <FaShieldAlt />, title: 'Security', navigate: 'security' },
  { icon: <FaChartBar />, title: 'Activity', navigate: 'activity' },
  { icon: <FaRegFileAlt />, title: 'Statements', navigate: 'statements' },
];

const ProfileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopover, setIsPopover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="border">
      <div className="fixed z-50 flex flex-col justify-center w-full h-20 px-4 bg-white border ">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className="flex items-center gap-4 md:hidden">
              <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
              <IconCoinhub />
            </div>

            {/* <p className="text-3xl font-bold sm:hidden md:flex">Profile</p> */}
          </div>

          <UserMenu isPopover={isPopover} setIsPopover={setIsPopover} />
        </div>

        {/* <nav className={`fixed inset-x-0 ${isMenuOpen ? 'inset-y-0' : 'top-full'} w-full h-screen py-4 bg-white border transition-all duration-200 ease-in-out`}>
          <header className="flex justify-between px-8 py-4 mb-8 border-b">
            <IconCoinhub />
            <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface/50 active:bg-surface" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FaTimes size={20} />
            </button>
          </header>
          {navList.map((nav, i) => (
            <Link key={i} to={nav.navigate} className="flex items-center w-56 gap-4 px-8 py-4 font-bold rounded-full hover:bg-primary/5 hover:text-primary active:bg-primary/10">
              {nav.icon} <span>{nav.title}</span>
            </Link>
          ))}
        </nav> */}

        {/* <NavAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} className={' border'} /> */}

        {isPopover && (
          <div className="fixed inset-0 flex flex-col gap-1 bg-white border">
            <div className="flex items-center justify-end px-6 py-6">
              <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface/50 active:bg-surface" onClick={() => setIsPopover(!isPopover)}>
                <FaTimes size={20} />
              </button>
            </div>

            <Link className="flex gap-4 p-4 border hover:bg-surface/50 active:bg-surface">
              <div className="bg-[#007BB3] relative w-8 h-8 rounded-full flex items-center justify-center text-white">S</div>

              <div className="flex flex-col">
                <p className="font-bold leading-none">Samsul Dev</p>
                <span className="text-sm">admin@samsul.dev</span>
                <span className="font-bold text-primary">Manage account</span>
              </div>
            </Link>

            <button className="flex items-center gap-6 px-2 py-4 mx-4 font-bold text-red-600 rounded-xl hover:bg-surface/50 active:bg-surface">
              <FaLongArrowAltLeft /> <span>Sign out</span>
            </button>
          </div>
        )}

        {/* <ProfileTabs /> */}
      </div>
    </div>
  );
};

export default ProfileHeader;
