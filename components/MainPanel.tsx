"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Radio, TrendingUp, MapPin } from "lucide-react";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

interface MainPanelProps {
  darkMode?: boolean;
  mode?: "monitoring" | "analysis";
}

export default function MainPanel({
  darkMode = false,
  mode = "monitoring",
}: MainPanelProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFlights, setActiveFlights] = useState(247);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveFlights((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(200, Math.min(300, prev + change));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`flex-1 overflow-hidden transition-colors duration-300 ${
        darkMode ? "bg-[#050810]" : "bg-gray-50"
      }`}
    >
      <motion.div
        key={mode}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-full w-full p-3 sm:p-4 lg:p-6 flex flex-col gap-3 sm:gap-4"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3"
        >
          {(mode === "monitoring"
            ? [
                {
                  label: "Pesawat Aktif",
                  value: activeFlights,
                  icon: MapPin,
                  color: "cyan",
                },
                {
                  label: "Rata - Rata Ketinggian Pesawat",
                  value: "38,450",
                  unit: "ft",
                  icon: TrendingUp,
                  color: "purple",
                },
              ]
            : [
                {
                  label: "Pesawat Hari Ini",
                  value: "38,450",
                  icon: MapPin,
                  color: "purple",
                },
                {
                  label: "Rata - Rata Ketinggian Pesawat Radar Hari Ini",
                  value: "38,450",
                  unit: "ft",
                  icon: TrendingUp,
                  color: "purple",
                },
              ]
          ).map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className={`relative overflow-hidden rounded-lg sm:rounded-xl backdrop-blur-xl p-3 sm:p-4 border transition-all duration-300 group cursor-pointer ${
                darkMode
                  ? "bg-linear-to-br from-gray-900/60 to-gray-900/40 border-gray-700/50 hover:border-gray-600/80"
                  : "bg-linear-to-br from-white/60 to-gray-50/60 border-gray-200/50 hover:border-gray-300/80"
              } hover:shadow-lg`}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${
                  stat.color === "cyan"
                    ? "bg-linear-to-br from-cyan-500 to-blue-600"
                    : stat.color === "purple"
                    ? "bg-linear-to-br from-purple-500 to-pink-600"
                    : "bg-linear-to-br from-pink-500 to-rose-600"
                }`}
              />

              <div className="relative z-10 flex items-center justify-between">
                <div className="space-y-1 flex-1 min-w-0">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider truncate ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </p>
                  <p
                    className={`text-lg sm:text-xl font-black truncate ${
                      stat.color === "cyan"
                        ? darkMode
                          ? "text-cyan-400"
                          : "text-cyan-600"
                        : stat.color === "purple"
                        ? darkMode
                          ? "text-purple-400"
                          : "text-purple-600"
                        : darkMode
                        ? "text-pink-400"
                        : "text-pink-600"
                    }`}
                  >
                    {stat.value}
                    {stat.unit && (
                      <span className="text-sm ml-1">{stat.unit}</span>
                    )}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  className={`p-2 rounded-lg backdrop-blur-md shrink-0 ml-2 ${
                    stat.color === "cyan"
                      ? darkMode
                        ? "bg-cyan-500/20 text-cyan-400"
                        : "bg-cyan-400/20 text-cyan-600"
                      : stat.color === "purple"
                      ? darkMode
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-purple-400/20 text-purple-600"
                      : darkMode
                      ? "bg-pink-500/20 text-pink-400"
                      : "bg-pink-400/20 text-pink-600"
                  }`}
                >
                  <stat.icon size={16} className="sm:size-[18px]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={`flex-1 relative overflow-hidden rounded-xl sm:rounded-2xl border backdrop-blur-2xl transition-all duration-300 min-h-[400px] sm:min-h-[500px] ${
            darkMode
              ? "bg-linear-to-br from-[#0F1438]/80 via-[#1a1f4d]/60 to-[#0a0e27]/80 border-cyan-500/20 shadow-2xl shadow-cyan-900/30"
              : "bg-linear-to-br from-white/80 via-blue-50/60 to-cyan-50/80 border-cyan-300/40 shadow-2xl shadow-cyan-200/30"
          }`}
        >
          <motion.div
            className={`absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-2xl sm:blur-3xl opacity-20 pointer-events-none ${
              darkMode
                ? "bg-linear-to-br from-cyan-500 to-purple-600"
                : "bg-linear-to-br from-cyan-400 to-blue-500"
            }`}
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={`absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full blur-2xl sm:blur-3xl opacity-20 pointer-events-none ${
              darkMode
                ? "bg-linear-to-tr from-purple-600 to-cyan-500"
                : "bg-linear-to-tr from-purple-300 to-pink-300"
            }`}
            animate={{
              x: [0, -20, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          <div className="relative z-10 w-full h-full">
            <Map darkMode={darkMode} />
          </div>

          <div
            className={`absolute top-0 left-0 right-0 h-px pointer-events-none ${
              darkMode
                ? "bg-linear-to-r from-transparent via-cyan-500/40 to-transparent"
                : "bg-linear-to-r from-transparent via-cyan-400/30 to-transparent"
            }`}
          />

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 backdrop-blur-md border z-20 ${
              mode === "monitoring"
                ? darkMode
                  ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                  : "bg-cyan-400/20 border-cyan-400/50 text-cyan-600"
                : darkMode
                ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                : "bg-purple-400/20 border-purple-400/50 text-purple-600"
            }`}
          >
            <Radio size={12} className="sm:size-3.5 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              {mode === "monitoring" ? "Live" : "Analysis"}
            </span>
          </motion.div>

          <div className="md:hidden absolute bottom-2 left-2 right-2 z-20">
            <div
              className={`px-3 py-2 rounded-lg backdrop-blur-md border text-center ${
                darkMode
                  ? "bg-gray-900/80 border-gray-700/50 text-gray-300"
                  : "bg-white/80 border-gray-200/50 text-gray-700"
              }`}
            >
              <p className="text-xs font-medium">
                {mode === "monitoring"
                  ? "Live flight monitoring active"
                  : "Analysis mode enabled"}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
