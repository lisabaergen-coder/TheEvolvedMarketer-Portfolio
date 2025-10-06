import React from 'react';
import { ArrowRight, Target, CheckCircle, TrendingUp } from 'lucide-react';
import { mockData } from '../mockData';

const CaseStudiesSection = () => {
  const { caseStudies } = mockData;

  return (
    <section className="section-padding bg-gray-50">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-lg font-medium bg-blue-100 px-4 py-2 rounded-full">
            Success Stories
          </span>
          <h2 className="display-large mt-6 mb-8 text-gray-900">
            Measurable Transformation
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            Real results from real companies. See how my frameworks have transformed businesses 
            across technology, cybersecurity, and fintech sectors.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="card-elevated p-8 bg-white fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Case Study Header */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Target className="text-blue-600" size={20} />
                    </div>
                    <h3 className="heading-2 text-gray-900">{study.title}</h3>
                  </div>
                  <p className="body-medium text-blue-600 font-semibold mb-6">{study.client}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="body-small text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="body-small text-gray-600">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-blue-50 rounded-xl border border-blue-100 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="text-blue-600" size={16} />
                    </div>
                    <h4 className="font-semibold text-gray-900">Key Results</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start gap-2">
                        <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="text-blue-600" size={12} />
                        </div>
                        <span className="body-small text-gray-700">{result}</span>
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
          <div className="card-elevated bg-gradient-to-r from-blue-50 to-white border-2 border-blue-100 p-8 max-w-3xl mx-auto">
            <h3 className="heading-2 mb-4 text-gray-900">Ready for Your Transformation?</h3>
            <p className="body-medium text-gray-600 mb-6">
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