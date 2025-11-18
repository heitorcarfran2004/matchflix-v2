'use client'

import { content } from "@/lib/content"
import { CreatorVideoCard } from "./creator-video-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useContext } from "react"
import { PixContext } from "@/context/PixContext"

export function PremiumCreatorsSection() {
  const { title, subtitle, creators, overlay } = content.premiumCreators
  const { plans } = content.hero;
  const { handleSelectPlan } = useContext(PixContext);

  return (
    <section id="premium-creators" className="py-12 md:py-20 pb-8 md:pb-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
            <Badge className="bg-primary text-primary-foreground text-sm">Prévias Exclusivas</Badge>
        </div>
        <h2 className="text-[1.95rem] font-bold mb-4 whitespace-pre-line leading-[2.35rem]">{title}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto whitespace-pre-line leading-[1.65rem]">{subtitle}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
          {creators.map((creator) => (
            <CreatorVideoCard key={creator.name} creator={creator} overlayContent={overlay} />
          ))}
        </div>
        <div className="mt-5">
            <Button 
                size="lg" 
                className="h-14 px-12 text-lg w-full uppercase font-bold"
                onClick={() => handleSelectPlan(plans[1].id, plans[1].amount)}
            >
                Assinar Agora
            </Button>
            <p className="text-muted-foreground mt-2 uppercase text-xs">E desbloqueie os milhares de Conteúdos Exclusivos do nosso Premium</p>
        </div>
      </div>
    </section>
  )
}
