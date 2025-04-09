import type { Metadata } from "next";
import { Passion_One, Poppins } from "next/font/google";
import "./globals.css";



export const metadata:Metadata = {
  title: 'Handylink — Hire Trusted Taskers for Everyday Help',
  description: 'Handylink connects you with reliable taskers for cleaning, plumbing, painting, shopping, and more. Get your tasks done easily and efficiently.',
  keywords: ['handylink', 'taskers', 'hire help', 'cleaning services', 'plumbing', 'painting', 'shopping help', 'home services', 'freelance taskers', 'TaskRabbit alternative'],
  openGraph: {
    title: 'Handylink — Hire Trusted Taskers for Everyday Help',
    description: 'Need a hand? Handylink connects you with trusted taskers for home and personal projects.',
    url: 'https://yourdomain.com',
    siteName: 'Handylink',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Handylink Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handylink — Hire Trusted Taskers for Everyday Help',
    description: 'From cleaning to shopping, hire skilled taskers with Handylink and get things done effortlessly.',
    images: ['https://yourdomain.com/twitter-image.jpg'],
  },
  authors: [{ name: 'Handylink Team' }],
  creator: 'Handylink Team'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
