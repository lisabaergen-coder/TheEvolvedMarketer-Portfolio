import React, { useState } from 'react';
import { ChevronRight, BarChart3, Cog, TrendingUp, Zap } from 'lucide-react';
import { mockData } from '../mockData';

const MethodologySection = () => {
  const { methodology } = mockData;
  const [activeFramework, setActiveFramework] = useState(0);

  const getStageIcon = (index) => {
    const icons = [BarChart3, Cog, TrendingUp, Zap, ChevronRight];
    const Icon = icons[index] || ChevronRight;
    return <Icon size={24} />;
  };

  return (
    <section id="methodology" className="section-padding">
      <div className="dark-content-container">
        <div className="text-center mb-16">
          <span className="text-brand-primary text-lg font-medium">
            {methodology.subtitle}
          </span>
          <h2 className="display-large mt-4 mb-8">
            {methodology.title}
          </h2>
          <p className="body-large max-w-3xl mx-auto text-text-secondary">
            My proven frameworks transform businesses from reactive chaos to proactive innovation, 
            delivering measurable growth at every stage of evolution.
          </p>
        </div>

        {/* Framework Tabs */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {methodology.frameworks.map((framework, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFramework(index)}
                  className={`w-full text-left p-6 rounded border transition-all duration-300 ${
                    activeFramework === index
                      ? 'bg-brand-primary/10 border-brand-primary text-white'
                      : 'bg-white/5 border-white/10 text-text-secondary hover:bg-white/10'
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-2">{framework.name}</h3>
                  <p className="text-sm">{framework.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            {activeFramework === 0 && (
              <div className="fade-in">
                <img
                  src={methodology.frameworks[0].image}
                  alt="Hybrid Growth Model"
                  className="w-full rounded border border-white/10"
                />
              </div>
            )}

            {activeFramework === 1 && (
              <div className="fade-in">
                <div className="space-y-4">
                  {methodology.frameworks[1].stages.map((stage, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-6 bg-white/5 rounded border border-white/10 hover-lift"
                      style={{
                        borderLeft: `4px solid ${stage.color}`
                      }}
                    >
                      <div 
                        className="flex items-center justify-center w-12 h-12 rounded-full"
                        style={{ backgroundColor: `${stage.color}20`, color: stage.color }}
                      >
                        {getStageIcon(index)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white text-lg mb-1">
                          Stage {index + 1}: {stage.stage}
                        </h4>
                        <p className="text-text-muted">{stage.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/5 rounded border border-white/10 hover-lift">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-brand-primary" size={32} />
            </div>
            <h3 className="heading-2 mb-4">Data-Driven</h3>
            <p className="body-small text-text-muted">
              Every decision backed by analytics and measurable outcomes
            </p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded border border-white/10 hover-lift">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cog className="text-brand-primary" size={32} />
            </div>
            <h3 className="heading-2 mb-4">Systematic</h3>
            <p className="body-small text-text-muted">
              Structured approach that scales with your business growth
            </p>
          </div>

          <div className="text-center p-6 bg-white/5 rounded border border-white/10 hover-lift">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-brand-primary" size={32} />
            </div>
            <h3 className="heading-2 mb-4">Results-Focused</h3>
            <p className="body-small text-text-muted">
              Measurable transformation that drives sustainable growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;