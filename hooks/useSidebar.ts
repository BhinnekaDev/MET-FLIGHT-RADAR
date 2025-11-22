"use client";

import { useState } from "react";

export function useSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleActionClick = (actionId: string) => {
    setSelectedAction(actionId);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  return {
    isMobileOpen,
    selectedAction,
    closeMobileMenu,
    toggleMobileMenu,
    handleActionClick,
  };
}
