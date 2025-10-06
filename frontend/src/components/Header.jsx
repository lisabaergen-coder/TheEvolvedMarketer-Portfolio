import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="light-content-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="logo-container">
            <img
              src="https://customer-assets.emergentagent.com/job_mktg-portfolio-4/artifacts/a2h3wxtx_Logo%20FINAL%20Evolved%20Marketer.png"
              alt="The Evolved Marketer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('methodology')}
              className="text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
            >
              Methodology
            </button>
            <button 
              onClick={() => scrollToSection('awards')}
              className="text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
            >
              Recognition
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('methodology')}
                className="text-left text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                Methodology
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="text-left text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                Recognition
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-600 hover:text-brand-primary transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary w-full mt-4"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;