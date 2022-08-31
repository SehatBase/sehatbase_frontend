import React from 'react';
import Features from '../components/Features/features';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import WhySehatbase from '../components/WhySehatbase';


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Features/>
    <WhySehatbase/>
    </>
  );
}
