"use client"

import type React from "react"

import { useState } from "react"
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form data:", formData)
    // Reset form
    setFormData({ name: "", phone: "", message: "" })
  }

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 9:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 7:00 PM" },
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Contact Us</h1>
          <p className="text-xl text-foreground/70">Get in touch with Gulf Collections</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mb-4">
              <Phone size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
            <p className="text-foreground/70 mb-4">Reach out for immediate assistance</p>
            <div className="space-y-2">
              <a
                href="tel:7592000905"
                className="text-accent font-semibold hover:text-accent/80 transition-colors flex items-center gap-2"
              >
                7592000905
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:7592000902"
                className="text-accent font-semibold hover:text-accent/80 transition-colors flex items-center gap-2"
              >
                7592000902
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mb-4">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
            <p className="text-foreground/70 mb-4">Two convenient locations</p>
            <p className="text-foreground/80 font-medium">
              Shop Location 1<br />
              Shop Location 2
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-lg flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Hours</h3>
            <p className="text-foreground/70 mb-4">Open 7 days a week</p>
            <div className="space-y-1 text-sm">
              {businessHours.map((item) => (
                <p key={item.day} className="text-foreground/80">
                  <span className="font-semibold">{item.day}:</span> {item.hours}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Form Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Maps */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our Locations</h2>
            <div className="bg-muted rounded-xl overflow-hidden h-96 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8162652631256!2d77.62379!3d12.93829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8c8c8c8c8b%3A0x8c8c8c8c8c8c8c8c!2sGulf%20Collections!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your phone number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  rows={5}
                  placeholder="Your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all inline-flex items-center justify-center gap-2"
              >
                Send Message
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
