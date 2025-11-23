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
          <MainPanel planes={planes} loading={loading} darkMode={darkMode} />
        </Suspense>

        {loading && (
          <div className="absolute inset-0 flex flex-col gap-4 p-4 bg-black/20">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-3">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className={`h-24 sm:h-28 rounded-xl animate-pulse shadow-md ${
                    darkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <div
              className={`flex-1 w-full rounded-lg animate-pulse shadow-inner ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
}
