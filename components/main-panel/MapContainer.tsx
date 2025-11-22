"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import ModeBadge from "@/components/main-panel/ModeBadge";
import { MapContainerProps } from "@/types/main-panel.types";
import MobileInfoBanner from "@/components/main-panel/MobileInfoBanner";
import AnimatedBackground from "@/components/main-panel/AnimatedBackground";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function MapContainer({
  mode,
  darkMode,
  isLoaded,
}: MapContainerProps) {
  const modeStyles = {
    monitoring: {
      badge: darkMode
        ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
        : "bg-cyan-400/20 border-cyan-400/50 text-cyan-600",
      text: "Monitoring",
    },
    analysis: {
      badge: darkMode
        ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
        : "bg-purple-400/20 border-purple-400/50 text-purple-600",
      text: "Analisis",
    },
  };

  const currentMode = modeStyles[mode];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.4, duration: 0.6 }}
      className={`flex-1 relative overflow-hidden rounded-xl sm:rounded-2xl border backdrop-blur-2xl transition-all duration-300 min-h-[400px] sm:min-h-[500px] ${
        darkMode
          ? "bg-linear-to-br from-[#0F1438]/80 via-[#1a1f4d]/60 to-[#0a0e27]/80 border-cyan-500/20 shadow-2xl shadow-cyan-900/30"
          : "bg-linear-to-br from-white/80 via-blue-50/60 to-cyan-50/80 border-cyan-300/40 shadow-2xl shadow-cyan-200/30"
      }`}
    >
      <AnimatedBackground darkMode={darkMode} />

      <div className="relative z-10 w-full h-full">
        <Map darkMode={darkMode} />
      </div>

      <div
        className={`absolute top-0 left-0 right-0 h-px pointer-events-none ${
          darkMode
            ? "bg-linear-to-r from-transparent via-cyan-500/40 to-transparent"
            : "bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"
        }`}
      />

      <ModeBadge currentMode={currentMode} />

      <MobileInfoBanner darkMode={darkMode} mode={mode} />
    </motion.div>
  );
}
