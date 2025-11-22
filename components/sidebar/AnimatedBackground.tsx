"use client";

import { motion } from "framer-motion";
import { AnimatedBackgroundProps } from "@/interfaces/animated-background-props.interface";

export default function AnimatedBackground({
  darkMode,
}: AnimatedBackgroundProps) {
  const orbColor = darkMode
    ? "bg-linear-to-br from-cyan-500 to-purple-600"
    : "bg-linear-to-br from-cyan-400 to-blue-500";

  return (
    <motion.div
      className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none ${orbColor}`}
      animate={{
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
