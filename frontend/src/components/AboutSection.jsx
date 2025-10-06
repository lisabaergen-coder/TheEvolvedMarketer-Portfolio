import React from 'react';
import { CheckCircle, Lightbulb, Target, Zap } from 'lucide-react';
import { mockData } from '../mockData';

const AboutSection = () => {
  const { about } = mockData;

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="light-content-container">
        <div className="grid-2">
          {/* Left Content */}
          <div className="fade-in">
            <div className="mb-6">
              <span className="text-gray-700 text-lg font-medium bg-brand-light px-4 py-2 rounded-full">
                {about.subtitle}
              </span>
            </div>
            
            <h2 className="display-large mb-8 text-gray-900">
              {about.title}
            </h2>
            
            <p className="body-large mb-8 text-gray-600">
              {about.description}
            </p>
            
            <p className="body-medium mb-10 text-gray-500">
              {about.experience}
            </p>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Strategic Innovation</h4>
                  <p className="text-sm text-gray-500">Beyond traditional marketing tactics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Measurable Results</h4>
                  <p className="text-sm text-gray-500">Data-driven transformation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Rapid Implementation</h4>
                  <p className="text-sm text-gray-500">From strategy to execution</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proven Expertise</h4>
                  <p className="text-sm text-gray-500">Award-winning track record</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Achievements */}
          <div className="fade-in">
            <div className="card-elevated p-8 bg-white">
              <h3 className="heading-2 mb-6 text-center text-gray-900">Recognition & Expertise</h3>
              
              <div className="space-y-4">
                {about.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-blue-600" size={16} />
                    </div>
                    <span className="body-small text-gray-700 font-medium">{achievement}</span>
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