import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gulf Collections - Digital Gadgets",
  description: "A complete collection of digital gadgets including mobiles, computers, and more",
  icons: {
    icon: [
      {
        url: "/logoonly.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logoonly.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logoonly.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logoonly.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
