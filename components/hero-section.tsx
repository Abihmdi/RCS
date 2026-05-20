"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative z-10 px-6 md:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Small badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Digital Systems Studio
            </span>
          </motion.div>

          {/* Main headline - Linear style large typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-8 text-balance"
          >
            Build better
            <br />
            <span className="text-primary">digital systems</span>
          </motion.h1>

          {/* Subheadline - clean and minimal */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed text-pretty"
          >
            We build modern digital systems that help businesses scale, automate, 
            and grow through technology, data, and intelligent solutions.
          </motion.p>

          {/* CTA Buttons - minimal style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="mailto:ruangciptasolusi@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium text-sm hover:bg-foreground/90 transition-colors"
            >
              Start a project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-foreground rounded-lg font-medium text-sm border border-border hover:bg-card transition-colors"
            >
              View work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5">
            <motion.span 
              className="w-1 h-1.5 rounded-full bg-muted-foreground"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.button>
      </motion.div>
    </section>
  )
}
