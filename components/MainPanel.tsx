"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import StatsGrid from "@/components/main-panel/StatsGrid";
import { MainPanelProps } from "@/types/main-panel.types";
import { Plane } from "@/interfaces/plane-props.interface";
import MapContainer from "@/components/main-panel/MapContainer";

function MainPanel({
  loading,
  planes = [],
  darkMode = false,
  mode = "monitoring",
}: MainPanelProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const activeFlights: Plane[] = planes.filter((p) => !p.on_ground);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  const bgColor = darkMode ? "bg-[#050810]" : "bg-gray-50";

  return (
    <main
      className={`flex-1 overflow-hidden transition-colors duration-300 ${bgColor}`}
    >
      <motion.div
        key={mode}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full w-full p-3 sm:p-4 lg:p-6 flex flex-col gap-3 sm:gap-4"
      >
        <StatsGrid
          mode={mode}
          darkMode={darkMode}
          isLoaded={isLoaded}
          activeFlights={activeFlights}
        />

        <MapContainer
          mode={mode}
          planes={planes}
          loading={loading}
          darkMode={darkMode}
          isLoaded={isLoaded}
        />
      </motion.div>
    </main>
  );
}

export default memo(MainPanel);
