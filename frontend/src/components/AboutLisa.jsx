import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mockData';

const AboutLisa = () => {
  const { aboutLisa } = mockData;

  return (
    <section className="section-padding section-light-grey">
      <div className="light-content-container">
        <div className="grid-2">
          {/* Left: Photo */}
          <div className="fade-in">
            <div className="card-elevated p-6 bg-white">
              <img
                src={aboutLisa.image}
                alt="Lisa Baergen team collaboration"
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              
              {/* Pull Quote */}
              <blockquote className="border-l-4 border-brand-primary pl-6 py-4 bg-brand-off-white rounded-r-lg">
                <p className="body-medium italic text-brand-primary font-medium">
                  "{aboutLisa.pullQuote}"
                </p>
              </blockquote>
            </div>
          </div>

          {/* Right: Content with logo watermark */}
          <div className="fade-in relative">
            {/* Subtle logo watermark */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-brand-primary/10 to-transparent rounded-lg"></div>
            
            <div className="relative z-10">
              <h2 className="display-large mb-8 text-gray-900">
                {aboutLisa.headline}
              </h2>
              <div className="burgundy-accent-line mb-8"></div>
              
              <div className="space-y-6 mb-10">
                {aboutLisa.body.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="body-medium text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <button className="btn-secondary">
                {aboutLisa.cta}
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLisa;