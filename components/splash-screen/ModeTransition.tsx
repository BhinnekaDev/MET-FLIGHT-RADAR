"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { ModeTransitionProps } from "@/types/splash.types";
import {
  DARK_THEME,
  LIGHT_THEME,
  SPLASH_VARIANTS,
} from "@/constants/splash.constants";

function ModeTransition({
  sourceMode,
  targetMode,
  darkMode = false,
}: ModeTransitionProps) {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <motion.div
      variants={SPLASH_VARIANTS.item}
      className="space-y-2 sm:space-y-3"
    >
      <motion.div
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`text-xs font-semibold uppercase tracking-widest px-4 ${theme.text.accent}`}
      >
        Beralih Ke Mode
      </motion.div>

      <div className="flex items-center justify-center gap-2 sm:gap-3 px-4">
        <ModeBadge mode={sourceMode} type="source" theme={theme} />
        <ArrowAnimation darkMode={darkMode} />
        <ModeBadge mode={targetMode} type="target" theme={theme} />
      </div>
    </motion.div>
  );
}

function ModeBadge({
  mode,
  type,
  theme,
}: {
  mode: string;
  type: "source" | "target";
  theme: typeof DARK_THEME;
}) {
  const isSource = type === "source";
  const badgeStyle = isSource ? theme.badge.source : theme.badge.target;

  return (
    <motion.div
      initial={{ opacity: 0, x: isSource ? -10 : 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className={`px-2 py-1 sm:px-3 sm:py-1.5 rounded border text-xs ${badgeStyle}`}
    >
      <p className="font-bold whitespace-nowrap">{mode}</p>
    </motion.div>
  );
}

function ArrowAnimation({ darkMode = false }: { darkMode?: boolean }) {
  const arrowColor = darkMode ? "text-cyan-400" : "text-cyan-500";

  return (
    <motion.div
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={arrowColor}
    >
      <svg
        width="20"
        height="16"
        className="sm:w-6 sm:h-5"
        viewBox="0 0 24 16"
        fill="none"
      >
        <path
          d="M1 8H23M16 2L22 8L16 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export default memo(ModeTransition);
