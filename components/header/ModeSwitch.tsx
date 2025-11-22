import { MODE_BUTTONS } from "@/constants/header.constants";
import { HEADER_STYLES } from "@/constants/header.constants";
import { ModeSwitchProps } from "@/interfaces/mode-switch-props";

export function ModeSwitch({
  darkMode,
  mode,
  onModeChange,
  isMobile = false,
}: ModeSwitchProps) {
  const styles = darkMode ? HEADER_STYLES.dark : HEADER_STYLES.light;

  return (
    <div
      className={`inline-flex backdrop-blur-md rounded-xl p-1 transition-all duration-300 ${
        isMobile ? "w-full justify-center rounded-lg p-1.5" : ""
      } ${styles.modeSwitch.container}`}
    >
      {MODE_BUTTONS.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onModeChange(key)}
          className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-300 capitalize cursor-pointer ${
            isMobile ? "flex-1 rounded-md text-sm" : ""
          } ${
            mode === key ? styles.modeSwitch.active : styles.modeSwitch.inactive
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
