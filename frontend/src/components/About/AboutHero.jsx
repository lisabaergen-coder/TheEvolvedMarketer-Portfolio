import React from 'react';
import { Download, Calendar } from 'lucide-react';
import { aboutData } from '../../mockData/aboutData';

const AboutHero = () => {
  const { hero } = aboutData;

  return (
    <section className="pt-20 section-padding section-white relative overflow-hidden min-h-screen">
      {/* Professional Hero Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-gray-50 to-white"></div>
      </div>
      
      <div className="light-content-container relative z-20">
        <div className="grid grid-cols-5 gap-12 items-center min-h-[80vh]">
          {/* Left: 60% - Content */}
          <div className="col-span-3 fade-in space-y-8">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="https://customer-assets.emergentagent.com/job_mktg-portfolio-4/artifacts/a2h3wxtx_Logo%20FINAL%20Evolved%20Marketer.png"
                alt="The Evolved Marketer"
                className="h-16 object-contain"
              />
            </div>
            
            {/* Tagline */}
            <p className="text-xl font-medium text-brand-primary mb-6">
              Building Predictable Growth.
            </p>
            
            {/* Main Headline */}
            <h1 className="text-5xl font-light text-gray-900 leading-tight mb-6">
              {hero.headline}
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-2xl">
              {hero.subheadline}
            </p>
            
            {/* Body Text */}
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
              {hero.body}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4 text-lg">
                <Download size={20} />
                {hero.ctaResume}
              </button>
              <button className="btn-secondary px-8 py-4 text-lg">
                <Calendar size={20} />
                {hero.ctaSchedule}
              </button>
            </div>
          </div>

          {/* Right: 40% - Professional Portrait */}
          <div className="col-span-2 fade-in flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-3xl p-6 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src={hero.headshot}
                    alt="Lisa Baergen - Professional Portrait"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Floating credential badge */}
              <div className="absolute -top-4 -right-4 bg-brand-primary text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                APR, MCC Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;