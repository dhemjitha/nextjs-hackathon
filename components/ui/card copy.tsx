"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  selected?: boolean
  hover?: boolean
}

export function Card({ children, className = "", onClick, selected = false, hover = true }: CardProps) {
  const selectedClass = selected ? "card-selected" : ""
  const hoverClass = hover ? "card-hover" : ""

  return (
    <motion.div
      className={`card ${selectedClass} ${hoverClass} ${className}`}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
