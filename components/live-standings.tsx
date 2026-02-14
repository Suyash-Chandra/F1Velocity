"use client"

import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react"
import Link from "next/link"

const driverStandings = [
  { pos: 1, driver: "Max Verstappen", team: "Red Bull Racing", points: 575, change: "up", country: "🇳🇱" },
  { pos: 2, driver: "Lando Norris", team: "McLaren", points: 432, change: "up", country: "🇬🇧" },
  { pos: 3, driver: "Charles Leclerc", team: "Ferrari", points: 407, change: "same", country: "🇲🇨" },
  { pos: 4, driver: "Oscar Piastri", team: "McLaren", points: 378, change: "up", country: "🇦🇺" },
  { pos: 5, driver: "Carlos Sainz", team: "Ferrari", points: 362, change: "down", country: "🇪🇸" },
]

const teamStandings = [
  { pos: 1, team: "McLaren", points: 810, color: "#FF8000" },
  { pos: 2, team: "Ferrari", points: 769, color: "#DC0000" },
  { pos: 3, team: "Red Bull Racing", points: 701, color: "#1E41FF" },
  { pos: 4, team: "Mercedes", points: 468, color: "#00D2BE" },
  { pos: 5, team: "Aston Martin", points: 94, color: "#006F62" },
]

export function LiveStandings() {
  return (
    <section id="standings" className="py-20 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-6 h-6 text-accent" />
              <span className="text-sm font-semibold tracking-widest text-accent">2025 SEASON</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">CHAMPIONSHIP STANDINGS</h2>
          </div>
          <Link
            href="/standings"
            className="text-primary text-sm font-semibold tracking-wider hover:underline mt-4 sm:mt-0"
          >
            VIEW FULL STANDINGS →
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Driver Standings */}
          <div className="bg-secondary/50 rounded-xl border border-border overflow-hidden">
            <div className="bg-primary/10 border-b border-border px-6 py-4">
              <h3 className="text-lg font-bold tracking-wider text-foreground">DRIVERS CHAMPIONSHIP</h3>
            </div>
            <div className="p-4">
              {driverStandings.map((driver, index) => (
                <div
                  key={driver.driver}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 ${
                    index === 0 ? "bg-accent/10 border border-accent/30" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                      index === 0 ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    {driver.pos}
                  </div>
                  <div className="text-2xl">{driver.country}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-foreground truncate">{driver.driver}</div>
                    <div className="text-sm text-muted-foreground truncate">{driver.team}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {driver.change === "up" && <TrendingUp className="w-4 h-4 text-green-500" />}
                    {driver.change === "down" && <TrendingDown className="w-4 h-4 text-red-500" />}
                    {driver.change === "same" && <Minus className="w-4 h-4 text-muted-foreground" />}
                  </div>
                  <div className="text-xl font-bold text-foreground">{driver.points}</div>
                  <div className="text-xs text-muted-foreground">PTS</div>
                </div>
              ))}
            </div>
          </div>

          {/* Constructor Standings */}
          <div className="bg-secondary/50 rounded-xl border border-border overflow-hidden">
            <div className="bg-primary/10 border-b border-border px-6 py-4">
              <h3 className="text-lg font-bold tracking-wider text-foreground">CONSTRUCTORS CHAMPIONSHIP</h3>
            </div>
            <div className="p-4">
              {teamStandings.map((team, index) => (
                <div
                  key={team.team}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 ${
                    index === 0 ? "bg-accent/10 border border-accent/30" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                      index === 0 ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    {team.pos}
                  </div>
                  <div className="w-1 h-10 rounded-full" style={{ backgroundColor: team.color }} />
                  <div className="flex-1">
                    <div className="font-bold text-foreground">{team.team}</div>
                  </div>
                  <div className="flex-1 max-w-[200px]">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${(team.points / 810) * 100}%`,
                          backgroundColor: team.color,
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-foreground min-w-[60px] text-right">{team.points}</div>
                  <div className="text-xs text-muted-foreground">PTS</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
