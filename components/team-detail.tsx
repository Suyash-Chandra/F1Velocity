"use client"

import { ArrowLeft, Trophy, Flag, Zap, MapPin, User, Wrench, Calendar, Star, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { allDrivers } from "@/lib/data"

interface Team {
  id: string
  name: string
  shortName: string
  country: string
  countryFlag: string
  base: string
  teamPrincipal: string
  technicalChief: string
  chassis: string
  powerUnit: string
  firstEntry: number
  championships: number
  wins: number
  poles: number
  fastestLaps: number
  color: string
  secondaryColor: string
  logo: string
  carImage: string
  description: string
  achievements: string[]
}

export function TeamDetail({ team }: { team: Team }) {
  const teamDrivers = allDrivers.filter((d) => d.teamId === team.id)

  return (
    <section className="pt-24 pb-16">
      {/* Hero Background */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] opacity-20"
        style={{
          background: `radial-gradient(ellipse at top center, ${team.color}60 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <Link href="/teams">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Teams
          </Button>
        </Link>

        {/* Team Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${team.color}20` }}
          >
            <img src={team.logo || "/placeholder.svg"} alt={team.name} className="w-14 h-14 object-contain" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{team.countryFlag}</span>
              <span className="text-sm font-semibold tracking-widest text-muted-foreground">
                EST. {team.firstEntry}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">{team.name}</h1>
          </div>
          <div className="h-16 w-2 rounded-full hidden md:block" style={{ backgroundColor: team.color }} />
        </div>

        {/* Car Image */}
        <div className="relative rounded-2xl overflow-hidden border border-border mb-12">
          <img
            src={team.carImage || "/placeholder.svg"}
            alt={`${team.chassis}`}
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-border">
              <div className="text-sm text-muted-foreground">2025 CHASSIS</div>
              <div className="text-2xl font-bold text-foreground">{team.chassis}</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-4">ABOUT THE TEAM</h2>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                {team.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <Trophy className="w-6 h-6 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{team.championships}</div>
                <div className="text-xs text-muted-foreground">CHAMPIONSHIPS</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <Flag className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{team.wins}</div>
                <div className="text-xs text-muted-foreground">RACE WINS</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <Zap className="w-6 h-6 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{team.poles}</div>
                <div className="text-xs text-muted-foreground">POLE POSITIONS</div>
              </div>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <div className="w-6 h-6 bg-primary/50 rounded-full mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground">{team.fastestLaps}</div>
                <div className="text-xs text-muted-foreground">FASTEST LAPS</div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                KEY ACHIEVEMENTS
              </h2>
              <ul className="space-y-3">
                {team.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: team.color }} />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Team Drivers */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-6">2025 DRIVER LINEUP</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {teamDrivers.map((driver) => (
                  <Link
                    key={driver.id}
                    href={`/drivers/${driver.id}`}
                    className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all flex"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                      <img
                        src={driver.image || "/placeholder.svg"}
                        alt={`${driver.firstName} ${driver.lastName}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 flex-1 flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">#{driver.number}</div>
                        <div className="font-bold text-foreground">
                          {driver.firstName} <span style={{ color: team.color }}>{driver.lastName}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {driver.countryFlag} {driver.country}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Info Card */}
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
              <h3 className="font-bold text-foreground mb-6">TEAM INFORMATION</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground">BASE</div>
                    <div className="text-sm text-foreground" style={{ fontFamily: "var(--font-body)" }}>
                      {team.base}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground">TEAM PRINCIPAL</div>
                    <div className="text-sm text-foreground" style={{ fontFamily: "var(--font-body)" }}>
                      {team.teamPrincipal}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wrench className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground">TECHNICAL DIRECTOR</div>
                    <div className="text-sm text-foreground" style={{ fontFamily: "var(--font-body)" }}>
                      {team.technicalChief}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground">POWER UNIT</div>
                    <div className="text-sm text-foreground" style={{ fontFamily: "var(--font-body)" }}>
                      {team.powerUnit}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-muted-foreground">FIRST F1 ENTRY</div>
                    <div className="text-sm text-foreground" style={{ fontFamily: "var(--font-body)" }}>
                      {team.firstEntry}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Color Bar */}
              <div className="flex gap-2 mt-8">
                <div className="h-2 flex-1 rounded-full" style={{ backgroundColor: team.color }} />
                <div className="h-2 w-8 rounded-full" style={{ backgroundColor: team.secondaryColor }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
