import { HeaderMode } from "@/types/header.types";

export interface MobileMenuProps {
  isOpen: boolean;
  mode: HeaderMode;
  darkMode: boolean;
  onToggle: () => void;
  onModeChange: (mode: HeaderMode) => void;
}
