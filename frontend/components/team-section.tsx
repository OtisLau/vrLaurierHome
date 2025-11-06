"use client"

import { useInView } from "@/hooks/use-in-view"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const team = [
  { name: "Alex Chen", role: "President", initials: "AC" },
  { name: "Sarah Johnson", role: "Vice President", initials: "SJ" },
  { name: "Michael Park", role: "Technical Lead", initials: "MP" },
  { name: "Emily Rodriguez", role: "Events Coordinator", initials: "ER" },
  { name: "David Kim", role: "Creative Director", initials: "DK" },
  { name: "Jessica Lee", role: "Community Manager", initials: "JL" },
]

export function TeamSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="team" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">Meet the Team</h2>
          <p className="text-lg text-foreground/70">The passionate individuals leading VR Laurier</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-white/60 group-hover:border-primary transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-2xl group-hover:-rotate-3">
                <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary to-[#8AD2FF] text-primary-foreground">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-200">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
