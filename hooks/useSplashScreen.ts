"use client";

import { useState, useEffect } from "react";
import { Particle } from "@/interfaces/particle.interface";
import { Dimensions } from "@/interfaces/dimensions.interface";

export function useSplashScreen() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      const newParticles: Particle[] = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        duration: 8 + Math.random() * 4,
        tx: Math.random() * dimensions.width,
        ty: Math.random() * dimensions.height,
      }));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setParticles(newParticles);
    }
  }, [dimensions]);

  return {
    particles,
    dimensions,
  };
}
