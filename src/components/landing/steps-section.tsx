import { CreditCard, UserPlus, PlayCircle } from "lucide-react";

const steps = [
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: "Escolha seu Plano",
    description: "Escolha o plano que mais combina com você",
  },
  {
    icon: <UserPlus className="h-8 w-8 text-primary" />,
    title: "Crie sua Conta",
    description: "Cadastre-se em nossa plataforma em poucos segundos",
  },
  {
    icon: <PlayCircle className="h-8 w-8 text-primary" />,
    title: "Acesse o Conteúdo",
    description: "Pronto! Aproveite todos os conteúdos onde, quando e como quiser",
  },
];

export function StepsSection() {
  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-7">
          Acesso Rápido <br /> em 3 passos
        </h2>
        <div className="max-w-md mx-auto space-y-3.5">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background border-2 border-primary/50 mb-4">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
