import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { poppins, passionOne } from "./fonts"

export const metadata: Metadata = {
  title: "Handy Link - Find Trusted Help, Fast",
  description: "Connect instantly with skilled taskers ready to make your space shine.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={` ${passionOne.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
