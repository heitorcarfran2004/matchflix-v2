'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import QRCode from 'qrcode.react';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, Check, X, ShieldCheck, Zap, CircleCheck } from 'lucide-react';
import { content } from '@/lib/content';

export default function PixModal({ pixData, isOpen, onClose }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(pixData.pix.payload);
    setIsCopied(true);
    toast({
      title: "Copiado!",
      description: "Código PIX copiado para a área de transferência.",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const checkPaymentStatus = useCallback(async () => {
    if (!pixData?.paymentId || isPaid) return;

    setIsChecking(true);
    try {
      const response = await fetch(`/api/check-pix?txId=${pixData.paymentId}`);
      const result = await response.json();
      if (result.status === "paid") {
        setIsPaid(true);
        toast({
          title: "Pagamento confirmado!",
          description: "Redirecionando para sua área premium...",
        });
        setTimeout(() => {
          router.push('/premium');
        }, 2000);
      }
    } catch (error) {
      console.error("Erro ao verificar pagamento:", error);
    } finally {
        setIsChecking(false);
    }
  }, [pixData, isPaid, router, toast]);

  useEffect(() => {
    if (!isOpen || !pixData?.paymentId || isPaid) return;

    const interval = setInterval(checkPaymentStatus, 8000);
    return () => clearInterval(interval);
  }, [isOpen, pixData, isPaid, checkPaymentStatus]);

  useEffect(() => {
    // Reset payment status when a new pixData is received
    if (pixData) {
      setIsPaid(false);
    }
  }, [pixData]);

  if (!isOpen || !pixData) return null;

  const plan = content.hero.plans.find(p => p.id === pixData.planId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-card border border-border rounded-xl shadow-2xl shadow-primary/10 max-w-sm w-full mx-4 flex flex-col items-center text-center relative p-6">
        <button onClick={onClose} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>

        {isPaid ? (
          <div className="flex flex-col items-center justify-center h-full py-8">
            <CircleCheck className="h-20 w-20 text-green-500 mb-6" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Pagamento Confirmado!</h2>
            <p className="text-muted-foreground">Você será redirecionado em breve...</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-foreground mb-1">Finalize o Pagamento</h2>
            <p className="text-muted-foreground mb-4">Escaneie ou copie o código PIX</p>
            
            <div className="bg-white p-4 rounded-lg border-4 border-primary mb-4">
              <QRCode value={pixData.pix.payload} size={200} />
            </div>

            <div className='text-left w-full mb-4'>
                <p className='text-sm text-muted-foreground'>Plano: <span className='font-bold text-foreground'>{plan?.name || pixData.planId}</span></p>
                <p className='text-sm text-muted-foreground'>Valor: <span className='font-bold text-foreground'>R$ {Number(pixData.pix.amount).toFixed(2).replace('.', ',')}</span></p>
            </div>

            <Button onClick={handleCopy} className="w-full mb-3">
              {isCopied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
              {isCopied ? 'Copiado!' : 'Copiar Código PIX'}
            </Button>
            
            <Button onClick={checkPaymentStatus} variant="outline" className="w-full" disabled={isChecking}>
              {isChecking ? 'Verificando...' : 'Já paguei - Verificar'}
            </Button>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-4">
                <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span>PIX Instantâneo</span>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
