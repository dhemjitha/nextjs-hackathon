"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedStarProps {
  size?: number
  delay?: number
  duration?: number
  className?: string
  position?: {
    top?: string
    left?: string
    right?: string
    bottom?: string
  }
}

export function AnimatedStar({
  size = 40,
  delay = 0,
  duration = 20,
  className = "",
  position = {},
}: AnimatedStarProps) {
  const [randomMovement, setRandomMovement] = useState({
    x: Math.random() * 20 - 10,
    y: Math.random() * 20 - 10,
    rotate: Math.random() * 20 - 10,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomMovement({
        x: Math.random() * 20 - 10,
        y: Math.random() * 20 - 10,
        rotate: Math.random() * 20 - 10,
      })
    }, duration * 1000)

    return () => clearInterval(interval)
  }, [duration])

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: randomMovement.x,
        y: randomMovement.y,
        rotate: randomMovement.rotate,
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        x: { duration, type: "spring", stiffness: 10, damping: 3 },
        y: { duration, type: "spring", stiffness: 10, damping: 3 },
        rotate: { duration, type: "spring", stiffness: 10, damping: 3 },
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L14.2451 8.90983H21.5106L15.6327 13.1803L17.8779 20.0902L12 15.8197L6.12215 20.0902L8.36729 13.1803L2.48944 8.90983H9.75486L12 2Z"
          fill="currentColor"
        />
      </svg>
    </motion.div>
  )
}
