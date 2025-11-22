"use client";

import { memo, useMemo } from "react";
import {
  SIDEBAR_ANIMATION,
  SIDEBAR_STYLES,
} from "@/constants/sidebar.constants";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { MenuItemsListProps } from "@/types/sidebar.types";

function MenuItemsList({
  mode,
  darkMode,
  menuItems,
  onItemClick,
}: MenuItemsListProps) {
  const styles = useMemo(
    () => (darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light),
    [darkMode]
  );

  const title = mode === "monitoring" ? "Status Monitoring" : "Status Analisis";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="p-3 sm:p-4 space-y-2 sm:space-y-3"
    >
      <h3
        className={`text-xs sm:text-sm font-semibold uppercase tracking-wider ${styles.text.tertiary}`}
      >
        {title}
      </h3>
      {menuItems.map((item, idx) => (
        <MenuItem
          key={`${item.label}-${idx}`}
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

function MenuItem({
  item,
  mode,
  darkMode,
  onItemClick,
  index,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  mode: string;
  darkMode: boolean;
  onItemClick: () => void;
  index: number;
}) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  const { iconStyle, textColor, gradientClass } = useMemo(
    () => ({
      iconStyle:
        mode === "monitoring" ? styles.icon.monitoring : styles.icon.analysis,
      textColor: styles.text.accent,
      gradientClass:
        mode === "monitoring"
          ? "bg-linear-to-r from-cyan-500 to-blue-600"
          : "bg-linear-to-r from-purple-500 to-pink-600",
    }),
    [mode, styles]
  );

  const menuItemClass = `group relative overflow-hidden rounded-xl p-3 sm:p-4 transition-all duration-300 w-full text-left ${styles.menuItem.background} ${styles.menuItem.border} ${styles.menuItem.hover}`;

  return (
    <motion.button
      variants={SIDEBAR_ANIMATION.itemVariants}
      custom={index}
      whileHover={{ scale: 1.01, x: 3 }}
      whileTap={{ scale: 0.99 }}
      onClick={onItemClick}
      className={menuItemClass}
    >
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${gradientClass}`}
      />

      <div className="relative z-10 flex items-center justify-between">
        <div className="space-y-1 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className={`text-sm font-bold truncate ${textColor}`}>
              {item.label}
            </p>
            {item.badge && (
              <span
                className={`px-1.5 py-0.5 rounded-full text-xs font-bold ${
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
          className={`p-1.5 sm:p-2 rounded-lg ${iconStyle}`}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.4 }}
        >
          <item.icon size={16} className="sm:size-4" />
        </motion.div>
      </div>

      <motion.div
        className={`absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ${
          mode === "monitoring" ? "text-cyan-400" : "text-purple-400"
        }`}
        initial={{ x: -5 }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.15 }}
      >
        <ChevronRight size={14} className="sm:size-4" />
      </motion.div>
    </motion.button>
  );
}

export default memo(MenuItemsList);
