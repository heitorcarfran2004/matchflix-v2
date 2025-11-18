'use client'

import { useContext } from "react"
import { Badge } from "@/components/ui/badge"
import { content } from "@/lib/content"
import { cn } from "@/lib/utils"
import { MousePointerClick } from "lucide-react"
import { PixContext } from "@/context/PixContext"

export function PricingSection() {
  const { plans } = content.hero;
  const { handleSelectPlan } = useContext(PixContext);

  return (
    <section id="pricing" className="pb-6 pt-1 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="w-full max-w-md mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MousePointerClick className="h-[28px] w-[28px] text-primary" />
            <p className="font-semibold text-[26px] text-foreground">Selecione seu Plano</p>
          </div>
          <div className="space-y-3">
            {plans.map((plan, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSelectPlan(plan.id, plan.amount)}
                  className={cn(
                    "relative flex items-center p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer",
                    "border-border hover:border-primary",
                    "bg-card/80"
                  )}
                >
                  <div className="mr-4 flex-shrink-0">
                    <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/50 bg-transparent"></div>
                  </div>
                  <div className="flex-grow text-left">
                    <h3 className="font-bold text-base text-foreground">{plan.name}</h3>
                    <p className="text-xs text-muted-foreground whitespace-pre-line">{plan.description}</p>
                  </div>
                  
                  <div className="flex-shrink-0 text-right ml-4">
                    <p className="font-bold text-2xl text-primary">{plan.price}</p>
                  </div>

                  {plan.badge && (
                    <Badge 
                      className="absolute -top-3 right-4 bg-green-500 text-white text-xs font-bold border-none"
                    >
                      {plan.badge}
                    </Badge>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
