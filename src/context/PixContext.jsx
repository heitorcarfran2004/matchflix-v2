'use client';

import { createContext, useState } from 'react';
import PixLoadingModal from '@/components/PixLoadingModal';
import PixModal from '@/components/PixModal';
import { useToast } from '@/hooks/use-toast';

export const PixContext = createContext();

export function PixProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [pixData, setPixData] = useState(null);
  const { toast } = useToast();

  const handleSelectPlan = async (planId, amount) => {
    setIsLoading(true);
    setPixData(null);

    try {
      const response = await fetch('/api/create-pix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId: planId,
          amount: amount,
          customer: {}, // Add customer data if needed
          utm: {}, // Add UTM data if needed
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.message || 'Falha ao gerar o código PIX.');
      }
      
      const paymentData = {
        ...data,
        planId,
      }
      setPixData(paymentData);

    } catch (error) {
      console.error("Erro ao criar PIX:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const closePixModal = () => {
    setPixData(null);
  };

  return (
    <PixContext.Provider value={{ handleSelectPlan }}>
      {children}
      <PixLoadingModal isOpen={isLoading && !pixData} />
      <PixModal isOpen={!!pixData} pixData={pixData} onClose={closePixModal} />
    </PixContext.Provider>
  );
}
