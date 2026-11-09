"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface PreloaderProps {
  loaded: number;
  total: number;
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({
  loaded,
  total,
  onComplete,
}) => {
  const [isDone, setIsDone] = useState(false);
  const percentage = Math.min(100, Math.round((loaded / Math.max(1, total)) * 100));

  useEffect(() => {
    // When at least 15% loaded (approx 25 2K frames, plenty for smooth start)
    if (percentage >= 20 || loaded >= 25) {
      const timer = setTimeout(() => {
        setIsDone(true);
        onComplete?.();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [percentage, loaded, onComplete]);

  // Fail-safe dismiss after 2.5 seconds regardless
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setIsDone(true);
      onComplete?.();
    }, 2500);
    return () => clearTimeout(safetyTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#050505] p-8 md:p-14 select-none pointer-events-none"
        >
          {/* Top Brand Bar */}
          <div className="w-full flex items-center justify-between text-xs font-mono tracking-widest text-neutral-400">
            <span className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-brand-orange animate-pulse" />
              <span className="font-bold text-white tracking-wider">{PORTFOLIO_DATA.branding.name}</span>
            </span>
            <span className="text-brand-amber font-mono hidden sm:inline">{PORTFOLIO_DATA.branding.subName}</span>
          </div>

          {/* Center Loading Metric */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400">
              <Cpu className="h-3.5 w-3.5 text-brand-orange animate-spin" />
              <span>INITIALIZING 3-ENGINEER NEURAL PIPELINE</span>
            </div>

            <div className="text-6xl sm:text-8xl md:text-9xl font-black font-display tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,34,0,0.5)]">
              {percentage}%
            </div>

            <div className="mx-auto h-1 w-48 sm:w-64 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-600 via-brand-crimson to-brand-amber"
                style={{ width: `${percentage}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="text-[11px] font-mono text-brand-amber pt-2">
              SHAIKH ZUBAID HUSSAIN [S] • RAHUL PATAR [R] • ASHISH DAS [A]
            </div>
          </div>

          {/* Bottom Specs */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>60 FPS HARDWARE ACCELERATED</span>
            <span>CYBERSECURITY • AI/ML • CORE SYSTEMS</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
