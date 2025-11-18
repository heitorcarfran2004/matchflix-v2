'use client'

import { content } from "@/lib/content"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useContext } from "react"
import { PixContext } from "@/context/PixContext"

export function Footer() {
  const { guarantees, copyright } = content.footer
  const { plans } = content.hero;
  const { handleSelectPlan } = useContext(PixContext);

  return (
    <footer className="bg-black text-slate-400 text-sm py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-4 mb-8">
          {guarantees.map((item, index) => {
            const Icon = item.icon
            const isFirst = index === 0;
            if (isFirst) {
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center gap-2 p-6 rounded-lg border bg-destructive/10 border-destructive/50 shadow-lg shadow-destructive/10"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center">
                        <Image src="https://i.imgur.com/bCz5wan.png" alt="Garantia de 15 dias" width={192} height={192} />
                    </div>
                    <h3 className="font-bold text-2xl text-foreground whitespace-pre-line">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base max-w-sm mx-auto">{item.description}</p>
                </div>
              )
            }
            return (
              <div 
                key={index} 
                className="flex items-start gap-4 p-6 rounded-lg border bg-card/50 border-border"
              >
                <div className="flex-shrink-0">
                  <div className={cn(
                    "flex items-center justify-center h-12 w-12 rounded-full",
                    item.color
                  )}>
                    <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-lg mb-1 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="max-w-3xl mx-auto mb-12">
            <Button 
                size="lg" 
                className="h-14 px-12 text-lg w-full uppercase font-bold"
                onClick={() => handleSelectPlan(plans[1].id, plans[1].amount)}
            >
                Assinar Agora
            </Button>
            <p className="text-muted-foreground mt-2 uppercase text-xs text-center">E desbloqueie os milhares de Conteúdos Exclusivos do nosso Premium</p>
        </div>
        <Separator className="bg-border/50" />
        <p className="text-center mt-8">{copyright}</p>
      </div>
    </footer>
  )
}
