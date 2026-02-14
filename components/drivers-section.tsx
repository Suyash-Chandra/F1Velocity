"use client"

import { ChevronLeft, ChevronRight, Users } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { allDrivers } from "@/lib/data"

const featuredDrivers = allDrivers.slice(0, 5)

export function DriversSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextDriver = () => {
    setActiveIndex((prev) => (prev + 1) % featuredDrivers.length)
  }

  const prevDriver = () => {
    setActiveIndex((prev) => (prev - 1 + featuredDrivers.length) % featuredDrivers.length)
  }

  return (
    <section id="drivers" className="py-20 bg-card relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at center, ${featuredDrivers[activeIndex].teamColor}40 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold tracking-widest text-primary">MEET THE DRIVERS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">CHAMPIONSHIP CONTENDERS</h2>
          </div>
          <Link
            href="/drivers"
            className="text-primary text-sm font-semibold tracking-wider hover:underline mt-4 sm:mt-0"
          >
            VIEW ALL DRIVERS →
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Driver Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <img
                src={featuredDrivers[activeIndex].image || "/placeholder.svg"}
                alt={`${featuredDrivers[activeIndex].firstName} ${featuredDrivers[activeIndex].lastName}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

              {/* Driver Number */}
              <div
                className="absolute bottom-4 right-4 text-[150px] font-bold leading-none opacity-30"
                style={{ color: featuredDrivers[activeIndex].teamColor }}
              >
                {featuredDrivers[activeIndex].number}
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 left-8 flex gap-2">
              <button
                onClick={prevDriver}
                className="w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextDriver}
                className="w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Driver Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{featuredDrivers[activeIndex].countryFlag}</span>
              <div
                className="h-1 flex-1 rounded-full"
                style={{ backgroundColor: featuredDrivers[activeIndex].teamColor }}
              />
            </div>

            <h3 className="text-5xl sm:text-6xl font-bold text-foreground mb-2 tracking-tight">
              {featuredDrivers[activeIndex].firstName}
              <br />
              <span style={{ color: featuredDrivers[activeIndex].teamColor }}>
                {featuredDrivers[activeIndex].lastName}
              </span>
            </h3>

            <p className="text-xl text-muted-foreground mb-8">{featuredDrivers[activeIndex].team}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold text-foreground">{featuredDrivers[activeIndex].stats.wins}</div>
                <div className="text-sm text-muted-foreground">WINS</div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold text-foreground">{featuredDrivers[activeIndex].stats.poles}</div>
                <div className="text-sm text-muted-foreground">POLES</div>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <div className="text-3xl font-bold text-accent">{featuredDrivers[activeIndex].stats.championships}</div>
                <div className="text-sm text-muted-foreground">TITLES</div>
              </div>
            </div>

            {/* Driver Thumbnails */}
            <div className="flex gap-3">
              {featuredDrivers.map((driver, index) => (
                <button
                  key={driver.number}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === activeIndex ? "border-primary scale-110" : "border-border opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={driver.image || "/placeholder.svg"}
                    alt={`${driver.firstName} ${driver.lastName}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
