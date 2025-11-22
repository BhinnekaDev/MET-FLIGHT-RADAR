"use client";

import {
  DARK_THEME,
  LIGHT_THEME,
  ANIMATION_CONFIG,
} from "@/constants/splash.constants";
import { motion } from "framer-motion";
import { BackgroundOrbsProps } from "@/types/splash.types";

export default function BackgroundOrbs({
  darkMode = false,
}: BackgroundOrbsProps) {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <>
      <motion.div
        className={`absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-60 h-60 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-20 ${theme.orb1}`}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={ANIMATION_CONFIG.orb1}
      />
      <motion.div
        className={`absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-60 h-60 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-20 ${theme.orb2}`}
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={ANIMATION_CONFIG.orb2}
      />
    </>
  );
}
