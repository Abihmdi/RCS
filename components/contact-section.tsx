"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-32 md:py-40 relative">
      <div ref={ref} className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* CTA Section - Linear clean conversion focus */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Get in touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
          >
            {"Let's build something"}
            <br />
            <span className="text-primary">together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            Ready to start your project? Get in touch and let&apos;s discuss how we can 
            help transform your ideas into reality.
          </motion.p>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="mailto:ruangciptasolusi@gmail.com"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
            >
              <Mail size={18} />
              ruangciptasolusi@gmail.com
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            
            <p className="text-sm text-muted-foreground">
              We typically respond within 24 hours
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
