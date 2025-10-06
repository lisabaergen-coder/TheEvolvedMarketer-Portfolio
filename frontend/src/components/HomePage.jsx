import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import InsightBanner from './InsightBanner';
import ByTheNumbers from './ByTheNumbers';
import AboutLisa from './AboutLisa';
import WhyFractional from './WhyFractional';
import ServicesPreview from './ServicesPreview';
import SignaturePhilosophy from './SignaturePhilosophy';
import Approach from './Approach';
import CaseStudiesPreview from './CaseStudiesPreview';
import AwardsRecognition from './AwardsRecognition';
import Testimonials from './Testimonials';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="light-container">
      <Header />
      <HeroSection />
      <InsightBanner />
      <ByTheNumbers />
      <AboutLisa />
      <WhyFractional />
      <ServicesPreview />
      <SignaturePhilosophy />
      <Approach />
      <CaseStudiesPreview />
      <AwardsRecognition />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default HomePage;