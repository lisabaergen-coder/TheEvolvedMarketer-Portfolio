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
    <section id="methodology" className="section-padding bg-gray-50">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-lg font-medium bg-blue-100 px-4 py-2 rounded-full">
            {methodology.subtitle}
          </span>
          <h2 className="display-large mt-6 mb-8 text-gray-900">
            {methodology.title}
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
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
                  className={`w-full text-left p-6 rounded-lg border-2 transition-all duration-300 ${
                    activeFramework === index
                      ? 'bg-blue-50 border-blue-200 text-gray-900'
                      : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
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
                <div className="card-elevated p-6 bg-white">
                  <img
                    src={methodology.frameworks[0].image}
                    alt="Hybrid Growth Model"
                    className="w-full max-w-md mx-auto rounded-lg border-2 border-blue-200"
                    style={{ maxHeight: '400px', objectFit: 'contain' }}
                  />
                </div>
              </div>
            )}

            {activeFramework === 1 && (
              <div className="fade-in">
                <div className="space-y-4">
                  {methodology.frameworks[1].stages.map((stage, index) => (
                    <div
                      key={index}
                      className="card-elevated p-6 bg-white flex items-center gap-4"
                      style={{
                        borderLeft: `4px solid ${stage.color}`
                      }}
                    >
                      <div 
                        className="flex items-center justify-center w-12 h-12 rounded-full flex-shrink-0"
                        style={{ backgroundColor: `${stage.color}15`, color: stage.color }}
                      >
                        {getStageIcon(index)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-lg mb-1">
                          Stage {index + 1}: {stage.stage}
                        </h4>
                        <p className="text-gray-600">{stage.focus}</p>
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
          <div className="card-elevated text-center p-8 bg-white">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="text-blue-600" size={32} />
            </div>
            <h3 className="heading-3 mb-4 text-gray-900">Data-Driven</h3>
            <p className="body-small text-gray-600">
              Every decision backed by analytics and measurable outcomes
            </p>
          </div>

          <div className="card-elevated text-center p-8 bg-white">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cog className="text-blue-600" size={32} />
            </div>
            <h3 className="heading-3 mb-4 text-gray-900">Systematic</h3>
            <p className="body-small text-gray-600">
              Structured approach that scales with your business growth
            </p>
          </div>

          <div className="card-elevated text-center p-8 bg-white">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-blue-600" size={32} />
            </div>
            <h3 className="heading-3 mb-4 text-gray-900">Results-Focused</h3>
            <p className="body-small text-gray-600">
              Measurable transformation that drives sustainable growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;