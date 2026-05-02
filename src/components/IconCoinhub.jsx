import React from 'react';
import { coinbaseLogo } from '../assets/home';
import { Link } from 'react-router-dom';

const IconCoinhub = () => {
  return (
    <Link className="flex h-8 w-fit shrink-0">
      <img src={coinbaseLogo} className="object-contain w-full h-full" alt="Coinhub Logo" />
    </Link>
  );
};

export default IconCoinhub;
