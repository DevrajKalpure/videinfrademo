"use client"

import { useEffect, useState } from "react"
import { Sparkles, Zap, Star } from "lucide-react"

export function EnhancedAnimations() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          animation: "grid-move 20s linear infinite",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Animated Icons */}
      <div className="absolute top-1/4 left-1/6 text-primary/10 animate-float">
        <Sparkles className="h-8 w-8 animate-spin-slow" />
      </div>
      <div className="absolute top-3/4 right-1/6 text-accent/10 animate-float" style={{ animationDelay: "1s" }}>
        <Zap className="h-6 w-6 animate-pulse" />
      </div>
      <div className="absolute top-1/2 left-3/4 text-primary/10 animate-float" style={{ animationDelay: "2s" }}>
        <Star className="h-10 w-10 animate-spin-slow" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-gradient-to-r from-accent/3 to-primary/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>
  )
}
