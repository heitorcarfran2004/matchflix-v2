import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { content } from "@/lib/content"

export function FaqSection() {
  const { title, questions } = content.faq

  return (
    <section className="bg-card py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-6">{title}</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background border-none rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 py-4 text-left font-bold text-lg hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
