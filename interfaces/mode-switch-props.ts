import { HeaderMode } from "@/types/header.types";

export interface ModeSwitchProps {
  mode: HeaderMode;
  darkMode: boolean;
  isMobile?: boolean;
  onModeChange: (mode: HeaderMode) => void;
}
