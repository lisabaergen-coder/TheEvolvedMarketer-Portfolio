import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { mockData } from '../mockData';

const HeroSection = () => {
  const { hero } = mockData;

  return (
    <section className="pt-20 section-padding section-white relative overflow-hidden">
      {/* Animated Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-10"
        >
          <source src="https://customer-assets.emergentagent.com/job_mktg-portfolio-4/artifacts/vyyuthgb_Image-to-Image-27e24625.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      {/* Thin burgundy accent lines in corner */}
      <div className="absolute top-20 right-8 w-16 h-16 border-r-2 border-t-2 border-brand-primary opacity-30 z-10"></div>
      
      <div className="light-content-container relative z-20">
        <div className="grid-2">
          {/* Left: Content */}
          <div className="fade-in">
            <h1 className="display-huge mb-8 text-gray-900 leading-tight">
              {hero.headline}
            </h1>
            
            <p className="body-large mb-10 text-gray-700 leading-relaxed text-left">
              {hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary">
                {hero.ctaPrimary}
              </button>
              <button className="btn-secondary">
                <Download size={20} />
                {hero.ctaSecondary}
              </button>
            </div>

            {/* Tagline */}
            <div className="bg-brand-off-white p-6 rounded-lg border-l-4 border-brand-primary">
              <p className="text-brand-primary font-medium text-lg">
                Building Predictable Growth.
              </p>
            </div>
          </div>

          {/* Right: Professional Portrait */}
          <div className="fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <img
                    src={hero.headshot}
                    alt="Lisa Baergen - The Evolved Marketer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Optional marketing overlay - very subtle */}
              <div className="absolute inset-0 rounded-2xl opacity-5 bg-gradient-to-br from-brand-primary/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;