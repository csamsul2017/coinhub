import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
    </>
  );
};

export default Home;
