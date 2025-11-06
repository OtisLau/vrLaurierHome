"use client"

import { useInView } from "@/hooks/use-in-view"
import { Lightbulb, Users, Gamepad2, Code, Sparkles } from "lucide-react"

const activities = [
  {
    icon: Lightbulb,
    title: "Workshops",
    description: "Hands-on learning sessions covering VR development, 3D design, and immersive technologies.",
  },
  {
    icon: Users,
    title: "Social Events",
    description: "Connect with fellow enthusiasts and build lasting friendships in our community.",
  },
  {
    icon: Code,
    title: "Project Collaboration",
    description: "Work together on exciting VR projects and bring your creative ideas to life.",
  },
  {
    icon: Gamepad2,
    title: "VR Game Nights",
    description: "Experience the latest VR games and explore immersive worlds together.",
  },
  {
    icon: Sparkles,
    title: "Creative Development",
    description: "Push boundaries and experiment with cutting-edge immersive technologies.",
  },
]

export function WhatWeDoSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="what-we-do" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">What We Do</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From workshops to game nights, we offer diverse opportunities to explore immersive tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl bg-white/80 backdrop-blur-md border hover:border-primary/50 card-hover ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
