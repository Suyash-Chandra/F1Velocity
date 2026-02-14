import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamDetail } from "@/components/team-detail"
import { teams } from "@/lib/data"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const team = teams.find((t) => t.id === id)

  if (!team) {
    return { title: "Team Not Found | VelocityF1" }
  }

  return {
    title: `${team.name} | VelocityF1`,
    description: team.description,
  }
}

export default async function TeamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const team = teams.find((t) => t.id === id)

  if (!team) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <TeamDetail team={team} />
      <Footer />
    </main>
  )
}
