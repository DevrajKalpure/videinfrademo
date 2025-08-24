"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/10 rotate-45 animate-float" />
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-white/5 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/15 animate-float" style={{ animationDelay: "2s" }} />
      <div
        className="absolute bottom-20 right-40 w-5 h-5 bg-white/8 rotate-12 animate-float"
        style={{ animationDelay: "0.5s" }}
      />

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <line
          x1="10%"
          y1="20%"
          x2="90%"
          y2="80%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="80%"
          y1="10%"
          x2="20%"
          y2="90%"
          stroke="url(#lineGradient)"
          strokeWidth="0.5"
          className="animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </svg>
    </div>
  )
}
