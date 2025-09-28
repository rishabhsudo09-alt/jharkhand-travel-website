// // File: @/components/OptimizedImage.tsx (or similar)
// "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useIntersectionObserver } from "@/lib/performance";
// import { cn } from "@/lib/utils";

// interface OptimizedImageProps {
//   src: string;
//   alt: string;
//   width?: number;
//   height?: number;
//   className?: string;
//   priority?: boolean;
//   fill?: boolean;
//   sizes?: string;
//   quality?: number;
//   placeholder?: "blur" | "empty";
//   blurDataURL?: string;
// }

// export function OptimizedImage({
//   src,
//   alt,
//   width,
//   height,
//   className,
//   priority = false,
//   fill = false,
//   sizes = "100vw",
//   quality = 85,
//   placeholder = "empty",
//   blurDataURL,
//   ...props
// }: OptimizedImageProps) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [hasError, setHasError] = useState(false);
//   const imageRef = useRef<HTMLDivElement>(null);
//   const isInView = useIntersectionObserver(imageRef, {
//     threshold: 0.1,
//     rootMargin: "50px"
//   });

//   const shouldLoad = priority || isInView;

//   return (
//     <div ref={imageRef} className={cn("relative overflow-hidden", className)}>
//       {shouldLoad && !hasError && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: isLoaded ? 1 : 0 }}
//           transition={{ duration: 0.3 }}
//           className="relative w-full h-full"
//         >
//           <Image
//             src={src || "/landing_page.jpg"}
//             alt={alt}
//             width={fill ? undefined : width}
//             height={fill ? undefined : height}
//             fill={fill}
//             sizes={sizes}
//             quality={quality}
//             priority={priority}
//             placeholder={placeholder}
//             blurDataURL={blurDataURL}
//             onLoad={() => setIsLoaded(true)}
//             onError={() => setHasError(true)}
//             className="object-cover transition-transform duration-500 hover:scale-105"
//             {...props}
//           />
//         </motion.div>
//       )}
      
//       {!isLoaded && shouldLoad && !hasError && (
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
//         </div>
//       )}
      
//       {hasError && (
//         <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
//           <div className="text-gray-400 text-center">
//             <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded" />
//             <p className="text-sm">Image not available</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }