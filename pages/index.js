import React from 'react';
import AboutUs from "../components/AboutUs";
import Features from '../components/Features/Features';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar";
import WhySehatbase from '../components/WhySehatbase';
import HealthBlog from '../components/HealthBlog';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <WhySehatbase />
      <HealthBlog/>
    </>
  );
}
