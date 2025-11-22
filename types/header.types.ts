export type HeaderMode = "monitoring" | "analysis";

export interface HeaderProps {
  darkMode?: boolean;
  setDarkMode?: () => void;
  mode?: HeaderMode;
  handleModeChange?: (mode: HeaderMode) => void;
}

export interface ModeButton {
  key: HeaderMode;
  label: string;
}
