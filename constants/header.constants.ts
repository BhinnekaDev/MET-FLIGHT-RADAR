import { ModeButton } from "@/types/header.types";

export const MODE_BUTTONS: ModeButton[] = [
  { key: "monitoring", label: "Monitor" },
  { key: "analysis", label: "Analisis" },
];

export const HEADER_STYLES = {
  dark: {
    background: "bg-linear-to-br from-[#0A0E27] via-[#0F1438] to-[#0a0e27]",
    overlay:
      "bg-linear-to-tr from-purple-900/20 via-transparent to-cyan-900/20",
    glow: "bg-linear-to-br from-cyan-500 to-purple-600",
    logo: {
      container:
        "bg-linear-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30",
      icon: "text-cyan-400",
      title: "text-white",
      subtitle: "text-cyan-400/70",
    },
    modeSwitch: {
      container:
        "bg-linear-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50",
      active:
        "bg-linear-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/30",
      inactive: "text-gray-400 hover:text-gray-200",
    },
    themeButton: {
      container:
        "bg-linear-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30",
      icon: "text-yellow-400",
    },
    divider: "bg-linear-to-r from-transparent via-cyan-500/40 to-transparent",
  },
  light: {
    background: "bg-linear-to-br from-white via-blue-50 to-white",
    overlay:
      "bg-linear-to-tr from-blue-200/20 via-transparent to-purple-100/20",
    glow: "bg-linear-to-br from-cyan-400 to-blue-500",
    logo: {
      container:
        "bg-linear-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30",
      icon: "text-cyan-500",
      title: "text-gray-900",
      subtitle: "text-cyan-600/70",
    },
    modeSwitch: {
      container:
        "bg-linear-to-br from-white/60 to-gray-100/60 border border-gray-200/60",
      active:
        "bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-400/30",
      inactive: "text-gray-600 hover:text-gray-900",
    },
    themeButton: {
      container:
        "bg-linear-to-br from-indigo-400/20 to-purple-500/20 border border-indigo-400/30",
      icon: "text-indigo-500",
    },
    divider: "bg-linear-to-r from-transparent via-cyan-400/30 to-transparent",
  },
} as const;
