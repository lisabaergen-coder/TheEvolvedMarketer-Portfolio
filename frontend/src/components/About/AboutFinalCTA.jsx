import React from 'react';
import { aboutData } from '../../mockData/aboutData';

const AboutFinalCTA = () => {
  const { finalCTA } = aboutData;

  return (
    <section className="section-padding section-burgundy">
      <div className="light-content-container">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="display-large mb-8 text-white">
            {finalCTA.headline}
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            {finalCTA.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="btn-primary bg-white text-brand-primary hover:bg-gray-100 px-8 py-4 text-lg">
              {finalCTA.ctaPrimary}
            </button>
            <button className="btn-secondary border-white text-white hover:bg-white hover:text-brand-primary px-8 py-4 text-lg">
              {finalCTA.ctaSecondary}
            </button>
          </div>

          {/* Footer Tagline */}
          <div className="text-center">
            <p className="text-2xl font-light text-white/80">
              {finalCTA.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFinalCTA;