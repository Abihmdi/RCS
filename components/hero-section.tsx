"use client"

import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-14">
      <div className="max-w-5xl mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <p className="text-xs text-[#71717A] mb-6 tracking-wide">
            Digital Systems Studio
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-[#FAFAFA]">
            Build better
            <br />
            <span className="text-[#22D3EE]">digital systems</span>
          </h1>

          <p className="text-base text-[#71717A] max-w-xl mb-10 leading-relaxed">
            We build modern digital systems that help businesses scale, automate, 
            and grow through technology, data, and intelligent solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:ruangciptasolusi@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FAFAFA] text-[#0A0A0B] rounded-md font-medium text-sm hover:bg-[#FAFAFA]/90 transition-colors duration-150"
            >
              Start a project
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
            </a>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[#FAFAFA] rounded-md font-medium text-sm border border-[rgba(255,255,255,0.06)] hover:bg-[#111113] transition-colors duration-150"
            >
              View work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
