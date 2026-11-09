"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, Film, Terminal, Sparkles, Cpu, Users } from "lucide-react";
import { SoundButton } from "@/components/UI/SoundManager";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { usePortfolioMode, PortfolioMode } from "@/context/ModeContext";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, setMode } = usePortfolioMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Story", href: "#scrolly-section" },
    { label: "Trio", href: "#team-section" },
    { label: "Works", href: "#projects" },
    { label: "Color Science", href: "#color-grade" },
    { label: "Terminal", href: "#terminal" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center p-3 sm:p-5 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-4 rounded-full border px-4 sm:px-6 py-2 transition-all duration-500 max-w-6xl w-full ${
          scrolled
            ? "border-red-950/40 bg-neutral-950/90 shadow-[0_10px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl"
            : "border-white/10 bg-black/55 backdrop-blur-md"
        }`}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-brand-orange transition-colors flex-shrink-0"
        >
          <div className="relative flex h-5 w-5 items-center justify-center rounded-full bg-brand-crimson/20 border border-brand-crimson/50">
            <Flame className="h-3.5 w-3.5 text-brand-orange animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-display tracking-tight text-sm sm:text-base font-black text-white">
              {PORTFOLIO_DATA.branding.name}
            </span>
            <span className="text-[9px] font-mono tracking-widest text-brand-amber font-normal hidden sm:block">
              {PORTFOLIO_DATA.branding.subName}
            </span>
          </div>
        </a>

        {/* The 3-Way Mode Switcher (Global HUD) */}
        <div className="hidden lg:flex items-center rounded-full border border-white/10 bg-neutral-900/80 p-1 backdrop-blur-md">
          <button
            onClick={() => setMode("video")}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono transition-all ${
              mode === "video"
                ? "bg-red-600 text-white font-semibold shadow-[0_0_12px_rgba(255,34,0,0.6)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Film className="h-3 w-3" />
            <span>CINEMA</span>
          </button>

          <button
            onClick={() => setMode("dual")}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono transition-all ${
              mode === "dual"
                ? "bg-brand-orange text-white font-semibold shadow-[0_0_12px_rgba(255,77,0,0.6)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Sparkles className="h-3 w-3" />
            <span>TRIO DUAL</span>
          </button>

          <button
            onClick={() => setMode("code")}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-mono transition-all ${
              mode === "code"
                ? "bg-cyan-500 text-black font-semibold shadow-[0_0_12px_rgba(0,229,255,0.6)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Cpu className="h-3 w-3" />
            <span>AI NEURAL</span>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 text-xs font-mono text-neutral-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-brand-orange"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Controls: Audio & Contact CTA */}
        <div className="flex items-center gap-2.5">
          <SoundButton />

          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-red-600 via-brand-crimson to-brand-orange px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_15px_rgba(255,34,0,0.35)] transition-all hover:scale-105 active:scale-95"
          >
            Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-neutral-300 hover:text-white"
            aria-label="Toggle Menu"
          >
            <Users className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-x-4 top-20 rounded-2xl border border-white/15 bg-neutral-950/95 p-6 backdrop-blur-2xl md:hidden shadow-2xl">
          <div className="flex flex-col gap-4 text-sm font-mono">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs text-brand-orange font-bold uppercase tracking-wider">
                SRA NEURAL TRIO
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-neutral-400"
              >
                ✕ Close
              </button>
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-brand-orange"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
