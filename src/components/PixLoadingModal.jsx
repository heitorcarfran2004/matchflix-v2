'use client';

import { ShieldCheck, Zap } from "lucide-react";
import { Progress } from "./ui/progress";

export default function PixLoadingModal({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-card border border-border rounded-xl p-8 shadow-2xl shadow-primary/10 max-w-sm w-full mx-4 flex flex-col items-center text-center">
        <div className="relative w-20 h-20 mb-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
          <div className="absolute inset-0 flex items-center justify-center bg-primary rounded-full">
            <ShieldCheck className="h-10 w-10 text-primary-foreground" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Gerando código PIX...</h2>
        
        <Progress value={50} className="w-full h-2 mb-6 animate-pulse" />

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-green-500" />
            <span>100% Seguro</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-4 w-4 text-yellow-500" />
            <span>PIX Instantâneo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
