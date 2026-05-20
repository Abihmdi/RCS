"use client"

import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            <p className="text-xs text-[#71717A] mb-6 tracking-wide font-mono">
              Digital Systems Studio
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-[#FAFAFA]">
              Build better
              <br />
              digital systems
            </h1>

            <p className="text-base text-[#71717A] max-w-md mb-10 leading-relaxed">
              We build modern digital systems that help businesses scale, automate, 
              and grow through technology, data, and intelligent solutions.
            </p>

            <a
              href="mailto:ruangciptasolusi@gmail.com"
              className="group inline-flex items-center gap-2 text-sm text-[#FAFAFA] hover:text-[#FAFAFA]/80 transition-colors duration-150"
            >
              Start a project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
            </a>
          </div>

          {/* Right: 3D Wireframe Illustration */}
          <div className="relative flex items-center justify-center">
            <svg
              viewBox="0 0 500 500"
              className="w-full max-w-md h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid background */}
              <defs>
                <pattern id="heroGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                  <circle cx="0.5" cy="0.5" r="0.5" fill="rgba(255,255,255,0.1)" />
                </pattern>
              </defs>
              <rect width="500" height="500" fill="url(#heroGrid)" />

              {/* 3D Isometric Cube Structure */}
              <g className="animate-pulse" style={{ animationDuration: '4s' }}>
                {/* Back cube face */}
                <path
                  d="M250 100 L370 160 L370 280 L250 340 L130 280 L130 160 Z"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                  fill="none"
                />
                
                {/* Inner cube - main structure */}
                <path
                  d="M250 130 L340 175 L340 265 L250 310 L160 265 L160 175 Z"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                  fill="none"
                />
                
                {/* Vertical lines */}
                <line x1="250" y1="130" x2="250" y2="310" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <line x1="340" y1="175" x2="160" y2="175" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="340" y1="265" x2="160" y2="265" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              </g>

              {/* Floating geometric elements */}
              <g>
                {/* Top floating cube */}
                <g transform="translate(350, 80)">
                  <path
                    d="M0 20 L30 5 L60 20 L60 50 L30 65 L0 50 Z"
                    stroke="rgba(255,255,255,0.6)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <line x1="30" y1="5" x2="30" y2="65" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                </g>

                {/* Left floating element */}
                <g transform="translate(70, 200)">
                  <rect
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1"
                    fill="none"
                    transform="rotate(45, 20, 20)"
                  />
                </g>

                {/* Bottom right floating cube */}
                <g transform="translate(380, 320)">
                  <path
                    d="M0 15 L25 5 L50 15 L50 40 L25 50 L0 40 Z"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <line x1="25" y1="5" x2="25" y2="50" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
                </g>
              </g>

              {/* Orbital rings */}
              <ellipse
                cx="250"
                cy="220"
                rx="180"
                ry="60"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                fill="none"
                strokeDasharray="8 8"
              />
              <ellipse
                cx="250"
                cy="220"
                rx="140"
                ry="45"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
                fill="none"
              />

              {/* Connection lines */}
              <g stroke="rgba(255,255,255,0.2)" strokeWidth="1">
                <line x1="250" y1="130" x2="380" y2="95" strokeDasharray="4 4" />
                <line x1="160" y1="175" x2="90" y2="220" strokeDasharray="4 4" />
                <line x1="340" y1="265" x2="405" y2="335" strokeDasharray="4 4" />
              </g>

              {/* Node points */}
              <g fill="#FAFAFA">
                <circle cx="250" cy="130" r="3" />
                <circle cx="340" cy="175" r="2" />
                <circle cx="340" cy="265" r="2" />
                <circle cx="250" cy="310" r="3" />
                <circle cx="160" cy="265" r="2" />
                <circle cx="160" cy="175" r="2" />
              </g>

              {/* Accent highlights */}
              <g fill="#FAFAFA" opacity="0.8">
                <circle cx="380" cy="95" r="2" />
                <circle cx="90" cy="220" r="2" />
                <circle cx="405" cy="335" r="2" />
              </g>

              {/* Labels */}
              <text x="420" y="95" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">SYS_01</text>
              <text x="55" y="255" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">NODE</text>
              <text x="395" y="365" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace">DATA</text>

              {/* Decorative circles */}
              <circle cx="250" cy="220" r="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
              <circle cx="250" cy="220" r="70" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" strokeDasharray="2 4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
