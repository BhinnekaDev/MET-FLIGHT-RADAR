"use client";

import { motion } from "framer-motion";
import { FloatingParticlesProps } from "@/types/splash.types";

export default function FloatingParticles({
  particles,
  darkMode = false,
}: FloatingParticlesProps) {
  const particleColor = darkMode ? "bg-cyan-500/50" : "bg-cyan-500/30";

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute w-1 h-1 rounded-full ${particleColor}`}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: particle.tx,
            y: particle.ty,
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}
