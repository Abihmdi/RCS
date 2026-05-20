"use client"

import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-8">
            <span className="text-lg font-semibold tracking-tight">
              RCS<span className="text-primary">.</span>
            </span>
            <span className="text-sm text-muted-foreground">
              Ruang Cipta Solusi
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-8">
            <a 
              href="mailto:ruangciptasolusi@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ruangciptasolusi@gmail.com
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowUp size={14} />
              Top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} PT Ruang Cipta Solusi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
