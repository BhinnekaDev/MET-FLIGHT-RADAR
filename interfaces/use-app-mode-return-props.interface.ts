export type AppMode = "monitoring" | "analysis";

export interface UseAppModeReturn {
  mode: AppMode;
  showSplash: boolean;
  handleModeChange: (newMode: AppMode) => void;
}
