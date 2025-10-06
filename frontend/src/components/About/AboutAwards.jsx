import React from 'react';
import { ExternalLink } from 'lucide-react';
import { aboutData } from '../../mockData/aboutData';

const AboutAwards = () => {
  const { awards } = aboutData;

  return (
    <section className="section-padding section-white">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-gray-900">
            {awards.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto mb-8"></div>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            {awards.body}
          </p>
        </div>

        {/* Awards Grid - 2-3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.awards.map((award, index) => (
            <div 
              key={index}
              className="card-elevated bg-white p-6 text-center cursor-pointer group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => award.link && window.open(award.link, '_blank')}
            >
              {/* Award Image */}
              <div className="mb-6 h-32 flex items-center justify-center">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Award Details */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                {award.title}
              </h3>
              <p className="text-brand-primary font-medium mb-2">
                {award.organization}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {award.year}
              </p>
              
              {award.link && (
                <div className="flex items-center justify-center text-brand-primary group-hover:text-brand-secondary transition-colors">
                  <ExternalLink size={16} />
                  <span className="ml-2 text-sm">View Article</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Recognition */}
        <div className="mt-16 bg-gray-50 p-8 rounded-2xl text-center">
          <h3 className="heading-2 mb-4 text-gray-900">Beyond Individual Recognition</h3>
          <p className="body-medium text-gray-600 max-w-2xl mx-auto">
            These awards represent not just personal achievement, but the success of the teams, 
            strategies, and systems I've helped build across the technology and SaaS landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAwards;