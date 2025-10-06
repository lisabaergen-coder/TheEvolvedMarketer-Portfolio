import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Cog, Users, Shield } from 'lucide-react';
import { mockData } from '../mockData';

const ServicesSection = () => {
  const { services } = mockData;

  const getServiceIcon = (index) => {
    const icons = [TrendingUp, Cog, Users, Shield];
    const Icon = icons[index] || TrendingUp;
    return <Icon size={32} />;
  };

  return (
    <section id="services" className="section-padding">
      <div className="dark-content-container">
        <div className="text-center mb-16">
          <span className="text-brand-primary text-lg font-medium">
            Strategic Services
          </span>
          <h2 className="display-large mt-4 mb-8">
            Transform Your Business
          </h2>
          <p className="body-large max-w-3xl mx-auto text-text-secondary">
            Comprehensive strategic services designed to evolve your marketing approach 
            and unlock sustainable growth across all business functions.
          </p>
        </div>

        <div className="grid-2 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/5 rounded border border-white/10 p-8 hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-primary/20 rounded border border-brand-primary/30 flex items-center justify-center flex-shrink-0">
                  <div className="text-brand-primary">
                    {getServiceIcon(index)}
                  </div>
                </div>
                <div>
                  <h3 className="heading-2 mb-3">{service.title}</h3>
                  <p className="body-medium text-text-secondary">{service.description}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-primary flex-shrink-0" size={16} />
                    <span className="body-small text-text-muted">{feature}</span>
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
        <div className="bg-gradient-to-r from-brand-primary/10 to-transparent rounded border border-brand-primary/20 p-8">
          <div className="grid-2">
            <div>
              <h3 className="heading-1 mb-6">The Evolved Approach</h3>
              <p className="body-medium text-text-secondary mb-6">
                Every engagement begins with understanding your unique challenges and growth objectives. 
                I don't believe in one-size-fits-all solutions—each strategy is tailored to your business, 
                industry, and market dynamics.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Discovery & Analysis</h4>
                    <p className="text-sm text-text-muted">Deep dive into your current state and growth potential</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Strategic Framework Design</h4>
                    <p className="text-sm text-text-muted">Custom methodology aligned with your objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Implementation & Optimization</h4>
                    <p className="text-sm text-text-muted">Hands-on execution with continuous improvement</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-brand-primary mb-4">300%</div>
                <p className="text-text-muted">Average growth increase across client engagements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;