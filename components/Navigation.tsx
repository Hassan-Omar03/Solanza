"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavLink {
  name: string
  id: string
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // 🔥 WhatsApp
  const whatsappNumber = "+971522740909"
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I'm interested in your services.`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = ["hero", "about", "services", "portfolio", "contact"]
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks: NavLink[] = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "bg-white/5 backdrop-blur-xl"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("hero")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-white/30 backdrop-blur-xl p-2 rounded-xl border border-white/20 shadow-lg"
            >
              <Sparkles className="h-6 w-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold text-white">Nuvera</span>
          </motion.button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all relative
                  ${
                    activeSection === link.id
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }
                `}
              >
                {link.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                  initial={{ scaleX: activeSection === link.id ? 1 : 0 }}
                  animate={{ scaleX: activeSection === link.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}

            {/* DESKTOP WHATSAPP */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Button className="bg-white/30 backdrop-blur-xl border border-white/30 text-white font-semibold hover:bg-white/40">
                Get Started
              </Button>
            </motion.a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-xl border border-white/20"
          >
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/10 backdrop-blur-2xl border-t border-white/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="block w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-white/30 backdrop-blur-xl border border-white/30 text-white font-semibold hover:bg-white/40">
                  Get Started
                </Button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
