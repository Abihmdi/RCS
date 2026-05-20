"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#team", label: "Team" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled 
            ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[rgba(255,255,255,0.06)]" 
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick("#home")
            }}
            className="text-sm font-semibold tracking-tight text-[#FAFAFA]"
          >
            RCS<span className="text-[#22D3EE]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="text-xs text-[#71717A] hover:text-[#FAFAFA] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
              className="text-xs font-medium px-3 py-1.5 bg-[#FAFAFA] text-[#0A0A0B] rounded-md hover:bg-[#FAFAFA]/90 transition-colors duration-150"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden p-1.5 text-[#FAFAFA]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0B] md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="text-xl font-medium text-[#FAFAFA] hover:text-[#22D3EE] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick("#contact")
              }}
              className="mt-4 px-5 py-2.5 bg-[#FAFAFA] text-[#0A0A0B] rounded-md font-medium text-sm"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
