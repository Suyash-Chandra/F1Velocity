import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FullStandings } from "@/components/full-standings"

export default function StandingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <FullStandings />
      <Footer />
    </main>
  )
}
