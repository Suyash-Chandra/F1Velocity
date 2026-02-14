"use client"

import { allNews } from "@/lib/data"
import { Clock, User, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categories = [
  "ALL",
  "RACE RESULTS",
  "TRANSFER NEWS",
  "TECHNICAL",
  "CHAMPIONSHIP",
  "DRIVER NEWS",
  "TEAM NEWS",
  "REGULATIONS",
  "CALENDAR",
  "BUSINESS",
]

export function NewsGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL")

  const filteredNews = activeCategory === "ALL" ? allNews : allNews.filter((news) => news.category === activeCategory)

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        {filteredNews.length > 0 && (
          <Link
            href={`/news/${filteredNews[0].id}`}
            className="group block bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all mb-8"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-96 overflow-hidden">
                <img
                  src={filteredNews[0].image || "/placeholder.svg"}
                  alt={filteredNews[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                    {filteredNews[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {filteredNews[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 line-clamp-3" style={{ fontFamily: "var(--font-body)" }}>
                  {filteredNews[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{filteredNews[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{filteredNews[0].readTime}</span>
                  </div>
                  <span>{filteredNews[0].date}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.slice(1).map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-primary-foreground px-2 py-0.5 rounded-full text-xs font-bold tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground mb-4 line-clamp-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <div className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read More <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No news articles found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
