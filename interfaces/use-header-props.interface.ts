import { HeaderMode } from "@/types/header.types";

export interface UseHeaderProps {
  initialMode?: HeaderMode;
  initialDarkMode?: boolean;
  externalSetDarkMode?: () => void;
  externalHandleModeChange?: (mode: HeaderMode) => void;
}
