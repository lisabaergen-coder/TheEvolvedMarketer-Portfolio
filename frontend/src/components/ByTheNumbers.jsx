import React from 'react';
import { mockData } from '../mockData';

const ByTheNumbers = () => {
  const { byTheNumbers } = mockData;

  return (
    <section className="section-padding section-white relative">
      {/* Faint dashboard background */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-brand-primary/10 to-brand-teal/10"></div>
      </div>
      
      <div className="light-content-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="display-large mb-4 text-gray-900">
            {byTheNumbers.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto"></div>
        </div>

        <div className="grid-4">
          {byTheNumbers.metrics.map((metric, index) => (
            <div 
              key={index}
              className="metric-card fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="metric-number">{metric.number}</div>
              <div className="metric-label">{metric.label}</div>
              <p className="metric-description">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;