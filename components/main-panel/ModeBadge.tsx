"use client";

import { Radio } from "lucide-react";
import { motion } from "framer-motion";
import { ModeBadgeProps } from "@/interfaces/mode-badge-props.interface";

export default function ModeBadge({ currentMode }: ModeBadgeProps) {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
      className={`absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 backdrop-blur-md border z-20 ${currentMode.badge}`}
    >
      <Radio size={12} className="sm:size-3.5 animate-pulse" />
      <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
        {currentMode.text}
      </span>
    </motion.div>
  );
}
