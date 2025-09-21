import React from 'react';
import { TrendingUp, Award, Users, Target } from 'lucide-react';

const Journey = () => {
  const milestones = [
    {
      year: '2025',
      company: 'Lynx Tech',
      role: 'Chief Marketing Officer',
      achievement: '36% ARR growth, 8x pipeline expansion',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      year: '2023',
      company: 'LexisNexis Risk Solutions',
      role: 'VP, Marketing',
      achievement: '$42M attributed pipeline, $16M budget optimization',
      icon: <Target className="h-6 w-6" />
    },
    {
      year: '2021-2023',
      company: 'BehavioSec',
      role: 'Global CMO',
      achievement: 'ARR growth from $8M to $20M, ~$100M acquisition',
      icon: <Award className="h-6 w-6" />
    },
    {
      year: '2015-2021',
      company: 'NuData Security',
      role: 'VP, Marketing',
      achievement: 'Revenue scaled from $0.5M to $45.2M, Mastercard acquisition',
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
              My Journey
            </h1>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-helvetica">
              My career has been defined by purposeful growth, strategic acquisitions, and being recruited into leadership roles where I drive transformational results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <img
              src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22"
              alt="Professional Journey"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-xl max-w-none">
            <p className="text-xl text-gray-800 leading-relaxed mb-12 font-helvetica">
              Over 25 years, I've specialized in scaling SaaS startups from early-stage to successful exits. My experience spans from growing NuData Security from $0.5M to $45.2M (leading to Mastercard acquisition) to accelerating BehavioSec's ARR from $8M to $20M (contributing to ~$100M acquisition). At LexisNexis, I optimized a $16M marketing budget, generating a $42M attributed pipeline. Most recently at Lynx Tech, I built the marketing foundation from scratch, driving 36% ARR growth and 8x pipeline expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat" style={{ color: '#004E53' }}>
              Key Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200 hidden md:block"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-600 rounded-full hidden md:block"></div>

                  <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
                    <div className="md:w-1/2"></div>
                    <div className="md:w-1/2 bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#004E53', color: 'white' }}>
                          {milestone.icon}
                        </div>
                        <div>
                          <div className="text-lg font-bold font-montserrat" style={{ color: '#800020' }}>
                            {milestone.year}
                          </div>
                          <h3 className="text-2xl font-bold mb-2 font-montserrat" style={{ color: '#004E53' }}>
                            {milestone.company}
                          </h3>
                          <p className="text-lg font-medium text-gray-700 mb-3 font-helvetica">
                            {milestone.role}
                          </p>
                          <p className="text-gray-600 leading-relaxed font-helvetica">
                            {milestone.achievement}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
            Ready to Scale Together?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-helvetica">
            Let's discuss how my proven track record can accelerate your company's growth.
          </p>
          <a
            href="https://calendly.com/theevolvedmarketer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
          >
            Schedule a Strategy Call
          </a>
        </div>
      </section>
    </div>
  );
};

export default Journey;
