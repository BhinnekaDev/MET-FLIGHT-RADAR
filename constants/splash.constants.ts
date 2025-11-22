export interface ThemeType {
  readonly background: string;
  readonly orb1: string;
  readonly orb2: string;
  readonly text: {
    readonly primary: string;
    readonly secondary: string;
    readonly accent: string;
  };
  readonly badge: {
    readonly source: string;
    readonly target: string;
  };
  readonly progress: {
    readonly background: string;
    readonly bar: string;
  };
  readonly dots: string;
}

export const SPLASH_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  },
} as const;

export const ANIMATION_CONFIG = {
  background: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
  orb1: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
  orb2: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
    delay: 0.5,
  },
  radar: {
    duration: 6,
    repeat: Infinity,
    ease: "linear" as const,
  },
  satellite: {
    duration: 4,
    repeat: Infinity,
    ease: "linear" as const,
  },
  progress: {
    duration: 2.5,
    ease: "easeInOut" as const,
  },
  dots: {
    duration: 1.6,
    repeat: Infinity,
  },
} as const;

export const PARTICLE_COUNT = 6;

export const LIGHT_THEME: ThemeType = {
  background: "bg-linear-to-br from-blue-50 via-cyan-50 to-purple-50",
  orb1: "bg-linear-to-br from-cyan-400 to-blue-500",
  orb2: "bg-linear-to-tr from-purple-400 to-pink-300",
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-600",
    accent: "text-cyan-600",
  },
  badge: {
    source:
      "bg-linear-to-r from-cyan-400/20 to-blue-500/20 border-cyan-400/50 text-cyan-700",
    target:
      "bg-linear-to-r from-purple-400/20 to-pink-500/20 border-purple-400/50 text-purple-700",
  },
  progress: {
    background: "bg-gray-300/50 border-cyan-400/30",
    bar: "bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500",
  },
  dots: "bg-linear-to-b from-cyan-500 to-purple-500",
} as const;

export const DARK_THEME: ThemeType = {
  background: "bg-linear-to-br from-[#050810] via-[#0F1438] to-[#1a1f4d]",
  orb1: "bg-linear-to-br from-cyan-500 to-purple-600",
  orb2: "bg-linear-to-tr from-purple-600 to-cyan-500",
  text: {
    primary: "text-white",
    secondary: "text-gray-300",
    accent: "text-cyan-400",
  },
  badge: {
    source:
      "bg-linear-to-r from-cyan-500/20 to-blue-600/20 border-cyan-500/50 text-cyan-300",
    target:
      "bg-linear-to-r from-purple-500/20 to-pink-600/20 border-purple-500/50 text-purple-300",
  },
  progress: {
    background: "bg-gray-700/50 border-cyan-500/20",
    bar: "bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500",
  },
  dots: "bg-linear-to-b from-cyan-500 to-purple-600",
} as const;
