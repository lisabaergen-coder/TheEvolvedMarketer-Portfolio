import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mockData';

const CaseStudiesPreview = () => {
  const { caseStudies } = mockData;

  return (
    <section className="section-padding section-white">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-gray-900">
            {caseStudies.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto"></div>
        </div>

        {/* Three-column layout */}
        <div className="grid-3">
          {caseStudies.cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="card-elevated bg-white overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="heading-3 mb-4 text-gray-900">{caseStudy.title}</h3>
                <p className="body-small text-gray-600 mb-6 leading-relaxed">
                  {caseStudy.description}
                </p>
                
                <button className="btn-secondary w-full">
                  {caseStudy.cta}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;