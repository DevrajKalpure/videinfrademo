"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Sparkles,
  Palette,
  Code,
  Globe,
  Zap,
  Rocket,
  Eye,
  Heart,
  Target,
} from "lucide-react"
import { useEffect, useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingElements } from "@/components/floating-elements"
import { VideoShowcase } from "@/components/video-showcase"
import { EnhancedAnimations } from "@/components/enhanced-animations"
import { EnhancedMobileNav } from "@/components/enhanced-mobile-nav"
import { ScrollAnimations } from "@/components/scroll-animations"
import { PremiumGraphics } from "@/components/premium-graphics"
import { PremiumFloatingGraphics } from "@/components/premium-floating-graphics"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(".scroll-reveal, .scroll-scale")
    scrollElements.forEach((el) => observer.observe(el))

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <AnimatedBackground />
      <FloatingElements />
      <EnhancedAnimations />
      <ScrollAnimations />
      <PremiumGraphics />
      <PremiumFloatingGraphics />

      <div
        className="fixed w-6 h-6 bg-white/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out hidden md:block animate-premium-glow"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "scale(0.8)",
        }}
      />

      <nav className="fixed top-0 w-full glass-effect-strong z-40 transition-all duration-300 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div
              className={`text-xl sm:text-2xl font-bold font-space-grotesk gradient-text-animated ${isLoaded ? "animate-slide-in-left" : "opacity-0"}`}
            >
              Vide Infra
            </div>
            <div
              className={`hidden md:flex items-center space-x-8 ${isLoaded ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
            >
              <Link
                href="#services"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="#work"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />
              <EnhancedMobileNav />
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-28 sm:pt-32 pb-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-primary/5 morphing-blob animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 morphing-blob animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-16 sm:w-32 h-16 sm:h-32 bg-primary/3 morphing-blob animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-10 right-10 w-20 h-20 bg-accent/10 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-20 left-10 w-12 h-12 bg-primary/20 rounded-full animate-bounce"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1
              className={`text-3xl sm:text-5xl md:text-7xl font-bold font-space-grotesk mb-6 leading-tight ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
            >
              Digital Product
              <span className="block gradient-text-animated animate-glow">Design & Development</span>
            </h1>
            <p
              className={`text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed font-dm-sans px-4 ${isLoaded ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
            >
              We create exceptional digital products, services, eCommerce solutions, and brand communications that drive
              results and inspire users with award-winning design.
            </p>
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center px-4 ${isLoaded ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 animate-glow hover:scale-105 transition-all duration-300 premium-shadow hover-lift group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 glass-effect-strong hover:scale-105 transition-all duration-300 bg-transparent hover-lift group"
              >
                <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Watch Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 glass-effect scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 animate-float hover-lift group awwwards-badge">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 animate-premium-glow group-hover:rotate-12 transition-transform" />
              <span className="font-dm-sans text-sm sm:text-base font-medium">Awwwards Site of the Day</span>
            </div>
            <div
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 animate-float hover-lift group awwwards-badge"
              style={{ animationDelay: "0.5s" }}
            >
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 animate-premium-pulse group-hover:scale-125 transition-transform" />
              <span className="font-dm-sans text-sm sm:text-base font-medium">CSS Design Awards</span>
            </div>
            <div
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 animate-float hover-lift group"
              style={{ animationDelay: "1s" }}
            >
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 animate-premium-glow group-hover:animate-bounce" />
              <span className="font-dm-sans text-sm sm:text-base font-medium">100+ Happy Clients</span>
            </div>
            <div
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 animate-float hover-lift group"
              style={{ animationDelay: "1.5s" }}
            >
              <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 animate-premium-pulse group-hover:translate-y-1 transition-transform" />
              <span className="font-dm-sans text-sm sm:text-base font-medium">50+ Projects Launched</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 glass-effect-ultra"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-primary/5 morphing-blob animate-float"></div>
          <div
            className="absolute bottom-10 right-10 w-20 sm:w-32 h-20 sm:h-32 bg-accent/5 morphing-blob animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary/20 rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-accent/15 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-6 gradient-text-animated">
            Our Creative Process
          </h2>
          <p className="text-xl text-muted-foreground mb-8 font-dm-sans">
            Watch how we transform ideas into award-winning digital experiences through our proven methodology
          </p>
          <VideoShowcase />

          <div className="grid md:grid-cols-4 gap-8 mt-20">
            <div className="text-center group">
              <div className="text-5xl font-bold font-space-grotesk gradient-text-animated mb-2 animate-typewriter group-hover:animate-neon-glow">
                150+
              </div>
              <p className="text-muted-foreground font-dm-sans">Projects Completed</p>
            </div>
            <div className="text-center group" style={{ animationDelay: "0.5s" }}>
              <div className="text-5xl font-bold font-space-grotesk gradient-text-animated mb-2 animate-typewriter group-hover:animate-neon-glow">
                98%
              </div>
              <p className="text-muted-foreground font-dm-sans">Client Satisfaction</p>
            </div>
            <div className="text-center group" style={{ animationDelay: "1s" }}>
              <div className="text-5xl font-bold font-space-grotesk gradient-text-animated mb-2 animate-typewriter group-hover:animate-neon-glow">
                25+
              </div>
              <p className="text-muted-foreground font-dm-sans">Awards Won</p>
            </div>
            <div className="text-center group" style={{ animationDelay: "1.5s" }}>
              <div className="text-5xl font-bold font-space-grotesk gradient-text-animated mb-2 animate-typewriter group-hover:animate-neon-glow">
                5+
              </div>
              <p className="text-muted-foreground font-dm-sans">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 morphing-blob-premium animate-parallax-float blur-xl"></div>
          <div
            className="absolute bottom-20 right-10 w-48 h-48 morphing-blob-secondary animate-parallax-float blur-xl"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse blur-lg animate-parallax-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 intersection-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 gradient-text-animated">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              From concept to launch, we provide comprehensive digital solutions that drive exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-0 service-card-premium interactive-card premium-shadow group overflow-hidden relative intersection-scale-up stagger-delay-1 mobile-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/modern-creative-team-working-together-in-a-bright-.png"
                  alt="Digital Products Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="h-12 w-12 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow transition-all duration-300 group-hover:scale-110">
                    <Palette className="h-6 w-6 text-blue-400 group-hover:animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-semibold font-space-grotesk mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                  Digital Products
                </h3>
                <p className="text-muted-foreground leading-relaxed font-dm-sans">
                  Custom web and mobile applications designed for optimal user experience and exponential business
                  growth with cutting-edge technology.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Next.js
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-0 service-card-premium interactive-card premium-shadow group overflow-hidden relative intersection-scale-up stagger-delay-2 mobile-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/10 to-green-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/luxury-fashion-ecommerce-website-with-dark-elegant.png"
                  alt="Premium eCommerce Solutions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="h-12 w-12 bg-emerald-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow transition-all duration-300 group-hover:scale-110">
                    <Globe className="h-6 w-6 text-emerald-400 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-semibold font-space-grotesk mb-4 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  eCommerce
                </h3>
                <p className="text-muted-foreground leading-relaxed font-dm-sans">
                  Scalable online stores and premium marketplaces that convert visitors into loyal customers with
                  seamless shopping experiences.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Shopify
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Stripe
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-0 service-card-premium interactive-card premium-shadow group overflow-hidden relative intersection-scale-up stagger-delay-3 mobile-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-rose-600/10 to-red-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/creative-agency-portfolio-website-with-bold-typogr.png"
                  alt="Brand Communication Strategy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="h-12 w-12 bg-pink-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow transition-all duration-300 group-hover:scale-110">
                    <Sparkles className="h-6 w-6 text-pink-400 group-hover:animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-semibold font-space-grotesk mb-4 text-pink-400 group-hover:text-pink-300 transition-colors">
                  Brand Communication
                </h3>
                <p className="text-muted-foreground leading-relaxed font-dm-sans">
                  Strategic brand identity and communication that resonates deeply with your target audience and creates
                  lasting impressions.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Adobe
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-0 service-card-premium interactive-card premium-shadow group overflow-hidden relative intersection-scale-up stagger-delay-4 mobile-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-amber-600/10 to-yellow-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/modern-fintech-mobile-app-interface-with-clean-des.png"
                  alt="Full-Stack Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="h-12 w-12 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow transition-all duration-300 group-hover:scale-110">
                    <Code className="h-6 w-6 text-orange-400 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-semibold font-space-grotesk mb-4 text-orange-400 group-hover:text-orange-300 transition-colors">
                  Development
                </h3>
                <p className="text-muted-foreground leading-relaxed font-dm-sans">
                  Full-stack development with modern technologies and industry best practices for highly scalable,
                  secure solutions.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Python
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-0 service-card-premium interactive-card premium-shadow group overflow-hidden relative intersection-scale-up stagger-delay-5 mobile-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/10 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/healthcare-telemedicine-platform-with-professional.png"
                  alt="UX/UI Design Excellence"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="h-12 w-12 bg-violet-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow transition-all duration-300 group-hover:scale-110">
                    <Eye className="h-6 w-6 text-violet-400 group-hover:animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-semibold font-space-grotesk mb-4 text-violet-400 group-hover:text-violet-300 transition-colors">
                  UX/UI Design
                </h3>
                <p className="text-muted-foreground leading-relaxed font-dm-sans">
                  User-centered design that creates intuitive, engaging, and memorable digital experiences that users
                  absolutely love.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Figma
                  </span>
                  <span className="px-3 py-1 bg-violet-500/20 text-violet-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Sketch
                  </span>
                </div>
              </div>
            </Card>

            <Card className="p-0 service-card-premium interactive-card premium-shadow group overflow-hidden relative intersection-scale-up stagger-delay-6 mobile-card-hover">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 via-sky-600/10 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="/real-estate-property-management-dashboard-with-mod.png"
                  alt="Performance Optimization"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="h-12 w-12 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow transition-all duration-300 group-hover:scale-110">
                    <Zap className="h-6 w-6 text-cyan-400 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-semibold font-space-grotesk mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Performance
                </h3>
                <p className="text-muted-foreground leading-relaxed font-dm-sans">
                  Advanced optimization and performance tuning to ensure lightning-fast, smooth user experiences across
                  all devices.
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    Lighthouse
                  </span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full backdrop-blur-sm mobile-touch-feedback">
                    WebVitals
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="work" className="py-20 px-6 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 animate-grid-move"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk mb-4 gradient-text-animated">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-dm-sans">
              A selection of our recent projects that showcase our expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden group cursor-pointer glass-effect-strong interactive-card premium-shadow video-container-glow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/luxury-fashion-ecommerce-website-with-dark-elegant.png"
                  alt="Luxury Fashion Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-2 animate-glow group-hover:scale-110 transition-all duration-300 magnetic-hover">
                    <Play className="h-6 w-6 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-space-grotesk mb-2">Luxury Fashion Platform</h3>
                <p className="text-muted-foreground font-dm-sans">
                  Premium e-commerce with immersive shopping experience
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Shopify</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer glass-effect-strong interactive-card premium-shadow video-container-glow">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/modern-fintech-mobile-app-interface-with-clean-des.png"
                  alt="FinTech Mobile App"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-2 animate-glow group-hover:scale-110 transition-all duration-300 magnetic-hover">
                    <Code className="h-6 w-6 group-hover:animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-space-grotesk mb-2">FinTech Mobile App</h3>
                <p className="text-muted-foreground font-dm-sans">Secure banking app with intuitive user experience</p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React Native</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Node.js</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer glass-effect-strong interactive-card premium-shadow video-container-glow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/creative-agency-portfolio-website-with-bold-typogr.png"
                  alt="Creative Agency Portfolio"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-2 animate-glow group-hover:scale-110 transition-all duration-300 magnetic-hover">
                    <Palette className="h-6 w-6 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-space-grotesk mb-2">Creative Agency Portfolio</h3>
                <p className="text-muted-foreground font-dm-sans">
                  Bold portfolio showcasing creative work and services
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Next.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Framer</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer glass-effect-strong interactive-card premium-shadow video-container-glow">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/healthcare-telemedicine-platform-with-professional.png"
                  alt="Healthcare Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-2 animate-glow group-hover:scale-110 transition-all duration-300 magnetic-hover">
                    <Heart className="h-6 w-6 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-space-grotesk mb-2">Healthcare Platform</h3>
                <p className="text-muted-foreground font-dm-sans">
                  Telemedicine platform connecting patients and doctors
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Vue.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">WebRTC</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer glass-effect-strong interactive-card premium-shadow video-container-glow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/real-estate-property-management-dashboard-with-mod.png"
                  alt="Real Estate Dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-2 animate-glow group-hover:scale-110 transition-all duration-300 magnetic-hover">
                    <Globe className="h-6 w-6 group-hover:animate-spin-slow" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-space-grotesk mb-2">Real Estate Dashboard</h3>
                <p className="text-muted-foreground font-dm-sans">Property management system with advanced analytics</p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Angular</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">D3.js</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer glass-effect-strong interactive-card premium-shadow video-container-glow">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/educational-learning-platform-with-interactive-des.png"
                  alt="Educational Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-2 animate-glow group-hover:scale-110 transition-all duration-300 magnetic-hover">
                    <Target className="h-6 w-6 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-space-grotesk mb-2">Educational Platform</h3>
                <p className="text-muted-foreground font-dm-sans">Interactive learning platform with gamification</p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Three.js</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden group cursor-pointer glass-effect-strong interactive-card premium-shadow video-container-glow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/modern-ecommerce-platform-interface-with-dark-them.png"
                  alt="E-commerce Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-2 animate-glow group-hover:scale-110 transition-all duration-300 magnetic-hover">
                    <Play className="h-6 w-6 group-hover:animate-pulse" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Heart className="h-6 w-6 text-white/70 hover:text-red-400 hover:scale-110 transition-all duration-300 cursor-pointer magnetic-hover" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-space-grotesk mb-2">E-commerce Platform</h3>
                <p className="text-muted-foreground font-dm-sans">Modern shopping experience with advanced features</p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Next.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Stripe</span>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer glass-effect-strong interactive-card premium-shadow video-container-glow">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/sleek-saas-dashboard-with-analytics-and-dark-theme.png"
                  alt="SaaS Dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center mb-2 animate-glow group-hover:scale-110 transition-all duration-300 magnetic-hover">
                    <Code className="h-6 w-6 group-hover:animate-spin-slow" />
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Target className="h-6 w-6 text-white/70 hover:text-green-400 hover:scale-110 transition-all duration-300 cursor-pointer magnetic-hover" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-space-grotesk mb-2">SaaS Dashboard</h3>
                <p className="text-muted-foreground font-dm-sans">
                  Analytics platform with intuitive data visualization
                </p>
                <div className="flex gap-2 mt-4">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Vue.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">D3.js</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Node.js</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6 glass-effect-strong">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="text-xl sm:text-2xl font-bold font-space-grotesk mb-4 gradient-text-animated">
                Vide Infra
              </div>
              <p className="text-muted-foreground font-dm-sans mb-4 text-sm sm:text-base">
                Digital product design and development agency creating exceptional experiences.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer hover-lift animate-glow">
                  <span className="text-xs">T</span>
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer hover-lift animate-glow">
                  <span className="text-xs">L</span>
                </div>
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer hover-lift animate-glow">
                  <span className="text-xs">D</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold font-space-grotesk mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground font-dm-sans">
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  Digital Products
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  eCommerce
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  Brand Communication
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  Development
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-space-grotesk mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground font-dm-sans">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300"
                  >
                    About
                  </Link>
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  Work
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  Careers
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-space-grotesk mb-4">Connect</h4>
              <ul className="space-y-2 text-muted-foreground font-dm-sans">
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  Twitter
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  LinkedIn
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  Dribbble
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer hover:translate-x-1 transition-transform duration-300">
                  Behance
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-muted-foreground font-dm-sans text-sm sm:text-base">
            <p>&copy; 2024 Vide Infra. All rights reserved. Made with ❤️ and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
