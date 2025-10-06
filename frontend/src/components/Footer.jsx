import React from 'react';
import { ArrowUp, Mail, Linkedin, Youtube } from 'lucide-react';
import { mockData } from '../mockData';

const Footer = () => {
  const { contact } = mockData;
  
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
    <footer className="text-white" style={{ backgroundColor: '#0A0E12' }}>
      <div className="light-content-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="logo-container-footer">
                <img
                  src="https://customer-assets.emergentagent.com/job_mktg-portfolio-4/artifacts/a2h3wxtx_Logo%20FINAL%20Evolved%20Marketer.png"
                  alt="The Evolved Marketer"
                  className="footer-logo"
                />
              </div>
            </div>
            <p className="text-brand-primary font-medium text-lg mb-6">
              {contact.tagline}
            </p>
            <p className="body-medium text-gray-300 mb-6 max-w-md">
              Fractional CMO services for SaaS & B2B Tech ventures. 
              Building predictable growth with data-driven strategy and executive leadership.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href={`mailto:${contact.email}`}
                className="w-10 h-10 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center text-gray-300 hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center text-gray-300 hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#youtube"
                className="w-10 h-10 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center text-gray-300 hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-white transition-colors text-left"
              >
                Services
              </button>
              <div className="text-gray-300">Success Stories</div>
              <div className="text-gray-300">Hire Lisa Full-Time</div>
              <div className="text-gray-300">Contact</div>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <nav className="space-y-3">
              <div className="text-gray-300 text-sm">Growth Audit</div>
              <div className="text-gray-300 text-sm">Fractional CMO</div>
              <div className="text-gray-300 text-sm">GTM Playbook</div>
              <div className="text-gray-300 text-sm">Full-Time Executive</div>
            </nav>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            © 2025 The Evolved Marketer. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-sm text-gray-400">Privacy Policy</div>
            <div className="text-sm text-gray-400">Terms of Service</div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-brand-primary hover:text-white transition-colors"
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