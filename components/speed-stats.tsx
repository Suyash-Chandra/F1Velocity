"use client"

import { Gauge, Timer, Flame, Wind } from "lucide-react"

const stats = [
  {
    icon: Gauge,
    value: "372",
    unit: "KM/H",
    label: "TOP SPEED",
    description: "Recorded at Monza 2024",
  },
  {
    icon: Timer,
    value: "1.80",
    unit: "SEC",
    label: "FASTEST PIT STOP",
    description: "Red Bull Racing - Qatar",
  },
  {
    icon: Flame,
    value: "1,050",
    unit: "HP",
    label: "ENGINE POWER",
    description: "Hybrid Power Unit",
  },
  {
    icon: Wind,
    value: "5.5",
    unit: "G",
    label: "MAX G-FORCE",
    description: "Braking into corners",
  },
]

export function SpeedStats() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-4">
            SPEED <span className="text-primary">UNLEASHED</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: "var(--font-inter)" }}>
            The pinnacle of motorsport engineering. Where milliseconds matter and technology pushes beyond limits.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-card rounded-xl border border-border p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Value */}
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-foreground">{stat.value}</span>
                <span className="text-lg text-muted-foreground">{stat.unit}</span>
              </div>

              {/* Label */}
              <div className="text-sm font-bold tracking-wider text-primary mb-2">{stat.label}</div>

              {/* Description */}
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-inter)" }}>
                {stat.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
