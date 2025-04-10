"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "../components/animations/fade-in"
import { Button } from "../components/ui/button"
import { StepCard } from "../components/ui/step-card"
import { Logo } from "../components/ui/logo"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav
        className="flex justify-between items-center py-6 px-6 md:px-16 lg:px-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
        <Button variant="primary" href="/login">
          Login
        </Button>
      </motion.nav>

      {/* Hero Section */}
      <section className="px-6 md:px-16 lg:px-24 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between">
        <FadeIn direction="left" delay={0.2} className="md:w-1/2 mb-10 md:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-green-light">✦</div>
            <p className="uppercase tracking-wider text-sm font-medium">Cleaning Services</p>
          </div>
          <h1 className="hero-title mb-4">
            Find Trusted
            <br />
            Cleaning Help, Fast.
          </h1>
          <p className="hero-description">
            Whether it's a quick tidy-up or a deep clean, connect instantly with skilled taskers ready to make your
            space shine.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" href="/select-role">
              Get Started
            </Button>
            <Button variant="text" href="#how-it-works">
              How It Works?
            </Button>
          </div>
        </FadeIn>
        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="rounded-3xl overflow-hidden">
            <Image
              src="/images/cleaning-hero.png"
              alt="Woman cleaning kitchen"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 md:px-16 lg:px-24 py-20 md:py-32 relative">
        {/* Background decorative elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-light opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-green-light opacity-10 rounded-full blur-3xl"></div>

        <FadeIn direction="up" className="mb-16">
          <p className="section-title text-black">HOW IT WORKS</p>
          <h2 className="section-heading">Let's see how it works</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Step 1 */}
          <StepCard
            number="01"
            title="Tell us what you need"
            description="Type your task or service request — we'll suggest the best options instantly."
            delay={0.1}
          />

          {/* Arrow 1 */}
          <div className="hidden md:block absolute left-[28%] top-[15%] w-[200px]">
            <Image src="/images/arrow-right.png" alt="Arrow pointing right" width={200} height={50} />
          </div>

          {/* Step 2 */}
          <StepCard
            number="02"
            title="Browse recommended Taskers"
            description="Review Tasker profiles with details like skills, pricing, and customer ratings."
            delay={0.3}
          />

          {/* Arrow 2 */}
          <div className="hidden md:block absolute right-[28%] top-[15%] w-[200px]">
            <Image src="/images/arrow-left.png" alt="Arrow pointing left" width={200} height={50} />
          </div>

          {/* Step 3 */}
          <StepCard
            number="03"
            title="Connect directly"
            description="Reach out to your selected Tasker and arrange the details."
            delay={0.5}
          />
        </div>
      </section>
    </main>
  )
}
