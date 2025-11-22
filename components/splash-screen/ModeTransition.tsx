"use client";

import {
  DARK_THEME,
  LIGHT_THEME,
  SPLASH_VARIANTS,
} from "@/constants/splash.constants";
import { motion } from "framer-motion";
import { ModeTransitionProps } from "@/types/splash.types";

export default function ModeTransition({
  sourceMode,
  targetMode,
  darkMode = false,
}: ModeTransitionProps) {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <motion.div
      variants={SPLASH_VARIANTS.item}
      className="space-y-3 sm:space-y-4"
    >
      <motion.div
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`text-xs sm:text-sm font-semibold uppercase tracking-widest px-4 ${theme.text.accent}`}
      >
        Beralih Ke Mode
      </motion.div>

      <div className="flex items-center justify-center gap-3 sm:gap-4 px-4">
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme: any;
}) {
  const isSource = type === "source";
  const badgeStyle = isSource ? theme.badge.source : theme.badge.target;

  return (
    <motion.div
      initial={{ opacity: 0, x: isSource ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border ${badgeStyle}`}
    >
      <p className="text-xs sm:text-sm font-bold">{mode}</p>
    </motion.div>
  );
}

function ArrowAnimation({ darkMode = false }: { darkMode?: boolean }) {
  const arrowColor = darkMode ? "text-cyan-400" : "text-cyan-500";

  return (
    <motion.div
      animate={{ x: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className={arrowColor}
    >
      <svg
        width="24"
        height="18"
        className="sm:w-8 sm:h-6"
        viewBox="0 0 32 24"
        fill="none"
      >
        <motion.path
          d="M2 12H30M22 5L29 12L22 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
}
