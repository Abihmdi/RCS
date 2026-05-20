"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const categories = ["All", "Mobile", "Web", "Enterprise"] as const
type Category = typeof categories[number]

const projects = [
  {
    id: 1,
    title: "Heystetik",
    subtitle: "Beauty clinic platform",
    category: "Mobile",
  },
  {
    id: 2,
    title: "Braincoach",
    subtitle: "Cognitive assessment",
    category: "Web",
  },
  {
    id: 3,
    title: "Patrolink",
    subtitle: "Security management",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Bill Muhdor CRM",
    subtitle: "Client relationship system",
    category: "Enterprise",
  },
  {
    id: 5,
    title: "Hospital Management",
    subtitle: "Healthcare ERP",
    category: "Enterprise",
  },
  {
    id: 6,
    title: "Travelator",
    subtitle: "Travel operations software",
    category: "Enterprise",
  },
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <p className="text-xs text-[#71717A] mb-4 tracking-wide">
              Selected work
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#FAFAFA]">
              Projects
            </h2>
          </div>

          <div className="flex gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 py-1.5 text-xs rounded-md transition-colors duration-150 ${
                  activeCategory === category 
                    ? "bg-[#FAFAFA] text-[#0A0A0B] font-medium" 
                    : "text-[#71717A] hover:text-[#FAFAFA] hover:bg-[#111113]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Raycast-style project cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group p-4 rounded-lg bg-[#111113] border border-[rgba(255,255,255,0.06)] hover:-translate-y-0.5 transition-transform duration-150 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-medium text-[#FAFAFA]">
                  {project.title}
                </h3>
                <ArrowUpRight 
                  size={14} 
                  className="text-[#71717A] group-hover:text-[#FAFAFA] transition-colors duration-150 shrink-0" 
                />
              </div>
              <p className="text-xs text-[#71717A] mb-2">
                {project.subtitle}
              </p>
              <span className="text-[10px] text-[#71717A] px-2 py-0.5 rounded bg-[rgba(255,255,255,0.04)]">
                {project.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
