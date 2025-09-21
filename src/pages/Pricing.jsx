import React from 'react';
import { Clock, Mail, Calendar, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
            Pricing
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-helvetica">
            Flexible engagement models designed to scale with your business growth
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-12 text-center border border-teal-200">
            <div className="flex justify-center mb-6">
              <Clock className="h-16 w-16 text-teal-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat" style={{ color: '#004E53' }}>
              Fractional Packages Launching Soon
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-helvetica">
              I'm finalizing tiered pricing packages for fractional CMO services. Ask about early access and receive exclusive pre-launch pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/theevolvedmarketer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
              >
                <Calendar className="h-5 w-5 mr-3" />
                Request Early Access
              </a>
              <a
                href="mailto:lisa@theevolvedmarketer.com"
                className="inline-flex items-center px-8 py-4 bg-white border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors duration-200 font-helvetica"
              >
                <Mail className="h-5 w-5 mr-3" />
                Ask Questions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
              Available Now
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-helvetica">
              Current service offerings while I develop structured fractional packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Growth Audit",
                price: "$3,000/month",
                description: "Comprehensive marketing assessment with actionable recommendations",
                features: [
                  "Marketing Stack Analysis",
                  "Process Optimization Plan",
                  "Growth Opportunity Identification",
                  "Revenue Share Option Available"
                ],
                cta: "Get Started",
                popular: false
              },
              {
                title: "Fractional CMO",
                price: "Custom Retainer",
                description: "Strategic marketing leadership for SaaS companies $500K-$20M ARR",
                features: [
                  "Strategic Planning & Execution",
                  "Team Leadership & Development",
                  "Go-to-Market Strategy",
                  "Performance Optimization"
                ],
                cta: "Discuss Needs",
                popular: true
              },
              {
                title: "GTM Playbook",
                price: "Project-Based",
                description: "Complete go-to-market strategy development and documentation",
                features: [
                  "Messaging & Positioning",
                  "Channel Strategy",
                  "Launch Planning",
                  "Demand Generation Framework"
                ],
                cta: "Learn More",
                popular: false
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 relative ${
                  service.popular 
                    ? 'bg-teal-700 text-white shadow-2xl transform scale-105' 
                    : 'bg-gray-50 text-gray-800'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold font-helvetica">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-4 font-montserrat ${
                    service.popular ? 'text-white' : ''
                  }`} style={service.popular ? {} : { color: '#004E53' }}>
                    {service.title}
                  </h3>
                  <div className={`text-3xl font-bold mb-4 font-montserrat ${
                    service.popular ? 'text-white' : ''
                  }`} style={service.popular ? {} : { color: '#800020' }}>
                    {service.price}
                  </div>
                  <p className={`${service.popular ? 'text-teal-100' : 'text-gray-600'} font-helvetica`}>
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        service.popular ? 'bg-teal-200' : 'bg-teal-600'
                      }`}></div>
                      <span className={`${service.popular ? 'text-teal-100' : 'text-gray-700'} font-helvetica`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/theevolvedmarketer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center px-6 py-3 font-semibold rounded-lg transition-colors duration-200 font-helvetica ${
                    service.popular 
                      ? 'bg-white text-teal-700 hover:bg-gray-100' 
                      : 'bg-teal-700 text-white hover:bg-teal-800'
                  }`}
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
            Ready to Discuss Your Needs?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-helvetica">
            Whether you're interested in current services or want early access to new packages, let's start the conversation.
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

export default Pricing;
