import React from 'react';
import { Trophy, Calendar, Building } from 'lucide-react';
import { mockData } from '../mockData';

const AwardsSection = () => {
  const { awards } = mockData;

  return (
    <section id="awards" className="section-padding bg-bg-secondary">
      <div className="dark-content-container">
        <div className="text-center mb-16">
          <span className="text-brand-primary text-lg font-medium">
            Industry Recognition
          </span>
          <h2 className="display-large mt-4 mb-8">
            Proven Excellence
          </h2>
          <p className="body-large max-w-3xl mx-auto text-text-secondary">
            Recognition from leading industry organizations validates the impact of my strategic approach 
            to marketing transformation and business growth.
          </p>
        </div>

        <div className="grid-4">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded border border-white/10 p-6 hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Award Image */}
              <div className="mb-6 h-48 bg-white/5 rounded border border-white/5 overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Award Details */}
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="text-brand-primary flex-shrink-0" size={20} />
                <h3 className="font-semibold text-white text-lg">{award.title}</h3>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Building className="text-text-muted flex-shrink-0" size={16} />
                <span className="body-small text-text-muted">{award.organization}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="text-text-muted flex-shrink-0" size={16} />
                <span className="body-small text-text-muted">{award.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Stats */}
        <div className="mt-16 bg-black/20 backdrop-blur-sm rounded border border-white/10 p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">4+</div>
              <div className="text-sm text-text-muted">Major Awards</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">20+</div>
              <div className="text-sm text-text-muted">Years Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">3</div>
              <div className="text-sm text-text-muted">Industry Sectors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
              <div className="text-sm text-text-muted">Client Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;