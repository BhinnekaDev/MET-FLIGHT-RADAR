"use client";

import { Radar } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  mode?: "monitoring" | "analysis";
}

interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
  tx: number;
  ty: number;
}

export default function SplashScreen({
  mode = "monitoring",
}: SplashScreenProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      const newParticles: Particle[] = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        duration: 8 + Math.random() * 4,
        tx: Math.random() * dimensions.width,
        ty: Math.random() * dimensions.height,
      }));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setParticles(newParticles);
    }
  }, [dimensions]);

  const isMonitoring = mode === "monitoring";
  const targetMode = isMonitoring ? "Analysis" : "Monitoring";
  const sourceMode = isMonitoring ? "Monitoring" : "Analysis";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const particleElements = particles.map((particle) => (
    <motion.div
      key={particle.id}
      className="absolute w-1 h-1 rounded-full bg-cyan-500/50"
      initial={{
        x: particle.x,
        y: particle.y,
      }}
      animate={{
        x: particle.tx,
        y: particle.ty,
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  ));

  return (
    <motion.div
      key="splash"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-9999 flex justify-center items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-[#050810] via-[#0F1438] to-[#1a1f4d]"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-linear-to-br from-cyan-500 to-purple-600"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-linear-to-tr from-purple-600 to-cyan-500"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center space-y-8"
      >
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="relative"
          >
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
              <Radar size={40} className="text-white" />
            </div>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-cyan-400"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.3,
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  marginTop: -6,
                  marginLeft: -6,
                }}
              >
                <motion.div
                  className="absolute w-full h-full rounded-full"
                  animate={{
                    x: [0, 40 * Math.cos((i * 2 * Math.PI) / 3), 0],
                    y: [0, 40 * Math.sin((i * 2 * Math.PI) / 3), 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm font-semibold uppercase tracking-widest text-cyan-400"
          >
            Switching Mode
          </motion.div>

          <div className="flex items-center justify-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="px-4 py-2 rounded-lg bg-linear-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/50"
            >
              <p className="text-sm font-bold text-cyan-300">{sourceMode}</p>
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-cyan-400"
            >
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                <motion.path
                  d="M2 12H30M22 5L29 12L22 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="px-4 py-2 rounded-lg bg-linear-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/50"
            >
              <p className="text-sm font-bold text-purple-300">{targetMode}</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Switching to{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%" }}
            >
              {targetMode}
            </motion.span>
          </h1>
          <p className="text-gray-300 text-sm">
            Reconfiguring system parameters...
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-3 w-64 mx-auto">
          <div className="relative h-1.5 bg-gray-700/50 rounded-full overflow-hidden border border-cyan-500/20">
            <motion.div
              className="absolute inset-y-0 left-0 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xs text-cyan-400/70 text-center font-semibold"
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ●
            </motion.span>{" "}
            Processing...{" "}
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            >
              ●
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-2 justify-center"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-linear-to-b from-cyan-500 to-purple-600"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {particleElements}
    </motion.div>
  );
}
