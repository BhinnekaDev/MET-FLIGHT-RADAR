"use client";

import {
  SIDEBAR_STYLES,
  SIDEBAR_ANIMATION,
} from "@/constants/sidebar.constants";
import { motion } from "framer-motion";
import { QuickActionsGridProps } from "@/types/sidebar.types";
import { QuickActionButtonProps } from "@/interfaces/1uick-action-button-props.interface";

export default function QuickActionsGrid({
  darkMode,
  quickActions,
  onActionClick,
  selectedAction,
}: QuickActionsGridProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  return (
    <motion.div initial="hidden" animate="visible" className="p-4 border-b">
      <h3
        className={`text-sm font-semibold uppercase tracking-wider mb-3 ${styles.text.tertiary}`}
      >
        Tindakan Cepat
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {quickActions.map((action, idx) => (
          <QuickActionButton
            key={idx}
            action={action}
            isSelected={selectedAction === action.id}
            darkMode={darkMode}
            onActionClick={onActionClick}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
}

function QuickActionButton({
  action,
  darkMode,
  isSelected,
  onActionClick,
}: QuickActionButtonProps) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  return (
    <motion.button
      variants={SIDEBAR_ANIMATION.itemVariants}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onActionClick(action.id)}
      className={`p-3 rounded-xl backdrop-blur-md transition-all duration-200 flex flex-col items-center gap-1 ${
        isSelected ? styles.quickAction.selected : styles.quickAction.default
      }`}
    >
      <ActionIcon action={action} darkMode={darkMode} />
      <span
        className={`text-xs font-medium text-center ${styles.text.tertiary}`}
      >
        {action.label}
      </span>
    </motion.button>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ActionIcon({ action, darkMode }: { action: any; darkMode: boolean }) {
  const getIconStyle = () => {
    if (action.color === "cyan") {
      return darkMode
        ? "bg-cyan-500/20 text-cyan-400"
        : "bg-cyan-400/20 text-cyan-600";
    } else if (action.color === "blue") {
      return darkMode
        ? "bg-blue-500/20 text-blue-400"
        : "bg-blue-400/20 text-blue-600";
    } else {
      return darkMode
        ? "bg-purple-500/20 text-purple-400"
        : "bg-purple-400/20 text-purple-600";
    }
  };

  return (
    <div className={`p-2 rounded-lg ${getIconStyle()}`}>
      <action.icon size={16} />
    </div>
  );
}
