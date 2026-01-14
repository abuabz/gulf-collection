import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-accent-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Gulf Collections</h3>
            <p className="text-accent-foreground/80 text-sm">A Complete Collections Of Digital Gadgets</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Mobiles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Computers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Smart TV & AC
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:7592000905" className="hover:text-accent transition-colors">
                  7592000905
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:7592000902" className="hover:text-accent transition-colors">
                  7592000902
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span>Shop Location</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8">
          <p className="text-center text-sm text-accent-foreground/60">© 2026 Gulf Collections. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
