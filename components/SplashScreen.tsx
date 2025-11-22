"use client";

import {
  SPLASH_VARIANTS,
  ANIMATION_CONFIG,
  LIGHT_THEME,
  DARK_THEME,
} from "@/constants/splash.constants";
import { motion } from "framer-motion";
import { SplashScreenProps } from "@/types/splash.types";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import BackgroundOrbs from "@/components/splash-screen/BackgroundOrbs";
import RadarAnimation from "@/components/splash-screen/RadarAnimation";
import ModeTransition from "@/components/splash-screen/ModeTransition";
import ProgressIndicator from "@/components/splash-screen/ProgressIndicator";
import FloatingParticles from "@/components/splash-screen/FloatingParticles";

export default function SplashScreen({
  mode = "monitoring",
  darkMode = false,
}: SplashScreenProps) {
  const { particles } = useSplashScreen();

  const isMonitoring = mode === "monitoring";
  const targetMode = isMonitoring ? "Analysis" : "Monitoring";
  const sourceMode = isMonitoring ? "Monitoring" : "Analysis";

  const theme = darkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-9999 flex justify-center items-center overflow-hidden"
    >
      <motion.div
        className={`absolute inset-0 ${theme.background}`}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={ANIMATION_CONFIG.background}
      />

      <BackgroundOrbs darkMode={darkMode} />

      <motion.div
        variants={SPLASH_VARIANTS.container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center space-y-6 sm:space-y-8"
      >
        <RadarAnimation darkMode={darkMode} />

        <ModeTransition
          sourceMode={sourceMode}
          targetMode={targetMode}
          darkMode={darkMode}
        />

        <TitleSection targetMode={targetMode} darkMode={darkMode} />

        <ProgressIndicator darkMode={darkMode} />

        <LoadingDots darkMode={darkMode} />
      </motion.div>

      <FloatingParticles particles={particles} darkMode={darkMode} />
    </motion.div>
  );
}

function TitleSection({
  targetMode,
  darkMode = false,
}: {
  targetMode: string;
  darkMode?: boolean;
}) {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <motion.div variants={SPLASH_VARIANTS.item} className="space-y-3">
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight px-4 ${theme.text.primary}`}
      >
        Beralih Ke Mode{" "}
        <motion.span
          animate={{
            backgroundPosition: ["0%", "100%", "0%"],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          style={{ backgroundSize: "200% 200%" }}
        >
          {targetMode}
        </motion.span>
      </h1>
      <p className={`text-sm sm:text-base px-4 ${theme.text.secondary}`}>
        Konfigurasi dan laporan {targetMode} akan segera tersedia
      </p>
    </motion.div>
  );
}

function LoadingDots({ darkMode = false }: { darkMode?: boolean }) {
  const theme = darkMode ? DARK_THEME : LIGHT_THEME;

  return (
    <motion.div
      variants={SPLASH_VARIANTS.item}
      className="flex gap-2 justify-center"
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${theme.dots}`}
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: ANIMATION_CONFIG.dots.duration,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </motion.div>
  );
}
