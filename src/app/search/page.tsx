"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Logo } from "../../components/ui/logo"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { AnimatedStar } from "../../components/animations/animated-star"
import { Avatar } from "../../components/ui/avatar"

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Stars */}
      <AnimatedStar
        className="text-green-light"
        position={{ top: "15%", left: "10%" }}
        size={50}
        delay={0.2}
        duration={15}
      />
      <AnimatedStar
        className="text-green-light"
        position={{ top: "20%", right: "15%" }}
        size={35}
        delay={0.5}
        duration={18}
      />
      <AnimatedStar
        className="text-green-light"
        position={{ bottom: "30%", left: "20%" }}
        size={40}
        delay={0.8}
        duration={20}
      />
      <AnimatedStar
        className="text-green-light"
        position={{ bottom: "15%", right: "10%" }}
        size={45}
        delay={1.1}
        duration={17}
      />

      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <Logo showText />
        <Avatar src="/placeholder.svg?height=100&width=100" alt="User profile" size="md" />
      </header>

      {/* Search Content */}
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <motion.h1
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What do you need
          <br />
          help with today?
        </motion.h1>

        <motion.p
          className="text-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Need an extra hand? Tell us who you're looking for and
          <br />
          your budget.
        </motion.p>

        <motion.div
          className="mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <Input
              type="text"
              placeholder="E.g., 'Kitchen helper, friendly male, $100 budget.'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-24 py-6 text-lg"
            />
            <Button
              variant="primary"
              className="absolute right-1 top-1 bottom-1"
              href={searchQuery ? "/search-results" : "#"}
            >
              Search
            </Button>
          </div>
        </motion.div>

        <motion.p
          className="text-sm text-gray-500 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Be specific! Mention the task, personality, and budget to get the best matches.
        </motion.p>
      </div>
    </main>
  )
}
