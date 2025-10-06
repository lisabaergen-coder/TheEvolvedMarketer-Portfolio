import React from 'react';

const CredibilityBanner = () => {
  return (
    <section className="section-padding-sm section-light-grey">
      <div className="light-content-container">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-xl font-medium text-gray-800">
              "Half of B2B buyers make up their minds before talking to sales."
            </p>
            <p className="text-xl font-medium text-gray-800">
              "More than 70% define their needs before ever engaging a sales representative."
            </p>
            
            <div className="mt-8">
              <p className="text-2xl font-semibold text-gray-900 burgundy-underline inline-block">
                Your marketing must work before your sales team ever speaks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilityBanner;