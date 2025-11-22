"use client";

import { Radar } from "lucide-react";
import { motion } from "framer-motion";
import { RadarAnimationProps } from "@/types/splash.types";
import { SPLASH_VARIANTS } from "@/constants/splash.constants";
import { ANIMATION_CONFIG } from "@/constants/splash.constants";

export default function RadarAnimation({
  darkMode = false,
}: RadarAnimationProps) {
  const radarColor = darkMode
    ? "bg-linear-to-br from-cyan-500 to-purple-600 shadow-cyan-500/50"
    : "bg-linear-to-br from-cyan-400 to-blue-500 shadow-cyan-400/50";

  const satelliteColor = darkMode ? "bg-cyan-400" : "bg-cyan-500";

  return (
    <motion.div variants={SPLASH_VARIANTS.item} className="flex justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={ANIMATION_CONFIG.radar}
        className="relative"
      >
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${radarColor} flex items-center justify-center shadow-2xl`}
        >
          <Radar size={32} className="sm:size-10 text-white" />
        </div>
        {[0, 1, 2].map((i) => (
          <SatelliteDot key={i} index={i} color={satelliteColor} />
        ))}
      </motion.div>
    </motion.div>
  );
}

function SatelliteDot({ index, color }: { index: number; color: string }) {
  return (
    <motion.div
      className={`absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full ${color}`}
      animate={{ rotate: 360 }}
      transition={{
        ...ANIMATION_CONFIG.satellite,
        delay: index * 0.3,
      }}
      style={{
        top: "50%",
        left: "50%",
        marginTop: -4,
        marginLeft: -4,
      }}
    >
      <motion.div
        className="absolute w-full h-full rounded-full"
        animate={{
          x: [0, 32 * Math.cos((index * 2 * Math.PI) / 3), 0],
          y: [0, 32 * Math.sin((index * 2 * Math.PI) / 3), 0],
        }}
        transition={ANIMATION_CONFIG.satellite}
      />
    </motion.div>
  );
}
