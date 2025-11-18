'use client'

import { useRef, useState } from 'react'
import type { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type Creator = {
  name: string;
  videoUrl: string;
}

type OverlayContent = {
  title: string;
  subtitle: string;
  cta: string;
}

interface CreatorVideoCardProps {
  creator: Creator;
  overlayContent: OverlayContent;
}

export const CreatorVideoCard: FC<CreatorVideoCardProps> = ({ creator, overlayContent }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showOverlay, setShowOverlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        setShowOverlay(false) // Hide overlay if it was shown
      }
    }
  }

  const handleEnded = () => {
    setShowOverlay(true)
    setIsPlaying(false)
  }

  return (
    <Card className="overflow-hidden bg-card border-border shadow-lg flex flex-col h-full">
      <div 
        className="relative aspect-[9/16] w-full group"
      >
        <video
          ref={videoRef}
          src={creator.videoUrl}
          playsInline
          onEnded={handleEnded}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          className="w-full h-full object-cover"
          onClick={handlePlayPause}
        />
        
        {!isPlaying && !showOverlay && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer" onClick={handlePlayPause}>
            <Play className="h-10 w-10 text-white/70" fill="currentColor" />
          </div>
        )}

        {showOverlay && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 z-10">
            <h3 className="text-xl font-bold text-white mb-2">{overlayContent.title}</h3>
            <p className="text-sm text-slate-300 mb-4">{overlayContent.subtitle}</p>
            <a href="#pricing">
              <Button size="default">{overlayContent.cta}</Button>
            </a>
          </div>
        )}
      </div>
      <CardContent className="p-3 bg-card flex-grow">
          <h3 className="font-bold text-sm text-foreground truncate">{creator.name}</h3>
          <p className="text-xs text-muted-foreground">Conteúdo Exclusivo</p>
      </CardContent>
    </Card>
  )
}
