import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Saare parts yahi components folder se aayenge
import Hero from './Hero';
import Stats from './Stats';
import GrowthProcess from './GrowthProcess';
import GrowthAnimation from './GrowthAnimation';
import IndiaMap from './IndiaMap';
import GuideTabs from './GuideTabs';

const Home: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Agar koi Link se aaya hai (#services), toh wahan scroll karo
  useEffect(() => {
    if (location.hash === '#services' && servicesRef.current) {
      setTimeout(() => {
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Stats />
      <GrowthProcess />
      <GrowthAnimation />
      <IndiaMap />
      <div ref={servicesRef} id="services">
        <GuideTabs />
      </div>
    </>
  );
};

export default Home;