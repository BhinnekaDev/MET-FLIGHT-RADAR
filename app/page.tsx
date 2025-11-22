"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainPanel from "@/components/MainPanel";
import { AnimatePresence } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [mode, setMode] = useState<"monitoring" | "analysis">("monitoring");
  const [showSplash, setShowSplash] = useState(false);

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
          {showSplash && <SplashScreen mode={mode} />}
        </AnimatePresence>

        <Sidebar mode={mode} darkMode={darkMode} />
        <MainPanel darkMode={darkMode} mode={mode} />
      </div>
    </div>
  );
}
