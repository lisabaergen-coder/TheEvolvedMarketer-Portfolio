import React from 'react';
import { Download, Award, TrendingUp, Users, Target, ExternalLink } from 'lucide-react';

const Resume = () => {
  const achievements = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Revenue Growth",
      description: "Scaled NuData Security from $0.5M to $45.2M (Mastercard acquisition)"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Successful Exits",
      description: "Led marketing for multiple acquisitions totaling $100M+"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Leadership",
      description: "Built and managed high-performing marketing teams across multiple companies"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Pipeline Generation",
      description: "$42M attributed pipeline at LexisNexis Risk Solutions"
    }
  ];

  const resumeHighlights = [
    "25+ years of marketing leadership experience",
    "Scaled multiple companies through successful acquisitions",
    "Generated $42M+ in attributed pipeline",
    "Expert in SaaS go-to-market strategies",
    "Proven track record in revenue growth"
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
            Resume
          </h1>
          <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-helvetica">
            25+ years of marketing excellence driving transformational growth across multiple successful acquisitions
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://customer-assets.emergentagent.com/job_a933ac4e-53ab-467f-8f6e-555752960760/artifacts/r1xzn8g9_Baergen_Resume_20250920.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
            >
              <Download className="h-5 w-5 mr-3" />
              Download Full Resume
            </a>
            <a
              href="https://calendly.com/theevolvedmarketer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors duration-200 font-helvetica"
            >
              <ExternalLink className="h-5 w-5 mr-3" />
              Schedule Interview
            </a>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
              Career Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#004E53', color: 'white' }}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 font-montserrat" style={{ color: '#004E53' }}>
                      {achievement.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-helvetica">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-3xl font-bold mb-8 text-center font-montserrat" style={{ color: '#004E53' }}>
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {resumeHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-800 font-helvetica">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 font-montserrat" style={{ color: '#004E53' }}>
              Full Resume
            </h2>
            <p className="text-xl text-gray-700 font-helvetica">
              View the complete resume with detailed experience and achievements
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://customer-assets.emergentagent.com/job_a933ac4e-53ab-467f-8f6e-555752960760/artifacts/r1xzn8g9_Baergen_Resume_20250920.pdf"
              width="100%"
              height="800"
              style={{ border: 'none' }}
              title="Lisa Baergen Resume"
            >
              <p className="text-gray-600 p-8 text-center font-helvetica">
                Your browser doesn't support PDF viewing. 
                <a 
                  href="https://customer-assets.emergentagent.com/job_a933ac4e-53ab-467f-8f6e-555752960760/artifacts/r1xzn8g9_Baergen_Resume_20250920.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 underline ml-1"
                >
                  Download the PDF instead.
                </a>
              </p>
            </iframe>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
            Ready to Connect?
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto font-helvetica">
            Whether you're a recruiter, hiring manager, or looking for fractional CMO services, let's start the conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:lisa@theevolvedmarketer.com"
              className="inline-flex items-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
            >
              Send Email
            </a>
            <a
              href="https://calendly.com/theevolvedmarketer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors duration-200 font-helvetica"
            >
              Schedule Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
