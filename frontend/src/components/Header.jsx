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
    <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="dark-content-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-semibold text-white">
              THE EVOLVED MARKETER
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('methodology')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Methodology
            </button>
            <button 
              onClick={() => scrollToSection('awards')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Recognition
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-400 hover:text-white transition-colors duration-300"
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
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-400 hover:text-white transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('methodology')}
                className="text-left text-gray-400 hover:text-white transition-colors duration-300"
              >
                Methodology
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="text-left text-gray-400 hover:text-white transition-colors duration-300"
              >
                Recognition
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-400 hover:text-white transition-colors duration-300"
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