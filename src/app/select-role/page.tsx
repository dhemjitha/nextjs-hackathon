"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageContainer } from "../../components/ui/page-container"
import { Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import { Logo } from "../../components/ui/logo"
import { ArrowRight } from "lucide-react"

export default function SelectRole() {
  const [selectedRole, setSelectedRole] = useState<"client" | "tasker" | null>(null)

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
            How would you like to use our <span className="text-green-light">Handy</span> Link?
          </h1>
          <p className="text-gray-600">Finish setting up your profile</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <Card onClick={() => setSelectedRole("client")} selected={selectedRole === "client"} className="p-6">
            <h2 className="text-xl font-bold mb-2">I'm a Client</h2>
            <p className="text-gray-600">
              I need help with tasks. Hire trusted taskers for cleaning, plumbing, shopping, painting, and more.
            </p>
          </Card>

          <Card onClick={() => setSelectedRole("tasker")} selected={selectedRole === "tasker"} className="p-6">
            <h2 className="text-xl font-bold mb-2">I'm a Tasker</h2>
            <p className="text-gray-600">
              I want to offer my services. Find clients and get paid for helping with everyday tasks.
            </p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Button
            variant="primary"
            fullWidth
            href={selectedRole ? "/create-profile" : "#"}
            icon={<ArrowRight size={18} />}
            onClick={(e) => {
              if (!selectedRole) {
                e.preventDefault()
              }
            }}
          >
            Next
          </Button>
        </motion.div>
      </PageContainer>
    </main>
  )
}
