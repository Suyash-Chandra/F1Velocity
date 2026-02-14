"use client"

import { allDrivers } from "@/lib/data"
import { Trophy, Flag, Award, ChevronRight } from "lucide-react"
import Link from "next/link"

export function DriversGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="text-3xl font-bold text-primary mb-1">20</div>
            <div className="text-sm text-muted-foreground">DRIVERS</div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="text-3xl font-bold text-accent mb-1">10</div>
            <div className="text-sm text-muted-foreground">TEAMS</div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="text-3xl font-bold text-foreground mb-1">15</div>
            <div className="text-sm text-muted-foreground">NATIONALITIES</div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <div className="text-3xl font-bold text-foreground mb-1">13</div>
            <div className="text-sm text-muted-foreground">CHAMPIONS</div>
          </div>
        </div>

        {/* Drivers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allDrivers.map((driver) => (
            <Link
              key={driver.id}
              href={`/drivers/${driver.id}`}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Driver Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={driver.image || "/placeholder.svg"}
                  alt={`${driver.firstName} ${driver.lastName}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                {/* Driver Number */}
                <div
                  className="absolute top-4 right-4 text-6xl font-bold opacity-50"
                  style={{ color: driver.teamColor }}
                >
                  {driver.number}
                </div>

                {/* Country Flag */}
                <div className="absolute top-4 left-4 text-3xl">{driver.countryFlag}</div>

                {/* Team Color Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: driver.teamColor }} />
              </div>

              {/* Driver Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold tracking-wider text-muted-foreground">
                    {driver.team.toUpperCase()}
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3">
                  {driver.firstName} <span style={{ color: driver.teamColor }}>{driver.lastName}</span>
                </h3>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-accent" />
                    <span className="text-sm font-semibold text-foreground">{driver.stats.wins}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Flag className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm font-semibold text-foreground">{driver.stats.poles}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-muted-foreground" />
                    <span className="text-sm font-semibold text-foreground">{driver.stats.championships}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
