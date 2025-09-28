"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi, India",
    avatar: "/user-priya-sharma.jpg",
    rating: 5,
    comment:
      "JharkhandYatra made our spiritual journey to Deoghar absolutely divine. The temple tour was well-organized and our guide was very knowledgeable about local traditions.",
    trip: "Deoghar Spiritual Tour",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Mumbai, India",
    avatar: "/user-rajesh-kumar.jpg",
    rating: 5,
    comment:
      "The Ranchi waterfalls tour exceeded all expectations. Hundru Falls and Jonha Falls were breathtaking. The natural beauty of Jharkhand is incredible!",
    trip: "Ranchi Waterfalls Experience",
  },
  {
    id: 3,
    name: "Anita Gupta",
    location: "Kolkata, India",
    avatar: "/user-anita-verma.jpg",
    rating: 5,
    comment:
      "Outstanding service from start to finish. The Netarhat hill station retreat was perfectly planned. The sunrise and sunset views were magical!",
    trip: "Netarhat Hill Station Retreat",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            What Our Jharkhand
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Explorers Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied travelers have to say about their Jharkhand experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card border-0 h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary/30 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">&quot;{testimonial.comment}&quot;</p>

                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      <p className="text-xs text-primary font-medium mt-1">{testimonial.trip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
