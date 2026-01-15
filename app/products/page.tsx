import { Smartphone, Laptop, Headphones, Wrench, Tv, Package } from "lucide-react"

export default function ProductsPage() {
  const products = [
    {
      icon: Smartphone,
      name: "Mobiles",
      description: "Latest smartphones with cutting-edge technology, high-speed processors, and stunning displays",
      features: ["Latest Models", "Premium Brands", "Best Prices"],
    },
    {
      icon: Laptop,
      name: "Computers",
      description: "High-performance laptops and desktops for work, gaming, and creative professionals",
      features: ["Gaming & Workstation", "Latest Processors", "Extended Warranty"],
    },
    {
      icon: Headphones,
      name: "Accessories",
      description: "Premium gadget accessories including chargers, cables, cases, and audio equipment",
      features: ["Original Products", "Wide Selection", "Affordable Pricing"],
    },
    {
      icon: Wrench,
      name: "Repair & Service",
      description: "Expert repair and maintenance services for all major brands and devices",
      features: ["Certified Technicians", "Quick Turnaround", "Warranty Coverage"],
    },
    {
      icon: Tv,
      name: "Smart TV & AC",
      description: "Smart home entertainment systems and cooling solutions for modern living",
      features: ["Latest Technology", "Energy Efficient", "Installation Included"],
    },
    {
      icon: Package,
      name: "More Categories",
      description: "Browse our complete range of digital gadgets and electronics",
      features: ["Wide Selection", "Quality Assured", "Expert Advice"],
    },
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="pt-16 md:pt-26 px-4 bg-gradient-to-b from-secondary to-background animate-in fade-in duration-1000">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance animate-in slide-in-from-top-4">
            Our Products
          </h1>
          <p className="text-base md:text-xl text-foreground/70 px-2">
            Explore our comprehensive collection of digital gadgets and electronics
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-3 md:px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <div
                  key={product.name}
                  className="group p-3 md:p-6 lg:p-8 bg-card rounded-lg md:rounded-xl border border-border hover:border-accent hover:shadow-xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-8"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col h-full space-y-3 md:space-y-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                      <Icon size={24} className="md:w-9 md:h-9" />
                    </div>
                    <h3 className="text-base md:text-2xl font-bold text-foreground">{product.name}</h3>
                    <p className="text-xs md:text-sm text-foreground/70 flex-grow">{product.description}</p>
                    <ul className="space-y-1 md:space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs md:text-sm">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="w-full mt-2 md:mt-4 px-3 md:px-4 py-2 md:py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all text-sm md:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 md:py-20 px-4 bg-foreground text-accent-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Need Expert Advice?</h2>
          <p className="text-base md:text-xl text-accent-foreground/80">
            Contact our team for personalized product recommendations
          </p>
          <a
            href="tel:7592000905"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all hover:shadow-lg"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </main>
  )
}
