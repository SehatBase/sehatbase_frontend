import React from 'react';
import AboutUs from "../components/AboutUs";
import Features from '../components/Features/Features';
import HeroSection from '../components/HeroSection';
import Navbar from "../components/Navbar";
import WhySehatbase from '../components/WhySehatbase';
import Footer from '../components/Footer';
import HealthBlog from '../components/HealthBlog';
import NewsLetterMain from '../components/NewsLetterMain';
import ContactUS from '../components/ContactUs';
import Faq from '../comps/Faq';
import Modal from '../components/Modal/Newsletter'


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <WhySehatbase />
      <HealthBlog />
      <Faq />
      <ContactUS />
      <NewsLetterMain />
      <Footer />
      <Modal />
    </>
  );
}
