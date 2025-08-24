'use client'

import { useEffect, useState } from "react"

type Sparkle = {
  top: number
  left: number
  opacity: number
  delay: number
}

export function PremiumFloatingGraphics() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Generate sparkle positions only on client
  useEffect(() => {
    const newSparkles = Array.from({ length: 12 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.8 + 0.2,
      delay: Math.random() * 4,
    }))
    setSparkles(newSparkles)
  }, [])

  return (
    <>
      {/* Premium floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="premium-floating-element w-16 h-16 animate-premium-float"
          style={{
            top: "10%",
            left: "5%",
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
        <div
          className="premium-floating-element w-12 h-12 animate-premium-float"
          style={{
            top: "20%",
            right: "10%",
            animationDelay: "1s",
            transform: `translate(${mousePosition.x * -0.008}px, ${mousePosition.y * 0.008}px)`,
          }}
        />
        <div
          className="premium-floating-element w-8 h-8 animate-premium-float"
          style={{
            bottom: "15%",
            left: "15%",
            animationDelay: "2s",
            transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * -0.01}px)`,
          }}
        />
        <div
          className="premium-floating-element w-20 h-20 animate-premium-float"
          style={{
            bottom: "25%",
            right: "8%",
            animationDelay: "0.5s",
            transform: `translate(${mousePosition.x * -0.006}px, ${mousePosition.y * 0.006}px)`,
          }}
        />
        <div
          className="premium-floating-element w-6 h-6 animate-premium-float"
          style={{
            top: "60%",
            left: "70%",
            animationDelay: "1.5s",
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.012}px)`,
          }}
        />
      </div>

      {/* Liquid morphing blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-liquid-morph blur-xl"
          style={{
            top: "10%",
            left: "10%",
          }}
        />
        <div
          className="absolute w-48 h-48 bg-gradient-to-r from-pink-500/20 to-orange-500/20 animate-liquid-morph blur-xl"
          style={{
            bottom: "20%",
            right: "15%",
            animationDelay: "5s",
          }}
        />
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-green-500/20 to-teal-500/20 animate-liquid-morph blur-xl"
          style={{
            top: "50%",
            left: "50%",
            animationDelay: "10s",
          }}
        />
      </div>

      {/* Sparkle trail effects */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle-trail"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              opacity: s.opacity,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
