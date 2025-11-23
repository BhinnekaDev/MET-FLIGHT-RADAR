"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, TrendingUp } from "lucide-react";
import StatCard from "@/components/main-panel/StatCard";
import { StatsGridProps } from "@/types/main-panel.types";

function StatsGrid({
  mode,
  darkMode,
  isLoaded,
  activeFlights,
}: StatsGridProps) {
  const stats = useMemo(() => {
    const averageAltitude =
      activeFlights.length > 0
        ? (
            activeFlights.reduce((sum, p) => sum + (p.baro_altitude || 0), 0) /
            activeFlights.length /
            1000
          ).toFixed(2)
        : "0";

    const monitoringStats = [
      {
        label: "Pesawat Aktif",
        value: activeFlights.length.toString(),
        icon: MapPin,
        color: "cyan" as const,
      },
      {
        label: "Rata - Rata Ketinggian Pesawat",
        value: averageAltitude,
        unit: "Km",
        icon: TrendingUp,
        color: "cyan" as const,
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
        unit: "Km",
        icon: TrendingUp,
        color: "purple" as const,
      },
    ];

    return mode === "monitoring" ? monitoringStats : analysisStats;
  }, [mode, activeFlights]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 }}
      className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3"
    >
      {stats.map((stat, idx) => (
        <StatCard
          stat={stat}
          index={idx}
          darkMode={darkMode}
          isLoaded={isLoaded}
          key={`${stat.label}-${idx}`}
        />
      ))}
    </motion.div>
  );
}

export default memo(StatsGrid);
