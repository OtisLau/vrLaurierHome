"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#events", label: "Events" },
    { href: "#what-we-do", label: "What We Do" },
    { href: "#team", label: "Team" },
    { href: "#join", label: "Join" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-150">
      <div className="container mx-auto px-6 py-4">
        <div 
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-150 max-w-5xl mx-auto ${
            isScrolled ? "bg-background/80 backdrop-blur-lg border border-border shadow-lg" : "bg-background/60 backdrop-blur-md border border-border/50"
          }`}
        >
          <a href="#" className="flex items-center gap-2">
            <Image 
              src="/vr-laurier-logo.png" 
              alt="VR Laurier Logo" 
              width={120} 
              height={40}
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 link-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 bg-background/95 backdrop-blur-lg rounded-3xl px-6 py-4 border border-border shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
