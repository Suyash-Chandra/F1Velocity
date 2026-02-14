import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DriversGrid } from "@/components/drivers-grid"
import { Users } from "lucide-react"

export const metadata = {
  title: "F1 Drivers 2025 | VelocityF1",
  description: "Meet all 20 Formula 1 drivers competing in the 2025 season. Stats, bios, and career highlights.",
}

export default function DriversPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <span className="text-sm font-semibold tracking-widest text-primary">2025 SEASON</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4">
            F1 <span className="text-primary">DRIVERS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            Meet the 20 elite drivers competing for glory in the 2025 Formula 1 World Championship. From veteran
            champions to rising rookies, discover their stats, stories, and career highlights.
          </p>
        </div>
      </section>

      <DriversGrid />
      <Footer />
    </main>
  )
}
