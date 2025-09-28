import type { Destination, Hotel, Flight, Tour, Review } from "./types"

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Jharkhand destinations data
const destinations = [
  {
    id: "1",
    name: "Ranchi",
    country: "India",
    description: "The capital city of Jharkhand, known for its waterfalls, hills, and pleasant climate. Famous for Hundru Falls and Rock Garden.",
    image: "/ranchi.jpg",
    rating: 4.5,
    reviewCount: 1247,
    coordinates: { lat: 23.3441, lng: 85.3096 },
    highlights: ["Hundru Falls", "Rock Garden", "Tagore Hill", "Birsa Zoological Park"],
    bestTimeToVisit: "October to March",
  },
  {
    id: "2",
    name: "Jamshedpur",
    country: "India", 
    description: "The Steel City of India, known for its planned infrastructure, beautiful parks, and industrial heritage.",
    image: "/jamshepur.jpg",
    rating: 4.3,
    reviewCount: 892,
    coordinates: { lat: 22.8046, lng: 86.2029 },
    highlights: ["Jubilee Park", "Tata Steel Zoological Park", "Dalma Wildlife Sanctuary", "Dimna Lake"],
    bestTimeToVisit: "October to March",
  },
  {
    id: "3",
    name: "Deoghar",
    country: "India",
    description: "Sacred pilgrimage destination famous for Baidyanath Temple, one of the twelve Jyotirlingas of Lord Shiva.",
    image: "/deoghar.jpg",
    rating: 4.7,
    reviewCount: 2156,
    coordinates: { lat: 24.4847, lng: 86.6906 },
    highlights: ["Baidyanath Temple", "Nandan Pahar", "Tapovan", "Satsang Ashram"],
    bestTimeToVisit: "October to March",
  },
  {
    id: "4",
    name: "Hazaribagh",
    country: "India",
    description: "Known for its wildlife sanctuary and coal mines. Famous for Hazaribagh National Park and scenic beauty.",
    image: "/hazaribagh.jpg",
    rating: 4.2,
    reviewCount: 654,
    coordinates: { lat: 23.9929, lng: 85.3647 },
    highlights: ["Hazaribagh National Park", "Canary Hill", "Konar Dam", "Rajrappa Temple"],
    bestTimeToVisit: "November to February",
  },
  {
    id: "5",
    name: "Netarhat",
    country: "India",
    description: "The Queen of Chotanagpur, famous for sunrise and sunset views, hill station with pleasant climate.",
    image: "/netarhat.jpg",
    rating: 4.6,
    reviewCount: 987,
    coordinates: { lat: 23.4667, lng: 84.2667 },
    highlights: ["Sunrise Point", "Sunset Point", "Netarhat Residential School", "Lodh Falls"],
    bestTimeToVisit: "October to April",
  },
  {
    id: "6",
    name: "Bokaro",
    country: "India",
    description: "Steel city known for Bokaro Steel Plant and beautiful parks. Modern planned city with good infrastructure.",
    image: "/bokaro.jpg",
    rating: 4.1,
    reviewCount: 543,
    coordinates: { lat: 23.6693, lng: 86.1511 },
    highlights: ["City Park", "Bokaro Steel Plant", "Garga Dam", "Jawaharlal Nehru Biological Park"],
    bestTimeToVisit: "October to March",
  }
]

const hotels = [
  {
    id: "1",
    name: "Hotel Capitol Hill",
    destination: "Ranchi",
    location: "Main Road, Ranchi",
    description: "Luxury hotel in the heart of Ranchi with modern amenities and excellent service.",
    images: ["/hotel-capitol-hill.jpg"],
    rating: 4.5,
    reviewCount: 324,
    pricePerNight: 3500,
    currency: "INR",
    amenities: ["Free WiFi", "Restaurant", "Room Service", "Parking"],
    coordinates: { lat: 23.3441, lng: 85.3096 },
    availability: true,
    roomTypes: []
  },
  {
    id: "2", 
    name: "The Sonnet Jamshedpur",
    destination: "Jamshedpur",
    location: "Bistupur, Jamshedpur",
    description: "Premium hotel offering comfortable stay with modern facilities in the steel city.",
    images: ["/sonnet-jamshedpur.jpg"],
    rating: 4.3,
    reviewCount: 256,
    pricePerNight: 4200,
    currency: "INR",
    amenities: ["Free WiFi", "Swimming Pool", "Gym", "Restaurant", "Bar"],
    coordinates: { lat: 22.8046, lng: 86.2029 },
    availability: true,
    roomTypes: []
  },
  {
    id: "3",
    name: "Hotel Yashoda International",
    destination: "Deoghar",
    location: "Temple Road, Deoghar",
    description: "Comfortable accommodation near Baidyanath Temple with pilgrimage-friendly services.",
    images: ["/yashoda-deoghar.jpg"],
    rating: 4.0,
    reviewCount: 189,
    pricePerNight: 2800,
    currency: "INR",
    amenities: ["Free WiFi", "Restaurant", "Temple Shuttle", "Parking"],
    coordinates: { lat: 24.4847, lng: 86.6906 },
    availability: true,
    roomTypes: []
  }
]

const tours = [
  {
    id: "1",
    name: "Ranchi Waterfalls Tour",
    title: "Ranchi Waterfalls Tour",
    destination: "Ranchi",
    location: "Ranchi",
    description: "Explore the magnificent waterfalls around Ranchi including Hundru, Jonha, and Dassam Falls.",
    images: ["/ranchi-waterfalls-tour.jpg"],
    duration: "Full Day (8 hours)",
    price: 2500,
    currency: "INR",
    rating: 4.6,
    reviewCount: 145,
    maxGroupSize: 15,
    difficulty: "easy" as const,
    includes: ["Transportation", "Guide", "Lunch", "Entry Fees"],
    highlights: ["Hundru Falls", "Jonha Falls", "Dassam Falls"],
    itinerary: [
      {
        day: 1,
        title: "Waterfalls Exploration",
        description: "Visit three major waterfalls around Ranchi",
        activities: ["Hundru Falls visit", "Jonha Falls trekking", "Dassam Falls photography"]
      }
    ]
  },
  {
    id: "2",
    name: "Deoghar Spiritual Journey",
    title: "Deoghar Spiritual Journey", 
    destination: "Deoghar",
    location: "Deoghar",
    description: "Sacred pilgrimage tour covering Baidyanath Temple and other spiritual sites in Deoghar.",
    images: ["/deoghar-spiritual.jpg"],
    duration: "2 Days",
    price: 4500,
    currency: "INR",
    rating: 4.8,
    reviewCount: 234,
    maxGroupSize: 20,
    difficulty: "easy" as const,
    includes: ["Accommodation", "Meals", "Temple Guide", "Transportation"],
    highlights: ["Baidyanath Temple", "Nandan Pahar", "Tapovan", "Basukinath Temple"],
    itinerary: [
      {
        day: 1,
        title: "Temple Darshan",
        description: "Visit main temples and spiritual sites",
        activities: ["Baidyanath Temple darshan", "Nandan Pahar visit", "Evening aarti"]
      },
      {
        day: 2,
        title: "Spiritual Sites",
        description: "Explore nearby spiritual destinations",
        activities: ["Tapovan visit", "Basukinath Temple", "Local market shopping"]
      }
    ]
  },
  {
    id: "3",
    name: "Netarhat Hill Station Retreat",
    title: "Netarhat Hill Station Retreat",
    destination: "Netarhat", 
    location: "Netarhat",
    description: "Experience the Queen of Chotanagpur with sunrise, sunset views and natural beauty.",
    images: ["/netarhat-retreat.jpg"],
    duration: "3 Days 2 Nights",
    price: 6800,
    currency: "INR",
    rating: 4.7,
    reviewCount: 167,
    maxGroupSize: 12,
    difficulty: "moderate" as const,
    includes: ["Accommodation", "All Meals", "Guide", "Transportation"],
    highlights: ["Sunrise Point", "Sunset Point", "Lodh Falls", "Forest Walk"],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Sunset",
        description: "Check-in and evening sunset viewing",
        activities: ["Hotel check-in", "Local exploration", "Sunset point visit"]
      },
      {
        day: 2,
        title: "Nature Exploration",
        description: "Full day nature and sightseeing",
        activities: ["Sunrise viewing", "Lodh Falls visit", "Forest trekking"]
      },
      {
        day: 3,
        title: "Departure",
        description: "Morning activities and departure",
        activities: ["Morning walk", "Local shopping", "Departure"]
      }
    ]
  }
]

const flights = [
  {
    id: "1",
    airline: "IndiGo",
    flightNumber: "6E 2156",
    departure: {
      airport: "CCU",
      city: "Kolkata",
      time: "08:30",
      date: "2024-03-15"
    },
    arrival: {
      airport: "IXR", 
      city: "Ranchi",
      time: "10:15",
      date: "2024-03-15"
    },
    duration: "1h 45m",
    price: 4500,
    currency: "INR",
    class: "economy" as const,
    stops: 0
  },
  {
    id: "2",
    airline: "Air India",
    flightNumber: "AI 9810",
    departure: {
      airport: "DEL",
      city: "Delhi", 
      time: "14:20",
      date: "2024-03-15"
    },
    arrival: {
      airport: "IXR",
      city: "Ranchi",
      time: "16:35",
      date: "2024-03-15"
    },
    duration: "2h 15m",
    price: 6200,
    currency: "INR", 
    class: "economy" as const,
    stops: 0
  }
]

const reviews = [
  {
    id: "1",
    userId: "user1",
    userName: "Priya Sharma",
    userAvatar: "/user-priya.jpg",
    rating: 5,
    comment: "Amazing experience visiting Ranchi waterfalls! The natural beauty is breathtaking and our guide was very knowledgeable about local history.",
    date: "2024-01-20",
    helpful: 18
  },
  {
    id: "2", 
    userId: "user2",
    userName: "Rajesh Kumar",
    userAvatar: "/user-rajesh.jpg",
    rating: 5,
    comment: "Deoghar spiritual tour was life-changing. The peaceful atmosphere and divine energy at Baidyanath Temple is incredible.",
    date: "2024-01-15",
    helpful: 24
  }
]

export const api = {
  // Destinations
  getDestinations: async (): Promise<Destination[]> => {
    await delay(300)
    return destinations
  },

  getDestination: async (id: string): Promise<Destination | null> => {
    await delay(200)
    return destinations.find((d) => d.id === id) || null
  },

  // Hotels
  getHotels: async (filters?: any): Promise<Hotel[]> => {
    await delay(400)
    console.log(filters)
    return hotels
  },

  getHotel: async (id: string): Promise<Hotel | null> => {
    await delay(200)
    return hotels.find((h) => h.id === id) || null
  },

  getHotelById: async (id: string): Promise<Hotel | null> => {
    await delay(200)
    return hotels.find((h) => h.id === id) || null
  },

  getRelatedHotels: async (hotelId: string, limit = 4): Promise<Hotel[]> => {
    await delay(300)
    return hotels.filter((h) => h.id !== hotelId).slice(0, limit)
  },

  // Flights
  searchFlights: async (filters?: any): Promise<Flight[]> => {
    console.log(filters)
    await delay(500)
    return flights
  },

  // Tours
  getTours: async (filters?: any): Promise<Tour[]> => {
    console.log(filters)
    await delay(350)
    return tours
  },

  getTour: async (id: string): Promise<Tour | null> => {
    await delay(200)
    return tours.find((t) => t.id === id) || null
  },

  getTourById: async (id: string): Promise<Tour | null> => {
    await delay(200)
    return tours.find((t) => t.id === id) || null
  },

  getRelatedTours: async (tourId: string, limit = 4): Promise<Tour[]> => {
    await delay(300)
    return tours.filter((t) => t.id !== tourId).slice(0, limit)
  },

  // Reviews
  getReviews: async (itemId: string): Promise<Review[]> => {
    await delay(250)
    return reviews.filter((r) => r.id.startsWith(itemId))
  },
}