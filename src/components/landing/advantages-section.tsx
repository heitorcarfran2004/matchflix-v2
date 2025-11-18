import { Check, Lock, Ban, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const advantages = [
    { icon: <Check className="h-6 w-6 text-primary" />, text: "Acesso imediato" },
    { icon: <Lock className="h-6 w-6 text-primary" />, text: "100% Seguro" },
    { icon: <Ban className="h-6 w-6 text-primary" />, text: "Sem anúncios" },
    { icon: <Smartphone className="h-6 w-6 text-primary" />, text: "Multi-dispositivo" },
];

export function AdvantagesSection() {
    return (
        <section className="pt-12 pb-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-card border border-border">
                            <div className="mb-2">{advantage.icon}</div>
                            <p className="font-semibold text-sm">{advantage.text}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-2.5">
                    <Badge variant="outline" className="text-sm font-semibold py-2 px-4 border-primary/50 text-foreground">
                        <Check className="h-4 w-4 mr-2 text-primary" />
                        Mais de 10.000 clientes satisfeitos
                    </Badge>
                </div>
            </div>
        </section>
    );
}
