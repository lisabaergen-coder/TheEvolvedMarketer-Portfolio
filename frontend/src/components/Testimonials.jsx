import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { mockData } from '../mockData';

const Testimonials = () => {
  const { testimonials } = mockData;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.quotes.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.quotes.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.quotes.length);
  };

  return (
    <section className="section-padding section-white">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-gray-900">
            {testimonials.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto"></div>
        </div>

        {/* Quote Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="text-center">
              <Quote className="text-brand-primary mx-auto mb-6" size={48} />
              
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 mb-8 leading-relaxed">
                "{testimonials.quotes[currentIndex].text}"
              </blockquote>
              
              <div className="text-center">
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials.quotes[currentIndex].author}
                </p>
                {testimonials.quotes[currentIndex].title && (
                  <p className="text-brand-primary font-medium">
                    {testimonials.quotes[currentIndex].title}
                  </p>
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand-primary transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand-primary transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brand-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-secondary">
            {testimonials.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;