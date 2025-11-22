"use client";

import {
  LEGEND_ITEMS,
  QUICK_ACTIONS,
  SIDEBAR_STYLES,
  ANALYSIS_MENU_ITEMS,
  MONITORING_MENU_ITEMS,
} from "@/constants/sidebar.constants";
import { motion } from "framer-motion";
import { useSidebar } from "@/hooks/useSidebar";
import { memo, useMemo, useCallback } from "react";
import { SidebarProps } from "@/types/sidebar.types";
import SidebarHeader from "@/components/sidebar/SidebarHeader";
import MenuItemsList from "@/components/sidebar/MenuItemsList";
import LegendSection from "@/components/sidebar/LegendSection";
import SidebarOverlay from "@/components/sidebar/SidebarOverlay";
import MobileMenuButton from "@/components/sidebar/MobileMenuButton";
import QuickActionsGrid from "@/components/sidebar/QuickActionsGrid";
import AnimatedBackground from "@/components/sidebar/AnimatedBackground";

function Sidebar({
  mode = "monitoring",
  darkMode = false,
  onPlaneClick,
}: SidebarProps) {
  const {
    isMobileOpen,
    selectedAction,
    toggleMobileMenu,
    handleActionClick,
    closeMobileMenu,
  } = useSidebar();

  const { styles, menuItems } = useMemo(
    () => ({
      styles: darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light,
      menuItems:
        mode === "monitoring" ? MONITORING_MENU_ITEMS : ANALYSIS_MENU_ITEMS,
    }),
    [darkMode, mode]
  );

  const handleActionClickWithCallback = useCallback(
    (actionId: string) => {
      handleActionClick(actionId);
      if (actionId === "pesawat" && onPlaneClick) {
        onPlaneClick();
      }
    },
    [handleActionClick, onPlaneClick]
  );

  const sidebarClasses = `fixed lg:relative h-full z-40 transition-transform duration-300 ${
    isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
  } w-80 max-w-[85vw] sm:max-w-[90vw] ${styles.background} ${
    styles.border
  } backdrop-blur-xl shadow-2xl`;

  return (
    <>
      <MobileMenuButton
        isMobileOpen={isMobileOpen}
        darkMode={darkMode}
        onToggle={toggleMobileMenu}
      />

      <SidebarOverlay isMobileOpen={isMobileOpen} onClose={toggleMobileMenu} />

      <motion.aside
        key={mode}
        initial="hidden"
        animate="visible"
        className={sidebarClasses}
      >
        <AnimatedBackground darkMode={darkMode} />

        <div className="relative z-10 h-full flex flex-col">
          <SidebarHeader
            mode={mode}
            darkMode={darkMode}
            onClose={toggleMobileMenu}
          />

          <div
            className={`h-px ${
              darkMode
                ? "bg-linear-to-r from-transparent via-cyan-500/30 to-transparent"
                : "bg-linear-to-r from-transparent via-cyan-400/20 to-transparent"
            }`}
          />

          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <QuickActionsGrid
                quickActions={QUICK_ACTIONS}
                selectedAction={selectedAction}
                darkMode={darkMode}
                onActionClick={handleActionClickWithCallback}
              />

              <MenuItemsList
                menuItems={menuItems}
                mode={mode}
                darkMode={darkMode}
                onItemClick={closeMobileMenu}
              />

              <LegendSection legendItems={LEGEND_ITEMS} darkMode={darkMode} />
            </div>
          </div>

          <MobileFooter darkMode={darkMode} />
        </div>

        <SidebarBorder darkMode={darkMode} />
      </motion.aside>
    </>
  );
}

function MobileFooter({ darkMode }: { darkMode: boolean }) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  return (
    <div className="lg:hidden p-4 border-t">
      <div className={`text-center text-xs ${styles.text.tertiary}`}>
        Tap anywhere outside to close
      </div>
    </div>
  );
}

function SidebarBorder({ darkMode }: { darkMode: boolean }) {
  const borderClass = darkMode
    ? "bg-linear-to-b from-cyan-500/40 via-cyan-500/20 to-transparent"
    : "bg-linear-to-b from-cyan-400/30 via-cyan-400/15 to-transparent";

  return (
    <div className={`absolute right-0 top-0 bottom-0 w-px ${borderClass}`} />
  );
}

export default memo(Sidebar);
