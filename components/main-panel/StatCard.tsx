"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { StatCardProps } from "@/interfaces/stat-card-props.interface";

function StatCard({ stat, index, isLoaded, darkMode }: StatCardProps) {
  const { label, value, unit, icon: Icon, color } = stat;

  const colorStyles = useMemo(
    () => ({
      cyan: {
        text: darkMode ? "text-cyan-400" : "text-cyan-600",
        bg: darkMode
          ? "bg-cyan-500/20 text-cyan-400"
          : "bg-cyan-400/20 text-cyan-600",
        hover: "bg-linear-to-br from-cyan-500 to-blue-600",
      },
      purple: {
        text: darkMode ? "text-purple-400" : "text-purple-600",
        bg: darkMode
          ? "bg-purple-500/20 text-purple-400"
          : "bg-purple-400/20 text-purple-600",
        hover: "bg-linear-to-br from-purple-500 to-pink-600",
      },
      pink: {
        text: darkMode ? "text-pink-400" : "text-pink-600",
        bg: darkMode
          ? "bg-pink-500/20 text-pink-400"
          : "bg-pink-400/20 text-pink-600",
        hover: "bg-linear-to-br from-pink-500 to-rose-600",
      },
    }),
    [darkMode]
  );

  const currentColor = colorStyles[color];
  const cardClasses = `relative overflow-hidden rounded-lg sm:rounded-xl backdrop-blur-xl p-3 sm:p-4 border transition-all duration-300 group cursor-pointer ${
    darkMode
      ? "bg-linear-to-br from-gray-900/60 to-gray-900/40 border-gray-700/50 hover:border-gray-600/80"
      : "bg-linear-to-br from-white/60 to-gray-50/60 border-gray-200/50 hover:border-gray-300/80"
  } hover:shadow-lg`;

  const labelClasses = `text-xs font-semibold uppercase tracking-wider truncate ${
    darkMode ? "text-gray-400" : "text-gray-600"
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.05 }}
      className={cardClasses}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${currentColor.hover}`}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div className="space-y-1 flex-1 min-w-0">
          <p className={labelClasses}>{label}</p>
          <p
            className={`text-lg sm:text-xl font-black truncate ${currentColor.text}`}
          >
            {value}
            {unit && <span className="text-sm ml-1">{unit}</span>}
          </p>
        </div>

        <motion.div
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`p-2 rounded-lg backdrop-blur-md shrink-0 ml-2 ${currentColor.bg}`}
        >
          <Icon size={16} className="sm:size-[18px]" aria-hidden="true" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default memo(StatCard);
