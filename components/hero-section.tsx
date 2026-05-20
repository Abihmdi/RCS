"use client"

import { motion } from "framer-motion"
import { ArrowRight, ArrowDown } from "lucide-react"
import { HeroBackground } from "@/components/hero-background"
import { SplitFlapDisplay } from "@/components/split-flap"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent z-[1]" />
      
      <div className="container relative z-10 px-4 md:px-6 pt-20">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white font-mono">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Digital Transformation Partner
            </span>
          </motion.div>

          {/* Split Flap Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <SplitFlapDisplay text="RCS" />
          </motion.div>

          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            <span className="text-white">PROVIDING</span>
            <br />
            <span className="text-white/60">
              VALUABLE RESULTS.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 text-pretty"
          >
            An Introduction From Us, Ruang Cipta Solusi. We bring together strategy, 
            technology implementation, and deep domain expertise to drive transformation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="mailto:ruangciptasolusi@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/25"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full font-medium hover:bg-white/10 hover:border-white/40 transition-all"
            >
              View Our Work
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 md:gap-16 w-full max-w-3xl"
          >
            {[
              { value: "79.5%", label: "Internet Penetration in Indonesia (2024)" },
              { value: "353M", label: "Active Mobile Connections (128% of population)" },
              { value: "44.2%", label: "E-Money Transaction Growth YoY" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-bebas-neue)" }}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/50 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <span className="w-1 h-2 rounded-full bg-white" />
          </span>
          <ArrowDown size={16} />
        </motion.button>
      </motion.div>
    </section>
  )
}
