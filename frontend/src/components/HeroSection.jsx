import React from 'react';
import { ArrowRight, Award, Users, TrendingUp } from 'lucide-react';
import { mockData } from '../mockData';

const HeroSection = () => {
  const { hero } = mockData;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 section-padding">
      <div className="dark-content-container">
        <div className="grid-2">
          {/* Left Content */}
          <div className="fade-in">
            <div className="mb-6">
              <span className="text-brand-primary text-lg font-medium">
                {hero.subtitle}
              </span>
            </div>
            
            <h1 className="display-huge mb-6">
              {hero.title}
            </h1>
            
            <h2 className="heading-1 mb-8 text-text-secondary">
              {hero.name}
            </h2>
            
            <p className="body-large mb-10 max-w-lg">
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
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="text-brand-primary" size={24} />
                </div>
                <div className="text-2xl font-semibold text-white">4+</div>
                <div className="text-sm text-text-muted">Industry Awards</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="text-brand-primary" size={24} />
                </div>
                <div className="text-2xl font-semibold text-white">20+</div>
                <div className="text-sm text-text-muted">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-brand-primary" size={24} />
                </div>
                <div className="text-2xl font-semibold text-white">100+</div>
                <div className="text-sm text-text-muted">Clients Transformed</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="fade-in flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-brand-primary/20 to-transparent p-8">
                <div className="w-full h-full rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src={hero.headshot}
                    alt={hero.name}
                    className="w-80 h-80 object-cover object-top"
                    style={{
                      clipPath: 'circle(50% at 50% 50%)'
                    }}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-brand-primary text-black px-4 py-2 rounded text-sm font-semibold">
                APR Certified
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded text-sm border border-white/20">
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