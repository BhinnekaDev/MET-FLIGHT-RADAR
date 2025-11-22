"use client";

import { motion } from "framer-motion";
import { LegendSectionProps } from "@/types/sidebar.types";
import { SIDEBAR_STYLES } from "@/constants/sidebar.constants";
import { LegendItemProps } from "@/interfaces/legend-item-props.interface";

export default function LegendSection({
  darkMode,
  legendItems,
}: LegendSectionProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="p-4 space-y-4"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-3 h-3 rounded-full ${
            darkMode ? "bg-cyan-400" : "bg-cyan-500"
          }`}
        />
        <h3 className={`text-sm font-bold ${styles.text.accent}`}>Legenda</h3>
      </div>

      <div className="grid gap-2">
        {legendItems.map((item, idx) => (
          <LegendItem key={idx} item={item} darkMode={darkMode} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

function LegendItem({ item, darkMode, index }: LegendItemProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  const getIconStyle = () => {
    switch (item.color) {
      case "green":
        return darkMode
          ? "bg-green-500/20 text-green-400"
          : "bg-green-400/20 text-green-600";
      case "blue":
        return darkMode
          ? "bg-blue-500/20 text-blue-400"
          : "bg-blue-400/20 text-blue-600";
      case "yellow":
        return darkMode
          ? "bg-yellow-500/20 text-yellow-400"
          : "bg-yellow-400/20 text-yellow-600";
      case "purple":
        return darkMode
          ? "bg-purple-500/20 text-purple-400"
          : "bg-purple-400/20 text-purple-600";
      default:
        return darkMode
          ? "bg-purple-500/20 text-purple-400"
          : "bg-purple-400/20 text-purple-600";
    }
  };

  const getStatusColor = () => {
    switch (item.color) {
      case "green":
        return "bg-green-500";
      case "blue":
        return "bg-blue-500";
      case "yellow":
        return "bg-yellow-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-purple-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 + index * 0.1 }}
      className="flex items-center gap-3 p-3 rounded-lg group hover:bg-black/5 transition-all duration-200"
    >
      <div className="relative">
        <div className={`p-2 rounded-lg ${getIconStyle()}`}>
          <item.icon size={16} />
        </div>
        <div
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 ${
            darkMode ? "border-[#0A0E27]" : "border-white"
          } ${getStatusColor()} ${
            item.status === "active" ? "animate-pulse" : ""
          }`}
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold truncate ${styles.text.primary}`}>
          {item.label}
        </p>
        <p className={`text-xs truncate ${styles.text.tertiary}`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}
