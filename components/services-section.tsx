"use client"

import { ArrowUpRight } from "lucide-react"

const services = [
  {
    id: "FIG_01",
    title: "Web & App Development",
    description: "Fast, scalable applications designed for performance and growth.",
    size: "large",
  },
  {
    id: "FIG_02",
    title: "Custom Systems",
    description: "Tailored systems that improve workflows and business operations.",
    size: "medium",
  },
  {
    id: "FIG_03",
    title: "Product & UI/UX Design",
    description: "Clean, intuitive interfaces focused on usability and clarity.",
    size: "medium",
  },
  {
    id: "FIG_04",
    title: "AI & Automation",
    description: "Practical AI and automation systems to improve efficiency.",
    size: "large",
  },
]

// Isometric technical illustration component
function TechnicalIllustration({ type }: { type: string }) {
  if (type === "FIG_01") {
    return (
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <defs>
          <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect fill="url(#grid1)" width="300" height="200" />
        {/* Main window frame */}
        <g transform="translate(60, 30)">
          <path d="M0,120 L80,80 L180,80 L180,0 L80,0 L0,40 Z" fill="none" stroke="#FAFAFA" strokeWidth="1" opacity="0.6" />
          <path d="M180,80 L180,0 L100,40 L100,120 Z" fill="#FAFAFA" fillOpacity="0.15" />
          <path d="M0,40 L0,120 L100,120 L100,40 Z" fill="#FAFAFA" fillOpacity="0.25" />
          {/* Selected item highlight */}
          <rect x="10" y="70" width="80" height="12" fill="#FAFAFA" fillOpacity="0.4" rx="2" />
          {/* List items */}
          <rect x="10" y="50" width="60" height="8" fill="rgba(255,255,255,0.2)" rx="1" />
          <rect x="10" y="90" width="50" height="8" fill="rgba(255,255,255,0.2)" rx="1" />
          <rect x="10" y="102" width="70" height="8" fill="rgba(255,255,255,0.2)" rx="1" />
        </g>
        {/* Labels */}
        <text x="250" y="30" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">SEARCH BAR</text>
        <text x="250" y="90" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">SELECTED ITEM</text>
        <text x="100" y="180" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">LIST CONTENT</text>
      </svg>
    )
  }
  
  if (type === "FIG_02") {
    return (
      <svg viewBox="0 0 200 150" className="w-full h-full">
        <defs>
          <pattern id="grid2" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect fill="url(#grid2)" width="200" height="150" />
        {/* Gear/System illustration */}
        <g transform="translate(50, 25)">
          <circle cx="50" cy="50" r="35" fill="none" stroke="#FAFAFA" strokeWidth="1" opacity="0.4" />
          <circle cx="50" cy="50" r="20" fill="#FAFAFA" fillOpacity="0.2" />
          <circle cx="50" cy="50" r="8" fill="#FAFAFA" fillOpacity="0.4" />
          {/* Connecting nodes */}
          <circle cx="10" cy="20" r="6" fill="#FAFAFA" fillOpacity="0.3" />
          <circle cx="90" cy="20" r="6" fill="#FAFAFA" fillOpacity="0.3" />
          <circle cx="10" cy="80" r="6" fill="#FAFAFA" fillOpacity="0.3" />
          <circle cx="90" cy="80" r="6" fill="#FAFAFA" fillOpacity="0.3" />
          <line x1="16" y1="23" x2="30" y2="35" stroke="#FAFAFA" strokeWidth="1" opacity="0.3" />
          <line x1="84" y1="23" x2="70" y2="35" stroke="#FAFAFA" strokeWidth="1" opacity="0.3" />
          <line x1="16" y1="77" x2="30" y2="65" stroke="#FAFAFA" strokeWidth="1" opacity="0.3" />
          <line x1="84" y1="77" x2="70" y2="65" stroke="#FAFAFA" strokeWidth="1" opacity="0.3" />
        </g>
      </svg>
    )
  }
  
  if (type === "FIG_03") {
    return (
      <svg viewBox="0 0 200 150" className="w-full h-full">
        <defs>
          <pattern id="grid3" width="15" height="15" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect fill="url(#grid3)" width="200" height="150" />
        {/* UI Components illustration */}
        <g transform="translate(30, 20)">
          {/* Button */}
          <rect x="0" y="0" width="50" height="20" rx="4" fill="#FAFAFA" fillOpacity="0.3" stroke="#FAFAFA" strokeWidth="1" opacity="0.5" />
          {/* Toggle */}
          <rect x="70" y="5" width="30" height="12" rx="6" fill="rgba(255,255,255,0.1)" stroke="#FAFAFA" strokeWidth="1" opacity="0.4" />
          <circle cx="88" cy="11" r="5" fill="#FAFAFA" fillOpacity="0.5" />
          {/* Card */}
          <rect x="0" y="40" width="80" height="60" rx="4" fill="rgba(255,255,255,0.05)" stroke="#FAFAFA" strokeWidth="1" opacity="0.3" />
          <rect x="10" y="50" width="40" height="6" fill="rgba(255,255,255,0.2)" rx="1" />
          <rect x="10" y="62" width="60" height="4" fill="rgba(255,255,255,0.1)" rx="1" />
          <rect x="10" y="70" width="50" height="4" fill="rgba(255,255,255,0.1)" rx="1" />
          {/* Shapes */}
          <ellipse cx="120" cy="30" rx="20" ry="10" fill="#FAFAFA" fillOpacity="0.2" stroke="#FAFAFA" strokeWidth="1" opacity="0.4" />
          <rect x="100" y="60" width="40" height="40" fill="#FAFAFA" fillOpacity="0.15" stroke="#FAFAFA" strokeWidth="1" opacity="0.3" transform="rotate(15 120 80)" />
        </g>
      </svg>
    )
  }
  
  if (type === "FIG_04") {
    return (
      <svg viewBox="0 0 300 200" className="w-full h-full">
        <defs>
          <pattern id="grid4" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.1)" />
          </pattern>
        </defs>
        <rect fill="url(#grid4)" width="300" height="200" />
        {/* Neural network / AI illustration */}
        <g transform="translate(50, 30)">
          {/* Input layer */}
          <circle cx="0" cy="30" r="8" fill="#FAFAFA" fillOpacity="0.3" />
          <circle cx="0" cy="70" r="8" fill="#FAFAFA" fillOpacity="0.3" />
          <circle cx="0" cy="110" r="8" fill="#FAFAFA" fillOpacity="0.3" />
          {/* Hidden layer */}
          <circle cx="80" cy="20" r="8" fill="#FAFAFA" fillOpacity="0.4" />
          <circle cx="80" cy="50" r="8" fill="#FAFAFA" fillOpacity="0.4" />
          <circle cx="80" cy="80" r="8" fill="#FAFAFA" fillOpacity="0.4" />
          <circle cx="80" cy="110" r="8" fill="#FAFAFA" fillOpacity="0.4" />
          {/* Output layer */}
          <circle cx="160" cy="50" r="10" fill="#FAFAFA" fillOpacity="0.5" />
          <circle cx="160" cy="90" r="10" fill="#FAFAFA" fillOpacity="0.5" />
          {/* Connections */}
          <g stroke="#FAFAFA" strokeWidth="0.5" opacity="0.3">
            <line x1="8" y1="30" x2="72" y2="20" />
            <line x1="8" y1="30" x2="72" y2="50" />
            <line x1="8" y1="30" x2="72" y2="80" />
            <line x1="8" y1="70" x2="72" y2="50" />
            <line x1="8" y1="70" x2="72" y2="80" />
            <line x1="8" y1="70" x2="72" y2="110" />
            <line x1="8" y1="110" x2="72" y2="80" />
            <line x1="8" y1="110" x2="72" y2="110" />
            <line x1="88" y1="20" x2="150" y2="50" />
            <line x1="88" y1="50" x2="150" y2="50" />
            <line x1="88" y1="50" x2="150" y2="90" />
            <line x1="88" y1="80" x2="150" y2="50" />
            <line x1="88" y1="80" x2="150" y2="90" />
            <line x1="88" y1="110" x2="150" y2="90" />
          </g>
        </g>
        {/* Labels */}
        <text x="30" y="180" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">INPUT</text>
        <text x="120" y="180" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">PROCESS</text>
        <text x="200" y="180" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">OUTPUT</text>
      </svg>
    )
  }
  
  return null
}

export function ServicesSection() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main hero split - Raycast style */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          {/* Left: Typography */}
          <div>
            <p className="text-xs text-[#71717A] mb-6 tracking-widest uppercase font-mono">
              What we do
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-8 text-[#FAFAFA]">
              Build the<br />
              perfect<br />
              solutions.
            </h2>

            <p className="text-sm text-[#71717A] leading-relaxed mb-8 max-w-sm font-mono">
              Our development approach is designed to
              allow anyone with a vision to build
              powerful digital products.
            </p>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 text-sm text-[#FAFAFA] hover:text-[#FAFAFA] transition-colors font-mono"
            >
              Start a project <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Right: Main illustration */}
          <div className="relative">
            <span className="absolute top-0 left-0 text-[10px] text-[#71717A] font-mono">FIG_01</span>
            <div className="pt-6 h-[280px] lg:h-[320px]">
              <TechnicalIllustration type="FIG_01" />
            </div>
          </div>
        </div>

        {/* Bento grid of service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)] rounded-lg overflow-hidden">
          {/* Large card - Custom Systems */}
          <div className="md:col-span-2 bg-[#0A0A0B] p-6">
            <div className="grid md:grid-cols-2 gap-6 h-full">
              <div className="relative h-[180px]">
                <span className="absolute top-0 left-0 text-[10px] text-[#71717A] font-mono">FIG_02</span>
                <div className="pt-4 h-full">
                  <TechnicalIllustration type="FIG_02" />
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <h3 className="text-lg font-medium text-[#FAFAFA] mb-2">
                  Custom Systems
                </h3>
                <p className="text-sm text-[#71717A] font-mono leading-relaxed">
                  Tailored systems that improve
                  workflows and business operations.
                </p>
              </div>
            </div>
          </div>

          {/* Small card - Product & UI/UX Design */}
          <div className="bg-[#0A0A0B] p-6 flex flex-col">
            <div className="relative flex-1 min-h-[140px]">
              <span className="absolute top-0 left-0 text-[10px] text-[#71717A] font-mono">FIG_03</span>
              <div className="pt-4 h-full">
                <TechnicalIllustration type="FIG_03" />
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-[#FAFAFA] mb-2">
                Product & UI/UX
              </h3>
              <p className="text-sm text-[#71717A] font-mono leading-relaxed">
                Clean, intuitive interfaces focused
                on usability and clarity.
              </p>
            </div>
          </div>

          {/* Small card - Web & App */}
          <div className="bg-[#0A0A0B] p-6 flex flex-col">
            <a href="#portfolio" className="absolute top-4 right-4 text-[#71717A] hover:text-[#FAFAFA] transition-colors">
              <ArrowUpRight size={16} />
            </a>
            <h3 className="text-lg font-medium text-[#FAFAFA] mb-2">
              Web & App Development
            </h3>
            <p className="text-sm text-[#71717A] font-mono leading-relaxed">
              Fast, scalable applications designed
              for performance and growth.
            </p>
          </div>

          {/* Large card - AI & Automation */}
          <div className="md:col-span-2 bg-[#0A0A0B] p-6">
            <div className="grid md:grid-cols-2 gap-6 h-full">
              <div className="flex flex-col justify-center">
                <h3 className="text-lg font-medium text-[#FAFAFA] mb-2">
                  AI & Automation
                </h3>
                <p className="text-sm text-[#71717A] font-mono leading-relaxed">
                  Practical AI and automation systems
                  to improve efficiency.
                </p>
              </div>
              <div className="relative h-[180px]">
                <span className="absolute top-0 right-0 text-[10px] text-[#71717A] font-mono">FIG_04</span>
                <div className="pt-4 h-full">
                  <TechnicalIllustration type="FIG_04" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
