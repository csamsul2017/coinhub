import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import ExploreTokens from '../components/ExploreTokens';
import Benefits from '../components/Benefits';
import CryptoNews from '../components/CryptoNews';
import CTASection from '../components/CTASection';
import HeaderHome from '../components/HeaderHome';

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Feature />
      <ExploreTokens />
      <Benefits />
      <CryptoNews />
      <CTASection />
      <HeaderHome />
    </>
  );
};

export default Home;
