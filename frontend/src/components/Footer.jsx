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
    <footer className="bg-black border-t border-white/10">
      <div className="dark-content-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded flex items-center justify-center">
                <Award className="text-black" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">THE EVOLVED MARKETER</h3>
                <p className="text-sm text-text-muted">Lisa M. Baergen, APR</p>
              </div>
            </div>
            <p className="body-medium text-text-secondary mb-6 max-w-md">
              Transforming businesses from operational chaos to systematic innovation through 
              proven frameworks and strategic excellence.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="mailto:contact@theevolvedmarketer.com"
                className="w-10 h-10 bg-white/10 rounded border border-white/20 flex items-center justify-center text-text-muted hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/lisabaergen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded border border-white/20 flex items-center justify-center text-text-muted hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-text-muted hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('methodology')}
                className="block text-text-muted hover:text-white transition-colors text-left"
              >
                Methodology
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="block text-text-muted hover:text-white transition-colors text-left"
              >
                Recognition
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-text-muted hover:text-white transition-colors text-left"
              >
                Services
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <nav className="space-y-3">
              <div className="text-text-muted">Strategic Growth Consultation</div>
              <div className="text-text-muted">Operations Evolution</div>
              <div className="text-text-muted">Executive Coaching</div>
              <div className="text-text-muted">Technology Marketing</div>
            </nav>
          </div>
        </div>

        {/* Recognition Banner */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Award className="text-brand-primary" size={20} />
              <span className="text-sm text-text-muted">TMT Businesswoman of the Year 2017</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-brand-primary" size={20} />
              <span className="text-sm text-text-muted">Golden Bridge Marketing Excellence</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="text-brand-primary" size={20} />
              <span className="text-sm text-text-muted">APR Accredited Professional</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-text-muted">
            © 2024 Lisa M. Baergen, APR. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-sm text-text-muted">Privacy Policy</div>
            <div className="text-sm text-text-muted">Terms of Service</div>
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