import React from 'react';
import Navbar from '../components/Navbar';

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
};

export default Home;
