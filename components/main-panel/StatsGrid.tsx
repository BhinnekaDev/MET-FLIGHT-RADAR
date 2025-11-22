"use client";

import { motion } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";
import StatCard from "@/components/main-panel/StatCard";
import { StatsGridProps } from "@/types/main-panel.types";

export default function StatsGrid({
  mode,
  darkMode,
  isLoaded,
  activeFlights,
}: StatsGridProps) {
  const monitoringStats = [
    {
      label: "Pesawat Aktif",
      value: activeFlights.toString(),
      icon: MapPin,
      color: "cyan" as const,
    },
    {
      label: "Rata - Rata Ketinggian Pesawat",
      value: "38,450",
      unit: "ft",
      icon: TrendingUp,
      color: "purple" as const,
    },
  ];

  const analysisStats = [
    {
      label: "Pesawat Hari Ini",
      value: "38,450",
      icon: MapPin,
      color: "purple" as const,
    },
    {
      label: "Rata - Rata Ketinggian Pesawat Radar Hari Ini",
      value: "38,450",
      unit: "ft",
      icon: TrendingUp,
      color: "purple" as const,
    },
  ];

  const stats = mode === "monitoring" ? monitoringStats : analysisStats;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 }}
      className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3"
    >
      {stats.map((stat, idx) => (
        <StatCard
          key={idx}
          stat={stat}
          index={idx}
          darkMode={darkMode}
          isLoaded={isLoaded}
        />
      ))}
    </motion.div>
  );
}
