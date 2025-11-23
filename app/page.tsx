"use client";

import { Suspense } from "react";
import { useApp } from "@/hooks/useApp";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { usePlanes } from "@/hooks/usePlanes";
import MainPanel from "@/components/MainPanel";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
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

  const { planes, loading, fetchPlanes } = usePlanes(false);

  if (!isInitialized || !isThemeLoaded)
    return <LoadingScreen darkMode={darkMode} />;

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

        <Sidebar mode={mode} darkMode={darkMode} onPlaneClick={fetchPlanes} />

        <Suspense fallback={<div>Memuat...</div>}>
          <MainPanel
            mode={mode}
            planes={planes}
            loading={loading}
            darkMode={darkMode}
          />
        </Suspense>

        {loading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/70">
            <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-4" />
            <div className="text-white text-lg sm:text-xl font-semibold">
              Memuat pesawat...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
