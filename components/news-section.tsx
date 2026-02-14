"use client"

import { Newspaper, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { allNews } from "@/lib/data"

const featuredNews = allNews.slice(0, 3)

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Newspaper className="w-6 h-6 text-primary" />
              <span className="text-sm font-semibold tracking-widest text-primary">LATEST NEWS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">CATCH UP ON F1</h2>
          </div>
          <Link href="/news" className="text-primary text-sm font-semibold tracking-wider hover:underline mt-4 sm:mt-0">
            VIEW ALL NEWS →
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <Link href={`/news/${featuredNews[0].id}`} className="lg:col-span-2 group">
            <div className="relative h-full rounded-xl overflow-hidden border border-border">
              <img
                src={featuredNews[0].image || "/placeholder.svg"}
                alt={featuredNews[0].title}
                className="w-full h-full object-cover min-h-[400px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4">
                  {featuredNews[0].category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{featuredNews[0].title}</h3>
                <p className="text-muted-foreground mb-4 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
                  {featuredNews[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{featuredNews[0].date}</span>
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>

          {/* Side Articles */}
          <div className="flex flex-col gap-6">
            {featuredNews.slice(1).map((article) => (
              <Link
                key={article.id}
                href={`/news/${article.id}`}
                className="group flex gap-4 bg-secondary/30 rounded-xl border border-border p-4 transition-all duration-300 hover:bg-secondary/50"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold tracking-wider text-primary mb-1">{article.category}</div>
                  <h4 className="font-bold text-foreground text-sm mb-2 line-clamp-2">{article.title}</h4>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
