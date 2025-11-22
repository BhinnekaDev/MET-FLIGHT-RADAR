"use client";

import { motion } from "framer-motion";
import { SidebarOverlayProps } from "@/interfaces/sidebar-overlay-props.interface";

export default function SidebarOverlay({
  onClose,
  isMobileOpen,
}: SidebarOverlayProps) {
  if (!isMobileOpen) return null;

  return (
    <motion.div
      onClick={onClose}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lg:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
    />
  );
}
