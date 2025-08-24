"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EnhancedMobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setIsAnimating(true)
      // Stagger animation for nav items
      const items = document.querySelectorAll(".mobile-nav-item")
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("animate")
        }, index * 100)
      })
    } else {
      document.body.style.overflow = "unset"
      setIsAnimating(false)
      const items = document.querySelectorAll(".mobile-nav-item")
      items.forEach((item) => item.classList.remove("animate"))
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden relative animate-pulse-glow z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5 animate-spin-slow" /> : <Menu className="h-5 w-5 animate-breathe" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          <div
            className="fixed inset-0 mobile-nav-overlay animate-mobile-fade-in backdrop-blur-xl bg-black/80 dark:bg-black/90"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-background/95 dark:bg-background/98 backdrop-blur-xl border-l border-border mobile-nav-panel open shadow-2xl">
            <div className="particle-system">
              <div className="particle animate-sparkle"></div>
              <div className="particle animate-sparkle" style={{ animationDelay: "1s" }}></div>
              <div className="particle animate-sparkle" style={{ animationDelay: "2s" }}></div>
            </div>

            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="text-xl font-bold font-space-grotesk gradient-text-animated animate-magnetic-pull">
                Vide Infra
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="animate-glow">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="p-6 space-y-6">
              <Link
                href="#services"
                className="mobile-nav-item block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 relative group"
                onClick={() => setIsOpen(false)}
              >
                Services
                <Sparkles className="absolute -right-6 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 group-hover:opacity-100 animate-sparkle transition-opacity" />
              </Link>
              <Link
                href="#work"
                className="mobile-nav-item block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 relative group"
                onClick={() => setIsOpen(false)}
              >
                Work
                <Sparkles className="absolute -right-6 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 group-hover:opacity-100 animate-sparkle transition-opacity" />
              </Link>
              <Link
                href="/about"
                className="mobile-nav-item block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 relative group"
                onClick={() => setIsOpen(false)}
              >
                About
                <Sparkles className="absolute -right-6 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 group-hover:opacity-100 animate-sparkle transition-opacity" />
              </Link>
              <Link
                href="/contact"
                className="mobile-nav-item block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 relative group"
                onClick={() => setIsOpen(false)}
              >
                Contact
                <Sparkles className="absolute -right-6 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 group-hover:opacity-100 animate-sparkle transition-opacity" />
              </Link>
              <div className="mobile-nav-item pt-6 border-t border-border">
                <Button className="w-full animate-glow hover:animate-pulse-glow premium-shadow-mobile">
                  Start Your Project
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
