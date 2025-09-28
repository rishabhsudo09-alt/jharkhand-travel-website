"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { SearchForm } from "./search-form"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { FloatingElement, ParallaxBackground, GradientOrb } from "@/components/ui/floating-elements"
import { SmoothCarousel } from "@/components/ui/smooth-carousel"

const heroImages = [
  "/landing_page.jpg",
  "/dassam_fall.jpg", 
  "/netarhat.jpg",
  "/deoghar.jpg"
]

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Carousel */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <SmoothCarousel 
          autoPlay 
          interval={6000} 
          showDots={false} 
          showArrows={false}
          className="h-full"
        >
          {heroImages.map((image, index) => (
            <div key={index} className="relative h-full">
              <ParallaxBackground>
                <img
                  src={image}
                  alt={`Hero background ${index + 1}`}
                  className=" h-full w-full object-fill"
                />
              </ParallaxBackground>
            </div>
          ))}
        </SmoothCarousel>
        
        {/* Enhanced Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" /> */}
      </motion.div>

      {/* Floating Gradient Orbs */}
      <GradientOrb className="top-20 left-20 bg-gradient-to-r from-blue-400 to-purple-500" size="w-96 h-96" />
      <GradientOrb className="bottom-20 right-20 bg-gradient-to-r from-orange-400 to-pink-500" size="w-80 h-80" />
      <GradientOrb className="top-1/2 left-1/2 bg-gradient-to-r from-green-400 to-blue-500" size="w-64 h-64" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center my-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-28"
        >
          <motion.img
              src="/logo_.png"
              alt="Logo"
              className="w-80 h-32 object-cover mx-auto bg-gray-200 rounded-4xl">
          </motion.img>
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Discover Your Next
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Dream Destination
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="gradient-primary text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              Start Exploring
            </Button>

            <Button
              variant="ghost"
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-lg font-semibold hover:scale-105 hover:bg-white/20 transition-all duration-300"
              onClick={() => setShowVideo(true)}
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </motion.div>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <SearchForm />
        </motion.div>
      </div>

      {/* Floating elements */}
      <FloatingElement className="top-20 left-10" delay={0} duration={8}>
        <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 shadow-xl" />
      </FloatingElement>

      <FloatingElement className="bottom-32 right-16" delay={1} duration={6}>
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full backdrop-blur-sm border border-white/10 shadow-xl" />
      </FloatingElement>

      <FloatingElement className="top-1/3 right-20" delay={2} duration={10}>
        <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full backdrop-blur-sm border border-white/10 shadow-xl" />
      </FloatingElement>

      <FloatingElement className="bottom-1/4 left-20" delay={3} duration={7}>
        <div className="w-14 h-14 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-sm border border-white/10 shadow-xl" />
      </FloatingElement>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full"
          >
            <p className="text-center text-gray-600">Video player would be integrated here</p>
            <Button onClick={() => setShowVideo(false)} className="mt-4 w-full">Close</Button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
