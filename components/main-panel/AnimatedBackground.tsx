"use client";

import { motion } from "framer-motion";
import { AnimatedBackgroundProps } from "@/interfaces/animated-background-props.interface";

export default function AnimatedBackground({
  darkMode,
}: AnimatedBackgroundProps) {
  return (
    <>
      <motion.div
        className={`absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-2xl sm:blur-3xl opacity-20 pointer-events-none ${
          darkMode
            ? "bg-linear-to-br from-cyan-500 to-purple-600"
            : "bg-linear-to-br from-cyan-400 to-blue-500"
        }`}
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-2xl sm:blur-3xl opacity-20 pointer-events-none ${
          darkMode
            ? "bg-linear-to-tr from-purple-600 to-cyan-500"
            : "bg-linear-to-tr from-purple-300 to-pink-300"
        }`}
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </>
  );
}
