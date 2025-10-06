import React from 'react';
import { Quote } from 'lucide-react';
import { aboutData } from '../../mockData/aboutData';

const CareerStory = () => {
  const { careerStory } = aboutData;

  return (
    <section className="section-padding section-white">
      <div className="light-content-container">
        <div className="max-w-6xl mx-auto">
          <h2 className="display-large text-center mb-16 text-gray-900">
            {careerStory.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto mb-16"></div>

          {/* Two-column alternating layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: Story */}
            <div className="fade-in">
              <div className="space-y-6 text-left">
                {careerStory.body.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="body-medium text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right: Large Teal Pull Quote */}
            <div className="fade-in">
              <div className="bg-brand-teal text-white p-8 rounded-2xl relative">
                <Quote className="absolute top-6 left-6 text-white/30" size={48} />
                <blockquote className="text-2xl font-light leading-relaxed mt-8">
                  {careerStory.pullQuote}
                </blockquote>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-20">
            <h3 className="heading-1 text-center mb-12 text-gray-900">Career Evolution</h3>
            
            <div className="space-y-8">
              {careerStory.timeline.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Graphic Placeholder */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 text-sm font-medium text-gray-500">
                <span className="px-3 py-1 bg-gray-200 rounded">Finance</span>
                <span>→</span>
                <span className="px-3 py-1 bg-gray-200 rounded">Strategy</span>
                <span>→</span>
                <span className="px-3 py-1 bg-gray-200 rounded">Global Marketing</span>
                <span>→</span>
                <span className="px-3 py-1 bg-brand-primary text-white rounded">Leadership Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerStory;