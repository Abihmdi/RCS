"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Letter {
  id: number
  char: string
  x: number
  y: number
  size: number
  opacity: number
}

export function FallingLetters() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [letters, setLetters] = useState<Letter[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const chars = ["R", "C", "S"]
    const newLetters: Letter[] = []
    let id = 0

    // Create diagonal lines of letters from top-left to bottom-right
    const numDiagonals = 25
    const lettersPerDiagonal = 12

    for (let d = 0; d < numDiagonals; d++) {
      for (let i = 0; i < lettersPerDiagonal; i++) {
        // Calculate position along diagonal
        const progress = i / lettersPerDiagonal
        const diagonalOffset = d / numDiagonals

        // Base positions creating diagonal flow
        const baseX = diagonalOffset * dimensions.width + progress * dimensions.width * 0.5
        const baseY = progress * dimensions.height

        // Add controlled randomness
        const offsetX = (Math.random() - 0.5) * 60
        const offsetY = (Math.random() - 0.5) * 40

        // Only add if within bounds
        const x = baseX + offsetX
        const y = baseY + offsetY

        if (x > -50 && x < dimensions.width + 50 && y > -50 && y < dimensions.height + 50) {
          // Calculate opacity based on position - stronger in center
          const centerX = dimensions.width / 2
          const centerY = dimensions.height / 2
          const distFromCenter = Math.sqrt(
            Math.pow((x - centerX) / dimensions.width, 2) + 
            Math.pow((y - centerY) / dimensions.height, 2)
          )
          const baseOpacity = 0.1 + (1 - distFromCenter) * 0.5

          newLetters.push({
            id: id++,
            char: chars[Math.floor(Math.random() * chars.length)],
            x,
            y,
            size: 14 + Math.random() * 20,
            opacity: Math.max(0.08, Math.min(0.7, baseOpacity + Math.random() * 0.2)),
          })
        }
      }
    }

    setLetters(newLetters)
  }, [dimensions])

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-background">
      <div ref={containerRef} className="absolute inset-0">
        {letters.map((letter, index) => (
          <motion.span
            key={letter.id}
            className="absolute font-mono font-medium text-foreground select-none pointer-events-none"
            style={{
              fontSize: letter.size,
              left: letter.x,
              top: letter.y,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: letter.opacity, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.005,
              ease: "easeOut",
            }}
          >
            {letter.char}
          </motion.span>
        ))}
      </div>
      
      {/* Central text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 
            className="font-bold text-foreground tracking-widest text-6xl md:text-8xl lg:text-9xl"
            style={{ fontFamily: "var(--font-bebas-neue)" }}
          >
            RCS
          </h2>
          <p className="mt-2 text-base md:text-lg text-muted-foreground font-mono tracking-wider">
            Ruang Cipta Solusi
          </p>
        </motion.div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80 pointer-events-none" />
    </section>
  )
}
