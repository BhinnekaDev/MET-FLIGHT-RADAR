"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { BackgroundOrbsProps } from "@/types/splash.types";
import { DARK_THEME, LIGHT_THEME } from "@/constants/splash.constants";

function BackgroundOrbs({ darkMode = false }: BackgroundOrbsProps) {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <>
      <Orb
        theme={theme}
        type="top"
        className={`-top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-60 sm:h-60 ${theme.orb1}`}
      />
      <Orb
        theme={theme}
        type="bottom"
        className={`-bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-60 sm:h-60 ${theme.orb2}`}
      />
    </>
  );
}

function Orb({
  type,
  className,
}: {
  theme: typeof DARK_THEME;
  type: "top" | "bottom";
  className: string;
}) {
  const isTop = type === "top";

  return (
    <motion.div
      className={`absolute rounded-full blur-xl sm:blur-2xl opacity-20 ${className}`}
      animate={{
        x: isTop ? [0, 15, 0] : [0, -15, 0],
        y: isTop ? [0, -15, 0] : [0, 15, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: isTop ? 0 : 0.5,
      }}
    />
  );
}

export default memo(BackgroundOrbs);
