"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { stats, features, topServices, serviceCategories, portfolio, testimonials, containerVariants, itemVariants } from "@/constant/data"
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

  stats
  return (
    // Top-left -> bottom-right gradient that remains constant while scrolling
    <div className="w-full bg-gradient-to-br from-black via-[#0b1c3d] to-[#1e3a8a] text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 sm:w-96 sm:h-96 rounded-full mix-blend-screen filter blur-3xl opacity-10"
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
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full mb-6 border border-gray-300 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">Digital Services Excellence</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-balance bg-gradient-to-r from-gray-300 via-gray-100 to-white bg-clip-text text-transparent">
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
                  className=" text-gray-300 text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6  transition-all font-semibold w-full sm:w-auto"
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
                  className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6  text-gray-300  w-full sm:w-auto"
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
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-1 sm:mb-2">
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
              <div className="w-5 h-9 sm:w-6 sm:h-10  flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-1 h-2 sm:w-1.5 sm:h-3  rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full py-12 sm:py-20 md:py-28   relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full mix-blend-screen filter blur-3xl opacity-5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96  rounded-full mix-blend-screen filter blur-3xl opacity-5"
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
              className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full mb-6 border border-gray-300 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-gray-300">About Our Company</span>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-300 leading-tight">
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
              className="mt-10 sm:mt-16 pt-6 sm:pt-10 "
            >
              <p className="text-gray-300 font-semibold text-xs sm:text-3xl mb-6">Our Core Values</p>
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
                    <h4 className="text-gray-300 font-bold text-base sm:text-lg mb-2">{value.title}</h4>
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
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 flex items-center justify-center mb-3 sm:mb-4 group-hover:animate-soft-pulse flex-shrink-0"
                    >
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-black font-bold" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-300">{feature.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

     {/* ================= TOP SERVICES — ADVANCED ================= */}
{/* ================= TOP SERVICES — MORE ADVANCED MOTION (NO COLOR CHANGE) ================= */}
<section className="w-full py-12 sm:py-20 md:py-28 relative overflow-hidden">
  {/* floating parallax blobs (transparent only) */}
  <motion.div
    className="absolute -top-32 -right-32 w-80 h-80 rounded-full "
    animate={{ y: [-30, 30, -30], x: [0, 20, 0] }}
    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
  />
  <motion.div
    className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full "
    animate={{ y: [30, -30, 30], x: [0, -20, 0] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  />

  <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
    {/* heading with micro text reveal */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-16"
    >
      <motion.h2
        initial={{ y: 40, letterSpacing: "0.2em" }}
        whileInView={{ y: 0, letterSpacing: "0em" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-300"
      >
        Most-Selling Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto"
      >
        Our highest-demand services trusted by businesses worldwide
      </motion.p>
    </motion.div>

    {/* cards grid with deep stagger */}
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
    >
      {topServices.map((service, index) => (
        <motion.div
          key={service.name}
          variants={{
            hidden: {
              opacity: 0,
              y: 60,
              scale: 0.95,
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
          whileHover={{
            y: -14,
            scale: 1.05,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 18,
            },
          }}
          className="group"
        >
          <Card className="relative border border-gray-300 h-full overflow-hidden">
            {/* premium light sweep */}
            <motion.div
              className="absolute inset-0 bg-white/5"
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: index * 0.18,
                ease: "linear",
              }}
            />

            {/* depth shadow on hover */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ boxShadow: "0 25px 60px rgba(0,0,0,0.45)" }}
            />

            <CardContent className="p-3 sm:p-4 md:p-6 relative">
              <div className="flex items-start justify-between mb-2 sm:mb-3">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-gray-300">
                  {service.name}
                </h3>

                {/* star micro-interaction */}
                <motion.div
                  whileHover={{
                    rotate: 18,
                    scale: 1.35,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 16,
                  }}
                >
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-gray-300 flex-shrink-0" />
                </motion.div>
              </div>

              {/* demand pill pop */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="inline-block px-2 py-1 rounded-full bg-black text-gray-300 text-xs font-semibold"
              >
                {service.demand}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>



    {/* ================= SERVICES — ALL CATEGORIES (ADVANCED, SAME COLORS ONLY) ================= */}
{/* ================= SERVICES — ADVANCED MOTION (SAME COLORS, NO NEW SHADES) ================= */}
<section id="services" className="w-full relative overflow-hidden">
  {/* soft floating depth (transparent only) */}
  <motion.div
    className="absolute -top-40 -right-40 w-96 h-96 rounded-full "
    animate={{ y: [-30, 30, -30], x: [0, 25, 0] }}
    transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
  />
  <motion.div
    className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full "
    animate={{ y: [30, -30, 30], x: [0, -25, 0] }}
    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
  />

  <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
    {/* section heading */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10 sm:mb-16"
    >
      <motion.h2
        initial={{ y: 40, letterSpacing: "0.15em" }}
        whileInView={{ y: 0, letterSpacing: "0em" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-300"
      >
        Our Complete Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto"
      >
        Comprehensive digital solutions across all major categories
      </motion.p>
    </motion.div>

    {serviceCategories.map((category, categoryIndex) => (
      <motion.div
        key={category.category}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          delay: categoryIndex * 0.15,
          ease: "easeOut",
        }}
        className="mb-10 sm:mb-16"
      >
        {/* category title */}
        <motion.h3
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-300 flex items-center space-x-3"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "2.5rem" }}
            transition={{ duration: 0.7 }}
            className="h-1 bg-gray-300 rounded-full flex-shrink-0"
          />
          <span>{category.category}</span>
        </motion.h3>

        {/* services grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.14,
                delayChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6"
        >
          {category.services.map((service, i) => (
            <motion.div
              key={service.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.75,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -14,
                scale: 1.05,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                },
              }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border border-gray-300">
                {/* subtle light sweep */}
                <motion.div
                  className="absolute inset-0 bg-white/5"
                  initial={{ x: "-120%" }}
                  animate={{ x: "120%" }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    delay: i * 0.18,
                    ease: "linear",
                  }}
                />

                {/* depth shadow on hover */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{
                    boxShadow: "0 28px 70px rgba(0,0,0,0.45)",
                  }}
                />

                <CardContent className="p-3 sm:p-4 md:p-6 relative">
                  {/* icon */}
                  <motion.div
                    whileHover={{ scale: 1.22, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 480 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 flex items-center justify-center mb-3 sm:mb-4"
                  >
                    <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-300" />
                  </motion.div>

                  <h4 className="text-xs sm:text-sm md:text-base font-bold mb-1 sm:mb-2 text-white">
                    {service.name}
                  </h4>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 text-xs"
                  >
                    {service.description}
                  </motion.p>
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
      <section id="portfolio" className="w-full py-12 sm:py-20 md:py-28  ">
        <div className="w-full max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-300">
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

                    <div className="absolute inset-0  flex items-end p-3">
                      <p className="text-gray-200 opacity-90 font-medium text-xs sm:text-sm md:text-base">
                        {project.category}
                      </p>
                    </div>
                  </motion.div>
                  <CardContent className="p-3 sm:p-4 md:p-6">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 text-gray-300">
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
                        className="text-xs sm:text-sm font-semibold text-gray-300 "
                      >
                        {expandedProject === project.title ? "Read Less" : "Read More"}
                      </button>

                      <Link
                        href={project.url}
                        target="_blank"
                        className="inline-flex items-center text-xs sm:text-sm font-semibold text-gray-300"
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
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 fill-gray-300 text-gray-300" />
                      ))}
                    </motion.div>
                    <p className="text-gray-300 mb-3 sm:mb-4 italic text-xs sm:text-sm md:text-base">
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
              <Award className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-gray-300" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-300">
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
                className="bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700



 text-black text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 hover:shadow-2xl  font-semibold w-full sm:w-auto"
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
