"use client"
import { motion } from "framer-motion"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Rating } from "@/components/ui/rating"
import { Card } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function TaskerProfile({ params }: { params: { id: string } }) {
  // Mock data for the tasker
  const tasker = {
    id: params.id,
    name: "Kevin Kibet",
    gender: "Male",
    rating: 4.5,
    price: 90,
    service: "Cleaning",
    description: "Friendly and experienced kitchen assistant.",
    reviews: [
      {
        id: "1",
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
      {
        id: "2",
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
      {
        id: "3",
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
      {
        id: "4",
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
      {
        id: "5",
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
    ],
  }

  return (
    <main className="min-h-screen pb-20">
      {/* Header */}
      <motion.nav
        className="flex items-center py-6 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="text" href="/search-results" className="mr-auto" icon={<ArrowLeft size={18} />}>
          <span className="sr-only">Back</span>
        </Button>

        <Logo showText className="absolute left-1/2 transform -translate-x-1/2" />
      </motion.nav>

      {/* Profile */}
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          className="flex flex-col items-center text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Avatar src="/placeholder.svg?height=200&width=200" alt={tasker.name} size="xl" className="mb-4" />
          <h1 className="text-2xl font-bold mb-1">{tasker.name}</h1>
          <Rating value={tasker.rating} className="mb-2" />
          <p className="text-gray-600 mb-2">
            {tasker.service} • {tasker.gender} • ${tasker.price} per task
          </p>
          <p className="text-gray-700 max-w-md mb-6">{tasker.description}</p>

          <Button variant="primary">Book Now</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tasker.reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Card className="p-4">
                  <div className="flex items-center mb-2">
                    <Avatar src="/placeholder.svg?height=50&width=50" alt={review.name} size="sm" className="mr-2" />
                    <div>
                      <div className="font-medium">{review.name}</div>
                      <Rating value={review.rating} size="sm" />
                    </div>
                  </div>
                  <p className="text-gray-700">{review.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
