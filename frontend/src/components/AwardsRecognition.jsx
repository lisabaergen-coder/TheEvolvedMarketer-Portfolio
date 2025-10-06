import React from 'react';
import { ExternalLink } from 'lucide-react';
import { mockData } from '../mockData';

const AwardsRecognition = () => {
  const { awards } = mockData;

  return (
    <section className="section-padding section-light-grey">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-gray-900">
            {awards.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto"></div>
        </div>

        {/* Award Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {awards.awards.map((award, index) => (
            <div 
              key={index}
              className="text-center fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => award.link && window.open(award.link, '_blank')}
            >
              <div className="award-circle group-hover:scale-105 transition-transform duration-300">
                <img
                  src={award.image}
                  alt={award.title}
                  className={
                    award.title.includes('APR') || award.title.includes('TMT') 
                      ? "contain" 
                      : award.title.includes('Technology Excellence')
                      ? "contain"
                      : ""
                  }
                />
              </div>
              
              <div className="px-2">
                <h3 className="font-medium text-gray-900 text-sm mb-1 leading-tight">
                  {award.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">{award.organization}</p>
                {award.link && (
                  <ExternalLink className="text-brand-primary mx-auto" size={14} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;