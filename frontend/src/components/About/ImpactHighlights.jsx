import React from 'react';
import { Quote } from 'lucide-react';
import { aboutData } from '../../mockData/aboutData';

const ImpactHighlights = () => {
  const { impactHighlights } = aboutData;

  return (
    <section className="section-padding section-light-grey relative">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={impactHighlights.backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="light-content-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-gray-900">
            {impactHighlights.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid-4 mb-16">
          {impactHighlights.metrics.map((metric, index) => (
            <div 
              key={index}
              className="metric-card text-center fade-in bg-white rounded-2xl p-8 shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="metric-number text-brand-primary">{metric.number}</div>
              <div className="metric-label text-gray-900">{metric.label}</div>
              <p className="metric-description text-gray-600">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pull Quote */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <Quote className="text-brand-primary mx-auto mb-6" size={48} />
            <blockquote className="text-3xl font-light text-gray-800 leading-relaxed">
              {impactHighlights.pullQuote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactHighlights;