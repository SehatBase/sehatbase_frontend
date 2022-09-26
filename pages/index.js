import React from 'react';
import AboutUs from "../components/AboutUs";
import Features from '../components/Features/Features';
import HeroSection from '../components/HeroSection';
import Newsletter from '../components/Modal/Newsletter';
import Navbar from "../components/Navbar";
import NewsLetterMain from '../components/NewsLetterMain';
import WhySehatbase from '../components/WhySehatbase';
import Faq from '../comps/Faq';
import ContactUs from '../components/ContactUs';


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Faq/>
      <ContactUs/>
      <Newsletter />
      <NewsLetterMain/>
    </>
  );
}
