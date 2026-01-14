"use client"

import { Users, Target, Lightbulb, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="w-full bg-background overflow-hidden">
      {/* Hero Section with Logo */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="w-32 h-32 relative">
              <Image
                src="/logo.png"
                alt="Gulf Collections Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="space-y-4 animate-slide-in-from-top-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">About Gulf Collections</h1>
            <p className="text-xl md:text-2xl text-accent font-semibold">Leading Electronics Retailer Since 2010</p>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Your trusted partner for authentic smartphones, computers, and accessories
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story - Left Text Right Image */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-from-bottom-8" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-5xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Gulf Collections was born from a passion to deliver excellence in the electronics retail industry.
                  Founded in 2010, we've grown into a trusted name serving thousands of satisfied customers.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our commitment to authenticity, quality, and customer satisfaction has made us the go-to destination
                  for smartphones, computers, and premium accessories in the region.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-accent">
                    <span className="text-2xl font-bold">15+</span>
                    <span className="text-foreground/70">Years of Excellence</span>
                  </div>
                  <div className="flex items-center gap-3 text-accent">
                    <span className="text-2xl font-bold">10K+</span>
                    <span className="text-foreground/70">Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-slide-in-from-bottom-8 group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 z-10 group-hover:opacity-50 transition-opacity"></div>
              <Image
                src="/modern-electronics-store-showroom-with-smartphones.jpg"
                alt="Gulf Collections Store"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div
                className="relative bg-background rounded-2xl p-8 border border-border/20 hover:border-accent/50 transition-all duration-300 space-y-6 animate-slide-in-from-bottom-4"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target size={32} className="text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To be the most trusted and preferred electronics retailer in the Gulf region, known for exceptional
                  quality, authentic products, and unmatched customer service.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div
                className="relative bg-background rounded-2xl p-8 border border-border/20 hover:border-accent/50 transition-all duration-300 space-y-6 animate-slide-in-from-bottom-4"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb size={32} className="text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  To provide our customers with authentic, high-quality electronics at competitive prices, backed by
                  expert consultation and reliable after-sales support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Owners */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Meet Our Founders</h2>
            <p className="text-xl text-foreground/70">Visionary leaders building Gulf Collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Owner 1 */}
            <div
              className="group text-center space-y-6 animate-slide-in-from-bottom-8"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent z-10 group-hover:opacity-70 transition-opacity"></div>
                <Image
                  src="/placeholder-user.jpg"
                  alt="SAIDALAVI T"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground">SAIDALAVI T</h3>
                <p className="text-accent text-lg font-semibold">Founder & Chairman</p>
                <p className="text-foreground/70 leading-relaxed">
                  Visionary entrepreneur with 15+ years of expertise in electronics retail. Founded Gulf Collections
                  with a commitment to quality and customer satisfaction.
                </p>
              </div>
            </div>

            {/* Owner 2 */}
            <div
              className="group text-center space-y-6 animate-slide-in-from-bottom-8"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent z-10 group-hover:opacity-70 transition-opacity"></div>
                <Image
                  src="/placeholder-user.jpg"
                  alt="ABDUMANAF V"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground">ABDUMANAF V</h3>
                <p className="text-accent text-lg font-semibold">Co-Founder & Managing Director</p>
                <p className="text-foreground/70 leading-relaxed">
                  Strategic leader focused on operations and growth. Brings extensive experience in business management
                  and supply chain excellence to Gulf Collections.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="mailto:suppport@gulfcollections.in"
              className="group bg-accent/10 border border-accent/30 rounded-2xl p-6 hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Mail className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold">Email</p>
              <p className="text-sm text-foreground/70 group-hover:text-accent-foreground/80">
                suppport@gulfcollections.in
              </p>
            </a>
            <a
              href="tel:+917592000905"
              className="group bg-accent/10 border border-accent/30 rounded-2xl p-6 hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Phone className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
              <p className="font-semibold">WhatsApp</p>
              <p className="text-sm text-foreground/70 group-hover:text-accent-foreground/80">+91 7592 000 905</p>
            </a>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <Users className="w-8 h-8 mb-3" />
              <p className="font-semibold">Community</p>
              <p className="text-sm text-foreground/70">10K+ Happy Customers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-4 bg-gradient-to-br from-accent/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-foreground">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "100% genuine products verified from authorized distributors",
                color: "from-orange-400 to-orange-500",
              },
              {
                title: "Excellence",
                description: "Superior quality standards in every product we sell",
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "Trust",
                description: "Transparent dealings and lifetime customer relationships",
                color: "from-orange-600 to-red-500",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div
                  className="relative bg-background border border-border/20 rounded-2xl p-8 space-y-4 group-hover:border-accent/50 transition-all duration-300 animate-slide-in-from-bottom-4"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <span className="text-2xl font-bold text-accent group-hover:text-accent-foreground">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
