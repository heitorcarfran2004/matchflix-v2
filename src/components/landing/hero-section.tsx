'use client'

import { useState, useRef, useEffect, useContext } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { content } from "@/lib/content"
import { cn } from "@/lib/utils"
import { PixContext } from "@/context/PixContext"

export function HeroSection() {
  const { headline, subheadline, videoUrl, plans } = content.hero;
  const videoRef = useRef<HTMLVideoElement>(null)
  const previewVideoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const { handleSelectPlan } = useContext(PixContext);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying(true)
      videoRef.current.play()
    }
  }

  useEffect(() => {
    if (previewVideoRef.current) {
      previewVideoRef.current.play().catch(() => {
        // Autoplay may be blocked.
      });
    }
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white pt-12 pb-8 px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mx-auto">
        <h1 className="text-[27px] md:text-[41px] font-black uppercase mb-2 leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl font-bold text-primary mb-6">
          {subheadline}
        </p>

        <div 
          className="relative w-full aspect-video rounded-xl shadow-2xl shadow-black/50 overflow-hidden mb-6 cursor-pointer group"
          onClick={handlePlay}
        >
            <video
              ref={videoRef}
              playsInline
              className={cn("w-full h-full object-cover", isPlaying ? "block" : "hidden")}
              src={videoUrl}
              onPause={() => setIsPlaying(false)}
              controls
            />

            <video
              ref={previewVideoRef}
              playsInline
              muted
              loop
              className={cn("w-full h-full object-cover", isPlaying ? "hidden" : "block")}
              src={videoUrl}
            />
            
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl transition-opacity duration-300 group-hover:opacity-100 opacity-80 pointer-events-none">
                <Image 
                  src="https://i.imgur.com/HpBQgHo.png"
                  alt="Play button"
                  width={128}
                  height={128}
                  className="w-24 h-24 md:w-32 md:h-32 transform transition-transform group-hover:scale-110 pointer-events-none"
                />
              </div>
            )}
        </div>
        
        <div className="w-full max-w-md flex flex-col gap-3">
          <Button 
            size="lg" 
            className="w-full h-12 text-md font-bold uppercase"
            onClick={() => handleSelectPlan(plans[1].id, plans[1].amount)}
          >
            Assinar Agora
          </Button>
          <a href="#premium-creators" className="w-full">
            <Button variant="outline" size="lg" className="w-full h-12 text-md font-bold uppercase border-2 border-primary/50 text-white hover:bg-primary/10 hover:text-white">
              Ver Prévias Grátis
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
