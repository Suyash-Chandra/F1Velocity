"use client"

import { teams, allDrivers } from "@/lib/data"
import { Trophy, Users, ChevronRight } from "lucide-react"
import Link from "next/link"

export function TeamsGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teams Grid */}
        <div className="space-y-6">
          {teams.map((team) => {
            const teamDrivers = allDrivers.filter((d) => d.teamId === team.id)

            return (
              <Link
                key={team.id}
                href={`/teams/${team.id}`}
                className="group block bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-[1fr,2fr] gap-0">
                  {/* Car Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img
                      src={team.carImage || "/placeholder.svg"}
                      alt={`${team.name} car`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card lg:block hidden" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent lg:hidden" />

                    {/* Team Color Accent */}
                    <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: team.color }} />
                  </div>

                  {/* Team Info */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${team.color}20` }}
                      >
                        <img src={team.logo || "/placeholder.svg"} alt={team.name} className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground block">
                          {team.countryFlag} {team.country.toUpperCase()}
                        </span>
                        <h3 className="text-2xl font-bold text-foreground">{team.name}</h3>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                    </div>

                    {/* Team Stats */}
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-accent" />
                        <span className="font-bold text-foreground">{team.championships}</span>
                        <span className="text-sm text-muted-foreground">Championships</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-primary rounded-full" />
                        <span className="font-bold text-foreground">{team.wins}</span>
                        <span className="text-sm text-muted-foreground">Wins</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-muted rounded-full" />
                        <span className="font-bold text-foreground">{team.poles}</span>
                        <span className="text-sm text-muted-foreground">Poles</span>
                      </div>
                    </div>

                    {/* Team Drivers */}
                    <div className="flex items-center gap-4">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">DRIVERS:</span>
                      <div className="flex items-center gap-3">
                        {teamDrivers.map((driver) => (
                          <div key={driver.id} className="flex items-center gap-2">
                            <div
                              className="w-8 h-8 rounded-full overflow-hidden border-2"
                              style={{ borderColor: team.color }}
                            >
                              <img
                                src={driver.image || "/placeholder.svg"}
                                alt={`${driver.firstName} ${driver.lastName}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-sm font-semibold text-foreground hidden sm:inline">
                              {driver.lastName}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
