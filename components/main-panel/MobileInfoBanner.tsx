"use client";
import { MobileInfoBannerProps } from "@/interfaces/mobile-info-banner-props.interface";

export default function MobileInfoBanner({
  mode,
  darkMode,
}: MobileInfoBannerProps) {
  return (
    <div className="md:hidden absolute bottom-2 left-2 right-2 z-20">
      <div
        className={`px-3 py-2 rounded-lg backdrop-blur-md border text-center ${
          darkMode
            ? "bg-gray-900/80 border-gray-700/50 text-gray-300"
            : "bg-white/80 border-gray-200/50 text-gray-700"
        }`}
      >
        <p className="text-xs font-medium">
          {mode === "monitoring"
            ? "Live flight monitoring active"
            : "Analysis mode enabled"}
        </p>
      </div>
    </div>
  );
}
