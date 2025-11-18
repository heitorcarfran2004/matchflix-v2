'use client'

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, AlertTriangle } from "lucide-react";

export function Header() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <header className="bg-black">
      <div className="bg-destructive text-destructive-foreground text-center p-2 text-sm font-bold flex items-center justify-center">
        <AlertTriangle className="h-4 w-4 mr-2" />
        ATENÇÃO: Esta promoção é válida somente hoje, no dia: {currentDate}
      </div>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-red-600" style={{ textShadow: '0 0 8px rgba(220, 38, 38, 0.8)' }}>
          MatchFlix
        </h1>
        <a href="#pricing">
          <Button>
            <Rocket className="h-4 w-4 mr-2 -rotate-45" />
            Assine
          </Button>
        </a>
      </div>
    </header>
  );
}
