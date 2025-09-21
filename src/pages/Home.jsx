import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar } from 'lucide-react';
import { mockData } from '../data/mock';

const Home = () => {
  const { hero, kpis, services } = mockData;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-montserrat" style={{ color: '#004E53' }}>
                  {hero.name}
                </h1>
                <div className="text-2xl md:text-3xl font-medium mb-6 font-montserrat" style={{ color: '#800020' }}>
                  {hero.title}
                </div>
                <p className="text-xl text-gray-700 leading-relaxed font-helvetica">
                  {hero.subtitle}
                </p>
              </div>

              <div className="bg-gray-100 rounded-lg p-8 text-center border-2 border-dashed border-gray-300">
                <p className="text-lg text-gray-600 font-helvetica">
                  {hero.videoPlaceholder}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={hero.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-teal-700 text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-200 font-helvetica"
                >
                  <FileText className="h-5 w-5 mr-3" />
                  📄 Download Resume
                </a>
                <a
                  href={hero.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-all duration-200 font-helvetica"
                >
                  <Calendar className="h-5 w-5 mr-3" />
                  📞 Book a Growth Strategy Call
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={hero.heroImage}
                alt="Lisa Baergen - Professional"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* KPI Highlights */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat" style={{ color: '#004E53' }}>
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-helvetica">
              Over 25 years of driving transformational growth across multiple successful acquisitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kpis.map((kpi, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-4 font-montserrat" style={{ color: '#800020' }}>
                  {kpi.value}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat" style={{ color: '#004E53' }}>
                  {kpi.label}
                </h3>
                <p className="text-gray-600 font-helvetica">
                  {kpi.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat" style={{ color: '#004E53' }}>
              How I Can Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-helvetica">
              Tailored marketing solutions for SaaS companies ready to scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-montserrat" style={{ color: '#004E53' }}>
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-helvetica">
                  {service.description}
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-bold font-montserrat" style={{ color: '#800020' }}>
                    {service.price}
                  </span>
                </div>
                <Link
                  to="/services"
                  className="inline-block w-full text-center px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
