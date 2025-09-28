import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Suspense } from "react"

// Configure Afacad font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "JharkhandYatra - Complete Jharkhand Travel Guide",
  description:
    "Explore Jharkhand's natural beauty, waterfalls, temples, and hill stations. Complete travel guide with hotels, tours, and local experiences.",
  generator: "v0.app",
  keywords: "Jharkhand travel, Ranchi tourism, Deoghar temple, Netarhat hill station, Jharkhand hotels, waterfalls",
  authors: [{ name: "JharkhandYatra Team" }],
  openGraph: {
    title: "JharkhandYatra - Complete Jharkhand Travel Guide",
    description:
      "Explore Jharkhand's natural beauty, waterfalls, temples, and hill stations. Complete travel guide with hotels, tours, and local experiences.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Suspense>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}