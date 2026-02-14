import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DriverDetail } from "@/components/driver-detail"
import { allDrivers } from "@/lib/data"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const driver = allDrivers.find((d) => d.id === id)

  if (!driver) {
    return { title: "Driver Not Found | VelocityF1" }
  }

  return {
    title: `${driver.firstName} ${driver.lastName} | VelocityF1`,
    description: driver.bio,
  }
}

export default async function DriverPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const driver = allDrivers.find((d) => d.id === id)

  if (!driver) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <DriverDetail driver={driver} />
      <Footer />
    </main>
  )
}
