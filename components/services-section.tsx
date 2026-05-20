"use client"

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
    description: "Fast, scalable applications designed for performance and growth.",
  },
  {
    icon: Layers,
    title: "Custom Systems",
    description: "Tailored systems that improve workflows and business operations.",
  },
  {
    icon: Palette,
    title: "Product & UI/UX Design",
    description: "Clean, intuitive interfaces focused on usability and clarity.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Practical AI and automation systems to improve efficiency.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <p className="text-xs text-[#71717A] mb-4 tracking-wide">
          What we do
        </p>
        
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-snug mb-12 text-[#FAFAFA] max-w-2xl">
          We design and develop modern digital products that combine engineering, 
          design, and intelligent systems.
        </h2>

        {/* Raycast-style command cards grid */}
        <div className="grid sm:grid-cols-2 gap-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-4 rounded-lg bg-[#111113] border border-[rgba(255,255,255,0.06)] hover:-translate-y-0.5 transition-transform duration-150"
            >
              <div className="w-8 h-8 rounded-md bg-[rgba(34,211,238,0.1)] flex items-center justify-center mb-3">
                <service.icon size={16} className="text-[#22D3EE]" />
              </div>

              <h3 className="text-sm font-medium text-[#FAFAFA] mb-1.5">
                {service.title}
              </h3>

              <p className="text-xs text-[#71717A] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
