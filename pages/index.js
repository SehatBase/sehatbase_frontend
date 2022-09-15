import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import Features from '../components/Features/Features';
import WhySehatbase from '../components/WhySehatbase';
import HealthBlog from '../components/HealthBlog';


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
