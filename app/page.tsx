"use client"

import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
    </main>
  )
}
