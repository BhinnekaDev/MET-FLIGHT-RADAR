"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { LegendSectionProps } from "@/types/sidebar.types";
import { SIDEBAR_STYLES } from "@/constants/sidebar.constants";

function LegendSection({ darkMode, legendItems }: LegendSectionProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="p-3 sm:p-4 space-y-3"
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
            darkMode ? "bg-cyan-400" : "bg-cyan-500"
          }`}
        />
        <h3 className={`text-sm font-bold ${styles.text.accent}`}>Legenda</h3>
      </div>

      <div className="grid gap-1.5 sm:gap-2">
        {legendItems.map((item, idx) => (
          <LegendItem
            key={item.label}
            item={item}
            darkMode={darkMode}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
}

function LegendItem({
  item,
  darkMode,
  index,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  darkMode: boolean;
  index: number;
}) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  const { iconStyle, statusColor, borderColor } = useMemo(() => {
    const getColorStyle = () => {
      switch (item.color) {
        case "green":
          return {
            icon: darkMode
              ? "bg-green-500/20 text-green-400"
              : "bg-green-400/20 text-green-600",
            status: "bg-green-500",
          };
        case "blue":
          return {
            icon: darkMode
              ? "bg-blue-500/20 text-blue-400"
              : "bg-blue-400/20 text-blue-600",
            status: "bg-blue-500",
          };
        case "yellow":
          return {
            icon: darkMode
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-yellow-400/20 text-yellow-600",
            status: "bg-yellow-500",
          };
        case "purple":
        default:
          return {
            icon: darkMode
              ? "bg-purple-500/20 text-purple-400"
              : "bg-purple-400/20 text-purple-600",
            status: "bg-purple-500",
          };
      }
    };

    const colors = getColorStyle();
    return {
      iconStyle: colors.icon,
      statusColor: colors.status,
      borderColor: darkMode ? "border-[#0A0E27]" : "border-white",
    };
  }, [item.color, darkMode]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 + index * 0.05 }}
      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg group hover:bg-black/5 transition-all duration-200"
    >
      <div className="relative">
        <div className={`p-1.5 sm:p-2 rounded-lg ${iconStyle}`}>
          <item.icon size={14} className="sm:size-4" />
        </div>
        <div
          className={`absolute -top-0.5 -right-0.5 w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 ${borderColor} ${statusColor} ${
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

export default memo(LegendSection);
