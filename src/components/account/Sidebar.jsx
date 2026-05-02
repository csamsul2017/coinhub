import React from 'react';
import { FaUserCircle, FaShieldAlt, FaChartBar, FaRegFileAlt, FaTimes } from 'react-icons/fa';
import IconCoinhub from '../IconCoinhub';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const icons = [
  { label: 'Profile', icon: FaUserCircle, path: '/profile', isDisable: false },
  { label: 'Security', icon: FaShieldAlt, path: 'security', isDisable: false },
  { label: 'Activity', icon: FaChartBar, path: 'activity', isDisable: true },
  { label: 'Statements', icon: FaRegFileAlt, path: 'statements', isDisable: true },
];

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState('Profile');

  return (
    <div className="fixed flex-col hidden w-fit h-screen gap-5 py-4 px-5 z-[60] border bg-white md:flex">
      <div className="flex items-center justify-center gap-2 p-4 lg:justify-start">
        <IconCoinhub />
        <span className="hidden text-xl font-semibold lg:flex">ACCOUNT</span>
      </div>

      {icons.map(Icon => (
        <Link
          to={Icon.path}
          key={Icon.label}
          className={`p-4 rounded-full transition-colors duration-200 active:bg-surface flex items-center md:justify-center lg:justify-start gap-4 font-semibold text-2xl hover:bg-blue-100 ${activeIcon === Icon.label ? 'bg-blue-50 text-primary' : ''} ${Icon.isDisable ? 'pointer-events-none opacity-50' : ''}`}
          onClick={() => setActiveIcon(Icon.label)}
        >
          <Icon.icon />
          <span className="hidden text-lg lg:flex">{Icon.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
