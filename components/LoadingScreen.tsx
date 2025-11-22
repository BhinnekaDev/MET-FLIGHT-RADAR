import { memo } from "react";
import { LoadingScreenProps } from "@/interfaces/loading-screen-props-props.interface";

const LoadingScreenComponent = ({ darkMode }: LoadingScreenProps) => {
  const themeClasses = darkMode
    ? "bg-[#1B1C2A] text-gray-100"
    : "bg-[#F5F7FA] text-gray-900";

  return (
    <div
      className={`h-screen flex items-center justify-center ${themeClasses} transition-colors duration-300`}
      role="status"
      aria-label="Memuat aplikasi"
    >
      <div className="text-center">
        <div
          className={`animate-spin rounded-full h-12 w-12 border-b-2 mx-auto ${
            darkMode ? "border-cyan-500" : "border-cyan-600"
          }`}
          aria-hidden="true"
        />
        <p
          className={`mt-4 animate-pulse ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Memuat...
        </p>
      </div>
    </div>
  );
};

export const LoadingScreen = memo(LoadingScreenComponent);
export default LoadingScreen;
