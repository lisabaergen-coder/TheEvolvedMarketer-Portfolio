import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { mockData } from '../mockData';

const ServicesPreview = () => {
  const { services } = mockData;

  return (
    <section className="section-padding section-white">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-gray-900">
            {services.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto"></div>
        </div>

        {/* Services Image */}
        <div className="mb-16">
          <div className="card-elevated p-6 bg-white max-w-2xl mx-auto">
            <img
              src={services.image}
              alt="Professional marketing services and strategic consultation"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Three Service Cards */}
        <div className="grid-3">
          {services.cards.map((service, index) => (
            <div 
              key={index}
              className="card-elevated p-8 bg-white fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="heading-3 mb-4 text-gray-900">{service.title}</h3>
              <p className="body-medium text-gray-700 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-start gap-3 mb-6 p-4 bg-brand-off-white rounded-lg">
                <CheckCircle className="text-brand-primary flex-shrink-0 mt-1" size={16} />
                <span className="body-small text-gray-600 font-medium">
                  Includes: {service.includes}
                </span>
              </div>

              <button className="btn-secondary w-full">
                {service.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;