import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = ({ isMenuOpen = false, setIsMenuOpen }) => {
  return (
    <button className="p-2 rounded-full hover:bg-surface/50 active:bg-surface" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
    </button>
  );
};

export default HamburgerMenu;
