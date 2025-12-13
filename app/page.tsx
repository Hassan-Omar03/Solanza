"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [contentLoaded, setContentLoaded] = useState(false)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Team" },
    { value: "15+", label: "Years of Excellence" },
  ]

  const features = [
    {
      icon: Code,
      title: "Premium Development",
      description: "Cutting-edge solutions built with latest technologies and best practices.",
    },
    {
      icon: Palette,
      title: "Sophisticated Design",
      description: "Elegant interfaces that blend aesthetics with seamless functionality.",
    },
    {
      icon: TrendingUp,
      title: "Performance Focused",
      description: "Lightning-fast delivery optimized for excellence and scalability.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Robust protection with industry-leading security standards.",
    },
  ]

  const serviceCategories = [
    {
      category: "Google & Digital Setup",
      services: [
        { icon: Globe, name: "Google Maps Location Setup", description: "Professional local SEO setup" },
        { icon: Share2, name: "Google Business Profile", description: "Complete profile optimization" },
        { icon: TrendingUp, name: "Online Presence Boost", description: "Brand visibility enhancement" },
        { icon: MessageCircle, name: "WhatsApp Business Setup", description: "Auto-reply & catalog integration" },
      ],
    },
    {
      category: "Website Development",
      services: [
        { icon: Code, name: "Business Website", description: "Professional business presence" },
        { icon: ShoppingCart, name: "E-commerce Website", description: "Shopify & WordPress solutions" },
        { icon: Smartphone, name: "Booking Website", description: "Online reservation system" },
        { icon: Zap, name: "SEO-Ready Structure", description: "Search engine optimized" },
      ],
    },
    {
      category: "Social Media & Branding",
      services: [
        { icon: Palette, name: "Logo Design", description: "Custom brand identity" },
        { icon: Share2, name: "Social Media Setup", description: "Instagram, Facebook, TikTok, YouTube" },
        { icon: PenTool, name: "Branding Kit", description: "Complete design system" },
        { icon: Video, name: "Video Editing", description: "Reels, Shorts, Promo videos" },
      ],
    },
    {
      category: "Social Media Growth (High Demand)",
      services: [
        { icon: TrendingUp, name: "Real Followers Growth", description: "Worldwide audience expansion" },
        { icon: Star, name: "Likes Boost", description: "Real engagement increase" },
        { icon: Rocket, name: "Reel Views Boost", description: "Video visibility enhancement" },
        { icon: MessageCircle, name: "Comments Boost", description: "Real engagement from community" },
      ],
    },
    {
      category: "Online Marketing Services",
      services: [
        { icon: Megaphone, name: "Google Ads Setup", description: "Lead generation campaigns" },
        { icon: Share2, name: "Facebook/Instagram Ads", description: "Targeted advertising" },
        { icon: TrendingUp, name: "Retargeting Ads", description: "Convert warm leads" },
        { icon: Mail, name: "Email Marketing", description: "Automation & strategy" },
      ],
    },
    {
      category: "SEO & E-commerce Services",
      services: [
        { icon: Search, name: "On-page SEO", description: "Content optimization" },
        { icon: Zap, name: "Website Speed Optimization", description: "Performance tuning" },
        { icon: ShoppingCart, name: "Shopify Store Setup", description: "Complete e-commerce solution" },
        { icon: TrendingUp, name: "Local SEO Ranking", description: "Google Maps optimization" },
      ],
    },
    {
      category: "Content Creation Services",
      services: [
        { icon: Video, name: "Reels/TikTok/Shorts", description: "Viral content creation" },
        { icon: Video, name: "Promotional Videos", description: "Marketing videos" },
        { icon: PenTool, name: "Social Media Posters", description: "Eye-catching designs" },
        { icon: PenTool, name: "Creative Captions", description: "Engaging copy writing" },
      ],
    },
  ]

  const topServices = [
    { name: "Google Business Setup", demand: "Highest" },
    { name: "Social Media Followers", demand: "Highest" },
    { name: "Website Development", demand: "Very High" },
    { name: "SEO Ranking", demand: "Very High" },
    { name: "Google Ads", demand: "Very High" },
    { name: "Logo & Branding", demand: "High" },
    { name: "Reels/TikTok Views", demand: "High" },
    { name: "WhatsApp Business Setup", demand: "High" },
  ]

  const portfolio = [
    {
      title: "ABSMD – Business & Medical Services",
      category: "Corporate Website",
      shortDesc: "Professional corporate website for medical & business services.",
      fullDesc:
        "ABSMD is a US-based corporate website designed for medical and business services. The project focuses on trust-building UI, clear service presentation, SEO optimization, and responsive performance. The layout is structured to convert visitors into leads while maintaining a clean, healthcare-grade professional appearance. Key features include: clear service pages, contact form with lead capture, performance optimization, and mobile-first UX.",
      image: "absmd.png",
      url: "https://absmd.us",
    },
    {
      title: "Asrar Salon",
      category: "Salon & Beauty",
      shortDesc: "Luxury beauty salon website with premium branding.",
      fullDesc:
        "Asrar Salon is a high-end beauty and grooming website crafted with a luxury-first design approach. The website highlights salon services, brand identity, and customer experience with smooth animations, mobile optimization, and local SEO to attract premium clients. Features include service pages, booking CTA, gallery, and locally-optimized content.",
      image: "salon.png",
      url: "https://asrarsalon.com",
    },
    {
      title: "Hoda Shine Services",
      category: "Cleaning Services",
      shortDesc: "Service-based website focused on lead generation.",
      fullDesc:
        "Hoda Shine Services is a professional cleaning services website designed to convert visitors into customers. The site showcases offered services, pricing outline, and an easy contact flow, as well as local SEO focus to capture nearby leads. Built for speed and clear conversion funnels.",
      image: "cleaning.png",
      url: "https://hodashineservices.com",
    },
    {
      title: "Quotation Management System",
      category: "Web Application",
      shortDesc: "Dynamic system for generating business quotations.",
      fullDesc:
        "A custom-built quotation management web application that allows businesses to create, manage, and export professional quotations digitally. The system improves accuracy, speeds up proposal generation, supports PDF exports, and provides a user-friendly dashboard for tracking quotes and client communication.",
      image: "quotation.png",
      url: "https://quotation.bim.africa",
    },
    {
      title: "BIM Africa",
      category: "Corporate Platform",
      shortDesc: "Large-scale digital services platform.",
      fullDesc:
        "BIM Africa is a content-driven corporate platform offering web services, SEO-focused articles, and business solutions across markets. The site emphasizes content discoverability, optimized article structure, and performance for long-form content and service pages. Built to support growth and regional SEO.",
      image: "bim.png",
      url: "https://bim.africa",
    },
    {
      title: "Construction Management App",
      category: "Web Application",
      shortDesc: "Modern construction-focused web application.",
      fullDesc:
        "This construction web application (Next.js) highlights services, projects, and workflows for construction businesses. Emphasis is on responsiveness, performance, and clear presentation of services and case studies. Includes service pages, contact forms, and intuitive navigation for client audiences.",
      image: "construction.png",
      url: "https://construction-mu-sandy.vercel.app",
    },
    {
      title: "Mauritius Travel & Tours",
      category: "Travel Website",
      shortDesc: "Tourism website promoting travel packages.",
      fullDesc:
        "Mauritius Travel & Tours is a tourism-focused website designed to promote destinations, travel packages, and booking inquiries. It uses immersive visuals, clear package breakdowns, and SEO-optimized copy to attract international visitors. Features include package galleries, enquiry forms, and performance-optimized imagery.",
      image: "/travel.png",
      url: "https://mauritiustraveltour.com",
    },
  ]

  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      role: "E-commerce Founder",
      content:
        "Nuvera transformed our online store. The website is stunning, and our sales increased 300% in the first month!",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      role: "Brand Manager",
      content: "Their branding services created the perfect identity for our startup. Truly professional and creative!",
      rating: 5,
    },
    {
      name: "Hassan Ali",
      role: "Business Owner",
      content: "Google Business setup and social media growth services are exceptional. Highly recommended!",
      rating: 5,
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="w-full bg-black">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 sm:w-96 sm:h-96  rounded-full mix-blend-screen filter blur-3xl opacity-10"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 sm:w-96 sm:h-96 rounded-full mix-blend-screen filter blur-3xl opacity-5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
          />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 py-20 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isLoaded ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full mb-6 border border-yellow-500/40 bg-yellow-500/10 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-yellow-300">Digital Services Excellence</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight text-balance">
              Transform Your Business Digitally
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions from web development to social media growth. Serving UAE, Bangladesh, and
              worldwide clients with premium services.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto mx-auto"
              >
                <Button
                  size="lg"
                  className="gradient-gold text-black text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all font-semibold w-full sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto mx-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-yellow-500/50 text-yellow-400  w-full sm:w-auto"
                >
                  Get Started Now
                </Button>
              </motion.button>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-12 sm:mt-20"
            >
              {stats.map((stat) => (
                <motion.div key={stat.label} variants={itemVariants} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {!contentLoaded && (
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-5 h-9 sm:w-6 sm:h-10 border-2 border-yellow-600/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-2 sm:w-1.5 sm:h-3 gradient-gold rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full py-12 sm:py-20 md:py-28 bg-black border-t border-yellow-500/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-yellow-500 rounded-full mix-blend-screen filter blur-3xl opacity-5"
            animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, delay: 3 }}
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-16 md:mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full mb-6 border border-yellow-500/40 bg-yellow-500/10 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-yellow-300">About Our Company</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient-enhanced leading-tight">
              Welcome to Nuvera Digital Solutions
            </h2>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed accent-gold-premium"
              >
                At Nuvera, we believe that digital transformation is not just about technology—it's about creating
                meaningful connections between businesses and their audiences. With over a decade of collective
                expertise, we've partnered with hundreds of companies across the globe to unlock their digital
                potential.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
              >
                Our mission is simple yet powerful: to empower businesses with cutting-edge digital solutions that drive
                growth, enhance brand visibility, and create lasting impact. We don't just deliver services; we build
                long-term partnerships with our clients, understanding their unique challenges and crafting tailored
                strategies that deliver measurable results.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed"
              >
                From startups to established enterprises, from UAE to Bangladesh and beyond, Nuvera has been the trusted
                partner for businesses seeking premium digital services. Our team of skilled professionals combines
                technical excellence with creative innovation to deliver solutions that exceed expectations.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-yellow-500/20"
            >
              <p className="text-yellow-400 font-semibold text-xs sm:text-3xl mb-6">Our Core Values</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { title: "Excellence", desc: "Delivering premium quality in everything we do" },
                  { title: "Innovation", desc: "Staying ahead of digital trends and technologies" },
                  { title: "Integrity", desc: "Building trust through transparency and honesty" },
                ].map((value, idx) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + idx * 0.1 }}
                    className="p-3 sm:p-4"
                  >
                    <h4 className="text-yellow-300 font-bold text-base sm:text-lg mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-20"
          >
            {features.map((feature, idx) => (
              <motion.div key={feature.title} variants={itemVariants} transition={{ delay: idx * 0.1 }}>
                <Card className="h-full ">
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-gold flex items-center justify-center mb-3 sm:mb-4 group-hover:animate-soft-pulse flex-shrink-0"
                    >
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black font-bold" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-yellow-100">{feature.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Top Services Section */}
      <section className="w-full py-12 sm:py-20 md:py-28 bg-black border-t border-yellow-500/10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
              Most-Selling Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
              Our highest-demand services trusted by businesses worldwide
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
          >
            {topServices.map((service, index) => (
              <motion.div key={service.name} variants={itemVariants}>
                <Card className="border border-yellow-500 h-full">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/50 to-yellow-400/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.1 }}
                    style={{ opacity: 0.1 }}
                  />
                  <CardContent className="p-3 sm:p-4 md:p-6 relative">
                    <div className="flex items-start justify-between mb-2 sm:mb-3">
                      <h3 className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-yellow-300 transition-colors">
                        {service.name}
                      </h3>
                      <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
                      </motion.div>
                    </div>
                    <div className="inline-block px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-semibold">
                      {service.demand}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section - All Categories */}
      <section id="services" className="w-full py-12 sm:py-20 md:py-28 bg-black border-t border-yellow-500/10">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
              Our Complete Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions across all major categories
            </p>
          </motion.div>

          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-10 sm:mb-16"
            >
              <motion.h3
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gradient flex items-center space-x-2 sm:space-x-3"
              >
                <div className="h-1 w-4 sm:w-6 md:w-8 gradient-gold rounded-full flex-shrink-0" />
                <span>{category.category}</span>
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6"
              >
                {category.services.map((service) => (
                  <motion.div key={service.name} variants={itemVariants}>
                    <Card className="h-full ">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ opacity: 0.1 }}
                      />
                      <CardContent className="p-3 sm:p-4 md:p-6 relative">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 10 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg gradient-gold flex items-center justify-center mb-3 sm:mb-4 group-hover:animate-soft-pulse flex-shrink-0"
                        >
                          <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
                        </motion.div>
                        <h4 className="text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2 text-white group-hover:text-yellow-300 transition-colors">
                          {service.name}
                        </h4>
                        <p className="text-gray-400 text-xs">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="w-full py-12 sm:py-20 md:py-28 bg-black border-t ">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
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
              <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -8 }} className="group">
                <Card className="h-full overflow-hidden">
                  <motion.div
                    className="relative h-32 sm:h-40 md:h-48 overflow-hidden rounded-t-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/60 flex items-end p-3">
                      <p className="text-gray-200 opacity-90 font-medium text-xs sm:text-sm md:text-base">
                        {project.category}
                      </p>
                    </div>
                  </motion.div>
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-white group-hover:text-yellow-300 transition-colors">
                      {project.title}
                    </h3>

                    <motion.p layout className="text-gray-400 text-xs sm:text-sm">
                      {expandedProject === project.title ? project.fullDesc : project.shortDesc}
                    </motion.p>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() =>
                          setExpandedProject(expandedProject === project.title ? null : project.title)
                        }
                        className="text-xs sm:text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        {expandedProject === project.title ? "Read Less" : "Read More"}
                      </button>

                      <Link
                        href={project.url}
                        target="_blank"
                        className="inline-flex items-center text-xs sm:text-sm font-semibold text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        View Live Project
                        <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 sm:py-20 md:py-28 bg-black border-t border-yellow-500/10 relative overflow-hidden">
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
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
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
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </motion.div>
                    <p className="text-gray-300 mb-3 sm:mb-4 italic text-xs sm:text-sm md:text-base">
                      &quot;{testimonial.content}&quot;
                    </p>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 gradient-gold rounded-full flex items-center justify-center text-black font-bold text-xs flex-shrink-0"
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
      <section id="contact" className="w-full py-12 sm:py-20 md:py-28 bg-black border-t border-yellow-500/10">
        <div className="w-full max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block mb-4 sm:mb-6"
            >
              <Award className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-gradient" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-gradient">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Join hundreds of satisfied clients. Let us help you achieve digital excellence with our comprehensive
              suite of services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="gradient-gold text-black text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all font-semibold w-full sm:w-auto"
              >
                Start Your Project Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.button>
          </motion.div>
        </div>
      </section>

    
    </div>
  )
}
