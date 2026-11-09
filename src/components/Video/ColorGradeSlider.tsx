"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Sliders, Sparkles, Video, Film } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const ColorGradeSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 to 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="relative z-20 bg-[#050505] px-6 py-20 sm:px-12 md:px-20 lg:px-28 border-t border-white/10 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 space-y-4 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Film className="h-3.5 w-3.5 text-brand-orange" />
            <span>SRA Neural Color Lab // DaVinci Resolve Studio</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display">
            Color Grading <span className="text-gradient-fire">Science.</span>
          </h3>

          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            {PORTFOLIO_DATA.colorGradeDemo.description}
          </p>
        </div>

        {/* Comparison Frame Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative h-[320px] sm:h-[480px] md:h-[540px] w-full overflow-hidden rounded-2xl border border-red-500/30 bg-black shadow-[0_0_60px_rgba(255,34,0,0.2)] cursor-ew-resize select-none"
        >
          {/* Layer 1: Graded Layer (Full Width) */}
          <div className="absolute inset-0">
            <img
              src="/sequence/frame_100.webp"
              alt="DaVinci Resolve Graded"
              className="h-full w-full object-cover"
            />
            {/* Graded Badge */}
            <div className="absolute top-6 right-6 rounded-full border border-amber-500/50 bg-black/80 px-3.5 py-1 text-xs font-mono font-semibold text-amber-300 backdrop-blur-md shadow-[0_0_15px_rgba(255,140,0,0.4)]">
              ✓ {PORTFOLIO_DATA.colorGradeDemo.afterLabel}
            </div>
          </div>

          {/* Layer 2: RAW Log Layer (Clipped to slider position) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative h-full w-full" style={{ width: containerRef.current?.clientWidth || "100%" }}>
              <img
                src="/sequence/frame_100.webp"
                alt="RAW Camera Log"
                style={{
                  filter: "saturate(0.3) contrast(0.7) brightness(1.2) sepia(0.1)",
                }}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Raw Log Badge */}
            <div className="absolute top-6 left-6 rounded-full border border-white/20 bg-black/80 px-3.5 py-1 text-xs font-mono font-semibold text-neutral-300 backdrop-blur-md">
              ⚡ {PORTFOLIO_DATA.colorGradeDemo.beforeLabel}
            </div>
          </div>

          {/* Draggable Divider Line */}
          <div
            className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-transparent via-brand-amber to-transparent shadow-[0_0_10px_#ff8c00]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Handle Grip Pill */}
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/50 bg-neutral-900/90 shadow-[0_0_20px_#ff8c00] backdrop-blur-md text-white">
              <Sliders className="h-4 w-4 text-brand-amber rotate-90" />
            </div>
          </div>

          {/* Bottom HUD bar with color scopes */}
          <div className="absolute bottom-4 inset-x-4 flex items-center justify-between pointer-events-none text-[11px] font-mono text-neutral-400">
            <span className="hidden sm:inline bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm border border-white/10">
              DRAG SLIDER TO COMPARE
            </span>
            <span className="bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm border border-amber-500/30 flex items-center gap-2 text-amber-300">
              <span className="h-2 w-2 rounded-full bg-brand-amber animate-pulse" />
              Rec.709 • Kodak 2383 LUT • SRA Deep Red Color Science
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
