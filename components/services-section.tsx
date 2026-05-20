"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Globe, 
  Layers,
  Palette,
  Sparkles
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web & App Development",
    description: "We build fast, scalable applications designed for performance and growth.",
  },
  {
    icon: Layers,
    title: "Custom Systems",
    description: "We develop tailored systems that improve workflows and business operations.",
  },
  {
    icon: Palette,
    title: "Product & UI/UX Design",
    description: "We design clean, intuitive interfaces focused on usability and clarity.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "We integrate practical AI and automation systems to improve efficiency.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-32 md:py-40 relative">
      <div ref={ref} className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header - Linear editorial style */}
          <div className="max-w-3xl mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-sm text-muted-foreground mb-6"
            >
              What we do
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-balance"
            >
              We design and develop modern digital products that combine engineering, 
              design, and intelligent systems.
            </motion.h2>
          </div>

          {/* Services grid - Raycast modular card system */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <service.icon size={20} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-medium text-foreground mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
