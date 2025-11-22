import { useState, useCallback } from "react";
import { HeaderMode } from "@/types/header.types";
import { UseHeaderProps } from "@/interfaces/use-header-props.interface";

export function useHeader({
  initialDarkMode = false,
  externalSetDarkMode,
  initialMode = "monitoring",
  externalHandleModeChange,
}: UseHeaderProps) {
  const [darkMode, setDarkModeState] = useState(initialDarkMode);
  const [mode, setModeState] = useState<HeaderMode>(initialMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDarkMode = useCallback(() => {
    setDarkModeState((prev) => !prev);
    externalSetDarkMode?.();
  }, [externalSetDarkMode]);

  const handleModeChange = useCallback(
    (newMode: HeaderMode) => {
      setModeState(newMode);
      externalHandleModeChange?.(newMode);
      setIsMobileMenuOpen(false);
    },
    [externalHandleModeChange]
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return {
    mode,
    darkMode,
    handleDarkMode,
    isMobileMenuOpen,
    handleModeChange,
    toggleMobileMenu,
  };
}
