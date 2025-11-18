'use client'

import { content } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import Image from "next/image"

export function SecondVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  return (
    <section className="bg-black pt-9 pb-9 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative aspect-video w-full cursor-pointer group"
            onClick={handlePlayPause}
          >
            <video
              ref={videoRef}
              playsInline
              className="w-full h-full rounded-xl shadow-2xl shadow-black/50 bg-black"
              src={content.secondVideo.url}
              poster="https://i.imgur.com/EdDLY7n.jpeg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              controls={isPlaying} // Show controls only when playing
            />
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl transition-opacity duration-300 group-hover:opacity-100 opacity-80">
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
        </div>
      </div>
    </section>
  )
}
