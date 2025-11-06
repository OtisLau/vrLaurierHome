"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-[#476079] to-[#8AD2FF] bg-clip-text text-transparent">
              VR Laurier
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/90 max-w-2xl mx-auto font-medium">
            Wilfrid Laurier University's Virtual Reality & Immersive Technology Community
          </p>

          <p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto">
            Build • Explore • Create • Connect
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="group bg-primary hover:bg-[#113251] text-primary-foreground rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl btn-glow relative overflow-hidden"
            >
              Join our Discord!
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-medium border-2 hover:bg-muted transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-xl magnetic"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
