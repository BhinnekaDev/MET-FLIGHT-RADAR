"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { AnimatedBackgroundProps } from "@/interfaces/animated-background-props.interface";

function AnimatedBackground({ darkMode }: AnimatedBackgroundProps) {
  const orbColor = darkMode
    ? "bg-linear-to-br from-cyan-500 to-purple-600"
    : "bg-linear-to-br from-cyan-400 to-blue-500";

  return (
    <motion.div
      className={`absolute -top-24 -right-24 w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-2xl sm:blur-3xl opacity-20 pointer-events-none ${orbColor}`}
      animate={{
        x: [0, 10, 0],
        y: [0, -10, 0],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default memo(AnimatedBackground);
