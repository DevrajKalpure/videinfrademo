"use client"

import { useEffect, useState } from "react"

export function PremiumGraphics() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [sparkles, setSparkles] = useState<
    { left: number; top: number; delay: number; duration: number }[]
  >([])

  // Only mark mounted on client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Track window size
  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Generate sparkles on client only
  useEffect(() => {
    const sparklesArray = [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 2 + 1,
    }))
    setSparkles(sparklesArray)
  }, [])

  // **Do not render anything on the server**
  if (!mounted) return null

  return (
    <>
      {/* Premium floating orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-full blur-3xl animate-float-slow"
          style={{ left: mousePosition.x * 0.02 + "px", top: mousePosition.y * 0.02 + "px" }}
        />
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/15 via-teal-500/10 to-emerald-500/15 rounded-full blur-2xl animate-float-reverse"
          style={{
            right: (windowSize.width - mousePosition.x) * 0.03 + "px",
            bottom: (windowSize.height - mousePosition.y) * 0.03 + "px",
          }}
        />
      </div>

      {/* Sparkles */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {sparkles.map((s, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle opacity-70"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}
