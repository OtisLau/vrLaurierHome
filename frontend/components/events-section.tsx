"use client"

import { useInView } from "@/hooks/use-in-view"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    title: "VR Workshop: Getting Started",
    date: "March 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Science Building, Room 2E10",
    description: "Learn the basics of VR development and create your first immersive experience.",
  },
  {
    title: "Game Night: VR Worlds",
    date: "March 22, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "Student Union Building",
    description: "Join us for an evening of exploring amazing VR worlds and multiplayer games.",
  },
  {
    title: "Project Showcase",
    date: "April 5, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Lazaridis Hall Atrium",
    description: "See what our members have been building and share your own projects.",
  },
]

export function EventsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="events" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">Upcoming Events</h2>
          <p className="text-lg text-foreground/70">
            Join us for workshops, social events, and collaborative projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <Card
              key={index}
              className={`group card-hover border bg-white/80 backdrop-blur-md hover:bg-white/95 hover:border-primary/50 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-200">{event.title}</CardTitle>
                <CardDescription className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm group-hover:text-primary transition-colors duration-300">
                    <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm group-hover:text-primary transition-colors duration-300">
                    <Clock className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm group-hover:text-primary transition-colors duration-300">
                    <MapPin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{event.location}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
