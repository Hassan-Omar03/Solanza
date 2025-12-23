"use client"

import { motion } from "framer-motion"
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gradient-to-br from-black via-[#0b1c3d] to-[#1e3a8a]  text-white relative overflow-hidden">
      {/* subtle glass blobs (NO yellow) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full mix-blend-screen blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full mix-blend-screen blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* BRAND */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-white/90 p-2 rounded-lg shadow-lg shadow-black/40"
              >
                <Sparkles className="h-6 w-6 text-black" />
              </motion.div>
              <span className="text-2xl font-bold text-white">Nuvera</span>
            </div>

            <p className="text-white mb-6 leading-relaxed max-w-xl">
              Premium digital services transforming businesses globally. Expertise
              in web development, branding, marketing, and growth strategies.
            </p>

            <div className="space-y-3">
              <motion.div whileHover={{ x: 6 }} className="flex items-center space-x-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-white">hello@nuvera.com</span>
              </motion.div>

              <motion.div whileHover={{ x: 6 }} className="flex items-center space-x-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-white">+971 (50) 123-4567</span>
              </motion.div>

              <motion.div whileHover={{ x: 6 }} className="flex items-center space-x-3">
                <div className="bg-white/10 p-2 rounded-lg">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm text-white">Dubai, UAE</span>
              </motion.div>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center space-x-2">
              <div className="h-1 w-6 bg-white/60 rounded-full" />
              <span>Quick Links</span>
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 6 }} className="group">
                  <a
                    href={`#${link.id}`}
                    className="text-white group-hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center space-x-2">
              <div className="h-1 w-6 bg-white/60 rounded-full" />
              <span>Follow Us</span>
            </h3>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8 origin-left"
        />

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left"
        >
          <p className="text-sm text-white">
            &copy; {currentYear} Nuvera Digital Services. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a href="#" className="text-white hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
