# JharkhandYatra - Complete Jharkhand Travel Guide

A comprehensive, modern travel platform built with Next.js 15, featuring stunning animations, glass morphism design, and a complete booking system for Jharkhand destinations, hotels, flights, and tours.

## ✨ Features

### Core Functionality
- **Advanced Search & Filtering** - Multi-criteria search for Jharkhand destinations with date pickers, guest selection, and comprehensive filters
- **Complete Booking System** - Step-by-step booking flow for Jharkhand hotels, tours, and experiences
- **User Account Management** - Profile settings, booking history, and personalized dashboard
- **Wishlist System** - Save and manage favorite Jharkhand destinations, hotels, and tours
- **Review System** - Write and manage reviews with photo uploads for Jharkhand experiences
- **Responsive Design** - Optimized for all devices with mobile-first approach

### Jharkhand Destinations & Features
- **Ranchi** - Capital city with waterfalls (Hundru, Jonha, Dassam) and Rock Garden
- **Deoghar** - Sacred pilgrimage destination with Baidyanath Temple (Jyotirlinga)
- **Jamshedpur** - Steel City with Jubilee Park and Dalma Wildlife Sanctuary
- **Netarhat** - Queen of Chotanagpur hill station with sunrise/sunset points
- **Hazaribagh** - National Park and wildlife sanctuary
- **Bokaro** - Modern steel city with parks and recreational facilities

### Pages & Sections
- **Homepage** - Hero section with Jharkhand search, featured destinations, and testimonials
- **Explore** - Discover Jharkhand destinations with advanced filtering
- **Hotels** - Browse and book accommodations across Jharkhand
- **Flights** - Flight search and booking to Ranchi and nearby airports
- **Tours** - Guided tour packages for waterfalls, temples, and cultural experiences
- **Blog** - Jharkhand travel articles and tips
- **User Account** - Dashboard, profile, bookings, and wishlist
- **Content Pages** - About, FAQ, Contact with forms

### Design & UX
- **Glass Morphism Effects** - Modern frosted glass aesthetic with Jharkhand-inspired colors
- **Smooth Animations** - Framer Motion powered interactions optimized for performance
- **Green & Orange Gradients** - Color scheme inspired by Jharkhand's forests and culture
- **Performance Optimized** - Lazy loading, image optimization, and skeleton loaders
- **Accessibility** - WCAG compliant with proper ARIA labels

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Animations**: Framer Motion (optimized for performance)
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component with lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <your-repo-url>
   cd jharkhand-travel-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Primary**: Forest Green gradient (#22c55e to #16a34a)
- **Secondary**: Warm Orange gradient (#f97316 to #ea580c)
- **Accent**: Earth tones gradient (#eab308 to #ca8a04)
- **Neutrals**: Sophisticated grays and whites

### Jharkhand-Specific Features
- **Waterfalls**: Hundru, Jonha, Dassam Falls information and tours
- **Temples**: Baidyanath Temple (Deoghar) and other spiritual sites
- **Hill Stations**: Netarhat sunrise/sunset experiences
- **Wildlife**: Hazaribagh National Park and Dalma Wildlife Sanctuary
- **Culture**: Tribal heritage and local traditions

## 🔧 Development Notes

### State Management
The app uses Zustand for state management with the following stores:
- **Search State**: Current search parameters for Jharkhand destinations
- **Wishlist**: User's saved Jharkhand places with full object data
- **User State**: Authentication and profile information
- **Booking State**: Current booking flow data for Jharkhand experiences

### API Structure
Mock API functions simulate real backend calls for Jharkhand data:
- **Destinations**: `getDestinations()` - Ranchi, Deoghar, Jamshedpur, etc.
- **Hotels**: `getHotels()` - Jharkhand accommodations
- **Tours**: `getTours()` - Waterfall tours, temple visits, cultural experiences
- **Flights**: `searchFlights()` - Flights to Ranchi (IXR) airport

### Performance Optimizations
- **Image Optimization**: Next.js Image with lazy loading for Jharkhand photos
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Optimized imports and tree shaking
- **Loading States**: Skeleton loaders for better UX
- **Error Boundaries**: Graceful error handling
- **Animation Performance**: Hardware-accelerated animations with reduced motion support

## 🌟 Jharkhand Highlights

### Top Destinations
1. **Ranchi** - Capital city with waterfalls and Rock Garden
2. **Deoghar** - Baidyanath Temple (one of 12 Jyotirlingas)
3. **Jamshedpur** - Planned steel city with beautiful parks
4. **Netarhat** - Hill station with spectacular sunrise/sunset views
5. **Hazaribagh** - National Park and wildlife sanctuary
6. **Bokaro** - Modern steel city with recreational facilities

### Best Time to Visit
- **October to March** - Pleasant weather for most destinations
- **November to February** - Ideal for Hazaribagh National Park
- **October to April** - Perfect for Netarhat hill station

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The app is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/jharkhand-feature`)
3. Commit your changes (`git commit -m 'Add Jharkhand feature'`)
4. Push to the branch (`git push origin feature/jharkhand-feature`)
5. Open a Pull Request

## 📞 Contact

For questions about Jharkhand tourism or this project:
- Email: info@jharkhandyatra.com
- Website: https://jharkhandyatra.com

---

**Explore the Heart of Jharkhand** - Discover waterfalls, temples, forests, and rich tribal culture with JharkhandYatra.