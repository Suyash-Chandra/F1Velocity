"use client"

import { useEffect, useState } from "react"
import { Play, ChevronRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [countdown, setCountdown] = useState({ days: 3, hours: 14, mins: 27, secs: 45 })

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, mins, secs } = prev
        secs--
        if (secs < 0) {
          secs = 59
          mins--
        }
        if (mins < 0) {
          mins = 59
          hours--
        }
        if (hours < 0) {
          hours = 23
          days--
        }
        if (days < 0) {
          days = 0
          hours = 0
          mins = 0
          secs = 0
        }
        return { days, hours, mins, secs }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/f1-race-car-speeding-on-track-at-night-with-dramat.jpg" alt="F1 Race Car" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Speed Lines Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-speed-lines"
            style={{
              top: `${20 + i * 15}%`,
              width: "40%",
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Race Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold tracking-wider text-primary">NEXT RACE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-4">
            <span className="text-foreground">ABU DHABI</span>
            <br />
            <span className="text-primary">GRAND PRIX</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl text-muted-foreground font-light tracking-wide mb-8 max-w-xl"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            The season finale showdown. 55 laps of pure adrenaline under the lights at Yas Marina Circuit.
          </p>

          {/* Countdown */}
          <div className="flex gap-4 sm:gap-6 mb-10">
            {Object.entries(countdown).map(([label, value]) => (
              <div key={label} className="text-center">
                <div className="bg-card border border-border rounded-lg p-3 sm:p-4 min-w-[60px] sm:min-w-[80px]">
                  <span className="text-2xl sm:text-4xl font-bold text-foreground">
                    {String(value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground uppercase mt-2 block tracking-wider">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-pulse-glow"
            >
              <Play className="mr-2 h-5 w-5" />
              WATCH LIVE
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-card text-lg px-8 py-6 bg-transparent"
            >
              RACE SCHEDULE
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-10 right-4 lg:right-20 hidden lg:block">
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold tracking-wider text-accent">TOP SPEED</span>
            </div>
            <div className="text-5xl font-bold text-foreground">372</div>
            <div className="text-sm text-muted-foreground">KM/H</div>
          </div>
        </div>
      </div>
    </section>
  )
}
