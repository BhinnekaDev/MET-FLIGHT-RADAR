import { Sun, Moon } from "lucide-react";
import { HEADER_STYLES } from "@/constants/header.constants";
import { ThemeToggleProps } from "@/interfaces/theme-toggle-props.interface";

export function ThemeToggle({
  darkMode,
  onToggle,
  size = "md",
}: ThemeToggleProps) {
  const styles = darkMode ? HEADER_STYLES.dark : HEADER_STYLES.light;
  const iconSize = size === "sm" ? 16 : 18;

  return (
    <button
      onClick={onToggle}
      className={`rounded-xl backdrop-blur-md transition-all duration-300 group hover:shadow-lg cursor-pointer ${
        size === "md" ? "p-2 sm:p-2.5" : "p-1.5 sm:p-2"
      } ${styles.themeButton.container}`}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <Sun
          size={iconSize}
          className={`group-hover:rotate-12 transition-transform duration-300 ${styles.themeButton.icon}`}
        />
      ) : (
        <Moon
          size={iconSize}
          className={`group-hover:-rotate-12 transition-transform duration-300 ${styles.themeButton.icon}`}
        />
      )}
    </button>
  );
}
