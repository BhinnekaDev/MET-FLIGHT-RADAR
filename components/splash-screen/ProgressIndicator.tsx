"use client";

import { motion } from "framer-motion";
import {
  DARK_THEME,
  LIGHT_THEME,
  ANIMATION_CONFIG,
} from "@/constants/splash.constants";
import { ProgressIndicatorProps } from "@/types/splash.types";
import { SPLASH_VARIANTS } from "@/constants/splash.constants";

export default function ProgressIndicator({
  darkMode = false,
}: ProgressIndicatorProps) {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;
  const textColor = darkMode ? "text-cyan-400/70" : "text-cyan-600/70";

  return (
    <motion.div
      variants={SPLASH_VARIANTS.item}
      className="space-y-2 sm:space-y-3 w-56 sm:w-64 mx-auto px-4"
    >
      <div
        className={`relative h-1.5 rounded-full overflow-hidden border ${theme.progress.background}`}
      >
        <motion.div
          className={`absolute inset-y-0 left-0 ${theme.progress.bar}`}
          animate={{ width: ["0%", "100%"] }}
          transition={ANIMATION_CONFIG.progress}
        />
      </div>

      <LoadingText textColor={textColor} />
    </motion.div>
  );
}

function LoadingText({ textColor }: { textColor: string }) {
  return (
    <motion.div
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className={`text-xs text-center font-semibold ${textColor}`}
    >
      <motion.span
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ●
      </motion.span>{" "}
      Memproses...{" "}
      <motion.span
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
      >
        ●
      </motion.span>
    </motion.div>
  );
}
