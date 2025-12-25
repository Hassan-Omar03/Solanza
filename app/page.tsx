"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Payment from "@/components/Payment"

import { Card, CardContent } from "@/components/ui/card"

import {
  ArrowRight,
  Sparkles,
  Award,
  Code,
  TrendingUp,
  Palette,
  Search,
  Star,
  Globe,
  Zap,
  Mail,
  Shield,
  Share2,
  ShoppingCart,
  PenTool,
  Video,
  Smartphone,
  Megaphone,
  MessageCircle,
  Rocket,
  Monitor,
  Layout,
  Briefcase,
  Store,
  Calendar,
  Gauge,
  Image as ImageIcon,   // ✅ FIXED
  Camera,
  BarChart3,
  MapPin,
  CheckCircle2,
  Linkedin,
  Youtube,
  Package,
  Users,
  FileText,
  Headphones,
  Mic,
  X,
  Menu,
  Play,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react"


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const [activeCategory, setActiveCategory] = useState<string | null>(null)
const PREVIEW_COUNT = 3


  const whatsappNumber = "+971522740909" // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your services.`

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "300+", label: "Happy Clients" },
    { value: "10+", label: "Years Experience" },
    { value: "98%", label: "Success Rate" },
  ]

  const features = [
    { icon: Award, title: "Premium Quality", description: "Excellence in every project delivery" },
    { icon: Zap, title: "Fast Delivery", description: "Quick turnaround times" },
    { icon: Shield, title: "Secure & Reliable", description: "Your data is always safe" },
    { icon: Users, title: "Expert Team", description: "Skilled professionals" },
  ]

  const topServices = [
    { name: "Website Development", demand: "High Demand", icon: Globe },
    { name: "Social Media Marketing", demand: "Most Popular", icon: Share2 },
    { name: "SEO Services", demand: "Top Rated", icon: Search },
    { name: "Video Editing", demand: "Trending", icon: Video },
  ]
  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}



  const serviceCategories = [
    {
      category: "Website Development",
      services: [
        {
          name: "Website Design (UI/UX)",
          icon: Layout,
          description: "Create stunning, user-friendly interfaces that captivate your audience. Our designs focus on intuitive navigation, modern aesthetics, and conversion optimization to ensure your website not only looks great but drives real business results.",
        },
        {
          name: "Business Website",
          icon: Briefcase,
          description: "Professional corporate websites that establish your brand authority and credibility. We build responsive, SEO-optimized sites with compelling content that effectively communicate your value proposition.",
        },
        {
          name: "E-commerce Website",
          icon: ShoppingCart,
          description: "Full-featured online stores with secure payment integration, inventory management, and seamless checkout experiences. We create scalable e-commerce solutions that drive sales and provide exceptional shopping experiences.",
        },
        {
          name: "Booking Website",
          icon: Calendar,
          description: "Streamlined reservation systems with real-time availability, automated confirmations, and calendar integrations. Perfect for hotels, restaurants, services, and event venues looking to simplify their booking process.",
        },
        {
          name: "Website Speed Optimization",
          icon: Gauge,
          description: "Boost your site's performance with advanced optimization techniques. We reduce load times, improve Core Web Vitals, and enhance user experience, leading to better SEO rankings and increased conversions.",
        },
      ],
    },
    {
      category: "Graphics Design",
      services: [
        {
          name: "Logo Design",
          icon: PenTool,
          description: "Memorable brand identities that capture your essence and stand out in the market. We create versatile, timeless logos with comprehensive brand guidelines to ensure consistent visual identity across all platforms.",
        },
        {
          name: "Social Media Graphics",
          icon: ImageIcon,
          description: "Eye-catching visuals tailored for each platform's specifications. From Instagram posts to LinkedIn banners, we design scroll-stopping graphics that boost engagement and reinforce brand identity.",
        },
        {
          name: "Photo Editing",
          icon: Camera,
          description: "Professional retouching, color correction, and creative enhancements that bring your images to life. We transform ordinary photos into stunning visuals perfect for marketing materials and social media.",
        },
      ],
    },
    {
      category: "Digital Marketing",
      services: [
        {
          name: "Social Media Marketing",
          icon: Share2,
          description: "Comprehensive social media strategies that build brand awareness and community engagement. We manage content creation, scheduling, and analytics across all major platforms to grow your online presence.",
        },
        {
          name: "SEO",
          icon: Search,
          description: "Data-driven search engine optimization that improves your organic rankings. Our approach includes keyword research, on-page optimization, technical SEO, and link building for sustainable traffic growth.",
        },
        {
          name: "Google Ads Setup",
          icon: Megaphone,
          description: "Strategic paid advertising campaigns that maximize ROI. We handle keyword research, ad creation, bid management, and conversion tracking to ensure your budget delivers optimal results and qualified leads.",
        },
        {
          name: "Google Business Profile",
          icon: Store,
          description: "Optimize your local search presence with a fully configured Google Business Profile. We set up and optimize your listing with compelling descriptions and high-quality images to improve local visibility.",
        },
        {
          name: "Google Map Location",
          icon: MapPin,
          description: "Accurate map listings that help customers find your physical locations effortlessly. We ensure your business appears correctly on Google Maps with precise coordinates and updated information.",
        },
        {
          name: "Facebook Ads",
          icon: Share2,
          description: "Targeted Facebook advertising campaigns that reach your ideal customers. We create compelling ad creatives, optimize audience targeting, and manage budgets to maximize engagement and conversions.",
        },
        {
          name: "Instagram Ads",
          icon: Camera,
          description: "Visually stunning Instagram campaigns that stop the scroll. From Stories to Reels, we craft platform-native ads with strategic targeting and compelling CTAs that resonate with Instagram's user base.",
        },
        {
          name: "WhatsApp Business Setup",
          icon: MessageCircle,
          description: "Professional WhatsApp Business accounts that enhance customer communication. We configure automated greetings, quick replies, catalogs, and business information to streamline customer service.",
        },
        {
          name: "TikTok Ads",
          icon: Video,
          description: "Viral-worthy TikTok campaigns that capture Gen Z audiences. We create authentic, entertaining ad content that aligns with TikTok's unique culture while driving brand awareness and conversions.",
        },
        {
          name: "LinkedIn Ads",
          icon: Linkedin,
          description: "B2B-focused LinkedIn advertising that reaches decision-makers. We leverage LinkedIn's advanced targeting to create thought leadership content that generates quality leads and establishes industry authority.",
        },
        {
          name: "Email & Content Marketing",
          icon: Mail,
          description: "Strategic email campaigns and valuable content that nurture leads. We create engaging newsletters and content strategies that build lasting relationships with your audience and deliver measurable ROI.",
        },
        {
          name: "YouTube SEO",
          icon: Youtube,
          description: "Optimize your YouTube channel for maximum discoverability. We handle keyword research, metadata optimization, and thumbnail design to improve rankings, increase views, and grow your subscriber base.",
        },
        {
          name: "Shopify Marketing",
          icon: Package,
          description: "Comprehensive marketing strategies for Shopify stores. From abandoned cart recovery to product promotions, we implement proven tactics that increase traffic and boost e-commerce revenue.",
        },
        {
          name: "Shopify Store Setup",
          icon: Store,
          description: "Complete Shopify store creation from scratch. We handle theme customization, product setup, payment integration, and shipping configuration to launch your online store quickly and professionally.",
        },
        {
          name: "Lead Generation",
          icon: Target,
          description: "Strategic lead generation campaigns that fill your sales pipeline. We use multi-channel approaches including landing pages, forms, and targeted ads to attract and capture high-quality leads.",
        },
      ],
    },
    {
      category: "Video Editing & 3D Animation",
      services: [
        {
          name: "Video Editing",
          icon: Video,
          description: "Professional video editing that tells your brand story compellingly. We handle color grading, sound design, transitions, and effects to create polished videos that engage viewers and drive action.",
        },
        {
          name: "Short-form Content",
          icon: Smartphone,
          description: "Attention-grabbing Reels, Shorts, and TikToks optimized for social media algorithms. We create fast-paced, engaging content that maximizes views, shares, and platform virality.",
        },
        {
          name: "3D Animation",
          icon: Play,
          description: "Stunning 3D animations that bring your concepts to life. From product showcases to explainer videos, we create immersive visual experiences that captivate audiences and communicate complex ideas simply.",
        },
      ],
    },
    {
      category: "Business & Consulting",
      services: [
        {
          name: "Digital Business Setup",
          icon: Rocket,
          description: "Complete digital infrastructure for new businesses. We help you establish your online presence, set up essential tools, implement systems, and create strategies to launch your venture successfully.",
        },
        {
          name: "Online Strategy & Consultation",
          icon: Lightbulb,
          description: "Expert guidance on digital transformation and growth strategies. We analyze your business, identify opportunities, and provide actionable recommendations to improve your online performance and achieve your goals.",
        },
      ],
    },
    {
      category: "Music & Audio",
      services: [
        {
          name: "Audio Editing",
          icon: Headphones,
          description: "Professional audio post-production including noise reduction, equalization, and mastering. We enhance your recordings to broadcast quality, perfect for podcasts, videos, music, and professional presentations.",
        },
        {
          name: "Voice-over & Background Audio",
          icon: Mic,
          description: "Professional voice-over recording and background music selection. We provide clear, engaging narration and perfectly matched audio tracks that enhance your content and maintain audience attention.",
        },
      ],
    },
  ]

const portfolio = [
  {
    title: "AB SMD Construction Website",
    category: "Construction & Corporate Website",
    image: "/absmd.png",
    shortDesc: "Professional construction company website with service-focused layout.",
    fullDesc:
      "A clean and professional construction company website designed to showcase services, completed projects, and company credibility. Built with a modern UI, responsive design, and optimized structure to attract corporate clients and project leads.",
    url: "https://absmd.us",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "BIM Africa Quotation System",
    category: "Business Web Application",
    image: "/quotation.png",
    shortDesc: "Online quotation system for BIM services and clients.",
    fullDesc:
      "A custom quotation web application that allows clients to request BIM service quotations efficiently. The system streamlines communication, automates quotation workflows, and improves lead handling for BIM Africa’s enterprise clients.",
    url: "https://quotation.bim.africa",
    tech: ["React", "Form Automation", "Business Logic"],
  },
  {
    title: "BIM Africa Official Website",
    category: "Corporate & Engineering Website",
    image: "/bim.png",
    shortDesc: "Corporate website for BIM engineering and consulting firm.",
    fullDesc:
      "A modern corporate website built for BIM Africa to establish a strong digital presence. The site highlights engineering expertise, BIM services, global reach, and professional credibility with a clean and authoritative design.",
    url: "https://bim.africa",
    tech: ["Next.js", "SEO Optimization", "Corporate Branding"],
  },
  {
    title: "Hawar Homes Real Estate",
    category: "Real Estate & Booking Website",
    image: "/homes.png",
    shortDesc: "Luxury vacation homes and short-term rental platform.",
    fullDesc:
      "A premium real estate website for Hawar Homes, focused on luxury vacation rentals. Features include property listings, detailed pages, inquiry system, and a user-friendly interface tailored for high-end real estate clients.",
    url: "https://hawarhomes.com",
    tech: ["Next.js", "Property Listings", "UI/UX Design"],
  },
  {
    title: "Hoda Shine Services",
    category: "Cleaning & Services Website",
    image: "/cleaning.png",
    shortDesc: "Service-based website for professional cleaning company.",
    fullDesc:
      "A clean and conversion-focused website for a professional cleaning services company. Designed to clearly present services, pricing structure, and contact options to generate leads and service inquiries.",
    url: "https://hodashineservices.com",
    tech: ["Business Website", "Lead Generation", "Responsive UI"],
  },
  {
    title: "Asrar Salon & Spa",
    category: "Beauty & Salon Website",
    image: "/salon.png",
    shortDesc: "Elegant salon website with brand-focused design.",
    fullDesc:
      "A stylish and modern salon website created for Asrar Salon & Spa. The design emphasizes brand aesthetics, services, and customer engagement with a smooth layout and mobile-friendly experience.",
    url: "https://asrarsalon.com",
    tech: ["Brand Design", "UI/UX", "Mobile Optimization"],
  },
  {
    title: "Mauritius Travel & Tours",
    category: "Travel & Tourism Website",
    image: "/travel.png",
    shortDesc: "Tourism website showcasing travel packages and destinations.",
    fullDesc:
      "A tourism-focused website designed to promote Mauritius travel packages, destinations, and experiences. Built with engaging visuals, clear package details, and inquiry-based conversion flow.",
    url: "https://mauritiustraveltour.com",
    tech: ["Tourism Website", "SEO", "Content Strategy"],
  },
  {
    title: "Construction MU Project",
    category: "Construction Portfolio Website",
    image: "/construction.png",
    shortDesc: "Modern construction portfolio website with clean UI.",
    fullDesc:
      "A modern and visually structured construction portfolio website showcasing projects, services, and company strengths. Built to demonstrate credibility and attract construction-related business opportunities.",
    url: "https://construction-mu-sandy.vercel.app/",
    tech: ["Next.js", "Tailwind CSS", "Portfolio Design"],
  },
]

  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      role: "CEO, Dubai Properties",
      content: "Nuvera transformed our digital presence completely. The website they built is stunning and our bookings have tripled. Their ongoing support is exceptional.",
      rating: 5,
    },
    {
      name: "Fatima Rahman",
      role: "Founder, Bengal Fashion",
      content: "The social media marketing campaign exceeded all expectations. We went from 2000 to 50000 followers and our sales increased by 500%. Highly recommended!",
      rating: 5,
    },
    {
      name: "Dr. Sarah Williams",
      role: "Medical Director",
      content: "The appointment booking system has revolutionized our practice. Patient satisfaction is up and no-shows are down significantly. Professional team and excellent execution.",
      rating: 5,
    },
    {
      name: "Omar Hassan",
      role: "Restaurant Owner",
      content: "Our online ordering system and social media presence have been game-changers. Revenue is up 300% and we're reaching customers we never could before. Worth every penny.",
      rating: 5,
    },
    {
      name: "Jennifer Chen",
      role: "Startup Founder",
      content: "The animated explainer video Nuvera created was instrumental in securing our Series A funding. Their creativity and technical skills are world-class.",
      rating: 5,
    },
    {
      name: "Marcus Thompson",
      role: "Fitness Brand Owner",
      content: "They grew our Instagram from 5K to 200K followers organically. The content strategy and execution were perfect. Our brand has never been stronger.",
      rating: 5,
    },
  ]
  const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
   transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const, // ✅ cubic-bezier (easeOut)
    },
  },
}


  

  return (
    
    <div className="w-full bg-gradient-to-br from-black via-[#0b1c3d] to-[#1e3a8a] text-white min-h-screen">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </a>


    {/* Hero Section */}
<section
  id="hero"
  className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden"
>
  <motion.div
    variants={heroContainer}
    initial="hidden"
    animate="visible"
    className="relative w-full max-w-7xl mx-auto px-4 py-20 text-center z-10"
  >
    {/* Badge */}
    <motion.div
      variants={heroItem}
      className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 border border-gray-300 backdrop-blur-sm"
    >
      <Sparkles className="h-5 w-5 text-gray-300 animate-pulse" />
      <span className="text-sm font-medium text-gray-300">
        Digital Services Excellence
      </span>
    </motion.div>

   <motion.h1
  variants={heroItem}
  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight shimmer-text"
>
  Transform Your Business Digitally
</motion.h1>


    {/* Description */}
    <motion.p
      variants={heroItem}
      className="text-base md:text-lg lg:text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
    >
      Comprehensive digital solutions from web development to social media growth.
      Serving UAE, Bangladesh, and worldwide clients with premium services.
    </motion.p>

    {/* Buttons */}
    <motion.div
      variants={heroItem}
      className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() =>
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="px-8 py-6 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg font-semibold hover:shadow-xl transition-all inline-flex items-center justify-center"
      >
        Explore Services
        <ArrowRight className="ml-2 h-5 w-5" />
      </motion.button>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-6 border border-gray-300 text-gray-300 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center"
      >
        Get Started Now
      </motion.a>
    </motion.div>

    {/* Stats */}
    <motion.div
      variants={heroContainer}
      className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-20"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.label}
          variants={heroItem}
          whileHover={{ y: -6 }}
          className="text-center"
        >
          <div className="text-3xl md:text-5xl font-bold text-gray-300 mb-2">
            {stat.value}
          </div>
          <div className="text-gray-400 font-medium text-sm">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
</section>


      {/* About Section */}
      <section id="about" className="w-full py-20 md:py-28 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6 border border-gray-300 backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-gray-300" />
              <span className="text-sm font-medium text-gray-300">About Our Company</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-300">
              Welcome to Nuvera Digital Solutions
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                At Nuvera, we believe that digital transformation is not just about technology—it's about creating
                meaningful connections between businesses and their audiences. With over a decade of collective
                expertise, we've partnered with hundreds of companies across the globe to unlock their digital
                potential.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Our mission is simple yet powerful: to empower businesses with cutting-edge digital solutions that drive
                growth, enhance brand visibility, and create lasting impact. We don't just deliver services; we build
                long-term partnerships with our clients, understanding their unique challenges and crafting tailored
                strategies that deliver measurable results.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                From startups to established enterprises, from UAE to Bangladesh and beyond, Nuvera has been the trusted
                partner for businesses seeking premium digital services. Our team of skilled professionals combines
                technical excellence with creative innovation to deliver solutions that exceed expectations.
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-700">
              <p className="text-white font-semibold text-2xl mb-6">Our Core Values</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { title: "Excellence", desc: "Delivering premium quality in everything we do" },
                  { title: "Innovation", desc: "Staying ahead of digital trends and technologies" },
                  { title: "Integrity", desc: "Building trust through transparency and honesty" },
                ].map((value) => (
                  <div key={value.title} className="p-4">
                    <h4 className="text-white font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-white text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/10 transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Services Section */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-300">Most-Selling Services</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our highest-demand services trusted by businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topServices.map((service) => (
              <div
                key={service.name}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/10 hover:scale-105 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-bold text-gray-300">{service.name}</h3>
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-black text-gray-300 text-xs font-semibold">
                  {service.demand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Services Section */}
      <section id="services" className="w-full py-20 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Our Complete Services</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Comprehensive digital solutions across all major categories
            </p>
          </div>

         {serviceCategories.map((category) => {
  const isActive = activeCategory === category.category
  const isHidden = activeCategory && !isActive

  if (isHidden) return null

  return (
    <div key={category.category} className="mb-16">
      {/* Category Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white flex items-center space-x-3">
        <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
        <span>{category.category}</span>
      </h3>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(isActive
          ? category.services
          : category.services.slice(0, PREVIEW_COUNT)
        ).map((service) => (
          <div
            key={service.name}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:bg-white/10 hover:scale-105 transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center mb-4">
              <service.icon className="h-6 w-6 text-white" />
            </div>

            <h4 className="text-base font-bold mb-2 text-white">
              {service.name}
            </h4>

            <p className="text-white text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* View More / Back */}
      {category.services.length > PREVIEW_COUNT && (
        <div className="mt-6">
          <button
            onClick={() =>
              setActiveCategory(isActive ? null : category.category)
            }
            className="text-white font-semibold hover:text-white transition"
          >
            {isActive ? "← Back to All Categories" : "View More →"}
          </button>
        </div>
      )}
    </div>
  )
})}
          <Payment />


          <div className="text-center mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Discuss Your Project on WhatsApp
            </a>
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="w-full py-12 sm:py-20 md:py-28  ">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto">
              Scroll to discover successful projects across diverse industries
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8"
          >
            {portfolio.map((project) => (
             <motion.div
  key={project.title}
  variants={itemVariants}
  whileHover={{ y: -6 }}
  className="overflow-hidden"
>
  {/* IMAGE */}
  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover object-center"
      sizes="(max-width: 768px) 100vw,
             (max-width: 1024px) 50vw,
             33vw"
    />
  </div>

  {/* TEXT BELOW IMAGE */}
  <div className="p-4">
    <h3 className="text-base sm:text-lg font-bold text-white mb-1">
      {project.title}
    </h3>

    <p className="text-sm text-white mb-3">
      {expandedProject === project.title
        ? project.fullDesc
        : project.shortDesc}
    </p>

    <div className="flex gap-4">
      <button
        onClick={() =>
          setExpandedProject(
            expandedProject === project.title ? null : project.title
          )
        }
        className="text-sm font-semibold text-white"
      >
        {expandedProject === project.title ? "Read Less" : "Read More"}
      </button>

      <Link
        href={project.url}
        target="_blank"
        className="text-sm font-semibold text-white inline-flex items-center"
      >
        View Project
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </div>
</motion.div>


            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 sm:py-20 md:py-28 bg-transparent border-t border-yellow-500/10 relative overflow-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">
              Client Success Stories
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-2xl mx-auto">
              See how we've transformed businesses through digital excellence
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} variants={itemVariants}>
                <Card className="h-full ">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex mb-3 sm:mb-4"
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 fill-gray-300 text-white" />
                      ))}
                    </motion.div>
                    <p className="text-white mb-3 sm:mb-4 italic text-xs sm:text-sm md:text-base">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </motion.div>
                      <div>
                        <div className="font-semibold text-white text-xs sm:text-sm md:text-base">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full py-12 sm:py-20 md:py-28 ">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block mb-4 sm:mb-6"
            >
              <Award className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-white" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients. Let us help you achieve digital excellence with our comprehensive
              suite of services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full sm:w-auto"
            >
             <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 text-white text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 hover:shadow-2xl font-semibold w-full sm:w-auto"
  >
    Start Your Project Now
    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
  </Button>
</a>

            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
