"use client";

import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { SIDEBAR_STYLES } from "@/constants/sidebar.constants";
import { MobileMenuButtonProps } from "@/interfaces/mobile-menu-button-props.interface";

export default function MobileMenuButton({
  darkMode,
  onToggle,
  isMobileOpen,
}: MobileMenuButtonProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-50">
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-xl ${styles.button.background} ${styles.button.border} ${styles.button.text} ${styles.button.hover}`}
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>
    </div>
  );
}
