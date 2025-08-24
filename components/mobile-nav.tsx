"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Vide Infra
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="hover:text-primary transition">
            Services
          </Link>
          <Link href="#work" className="hover:text-primary transition">
            Work
          </Link>
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Button>Start Your Project</Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Sidebar + Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
<motion.div
  className="fixed inset-0 bg-background z-40"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  onClick={() => setIsOpen(false)}
/>

{/* Sidebar panel */}
<motion.div
  className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-background text-foreground shadow-xl z-50"
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
>
  {/* Header inside sidebar */}
  <div className="flex items-center justify-between p-6 border-b border-border">
    <div className="text-xl font-bold">Vide Infra</div>
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setIsOpen(false)}
    >
      <X className="h-5 w-5" />
    </Button>
  </div>

  {/* Nav Links */}
  <nav className="p-6 space-y-6">
    <Link
      href="#services"
      className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
      onClick={() => setIsOpen(false)}
    >
      Services
    </Link>
    <Link
      href="#work"
      className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
      onClick={() => setIsOpen(false)}
    >
      Work
    </Link>
    <Link
      href="/about"
      className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
      onClick={() => setIsOpen(false)}
    >
      About
    </Link>
    <Link
      href="/contact"
      className="block text-lg font-medium hover:text-primary transition-all duration-300 hover:translate-x-2"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>

    {/* CTA button */}
    <div className="pt-6 border-t border-border">
      <Button className="w-full">Start Your Project</Button>
    </div>
  </nav>
</motion.div>

          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
