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
  Play,
  ChevronRight,
  DollarSign,
  Percent,
  Activity
} from "lucide-react";

const SuccessStoriesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const caseStudies = [
    {
      title: "Lynx Tech — From Startup to Global Player in 18 Months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbnxlbnwwfHx8fDE3NTk3MjQ0Mzh8MA&ixlib=rb-4.1.0&q=85",
      summary: "Built the brand and marketing foundation from the ground up, establishing Lynx Tech as a global force in AI-driven fraud prevention and AML.",
      results: [
        "+53.7% ACV growth (2024)",
        "8× pipeline expansion", 
        "€185 cost per lead (vs. €500 industry avg.)",
        "+887% social growth, +515K impressions"
      ],
      category: "Startup Growth"
    },
    {
      title: "NuData Security — Growth Engine to Global Acquisition",
      image: "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8fDE3NTk3MjQ0NDN8MA&ixlib=rb-4.1.0&q=85",
      summary: "Developed and led a multi-channel ABM strategy engaging senior enterprise decision-makers.",
      results: [
        "90× ARR growth, leading to Mastercard acquisition",
        "25% of revenue sourced via marketing",
        "Winner of \"Most Critical Solution in 30 Years\" (SC Magazine Awards)"
      ],
      category: "Strategic Acquisition"
    },
    {
      title: "Orcas in the City — Purpose-Driven Marketing That Lasts",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      summary: "Designed a creative public awareness campaign that became a national education model. Recognized by the Canadian Public Relations Society and published in Des Campagnes de Communication Réussies, Tome 2 (PUQ Publications).",
      results: [
        "National education model adoption",
        "CPRS recognition and publication",
        "Award-winning creative campaign",
        "Lasting public awareness impact"
      ],
      category: "Purpose-Driven Campaign"
    }
  ];

  const strategicSteps = [
    {
      icon: <Target className="h-8 w-8 text-deep-burgundy" />,
      title: "Clarify market positioning"
    },
    {
      icon: <Compass className="h-8 w-8 text-deep-burgundy" />,
      title: "Build and align your GTM roadmap"
    },
    {
      icon: <Zap className="h-8 w-8 text-deep-burgundy" />,
      title: "Design integrated campaign frameworks"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-deep-burgundy" />,
      title: "Leverage data for real-time optimization"
    },
    {
      icon: <Users2 className="h-8 w-8 text-deep-burgundy" />,
      title: "Empower and mentor internal teams"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-deep-burgundy" />,
      title: "Drive measurable revenue growth"
    }
  ];

  const testimonials = [
    {
      quote: "Lisa is a passionate executive who thrives on innovation and thinking outside the box.",
      author: "Magali Vander Vorst",
      title: "Cybersecurity Storyteller, Mastercard"
    },
    {
      quote: "Lisa built and led a global, multilingual team — turning complexity into momentum.",
      author: "Maria Sanchez Gomez, PhD",
      title: "Marketing Director, AI & Big Data"
    },
    {
      quote: "Lisa's leadership changed how I approach marketing — she creates both structure and inspiration.",
      author: "Karen Taylor",
      title: "Director, Customer Success, Mastercard"
    },
    {
      quote: "Lisa combines vision with operational rigor — a true builder of growth engines.",
      author: "Jens Hinrichsen",
      title: "Growth Advisor"
    },
    {
      quote: "Having Lisa at the helm meant clarity, drive, and measurable progress every single quarter.",
      author: "Chantelle Benesh",
      title: "Global Marketing Lead"
    }
  ];

  const awards = [
    {
      title: "10 Influential Female Business Leaders (2023)",
      organization: "Business Leaders Review",
      link: "https://businessleadersreview.com/lisa-baergen-a-proficient-leader-with-terrific-business-acumen/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbnxlbnwwfHx8fDE3NTk3MjQ0Mzh8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Woman Leader of the Year (2019)",
      organization: "CIO Look",
      link: "https://ciolook.com/lisa-baergen-a-savvy-marketing-and-pr-specialist/",
      image: "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8fDE3NTk3MjQ0NDN8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Marketing Team of the Year (2016)",
      organization: "Golden Bridge Awards",
      link: "https://globeeawards.com/2016-winners-golden-bridge-awards/",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg"
    },
    {
      title: "Biometrics Marketing Director of the Year (2017)",
      organization: "TMT Awards",
      image: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8fDE3NTk3MjQ0NDN8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "APR Accreditation (CPRS)",
      organization: "Work published in Des Campagnes de Communication Réussies, Tome 2 (PUQ Publications)",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbnxlbnwwfHx8fDE3NTk3MjQ0Mzh8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "\"Most Critical Solution in 30 Years\"",
      organization: "SC Magazine Award",
      link: "https://cybersecurity-excellence-awards.com/candidates/nudetect-by-nudata-security/",
      image: "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8fDE3NTk3MjQ0NDN8MA&ixlib=rb-4.1.0&q=85"
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
              <a href="/about" className="text-dark-grey hover:text-deep-burgundy transition-colors">About</a>
              <a href="/success-stories" className="text-deep-burgundy font-medium">Success Stories</a>
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
                  Growth That Speaks for
                  <span className="block text-dark-teal">Itself</span>
                </h1>
                <h2 className="text-2xl text-medium-grey font-medium mb-6 leading-relaxed">
                  Behind every metric is a strategy — and behind every strategy, a team.
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  I help companies turn complexity into momentum and ideas into measurable growth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-deep-burgundy hover:bg-bright-burgundy text-white px-8 py-4 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Let's Talk Growth
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-white px-8 py-4 text-lg"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Resume
                </Button>
              </div>
            </div>
            
            {/* Visual Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-deep-burgundy to-dark-teal">
                  <CardContent className="p-6 text-center text-white">
                    <Trophy className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-montserrat font-bold text-lg mb-2">Award-Winning</h3>
                    <p className="text-dusty-pink text-sm">Campaigns & Leadership</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-dark-teal to-deep-burgundy">
                  <CardContent className="p-6 text-center text-white">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="font-montserrat font-bold text-lg mb-2">90× Growth</h3>
                    <p className="text-dusty-pink text-sm">ARR to Acquisition</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-light-grey col-span-2">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="h-12 w-12 text-deep-burgundy mx-auto mb-4" />
                    <h3 className="font-montserrat font-bold text-lg text-deep-burgundy mb-2">
                      Measurable Impact Across Industries
                    </h3>
                    <p className="text-medium-grey text-sm">
                      SaaS • Cybersecurity • AI • Fintech
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Overview */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Case Studies
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Real strategies, measurable outcomes, lasting impact
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white h-full">
                <CardContent className="p-0">
                  <div className="aspect-[16/10] bg-gradient-to-br from-light-grey to-dusty-pink overflow-hidden">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <Badge className="bg-dusty-pink text-deep-burgundy mb-4">
                      {study.category}
                    </Badge>
                    <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-4 leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-medium-grey leading-relaxed mb-6">
                      {study.summary}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <h4 className="font-montserrat font-semibold text-deep-burgundy text-sm">
                        Key Results:
                      </h4>
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-deep-burgundy mt-0.5 flex-shrink-0" />
                          <span className="text-medium-grey text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-deep-burgundy hover:bg-bright-burgundy text-white group-hover:shadow-lg">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Impact Framework */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-to-br from-deep-burgundy to-dark-teal"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              How I Turn Strategy Into Results
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              A proven framework for transforming marketing challenges into growth opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicSteps.map((step, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-light-grey rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-deep-burgundy group-hover:scale-110 transition-all">
                    <span className="text-2xl font-montserrat font-bold text-deep-burgundy group-hover:text-white">
                      {index + 1}
                    </span>
                  </div>
                  <div className="mb-4 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-deep-burgundy leading-tight">
                    {step.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-dark-teal hover:bg-deep-burgundy text-white px-8 py-4 text-lg">
              Explore Fractional Leadership → Services Page
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              What Leaders, Peers & Teams Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <Star className="h-8 w-8 text-deep-burgundy mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <blockquote className="text-lg text-dark-grey italic mb-6 leading-relaxed flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <div className="font-montserrat font-semibold text-deep-burgundy">
                      {testimonial.author}
                    </div>
                    <div className="text-medium-grey text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-white px-6 py-3">
              <Linkedin className="mr-2 h-4 w-4" />
              Read More Testimonials → LinkedIn Recommendations
            </Button>
          </div>
        </div>
      </section>

      {/* Awards & Client Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Lisa's work has been recognized by leading organizations for innovation, leadership, and marketing impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <Award className="h-8 w-8 mx-auto mb-2" />
                        <span className="text-sm font-medium">View Details</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-montserrat font-semibold text-deep-burgundy mb-2 text-sm leading-tight">
                    {award.title}
                  </h3>
                  <p className="text-medium-grey text-sm">
                    {award.organization}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-20 bg-deep-burgundy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1462899006636-339e08d1844e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGdyb3d0aHxlbnwwfHx8fDE3NTk3MjQ0NDN8MA&ixlib=rb-4.1.0&q=85"
            alt="Corporate excellence"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
              Campaigns That Built Visibility & Momentum
            </h2>
            <p className="text-xl text-dusty-pink max-w-3xl mx-auto">
              Watch highlights from campaigns that transformed awareness into action.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 group hover:bg-white/20 transition-all cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                  Lynx Tech – Money Mules Campaign
                </h3>
                <p className="text-dusty-pink">
                  AI-driven fraud prevention awareness campaign
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 group hover:bg-white/20 transition-all cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Play className="h-10 w-10 text-white ml-1" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                  Lynx Tech – Global Brand Launch
                </h3>
                <p className="text-dusty-pink">
                  Startup to global player positioning campaign
                </p>
              </CardContent>
            </Card>
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
            Let's talk about how I can help your organization grow smarter, scale faster, and execute better.
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
              View Services
              <ArrowRight className="ml-2 h-5 w-5" />
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

export default SuccessStoriesPage;