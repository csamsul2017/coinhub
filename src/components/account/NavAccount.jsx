import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShieldAlt, FaChartBar, FaRegFileAlt, FaTimes } from 'react-icons/fa';
import IconCoinhub from '../IconCoinhub';

const NavAccount = ({ isMenuOpen, setIsMenuOpen, className }) => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navList = [
    { icon: <FaUserCircle />, title: 'Profile', navigate: 'profile' },
    { icon: <FaShieldAlt />, title: 'Security', navigate: 'security' },
    { icon: <FaChartBar />, title: 'Activity', navigate: 'activity' },
    { icon: <FaRegFileAlt />, title: 'Statements', navigate: 'statements' },
  ];

  return (
    <nav className={`fixed inset-x-0 ${isMenuOpen ? 'inset-y-0' : 'top-full'} md:static z-50 md:inset-auto w-full h-screen py-4 bg-white border transition-all duration-200 ease-in-out ${className}`}>
      <header className="flex justify-between px-8 py-4 mb-8 border-b">
        <IconCoinhub />
        <button className="flex items-center justify-center w-8 h-8 rounded-full md:hidden hover:bg-surface/50 active:bg-surface" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaTimes size={20} />
        </button>
      </header>
      {navList.map((nav, i) => (
        <Link key={i} to={nav.navigate} className="flex items-center w-56 gap-4 px-8 py-4 font-bold rounded-full hover:bg-primary/5 hover:text-primary active:bg-primary/10">
          {nav.icon} <span>{nav.title}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavAccount;
