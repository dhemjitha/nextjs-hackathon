"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageContainer } from "../../components/ui/page-container"
import { Button } from "../../components/ui/button"
import { Logo } from "../../components/ui/logo"
import { Card } from "../../components/ui/card"
import { Avatar } from "../../components/ui/avatar"
import { Rating } from "../../components/ui/rating"
import { Textarea } from "../../components/ui/textarea"
import { ArrowLeft } from "lucide-react"

export default function Profile() {
  const [reviewText, setReviewText] = useState("")

  // Mock data
  const profile = {
    name: "Kevin Kibet",
    gender: "Male",
    bio: "Friendly and experienced kitchen assistant.",
    rating: 4.5,
    services: [
      { id: 1, type: "Cleaning", price: 90, description: "Friendly and experienced kitchen assistant." },
      { id: 2, type: "Cleaning", price: 90, description: "Friendly and experienced kitchen assistant." },
      { id: 3, type: "Cleaning", price: 90, description: "Friendly and experienced kitchen assistant." },
    ],
    reviews: [
      {
        id: 1,
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
      {
        id: 2,
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
      {
        id: 3,
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
      {
        id: 4,
        name: "Kevin Kibet",
        rating: 4.5,
        text: "John was absolutely fantastic! He helped me prep meals for a family gathering, and everything was smooth. He's friendly, fast, and really knows his way around the kitchen. Highly recommended!",
      },
    ],
  }

  return (
    <main className="min-h-screen pb-20">
      <motion.nav
        className="flex items-center py-6 px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button variant="text" href="/" className="mr-auto" icon={<ArrowLeft size={18} />}>
          <span className="sr-only">Back</span>
        </Button>

        <Logo showText className="absolute left-1/2 transform -translate-x-1/2" />
      </motion.nav>

      <PageContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <Avatar src="/placeholder.svg?height=200&width=200" alt={profile.name} size="xl" className="mb-4" />
          <h1 className="text-2xl font-bold mb-1">
            {profile.name} • {profile.gender}
          </h1>
          <Rating value={profile.rating} className="mb-2" />
          <p className="text-gray-600 max-w-md">{profile.bio}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold mb-4">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profile.services.map((service) => (
              <Card key={service.id} className="p-4">
                <div className="mb-2 text-sm text-gray-500">
                  {service.type} • ${service.price} per task
                </div>
                <p className="mb-4">{service.description}</p>
                <Button variant="primary" fullWidth>
                  Book Now
                </Button>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-4">Reviews</h2>

          <Card className="p-4 mb-6">
            <div className="flex items-center mb-4">
              <Avatar src="/placeholder.svg?height=50&width=50" alt={profile.name} size="sm" className="mr-2" />
              <div>
                <div className="font-medium">{profile.name}</div>
                <Rating value={profile.rating} size="sm" />
              </div>
            </div>

            <Textarea
              placeholder="Would you recommend me?"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="mb-4"
            />

            <Button variant="primary">Publish review</Button>
          </Card>

          <div className="space-y-4">
            {profile.reviews.map((review) => (
              <Card key={review.id} className="p-4">
                <div className="flex items-center mb-2">
                  <Avatar src="/placeholder.svg?height=50&width=50" alt={review.name} size="sm" className="mr-2" />
                  <div>
                    <div className="font-medium">{review.name}</div>
                    <Rating value={review.rating} size="sm" />
                  </div>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </Card>
            ))}
          </div>
        </motion.div>
      </PageContainer>
    </main>
  )
}
