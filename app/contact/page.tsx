"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin, Send } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingElements } from "@/components/floating-elements"

export default function Contact() {
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
            Let's Create Together
          </h1>
          <p
            className={`text-xl text-muted-foreground mb-12 leading-relaxed font-dm-sans ${isLoaded ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
          >
            Ready to bring your vision to life? We'd love to hear about your project and discuss how we can help you
            achieve your goals.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold font-space-grotesk mb-8 gradient-text-animated">Get In Touch</h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 group hover-lift">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">Email</h3>
                    <p className="text-muted-foreground font-dm-sans">hello@videinfra.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover-lift">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:animate-spin-slow" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">Phone</h3>
                    <p className="text-muted-foreground font-dm-sans">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group hover-lift">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">Location</h3>
                    <p className="text-muted-foreground font-dm-sans">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-space-grotesk mb-4">What to Expect</h3>
                <ul className="space-y-3 text-muted-foreground font-dm-sans">
                  <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow"></div>
                    <span>We'll respond within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow"></div>
                    <span>Free consultation to discuss your project</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow"></div>
                    <span>Detailed proposal with timeline and pricing</span>
                  </li>
                  <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow"></div>
                    <span>Collaborative approach throughout the project</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="p-8 glass-effect-strong premium-shadow interactive-card">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium font-space-grotesk mb-2">First Name</label>
                    <Input placeholder="John" className="glass-effect hover:scale-105 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium font-space-grotesk mb-2">Last Name</label>
                    <Input placeholder="Doe" className="glass-effect hover:scale-105 transition-all duration-300" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium font-space-grotesk mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="glass-effect hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium font-space-grotesk mb-2">Company</label>
                  <Input
                    placeholder="Your Company"
                    className="glass-effect hover:scale-105 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium font-space-grotesk mb-2">Project Type</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background glass-effect hover:scale-105 transition-all duration-300">
                    <option>Select a service</option>
                    <option>Digital Product Design</option>
                    <option>eCommerce Development</option>
                    <option>Brand Communication</option>
                    <option>Full-Stack Development</option>
                    <option>UX/UI Design</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium font-space-grotesk mb-2">Budget Range</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-background glass-effect hover:scale-105 transition-all duration-300">
                    <option>Select budget range</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium font-space-grotesk mb-2">Project Details</label>
                  <Textarea
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="min-h-[120px] glass-effect hover:scale-105 transition-all duration-300"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg animate-glow hover:scale-105 transition-all duration-300 premium-shadow hover-lift group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
