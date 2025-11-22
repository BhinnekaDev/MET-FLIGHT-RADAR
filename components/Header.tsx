"use client";

import { useState } from "react";
import { Sun, Moon, Radar, Menu, X } from "lucide-react";

interface HeaderProps {
  darkMode?: boolean;
  setDarkMode?: () => void;
  mode?: "monitoring" | "analysis";
  handleModeChange?: (mode: "monitoring" | "analysis") => void;
}

export default function Header({
  darkMode: initialDarkMode = false,
  setDarkMode: externalSetDarkMode,
  mode: initialMode = "monitoring",
  handleModeChange: externalHandleModeChange,
}: HeaderProps) {
  const [darkMode, setDarkModeState] = useState(initialDarkMode);
  const [mode, setModeState] = useState<"monitoring" | "analysis">(initialMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDarkMode = () => {
    setDarkModeState(!darkMode);
    externalSetDarkMode?.();
  };

  const handleModeChange = (newMode: "monitoring" | "analysis") => {
    setModeState(newMode);
    externalHandleModeChange?.(newMode);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`relative overflow-hidden transition-all duration-300 ${
        darkMode
          ? "bg-linear-to-br from-[#0A0E27] via-[#0F1438] to-[#0a0e27]"
          : "bg-linear-to-br from-white via-blue-50 to-white"
      }`}
    >
      <div
        className={`absolute inset-0 opacity-30 ${
          darkMode
            ? "bg-linear-to-tr from-purple-900/20 via-transparent to-cyan-900/20"
            : "bg-linear-to-tr from-blue-200/20 via-transparent to-purple-100/20"
        }`}
      />

      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
        <div
          className={`w-full h-full rounded-full blur-3xl ${
            darkMode
              ? "bg-linear-to-br from-cyan-500 to-purple-600"
              : "bg-linear-to-br from-cyan-400 to-blue-500"
          }`}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
        <div
          className={`w-full h-full rounded-full blur-3xl ${
            darkMode
              ? "bg-linear-to-tr from-purple-600 to-cyan-500"
              : "bg-linear-to-tr from-purple-300 to-pink-300"
          }`}
        />
      </div>

      <div className="relative z-10 flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div
            className={`p-2 lg:p-2.5 rounded-xl backdrop-blur-md transition-all duration-300 ${
              darkMode
                ? "bg-linear-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 group-hover:border-cyan-400/60 group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                : "bg-linear-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 group-hover:border-cyan-300/60 group-hover:shadow-lg group-hover:shadow-cyan-400/20"
            }`}
          >
            <Radar
              size={20}
              className={`lg:size-6 ${
                darkMode
                  ? "text-cyan-400 drop-shadow-lg"
                  : "text-cyan-500 drop-shadow-lg"
              }`}
            />
          </div>
          <div>
            <h1
              className={`text-xl lg:text-2xl font-black tracking-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Met Flight
            </h1>
            <p
              className={`text-xs font-medium tracking-widest ${
                darkMode ? "text-cyan-400/70" : "text-cyan-600/70"
              }`}
            >
              RADAR
            </p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div
            className={`inline-flex backdrop-blur-md rounded-xl p-1.5 transition-all duration-300 ${
              darkMode
                ? "bg-linear-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50"
                : "bg-linear-to-br from-white/60 to-gray-100/60 border border-gray-200/60"
            }`}
          >
            {["monitoring", "analysis"].map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m as "monitoring" | "analysis")}
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 capitalize ${
                  mode === m
                    ? darkMode
                      ? "bg-linear-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/30"
                    : darkMode
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {m === "monitoring" ? "Monitor" : "Analisis"}
              </button>
            ))}
          </div>

          <button
            onClick={handleDarkMode}
            className={`p-2.5 rounded-xl backdrop-blur-md transition-all duration-300 group ${
              darkMode
                ? "bg-linear-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 hover:border-yellow-400/60 hover:shadow-lg hover:shadow-yellow-500/20"
                : "bg-linear-to-br from-indigo-400/20 to-purple-500/20 border border-indigo-400/30 hover:border-indigo-300/60 hover:shadow-lg hover:shadow-indigo-400/20"
            }`}
          >
            {darkMode ? (
              <Sun
                size={20}
                className="text-yellow-400 group-hover:rotate-12 transition-transform duration-300"
              />
            ) : (
              <Moon
                size={20}
                className="text-indigo-500 group-hover:-rotate-12 transition-transform duration-300"
              />
            )}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleDarkMode}
            className={`p-2 rounded-xl backdrop-blur-md transition-all duration-300 ${
              darkMode
                ? "bg-linear-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30"
                : "bg-linear-to-br from-indigo-400/20 to-purple-500/20 border border-indigo-400/30"
            }`}
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-indigo-500" />
            )}
          </button>

          <button
            onClick={toggleMobileMenu}
            className={`p-2 rounded-xl backdrop-blur-md transition-all duration-300 ${
              darkMode
                ? "bg-linear-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50"
                : "bg-linear-to-br from-white/60 to-gray-100/60 border border-gray-200/60"
            }`}
          >
            {isMobileMenuOpen ? (
              <X
                size={18}
                className={darkMode ? "text-gray-300" : "text-gray-700"}
              />
            ) : (
              <Menu
                size={18}
                className={darkMode ? "text-gray-300" : "text-gray-700"}
              />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`px-4 pb-4 pt-2 border-t ${
            darkMode
              ? "border-gray-700/50 bg-gray-900/50"
              : "border-gray-200/50 bg-white/50"
          }`}
        >
          <div
            className={`inline-flex backdrop-blur-md rounded-lg p-1 w-full justify-center ${
              darkMode
                ? "bg-linear-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50"
                : "bg-linear-to-br from-white/60 to-gray-100/60 border border-gray-200/60"
            }`}
          >
            {["monitoring", "analysis"].map((m) => (
              <button
                key={m}
                onClick={() => handleModeChange(m as "monitoring" | "analysis")}
                className={`flex-1 px-4 py-2 rounded-md font-semibold text-sm transition-all duration-300 capitalize ${
                  mode === m
                    ? darkMode
                      ? "bg-linear-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30"
                      : "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/30"
                    : darkMode
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {m === "monitoring" ? "Monitor" : "Analisis"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-px ${
          darkMode
            ? "bg-linear-to-r from-transparent via-cyan-500/40 to-transparent"
            : "bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"
        }`}
      />
    </header>
  );
}
