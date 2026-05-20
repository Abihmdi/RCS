"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 md:py-40 relative">
      <div ref={ref} className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl">
          {/* Section label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Who we are
          </motion.p>

          {/* Editorial headline - Linear style */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-12 text-balance"
          >
            We build modern digital systems that help businesses scale, automate, 
            and grow through technology, data, and intelligent solutions.
          </motion.h2>

          {/* Two column content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground leading-relaxed">
                The use of technology is key to excelling in business today. 
                However, the value of this capability is only realized when clear 
                strategy, analysis, and expertise meet precise execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-muted-foreground leading-relaxed">
                We bring together strategy, technology implementation, and deep 
                domain expertise to drive transformation. With RCS, the focus is 
                not solely on technology but on delivering measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
