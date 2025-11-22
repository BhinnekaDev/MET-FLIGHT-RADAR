"use client";

import { memo } from "react";
import { Radar } from "lucide-react";
import {
  SPLASH_VARIANTS,
  ANIMATION_CONFIG,
} from "@/constants/splash.constants";
import { motion } from "framer-motion";
import { RadarAnimationProps } from "@/types/splash.types";

function RadarAnimation({ darkMode = false }: RadarAnimationProps) {
  const radarColor = darkMode
    ? "bg-linear-to-br from-cyan-500 to-purple-600 shadow-cyan-500/30"
    : "bg-linear-to-br from-cyan-400 to-blue-500 shadow-cyan-400/30";

  const satelliteColor = darkMode ? "bg-cyan-400" : "bg-cyan-500";

  return (
    <motion.div variants={SPLASH_VARIANTS.item} className="flex justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          ...ANIMATION_CONFIG.radar,
          duration: 6,
        }}
        className="relative"
      >
        <div
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${radarColor} flex items-center justify-center shadow-lg`}
        >
          <Radar size={28} className="sm:size-8 text-white" />
        </div>
        <Satellites color={satelliteColor} />
      </motion.div>
    </motion.div>
  );
}

function Satellites({ color }: { color: string }) {
  return (
    <>
      {[0, 1, 2].map((index) => (
        <SatelliteDot key={index} index={index} color={color} />
      ))}
    </>
  );
}

function SatelliteDot({ index, color }: { index: number; color: string }) {
  return (
    <motion.div
      className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${color}`}
      style={{
        top: "50%",
        left: "50%",
        marginTop: -3,
        marginLeft: -3,
      }}
      animate={{
        x: [0, 24 * Math.cos((index * 2 * Math.PI) / 3), 0],
        y: [0, 24 * Math.sin((index * 2 * Math.PI) / 3), 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: index * 0.2,
      }}
    />
  );
}

export default memo(RadarAnimation);
