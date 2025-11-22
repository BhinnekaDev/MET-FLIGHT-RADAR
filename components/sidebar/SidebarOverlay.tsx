"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { SidebarOverlayProps } from "@/interfaces/sidebar-overlay-props.interface";

function SidebarOverlay({ onClose, isMobileOpen }: SidebarOverlayProps) {
  if (!isMobileOpen) return null;

  return (
    <motion.div
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="lg:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
      aria-hidden="true"
    />
  );
}

export default memo(SidebarOverlay);
