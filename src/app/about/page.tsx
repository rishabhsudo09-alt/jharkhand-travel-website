"use client"

import { motion } from "framer-motion"
import { Users, Globe, Award, Heart, MapPin, Plane, Camera, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Happy Travelers", value: "25,000+" },
    { icon: Globe, label: "Jharkhand Cities", value: "24+" },
    { icon: Award, label: "Tourism Awards", value: "12+" },
    { icon: Heart, label: "5-Star Reviews", value: "5,000+" },
  ]

  const values = [
    {
      icon: MapPin,
      title: "Local Authenticity",
      description: "We curate genuine experiences that connect you with Jharkhand's tribal culture, traditions, and natural heritage.",
    },
    {
      icon: Shield,
      title: "Responsible Tourism",
      description: "We promote sustainable tourism that benefits local communities and preserves Jharkhand's natural beauty.Your safety is our priority. We work with trusted local partners and maintain the highest standards for all Jharkhand experiences.",
    },
    {
      icon: Plane,
      title: "Seamless Planning",
      description: "From booking to exploring, we make your Jharkhand journey smooth and hassle-free with local expertise.",
    },
    {
      icon: Camera,
      title: "Unforgettable Memories",
      description: "We help you create lasting memories of Jharkhand's waterfalls, temples, and natural wonders.",
    },
  ]

  const team = [
    {
      name: "Priya Sharma",
      role: "Founder & CEO",
      image: "/team-amit-singh.jpg",
      bio: "Jharkhand native and travel enthusiast with 15 years of experience showcasing the state's beauty.",
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Operations",
      image: "/team-priya-kumari.jpg", 
      bio: "Local operations expert who ensures every Jharkhand journey runs smoothly with authentic experiences.",
    },
    {
      name: "Anita Gupta",
      role: "Cultural Heritage Director",
      image: "/team-ravi-oraon.jpg",
      bio: "Passionate about creating unique experiences that showcase Jharkhand's tribal culture and natural beauty.",
    },
    {
      name: "Sunita Devi",
      role: "Technology Lead",
      image: "/team-sunita-devi.jpg",
      bio: "Tech innovator making Jharkhand travel planning easier through user-friendly digital solutions.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 mt-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover the Soul of
              <span className="bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent"> Jharkhand</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe Jharkhand's natural beauty and rich cultural heritage have the power to inspire and transform. 
              Our mission is to showcase the authentic spirit of the Land of Forests to every traveler.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card text-center">
                <CardContent className="p-8">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                  Founded in 2020 by a team of Jharkhand natives and travel enthusiasts, JharkhandYatra was born from a simple idea: showcase the incredible natural beauty and rich cultural heritage of our beloved state.
                  the incredible beauty and rich culture of our homeland to the world.
                </p>
                <p>
                  After years of exploring every corner of Jharkhand, we realized the need for a comprehensive platform that would help travelers discover our state's waterfalls, temples, forests, and tribal culture with ease and authenticity.
                </p>
                <p>
                  Today, we're proud to have helped over 25,000 travelers explore Jharkhand's 24 districts and create unforgettable memories. From Hundru Falls to Baidyanath Temple, we're just getting started in sharing our state's treasures.
                </p>
              </div>
              <Link href="/contact">
                <Button className="mt-8">Get in Touch</Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              <Image 
              src="/jharkhand-team-office.jpg" 
              alt="JharkhandYatra team working together" 
              className="rounded-2xl shadow-2xl" 
              width={20}
              height={20}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="glass-card h-full text-center">
                    <CardContent className="p-8">
                      <value.icon className="w-12 h-12 text-primary mx-auto mb-6" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Card className="glass-card overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                      width={20}
                      height={20}
                      sizes="100vw"
                    />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="text-center"
          >
            <Card className="glass-card">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Explore Jharkhand?</h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of travelers who trust us to showcase the incredible beauty and culture of Jharkhand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/explore">
                    <Button size="lg" className="min-w-[200px]">
                      Explore Jharkhand
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="min-w-[200px] bg-transparent">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}