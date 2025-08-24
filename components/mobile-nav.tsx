"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm glass-effect-ultra border-l border-border animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="text-xl font-bold font-space-grotesk gradient-text-animated">Vide Infra</div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="p-6 space-y-6">
              <Link
                href="#services"
                className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#work"
                className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-6 border-t border-border">
                <Button className="w-full animate-glow">Start Your Project</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
