"use client";

import React from "react";
import { ArrowUp, Flame, Users } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 border-t border-white/10 bg-[#030303] px-6 py-12 sm:px-12 md:px-20 lg:px-28">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-neutral-500">
        <div className="flex flex-wrap items-center gap-3">
          <Flame className="h-4 w-4 text-brand-orange animate-pulse" />
          <span className="text-white font-bold">{PORTFOLIO_DATA.branding.name}</span>
          <span className="text-neutral-400">({PORTFOLIO_DATA.branding.subName})</span>
          <span>© {new Date().getFullYear()} SRA Collective. All Rights Reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-neutral-400">HARDWARE-ACCELERATED 60 FPS</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-brand-amber transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
