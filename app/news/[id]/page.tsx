import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsDetail } from "@/components/news-detail"
import { allNews } from "@/lib/data"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = allNews.find((n) => n.id === id)

  if (!article) {
    return { title: "Article Not Found | VelocityF1" }
  }

  return {
    title: `${article.title} | VelocityF1`,
    description: article.excerpt,
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = allNews.find((n) => n.id === id)

  if (!article) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <NewsDetail article={article} />
      <Footer />
    </main>
  )
}
