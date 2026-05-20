"use client"

import { Mail, ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs text-[#71717A] mb-4 tracking-wide">
            Get in touch
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-[#FAFAFA]">
            {"Let's build something"}
            <br />
            <span className="text-[#22D3EE]">together</span>
          </h2>

          <p className="text-sm text-[#71717A] mb-8 leading-relaxed">
            Ready to start your project? Get in touch and let&apos;s discuss how we can 
            help transform your ideas into reality.
          </p>

          <a
            href="mailto:ruangciptasolusi@gmail.com"
            className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FAFAFA] text-[#0A0A0B] rounded-md font-medium text-sm hover:bg-[#FAFAFA]/90 transition-colors duration-150"
          >
            <Mail size={14} />
            ruangciptasolusi@gmail.com
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
          
          <p className="mt-4 text-xs text-[#71717A]">
            We typically respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}
