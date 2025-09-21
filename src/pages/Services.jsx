import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { mockData } from '../data/mock';

const Services = () => {
  const { services } = mockData;

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
            Services
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-helvetica">
            Strategic marketing solutions designed for SaaS companies ready to scale from $500K to $20M+ ARR
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold font-montserrat" style={{ color: '#004E53' }}>
                    {service.title}
                  </h2>

                  <p className="text-xl text-gray-700 leading-relaxed font-helvetica">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-3xl font-bold font-montserrat" style={{ color: '#800020' }}>
                      {service.price}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0" />
                        <span className="text-lg text-gray-700 font-helvetica">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://calendly.com/theevolvedmarketer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
                    >
                      Get Started
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </a>
                    <a
                      href="mailto:lisa@theevolvedmarketer.com"
                      className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors duration-200 font-helvetica"
                    >
                      Ask Questions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
            Ready to Accelerate Growth?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-helvetica">
            Let's discuss which service is the right fit for your company's current stage and growth objectives.
          </p>
          <a
            href="https://calendly.com/theevolvedmarketer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
          >
            Schedule Discovery Call
            <ArrowRight className="h-5 w-5 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
