"use client";

import {
  DARK_THEME,
  LIGHT_THEME,
  SPLASH_VARIANTS,
  ANIMATION_CONFIG,
} from "@/constants/splash.constants";
import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { SplashScreenProps } from "@/types/splash.types";
import { useSplashScreen } from "@/hooks/useSplashScreen";
import BackgroundOrbs from "@/components/splash-screen/BackgroundOrbs";
import RadarAnimation from "@/components/splash-screen/RadarAnimation";
import ModeTransition from "@/components/splash-screen/ModeTransition";
import ProgressIndicator from "@/components/splash-screen/ProgressIndicator";
import FloatingParticles from "@/components/splash-screen/FloatingParticles";

function SplashScreen({
  mode = "monitoring",
  darkMode = false,
}: SplashScreenProps) {
  const { particles } = useSplashScreen();

  const { targetMode, sourceMode, theme } = useMemo(() => {
    const isMonitoring = mode === "monitoring";
    return {
      targetMode: isMonitoring ? "Analysis" : "Monitoring",
      sourceMode: isMonitoring ? "Monitoring" : "Analysis",
      theme: darkMode ? DARK_THEME : LIGHT_THEME,
    };
  }, [mode, darkMode]);

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-9999 flex justify-center items-center overflow-hidden"
    >
      <BackgroundWithAnimation theme={theme} />

      <BackgroundOrbs darkMode={darkMode} />

      <MainContent
        theme={theme}
        darkMode={darkMode}
        targetMode={targetMode}
        sourceMode={sourceMode}
      />

      <FloatingParticles particles={particles} darkMode={darkMode} />
    </motion.div>
  );
}

function BackgroundWithAnimation({ theme }: { theme: typeof DARK_THEME }) {
  return (
    <motion.div
      className={`absolute inset-0 ${theme.background}`}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        ...ANIMATION_CONFIG.background,
        duration: 12,
      }}
    />
  );
}

function MainContent({
  darkMode,
  theme,
  targetMode,
  sourceMode,
}: {
  darkMode: boolean;
  theme: typeof DARK_THEME;
  targetMode: string;
  sourceMode: string;
}) {
  return (
    <motion.div
      variants={SPLASH_VARIANTS.container}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center space-y-4 sm:space-y-6"
    >
      <RadarAnimation darkMode={darkMode} />

      <ModeTransition
        sourceMode={sourceMode}
        targetMode={targetMode}
        darkMode={darkMode}
      />

      <TitleSection targetMode={targetMode} theme={theme} />

      <ProgressIndicator darkMode={darkMode} />

      <LoadingDots theme={theme} />
    </motion.div>
  );
}

function TitleSection({
  targetMode,
  theme,
}: {
  targetMode: string;
  theme: typeof DARK_THEME;
}) {
  return (
    <motion.div variants={SPLASH_VARIANTS.item} className="space-y-2">
      <h1
        className={`text-2xl sm:text-3xl md:text-4xl font-black tracking-tight px-4 ${theme.text.primary}`}
      >
        Beralih Ke Mode <AnimatedGradientText text={targetMode} />
      </h1>
      <p className={`text-xs sm:text-sm px-4 ${theme.text.secondary}`}>
        Konfigurasi dan laporan {targetMode} akan segera tersedia
      </p>
    </motion.div>
  );
}

function AnimatedGradientText({ text }: { text: string }) {
  return (
    <motion.span
      animate={{
        backgroundPosition: ["0%", "100%", "0%"],
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
      style={{ backgroundSize: "200% 200%" }}
    >
      {text}
    </motion.span>
  );
}

function LoadingDots({ theme }: { theme: typeof DARK_THEME }) {
  return (
    <motion.div
      variants={SPLASH_VARIANTS.item}
      className="flex gap-1 justify-center"
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${theme.dots}`}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: ANIMATION_CONFIG.dots.duration,
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}
    </motion.div>
  );
}

export default memo(SplashScreen);
