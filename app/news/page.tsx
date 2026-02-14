import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsGrid } from "@/components/news-grid"
import { Newspaper } from "lucide-react"

export const metadata = {
  title: "F1 News | VelocityF1",
  description: "Latest Formula 1 news, race results, driver transfers, and technical updates.",
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-primary" />
            <span className="text-sm font-semibold tracking-widest text-primary">LATEST UPDATES</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4">
            F1 <span className="text-primary">NEWS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
            Stay up to date with the latest Formula 1 news, race results, driver transfers, technical regulations, and
            exclusive paddock insights.
          </p>
        </div>
      </section>

      <NewsGrid />
      <Footer />
    </main>
  )
}
