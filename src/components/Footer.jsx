import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-montserrat" style={{ color: '#004E53' }}>
              Lisa Baergen
            </h3>
            <p className="text-gray-600 mb-4 font-helvetica">
              The Evolved Marketer - Data-driven CMO with 25+ years scaling SaaS startups, 
              driving revenue growth, and leading successful acquisitions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:lisa@theevolvedmarketer.com" 
                className="text-gray-400 hover:text-teal-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/lisabaergen" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://calendly.com/theevolvedmarketer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-600 transition-colors"
              >
                <Calendar className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat" style={{ color: '#004E53' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 font-helvetica">
              <li><Link to="/services" className="text-gray-600 hover:text-teal-600 transition-colors">Services</Link></li>
              <li><Link to="/journey" className="text-gray-600 hover:text-teal-600 transition-colors">My Journey</Link></li>
              <li><Link to="/resume" className="text-gray-600 hover:text-teal-600 transition-colors">Resume</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-teal-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat" style={{ color: '#004E53' }}>
              Services
            </h4>
            <ul className="space-y-2 font-helvetica">
              <li className="text-gray-600">Growth Audit</li>
              <li className="text-gray-600">Fractional CMO</li>
              <li className="text-gray-600">GTM Playbook</li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-teal-600 transition-colors">Pricing</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm font-helvetica">
              © 2025 Lisa Baergen. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0 font-helvetica">
              Built for ambitious SaaS leaders ready to scale.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
