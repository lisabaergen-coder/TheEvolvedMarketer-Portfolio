import React from 'react';
import { Trophy, Calendar, Building } from 'lucide-react';
import { mockData } from '../mockData';

const AwardsSection = () => {
  const { awards, stats } = mockData;

  return (
    <section id="awards" className="section-padding bg-white">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-lg font-medium bg-blue-100 px-4 py-2 rounded-full">
            Personal Recognition
          </span>
          <h2 className="display-large mt-6 mb-8 text-gray-900">
            Proven Excellence
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            Recognition from leading industry organizations validates the impact of my strategic approach 
            to marketing transformation and business growth.
          </p>
        </div>

        <div className="grid-5 mb-16">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="text-center fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Award Circle */}
              <div className="award-circle">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Award Details */}
              <div className="px-2">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{award.title}</h3>
                <p className="text-xs text-gray-500 mb-1">{award.organization}</p>
                <p className="text-xs text-blue-600 font-medium">{award.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Stats */}
        <div className="card-elevated p-8 bg-white max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-blue-600 mb-2">{stats.awards}</div>
              <div className="text-sm text-gray-500 font-medium">Personal Awards</div>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-600 mb-2">{stats.experience}</div>
              <div className="text-sm text-gray-500 font-medium">Years Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-600 mb-2">{stats.exits}</div>
              <div className="text-sm text-gray-500 font-medium">Successful Exits</div>
            </div>
            <div>
              <div className="text-4xl font-light text-blue-600 mb-2">{stats.successRate}</div>
              <div className="text-sm text-gray-500 font-medium">Client Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;