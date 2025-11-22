import { Particle } from "@/interfaces/particle.interface";

export interface SplashScreenProps {
  mode?: "monitoring" | "analysis";
  darkMode?: boolean;
}

export interface ModeTransitionProps {
  sourceMode: string;
  targetMode: string;
  darkMode?: boolean;
}

export interface RadarAnimationProps {
  size?: "sm" | "md" | "lg";
  darkMode?: boolean;
}

export interface ProgressIndicatorProps {
  darkMode?: boolean;
}

export interface BackgroundOrbsProps {
  darkMode?: boolean;
}

export interface FloatingParticlesProps {
  particles: Particle[];
  darkMode?: boolean;
}
