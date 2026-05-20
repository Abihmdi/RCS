"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Abi Hamdi",
    role: "Founder",
    bio: "With over 7 years of experience in the field of information technology, have been involved in various projects including website development, application development, network management, security, and other aspects.",
    initials: "AH",
  },
  {
    name: "Ayip Farouk",
    role: "Founder",
    bio: "Having over 5 years of experience in product management across various stages, from early-stage startups to mid-stage companies, and at one of the largest e-commerce companies in Southeast Asia. Possessing several certifications in product management training as well as business consulting.",
    initials: "AF",
  },
]

interface TeamCardProps {
  member: typeof team[0]
  index: number
}

function TeamCard({ member, index }: TeamCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group"
    >
      <div className="glass rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/30 relative overflow-hidden">
        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative">
          {/* Avatar placeholder */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-transform ring-4 ring-primary/10">
            <span 
              className="text-3xl font-bold text-primary"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              {member.initials}
            </span>
          </div>

          {/* Name and role */}
          <div className="text-center mb-6">
            <h3 
              className="text-xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              {member.name}
            </h3>
            <span className="text-sm text-primary font-mono">
              {member.role}
            </span>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground text-center leading-relaxed mb-6">
            {member.bio}
          </p>

          {/* Contact links */}
          <div className="flex justify-center gap-3">
            <a
              href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-mono text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {member.phone}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div ref={ref} className="container relative mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-mono text-primary mb-4">
            03 — Our Team
          </span>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            FOUNDER
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed text-balance">
            Meet the experts behind RCS who drive innovation and deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Team grid - 2 columns for leadership */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Join team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 
              className="text-xl md:text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-bebas-neue)" }}
            >
              JOIN OUR TEAM
            </h3>
            <p className="text-muted-foreground mb-4">
              {"We're always looking for talented individuals to join our growing team."}
            </p>
            <a 
              href="mailto:ruangciptasolusi@gmail.com" 
              className="inline-flex items-center gap-2 text-primary font-mono text-sm hover:underline"
            >
              <Mail size={16} />
              ruangciptasolusi@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
