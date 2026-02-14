"use client"

import { Calendar, MapPin, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const races = [
  {
    round: 23,
    name: "ABU DHABI",
    fullName: "Etihad Airways Abu Dhabi Grand Prix",
    circuit: "Yas Marina Circuit",
    date: "DEC 6-8",
    status: "next",
    country: "🇦🇪",
    image: "/yas-marina-f1-circuit-at-night-with-lights.jpg",
  },
  {
    round: 22,
    name: "QATAR",
    fullName: "Qatar Airways Qatar Grand Prix",
    circuit: "Lusail International Circuit",
    date: "NOV 29 - DEC 1",
    status: "completed",
    winner: "M. Verstappen",
    country: "🇶🇦",
    image: "/lusail-f1-circuit-qatar-night-race.jpg",
  },
  {
    round: 21,
    name: "LAS VEGAS",
    fullName: "Heineken Silver Las Vegas Grand Prix",
    circuit: "Las Vegas Strip Circuit",
    date: "NOV 21-23",
    status: "completed",
    winner: "G. Russell",
    country: "🇺🇸",
    image: "/las-vegas-f1-circuit-strip-night-neon-lights.jpg",
  },
]

export function RaceCalendar() {
  return (
    <section id="races" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold tracking-widest text-primary">2025 CALENDAR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">RACE SCHEDULE</h2>
          </div>
          <a href="#" className="text-primary text-sm font-semibold tracking-wider hover:underline mt-4 sm:mt-0">
            VIEW FULL CALENDAR →
          </a>
        </div>

        {/* Race Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {races.map((race) => (
            <div
              key={race.round}
              className={`group relative bg-card rounded-xl border overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 ${
                race.status === "next" ? "border-primary" : "border-border"
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={race.image || "/placeholder.svg"}
                  alt={race.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Status Badge */}
                {race.status === "next" && (
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    NEXT RACE
                  </div>
                )}
                {race.status === "completed" && (
                  <div className="absolute top-4 left-4 bg-muted text-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    COMPLETED
                  </div>
                )}

                {/* Round Number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-foreground/20">R{race.round}</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl">{race.country}</span>
                  <h3 className="text-2xl font-bold text-foreground tracking-tight">{race.name}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: "var(--font-inter)" }}>
                  {race.fullName}
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{race.circuit}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="font-bold text-foreground">{race.date}</span>
                  </div>

                  {race.winner && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">Winner: </span>
                      <span className="text-accent font-semibold">{race.winner}</span>
                    </div>
                  )}
                </div>

                {race.status === "next" && (
                  <Button className="w-full mt-4 bg-primary text-primary-foreground">
                    GET TICKETS
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
