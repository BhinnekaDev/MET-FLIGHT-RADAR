import { HeaderMode } from "@/types/header.types";
import { useState, useCallback, useMemo } from "react";
import { UseHeaderProps } from "@/interfaces/use-header-props.interface";

export function useHeader({
  externalSetDarkMode,
  initialDarkMode = false,
  initialMode = "monitoring",
  externalHandleModeChange,
}: UseHeaderProps) {
  const [darkMode, setDarkModeState] = useState(initialDarkMode);
  const [mode, setModeState] = useState<HeaderMode>(initialMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDarkMode = useCallback(() => {
    const newDarkMode = !darkMode;
    setDarkModeState(newDarkMode);
    externalSetDarkMode?.();
  }, [darkMode, externalSetDarkMode]);

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

  return useMemo(
    () => ({
      mode,
      darkMode,
      handleDarkMode,
      isMobileMenuOpen,
      handleModeChange,
      toggleMobileMenu,
    }),
    [
      mode,
      darkMode,
      isMobileMenuOpen,
      handleDarkMode,
      handleModeChange,
      toggleMobileMenu,
    ]
  );
}
