import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import Features from '../components/Features/Features';
import WhySehatbase from '../components/WhySehatbase';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <WhySehatbase />
    </>
  );
}
