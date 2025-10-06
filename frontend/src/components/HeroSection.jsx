import React from 'react';
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';
import { mockData } from '../mockData';

const HeroSection = () => {
  const { hero, stats } = mockData;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 section-padding bg-gradient-to-br from-blue-50 to-white">
      <div className="light-content-container">
        <div className="grid-2">
          {/* Left Content */}
          <div className="fade-in">
            <div className="mb-6">
              <span className="text-gray-700 text-lg font-medium bg-brand-light px-4 py-2 rounded-full">
                {hero.subtitle}
              </span>
            </div>
            
            <h1 className="display-huge mb-6 text-gray-900">
              {hero.title}
            </h1>
            
            <h2 className="heading-2 mb-8 text-gray-700 font-medium">
              {hero.name}
            </h2>
            
            <p className="body-large mb-10 max-w-lg text-gray-600">
              {hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={scrollToContact} className="btn-primary">
                {hero.cta}
                <ArrowRight size={20} />
              </button>
              <button className="btn-secondary">
                View Portfolio
              </button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-light text-gray-900 mb-1">{stats.awards}</div>
                <div className="text-sm text-gray-500 font-medium">Personal Awards</div>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-light text-gray-900 mb-1">{stats.experience}</div>
                <div className="text-sm text-gray-500 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="text-blue-600" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-light text-gray-900 mb-1">{stats.exits}</div>
                <div className="text-sm text-gray-500 font-medium">Successful Exits</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Headshot */}
          <div className="fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-xl">
                <div className="w-full h-full rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={hero.headshot}
                    alt={hero.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              {/* Floating Credential Badges */}
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                APR Certified
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium shadow-lg border border-gray-200">
                Businesswoman of the Year 2017
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;