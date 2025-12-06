import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const playfairDisplay = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elegant - Premium Digital Solutions",
  description: "Sophisticated web development, elegant branding, and digital strategy that transforms your business.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
