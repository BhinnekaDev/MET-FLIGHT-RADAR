"use client";

import { memo, Suspense } from "react";
import { useApp } from "@/hooks/useApp";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainPanel from "@/components/MainPanel";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import LoadingScreen from "@/components/LoadingScreen";

function Home() {
  const {
    mode,
    darkMode,
    showSplash,
    themeClasses,
    isThemeLoaded,
    isInitialized,
    toggleDarkMode,
    handleModeChange,
  } = useApp();

  if (!isInitialized || !isThemeLoaded) {
    return <LoadingScreen darkMode={darkMode} />;
  }

  return (
    <div
      className={`h-screen flex flex-col ${themeClasses} transition-colors duration-300`}
    >
      <Header
        mode={mode}
        darkMode={darkMode}
        setDarkMode={toggleDarkMode}
        handleModeChange={handleModeChange}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {showSplash && <SplashScreen mode={mode} darkMode={darkMode} />}
        </AnimatePresence>

        <Sidebar mode={mode} darkMode={darkMode} />

        <Suspense fallback={<div>Loading...</div>}>
          <MainPanel darkMode={darkMode} mode={mode} />
        </Suspense>
      </div>
    </div>
  );
}

export default memo(Home);
