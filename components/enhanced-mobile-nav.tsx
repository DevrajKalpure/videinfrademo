"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function EnhancedMobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle body overflow when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden relative z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile navigation"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay with backdrop blur */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar panel with SOLID background */}
            <motion.div
              className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-background border-l border-border shadow-xl z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/40"
                    style={{
                      top: `${20 + i * 25}%`,
                      left: `${20 + i * 15}%`,
                      animation: `float 6s ease-in-out ${i * 2}s infinite`,
                    }}
                  />
                ))}
              </div>

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border relative z-10 bg-background">
                <div className="text-xl font-bold">
                  Vide Infra
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6 space-y-6 relative z-10 bg-background">
                {[
                  { label: "Services", href: "#services" },
                  { label: "Work", href: "#work" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2 relative group"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      <Sparkles className="absolute -right-6 top-1/2 -translate-y-1/2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </motion.div>
                ))}

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-border"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Start Your Project
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}