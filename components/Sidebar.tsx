"use client";

import { motion } from "framer-motion";
import {
  X,
  Menu,
  Wind,
  Plane,
  Radar,
  Cloud,
  Activity,
  Satellite,
  CloudRain,
  ChevronRight,
  PlaneTakeoff,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  mode?: "monitoring" | "analysis";
  darkMode?: boolean;
  onPlaneClick?: () => void;
}

interface MenuItem {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>;
  description: string;
  badge?: string;
}

export default function Sidebar({
  mode = "monitoring",
  darkMode = false,
  onPlaneClick,
}: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const menuItems: MenuItem[] =
    mode === "monitoring"
      ? [
          {
            label: "Pesawat Aktif",
            icon: Activity,
            description: "Informasi pesawat aktif",
            badge: "247",
          },
          {
            label: "Cuaca Di Bengkulu",
            icon: Cloud,
            description: "Kondisi cuaca aktif",
            badge: "Live",
          },
        ]
      : [
          {
            label: "Prediksi Cuaca Bengkulu",
            icon: CloudRain,
            description: "Hujan",
          },
          {
            label: "Prediksi Cuaca Bandara",
            icon: CloudRain,
            description: "Hujan",
          },
        ];

  const legendItems = [
    {
      icon: Wind,
      label: "Weather Data",
      description: "Real-time updates",
      color: "purple",
      status: "active",
    },
  ];

  const quickActions = [
    { icon: Plane, label: "Pesawat", color: "cyan", id: "pesawat" },
    { icon: Satellite, label: "CMAX", color: "blue", id: "cmax" },
    { icon: Satellite, label: "SSA", color: "blue", id: "ssa" },
    { icon: Satellite, label: "TITAN", color: "blue", id: "titan" },
    { icon: Radar, label: "Hujan", color: "purple", id: "hujan" },
    { icon: Radar, label: "Angin", color: "purple", id: "angin" },
    { icon: Radar, label: "Suhu", color: "purple", id: "suhu" },
    {
      icon: Radar,
      label: "Jarak Pandang",
      color: "purple",
      id: "jarak-pandang",
    },
    { icon: PlaneTakeoff, label: "Bandara", color: "cyan", id: "bandara" },
  ];

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleActionClick = (actionId: string) => {
    setSelectedAction(actionId);
    if (actionId === "pesawat" && onPlaneClick) {
      onPlaneClick();
    }
  };

  return (
    <>
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`p-4 rounded-2xl backdrop-blur-md transition-all duration-300 shadow-xl ${
            darkMode
              ? "bg-linear-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 text-cyan-400 hover:shadow-cyan-500/25"
              : "bg-linear-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-600 hover:shadow-cyan-400/25"
          }`}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {isMobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="lg:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
          onClick={toggleMobileMenu}
        />
      )}

      <motion.aside
        key={mode}
        initial="hidden"
        animate="visible"
        className={`fixed lg:relative h-full z-40 transition-transform duration-300 ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } w-80 max-w-[85vw] sm:max-w-[90vw] ${
          darkMode
            ? "bg-linear-to-br from-[#0A0E27]/95 via-[#0F1438]/95 to-[#1a1f4d]/95 border-r border-cyan-500/20"
            : "bg-linear-to-br from-white/95 via-blue-50/95 to-cyan-50/97 border-r border-cyan-300/30"
        } backdrop-blur-xl shadow-2xl`}
      >
        <motion.div
          className={`absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none ${
            darkMode
              ? "bg-linear-to-br from-cyan-500 to-purple-600"
              : "bg-linear-to-br from-cyan-400 to-blue-500"
          }`}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 h-full flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 flex items-center justify-between border-b"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2
                className={`text-xl font-black tracking-tight ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {mode === "monitoring"
                  ? "Met Flight Monitoring"
                  : "Met Flight Analytics"}
              </h2>
              <p
                className={`text-sm font-medium mt-1 ${
                  darkMode ? "text-cyan-400/70" : "text-cyan-600/70"
                }`}
              >
                {mode === "monitoring" ? "Mode Monitoring" : "Mode Analisis"}
              </p>
            </motion.div>

            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
            >
              <X
                size={20}
                className={darkMode ? "text-gray-400" : "text-gray-600"}
              />
            </button>
          </motion.div>

          <div
            className={`h-px ${
              darkMode
                ? "bg-linear-to-r from-transparent via-cyan-500/30 to-transparent"
                : "bg-linear-to-r from-transparent via-cyan-400/20 to-transparent"
            }`}
          />

          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <motion.div
                initial="hidden"
                animate="visible"
                className="p-4 border-b"
              >
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Tindakan Cepat
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {quickActions.map((action, idx) => (
                    <motion.button
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleActionClick(action.id)}
                      className={`p-3 rounded-xl backdrop-blur-md transition-all duration-200 flex flex-col items-center gap-1 ${
                        darkMode
                          ? selectedAction === action.id
                            ? "bg-cyan-500/30 border-cyan-400/60"
                            : "bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30"
                          : selectedAction === action.id
                          ? "bg-cyan-400/30 border-cyan-400/60"
                          : "bg-white/80 border border-gray-200/50 hover:border-cyan-400/30"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          action.color === "cyan"
                            ? darkMode
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "bg-cyan-400/20 text-cyan-600"
                            : action.color === "blue"
                            ? darkMode
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-blue-400/20 text-blue-600"
                            : darkMode
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-purple-400/20 text-purple-600"
                        }`}
                      >
                        <action.icon size={16} />
                      </div>
                      <span
                        className={`text-xs font-medium text-center ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {action.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                className="p-4 space-y-3"
              >
                <h3
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {mode === "monitoring"
                    ? "Status Monitoring"
                    : "Status Analisis"}
                </h3>
                {menuItems.map((item, idx) => (
                  <motion.button
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileOpen(false)}
                    className={`group relative overflow-hidden rounded-xl p-4 transition-all duration-300 w-full text-left ${
                      darkMode
                        ? "bg-linear-to-br from-cyan-500/10 to-purple-600/10 border border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20"
                        : "bg-linear-to-br from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-400/20"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${
                        mode === "monitoring"
                          ? "bg-linear-to-r from-cyan-500 to-blue-600"
                          : "bg-linear-to-r from-purple-500 to-pink-600"
                      }`}
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p
                            className={`text-sm font-bold truncate ${
                              mode === "monitoring"
                                ? darkMode
                                  ? "text-cyan-300"
                                  : "text-cyan-600"
                                : darkMode
                                ? "text-purple-300"
                                : "text-purple-600"
                            }`}
                          >
                            {item.label}
                          </p>
                          {item.badge && (
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-bold ${
                                darkMode
                                  ? "bg-cyan-500/20 text-cyan-400"
                                  : "bg-cyan-400/20 text-cyan-600"
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-xs truncate ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>

                      <motion.div
                        className={`p-2 rounded-lg ${
                          mode === "monitoring"
                            ? darkMode
                              ? "bg-cyan-500/20 text-cyan-400"
                              : "bg-cyan-400/20 text-cyan-600"
                            : darkMode
                            ? "bg-purple-500/20 text-purple-400"
                            : "bg-purple-400/20 text-purple-600"
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon size={18} />
                      </motion.div>
                    </div>

                    <motion.div
                      className={`absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 ${
                        mode === "monitoring"
                          ? "text-cyan-400"
                          : "text-purple-400"
                      }`}
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  </motion.button>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="p-4 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      darkMode ? "bg-cyan-400" : "bg-cyan-500"
                    }`}
                  />
                  <h3
                    className={`text-sm font-bold ${
                      darkMode ? "text-cyan-300" : "text-cyan-600"
                    }`}
                  >
                    Legenda
                  </h3>
                </div>

                <div className="grid gap-2">
                  {legendItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg group hover:bg-black/5 transition-all duration-200"
                    >
                      <div className="relative">
                        <div
                          className={`p-2 rounded-lg ${
                            item.color === "green"
                              ? darkMode
                                ? "bg-green-500/20 text-green-400"
                                : "bg-green-400/20 text-green-600"
                              : item.color === "blue"
                              ? darkMode
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-blue-400/20 text-blue-600"
                              : item.color === "yellow"
                              ? darkMode
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-yellow-400/20 text-yellow-600"
                              : darkMode
                              ? "bg-purple-500/20 text-purple-400"
                              : "bg-purple-400/20 text-purple-600"
                          }`}
                        >
                          <item.icon size={16} />
                        </div>
                        <div
                          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 ${
                            darkMode ? "border-[#0A0E27]" : "border-white"
                          } ${
                            item.color === "green"
                              ? "bg-green-500 animate-pulse"
                              : item.color === "blue"
                              ? "bg-blue-500"
                              : item.color === "yellow"
                              ? "bg-yellow-500"
                              : "bg-purple-500"
                          }`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-semibold truncate ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`text-xs truncate ${
                            darkMode ? "text-gray-500" : "text-gray-500"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:hidden p-4 border-t">
            <div
              className={`text-center text-xs ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Tap anywhere outside to close
            </div>
          </div>
        </div>

        <div
          className={`absolute right-0 top-0 bottom-0 w-px ${
            darkMode
              ? "bg-linear-to-b from-cyan-500/40 via-cyan-500/20 to-transparent"
              : "bg-linear-to-b from-cyan-400/30 via-cyan-400/15 to-transparent"
          }`}
        />
      </motion.aside>
    </>
  );
}
