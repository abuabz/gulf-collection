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
            {/* <div className="w-32 h-32 relative">
              <Image
                src="/logo.png"
                alt="Gulf Collections Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div> */}
          </div>
          <div className="space-y-4 animate-slide-in-from-top-4">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">About Gulf Collections</h1>
            <p className="text-xl md:text-2xl text-accent font-semibold">Leading Electronics Retailer Since 2010</p>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Your trusted partner for authentic smartphones, computers, and accessories
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story - Left Text Right Image */}
      <section className="py-2 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-from-bottom-8" style={{ animationDelay: "0.1s" }}>
              <h2 className="text-5xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our organization has been serving the mobile industry with trust and quality for over 25 years. Founded by Saidalavi, the company was established with a clear vision to provide reliable products and excellent customer service.
                  Over the years, our mobile shop has built a strong reputation in the market by offering the latest mobile phones, accessories, and dependable after-sales support.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Customer satisfaction, experience, and integrity have always been the foundation of our success.
                  Even today, we continue to grow by adapting to new technologies and market trends, while always placing our customers at the center of everything we do.
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
                src="/shopnew02.jpeg"
                alt="Gulf Collections Store"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-10 md:py-24 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Vision & Mission</h2>
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
                  We aim to build long-term relationships with our customers through honesty, reliability, and innovation, while continuously adapting to evolving technology and market needs. Our focus is not just on selling Products , but on creating value, trust, and satisfaction for every customer we serve
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
                  We are committed to delivering a seamless and satisfying customer experience through knowledgeable staff, honest guidance, and continuous improvement. By staying updated with the latest technology and market trends, we strive to meet the evolving needs of our customers while maintaining the trust we have built over more than 25 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Owners */}
      <section className="py-10 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Founders</h2>
            <p className="text-xl text-foreground/70">Visionary leaders building Gulf Collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl mx-auto">
            {/* Owner 1 */}
            {/* <div
              className="group text-center space-y-6 animate-slide-in-from-bottom-8"
              style={{ animationDelay: "0.2s" }}
            >

              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground">SAIDALAVI T</h3>
                <p className="text-accent text-lg font-semibold">Founder & Chairman</p>
                <p className="text-foreground/70 leading-relaxed">
                  Gulf Collections was built on trust and honest service. This belief has guided us for over 25 years and continues to shape how we serve our customers every day
                </p>
              </div>
            </div> */}

            {/* Owner 2 */}
            <div
              className="group text-center space-y-6 animate-slide-in-from-bottom-8"
              style={{ animationDelay: "0.3s" }}
            >
              {/* <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent z-10 group-hover:opacity-70 transition-opacity"></div>
                <Image
                  src="/placeholder-user.jpg"
                  alt="ABDUMANAF V"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div> */}
              <div className="space-y-3 justify-items-center">
                <h3 className="text-xl md:text-3xl font-bold text-foreground">ABDUMANAF V <span className="text-accent opacity-60 px-3">|</span> SAIDALAVI T</h3>
                <p className="text-accent text-lg font-semibold">Founders</p>
                <p className="text-foreground/70 text-center leading-relaxed max-w-[500px]">
                  Gulf Collections was built on trust and honest service. This belief has guided us for over 25 years and continues to shape how we serve our customers every day
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
      <section className="py-2 md:py-24 px-4 bg-gradient-to-br from-accent/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">Our Core Values</h2>
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
