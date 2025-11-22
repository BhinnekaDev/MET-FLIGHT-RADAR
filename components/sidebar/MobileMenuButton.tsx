"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { X, Menu } from "lucide-react";
import { SIDEBAR_STYLES } from "@/constants/sidebar.constants";
import { MobileMenuButtonProps } from "@/interfaces/mobile-menu-button-props.interface";

function MobileMenuButton({
  darkMode,
  onToggle,
  isMobileOpen,
}: MobileMenuButtonProps) {
  const styles = useMemo(
    () => (darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light),
    [darkMode]
  );

  const buttonClass = `p-3 sm:p-4 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-xl ${styles.button.background} ${styles.button.border} ${styles.button.text} ${styles.button.hover}`;

  return (
    <div className="lg:hidden fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <motion.button
        onClick={onToggle}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={buttonClass}
        aria-label={isMobileOpen ? "Close menu" : "Open menu"}
      >
        {isMobileOpen ? (
          <X size={20} className="sm:size-6" />
        ) : (
          <Menu size={20} className="sm:size-6" />
        )}
      </motion.button>
    </div>
  );
}

export default memo(MobileMenuButton);
