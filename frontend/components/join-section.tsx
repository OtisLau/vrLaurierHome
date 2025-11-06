"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, Mail } from "lucide-react"

export function JoinSection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section id="join" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance text-foreground">Ready to Join the Adventure?</h2>
          <p className="text-lg md:text-xl text-foreground/80 text-pretty">
            Connect with us on social media or reach out directly. We'd love to have you in our community!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="group bg-primary hover:bg-[#113251] text-primary-foreground rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl btn-glow relative overflow-hidden"
            >
              <Instagram className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Follow on Instagram
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-lg font-medium border-2 hover:bg-muted transition-all duration-300 bg-transparent hover:scale-105 hover:shadow-xl magnetic"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Join Discord
            </Button>
          </div>

          <div className="pt-8">
            <a
              href="mailto:vrlaurier@wlu.ca"
              className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-all duration-300 hover:gap-3 link-underline"
            >
              <Mail className="h-5 w-5 hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">vrlaurier@wlu.ca</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
