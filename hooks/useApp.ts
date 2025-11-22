import { useTheme } from "@/hooks/useTheme";
import { useAppMode } from "@/hooks/useAppMode";
import { useAppInitialization } from "@/hooks/useAppInitialization";

interface UseAppReturn {
  mode: ReturnType<typeof useAppMode>["mode"];
  showSplash: ReturnType<typeof useAppMode>["showSplash"];
  handleModeChange: ReturnType<typeof useAppMode>["handleModeChange"];

  darkMode: ReturnType<typeof useTheme>["darkMode"];
  toggleDarkMode: ReturnType<typeof useTheme>["toggleDarkMode"];
  themeClasses: ReturnType<typeof useTheme>["themeClasses"];

  isInitialized: boolean;
  isThemeLoaded: ReturnType<typeof useTheme>["isThemeLoaded"];
}

export function useApp(): UseAppReturn {
  const { mode, showSplash, handleModeChange } = useAppMode();
  const { darkMode, toggleDarkMode, themeClasses, isThemeLoaded } = useTheme();
  const { isInitialized } = useAppInitialization();

  const fullyInitialized = isInitialized && isThemeLoaded;

  return {
    mode,
    darkMode,
    showSplash,
    themeClasses,
    isThemeLoaded,
    toggleDarkMode,
    handleModeChange,
    isInitialized: fullyInitialized,
  };
}
