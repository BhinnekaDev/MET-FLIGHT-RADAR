import { useState, useCallback } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { UseAppModeReturn } from "@/interfaces/use-app-mode-return-props.interface";

export type AppMode = "monitoring" | "analysis";

export function useAppMode(): UseAppModeReturn {
  const [mode, setMode] = useLocalStorage<AppMode>("app-mode", "monitoring");
  const [showSplash, setShowSplash] = useState(false);

  const handleModeChange = useCallback(
    (newMode: AppMode) => {
      setShowSplash(true);
      const timer = setTimeout(() => {
        setMode(newMode);
        setShowSplash(false);
      }, 500);

      return () => clearTimeout(timer);
    },
    [setMode]
  );

  return {
    mode,
    showSplash,
    handleModeChange,
  };
}
