import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { aboutData } from '../../mockData/aboutData';

const AboutTestimonials = () => {
  const { testimonials } = aboutData;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.quotes.length);
    }, 6000);

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
    <section className="section-padding section-light-grey">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <h2 className="display-large mb-8 text-gray-900">
            {testimonials.headline}
          </h2>
          <div className="burgundy-accent-line mx-auto"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Display */}
            <div className="text-center bg-white p-12 rounded-2xl shadow-lg">
              <Quote className="text-brand-primary mx-auto mb-8" size={56} />
              
              <blockquote className="text-3xl font-light text-gray-800 mb-8 leading-relaxed">
                "{testimonials.quotes[currentIndex].text}"
              </blockquote>
              
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-900 mb-2">
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
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand-primary transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-14 h-14 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand-primary transition-colors"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-brand-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {testimonials.quotes.map((quote, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all ${
                  index === currentIndex 
                    ? 'bg-brand-primary text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <p className="text-sm mb-4 italic">"{quote.text}"</p>
                <p className="font-semibold text-xs">
                  {quote.author}
                  {quote.title && <span>, {quote.title}</span>}
                </p>
              </div>
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

export default AboutTestimonials;