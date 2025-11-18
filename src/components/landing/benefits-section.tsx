import { content } from "@/lib/content"
import React from "react"

export function BenefitsSection() {
  const { title, list } = content.benefits

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-7 whitespace-pre-line">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {list.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="flex items-center text-left p-6 rounded-lg border bg-card/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
