import { Instagram, MessageCircle, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">VR Laurier</h3>
            <p className="text-sm text-muted-foreground">Exploring immersive tech together</p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Discord">
              <MessageCircle className="h-6 w-6" />
            </a>
            <a
              href="mailto:vrlaurier@wlu.ca"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">© 2025 VR Laurier. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
