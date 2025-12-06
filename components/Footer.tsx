"use client"

import { motion } from "framer-motion"
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"

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
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <footer className="bg-black border-t border-yellow-500/20 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-600/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-700/10 rounded-full mix-blend-screen filter blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
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
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-gold p-2 rounded-lg shadow-lg shadow-yellow-500/50"
              >
                <Sparkles className="h-6 w-6 text-black" />
              </motion.div>
              <span className="text-2xl font-bold text-gradient">Nuvera</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Premium digital services transforming businesses globally. Expertise in web development, branding,
              marketing, and growth strategies.
            </p>
            <div className="space-y-3">
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 group cursor-pointer">
                <div className="bg-yellow-500/20 p-2 rounded-lg group-hover:bg-yellow-500/30 transition-all">
                  <Mail className="h-4 w-4 text-yellow-400" />
                </div>
                <span className="text-sm group-hover:text-yellow-400 transition-colors">hello@nuvera.com</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 group cursor-pointer">
                <div className="bg-yellow-500/20 p-2 rounded-lg group-hover:bg-yellow-500/30 transition-all">
                  <Phone className="h-4 w-4 text-yellow-400" />
                </div>
                <span className="text-sm group-hover:text-yellow-400 transition-colors">+971 (50) 123-4567</span>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-3 group cursor-pointer">
                <div className="bg-yellow-500/20 p-2 rounded-lg group-hover:bg-yellow-500/30 transition-all">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                </div>
                <span className="text-sm group-hover:text-yellow-400 transition-colors">Dubai, UAE</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center space-x-2">
              <div className="h-1 w-6 gradient-gold rounded-full" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }} className="group">
                  <a
                    href={`#${link.id}`}
                    className="text-gray-400 group-hover:text-yellow-400 transition-colors flex items-center space-x-2"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold mb-6 text-lg flex items-center space-x-2">
              <div className="h-1 w-6 gradient-gold rounded-full" />
              <span>Follow Us</span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-600/20 to-yellow-700/10 border border-yellow-500/30 flex items-center justify-center hover:border-yellow-500/60 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent mb-8 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left"
        >
          <p className="text-sm text-gray-500">&copy; {currentYear} Nuvera Digital Services. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
