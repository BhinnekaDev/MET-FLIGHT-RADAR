import {
  Plane,
  Radar,
  Cloud,
  Wind,
  EyeIcon,
  WindIcon,
  Activity,
  Satellite,
  CloudRain,
  PlaneTakeoff,
} from "lucide-react";
import { MenuItem, QuickAction, LegendItem } from "@/types/sidebar.types";

export const SIDEBAR_ANIMATION = {
  itemVariants: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

export const QUICK_ACTIONS: QuickAction[] = [
  { icon: Plane, label: "Pesawat", color: "cyan", id: "pesawat" },
  { icon: Satellite, label: "CMAX", color: "blue", id: "cmax" },
  { icon: Satellite, label: "SSA", color: "blue", id: "ssa" },
  { icon: Satellite, label: "TITAN", color: "blue", id: "titan" },
  { icon: CloudRain, label: "Hujan", color: "purple", id: "hujan" },
  { icon: WindIcon, label: "Angin", color: "purple", id: "angin" },
  { icon: Radar, label: "Suhu", color: "purple", id: "suhu" },
  { icon: EyeIcon, label: "Visibilitas", color: "purple", id: "visibilitas" },
  { icon: PlaneTakeoff, label: "Bandara", color: "cyan", id: "bandara" },
];

export const MONITORING_MENU_ITEMS: MenuItem[] = [
  {
    label: "Pesawat Aktif",
    icon: Activity,
    description: "Informasi pesawat aktif",
    badge: "247",
  },
  {
    label: "Cuaca Di Bengkulu",
    icon: Cloud,
    description: "Kondisi cuaca aktif",
    badge: "Live",
  },
];

export const ANALYSIS_MENU_ITEMS: MenuItem[] = [
  {
    label: "Prediksi Cuaca Bengkulu",
    icon: CloudRain,
    description: "Hujan",
  },
  {
    label: "Prediksi Cuaca Bandara",
    icon: CloudRain,
    description: "Hujan",
  },
];

export const LEGEND_ITEMS: LegendItem[] = [
  {
    icon: Wind,
    label: "Weather Data",
    description: "Real-time updates",
    color: "purple",
    status: "active",
  },
];

export const SIDEBAR_STYLES = {
  dark: {
    background:
      "bg-linear-to-br from-[#0A0E27]/95 via-[#0F1438]/95 to-[#1a1f4d]/95",
    border: "border-r border-cyan-500/20",
    overlay: "bg-black/60",
    text: {
      primary: "text-white",
      secondary: "text-cyan-400/70",
      tertiary: "text-gray-400",
      accent: "text-cyan-300",
    },
    button: {
      background: "bg-linear-to-br from-cyan-500/20 to-purple-600/20",
      border: "border border-cyan-500/30",
      text: "text-cyan-400",
      hover: "hover:shadow-cyan-500/25",
    },
    menuItem: {
      background: "bg-linear-to-br from-cyan-500/10 to-purple-600/10",
      border: "border border-cyan-500/20",
      hover:
        "hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20",
    },
    quickAction: {
      selected: "bg-cyan-500/30 border-cyan-400/60",
      default:
        "bg-gray-800/50 border border-gray-700/50 hover:border-cyan-500/30",
    },
    icon: {
      monitoring: "bg-cyan-500/20 text-cyan-400",
      analysis: "bg-purple-500/20 text-purple-400",
    },
  },
  light: {
    background: "bg-linear-to-br from-white/95 via-blue-50/95 to-cyan-50/97",
    border: "border-r border-cyan-300/30",
    overlay: "bg-black/60",
    text: {
      primary: "text-gray-900",
      secondary: "text-cyan-600/70",
      tertiary: "text-gray-600",
      accent: "text-cyan-600",
    },
    button: {
      background: "bg-linear-to-br from-cyan-400/20 to-blue-500/20",
      border: "border border-cyan-400/30",
      text: "text-cyan-600",
      hover: "hover:shadow-cyan-400/25",
    },
    menuItem: {
      background: "bg-linear-to-br from-cyan-400/10 to-blue-500/10",
      border: "border border-cyan-400/20",
      hover:
        "hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-400/20",
    },
    quickAction: {
      selected: "bg-cyan-400/30 border-cyan-400/60",
      default: "bg-white/80 border border-gray-200/50 hover:border-cyan-400/30",
    },
    icon: {
      monitoring: "bg-cyan-400/20 text-cyan-600",
      analysis: "bg-purple-400/20 text-purple-600",
    },
  },
} as const;
