import { Radar } from "lucide-react";
import { HEADER_STYLES } from "@/constants/header.constants";
import { LogoProps } from "@/interfaces/logo-props.interface";

export function Logo({ darkMode }: LogoProps) {
  const styles = darkMode ? HEADER_STYLES.dark : HEADER_STYLES.light;

  return (
    <div className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
      <div
        className={`p-1.5 sm:p-2 lg:p-2.5 rounded-xl backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-lg group-hover:shadow-cyan-500/20 ${styles.logo.container}`}
      >
        <Radar
          size={18}
          className={`sm:size-5 lg:size-6 drop-shadow-lg ${styles.logo.icon}`}
        />
      </div>
      <div>
        <h1
          className={`text-lg sm:text-xl lg:text-2xl font-black tracking-tight ${styles.logo.title}`}
        >
          Met Flight
        </h1>
        <p
          className={`text-xs font-medium tracking-widest ${styles.logo.subtitle}`}
        >
          RADAR
        </p>
      </div>
    </div>
  );
}
