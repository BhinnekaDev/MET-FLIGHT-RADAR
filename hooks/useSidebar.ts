"use client";

import { useState, useCallback } from "react";

export function useSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const handleActionClick = useCallback((actionId: string) => {
    setSelectedAction(actionId);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return {
    isMobileOpen,
    selectedAction,
    closeMobileMenu,
    toggleMobileMenu,
    handleActionClick,
  };
}
