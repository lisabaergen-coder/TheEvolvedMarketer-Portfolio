import React from 'react';
import { Download, Calendar } from 'lucide-react';
import { aboutData } from '../../mockData/aboutData';

const AboutHero = () => {
  const { hero } = aboutData;

  return (
    <section className="pt-20 section-padding section-white">
      <div className="light-content-container">
        <div className="grid grid-cols-5 gap-12 items-center">
          {/* Left: 60% - Content */}
          <div className="col-span-3 fade-in">
            <h1 className="text-5xl font-light text-brand-primary leading-tight mb-8">
              {hero.headline}
            </h1>
            
            <h2 className="text-2xl text-gray-700 leading-relaxed mb-8 font-light">
              {hero.subheadline}
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl">
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
              
              {/* Floating tagline */}
              <div className="absolute -bottom-4 -left-4 bg-brand-primary text-white px-6 py-3 rounded-lg text-sm font-medium shadow-lg">
                Building Predictable Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;