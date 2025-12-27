import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import ExploreTokens from '../components/ExploreTokens';

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Feature />
      <ExploreTokens />+
    </>
  );
};

export default Home;
