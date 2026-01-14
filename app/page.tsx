"use client"

import type React from "react"

import Link from "next/link"
import {
  ArrowRight,
  Smartphone,
  Laptop,
  Wrench,
  Tv,
  Headphones,
  Mail,
  Phone,
  MapPin,
  Shield,
  Zap,
  Clock,
} from "lucide-react"
import { useState, useEffect } from "react"
import ImageCarousel from "@/components/image-carousel"

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [backgroundImage, setBackgroundImage] = useState("url('/shopimage.webp')")
  const [fade, setFade] = useState(false)

  const categories = [
    {
      icon: Smartphone,
      name: "Mobiles",
      description: "Latest smartphones with cutting-edge technology",
    },
    {
      icon: Laptop,
      name: "Computers",
      description: "High-performance laptops and desktops",
    },
    {
      icon: Headphones,
      name: "Accessories",
      description: "Premium gadget accessories and peripherals",
    },
    {
      icon: Wrench,
      name: "Repair & Service",
      description: "Expert repair and maintenance services",
    },
    {
      icon: Tv,
      name: "Smart TV & AC",
      description: "Smart home entertainment systems",
    },
  ]

  const trustIndicators = [
    {
      title: "Quality Products",
      description: "Premium devices from trusted brands",
      icon: Shield,
    },
    {
      title: "Expert Service",
      description: "Professional support and consultation",
      icon: Zap,
    },
    {
      title: "Best Choice In Our Location",
      description: "Serving the community for years",
      icon: Clock,
    },
  ]

  const brands = [
    { name: "Apple", logo: "https://imgs.search.brave.com/q1wrujWOTPG5DYL_X7H4YSQz3JRtdmFd1D_8T0vNOwk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9mL2ZhL0Fw/cGxlX2xvZ29fYmxh/Y2suc3ZnLzI1MHB4/LUFwcGxlX2xvZ29f/YmxhY2suc3ZnLnBu/Zw" },
    { name: "Samsung", logo: "https://imgs.search.brave.com/wmrGTtwSYGPhPmP-omzWsXOkNYsBc5K9ghtJdSHN3dU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzM3LzIvc2Ftc3Vu/Zy1sb2dvLXBuZ19z/ZWVrbG9nby0zNzAz/NTYucG5n" },
    { name: "OnePlus", logo: "https://imgs.search.brave.com/IoRznY5sTWOq0I0R1lsN_pVCm8dXPyBXJdyArBe3LcQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDY4Lzc2/NC8yNDUvbm9uXzJ4/L29uZXBsdXMtbG9n/by1tb2JpbGUtY29t/cGFueS1icmFuZC1v/ZmZpY2lhbC1pY29u/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n" },
    { name: "Xiaomi", logo: "https://imgs.search.brave.com/QyxUxyGSGRS7fcw8RacRdJVfEQ07lmojxgQgusqyBWg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9hL2FlL1hp/YW9taV9sb2dvXyUy/ODIwMjEtJTI5LnN2/Zy8yNTBweC1YaWFv/bWlfbG9nb18lMjgy/MDIxLSUyOS5zdmcu/cG5n" },
    { name: "Sony", logo: "https://imgs.search.brave.com/krWMCi_fGJmrTMIphAokmwzY8gORIlgrfiZqZoDcx1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDYu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1VL/QWVHWUg0aUs2VWtB/TkQ2X3FjdmVscVVm/M0pzUXRqd0NGX0ZU/OVF1NTdsLVlHUm5x/UmNybGpVRG1YZGhP/Qk5Ga1Jfa29GWDh5/SmNPblVWRjdHVGVn/RnphRjM5VDkwZVNx/Rl9SRXBmd3FsNll2/UU9pLUZjcWpid01K/bGE0ZU5SMkwwSWNt/bXZiWk82c3JQUS1j/cW12Y1lxQVdhYTY2/em9iTmtUbDJjUnlD/UnZRQ3F6MG1Ic3BO/aDFZQXU3T2lwOFcw/V0E5Tlk" },
    { name: "JBL", logo: "https://imgs.search.brave.com/TuoTdsaSDitzsF2ch3KMgt3-T_3t9Qch5YAtGct_G1s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2JjL0pC/TF9sb2dvLnN2Zy8y/NTBweC1KQkxfbG9n/by5zdmcucG5n" },
    { name: "Canon", logo: "https://imgs.search.brave.com/3o9bXG3E1j6Y1bXwVYp4k1a5jT8W8Z6k2K-1e9yX4mM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2Fub24uY29tL2Nv/bnRlbnQvdXBsb2Fk/cy9pbWFnZXMvY2Fu/b24tbG9nby1wbi5w/bmc" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setBackgroundImage((prev) =>
          prev === "url('/shopimage.webp')" ? "url('/shopimage02.avif')" : "url('/shopimage.webp')"
        )
        setFade(false)
      }, 500) // Duration of fade effect (500ms)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hello Gulf Collections!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/917592000905?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setFormSubmitted(false)
    }, 3000)
  }

  return (
    <main className="w-full">
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        <div
          className={`absolute inset-0 transition-opacity duration-1500 ${fade ? "opacity-0 " : "opacity-30"}`}
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        ></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-bounce-subtle"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 z-10">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4 animate-slide-in-right">
            <span className="text-accent font-semibold text-sm">Welcome to Gulf Collections</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-balance">
            The Complete Digital Store
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 text-balance">
            A Complete Collection Of Premium Digital Gadgets & Expert Services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a
              href="tel:7592000905"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/50 inline-flex items-center justify-center gap-2 animate-pulse-glow"
            >
              Call Now
              <ArrowRight size={20} />
            </a>
            <Link
              href="/products"
              className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all inline-flex items-center justify-center gap-2"
            >
              Explore Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 bg-background relative">
        <div className="max-w-6xl mx-auto">
          <ImageCarousel />
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-16 md:py-20 px-4 bg-background relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-foreground text-balance animate-in fade-in slide-in-from-bottom-4">
            Our Product Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.name}
                  href="/products"
                  className="group p-4 md:p-6 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all group-hover:animate-pulse-glow">
                      <Icon size={24} className="md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-foreground">{category.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground text-balance">
            Our Brands & Accessories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="group relative overflow-hidden rounded-xl aspect-square bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 animate-in fade-in slide-in-from-bottom-8 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/10 to-accent/5 group-hover:from-accent/20 group-hover:to-accent/10 transition-all">
                  <span className="text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-300">
                    <img src={brand.logo} alt={brand.name} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-foreground/90 to-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-accent-foreground font-bold text-xl text-center px-4">{brand.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="py-20 px-4 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustIndicators.map((indicator, index) => {
              const Icon = indicator.icon
              return (
                <div
                  key={indicator.title}
                  className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg hover:bg-background/50 transition-all animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-bounce-subtle">
                    <Icon size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{indicator.title}</h3>
                  <p className="text-foreground/70">{indicator.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-bounce-subtle"></div>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground text-balance">
            Get In Touch With Us
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Have questions? We would love to hear from you. Send us a message!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Phone size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:7592000905" className="text-accent hover:text-accent/90 font-semibold">
                +91 759-2000-901
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Mail size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a href="mailto:suppport@gulfcollections.in" className="text-accent hover:text-accent/90 font-semibold">
                suppport@gulfcollections.in
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <MapPin size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Store</h3>
              <p className="text-foreground/70">Come visit us at our showroom for personalized consultation</p>
            </div>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="bg-card border border-border rounded-lg p-8 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell us about your query..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/50 flex items-center justify-center gap-2"
              >
                {formSubmitted ? "Redirecting to WhatsApp..." : "Send via WhatsApp"}
                <ArrowRight size={20} />
              </button>

              {formSubmitted && (
                <div className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-center text-accent font-semibold animate-in fade-in">
                  Opening WhatsApp with your message!
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-foreground to-foreground/90 text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-bounce-subtle"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Find Your Perfect Gadget?</h2>
          <p className="text-xl text-accent-foreground/80">Visit our store or call us for personalized consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7592000905"
              className="px-8 py-4 bg-accent-foreground text-foreground rounded-lg font-semibold hover:bg-accent-foreground/90 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Call Now
              <ArrowRight size={20} />
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-accent-foreground rounded-lg font-semibold hover:bg-accent-foreground/20 transition-all inline-flex items-center justify-center gap-2"
            >
              Visit Store
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
