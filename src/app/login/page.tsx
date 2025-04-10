"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageContainer } from "../../components/ui/page-container"
import { Button } from "../../components/ui/button"
import { Logo } from "../../components/ui/logo"
import { Input } from "../../components/ui/input"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <PageContainer maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          <Logo showText className="mb-8" />
          <h1 className="text-3xl font-bold mb-2">Welcome back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4 mb-6"
        >
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <Button variant="primary" fullWidth href="/profile">
            Sign In
          </Button>

          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/select-role" className="text-green-light hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </motion.div>
      </PageContainer>
    </main>
  )
}
