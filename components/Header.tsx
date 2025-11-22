"use client";

import { useHeader } from "@/hooks/useHeader";
import { Logo } from "@/components/header/Logo";
import { HeaderProps } from "@/types/header.types";
import { MobileMenu } from "@/components/header/MobileMenu";
import { ModeSwitch } from "@/components/header/ModeSwitch";
import { HEADER_STYLES } from "@/constants/header.constants";
import { ThemeToggle } from "@/components/header/ThemeToggle";

export default function Header({
  darkMode: initialDarkMode = false,
  setDarkMode: externalSetDarkMode,
  mode: initialMode = "monitoring",
  handleModeChange: externalHandleModeChange,
}: HeaderProps) {
  const {
    mode,
    darkMode,
    handleDarkMode,
    isMobileMenuOpen,
    handleModeChange,
    toggleMobileMenu,
  } = useHeader({
    initialMode,
    initialDarkMode,
    externalSetDarkMode,
    externalHandleModeChange,
  });

  const styles = darkMode ? HEADER_STYLES.dark : HEADER_STYLES.light;

  return (
    <header
      className={`relative overflow-hidden transition-all duration-300 ${styles.background}`}
    >
      <div className={`absolute inset-0 opacity-30 ${styles.overlay}`} />

      <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 opacity-10 pointer-events-none">
        <div className={`w-full h-full rounded-full blur-3xl ${styles.glow}`} />
      </div>

      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 opacity-10 pointer-events-none">
        <div
          className={`w-full h-full rounded-full blur-3xl ${
            darkMode
              ? "bg-linear-to-tr from-purple-600 to-cyan-500"
              : "bg-linear-to-tr from-purple-300 to-pink-300"
          }`}
        />
      </div>

      <div className="relative z-10 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6">
        <Logo darkMode={darkMode} />

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <ModeSwitch
            mode={mode}
            darkMode={darkMode}
            onModeChange={handleModeChange}
          />
          <ThemeToggle
            size="md"
            darkMode={darkMode}
            onToggle={handleDarkMode}
          />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle
            darkMode={darkMode}
            onToggle={handleDarkMode}
            size="sm"
          />
          <MobileMenu
            darkMode={darkMode}
            isOpen={isMobileMenuOpen}
            mode={mode}
            onToggle={toggleMobileMenu}
            onModeChange={handleModeChange}
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden relative z-20">
          <div
            className={`px-4 pb-4 border-t ${
              darkMode
                ? "border-gray-700/50 bg-gray-900/80 backdrop-blur-md"
                : "border-gray-200/50 bg-white/80 backdrop-blur-md"
            }`}
          >
            <ModeSwitch
              darkMode={darkMode}
              mode={mode}
              onModeChange={handleModeChange}
              isMobile={true}
            />
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 h-px ${styles.divider}`}
      />
    </header>
  );
}
