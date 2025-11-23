/* eslint-disable @typescript-eslint/no-explicit-any */
export interface MainPanelProps {
  mode?: "monitoring" | "analysis";
  planes: any[];
  loading?: boolean;
  darkMode?: boolean;
}

export interface StatsGridProps {
  darkMode: boolean;
  mode: "monitoring" | "analysis";
  isLoaded: boolean;
  activeFlights: any[];
}

export interface MapContainerProps {
  planes: any[];
  loading?: boolean;
  darkMode: boolean;
  isLoaded: boolean;
  mode: "monitoring" | "analysis";
}

export interface StatData {
  label: string;
  value: string;
  unit?: string;
  icon: React.ComponentType<any>;
  color: "cyan" | "purple" | "pink";
}
