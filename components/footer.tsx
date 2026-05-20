"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-8 border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold tracking-tight text-[#FAFAFA]">
              RCS<span className="text-[#22D3EE]">.</span>
            </span>
            <span className="text-xs text-[#71717A]">
              Ruang Cipta Solusi
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="mailto:ruangciptasolusi@gmail.com"
              className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors duration-150"
            >
              ruangciptasolusi@gmail.com
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors duration-150"
            >
              <ArrowUp size={12} />
              Top
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
          <p className="text-xs text-[#71717A] text-center">
            &copy; {new Date().getFullYear()} PT Ruang Cipta Solusi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
