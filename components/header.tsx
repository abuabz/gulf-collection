"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-background border-b border-border/20 backdrop-blur-xl shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <img src="/logo.png" alt="Logo" className="w-30 md:w-40 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative ${isActive(link.href)
                  ? "text-accent bg-accent/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-secondary/50"
                  }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:flex">
            <a
              href="tel:7592000905"
              className="px-6 py-2 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <>
            {/* Backdrop overlay to close menu when clicked */}
            <div className="fixed inset-0 top-16 md:hidden z-40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            {/* Mobile Menu */}
            <div className="fixed left-0 right-0 top-16 md:hidden bg-gradient-to-b from-background via-background to-background/95 backdrop-blur-md z-40 min-h-screen flex flex-col items-center justify-start pt-12 pb-6 px-4 animate-in fade-in slide-in-from-top duration-300">
              <div className="flex flex-col items-center space-y-4 w-full max-w-md">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`w-full text-center py-3 px-4 font-semibold rounded-lg transition-all duration-300 ${isActive(link.href)
                      ? "text-accent text-xl bg-accent/10 scale-105"
                      : "text-foreground/80 text-lg hover:text-accent hover:bg-secondary/50"
                      }`}
                    onClick={handleLinkClick}
                    style={{
                      animation: `slideInUp 0.4s ease-out ${index * 0.1}s both`,
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:7592000905"
                  className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 text-center mt-6"
                  style={{
                    animation: `slideInUp 0.4s ease-out ${navLinks.length * 0.1}s both`,
                  }}
                  onClick={handleLinkClick}
                >
                  Call Now
                </a>
              </div>
            </div>
          </>
        )}
      </nav>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}
