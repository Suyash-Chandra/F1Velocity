"use client"

import { Trophy, TrendingUp, TrendingDown, Minus, Medal } from "lucide-react"
import { useState } from "react"
import { allDrivers, teams } from "@/lib/data"

// Create full driver standings from data
const driverStandings = allDrivers
  .map((driver, index) => {
    const prevPos = index
    const currentPos = index
    let change: "up" | "down" | "same" = "same"
    if (currentPos < prevPos) change = "up"
    if (currentPos > prevPos) change = "down"

    return {
      pos: index + 1,
      driver: `${driver.firstName} ${driver.lastName}`,
      team: driver.team,
      teamColor: driver.teamColor,
      points: driver.stats.points,
      wins: driver.stats.wins,
      poles: driver.stats.poles,
      podiums: driver.stats.podiums,
      change,
      country: driver.countryFlag,
    }
  })
  .sort((a, b) => b.points - a.points)
  .map((driver, index) => ({ ...driver, pos: index + 1 }))

// Create full constructor standings from teams
const teamStandings = teams
  .map((team) => {
    const teamDrivers = allDrivers.filter((d) => d.teamId === team.id)
    const totalPoints = teamDrivers.reduce((sum, d) => sum + d.stats.points, 0)

    return {
      pos: 0,
      team: team.shortName,
      points: totalPoints,
      color: team.color,
      wins: team.wins,
      poles: team.poles,
    }
  })
  .sort((a, b) => b.points - a.points)
  .map((team, index) => ({ ...team, pos: index + 1 }))

export function FullStandings() {
  const [activeTab, setActiveTab] = useState<"drivers" | "constructors">("drivers")

  return (
    <section className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-6 h-6 text-accent" />
            <span className="text-sm font-semibold tracking-widest text-accent">2025 SEASON</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight mb-4">CHAMPIONSHIP STANDINGS</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete standings for the 2025 Formula 1 World Championship
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("drivers")}
            className={`px-6 py-3 font-bold tracking-wider transition-colors relative ${
              activeTab === "drivers" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            DRIVERS
            {activeTab === "drivers" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />}
          </button>
          <button
            onClick={() => setActiveTab("constructors")}
            className={`px-6 py-3 font-bold tracking-wider transition-colors relative ${
              activeTab === "constructors" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            CONSTRUCTORS
            {activeTab === "constructors" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />}
          </button>
        </div>

        {/* Driver Standings */}
        {activeTab === "drivers" && (
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-bold tracking-wider text-foreground">POS</th>
                    <th className="px-4 py-4 text-left text-sm font-bold tracking-wider text-foreground">DRIVER</th>
                    <th className="px-4 py-4 text-left text-sm font-bold tracking-wider text-foreground">TEAM</th>
                    <th className="px-4 py-4 text-right text-sm font-bold tracking-wider text-foreground">WINS</th>
                    <th className="px-4 py-4 text-right text-sm font-bold tracking-wider text-foreground">POLES</th>
                    <th className="px-4 py-4 text-right text-sm font-bold tracking-wider text-foreground">PODIUMS</th>
                    <th className="px-4 py-4 text-right text-sm font-bold tracking-wider text-foreground">POINTS</th>
                    <th className="px-4 py-4 text-center text-sm font-bold tracking-wider text-foreground"></th>
                  </tr>
                </thead>
                <tbody>
                  {driverStandings.map((driver, index) => (
                    <tr
                      key={driver.driver}
                      className={`border-b border-border transition-colors hover:bg-muted/30 ${
                        index < 3 ? "bg-accent/5" : ""
                      }`}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          {index === 0 && <Medal className="w-5 h-5 text-yellow-500" />}
                          {index === 1 && <Medal className="w-5 h-5 text-gray-400" />}
                          {index === 2 && <Medal className="w-5 h-5 text-amber-700" />}
                          <span className="font-bold text-lg">{driver.pos}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{driver.country}</span>
                          <span className="font-bold text-foreground">{driver.driver}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-8 rounded-full" style={{ backgroundColor: driver.teamColor }} />
                          <span className="text-muted-foreground">{driver.team}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right font-semibold">{driver.wins}</td>
                      <td className="px-4 py-4 text-right font-semibold">{driver.poles}</td>
                      <td className="px-4 py-4 text-right font-semibold">{driver.podiums}</td>
                      <td className="px-4 py-4 text-right">
                        <span className="text-xl font-bold text-foreground">{driver.points}</span>
                      </td>
                      <td className="px-4 py-4 text-center">
                        {driver.change === "up" && <TrendingUp className="w-4 h-4 text-green-500 inline" />}
                        {driver.change === "down" && <TrendingDown className="w-4 h-4 text-red-500 inline" />}
                        {driver.change === "same" && <Minus className="w-4 h-4 text-muted-foreground inline" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Constructor Standings */}
        {activeTab === "constructors" && (
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50 border-b border-border">
                  <tr>
                    <th className="px-4 py-4 text-left text-sm font-bold tracking-wider text-foreground">POS</th>
                    <th className="px-4 py-4 text-left text-sm font-bold tracking-wider text-foreground">TEAM</th>
                    <th className="px-4 py-4 text-right text-sm font-bold tracking-wider text-foreground">WINS</th>
                    <th className="px-4 py-4 text-right text-sm font-bold tracking-wider text-foreground">POLES</th>
                    <th className="px-4 py-4 text-right text-sm font-bold tracking-wider text-foreground">POINTS</th>
                    <th className="px-4 py-4 text-left text-sm font-bold tracking-wider text-foreground"></th>
                  </tr>
                </thead>
                <tbody>
                  {teamStandings.map((team, index) => (
                    <tr
                      key={team.team}
                      className={`border-b border-border transition-colors hover:bg-muted/30 ${
                        index < 3 ? "bg-accent/5" : ""
                      }`}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          {index === 0 && <Medal className="w-5 h-5 text-yellow-500" />}
                          {index === 1 && <Medal className="w-5 h-5 text-gray-400" />}
                          {index === 2 && <Medal className="w-5 h-5 text-amber-700" />}
                          <span className="font-bold text-lg">{team.pos}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-10 rounded-full" style={{ backgroundColor: team.color }} />
                          <span className="font-bold text-foreground">{team.team}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right font-semibold">{team.wins}</td>
                      <td className="px-4 py-4 text-right font-semibold">{team.poles}</td>
                      <td className="px-4 py-4 text-right">
                        <span className="text-xl font-bold text-foreground">{team.points}</span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="w-full max-w-xs">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${(team.points / teamStandings[0].points) * 100}%`,
                                backgroundColor: team.color,
                              }}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
