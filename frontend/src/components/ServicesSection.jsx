import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Cog, Users, Shield, ImageIcon } from 'lucide-react';
import { mockData } from '../mockData';

const ServicesSection = () => {
  const { services, servicesImagePlaceholder } = mockData;

  const getServiceIcon = (index) => {
    const icons = [TrendingUp, Cog, Users, Shield];
    const Icon = icons[index] || TrendingUp;
    return <Icon size={32} />;
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <span className="text-gray-700 text-lg font-medium bg-brand-light px-4 py-2 rounded-full">
            Strategic Services
          </span>
          <h2 className="display-large mt-6 mb-8 text-gray-900">
            Transform Your Business
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            Comprehensive strategic services designed to evolve your marketing approach 
            and unlock sustainable growth across all business functions.
          </p>
        </div>

        {/* Professional Services Image */}
        <div className="mb-16">
          <div className="card-elevated p-4 bg-white max-w-2xl mx-auto">
            <img
              src="https://customer-assets.emergentagent.com/job_mktg-portfolio-4/artifacts/khajydeu_dd92aa48-2bd1-4f8f-8cf6-876713ded8e9.jpeg"
              alt="Professional woman delivering strategic marketing services"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid-2 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-elevated p-8 bg-white fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <div className="text-brand-primary">
                    {getServiceIcon(index)}
                  </div>
                </div>
                <div>
                  <h3 className="heading-3 mb-3 text-gray-900">{service.title}</h3>
                  <p className="body-medium text-gray-600">{service.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="text-brand-primary" size={12} />
                    </div>
                    <span className="body-small text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary w-full"
              >
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Service Approach */}
        <div className="card-elevated bg-gradient-to-r from-brand-light to-white border-2 border-brand-primary/20 p-8">
          <div className="grid-2">
            <div>
              <h3 className="heading-1 mb-6 text-gray-900">The Evolved Approach</h3>
              <p className="body-medium text-gray-600 mb-6">
                Every engagement begins with understanding your unique challenges and growth objectives. 
                I don't believe in one-size-fits-all solutions—each strategy is tailored to your business, 
                industry, and market dynamics.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Discovery & Analysis</h4>
                    <p className="text-sm text-gray-600">Deep dive into your current state and growth potential</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Strategic Framework Design</h4>
                    <p className="text-sm text-gray-600">Custom methodology aligned with your objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Implementation & Optimization</h4>
                    <p className="text-sm text-gray-600">Hands-on execution with continuous improvement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-light text-brand-primary mb-4">300%</div>
                <p className="text-gray-600 font-medium">Average growth increase across client engagements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;