

import { Shield, Star, LockIcon, ShieldCheck, Clock, Smartphone, Calendar, Droplet, Lock, MessageSquare, Archive, Award } from "lucide-react";

export const content = {
  hero: {
    logo: "MatchFlix Premium",
    headline: "MatchFlix Premium Acesso VIP Imediato",
    subheadline: "Pague e acesse AGORA MESMO!",
    videoUrl: "https://teste2347.netlify.app/videos/previews/hero-video-mobile.mp4",
    accessInfo: "EM QUALQUER HORA DO DIA OU DA NOITE!\nVOCÊ PAGA E JÁ ACESSA IMEDIATAMENTE!",
    plans: [
      { 
        id: "p3_990",
        amount: 9.90,
        name: "3 DIAS DE ACESSO", 
        price: "R$ 9,90",
        description: "Teste por 3 dias",
        highlighted: true 
      },
      { 
        id: "p30_1490",
        amount: 14.90,
        name: "30 DIAS DE ACESSO", 
        price: "R$ 14,90",
        description: "Acesso mensal - \nApenas R$ 0,50 por dia",
        badge: "MAIS VENDIDO"
      },
      { 
        id: "vitalicio_2990",
        amount: 29.90,
        name: "ACESSO VITALÍCIO", 
        price: "R$ 29,90",
        description: "Acesso para sempre - \nMELHOR OFERTA"
      },
    ],
    cta: "ASSINAR AGORA",
  },
  secondVideo: {
    url: "https://teste2347.netlify.app/videos/previews/second-video.mp4",
  },
  benefits: {
    title: "Por que escolher\nnossa plataforma?",
    list: [
      { icon: ShieldCheck, title: "Liberação de acesso imediata", subtitle: "Acesso instantâneo após o pagamento" },
      { icon: Clock, title: "100% Seguro e sem anúncios", subtitle: "Navegação limpa e protegida" },
      { icon: Calendar, title: "Atualização diária", subtitle: "Conteúdo sempre atualizado" },
      { icon: Lock, title: "Sigilo absoluto na hora da compra", subtitle: "Compra 100% discreta e sigilosa" },
      { icon: MessageSquare, title: "Suporte ativo", subtitle: "Atendimento sempre disponível" },
    ],
  },
  premiumCreators: {
    title: "Algumas Prévias\ndo que terá no VIP",
    subtitle: "Temos milhares de modelos,\nAqui vai só uma amostra",
    creators: [
      { name: "Thaissa Fit", videoUrl: "https://teste2347.netlify.app/videos/previews/thaissa-fit.mp4" },
      { name: "Mel Maia", videoUrl: "https://teste2347.netlify.app/videos/previews/mel-maia.mp4" },
      { name: "Karol Rosalin", videoUrl: "https://teste2347.netlify.app/videos/previews/karol-rosalin.mp4" },
      { name: "Aline Faria", videoUrl: "https://teste2347.netlify.app/videos/previews/aline-faria.mp4" },
      { name: "Anny Alves", videoUrl: "https://teste2347.netlify.app/videos/previews/anny-alves.mp4" },
      { name: "Débora Peixoto", videoUrl: "https://teste2347.netlify.app/videos/previews/debora-peixoto.mp4" },
      { name: "Babi Palomas", videoUrl: "https://teste2347.netlify.app/videos/previews/babi-palomas.mp4" },
      { name: "XGisa", videoUrl: "https://teste2347.netlify.app/videos/previews/xgisa.mp4" },
      { name: "Ruiva Braba", videoUrl: "https://teste2347.netlify.app/videos/previews/ruiva-braba.mp4" },
      { name: "Sabrina de Martini", videoUrl: "https://teste2347.netlify.app/videos/previews/sabrina-de-martini.mp4" },
      { name: "Emily Ferrer", videoUrl: "https://teste2347.netlify.app/videos/previews/emily-ferrer.mp4" },
      { name: "Dudinha", videoUrl: "https://teste2347.netlify.app/videos/previews/dudinha.mp4" },
    ],
    overlay: {
      title: "Assine para Ver Completo",
      subtitle: "Continue assistindo conteúdos exclusivos assinando nosso Premium.",
      cta: "Ver Planos",
    }
  },
  faq: {
    title: "Perguntas Frequentes",
    questions: [
      { q: "Minha privacidade fica segura?", a: "Sim, sua privacidade é nossa prioridade. Utilizamos criptografia de ponta a ponta e não compartilhamos seus dados com terceiros. A navegação é 100% anônima." },
      { q: "O conteúdo atual é por assinatura?", a: "Sim, nosso conteúdo exclusivo é acessado através de uma assinatura. Oferecemos planos flexíveis para atender às suas necessidades." },
      { q: "O pago é único?", a: "Oferecemos tanto planos de acesso por tempo limitado (diário, mensal) quanto um plano de acesso vitalício com pagamento único, que garante acesso para sempre sem taxas recorrentes." },
      { q: "É só 18+?", a: "Sim, todo o conteúdo da plataforma é destinado a maiores de 18 anos. Realizamos uma verificação de idade para garantir um ambiente seguro e em conformidade com as regulamentações." },
      { q: "Posso assistir no meu dispositivo?", a: "Com certeza! Nossa plataforma é totalmente responsiva e compatível com smartphones, tablets, notebooks e desktops. Assista onde e quando quiser." },
      { q: "Como é o suporte ao cliente?", a: "Oferecemos suporte ao cliente 24/7 através de chat ao vivo e e-mail. Nossa equipe está sempre pronta para ajudar com qualquer dúvida ou problema que você possa ter." },
      { q: "Tenho que pagar algo para longo prazo?", a: "Apenas se você optar por um plano de assinatura recorrente. Com nosso plano de acesso vitalício, você faz um pagamento único e nunca mais se preocupa com mensalidades." },
      { q: "Posso definir meu vídeo do jeito que eu quiser?", a: "A plataforma oferece uma vasta biblioteca de conteúdo organizado por categorias e criadoras. Você pode navegar e assistir o que preferir, a qualquer momento." },
    ],
  },
  footer: {
    guarantees: [
      {
        icon: Award,
        title: "GARANTIA DE 15 DIAS",
        description: "Se não gostar, peça seu dinheiro de volta em até 15 dias",
        color: "bg-red-600"
      },
      {
        icon: Shield,
        title: "COMPRA SEGURA",
        description: "Pagamentos 100% seguros e criptografados",
        color: "bg-green-600"
      },
      {
        icon: Star,
        title: "SATISFAÇÃO GARANTIDA",
        description: "Satisfação garantida ou seu dinheiro de volta",
        color: "bg-blue-600"
      },
      {
        icon: LockIcon,
        title: "PRIVACIDADE PROTEGIDA",
        description: "Seus dados estão 100% protegidos",
        color: "bg-purple-600"
      }
    ],
    copyright: `© ${new Date().getFullYear()} MatchFlix. Todos os direitos reservados.`,
  }
};
