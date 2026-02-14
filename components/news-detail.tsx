"use client"

import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { allNews } from "@/lib/data"

interface Article {
  id: string
  category: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  readTime: string
}

export function NewsDetail({ article }: { article: Article }) {
  const relatedArticles = allNews.filter((n) => n.id !== article.id && n.category === article.category).slice(0, 3)

  return (
    <section className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/news">
          <Button variant="ghost" className="mb-8 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>
        </Link>

        {/* Category Badge */}
        <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
          {article.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
          {article.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
          <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative rounded-2xl overflow-hidden mb-10">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
            {article.excerpt}
          </p>
          <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {article.content}
          </p>
          <p className="text-muted-foreground leading-relaxed mt-6" style={{ fontFamily: "var(--font-body)" }}>
            The implications of this development extend far beyond immediate results. Industry experts predict
            significant shifts in competitive dynamics, with ripple effects likely to be felt throughout the paddock for
            seasons to come. Teams are already reassessing their strategies in light of this news.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-6" style={{ fontFamily: "var(--font-body)" }}>
            As the Formula 1 landscape continues to evolve, fans can expect more exciting developments in the weeks and
            months ahead. VelocityF1 will continue to bring you comprehensive coverage of all the latest happenings in
            the world's premier motorsport series.
          </p>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="border-t border-border pt-12">
            <h3 className="text-xl font-bold text-foreground mb-6">RELATED ARTICLES</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedArticles.map((related) => (
                <Link
                  key={related.id}
                  href={`/news/${related.id}`}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                    <span className="text-xs text-muted-foreground mt-2 block">{related.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
