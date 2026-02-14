import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { LiveStandings } from "@/components/live-standings"
import { RaceCalendar } from "@/components/race-calendar"
import { DriversSection } from "@/components/drivers-section"
import { SpeedStats } from "@/components/speed-stats"
import { NewsSection } from "@/components/news-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LiveStandings />
      <RaceCalendar />
      <DriversSection />
      <SpeedStats />
      <NewsSection />
      <Footer />
    </main>
  )
}
