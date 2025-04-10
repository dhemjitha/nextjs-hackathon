"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageContainer } from "../../components/ui/page-container"
import { Button } from "../../components/ui/button"
import { Logo } from "../../components/ui/logo"
import { ServiceTag } from "../../components/ui/service-tag"
import { Textarea } from "../../components/ui/textarea"

export default function CreateProfile() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Cleaning"])
  const [bio, setBio] = useState("")

  const services = ["Cleaning", "Shopping", "Mount TV", "Plumbing"]

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-6 left-6">
        <Logo showText />
      </div>

      <PageContainer maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">
            Welcome to <span className="text-green-light">Handy</span> Link
          </h1>
          <p className="text-gray-600">Finish setting up your profile</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            {services.map((service) => (
              <ServiceTag
                key={service}
                label={service}
                selected={selectedServices.includes(service)}
                onClick={() => toggleService(service)}
              />
            ))}
          </div>

          <Textarea
            label="About Me"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us a bit about yourself..."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button variant="primary" fullWidth href="/add-task">
            Finish Setup
          </Button>
        </motion.div>
      </PageContainer>
    </main>
  )
}
