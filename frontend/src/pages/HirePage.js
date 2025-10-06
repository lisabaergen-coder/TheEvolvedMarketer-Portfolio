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
  Eye
} from "lucide-react";

const HirePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const executiveHighlights = [
    {
      icon: <TrendingUp className="h-12 w-12 text-dark-teal" />,
      title: "Strategic Leadership",
      description: "Built and scaled high-performing global marketing teams across North America, Europe, and LATAM."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-dark-teal" />,
      title: "Growth Impact", 
      description: "Consistently delivered measurable ARR growth and pipeline expansion in SaaS and AI-driven tech organizations."
    },
    {
      icon: <Settings className="h-12 w-12 text-dark-teal" />,
      title: "Operational Excellence",
      description: "Built marketing tech stacks integrating HubSpot, Marketo, Salesforce, and Pardot."
    },
    {
      icon: <Zap className="h-12 w-12 text-dark-teal" />,
      title: "Brand & Demand Mastery",
      description: "Drove brand share-of-voice leadership and award-winning global campaigns."
    },
    {
      icon: <UserCheck className="h-12 w-12 text-dark-teal" />,
      title: "Trusted by Boards & Founders",
      description: "Partnered with CEOs and investors to translate marketing performance into enterprise value."
    }
  ];

  const careerHistory = [
    {
      period: "2023–2025",
      role: "Chief Marketing Officer",
      company: "Global AI & Risk Tech Company",
      description: "Built the company's first integrated marketing engine, driving measurable growth across AI-driven risk and fraud prevention verticals."
    },
    {
      period: "2022–2023", 
      role: "VP, Marketing",
      company: "Global Data & Analytics Provider",
      description: "Developed a marketing transformation roadmap and pipeline acceleration framework influencing multimillion-dollar revenue growth."
    },
    {
      period: "2019–2022",
      role: "Global CMO",
      company: "Behavioral Technology Firm", 
      description: "Architected a data-driven marketing and communications function that powered rapid ARR acceleration and industry recognition."
    },
    {
      period: "2015–2019",
      role: "VP, Marketing",
      company: "Cybersecurity Leader",
      description: "Drove the brand's transformation from emerging vendor to global category leader, resulting in strategic acquisition."
    }
  ];

  const awards = [
    {
      title: "10 Influential Female Business Leaders (2023)",
      organization: "Business Leaders Review",
      image: "https://images.unsplash.com/photo-1594938384824-022767a58e11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmV8ZW58MHx8fHwxNzU5NzI0NTUzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Woman Leader of the Year (2019)",
      organization: "CIO Look",
      image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmV8ZW58MHx8fHwxNzU5NzI0NTUzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Marketing Team of the Year (2016)",
      organization: "Golden Bridge Awards",
      image: "https://images.unsplash.com/photo-1646296066880-c61cac79470b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGxlYWRlcnNoaXB8ZW58MHx8fHwxNzU5NzI0NTUzfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Biometrics Marketing Director of the Year (2017)",
      organization: "TMT Awards",
      image: "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlcnNoaXB8ZW58MHx8fHwxNzU5NzI0NTUzfDA&ixlib=rb-4.1.0&q=85"
    }
  ];

  const testimonials = [
    {
      quote: "Lisa is the rare executive who combines vision with flawless execution. She's the kind of CMO who builds both results and trust.",
      author: "Former SVP, Technology Firm"
    },
    {
      quote: "A passionate executive who thrives on innovation and team empowerment. Lisa doesn't follow the beaten path — she builds the roadmap.",
      author: "Director of Communications, Fintech Company"
    },
    {
      quote: "Lisa's leadership transformed our marketing from chaos to clarity. She inspires teams and drives measurable success.",
      author: "Senior Marketing Manager, SaaS Company"
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
              <a href="/hire" className="text-deep-burgundy font-medium">Hire Lisa</a>
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
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-light-grey">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Professional Headshot */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gradient-to-br from-light-grey to-dusty-pink rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594938384824-022767a58e11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmV8ZW58MHx8fHwxNzU5NzI0NTUzfDA&ixlib=rb-4.1.0&q=85"
                  alt="Lisa Baergen - Professional Executive Headshot"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Professional Badge */}
              <div className="absolute -bottom-6 -right-6 w-32 h-20 bg-deep-burgundy rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-montserrat font-bold">CMO</span>
              </div>
            </div>
            
            {/* Hero Content */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <Badge className="bg-dusty-pink text-deep-burgundy mb-4">
                  Building Predictable Growth
                </Badge>
                <h1 className="text-5xl sm:text-6xl font-montserrat font-bold text-deep-burgundy leading-tight mb-6">
                  Looking for Your Next CMO or 
                  <span className="block text-dark-teal">Marketing Leader?</span>
                </h1>
                <h2 className="text-2xl text-medium-grey font-medium mb-6 leading-relaxed">
                  I build scalable, predictable growth engines — the kind that transform startups into acquisition-ready companies and help established brands reach new markets.
                </h2>
                <p className="text-lg text-medium-grey leading-relaxed">
                  With 25+ years in SaaS, B2B, and cybersecurity, I've led marketing transformations that align vision, data, and execution to deliver measurable impact.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-deep-burgundy hover:bg-bright-burgundy text-white px-8 py-4 text-lg"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Download Executive Resume
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-white px-8 py-4 text-lg"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Lisa / Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6 border-b-4 border-bright-burgundy pb-2 inline-block">
                  About Lisa Baergen, APR, MCC — The Evolved Marketer
                </h2>
                <p className="text-xl text-medium-grey leading-relaxed mb-6">
                  Lisa is a growth-focused marketing leader with a proven history of scaling SaaS, cybersecurity, and B2B organizations from early-stage to global acquisition.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed mb-6">
                  Her work bridges brand storytelling with data intelligence — integrating strategy, systems, and leadership to deliver predictable, measurable growth.
                </p>
                <p className="text-lg text-medium-grey leading-relaxed mb-8">
                  She has built, led, and optimized global marketing teams that have sourced up to 40% of company pipeline and driven multimillion-dollar valuation growth.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-montserrat font-semibold text-deep-burgundy mb-4">
                  Specialties:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Go-to-Market Strategy",
                    "Category Design", 
                    "Demand Generation",
                    "Brand Positioning",
                    "Marketing Operations",
                    "Fractional-to-Full-Time CMO Leadership"
                  ].map((specialty, index) => (
                    <Badge key={index} className="bg-dusty-pink text-deep-burgundy text-sm py-1 px-3">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-dark-teal hover:bg-deep-burgundy text-white px-6 py-3">
                  <Download className="mr-2 h-5 w-5" />
                  Download "Why Hire Lisa" Infographic
                </Button>
                <Button variant="outline" className="border-dark-teal text-dark-teal hover:bg-dark-teal hover:text-white px-6 py-3">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Read CIO Look Article
                </Button>
              </div>
            </div>
            
            {/* Infographic Placeholder */}
            <div className="relative">
              <Card className="bg-light-grey border-0 shadow-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-full aspect-[4/5] bg-gradient-to-br from-deep-burgundy to-dark-teal rounded-2xl flex items-center justify-center mb-6">
                    <div className="text-center text-white">
                      <Trophy className="h-16 w-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-montserrat font-bold mb-2">Why Hire Lisa</h3>
                      <p className="text-dusty-pink">Executive Infographic</p>
                    </div>
                  </div>
                  <Button className="w-full bg-deep-burgundy hover:bg-bright-burgundy text-white">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Highlights */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Leadership That Builds Predictable Growth
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto italic">
              "Lisa brings strategy, data, and human insight together — creating growth systems that last."
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveHighlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 group-hover:scale-110 transition-transform">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-medium-grey leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Career Snapshot */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Executive Career Snapshot
            </h2>
            <p className="text-lg text-medium-grey max-w-3xl mx-auto">
              Company names anonymized for confidentiality — detailed resume available on request.
            </p>
          </div>
          
          <div className="space-y-8">
            {careerHistory.map((role, index) => (
              <Card key={index} className="border-l-4 border-l-deep-burgundy bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="text-center lg:text-left">
                      <Badge className="bg-dark-teal text-white mb-2">
                        {role.period}
                      </Badge>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-montserrat font-semibold text-deep-burgundy mb-1">
                        {role.role}
                      </h3>
                      <p className="text-dark-teal font-medium mb-3">
                        {role.company}
                      </p>
                      <p className="text-medium-grey leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <Building className="h-12 w-12 text-dusty-pink mx-auto" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-medium-grey italic mb-6">
              Full confidential resume available upon request. Client and revenue data redacted for privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-deep-burgundy hover:bg-bright-burgundy text-white px-6 py-3">
                <FileText className="mr-2 h-5 w-5" />
                Request Full Executive Resume
              </Button>
              <Button variant="outline" className="border-dark-teal text-dark-teal hover:bg-dark-teal hover:text-white px-6 py-3">
                <Linkedin className="mr-2 h-5 w-5" />
                View Public LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              Awards & Professional Recognition
            </h2>
            <p className="text-xl text-medium-grey max-w-3xl mx-auto">
              Recognized globally for excellence in marketing, leadership, and brand transformation.
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
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-white/90 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs text-deep-burgundy font-medium px-2">View Article</span>
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

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold text-deep-burgundy mb-6">
              What Colleagues & Leaders Say
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
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
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-deep-burgundy text-deep-burgundy hover:bg-deep-burgundy hover:text-white px-6 py-3">
              See Full Testimonials → Success Stories Page
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Connect / CTA Section */}
      <section className="py-20 bg-deep-burgundy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Discuss a Leadership Opportunity?
          </h2>
          <p className="text-xl text-dusty-pink mb-8 leading-relaxed">
            I'm open to exploring CMO or VP-level marketing roles with companies focused on innovation, growth, and measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-deep-burgundy hover:bg-light-grey px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-deep-burgundy px-8 py-4 text-lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Public Resume
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

export default HirePage;