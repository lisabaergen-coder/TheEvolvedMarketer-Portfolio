import React from 'react';
import { mockData } from '../mockData';

const InsightBanner = () => {
  const { insightBanner } = mockData;

  return (
    <section className="section-padding-sm section-light-grey">
      <div className="light-content-container">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            {insightBanner.quotes.map((quote, index) => (
              <p key={index} className="body-large text-gray-800 font-medium">
                "{quote}"
              </p>
            ))}
            
            <div className="mt-8">
              <p className="heading-3 text-gray-900 burgundy-underline inline-block">
                {insightBanner.conclusion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightBanner;