"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Heart, Zap, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingElements } from "@/components/floating-elements"

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <AnimatedBackground />
      <FloatingElements />

      <nav className="fixed top-0 w-full glass-effect-strong z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold font-space-grotesk gradient-text-animated">
              Vide Infra
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/">
                <Button variant="outline" className="glass-effect-strong bg-transparent hover-lift">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-7xl font-bold font-space-grotesk mb-6 gradient-text-animated ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
          >
            About Vide Infra
          </h1>
          <p
            className={`text-xl text-muted-foreground mb-12 leading-relaxed font-dm-sans ${isLoaded ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
          >
            We are a passionate team of designers and developers creating award-winning digital experiences that push
            the boundaries of what's possible on the web.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold font-space-grotesk mb-6 gradient-text-animated">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-dm-sans">
                Founded in 2019, Vide Infra emerged from a simple belief: that exceptional design and cutting-edge
                technology should work hand in hand to create digital experiences that not only look beautiful but also
                drive real business results.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-dm-sans">
                Our journey began when our founders, frustrated with the disconnect between creative vision and
                technical execution, decided to bridge that gap. Today, we're proud to be recognized as an Awwwards Site
                of the Day winner and trusted by clients worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-dm-sans">
                We believe in the power of collaboration, innovation, and attention to detail. Every project we
                undertake is an opportunity to push boundaries and create something truly exceptional.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl flex items-center justify-center glass-effect-strong interactive-card">
                <img
                  src="/modern-creative-team-working-together-in-a-bright-.png"
                  alt="Our Team"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 glass-effect">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold font-space-grotesk mb-12 text-center gradient-text-animated">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 glass-effect-strong interactive-card premium-shadow group">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                <Heart className="h-6 w-6 text-primary group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-semibold font-space-grotesk mb-4">Passion</h3>
              <p className="text-muted-foreground leading-relaxed font-dm-sans">
                We pour our hearts into every project, treating each client's vision as our own and striving for
                excellence in every detail.
              </p>
            </Card>

            <Card className="p-8 glass-effect-strong interactive-card premium-shadow group">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                <Zap className="h-6 w-6 text-primary group-hover:animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-semibold font-space-grotesk mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed font-dm-sans">
                We stay at the forefront of technology and design trends, constantly exploring new ways to create
                exceptional user experiences.
              </p>
            </Card>

            <Card className="p-8 glass-effect-strong interactive-card premium-shadow group">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:animate-glow transition-all duration-300 group-hover:scale-110">
                <Globe className="h-6 w-6 text-primary group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-semibold font-space-grotesk mb-4">Impact</h3>
              <p className="text-muted-foreground leading-relaxed font-dm-sans">
                We measure our success by the positive impact our work has on our clients' businesses and their users'
                lives.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-space-grotesk mb-12 gradient-text-animated">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl font-bold font-space-grotesk gradient-text-animated mb-2 animate-typewriter group-hover:animate-neon-glow">
                15+
              </div>
              <p className="text-muted-foreground font-dm-sans">Team Members</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold font-space-grotesk gradient-text-animated mb-2 animate-typewriter group-hover:animate-neon-glow">
                5+
              </div>
              <p className="text-muted-foreground font-dm-sans">Years Experience</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold font-space-grotesk gradient-text-animated mb-2 animate-typewriter group-hover:animate-neon-glow">
                25+
              </div>
              <p className="text-muted-foreground font-dm-sans">Awards Won</p>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold font-space-grotesk gradient-text-animated mb-2 animate-typewriter group-hover:animate-neon-glow">
                100+
              </div>
              <p className="text-muted-foreground font-dm-sans">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold font-space-grotesk mb-6 gradient-text-animated">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8 font-dm-sans">
            Let's create something amazing together. Get in touch to discuss your next project.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="text-lg px-8 animate-glow hover:scale-105 transition-all duration-300 premium-shadow hover-lift group"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
