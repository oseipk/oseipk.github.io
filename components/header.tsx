"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [isDark])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
            <span className="inline-block slide-text">Osei P.K.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/experience" className="text-sm hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="/projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="rounded-full">
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </header>
  )
}
