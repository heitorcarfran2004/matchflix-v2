"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const images = [
  "https://i.imgur.com/I5r9SAk.png",
  "https://i.imgur.com/6xzOdnz.png",
  "https://i.imgur.com/xu3PuR1.png",
  "https://i.imgur.com/KlTwecB.png",
  "https://i.imgur.com/QKYb8yv.png",
  "https://i.imgur.com/mVW5SkY.png",
  "https://i.imgur.com/pZhExez.png",
];

export function CreatorsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnHover: false })
  )

  return (
    <section className="pt-8 pb-14">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-4">
          {[...images, ...images].map((src, index) => (
            <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
              <div className="flex aspect-[2/3] items-center justify-center">
                <Image 
                  src={src} 
                  alt={`Creator image ${index + 1}`} 
                  width={200}
                  height={300}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
