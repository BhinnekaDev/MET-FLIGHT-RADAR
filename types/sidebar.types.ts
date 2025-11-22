import { LucideIcon } from "lucide-react";

export interface SidebarProps {
  darkMode?: boolean;
  onPlaneClick?: () => void;
  mode?: "monitoring" | "analysis";
}

export interface MenuItem {
  label: string;
  badge?: string;
  icon: LucideIcon;
  description: string;
}

export interface QuickAction {
  id: string;
  label: string;
  icon: LucideIcon;
  color: "cyan" | "blue" | "purple";
}

export interface LegendItem {
  label: string;
  icon: LucideIcon;
  description: string;
  status: "active" | "inactive";
  color: "green" | "blue" | "yellow" | "purple";
}

export interface SidebarHeaderProps {
  darkMode: boolean;
  onClose: () => void;
  mode: "monitoring" | "analysis";
}

export interface QuickActionsGridProps {
  darkMode: boolean;
  quickActions: QuickAction[];
  selectedAction: string | null;
  onActionClick: (actionId: string) => void;
}

export interface MenuItemsListProps {
  darkMode: boolean;
  menuItems: MenuItem[];
  onItemClick: () => void;
  mode: "monitoring" | "analysis";
}

export interface LegendSectionProps {
  darkMode: boolean;
  legendItems: LegendItem[];
}
