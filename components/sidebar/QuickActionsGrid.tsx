"use client";

import { memo, useMemo } from "react";
import {
  SIDEBAR_STYLES,
  SIDEBAR_ANIMATION,
} from "@/constants/sidebar.constants";
import { motion } from "framer-motion";
import { QuickActionsGridProps } from "@/types/sidebar.types";

function QuickActionsGrid({
  darkMode,
  quickActions,
  onActionClick,
  selectedAction,
}: QuickActionsGridProps) {
  const styles = useMemo(
    () => (darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light),
    [darkMode]
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="p-3 sm:p-4 border-b"
    >
      <h3
        className={`text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3 ${styles.text.tertiary}`}
      >
        Tindakan Cepat
      </h3>
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {quickActions.map((action, idx) => (
          <QuickActionButton
            key={action.id}
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
  index,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any;
  darkMode: boolean;
  isSelected: boolean;
  onActionClick: (id: string) => void;
  index: number;
}) {
  const styles = darkMode ? SIDEBAR_STYLES.dark : SIDEBAR_STYLES.light;

  const buttonClass = `p-2 sm:p-3 rounded-xl backdrop-blur-md transition-all duration-200 flex flex-col items-center gap-1 ${
    isSelected ? styles.quickAction.selected : styles.quickAction.default
  }`;

  return (
    <motion.button
      variants={SIDEBAR_ANIMATION.itemVariants}
      custom={index}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onActionClick(action.id)}
      className={`${buttonClass} cursor-pointer`}
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
  const iconStyle = useMemo(() => {
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
  }, [action.color, darkMode]);

  return (
    <div className={`p-1.5 sm:p-2 rounded-lg ${iconStyle}`}>
      <action.icon size={14} className="sm:size-4" />
    </div>
  );
}

export default memo(QuickActionsGrid);
