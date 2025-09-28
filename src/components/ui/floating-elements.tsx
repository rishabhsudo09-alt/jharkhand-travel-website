"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
}

export function FloatingElement({ 
  children, 
  className, 
  delay = 0, 
  duration = 6,
  distance = 20 
}: FloatingElementProps) {
  return (
    <motion.div
      className={cn("absolute", className)}
      animate={{
        y: [0, -distance, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  )
}

export function ParallaxBackground({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      className={cn("absolute inset-0", className)}
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
    >
      {children}
    </motion.div>
  )
}

export function GradientOrb({ className, size = "w-64 h-64" }: { className?: string, size?: string }) {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full blur-3xl opacity-20",
        size,
        className
      )}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.2, 0.3, 0.2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  )
}