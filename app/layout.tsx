import type React from "react"
import type { Metadata, Viewport } from "next"
import { Oswald, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "VELOCITY F1 - The Ultimate Racing Experience",
  description:
    "Experience the thrill of Formula 1 racing. Live standings, race schedules, driver profiles, and exclusive content.",
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#dc2626",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${oswald.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
