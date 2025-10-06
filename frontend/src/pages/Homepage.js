import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  Target, 
  BarChart3, 
  MessageCircle,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin
} from "lucide-react";

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-deep-burgundy" />,
      title: "Strategic Marketing Leadership",
      description: "End-to-end marketing strategy development, execution, and optimization for B2B tech companies."
    },
    {
      icon: <Users className="h-8 w-8 text-deep-burgundy" />,
      title: "Growth Marketing",
      description: "Data-driven growth strategies, funnel optimization, and performance marketing to accelerate revenue."
    },
    {
      icon: <Target className="h-8 w-8 text-deep-burgundy" />,
      title: "Go-to-Market Strategy",
      description: "Complete GTM planning for product launches, market expansion, and competitive positioning."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-deep-burgundy" />,
      title: "Marketing Operations", 
      description: "MarTech stack optimization, process automation, and performance measurement systems."
    }
  ];

  const achievements = [
    { number: "150%", label: "Average Revenue Growth" },
    { number: "50+", label: "B2B Tech Companies" },
    { number: "10+", label: "Years Experience" },
    { number: "$50M+", label: "Revenue Generated" }
  ];

  const testimonials = [
    {
      quote: "Transformed our entire marketing approach and tripled our lead generation in 6 months.",
      author: "Sarah Chen",
      role: "CEO, TechFlow Solutions"
    },
    {
      quote: "The strategic clarity and execution excellence delivered exceptional ROI on our marketing investment.",
      author: "Michael Rodriguez", 
      role: "VP Growth, DataPoint"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-light-grey z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-deep-burgundy rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-lg">EM</span>
              </div>
              <span className="font-montserrat font-semibold text-xl text-deep-burgundy">
                The Evolved Marketer
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/services" className="text-dark-grey hover:text-deep-burgundy transition-colors">Services</a>
              <a href="/hire" className="text-dark-grey hover:text-deep-burgundy transition-colors">Hire Lisa</a>
              <a href="#about" className="text-dark-grey hover:text-deep-burgundy transition-colors">About</a>
              <a href="#contact" className="text-dark-grey hover:text-deep-burgundy transition-colors">Contact</a>
              <Button className="bg-deep-burgundy hover:bg-bright-burgundy text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block w-6 h-0.5 bg-dark-grey transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-dark-grey transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-dark-grey transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-light-grey bg-white">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/services" className="block px-3 py-2 text-dark-grey hover:text-deep-burgundy">Services</a>
                <a href="/hire" className="block px-3 py-2 text-dark-grey hover:text-deep-burgundy">Hire Lisa</a>
                <a href="#about" className="block px-3 py-2 text-dark-grey hover:text-deep-burgundy">About</a>
                <a href="#contact" className="block px-3 py-2 text-dark-grey hover:text-deep-burgundy">Contact</a>
                <Button className="w-full mt-2 bg-deep-burgundy hover:bg-bright-burgundy text-white">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 fade-in">
              <div>
                <Badge className="bg-dusty-pink text-deep-burgundy mb-4">
                  Fractional CMO Services
                </Badge>
                <h1 className="text-5xl sm:text-6xl font-montserrat font-bold text-deep-burgundy leading-tight">
                  Strategic Marketing
                  <span className="block text-dark-teal">Leadership</span>
                </h1>
                <p className="text-xl text-medium-grey mt-6 leading-relaxed">
                  Accelerate your B2B tech company's growth with fractional CMO expertise. 
                  Strategic leadership, proven methodologies, and hands-on execution to drive measurable results.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-deep-burgundy hover:bg-bright-burgundy text-white px-8 py-4 text-lg"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <a href="/services">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-white px-8 py-4 text-lg"
                  >
                    View Services
                  </Button>
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-light-grey">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-montserrat font-bold text-deep-burgundy">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-medium-grey">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative slide-up">
              <div className="aspect-square bg-gradient-to-br from-dusty-pink to-light-grey rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBtYXJrZXRpbmclMjBjb25zdWx0YW50fGVufDB8fHx8MTc1OTcyMjkyOHww&ixlib=rb-4.1.0&q=85"
                  alt="Professional marketing consultant"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-deep-burgundy rounded-full flex items-center justify-center shadow-xl">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-20 bg-dark-teal rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-montserrat font-bold">CMO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-dusty-pink text-deep-burgundy mb-4">Services</Badge>
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Fractional CMO Services
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Comprehensive marketing leadership tailored for B2B tech companies ready to scale
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-medium-grey leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About/Why Choose Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-dusty-pink text-deep-burgundy mb-4">
                  Why Choose The Evolved Marketer
                </Badge>
                <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
                  Strategic Leadership That Delivers Results
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  With over 10 years of experience leading marketing teams at high-growth B2B tech companies, 
                  I provide the strategic vision and tactical execution your business needs to scale effectively.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Proven track record with 50+ B2B tech companies",
                  "Data-driven approach with measurable ROI",
                  "Flexible engagement models from part-time to full-time",
                  "Deep expertise in MarTech stack and automation",
                  "Strategic advisor and hands-on executor"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-deep-burgundy mt-1 flex-shrink-0" />
                    <span className="text-medium-grey">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-dark-teal hover:bg-deep-burgundy text-white px-8 py-3">
                Learn More About My Approach
              </Button>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-light-grey to-dusty-pink rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558455546-6cc03e986b5d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwbWluaW1hbHxlbnwwfHx8fDE3NTk3MjI5MzR8MA&ixlib=rb-4.1.0&q=85"
                  alt="Modern tech workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-dusty-pink text-deep-burgundy mb-4">Testimonials</Badge>
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Client Success Stories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <MessageCircle className="h-8 w-8 text-deep-burgundy mb-4" />
                  <blockquote className="text-lg text-dark-grey italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-montserrat font-semibold text-deep-burgundy">
                      {testimonial.author}
                    </div>
                    <div className="text-medium-grey text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-deep-burgundy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-dusty-pink mb-8 leading-relaxed">
            Let's discuss how fractional CMO services can transform your marketing strategy and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-deep-burgundy hover:bg-light-grey px-8 py-4 text-lg"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-deep-burgundy px-8 py-4 text-lg"
            >
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-dusty-pink text-deep-burgundy mb-4">Contact</Badge>
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Let's Start the Conversation
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-deep-burgundy rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-deep-burgundy">Email</div>
                  <div className="text-medium-grey">hello@evolvedmarketer.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-deep-burgundy rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-deep-burgundy">Phone</div>
                  <div className="text-medium-grey">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-deep-burgundy rounded-lg flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-montserrat font-semibold text-deep-burgundy">LinkedIn</div>
                  <div className="text-medium-grey">linkedin.com/in/evolvedmarketer</div>
                </div>
              </div>
            </div>
            
            {/* Contact Form Placeholder */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-montserrat font-semibold text-deep-burgundy mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark-grey mb-2">
                          First Name
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-burgundy"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-grey mb-2">
                          Last Name
                        </label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-3 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-burgundy"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-dark-grey mb-2">
                        Email
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-burgundy"
                        placeholder="john@company.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-dark-grey mb-2">
                        Company
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-burgundy"
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-dark-grey mb-2">
                        Message
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-light-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-deep-burgundy resize-none"
                        placeholder="Tell me about your marketing challenges and goals..."
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-deep-burgundy hover:bg-bright-burgundy text-white py-3">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-grey py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo and tagline */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-deep-burgundy rounded-lg flex items-center justify-center">
                  <span className="text-white font-montserrat font-bold text-lg">EM</span>
                </div>
                <span className="font-montserrat font-semibold text-xl text-white">
                  The Evolved Marketer
                </span>
              </div>
              <p className="text-light-grey">
                Strategic marketing leadership for B2B tech companies
              </p>
            </div>
            
            {/* Quick links */}
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-light-grey">
                <div>Strategic Marketing Leadership</div>
                <div>Growth Marketing</div>
                <div>Go-to-Market Strategy</div>
                <div>Marketing Operations</div>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-montserrat font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-light-grey">
                <div>hello@evolvedmarketer.com</div>
                <div>+1 (555) 123-4567</div>
                <div>LinkedIn: /in/evolvedmarketer</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-medium-grey mt-8 pt-8 text-center text-light-grey">
            <p>&copy; 2025 The Evolved Marketer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;