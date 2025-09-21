import React, { useState } from 'react';
import { Mail, Linkedin, Calendar, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    contactType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', contactType: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
            Contact
          </h1>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-helvetica">
            Ready to accelerate your growth? Let's start the conversation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
                Send Me a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                    I am a... *
                  </label>
                  <select
                    name="contactType"
                    value={formData.contactType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    <option value="">Select your role</option>
                    <option value="recruiter">Recruiter</option>
                    <option value="hiring-manager">Hiring Manager</option>
                    <option value="fractional-client">Fractional Client</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 font-helvetica">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center px-8 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-8 font-montserrat" style={{ color: '#004E53' }}>
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-helvetica">
                  Whether you're a recruiter, hiring manager, or looking for fractional CMO services, 
                  I'm here to help. Let's discuss how we can work together.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#004E53' }}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-montserrat" style={{ color: '#004E53' }}>
                      Email
                    </h3>
                    <a href="mailto:lisa@theevolvedmarketer.com" className="text-gray-600 hover:text-teal-600 transition-colors font-helvetica">
                      lisa@theevolvedmarketer.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#004E53' }}>
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-montserrat" style={{ color: '#004E53' }}>
                      Schedule a Call
                    </h3>
                    <a href="https://calendly.com/theevolvedmarketer" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors font-helvetica">
                      calendly.com/theevolvedmarketer
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: '#004E53' }}>
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 font-montserrat" style={{ color: '#004E53' }}>
                      LinkedIn
                    </h3>
                    <a href="https://linkedin.com/in/lisabaergen" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors font-helvetica">
                      linkedin.com/in/lisabaergen
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="https://calendly.com/theevolvedmarketer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors duration-200 font-helvetica"
                >
                  Schedule Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
