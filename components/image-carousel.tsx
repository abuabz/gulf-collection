"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselImage {
  id: number
  desktopUrl: string
  mobileUrl: string
  alt: string
}

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const images: CarouselImage[] = [
    {
      id: 1,
      desktopUrl: "/modern-electronics-gadgets-store-desktop.jpg",
      mobileUrl: "/electronics-mobile-vertical.jpg",
      alt: "Premium Electronics Collection",
    },
    {
      id: 2,
      desktopUrl: "/digital-gadgets-showcase-horizontal.jpg",
      mobileUrl: "/gadgets-vertical-mobile.jpg",
      alt: "Latest Gadgets & Devices",
    },
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative w-full h-auto overflow-hidden rounded-xl border border-border bg-secondary animate-in fade-in duration-1000">
      {/* Carousel Container */}
      <div className="relative w-full">
        {/* Images */}
        <div className="relative w-full h-[400px] md:h-[600px]">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={isMobile ? image.mobileUrl : image.desktopUrl}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30"></div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-accent/80 hover:bg-accent text-accent-foreground rounded-full transition-all hover:scale-110 animate-in fade-in"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-accent/80 hover:bg-accent text-accent-foreground rounded-full transition-all hover:scale-110 animate-in fade-in"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-accent w-6 md:w-8" : "bg-accent/40 hover:bg-accent/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
