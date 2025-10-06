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
  Settings,
  ExternalLink,
  Linkedin,
  Building,
  Trophy,
  Eye,
  Heart,
  Lightbulb,
  Users2,
  Database,
  TrendingUp as Growth
} from "lucide-react";

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const impactMetrics = [
    {
      icon: <TrendingUp className="h-12 w-12 text-deep-burgundy" />,
      number: "90×",
      label: "ARR Growth",
      description: "Scaled a cybersecurity firm to acquisition"
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-deep-burgundy" />,
      number: "$42M+",
      label: "Pipeline Impact",
      description: "Attributed to integrated campaigns"
    },
    {
      icon: <Growth className="h-12 w-12 text-deep-burgundy" />,
      number: "8×",
      label: "Pipeline Expansion", 
      description: "Built GTM foundation from the ground up"
    },
    {
      icon: <Users className="h-12 w-12 text-deep-burgundy" />,
      number: "25+",
      label: "Years Experience",
      description: "Leading high-performing SaaS and B2B teams"
    }
  ];

  const philosophyPillars = [
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Clarity Before Action",
      description: "Define what success looks like and align every initiative."
    },
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "Build, Don't Patch",
      description: "Create systems that scale instead of short-term fixes."
    },
    {
      icon: <Users2 className="h-8 w-8 text-white" />,
      title: "Mentorship Matters",
      description: "Empower your team to think critically and grow confidently."
    },
    {
      icon: <Database className="h-8 w-8 text-white" />,
      title: "Data with Soul",
      description: "Use analytics to support stories that connect."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: "Continuous Evolution",
      description: "The best marketers never stop learning."
    }
  ];

  const timelineHighlights = [
    {
      title: "Current / Fractional CMO",
      description: "Helping SaaS and cybersecurity companies build predictable growth engines."
    },
    {
      title: "Global Marketing Leadership",
      description: "Led teams spanning North America, Europe, and LATAM, driving consistent ARR expansion."
    },
    {
      title: "Strategic Acquisitions",
      description: "Guided multiple companies through successful exits by strengthening their go-to-market position."
    },
    {
      title: "Award-Winning Campaigns",
      description: "Directed creative and digital programs recognized by SC Magazine, Globee Awards, and TMT Magazine."
    }
  ];

  const awards = [
    {
      title: "10 Influential Female Business Leaders (2023)",
      organization: "Business Leaders Review",
      link: "https://businessleadersreview.com/lisa-baergen-a-proficient-leader-with-terrific-business-acumen/",
      image: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTk3MjQwODN8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Woman Leader of the Year (2019)",
      organization: "CIO Look",
      link: "https://ciolook.com/lisa-baergen-a-savvy-marketing-and-pr-specialist/",
      image: "https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3b3JrcGxhY2V8ZW58MHx8fHwxNzU5NzI0MDg4fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Marketing Team of the Year (2016)",
      organization: "Golden Bridge Awards",
      link: "https://globeeawards.com/2016-winners-golden-bridge-awards/",
      image: "https://images.unsplash.com/photo-1740933084056-078fac872bff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjB3b3JrcGxhY2V8ZW58MHx8fHwxNzU5NzI0MDg4fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "APR Accreditation",
      organization: "Canadian Public Relations Society",
      description: "Work published in Des Campagnes de Communication Réussies, Tome 2 (PUQ Publications)",
      image: "https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTk3MjQwODN8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  const testimonials = [
    {
      quote: "Lisa is a passionate executive who thrives on innovation and thinking outside the box. From day one, she made our project her own.",
      author: "Magali Vander Vorst",
      company: "Mastercard"
    },
    {
      quote: "Lisa built and led a global, multilingual marketing team — turning complexity into momentum.",
      author: "Maria Sanchez Gomez, PhD",
      company: "Technology Leadership"
    },
    {
      quote: "Lisa's mentorship changed how I lead — she inspires excellence through action.",
      author: "Karen Taylor",
      company: "Director, Mastercard"
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
              <a href="/services" className="text-dark-grey hover:text-deep-burgundy transition-colors">Services</a>
              <a href="/hire" className="text-dark-grey hover:text-deep-burgundy transition-colors">Hire Lisa</a>
              <a href="/about" className="text-deep-burgundy font-medium">About</a>
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
                  The Evolved Marketer — A Career Defined by Building
                  <span className="block text-dark-teal">Predictable Growth</span>
                </h1>
                <h2 className="text-2xl text-medium-grey font-medium mb-6 leading-relaxed">
                  I've spent over two decades leading global marketing teams, scaling SaaS startups, and helping technology companies unlock growth that's measurable, repeatable, and acquisition-ready.
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  From early-stage launches to multimillion-dollar exits, I bring a rare combination of creativity, analytics, and leadership that turns vision into velocity.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-deep-burgundy hover:bg-bright-burgundy text-white px-8 py-4 text-lg"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-white px-8 py-4 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </Button>
              </div>
            </div>
            
            {/* Professional Portrait */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-white to-light-grey rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTk3MjQwODN8MA&ixlib=rb-4.1.0&q=85"
                  alt="Lisa Baergen - Professional Portrait"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Professional Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-20 bg-dark-teal rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-montserrat font-bold">Leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Story / The Journey */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-8">
                  A Journey Fueled by Growth, Purpose, and Results
                </h2>
                <p className="text-xl text-medium-grey leading-relaxed mb-6">
                  My career began where many stories of growth start — solving problems others overlooked.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed mb-6">
                  Early in my career, I worked in finance and compliance, where I learned that data tells powerful stories. That insight shaped my marketing leadership style: fact-based storytelling.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed mb-8">
                  Over the years, I've built brands, systems, and teams that deliver both measurable outcomes and meaningful impact — scaling multiple SaaS startups to acquisition.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed">
                  From aligning global GTM strategies to mentoring teams across time zones, I've focused on one core belief:
                </p>
              </div>
              
              <blockquote className="text-2xl font-montserrat font-semibold text-dark-teal italic border-l-4 border-dark-teal pl-6 py-4">
                "Marketing isn't about noise — it's about clarity, credibility, and conversion."
              </blockquote>
            </div>
            
            {/* Timeline Highlights */}
            <div className="space-y-6">
              <h3 className="text-2xl font-montserrat font-semibold text-deep-burgundy mb-8">
                Timeline Highlights
              </h3>
              <div className="space-y-6">
                {timelineHighlights.map((highlight, index) => (
                  <Card key={index} className="border-l-4 border-l-dark-teal bg-light-grey">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-3 h-3 bg-dark-teal rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="text-lg font-montserrat font-semibold text-deep-burgundy mb-2">
                            {highlight.title}
                          </h4>
                          <p className="text-medium-grey leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Evolution Visual */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
                <div className="text-center">
                  <h4 className="text-lg font-montserrat font-semibold text-deep-burgundy mb-4">
                    Career Evolution
                  </h4>
                  <div className="flex items-center justify-between text-sm text-medium-grey">
                    <span>Finance</span>
                    <ArrowRight className="h-4 w-4" />
                    <span>Strategy</span>
                    <ArrowRight className="h-4 w-4" />
                    <span>Global Marketing</span>
                    <ArrowRight className="h-4 w-4" />
                    <span className="text-deep-burgundy font-semibold">Leadership Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Highlights */}
      <section className="py-20 bg-light-grey relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-deep-burgundy to-dark-teal"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Proven Results Across Every Growth Stage
            </h2>
            <blockquote className="text-2xl font-montserrat font-semibold text-dark-teal italic">
              "I don't just lead marketing — I build engines that accelerate growth."
            </blockquote>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white text-center">
                <CardContent className="p-8">
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-montserrat font-bold text-deep-burgundy mb-2">
                    {metric.number}
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-3">
                    {metric.label}
                  </h3>
                  <p className="text-medium-grey leading-relaxed text-sm">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-dark-teal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1758520144426-edf40a58f299?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjB3b3JrcGxhY2V8ZW58MHx8fHwxNzU5NzI0MDg4fDA&ixlib=rb-4.1.0&q=85"
            alt="Professional leadership"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Philosophy Intro */}
            <div className="text-white">
              <h2 className="text-4xl font-montserrat font-bold mb-6">
                My Leadership Philosophy
              </h2>
              <p className="text-xl leading-relaxed mb-8 text-dusty-pink">
                True marketing leadership goes beyond campaigns. It's about building a foundation where strategy, people, and performance move together.
              </p>
            </div>
            
            {/* Philosophy Pillars */}
            <div className="space-y-6">
              {philosophyPillars.map((pillar, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-deep-burgundy rounded-lg flex items-center justify-center flex-shrink-0">
                        {pillar.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                          {index + 1}. {pillar.title}
                        </h3>
                        <p className="text-dusty-pink leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Recognition & Industry Excellence
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              From innovation awards to global leadership recognition, my work has been celebrated for measurable results and meaningful impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white cursor-pointer">
                <CardContent className="p-6">
                  <div className="aspect-square bg-gradient-to-br from-light-grey to-dusty-pink rounded-2xl overflow-hidden mb-4 relative group-hover:scale-105 transition-transform">
                    <img 
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-deep-burgundy/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <Eye className="h-8 w-8 mx-auto mb-2" />
                        <span className="text-sm font-medium">View Article</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-montserrat font-semibold text-deep-burgundy mb-2 text-sm leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-medium-grey text-sm mb-2">
                    {award.organization}
                  </p>
                  {award.description && (
                    <p className="text-medium-grey text-xs">
                      {award.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Recognition */}
          <div className="mt-12 text-center">
            <Card className="bg-light-grey border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <Trophy className="h-12 w-12 text-deep-burgundy mx-auto mb-4" />
                <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-2">
                  Client Award Recognition
                </h3>
                <p className="text-medium-grey">
                  "Most Critical Solution in the Last 30 Years" — SC Magazine Awards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              What Colleagues & Teams Say
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Star className="h-8 w-8 text-deep-burgundy mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <blockquote className="text-lg text-dark-grey italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-montserrat font-semibold text-deep-burgundy">
                      {testimonial.author}
                    </div>
                    <div className="text-medium-grey text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-white px-6 py-3">
              See More Testimonials → Success Stories Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-20 bg-deep-burgundy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Build Predictable Growth Together?
          </h2>
          <p className="text-xl text-dusty-pink mb-8 leading-relaxed">
            Whether as a Fractional CMO or full-time leader, I partner with companies that are ready to scale smarter, not louder.
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
              <Mail className="mr-2 h-5 w-5" />
              Contact for Executive Opportunities
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

export default AboutPage;