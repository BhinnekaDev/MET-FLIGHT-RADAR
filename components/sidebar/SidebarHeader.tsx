"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { SidebarHeaderProps } from "@/types/sidebar.types";
import { SIDEBAR_STYLES } from "@/constants/sidebar.constants";

export default function SidebarHeader({
  mode,
  onClose,
  darkMode,
}: SidebarHeaderProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="p-6 flex items-center justify-between border-b"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2
          className={`text-xl font-black tracking-tight ${styles.text.primary}`}
        >
          {mode === "monitoring"
            ? "Met Flight Monitoring"
            : "Met Flight Analytics"}
        </h2>
        <p className={`text-sm font-medium mt-1 ${styles.text.secondary}`}>
          {mode === "monitoring" ? "Mode Monitoring" : "Mode Analisis"}
        </p>
      </motion.div>

      <button
        onClick={onClose}
        className="lg:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
      >
        <X size={20} className={darkMode ? "text-gray-400" : "text-gray-600"} />
      </button>
    </motion.div>
  );
}
