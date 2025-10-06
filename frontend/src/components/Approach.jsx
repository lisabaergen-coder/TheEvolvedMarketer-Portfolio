import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mockData';

const Approach = () => {
  const { approach } = mockData;

  return (
    <section className="section-padding section-teal relative overflow-hidden">
      {/* Subtle growth pattern overlay - removed to fix display issue */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
      </div>

      <div className="light-content-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-white">
            {approach.headline}
          </h2>
          <div className="w-16 h-1 bg-white mx-auto"></div>
        </div>

        {/* Six-step flow */}
        <div className="grid-6 mb-12">
          {approach.steps.map((step, index) => (
            <div 
              key={index}
              className="text-center fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-brand-teal font-bold text-xl">
                {step.number}
              </div>
              <p className="body-small text-white font-bold leading-tight">
                {step.label}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary bg-white text-brand-teal border-white hover:bg-brand-teal hover:text-white">
            {approach.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Approach;