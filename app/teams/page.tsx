import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamsGrid } from "@/components/teams-grid"
import { Flag } from "lucide-react"

export const metadata = {
  title: "F1 Teams 2025 | VelocityF1",
  description: "Discover all 10 Formula 1 teams competing in the 2025 season. Team history, stats, and driver lineups.",
}

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Flag className="w-8 h-8 text-primary" />
            <span className="text-sm font-semibold tracking-widest text-primary">2025 SEASON</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4">
            F1 <span className="text-primary">TEAMS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            Explore the 10 constructors battling for supremacy in Formula One. From legendary manufacturers to ambitious
            newcomers, discover their history, cars, and championship ambitions.
          </p>
        </div>
      </section>

      <TeamsGrid />
      <Footer />
    </main>
  )
}
