import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/About/AboutHero';
import CareerStory from '../components/About/CareerStory';
import ImpactHighlights from '../components/About/ImpactHighlights';
import LeadershipPhilosophy from '../components/About/LeadershipPhilosophy';
import AboutAwards from '../components/About/AboutAwards';
import AboutTestimonials from '../components/About/AboutTestimonials';
import AboutFinalCTA from '../components/About/AboutFinalCTA';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="light-container">
      <Header />
      <AboutHero />
      <CareerStory />
      <ImpactHighlights />
      <LeadershipPhilosophy />
      <AboutAwards />
      <AboutTestimonials />
      <AboutFinalCTA />
      <Footer />
    </div>
  );
};

export default AboutPage;