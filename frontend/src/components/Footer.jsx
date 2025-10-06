import React from 'react';
import { ArrowUp, Mail, Linkedin, Award } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="light-content-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="logo-container">
                <img
                  src="https://customer-assets.emergentagent.com/job_mktg-portfolio-4/artifacts/a2h3wxtx_Logo%20FINAL%20Evolved%20Marketer.png"
                  alt="The Evolved Marketer"
                />
              </div>
            </div>
            <p className="body-medium text-gray-600 mb-6 max-w-md">
              Transforming businesses from operational chaos to systematic innovation through 
              proven frameworks and strategic excellence.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="mailto:contact@theevolvedmarketer.com"
                className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-primary hover:border-brand-primary transition-colors shadow-sm"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/lisabaergen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-primary hover:border-brand-primary transition-colors shadow-sm"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-600 hover:text-brand-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('methodology')}
                className="block text-gray-600 hover:text-brand-primary transition-colors text-left"
              >
                Methodology
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="block text-gray-600 hover:text-brand-primary transition-colors text-left"
              >
                Recognition
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-600 hover:text-brand-primary transition-colors text-left"
              >
                Services
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <nav className="space-y-3">
              <div className="text-gray-600 text-sm">Strategic Growth Consultation</div>
              <div className="text-gray-600 text-sm">Operations Evolution</div>
              <div className="text-gray-600 text-sm">Executive Coaching</div>
              <div className="text-gray-600 text-sm">Technology Marketing</div>
            </nav>
          </div>
        </div>

        {/* Recognition Banner */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-light rounded-full flex items-center justify-center">
                <Award className="text-brand-primary" size={16} />
              </div>
              <span className="text-sm text-gray-600">TMT Businesswoman of the Year 2017</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-light rounded-full flex items-center justify-center">
                <Award className="text-brand-primary" size={16} />
              </div>
              <span className="text-sm text-gray-600">Golden Bridge Marketing Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-brand-light rounded-full flex items-center justify-center">
                <Award className="text-brand-primary" size={16} />
              </div>
              <span className="text-sm text-gray-600">APR Accredited Professional</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © 2024 Lisa M. Baergen, APR. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-sm text-gray-500">Privacy Policy</div>
            <div className="text-sm text-gray-500">Terms of Service</div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-brand-primary hover:text-brand-dark transition-colors"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;