"use client"

import { useEffect, useRef } from "react"

export function ScrollAnimations() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            // Add staggered animation for child elements
            const children = entry.target.querySelectorAll(".stagger-child")
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("in-view")
              }, index * 100)
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all elements with intersection classes
    const elements = document.querySelectorAll(
      ".intersection-fade-up, .intersection-slide-left, .intersection-slide-right, .intersection-scale-up",
    )

    elements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return null
}
