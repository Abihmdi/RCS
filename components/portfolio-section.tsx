"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Mobile", "Web", "Enterprise"] as const
type Category = typeof categories[number]

const projects = [
  {
    id: 1,
    title: "Heystetik",
    subtitle: "Beauty clinic platform",
    category: "Mobile",
    description: "Comprehensive application for beauty clinics enabling consultations, bookings, and community features.",
  },
  {
    id: 2,
    title: "Braincoach",
    subtitle: "Cognitive assessment",
    category: "Web",
    description: "AI-powered platform for cognitive assessment and training with validated testing protocols.",
  },
  {
    id: 3,
    title: "Patrolink",
    subtitle: "Security management",
    category: "Mobile",
    description: "Security guard management system with attendance tracking and real-time patrol monitoring.",
  },
  {
    id: 4,
    title: "Bill Muhdor CRM",
    subtitle: "Client relationship system",
    category: "Enterprise",
    description: "Custom CRM implementation for art business management and client communications.",
  },
  {
    id: 5,
    title: "Hospital Management",
    subtitle: "Healthcare ERP",
    category: "Enterprise",
    description: "Integrated platform handling patient registration, appointments, pharmacy, and medical records.",
  },
  {
    id: 6,
    title: "Travelator",
    subtitle: "Travel operations software",
    category: "Enterprise",
    description: "ERP software for travel agencies managing bookings, quotations, and financial tracking.",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-32 md:py-40 relative">
      <div ref={ref} className="container mx-auto px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-sm text-muted-foreground mb-6"
              >
                Selected work
              </motion.p>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-semibold tracking-tight"
              >
                Projects
              </motion.h2>
            </div>

            {/* Category filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex gap-1"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    activeCategory === category 
                      ? "bg-foreground text-background" 
                      : "text-muted-foreground hover:text-foreground hover:bg-card"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Projects list */}
          <motion.div layout className="space-y-1">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  layout
                  className="group"
                >
                  <div className="flex items-center justify-between p-5 rounded-xl border border-transparent hover:border-border hover:bg-card transition-all cursor-pointer">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-medium text-foreground">
                          {project.title}
                        </h3>
                        <span className="text-xs text-muted-foreground px-2 py-0.5 rounded bg-secondary">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                    
                    <ArrowUpRight 
                      size={18} 
                      className="text-muted-foreground group-hover:text-foreground transition-colors shrink-0 ml-4" 
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
