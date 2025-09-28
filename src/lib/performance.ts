// @/lib/performance.ts
"use client";

import React from "react";

// --- Type Definition for non-standard performance.memory ---
// This helps avoid using `any` for memory usage monitoring.
interface PerformanceMemory extends Performance {
  memory: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
}

// --- Image Optimization ---

/**
 * A placeholder utility for optimizing image URLs.
 * In a real-world application, this would integrate with an image CDN or a framework's image optimizer.
 * @param src The source URL of the image.
 * @param width The target width for optimization.
 * @param height The target height for optimization.
 * @returns A new URL with optimization parameters (currently returns the original src).
 */
export function optimizeImage(src: string, width?: number, height?: number): string {
  if (!src) return "/placeholder.svg";

  // EXAMPLE: For a service like Cloudinary or Imgix, you would construct a URL like this:
  // const params = new URLSearchParams();
  // if (width) params.set('w', width.toString());
  // if (height) params.set('h', height.toString());
  // params.set('q', '85'); // Quality
  // params.set('auto', 'format,compress'); // Auto format (e.g., to WebP) and compress
  // return `https://your-image-cdn.com/${src}?${params.toString()}`;

  // For now, it returns the original source.
  return src;
}

// --- React Hooks for Performance ---

/**
 * A React hook for lazy loading that observes when an element enters the viewport.
 * @param elementRef A React ref object pointing to the element to observe.
 * @param options Configuration for the IntersectionObserver API.
 * @returns A boolean indicating if the element is currently intersecting.
 */
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const { root = null, rootMargin = "0px", threshold = 0.1 } = options;

  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { root, rootMargin, threshold });

    observer.observe(element);
    
    // Cleanup the observer when the component unmounts or dependencies change
    return () => observer.disconnect();
    
  // The dependency array uses primitive values from `options` to prevent
  // re-creating the observer on every render, which is more efficient.
  }, [elementRef, root, rootMargin, threshold]);

  return isIntersecting;
}

/**
 * A React hook for virtualizing large lists to render only the visible items.
 * @param items The full array of items to virtualize.
 * @param itemHeight The fixed height of each item in the list (in pixels).
 * @param containerHeight The height of the scrollable container (in pixels).
 * @returns An object with the items to render and necessary style/event props.
 */
export function useVirtualScroll<T>(
  items: T[],
  itemHeight: number,
  containerHeight: number
) {
  const [scrollTop, setScrollTop] = React.useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1, // +1 for buffer
    items.length
  );
  
  const visibleItems = items.slice(startIndex, endIndex);
  const totalHeight = items.length * itemHeight;
  const offsetY = startIndex * itemHeight;

  // This prop object makes it easier to apply the scroll handler.
  const containerProps = {
    ref: scrollContainerRef,
    onScroll: (e: React.UIEvent<HTMLDivElement>) => setScrollTop(e.currentTarget.scrollTop),
    style: { height: `${containerHeight}px`, overflowY: 'auto', position: 'relative' } as const
  };
  
  // These props position the inner list correctly.
  const wrapperProps = {
    style: { height: `${totalHeight}px`, paddingTop: `${offsetY}px` }
  };

  return {
    containerProps,
    wrapperProps,
    visibleItems,
  };
}

// --- General Utilities ---

/**
 * Creates a debounced function that delays invoking `func` until after `wait` milliseconds
 * have elapsed since the last time the debounced function was invoked.
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @returns The new debounced function.
 */
export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T, 
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Creates a throttled function that only invokes `func` at most once per every `limit` milliseconds.
 * @param func The function to throttle.
 * @param limit The throttle limit in milliseconds.
 * @returns The new throttled function.
 */
export function throttle<T extends (...args: Parameters<T>) => ReturnType<T>>(
  func: T, 
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * A wrapper for React.lazy to provide a consistent import syntax for lazy loading components.
 * @param importFunc A function that returns a dynamic import, e.g., () => import('./MyComponent').
 * @returns A lazy-loaded React component.
 */
export function lazyLoad<T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return React.lazy(importFunc);
}

/**
 * Preloads an image by creating an `Image` instance and waiting for it to load.
 * @param src The source URL of the image to preload.
 * @returns A promise that resolves when the image has loaded or rejects on error.
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * A utility to measure the execution time of a function.
 * @param name A descriptive name for the measurement.
 * @param fn The function to execute and measure.
 */
export function measurePerformance(name: string, fn: () => void) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`[Performance] ${name} took ${end - start} milliseconds.`);
}

/**
 * Checks if an element is completely within the visible viewport.
 * @param element The HTML element to check.
 * @returns True if the element is fully in the viewport, false otherwise.
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Logs current memory usage to the console (in development environments).
 * Uses a non-standard browser API, so it checks for its existence first.
 */
export function logMemoryUsage() {
  if (typeof window !== "undefined" && "memory" in performance) {
    const memory = (performance as PerformanceMemory).memory;
    console.log('[Memory Usage]', {
      usedJSHeapSize: `${Math.round(memory.usedJSHeapSize / 1048576)} MB`,
      totalJSHeapSize: `${Math.round(memory.totalJSHeapSize / 1048576)} MB`,
      jsHeapSizeLimit: `${Math.round(memory.jsHeapSizeLimit / 1048576)} MB`,
    });
  }
}