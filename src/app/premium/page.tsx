import { CheckCircle } from 'lucide-react';

export default function PremiumPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <CheckCircle className="h-24 w-24 text-green-500 mb-6" />
      <h1 className="text-4xl font-bold text-foreground mb-4">
        Bem-vindo à Área Premium!
      </h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        Seu pagamento foi confirmado com sucesso. Agora você tem acesso a todo o nosso conteúdo exclusivo. Explore e aproveite!
      </p>
    </div>
  );
}
