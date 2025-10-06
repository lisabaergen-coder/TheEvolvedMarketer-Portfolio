import React from 'react';
import { aboutData } from '../../mockData/aboutData';

const LeadershipPhilosophy = () => {
  const { leadership } = aboutData;

  return (
    <section className="section-padding section-teal">
      <div className="light-content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline + Intro */}
          <div className="fade-in">
            <h2 className="display-large mb-8 text-white">
              {leadership.headline}
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              {leadership.intro}
            </p>
          </div>

          {/* Right: Pillars List */}
          <div className="fade-in">
            <div className="space-y-6">
              {leadership.pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-teal font-bold">
                      {pillar.number}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-white/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional connection line graphic */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-4 text-white/60">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">S</div>
              <span className="text-sm">Strategy</span>
            </div>
            <span>→</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">B</div>
              <span className="text-sm">Build</span>
            </div>
            <span>→</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">M</div>
              <span className="text-sm">Mentor</span>
            </div>
            <span>→</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">D</div>
              <span className="text-sm">Data</span>
            </div>
            <span>→</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-xs">E</div>
              <span className="text-sm">Evolve</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipPhilosophy;