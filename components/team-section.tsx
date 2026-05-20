"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const team = [
  {
    name: "Ayip Farouk",
    role: "Founder",
    initials: "AF",
  },
  {
    name: "Abi Hamdi",
    role: "Founder",
    initials: "AH",
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="py-32 md:py-40 relative">
      <div ref={ref} className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm text-muted-foreground mb-6"
          >
            Team
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight mb-16"
          >
            The people behind RCS
          </motion.h2>

          {/* Team grid - minimal modern style */}
          <div className="grid sm:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-5 p-5 rounded-xl bg-card border border-border"
              >
                {/* Avatar */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-lg font-medium text-primary">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-medium text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
