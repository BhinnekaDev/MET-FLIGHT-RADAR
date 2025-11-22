"use client";

import {
  SIDEBAR_ANIMATION,
  SIDEBAR_STYLES,
} from "@/constants/sidebar.constants";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { MenuItemsListProps } from "@/types/sidebar.types";
import { MenuItemProps } from "@/interfaces/menuItem-props.interface";

export default function MenuItemsList({
  mode,
  darkMode,
  menuItems,
  onItemClick,
}: MenuItemsListProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  return (
    <motion.div initial="hidden" animate="visible" className="p-4 space-y-3">
      <h3
        className={`text-sm font-semibold uppercase tracking-wider ${styles.text.tertiary}`}
      >
        {mode === "monitoring" ? "Status Monitoring" : "Status Analisis"}
      </h3>
      {menuItems.map((item, idx) => (
        <MenuItem
          key={idx}
          item={item}
          mode={mode}
          darkMode={darkMode}
          onItemClick={onItemClick}
          index={idx}
        />
      ))}
    </motion.div>
  );
}

function MenuItem({ item, mode, darkMode, onItemClick }: MenuItemProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;
  const iconStyle =
    mode === "monitoring" ? styles.icon.monitoring : styles.icon.analysis;
  const textColor =
    mode === "monitoring" ? styles.text.accent : styles.text.accent;

  return (
    <motion.button
      variants={SIDEBAR_ANIMATION.itemVariants}
      whileHover={{ scale: 1.02, x: 5 }}
      whileTap={{ scale: 0.98 }}
      onClick={onItemClick}
      className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 w-full text-left ${styles.menuItem.background} ${styles.menuItem.border} ${styles.menuItem.hover}`}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${
          mode === "monitoring"
            ? "bg-linear-to-r from-cyan-500 to-blue-600"
            : "bg-linear-to-r from-purple-500 to-pink-600"
        }`}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div className="space-y-1 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className={`text-sm font-bold truncate ${textColor}`}>
              {item.label}
            </p>
            {item.badge && (
              <span
                className={`px-2 py-1 rounded-full text-xs font-bold ${
                  darkMode
                    ? "bg-cyan-500/20 text-cyan-400"
                    : "bg-cyan-400/20 text-cyan-600"
                }`}
              >
                {item.badge}
              </span>
            )}
          </div>
          <p className={`text-xs truncate ${styles.text.tertiary}`}>
            {item.description}
          </p>
        </div>

        <motion.div
          className={`p-2 rounded-lg ${iconStyle}`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <item.icon size={18} />
        </motion.div>
      </div>

      <motion.div
        className={`absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ${
          mode === "monitoring" ? "text-cyan-400" : "text-purple-400"
        }`}
        initial={{ x: -10 }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <ChevronRight size={18} />
      </motion.div>
    </motion.button>
  );
}
