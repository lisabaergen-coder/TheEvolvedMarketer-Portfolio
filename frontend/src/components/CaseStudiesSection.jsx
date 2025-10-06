import React from 'react';
import { ArrowRight, Target, CheckCircle, TrendingUp } from 'lucide-react';
import { mockData } from '../mockData';

const CaseStudiesSection = () => {
  const { caseStudies } = mockData;

  return (
    <section className="section-padding bg-bg-secondary">
      <div className="dark-content-container">
        <div className="text-center mb-16">
          <span className="text-brand-primary text-lg font-medium">
            Success Stories
          </span>
          <h2 className="display-large mt-4 mb-8">
            Measurable Transformation
          </h2>
          <p className="body-large max-w-3xl mx-auto text-text-secondary">
            Real results from real companies. See how my frameworks have transformed businesses 
            across technology, cybersecurity, and fintech sectors.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded border border-white/10 p-8 hover-lift fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Case Study Header */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="text-brand-primary" size={24} />
                    <h3 className="heading-1">{study.title}</h3>
                  </div>
                  <p className="body-medium text-brand-primary mb-6">{study.client}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Challenge</h4>
                      <p className="body-small text-text-secondary">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Solution</h4>
                      <p className="body-small text-text-secondary">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-white/5 rounded border border-white/5 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-brand-primary" size={20} />
                    <h4 className="font-semibold text-white">Key Results</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start gap-2">
                        <CheckCircle className="text-brand-primary flex-shrink-0 mt-0.5" size={16} />
                        <span className="body-small text-text-muted">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-brand-primary/10 to-transparent rounded border border-brand-primary/20 p-8 max-w-3xl mx-auto">
            <h3 className="heading-2 mb-4">Ready for Your Transformation?</h3>
            <p className="body-medium text-text-secondary mb-6">
              Let's discuss how these proven frameworks can be adapted to drive growth in your organization.
            </p>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Schedule Strategy Session
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;