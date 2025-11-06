import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { TeamSection } from "@/components/team-section"
import { JoinSection } from "@/components/join-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Beautiful Gradient Aura Background - VR Laurier Colors */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#B5C1CE]/30 via-white to-[#476079]/20" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#8AD2FF]/25 rounded-full blur-[140px] -z-10 animate-float" />
      <div className="fixed top-1/3 right-1/4 w-[700px] h-[700px] bg-[#476079]/20 rounded-full blur-[150px] -z-10 animate-float" style={{ animationDelay: '3s' }} />
      <div className="fixed bottom-1/4 left-1/3 w-[650px] h-[650px] bg-[#B5C1CE]/25 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '1.5s' }} />
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <WhatWeDoSection />
      <TeamSection />
      <JoinSection />
      <Footer />
    </main>
  )
}
