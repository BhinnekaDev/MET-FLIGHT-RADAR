import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { UseThemeReturn } from "@/interfaces/use-theme-return-props.interface";

export function useTheme(): UseThemeReturn {
  const [darkMode, setDarkMode] = useLocalStorage<boolean>(
    "app-dark-mode",
    true
  );
  const [isThemeLoaded, setIsThemeLoaded] = useState(true);

  useEffect(() => {
    if (darkMode !== undefined) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsThemeLoaded(true);
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const themeClasses = darkMode
    ? "bg-[#1B1C2A] text-gray-100"
    : "bg-[#F5F7FA] text-gray-900";

  return {
    darkMode,
    themeClasses,
    isThemeLoaded,
    toggleDarkMode,
  };
}
