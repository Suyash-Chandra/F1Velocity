"use client"

import { ArrowLeft, Trophy, Flag, Award, Calendar, MapPin, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { teams } from "@/lib/data"

interface DriverStats {
  wins: number
  poles: number
  championships: number
  podiums: number
  fastestLaps: number
  points: number
}

interface Driver {
  id: string
  number: number
  firstName: string
  lastName: string
  team: string
  teamId: string
  country: string
  countryFlag: string
  dateOfBirth: string
  placeOfBirth: string
  image: string
  teamColor: string
  stats: DriverStats
  careerHighlights: string[]
  bio: string
}

export function DriverDetail({ driver }: { driver: Driver }) {
  const team = teams.find((t) => t.id === driver.teamId)

  return (
    <section className="pt-24 pb-16">
      {/* Hero Background */}
      <div
        className="absolute top-0 left-0 right-0 h-[500px] opacity-20"
        style={{
          background: `radial-gradient(ellipse at top center, ${driver.teamColor}60 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <Link href="/drivers">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Drivers
          </Button>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Driver Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border">
              <img
                src={driver.image || "/placeholder.svg"}
                alt={`${driver.firstName} ${driver.lastName}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

              {/* Driver Number Overlay */}
              <div
                className="absolute bottom-8 right-8 text-[200px] font-bold leading-none opacity-30"
                style={{ color: driver.teamColor }}
              >
                {driver.number}
              </div>
            </div>

            {/* Team Card */}
            {team && (
              <Link
                href={`/teams/${team.id}`}
                className="absolute -bottom-6 left-6 right-6 bg-card border border-border rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${driver.teamColor}20` }}
                >
                  <img src={team.logo || "/placeholder.svg"} alt={team.name} className="w-8 h-8 object-contain" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">RACING FOR</div>
                  <div className="font-bold text-foreground">{team.name}</div>
                </div>
                <div className="h-8 w-1 rounded-full" style={{ backgroundColor: driver.teamColor }} />
              </Link>
            )}
          </div>

          {/* Driver Info */}
          <div className="pt-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{driver.countryFlag}</span>
              <div className="h-1 flex-1 rounded-full" style={{ backgroundColor: driver.teamColor }} />
              <span className="text-6xl font-bold opacity-50" style={{ color: driver.teamColor }}>
                #{driver.number}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-2">
              {driver.firstName}
              <br />
              <span style={{ color: driver.teamColor }}>{driver.lastName}</span>
            </h1>

            {/* Personal Info */}
            <div className="flex flex-wrap gap-6 my-8 text-muted-foreground" style={{ fontFamily: "var(--font-body)" }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{driver.dateOfBirth}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{driver.placeOfBirth}</span>
              </div>
            </div>

            {/* Bio */}
            <p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {driver.bio}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-8">
              <div className="bg-card rounded-xl p-4 border border-border text-center">
                <Trophy className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{driver.stats.wins}</div>
                <div className="text-xs text-muted-foreground">WINS</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border text-center">
                <Flag className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{driver.stats.poles}</div>
                <div className="text-xs text-muted-foreground">POLES</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border text-center">
                <Award className="w-5 h-5 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{driver.stats.championships}</div>
                <div className="text-xs text-muted-foreground">TITLES</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border text-center">
                <div className="w-5 h-5 bg-muted rounded-full mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{driver.stats.podiums}</div>
                <div className="text-xs text-muted-foreground">PODIUMS</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border text-center">
                <div className="w-5 h-5 bg-primary/50 rounded-full mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{driver.stats.fastestLaps}</div>
                <div className="text-xs text-muted-foreground">FL</div>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border text-center">
                <div className="w-5 h-5 bg-accent/50 rounded-full mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{driver.stats.points.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">POINTS</div>
              </div>
            </div>

            {/* Career Highlights */}
            <div className="bg-card rounded-xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                CAREER HIGHLIGHTS
              </h3>
              <ul className="space-y-3">
                {driver.careerHighlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: driver.teamColor }}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
