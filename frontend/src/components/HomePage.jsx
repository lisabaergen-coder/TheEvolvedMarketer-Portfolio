import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import MethodologySection from './MethodologySection';
import AwardsSection from './AwardsSection';
import ServicesSection from './ServicesSection';
import CaseStudiesSection from './CaseStudiesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="light-container">
      <Header />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <AwardsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;