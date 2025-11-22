"use client";

import { memo } from "react";
import {
  DARK_THEME,
  LIGHT_THEME,
  SPLASH_VARIANTS,
  ANIMATION_CONFIG,
} from "@/constants/splash.constants";
import { motion } from "framer-motion";
import { ProgressIndicatorProps } from "@/types/splash.types";

function ProgressIndicator({ darkMode = false }: ProgressIndicatorProps) {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;
  const textColor = darkMode ? "text-cyan-400/70" : "text-cyan-600/70";

  return (
    <motion.div
      variants={SPLASH_VARIANTS.item}
      className="space-y-1 sm:space-y-2 w-48 sm:w-56 mx-auto px-4"
    >
      <ProgressBar theme={theme} />
      <LoadingText textColor={textColor} />
    </motion.div>
  );
}

function ProgressBar({ theme }: { theme: typeof DARK_THEME }) {
  return (
    <div
      className={`relative h-1 rounded-full overflow-hidden border ${theme.progress.background}`}
    >
      <motion.div
        className={`absolute inset-y-0 left-0 ${theme.progress.bar}`}
        animate={{ width: ["0%", "100%"] }}
        transition={{
          ...ANIMATION_CONFIG.progress,
          duration: 2.5,
        }}
      />
    </div>
  );
}

function LoadingText({ textColor }: { textColor: string }) {
  return (
    <motion.div
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`text-xs text-center font-medium ${textColor}`}
    >
      Memproses...
    </motion.div>
  );
}

export default memo(ProgressIndicator);
