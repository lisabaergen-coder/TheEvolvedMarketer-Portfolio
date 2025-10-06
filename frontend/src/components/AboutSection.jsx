import React from 'react';
import { CheckCircle, Lightbulb, Target, Zap } from 'lucide-react';
import { mockData } from '../mockData';

const AboutSection = () => {
  const { about } = mockData;

  return (
    <section id="about" className="section-padding bg-bg-secondary">
      <div className="dark-content-container">
        <div className="grid-2">
          {/* Left Content */}
          <div className="fade-in">
            <div className="mb-6">
              <span className="text-brand-primary text-lg font-medium">
                {about.subtitle}
              </span>
            </div>
            
            <h2 className="display-large mb-8">
              {about.title}
            </h2>
            
            <p className="body-large mb-8">
              {about.description}
            </p>
            
            <p className="body-medium mb-10 text-text-muted">
              {about.experience}
            </p>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Strategic Innovation</h4>
                  <p className="text-sm text-text-muted">Beyond traditional marketing tactics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Target className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Measurable Results</h4>
                  <p className="text-sm text-text-muted">Data-driven transformation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Rapid Implementation</h4>
                  <p className="text-sm text-text-muted">From strategy to execution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-brand-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <h4 className="font-semibold text-white mb-1">Proven Expertise</h4>
                  <p className="text-sm text-text-muted">Award-winning track record</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="fade-in">
            <div className="bg-black/30 backdrop-blur-sm rounded border border-white/10 p-8">
              <h3 className="heading-2 mb-6 text-center">Recognition & Expertise</h3>
              
              <div className="space-y-4">
                {about.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5">
                    <CheckCircle className="text-brand-primary flex-shrink-0" size={20} />
                    <span className="body-small text-white">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 text-center">
                <button 
                  onClick={() => document.getElementById('methodology').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Explore My Methodology
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;