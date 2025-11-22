"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { useState, useEffect } from "react";
import MainPanel from "@/components/MainPanel";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [showSplash, setShowSplash] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [mode, setMode] = useState<"monitoring" | "analysis">("monitoring");

  useEffect(() => {
    const savedMode = localStorage.getItem("app-mode") as
      | "monitoring"
      | "analysis";
    const savedDarkMode = localStorage.getItem("app-dark-mode");

    if (savedMode) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMode(savedMode);
    }

    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }

    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("app-mode", mode);
    }
  }, [mode, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("app-dark-mode", JSON.stringify(darkMode));
    }
  }, [darkMode, isInitialized]);

  const themeClasses = darkMode
    ? "bg-[#1B1C2A] text-gray-100"
    : "bg-[#F5F7FA] text-gray-900";

  const handleModeChange = (newMode: "monitoring" | "analysis") => {
    setShowSplash(true);
    setTimeout(() => {
      setMode(newMode);
      setShowSplash(false);
    }, 700);
  };

  if (!isInitialized) {
    return (
      <div
        className={`h-screen flex items-center justify-center ${themeClasses}`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-screen flex flex-col ${themeClasses}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        mode={mode}
        handleModeChange={handleModeChange}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <AnimatePresence>
          {showSplash && <SplashScreen mode={mode} darkMode={darkMode} />}
        </AnimatePresence>

        <Sidebar mode={mode} darkMode={darkMode} />
        <MainPanel darkMode={darkMode} mode={mode} />
      </div>
    </div>
  );
}
