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
  Download,
  Calendar,
  Globe,
  Star,
  Award,
  Compass,
  UserCheck,
  Clock,
  FileText,
  Settings
} from "lucide-react";

const ServicesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <TrendingUp className="h-12 w-12 text-deep-burgundy" />,
      title: "Fractional CMO Leadership",
      summary: "Get executive-level marketing leadership without the $250K+ overhead.",
      description: "As your embedded CMO, I lead your strategy, systems, and team alignment — transforming marketing from a cost center into a predictable growth engine.",
      includes: [
        "Strategic GTM Planning",
        "Demand Generation & Brand Building", 
        "KPI Dashboards & Reporting",
        "Team Leadership & Mentorship",
        "Revenue Growth Roadmaps"
      ],
      cta: "Book a Discovery Call"
    },
    {
      icon: <Users className="h-12 w-12 text-deep-burgundy" />,
      title: "Growth & CMO Advisor",
      summary: "Keep your marketing and sales teams aligned, focused, and accountable.",
      description: "Perfect for organizations that already have an internal team but need senior-level guidance and oversight.",
      includes: [
        "Bi-monthly sprint planning calls",
        "Unlimited email collaboration",
        "Campaign & strategy reviews", 
        "SOP access & optimization frameworks",
        "3–6 month advisory sprints"
      ],
      cta: "Explore Advisor Packages"
    },
    {
      icon: <Zap className="h-12 w-12 text-deep-burgundy" />,
      title: "Half-Day Strategy Session",
      summary: "Fast clarity. Focused direction. Measurable results.",
      description: "A one-time 4-hour deep dive into your marketing and growth strategy — identifying blind spots and immediate next steps to accelerate your trajectory.",
      includes: [
        "7-day prep and data review period",
        "Custom GTM & content framework",
        "Sales and marketing punch list",
        "Prioritized roadmap (next 1–6 months)"
      ],
      cta: "Book My Strategy Session"
    }
  ];

  const engagementModels = [
    {
      title: "Fractional Growth Officer (Engaged)",
      subtitle: "~10 hours/week of embedded marketing leadership within your organization.",
      benefits: [
        "Weekly KPI & pipeline reporting to CEO and Board",
        "CEO & executive translation into campaigns",
        "Team and vendor leadership",
        "Campaign & event plans (owned or co-led)",
        "Strategic innovation through data"
      ],
      cta: "Start a Conversation"
    },
    {
      title: "Fractional Growth Advisor",
      subtitle: "Ongoing strategic partner guiding your internal teams post-strategy sprint.",
      benefits: [
        "Bi-monthly strategy sessions",
        "Unlimited email support", 
        "Access to playbooks and SOPs",
        "Quarterly optimization recommendations",
        "Minimum 3-month commitment"
      ],
      cta: "Learn More"
    },
    {
      title: "Custom / Hourly Projects",
      subtitle: "Tailored engagements for specialized needs — messaging refresh, funnel optimization, analyst relations, or campaign audits.",
      benefits: [
        "Targeted senior expertise",
        "Agile hourly structure",
        "On-demand strategic input"
      ],
      cta: "Request Custom Quote"
    }
  ];

  const capabilities = [
    "GTM & Growth Strategy: ICPs, positioning, channel mix, and launch sequencing",
    "Content & Demand Gen: SEO, SEM, AEO/GEO, thought leadership, PR", 
    "Revenue Ops: Marketing automation, dashboards, CRM alignment",
    "Digital Infrastructure: Websites, funnels, analytics setup",
    "Team Building: Recruiting, mentoring, and scaling internal marketing teams"
  ];

  const workflowSteps = [
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "Discovery Call",
      description: "Align on goals and growth vision."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-white" />,
      title: "Audit & Strategy", 
      description: "Assess marketing stack, messaging, and ROI gaps."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "Engagement",
      description: "Define fractional or advisory structure."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Execution",
      description: "Build predictable growth together."
    }
  ];

  const testimonials = [
    {
      quote: "Lisa brings clarity, structure, and measurable growth — exactly what scaling companies need.",
      author: "CEO, SaaS Startup"
    },
    {
      quote: "Lisa has a rare ability to translate strategy into execution. She made our marketing team unstoppable.",
      author: "VP Sales, B2B Cyber Firm"
    },
    {
      quote: "Lisa doesn't just consult — she leads, mentors, and transforms.",
      author: "Founder, Fintech Company"
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
              <a href="/" className="text-dark-grey hover:text-deep-burgundy transition-colors">Home</a>
              <a href="/services" className="text-deep-burgundy font-medium">Services</a>
              <a href="/hire" className="text-dark-grey hover:text-deep-burgundy transition-colors">Hire Lisa</a>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-dusty-pink text-deep-burgundy mb-4">
                  Building Predictable Growth
                </Badge>
                <h1 className="text-5xl sm:text-6xl font-montserrat font-bold text-deep-burgundy leading-tight mb-6">
                  Strategic Marketing Leadership to Build 
                  <span className="block text-dark-teal">Predictable Growth</span>
                </h1>
                <h2 className="text-2xl text-medium-grey font-medium mb-6 leading-relaxed">
                  Whether you're scaling your startup, aligning vendors, or preparing for acquisition, I provide the strategy, systems, and leadership to build a marketing engine that delivers measurable ROI.
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed mb-8">
                  Companies scale faster when they have structure, strategy, and someone who's been there before. 
                  I embed into organizations as a Fractional CMO, Growth Advisor, or Strategic Partner — helping CEOs step out of the marketing seat and back into their role as visionary leaders.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-deep-burgundy hover:bg-bright-burgundy text-white px-8 py-4 text-lg"
                >
                  Let's Talk Growth
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-white px-8 py-4 text-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Services Overview PDF
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-light-grey to-dusty-pink rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneXxlbnwwfHx8fDE3NTk3MjM0Mzl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Marketing strategy workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fractional Leadership Section */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Fast-Paced Growth You Can Afford — With a Fractional (or Full-Time) CMO
            </h2>
            <p className="text-xl text-medium-grey max-w-4xl mx-auto leading-relaxed mb-8">
              Hiring a full-time Chief Marketing Officer can cost $250K–$400K+ per year — not including team and tools. I deliver the same C-level strategy, leadership, and accountability at a fraction of the cost.
            </p>
            <p className="text-lg text-medium-grey max-w-4xl mx-auto leading-relaxed">
              You get experienced marketing leadership, measurable outcomes, and scalable growth — whether you bring me in full-time or fractionally. Either way, I become an extension of your team, building structure, mentoring talent, and aligning marketing, sales, and product around shared goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white border-0 shadow-lg p-8 text-center">
              <div className="mb-6">
                <Compass className="h-12 w-12 text-deep-burgundy mx-auto" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-3">
                C-Level Strategy
              </h3>
              <p className="text-medium-grey">
                Executive experience guiding SaaS and B2B brands.
              </p>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg p-8 text-center">
              <div className="mb-6">
                <UserCheck className="h-12 w-12 text-deep-burgundy mx-auto" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-3">
                Embedded Partnership
              </h3>
              <p className="text-medium-grey">
                Hands-on collaboration with your team.
              </p>
            </Card>
            
            <Card className="bg-white border-0 shadow-lg p-8 text-center">
              <div className="mb-6">
                <TrendingUp className="h-12 w-12 text-deep-burgundy mx-auto" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-3">
                Scalable Model
              </h3>
              <p className="text-medium-grey">
                Senior impact without full-time cost.
              </p>
            </Card>
          </div>
          
          <Button className="bg-deep-burgundy hover:bg-bright-burgundy text-white px-8 py-4 text-lg">
            See How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Services Overview
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Comprehensive marketing leadership solutions tailored to your business stage and goals
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-montserrat font-semibold text-deep-burgundy mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg font-medium text-dark-teal mb-4">
                    {service.summary}
                  </p>
                  <p className="text-medium-grey leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-8 flex-grow">
                    <h4 className="font-montserrat font-semibold text-deep-burgundy mb-3">Includes:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-deep-burgundy mt-0.5 flex-shrink-0" />
                          <span className="text-medium-grey text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-deep-burgundy hover:bg-bright-burgundy text-white mt-auto">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy, Systems & Execution */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
                  From Strategy to Systems to Execution — I Build It All
                </h2>
                <p className="text-xl text-medium-grey leading-relaxed mb-8">
                  Strategy is where we start — but execution is where growth happens.
                  I combine data, leadership, and executional oversight to turn plans into performance.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-montserrat font-semibold text-deep-burgundy mb-6">
                  Key Capabilities:
                </h3>
                <div className="space-y-4">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-deep-burgundy mt-1 flex-shrink-0" />
                      <span className="text-medium-grey leading-relaxed">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button className="bg-dark-teal hover:bg-deep-burgundy text-white px-8 py-4 text-lg">
                Let's Build Your Growth Engine
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-dusty-pink to-light-grey rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxtYXJrZXRpbmclMjBzdHJhdGVneXxlbnwwfHx8fDE3NTk3MjM0Mzl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Analytics and growth strategy dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Engagement Models
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Choose the partnership model that fits your business needs and growth stage
            </p>
          </div>
          
          <div className="space-y-8">
            {engagementModels.map((model, index) => (
              <Card key={index} className="border-l-4 border-l-deep-burgundy bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-montserrat font-semibold text-deep-burgundy mb-2">
                        {model.title}
                      </h3>
                      <p className="text-medium-grey leading-relaxed">
                        {model.subtitle}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-montserrat font-semibold text-deep-burgundy mb-3">You Get:</h4>
                      <ul className="space-y-2">
                        {model.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-deep-burgundy mt-1 flex-shrink-0" />
                            <span className="text-medium-grey text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center lg:text-right">
                      <Button className="bg-deep-burgundy hover:bg-bright-burgundy text-white px-6 py-3">
                        {model.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-dark-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxtYXJrZXRpbmclMjBzdHJhdGVneXxlbnwwfHx8fDE3NTk3MjM0Mzl8MA&ixlib=rb-4.1.0&q=85"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
              How We Work: Simple, Effective, Scalable
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-deep-burgundy rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-2xl font-montserrat font-bold text-white mb-2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-dusty-pink">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Button className="bg-white text-dark-teal hover:bg-dusty-pink hover:text-deep-burgundy px-8 py-4 text-lg">
              Book Your Discovery Call
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Trusted by Founders, Executives & Teams
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <Star className="h-8 w-8 text-deep-burgundy mx-auto mb-4" />
                  <blockquote className="text-lg text-dark-grey italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="font-montserrat font-semibold text-deep-burgundy">
                    {testimonial.author}
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
            Ready to Build Predictable Growth?
          </h2>
          <p className="text-xl text-dusty-pink mb-8 leading-relaxed">
            Let's design the right marketing partnership for your business stage and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-deep-burgundy hover:bg-light-grey px-8 py-4 text-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Let's Talk Growth
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-deep-burgundy px-8 py-4 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Full Services Overview PDF
            </Button>
          </div>
          
          <div className="mt-12">
            <p className="text-dusty-pink font-montserrat font-medium text-lg">
              Building Predictable Growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;