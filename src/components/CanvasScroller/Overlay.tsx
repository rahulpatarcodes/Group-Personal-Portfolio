"use client";

import React from "react";
import { motion, MotionValue, useTransform, useScroll } from "framer-motion";
import { ArrowDown, Sparkles, Film, Terminal, Layers, Scissors, Code2, Cpu, Eye, Shield, CheckCircle2, RotateCw } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { useScrolly } from "./ScrollyCanvas";

interface OverlayProps {
  scrollYProgress?: MotionValue<number>;
  onOpenVideo?: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({
  scrollYProgress: propScroll,
  onOpenVideo,
}) => {
  const context = useScrolly();
  const { scrollYProgress: fallbackScroll } = useScroll();
  const scrollYProgress = propScroll || context?.scrollYProgress || fallbackScroll;

  // Section 1: Hero Entrance (0% to ~22%)
  const s1Opacity = useTransform(scrollYProgress, [0, 0.14, 0.22], [1, 0.9, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);

  // Section 2: Security & Cinema Discipline (25% to ~48%)
  const s2Opacity = useTransform(
    scrollYProgress,
    [0.22, 0.28, 0.44, 0.50],
    [0, 1, 1, 0]
  );
  const s2Y = useTransform(
    scrollYProgress,
    [0.22, 0.32, 0.44, 0.50],
    [60, 0, 0, -60]
  );

  // Section 3: AI & Core Systems (52% to ~74%)
  const s3Opacity = useTransform(
    scrollYProgress,
    [0.50, 0.56, 0.70, 0.76],
    [0, 1, 1, 0]
  );
  const s3Y = useTransform(
    scrollYProgress,
    [0.50, 0.58, 0.70, 0.76],
    [60, 0, 0, -60]
  );

  // Section 4: Three Minds Climax (78% to ~98%)
  const s4Opacity = useTransform(
    scrollYProgress,
    [0.76, 0.82, 0.94, 0.99],
    [0, 1, 1, 0]
  );
  const s4Y = useTransform(
    scrollYProgress,
    [0.76, 0.84, 0.94, 0.99],
    [70, 0, 0, -40]
  );
  const s4Scale = useTransform(scrollYProgress, [0.80, 0.92], [0.95, 1]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-full w-full pointer-events-none select-none">
      {/* ============================================================ */}
      {/* SECTION 1: 0% Scroll - SRA NEURAL HERO & THE 3 ENGINEERS     */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-between py-10 md:py-14 px-4 sm:px-6 text-center"
      >
        {/* Top Status & Biometric HUD */}
        <div className="pt-14 sm:pt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-black/70 px-3.5 py-1 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-neutral-200">
              {PORTFOLIO_DATA.hero.status}
            </span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-mono text-amber-300 backdrop-blur-md">
            <span className="text-red-500 font-bold">REC ●</span>
            <span>{PORTFOLIO_DATA.hero.timecode}</span>
            <span className="text-neutral-500">|</span>
            <span className="text-amber-400 font-semibold">{PORTFOLIO_DATA.hero.fps}</span>
          </div>
        </div>

        {/* Center Editorial Title & 3 Members Showcase */}
        <div className="max-w-5xl space-y-3 sm:space-y-4 my-auto w-full">
          {/* Main Title */}
          <div className="inline-block">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-display text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
              {PORTFOLIO_DATA.hero.name}
            </h1>
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-400 via-brand-amber to-brand-crimson mt-1 opacity-90 rounded-full shadow-[0_0_15px_#00ff9d]" />
          </div>

          {/* Subtitle */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-xl md:text-2xl font-light text-neutral-200">
            <span className="text-emerald-400 font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(0,255,157,0.4)]">
              SHAIKH ZUBAID HUSSAIN [S]
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-gradient-amber font-extrabold tracking-wide">
              RAHUL PATAR [R]
            </span>
            <span className="text-neutral-500">•</span>
            <span className="text-amber-300 font-extrabold tracking-wide">
              ASHISH DAS [A]
            </span>
          </div>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
            {PORTFOLIO_DATA.branding.mission}
          </p>

          {/* ======================================================== */}
          {/* THE 3 ENGINEERS // Multi-Person Interactive Entrance Cards */}
          {/* ======================================================== */}
          <div className="pt-2 sm:pt-4 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 max-w-4xl mx-auto pointer-events-auto">
            {PORTFOLIO_DATA.team.map((member, idx) => {
              const isCyber = member.initial === "S";
              const isCenter = member.initial === "R";

              return (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollToSection("team-section")}
                  className={`group relative rounded-xl border p-3.5 sm:p-4 text-left backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                    isCyber
                      ? "border-emerald-500/40 bg-neutral-950/85 shadow-[0_0_25px_rgba(0,255,157,0.18)] hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(0,255,157,0.3)]"
                      : isCenter
                      ? "border-amber-500/50 bg-neutral-950/85 shadow-[0_0_30px_rgba(255,140,0,0.2)] hover:border-amber-400 hover:shadow-[0_0_40px_rgba(255,140,0,0.35)]"
                      : "border-amber-400/30 bg-neutral-950/75 shadow-[0_0_20px_rgba(255,170,0,0.15)] hover:border-amber-300 hover:shadow-[0_0_35px_rgba(255,170,0,0.25)]"
                  }`}
                >
                  {/* Glowing corner indicator */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-flex items-center justify-center h-7 w-7 rounded-lg font-mono text-xs font-black shadow-md ${
                        isCyber
                          ? "bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 shadow-[0_0_12px_#00ff9d] text-black"
                          : isCenter
                          ? "bg-gradient-to-br from-amber-500 to-brand-crimson shadow-[0_0_12px_#ff8c00] text-white"
                          : "bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_12px_#ffaa00] text-black"
                      }`}
                    >
                      {member.initial}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">
                      {member.spec}
                    </span>
                  </div>

                  <h3
                    className={`text-sm sm:text-base font-bold text-white transition-colors ${
                      isCyber ? "group-hover:text-emerald-400" : "group-hover:text-brand-amber"
                    }`}
                  >
                    {member.name}
                  </h3>

                  <p
                    className={`text-[11px] font-mono mt-0.5 font-medium ${
                      isCyber ? "text-emerald-400" : "text-brand-amber"
                    }`}
                  >
                    {member.domain.split(",")[0]}
                  </p>

                  <p className="text-[11px] text-neutral-400 font-light mt-1 line-clamp-2">
                    {member.bio}
                  </p>

                  {/* Core Tools Mini Pills */}
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {member.coreTools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className={`rounded border px-1.5 py-0.5 text-[9px] font-mono ${
                          isCyber
                            ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-300"
                            : "border-white/10 bg-white/5 text-neutral-300"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Domain Tech Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {PORTFOLIO_DATA.hero.skills.map((s) => (
              <span
                key={s.name}
                className={`rounded-md border px-2.5 py-0.5 text-[10px] font-mono font-semibold ${
                  s.tag === "Cyber"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-[0_0_10px_rgba(0,255,157,0.2)]"
                    : "border-amber-500/30 bg-amber-500/10 text-amber-300 shadow-[0_0_10px_rgba(255,140,0,0.15)]"
                }`}
              >
                {s.name}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-400">
            Scroll to scrub neural timeline
          </span>
          <div className="relative h-9 w-5 rounded-full border border-white/20 p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-brand-amber shadow-[0_0_8px_#ff8c00]"
            />
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 2: ~30% Scroll - Security Defense & Cinema (Left)    */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y }}
        className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-20 lg:px-28"
      >
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,157,0.15)]">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            <span>01 / Cybersecurity & Cinematic Color Science</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            DEFENDING NETWORKS. <br />
            <span className="text-gradient-cyber">CRAFTING CINEMA.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed max-w-xl">
            Shaikh Zubaid Hussain deploys real-time network packet inspection and penetration testing to neutralize cyber threats, while the collective sculpts emotional narratives with DaVinci Resolve color science (Rec.709, Kodak 2383 LUTs) and 32-stem audio foley.
          </p>

          {/* SRA NIDS + Video Track Graphic */}
          <div className="glass-card rounded-xl p-4 border border-emerald-500/30 max-w-lg space-y-2.5 shadow-[0_0_35px_rgba(0,255,157,0.15)]">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <Shield className="h-3 w-3 text-emerald-400" />
                <span>SENTINEL NIDS // 0 PACKET DROP</span>
              </span>
              <span className="text-amber-400 font-mono">DAVINCI RESOLVE ACES</span>
            </div>

            {/* Visual Security & Cinema tracks */}
            <div className="space-y-1 font-mono text-[10px]">
              <div className="h-5 bg-neutral-900 rounded flex items-center gap-1 p-0.5 overflow-hidden">
                <span className="px-1 text-emerald-400 font-semibold">Security Core</span>
                <div className="h-full w-2/5 bg-emerald-600/80 rounded-sm flex items-center justify-center text-[9px] text-black font-bold">
                  Scapy Packet Sniffer
                </div>
                <div className="h-full w-1/2 bg-teal-500/80 rounded-sm flex items-center justify-center text-[9px] text-black font-bold">
                  Zero-Day Heuristics
                </div>
              </div>

              <div className="h-5 bg-neutral-900 rounded flex items-center gap-1 p-0.5 overflow-hidden">
                <span className="px-1 text-neutral-400">Cinema Track</span>
                <div className="h-full w-1/3 bg-neutral-700/80 rounded-sm" />
                <div className="h-full w-1/3 bg-brand-crimson/80 rounded-sm" />
                <div className="h-full w-1/3 bg-neutral-700/80 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Three Members Badges */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <div className="glass-card flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-mono text-neutral-200 border-emerald-500/30">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#00ff9d]" />
              <span className="text-emerald-300">Shaikh: Ethical Hacking & NIDS</span>
            </div>
            <div className="glass-card flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-mono text-neutral-200 border-amber-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber shadow-[0_0_6px_#ff8c00]" />
              <span>Rahul: AI Models & Color Grade</span>
            </div>
            <div className="glass-card flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-mono text-neutral-200 border-amber-600/20">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#ffa000]" />
              <span>Ashish: Low-Level Performance</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 3: ~60% Scroll - AI & Core Systems (Right)           */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y }}
        className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-20 lg:px-28 text-right"
      >
        <div className="max-w-2xl space-y-5 sm:space-y-6 flex flex-col items-end">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5 text-amber-400" />
            <span>02 / Neural Intelligence & Core Systems</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            NEURAL MODELS <br />
            <span className="text-gradient-amber">& CORE SYSTEMS.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed max-w-xl text-right">
            Rahul Patar engineers PyTorch optical flow neural frame synthesis and YOLOv8 real-time computer vision, while Ashish Das architects custom bytecode virtual machines and distributed key-value engines with Raft consensus in C++.
          </p>

          {/* AI/ML & Core Systems Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md pt-2 text-left">
            <div className="glass-card p-3.5 rounded-xl border border-amber-500/30 hover:border-amber-400 transition-colors shadow-[0_0_25px_rgba(255,140,0,0.15)]">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Cpu className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Rahul: PyTorch & Vision</span>
              </div>
              <p className="text-[11px] text-neutral-400">Deep neural frame synthesis, CUDA acceleration, YOLOv8 tracking & Next.js.</p>
            </div>

            <div className="glass-card p-3.5 rounded-xl border border-amber-400/30 hover:border-amber-300 transition-colors shadow-[0_0_25px_rgba(255,170,0,0.15)]">
              <div className="flex items-center gap-2 text-amber-300 mb-1">
                <Code2 className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Ashish: C++ Systems</span>
              </div>
              <p className="text-[11px] text-neutral-400">Stack bytecode VM, AST parsers, Raft distributed KV store & memory management.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* SECTION 4: ~85% Scroll - Three Minds Climax (Center)         */}
      {/* ============================================================ */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y, scale: s4Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center pointer-events-auto"
      >
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/80 px-4 py-1.5 backdrop-blur-lg">
            <span className="h-2 w-2 rounded-full bg-brand-amber animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-brand-amber">
              03 / The SRA Neural Synergy
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05] drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]">
            THREE MINDS. <br />
            <span className="text-gradient-fire">ONE UNIFIED COLLECTIVE.</span>
          </h2>

          <p className="mx-auto max-w-xl text-sm sm:text-base md:text-lg text-neutral-300 font-light">
            1st Year B.Tech CSE Engineers. Defending systems against zero-day exploits, training deep learning neural pipelines, and engineering high-concurrency low-level architectures.
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("team-section")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 via-brand-amber to-amber-500 px-8 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-black shadow-[0_0_35px_rgba(0,255,157,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <RotateCw className="h-4 w-4" />
              <span>Inspect 3D Team Dossier</span>
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-amber-500/40 bg-amber-500/10 px-8 py-4 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-300 shadow-[0_0_35px_rgba(255,140,0,0.2)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-amber-500/20 hover:border-amber-400 active:scale-95"
            >
              <Terminal className="h-4 w-4" />
              <span>Explore Domain Projects</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
