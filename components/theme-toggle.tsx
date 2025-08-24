"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="hover:scale-110 transition-all duration-300 animate-glow">
        <Sun className="h-5 w-5 animate-spin-slow" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="hover:scale-110 transition-all duration-300 animate-glow magnetic-hover"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-white animate-spin-slow transition-all duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-black animate-pulse transition-all duration-300" />
      )}
    </Button>
  )
}
