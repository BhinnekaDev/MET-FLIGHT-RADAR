/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, useCallback } from "react";
import { Particle } from "@/interfaces/particle.interface";
import { Dimensions } from "@/interfaces/dimensions.interface";

export function useSplashScreen() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    handleResize();

    const debouncedResize = debounce(handleResize, 250);
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [handleResize]);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      const particleCount = dimensions.width < 768 ? 3 : 6;

      const newParticles: Particle[] = Array.from(
        { length: particleCount },
        (_, i) => ({
          id: i,
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          duration: 10 + Math.random() * 6,
          tx: Math.random() * dimensions.width,
          ty: Math.random() * dimensions.height,
        })
      );

      setParticles(newParticles);
    }
  }, [dimensions]);

  return {
    particles,
    dimensions,
  };
}

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
