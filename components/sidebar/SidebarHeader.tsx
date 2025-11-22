"use client";

import { X } from "lucide-react";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { SidebarHeaderProps } from "@/types/sidebar.types";
import { SIDEBAR_STYLES } from "@/constants/sidebar.constants";

function SidebarHeader({ mode, onClose, darkMode }: SidebarHeaderProps) {
  const styles = useMemo(
    () => (darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light),
    [darkMode]
  );

  const title =
    mode === "monitoring" ? "Met Flight Monitoring" : "Met Flight Analytics";

  const subtitle = mode === "monitoring" ? "Mode Monitoring" : "Mode Analisis";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="p-4 sm:p-6 flex items-center justify-between border-b"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2
          className={`text-lg sm:text-xl font-black tracking-tight ${styles.text.primary}`}
        >
          {title}
        </h2>
        <p
          className={`text-xs sm:text-sm font-medium mt-1 ${styles.text.secondary}`}
        >
          {subtitle}
        </p>
      </motion.div>

      <button
        onClick={onClose}
        className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-black/10 transition-colors"
        aria-label="Close sidebar"
      >
        <X size={18} className={darkMode ? "text-gray-400" : "text-gray-600"} />
      </button>
    </motion.div>
  );
}

export default memo(SidebarHeader);
