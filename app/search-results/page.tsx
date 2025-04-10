"use client"

import { useState } from "react"
import { Logo } from "@/components/ui/logo"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TaskerCard } from "@/components/ui/tasker-card"
import { Avatar } from "@/components/ui/avatar"

export default function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("Kitchen helper, friendly male, $100 budget")

  // Mock data for taskers
  const taskers = [
    {
      id: "1",
      name: "Kevin Kibet",
      rating: 4.5,
      reviewCount: 120,
      service: "Cleaning",
      gender: "Male",
      price: 90,
      description: "Friendly and experienced kitchen assistant.",
    },
    {
      id: "2",
      name: "Kevin Kibet",
      rating: 4.5,
      reviewCount: 120,
      service: "Cleaning",
      gender: "Male",
      price: 90,
      description: "Friendly and experienced kitchen assistant.",
    },
    {
      id: "3",
      name: "Kevin Kibet",
      rating: 4.5,
      reviewCount: 120,
      service: "Cleaning",
      gender: "Male",
      price: 90,
      description: "Friendly and experienced kitchen assistant.",
    },
    {
      id: "4",
      name: "Kevin Kibet",
      rating: 4.5,
      reviewCount: 120,
      service: "Cleaning",
      gender: "Male",
      price: 90,
      description: "Friendly and experienced kitchen assistant.",
    },
    {
      id: "5",
      name: "Kevin Kibet",
      rating: 4.5,
      reviewCount: 120,
      service: "Cleaning",
      gender: "Male",
      price: 90,
      description: "Friendly and experienced kitchen assistant.",
    },
  ]

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <Logo showText />
        <Avatar src="/placeholder.svg?height=100&width=100" alt="User profile" size="md" />
      </header>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-6 py-6">
        <div className="relative">
          <Input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pr-24" />
          <Button variant="primary" className="absolute right-1 top-1 bottom-1">
            Search
          </Button>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {taskers.map((tasker, index) => (
            <TaskerCard
              key={tasker.id}
              id={tasker.id}
              name={tasker.name}
              rating={tasker.rating}
              reviewCount={tasker.reviewCount}
              service={tasker.service}
              gender={tasker.gender}
              price={tasker.price}
              description={tasker.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
