"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Smartphone, Globe, Database, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Mobile", "Web", "Enterprise"] as const
type Category = typeof categories[number]

const projects = [
  {
    id: 1,
    title: "Heystetik",
    subtitle: "Beauty Clinic Application",
    category: "Mobile",
    caseStudy: "Beauty clinics juggle scattered data, manual tasks, and weak patient connections. This chaos disrupts appointment bookings, sales, and community building.",
    solution: "We have developed Heystetik, an innovative application designed for beauty clinics. Heystetik allows users to consult with doctors, book treatments, purchase skincare products, and engage in discussions with other users through streaming features.",
    features: ["Doctor Consultation", "Treatment Booking", "Commerce", "Stream", "Progress Tracker"],
    icon: Smartphone,
    type: "Project",
  },
  {
    id: 2,
    title: "Braincoach",
    subtitle: "Cognitive Assessment Website",
    category: "Web",
    caseStudy: "Traditional methods for assessing cognitive function are unreliable, making it hard to diagnose dementia early. This delays treatment and worsens patient outcomes.",
    solution: "We created Braincoach, a website designed for cognitive assessment and training. Leveraging AI capabilities, Braincoach supports accurate assessment and provides cognitive training games to enhance brain function.",
    features: ["Cognitive Assessment (MOCA INA)", "AI Integration", "Training Games"],
    icon: Globe,
    type: "Project",
  },
  {
    id: 3,
    title: "Patrolink",
    subtitle: "Security Guard Management Application",
    category: "Mobile",
    caseStudy: "Inefficient patrol management (gaps, missed patrols, slow response) creates security risks and eats into profits. Expensive patrol devices add another financial burden.",
    solution: "Patrolink is a security management application that simplifies attendance tracking, patrol management, and emergency responses. This application utilizes QR codes for attendance verification and ERP-based patrols.",
    features: ["Attendance Tracking", "Patrol Management", "SOS Button", "Anti Fake GPS"],
    icon: Smartphone,
    type: "Project",
  },
  {
    id: 4,
    title: "Bill Muhdor CRM",
    subtitle: "CRM Implementation",
    category: "Enterprise",
    caseStudy: "Bill Muhdor, juggling art sales, workshops, and client communication, needs a better system. Manual management creates missed leads, booking errors, and hinders client relationships.",
    solution: "We implement a customized CRM for Bill Muhdor, enhancing his team's ability to manage customer information and communication, as well as facilitating marketing aspects and operational aspects of his art business.",
    features: ["Customer Management", "Marketing Automation", "Operational Efficiency"],
    icon: Database,
    type: "Project",
  },
  {
    id: 5,
    title: "Hospital Management System",
    subtitle: "ERP Implementation",
    category: "Enterprise",
    caseStudy: "Disconnected hospital systems (registration, appointments, inventory, pharmacy, billing) cause delays, errors, and information gaps. This frustrates staff, hinders care, and hurts the overall hospital experience.",
    solution: "Our Hospital Management System provides an integrated platform to handle all hospital operations efficiently. This system also includes ERP-based medical record management.",
    features: ["Patient Registration", "Doctor & Clinic Management", "Inventory and Pharmacy", "Billing System", "Medical Record"],
    icon: Building2,
    type: "Project",
  },
  {
    id: 6,
    title: "Recruitment Tools",
    subtitle: "Recruitment Management System",
    category: "Enterprise",
    caseStudy: "The surge in applications and manual processes for tasks like administering tests, scoring results, and scheduling interviews are creating bottlenecks for recruiters.",
    solution: "We are developing a Recruitment Tool to automate daily recruitment tasks, including test administration, automated scoring, and interview scheduling integrated with email, Google Calendar, and video conferencing tools.",
    features: ["Automated Testing", "Interview Scheduling", "Operational Automation"],
    icon: Database,
    type: "Project",
  },
  {
    id: 7,
    title: "Travelator",
    subtitle: "Travel ERP Software",
    category: "Enterprise",
    caseStudy: "A travel agency using disconnected systems for bookings, quotes, invoices, and operations faces challenges in providing accurate information to clients and tracking overall business performance.",
    solution: "Travelator is an ERP software specifically designed to simplify travel business operations. It streamlines various aspects of travel management, including bookings, quotations, billing, task management, and financial tracking.",
    features: ["Order Management", "Offers and Billing", "Task Management", "Revenue & Expenditure Management"],
    icon: Globe,
    type: "Product",
  },
]

interface ProjectCardProps {
  project: typeof projects[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
      className="group"
    >
      <div 
        className="glass rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-foreground/20 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Image placeholder with gradient */}
        <div className="relative h-40 bg-gradient-to-br from-foreground/10 to-foreground/5 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <project.icon size={48} className="text-foreground/20" />
          </div>
          {/* Type badge */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-mono text-foreground">
            {project.type}
          </span>
          {/* Category badge */}
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-foreground/80 backdrop-blur-sm text-xs font-mono text-background">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-mono text-lg font-semibold text-foreground mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/70 font-mono mb-3">
            {project.subtitle}
          </p>
          
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.caseStudy}
          </p>

          {/* Expanded content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border mb-4">
                  <div className="font-mono text-xs text-foreground/70 mb-2 tracking-wider">// Solution</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {project.features.slice(0, isExpanded ? undefined : 3).map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground"
              >
                {feature}
              </span>
            ))}
            {!isExpanded && project.features.length > 3 && (
              <span className="px-2 py-1 rounded-md bg-foreground/10 text-xs font-mono text-foreground">
                +{project.features.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 md:py-32 relative">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-mono text-foreground/70 mb-4 tracking-wider">
            04 — Portfolio
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            SELECTED WORK
          </h2>
          <p className="text-muted-foreground max-w-3xl leading-relaxed text-balance">
            Through a structured approach that includes case studies, solutions, and feature overviews, we provide a clear overview of how we address client challenges and achieve optimal efficiency.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-start gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`font-mono ${
                activeCategory === category 
                  ? "bg-foreground text-background hover:bg-foreground/90" 
                  : "border-foreground/20 hover:border-foreground/40"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Note about customization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm">
              We provide customized solutions tailored to the unique needs of various industries through innovative technologies and comprehensive features, enhancing efficiency and service quality.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
