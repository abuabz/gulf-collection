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
  ChartBar,
  MessageCircleIcon,
} from "lucide-react"
import { useState, useEffect } from "react"
import ImageCarousel from "@/components/image-carousel"

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const heroImages = [
    "url('/shopnew01.jpeg')",
    "url('/shopnew02.jpeg')",
    "url('/shopnew03.jpeg')"
  ]
  const [backgroundImage, setBackgroundImage] = useState(heroImages[0])
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
    { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/250px-Apple_logo_black.svg.png" },
    { name: "Samsung", logo: "https://images.samsung.com/is/image/samsung/assets/in/about-us/brand/logo/mo/360_197_1.png?$720_N_PNG$" },
    { name: "Oppo", logo: "https://i.pinimg.com/736x/eb/e5/42/ebe542236f9dc911005c816d004930eb.jpg" },
    { name: "Vivo", logo: "https://static.vecteezy.com/system/resources/previews/020/927/602/non_2x/vivo-brand-logo-phone-symbol-name-black-design-chinese-mobile-illustration-free-vector.jpg" },
    { name: "Xiaomi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/250px-Xiaomi_logo_%282021-%29.svg.png" },
    { name: "Nothing", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Nothing_Logo.webp/1280px-Nothing_Logo.webp.png" },
    { name: "Motorola", logo: "https://1000logos.net/wp-content/uploads/2017/04/Motorola-Logo.png" },
    { name: "Belkin", logo: "https://1000logos.net/wp-content/uploads/2020/09/Belkin-Logo.png" },
    { name: "JBL", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/JBL_logo.svg/250px-JBL_logo.svg.png" },
    { name: "Boat", logo: "https://i.pinimg.com/736x/08/16/15/081615c30f30318974ce916da17b88e3.jpg" },
    { name: "Philips", logo: "https://images.seeklogo.com/logo-png/10/2/philips-logo-png_seeklogo-108446.png" },
    { name: "Zebronics", logo: "https://cdn.shopify.com/s/files/1/0356/9850/7909/files/zebronicx-logo-black.jpg?v=1611393272" },
    { name: "HP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/250px-HP_logo_2012.svg.png" },
    { name: "Lenovo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Lenovo_logo_2015.svg/2560px-Lenovo_logo_2015.svg.png" },
    { name: "Dell", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/2560px-Dell_logo_2016.svg.png" },
    { name: "Asus", logo: "https://static.vecteezy.com/system/resources/previews/019/136/445/non_2x/asus-logo-asus-icon-free-free-vector.jpg" },
    { name: "MSI", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF-l0uZ3qvAB-DMRWqlnUkyQuhrWIjPCnApg&s" },
    { name: "Logitech", logo: "https://1000logos.net/wp-content/uploads/2020/05/Logitech-logo.jpg" },
    { name: "Fingers", logo: "https://www.computerwale.in/wp-content/uploads/2025/02/fingers-logo.png" },
    { name: "Ant Esports", logo: "https://yt3.googleusercontent.com/ytc/AIdro_ncUU98odLXAA8AswKMrArl5VXG2jD7KhAgPK2zAxAUFQ=s900-c-k-c0x00ffffff-no-rj" },
    { name: "Gadpro", logo: "https://gadpro.in/wp-content/uploads/2023/11/gad-pro-logo.svg" }, // Using placeholder as Gadpro specific logo is rare
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setBackgroundImage((prev) => {
          const currentIndex = heroImages.indexOf(prev)
          const nextIndex = (currentIndex + 1) % heroImages.length
          return heroImages[nextIndex]
        })
        setFade(false)
      }, 500) // Duration of fade effect (500ms)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [heroImages])

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
              href="https://wa.me/917592000905"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/50 inline-flex items-center justify-center gap-2 animate-pulse-glow"
            >
              Chat Now
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

      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"></div>
        </div>
        <div className="max-w-[100vw] relative z-10 overflow-hidden">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground text-balance px-4">
            Our Brands & Accessories
          </h2>

          <div className="relative flex overflow-hidden pause-on-hover">
            <div className="flex animate-marquee whitespace-nowrap py-12">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="mx-4 md:mx-8 flex flex-col items-center justify-center group"
                >
                  <div className="relative w-24 h-24 md:w-24 md:h-24 rounded-2xl bg-card border border-border group-hover:border-accent transition-all duration-300 flex items-center justify-center p-6 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-2">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                      <span className="text-accent-foreground font-bold text-sm md:text-base text-center px-2">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground text-balance">
            Get In Touch With Us
          </h2>
          <p className="text-center text-foreground/70 mb-12 text-lg">
            Have questions? We would love to hear from you. Send us a message!
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border hover:border-accent/50 transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <MessageCircleIcon size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Chat Us</h3>
              <a href="https://wa.me/917592000905" className="text-accent hover:text-accent/90 font-semibold">
                +91 759-2000-905
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
            <Link href="https://maps.app.goo.gl/s7YdLg4M7U19YGin8" target="_blank">
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Downhill, Malappuram</h3>
                <p className="text-sm">Town Square building,Calicut Road</p>
                <p className="text-sm">Kizhakkethala,Malappuram</p>
              </div>
            </Link>
            <Link href="https://maps.app.goo.gl/SGxw4vGPDaMQtjtYA" target="_blank">
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-lg border border-border hover:border-accent/50 transition-all">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Downhill,Kottappadi</h3>
                <p className="text-sm">Naduthodi Tower ,Tirur Road</p>
                <p className="text-sm">Kottappadi,Malappuram</p>
              </div>
            </Link>

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
