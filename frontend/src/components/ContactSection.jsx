import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle } from 'lucide-react';
import { mockData } from '../mockData';

const ContactSection = () => {
  const { contact } = mockData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="light-content-container">
        <div className="text-center mb-16">
          <span className="text-gray-700 text-lg font-medium bg-gray-100 px-4 py-2 rounded-full">
            {contact.subtitle}
          </span>
          <h2 className="display-large mt-6 mb-8 text-gray-900">
            {contact.title}
          </h2>
          <p className="body-large max-w-3xl mx-auto text-gray-600">
            {contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card-elevated p-8 bg-white">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="strategic-growth">Strategic Growth Consultation</option>
                    <option value="operations-evolution">Operations Evolution</option>
                    <option value="executive-coaching">Executive Coaching</option>
                    <option value="technology-marketing">Technology Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors resize-none"
                    placeholder="Tell me about your current challenges and growth objectives..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-brand-primary" size={32} />
                </div>
                <h3 className="heading-2 mb-4 text-gray-900">Message Sent Successfully!</h3>
                <p className="body-medium text-gray-600">
                  Thank you for your interest. I'll get back to you within 24 hours to discuss your growth objectives.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="card-elevated p-6 bg-white">
              <h3 className="heading-2 mb-6 text-gray-900">Let's Connect</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center">
                    <Mail className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-gray-600 hover:text-brand-primary transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center">
                    <Linkedin className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a 
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-brand-primary transition-colors"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Process */}
            <div className="card-elevated bg-gradient-to-r from-brand-light to-white border-2 border-brand-primary/20 p-6">
              <h3 className="heading-2 mb-6 text-gray-900">Consultation Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Discovery Call</h4>
                    <p className="text-sm text-gray-600">30-minute consultation to understand your challenges and objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Strategic Assessment</h4>
                    <p className="text-sm text-gray-600">Comprehensive analysis of your current marketing and operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-black text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Customized Proposal</h4>
                    <p className="text-sm text-gray-600">Tailored transformation roadmap with clear milestones and outcomes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="card p-6 bg-gray-50">
              <blockquote className="text-gray-600 italic mb-4">
                "Lisa transformed our entire approach to growth. Her frameworks helped us evolve from reactive marketing to strategic business transformation."
              </blockquote>
              <div className="text-sm">
                <div className="font-semibold text-gray-900">Sarah Chen</div>
                <div className="text-gray-500">VP Marketing, TechFlow Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;