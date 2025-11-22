/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MainPanelProps {
  darkMode?: boolean;
  mode?: "monitoring" | "analysis";
}

export interface StatsGridProps {
  darkMode: boolean;
  mode: "monitoring" | "analysis";
  isLoaded: boolean;
  activeFlights: number;
}

export interface MapContainerProps {
  darkMode: boolean;
  mode: "monitoring" | "analysis";
  isLoaded: boolean;
}

export interface StatData {
  label: string;
  value: string;
  unit?: string;
  icon: React.ComponentType<any>;
  color: "cyan" | "purple" | "pink";
}
