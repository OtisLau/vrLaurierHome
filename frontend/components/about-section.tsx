"use client"

import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-3xl mx-auto text-center space-y-6 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground">Who We Are</h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
            VR Laurier is a student-led club exploring VR, creative development, immersive design, and shared
            experiences. We're a community of curious minds passionate about pushing the boundaries of what's possible
            in virtual and immersive technologies.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty">
            Whether you're a seasoned developer or just getting started, we welcome everyone who wants to learn, create,
            and experience the future of technology together.
          </p>
        </div>
      </div>
    </section>
  )
}
