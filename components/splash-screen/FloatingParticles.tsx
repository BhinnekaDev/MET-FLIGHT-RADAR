"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FloatingParticlesProps } from "@/types/splash.types";

function FloatingParticles({
  particles,
  darkMode = false,
}: FloatingParticlesProps) {
  const particleColor = darkMode ? "bg-cyan-500/30" : "bg-cyan-500/20";

  return (
    <>
      {particles.map((particle) => (
        <ParticleDot
          key={particle.id}
          particle={particle}
          color={particleColor}
        />
      ))}
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ParticleDot({ particle, color }: { particle: any; color: string }) {
  return (
    <motion.div
      className={`absolute w-1 h-1 rounded-full ${color}`}
      initial={{
        x: particle.x,
        y: particle.y,
        opacity: 0.7,
      }}
      animate={{
        x: particle.tx,
        y: particle.ty,
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  );
}

export default memo(FloatingParticles);
