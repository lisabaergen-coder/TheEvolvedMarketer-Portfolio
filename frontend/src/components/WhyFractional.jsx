import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mockData';

const WhyFractional = () => {
  const { whyFractional } = mockData;

  return (
    <section className="section-padding section-off-white">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-gray-900 max-w-4xl mx-auto">
            {whyFractional.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto mb-8"></div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {whyFractional.body.split('\n\n').map((paragraph, index) => (
              <p key={index} className="body-medium text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Three Cards */}
        <div className="grid-3 mb-12">
          {whyFractional.cards.map((card, index) => (
            <div 
              key={index}
              className="card-elevated text-center p-8 bg-white fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="heading-3 mb-4 text-gray-900">{card.title}</h3>
              <p className="body-small text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-primary">
            {whyFractional.cta}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyFractional;