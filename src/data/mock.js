// Mock data for Lisa Baergen's portfolio website
export const mockData = {
  // Hero section data
  hero: {
    name: "Lisa Baergen",
    title: "The Evolved Marketer", 
    subtitle: "Data-driven CMO with 25+ years scaling SaaS startups, driving revenue growth, and leading successful acquisitions.",
    calendlyUrl: "https://calendly.com/theevolvedmarketer",
    resumeUrl: "https://customer-assets.emergentagent.com/job_a933ac4e-53ab-467f-8f6e-555752960760/artifacts/r1xzn8g9_Baergen_Resume_20250920.pdf",
    heroImage: "https://images.unsplash.com/photo-1585554414787-09b821c321c0",
    videoPlaceholder: "Coming Soon: Introduction Video"
  },

  // KPI highlights
  kpis: [
    { value: "90x", label: "Revenue Growth", description: "At NuData Security" },
    { value: "150%", label: "ARR Growth", description: "At BehavioSec" },
    { value: "$42M", label: "Pipeline Generated", description: "At LexisNexis" },
    { value: "25+", label: "Years Experience", description: "In Marketing Leadership" }
  ],

  // Services
  services: [
    {
      id: 1,
      title: "Growth Audit",
      description: "Comprehensive analysis of your marketing stack, processes, and growth potential.",
      price: "$3,000/month",
      features: ["Marketing Stack Analysis", "Process Optimization", "Growth Recommendations", "Revenue Share Option Available"],
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
      cta: "Learn More"
    },
    {
      id: 2,
      title: "Fractional CMO-as-a-Service",
      description: "Strategic marketing leadership for SaaS companies with $500K-$20M ARR.",
      price: "Retainer Model",
      features: ["Strategic Planning", "Team Leadership", "Go-to-Market Strategy", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      cta: "Book Consultation"
    },
    {
      id: 3,
      title: "GTM Playbook",
      description: "Complete go-to-market strategy including messaging, positioning, and demand generation.",
      price: "Custom Pricing",
      features: ["Messaging & Positioning", "Demand Generation", "Channel Strategy", "Launch Planning"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      cta: "Get Started"
    }
  ]
};
