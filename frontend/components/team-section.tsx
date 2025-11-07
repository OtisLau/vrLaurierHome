"use client"

import { useInView } from "@/hooks/use-in-view"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const team = [
  {
    title: "Presidents",
    members: [
      { name: "Hargun", role: "Co-president", initials: "HH" },
      { name: "Dharmik Patel", role: "Co-president", initials: "DP" },
    ],
  },
  {
    title: "Outreach",
    members: [
      { name: "Pirana", role: "VP of Outreach", initials: "PP" },
      { name: "Pushti", role: "Director of Outreach", initials: "PP" },
    ],
  },
  {
    title: "Finance",
    members: [
      { name: "Suraj Sandhu", role: "VP of finance", initials: "SS" },
      { name: "Hamza", role: "Director of Finance", initials: "HH" }, 
      { name: "Hiba", role: "Director of finance", initials: "HH" },
    ],
  },
  {
    title: "Marketing",
    members: [
      { name: "Angela", role: "VP of Marketing", initials: "AA" },
      { name: "Justin", role: "Director of Marketing", initials: "JJ" },
      { name: "Aditi", role: "Director of Marketing", initials: "AA" },
      { name: "Veera", role: "Director of Marketing", initials: "VV" },
    ],
  },
  {
    title: "Events",
    members: [
      { name: "Manraj Karla", role: "VP of Events", initials: "MK" },
      { name: "Aryan", role: "Director of Events", initials: "AA" },
      { name: "Kritika Kamath", role: "Director of Events", initials: "KK" },
      { name: "Rohan", role: "Director of Events", initials: "RR" },
    ],
  }, 
  {
    title: "Technology",
    members: [
      { name: "Otis Lau", role: "VP of Technology", initials: "OL" },
      { name: "Sid", role: "VP of Technology", initials: "SS" },
      { name: "Yanic Ballez", role: "Director of Technology", initials: "YB" },
      { name: "Liza Luizova", role: "Director of Technology", initials: "LL" },
      { name: "Harshaan", role: "Director of Technology", initials: "HH" },
      { name: "Abdul Aziz", role: "Director of Technology", initials: "AA" },
      { name: "Prana", role: "Director of Technology", initials: "PP" },
    ],
  }
]

export function TeamSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="team" className="py-32" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Meet the Team
          </h2>
          <p className="text-lg text-foreground/70">
            The passionate individuals leading VR Laurier
          </p>
        </div>

        {/* Categories */}
        {team.map((category, catIndex) => {
          //split into VPs and others
          const vps = category.members.filter((m) =>
            m.role.toLowerCase().includes("vp")
          )
          const others = category.members.filter(
            (m) => !m.role.toLowerCase().includes("vp")
          )

          return (
            <div key={catIndex} className="mb-20">
              <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
                {category.title}
              </h3>

              {/*vp row — centered and closer together */}
              {vps.length > 0 && (
                <div className="flex justify-center flex-wrap gap-x-20 gap-y-6 mb-8">
                  {vps.map((member, index) => (
                    <div
                      key={index}
                      className={`text-center group transition-all duration-500 ${
                        isInView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <Avatar className="w-24 h-24 mx-auto mb-2 border-4 border-white/60 group-hover:border-primary transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-2xl">
                        <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary to-[#8AD2FF] text-primary-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-200">
                        {member.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  ))}
                </div>
              )}

              {/*directors and others below */}
              {others.length > 0 && (
                <div className="flex justify-center flex-wrap gap-x-12 gap-y-8 mt-8">
                  {others.map((member, index) => (
                    <div
                      key={index}
                      className={`text-center group transition-all duration-500 ${
                        isInView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <Avatar className="w-24 h-24 mx-auto mb-3 border-4 border-white/60 group-hover:border-primary transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-2xl">
                        <AvatarFallback className="text-2xl font-semibold bg-gradient-to-br from-primary to-[#8AD2FF] text-primary-foreground">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-200">
                        {member.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
