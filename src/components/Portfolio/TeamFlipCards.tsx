"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Cpu, Code2, CheckCircle2, RotateCw, Terminal, Flame } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const TeamFlipCards: React.FC = () => {
  // Track flipped state for touch devices & keyboard interaction
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip(id);
    }
  };

  const getDomainIcon = (initial: "S" | "R" | "A") => {
    switch (initial) {
      case "S":
        return <Shield className="h-5 w-5 text-cyan-400" />;
      case "R":
        return <Cpu className="h-5 w-5 text-red-500" />;
      case "A":
        return <Code2 className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="team-section"
      className="relative z-20 bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28 border-t border-white/10 overflow-hidden"
    >
      {/* Ambient Glows: Cyan for Zubaid, Red for Rahul, Blue for Ashish */}
      <div className="pointer-events-none absolute -top-24 left-1/6 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/2 right-1/4 h-[450px] w-[550px] rounded-full bg-red-600/10 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/6 h-[400px] w-[500px] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-neutral-300 backdrop-blur-md">
            <Flame className="h-3.5 w-3.5 text-brand-orange" />
            <span>Interactive 3D Dossier // SRA Architecture</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
                The SRA <span className="text-gradient-fire">Triumvirate.</span>
              </h2>
              <p className="mt-3 max-w-2xl text-base text-neutral-400 font-light leading-relaxed">
                Meet the three engineers driving SRA NEURAL. Hover or click any card to flip and inspect their deep technical architecture, security frameworks, and core engineering specializations.
              </p>
            </div>

            {/* Quick Helper Badge */}
            <div className="glass-card flex items-center gap-3 rounded-2xl border border-white/10 px-5 py-3 text-xs font-mono text-neutral-300">
              <RotateCw className="h-4 w-4 text-brand-amber animate-spin" />
              <span>Hover / Tap card to flip</span>
            </div>
          </div>
        </div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.team.map((member, idx) => {
            const isFlipped = !!flippedCards[member.id];
            const isCyber = member.initial === "S";
            const isAI = member.initial === "R";

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative perspective-1000 h-[580px] w-full"
                onClick={() => toggleFlip(member.id)}
                onKeyDown={(e) => handleKeyDown(e, member.id)}
                tabIndex={0}
                role="button"
                aria-label={`Flip card for ${member.name}`}
              >
                {/* 3D Inner Card Container */}
                <div
                  className={`relative h-full w-full rounded-2xl transition-transform duration-700 transform-style-3d cursor-pointer ${
                    isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                  }`}
                >
                  {/* ======================================================== */}
                  {/* FRONT OF CARD                                            */}
                  {/* ======================================================== */}
                  <div
                    className={`absolute inset-0 h-full w-full rounded-2xl border p-7 flex flex-col justify-between backface-hidden backdrop-blur-xl ${
                      isCyber
                        ? "border-cyan-500/50 bg-gradient-to-b from-neutral-900/95 via-neutral-950/98 to-black shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.45)]"
                        : isAI
                        ? "border-red-500/50 bg-gradient-to-b from-neutral-900/95 via-neutral-950/98 to-black shadow-[0_0_25px_rgba(239,68,68,0.25)] hover:border-red-400 hover:shadow-[0_0_35px_rgba(239,68,68,0.45)]"
                        : "border-blue-500/50 bg-gradient-to-b from-neutral-900/95 via-neutral-950/98 to-black shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:border-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]"
                    }`}
                  >
                    <div>
                      {/* Top Row: Portrait Avatar + Monogram & Academic Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`relative h-16 w-16 rounded-2xl overflow-hidden border-2 shadow-lg flex-shrink-0 ${
                              isCyber
                                ? "border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                                : isAI
                                ? "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                                : "border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                            }`}
                          >
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              sizes="64px"
                              className="object-cover object-center"
                            />
                            <div className="absolute bottom-0 right-0 rounded-tl-md bg-black/80 px-1 py-0.2 text-[9px] font-mono font-bold text-white">
                              {member.initial}
                            </div>
                          </div>

                          <div>
                            <span
                              className={`text-[11px] font-mono uppercase tracking-wider font-bold block ${
                                isCyber
                                  ? "text-cyan-400"
                                  : isAI
                                  ? "text-red-400"
                                  : "text-blue-400"
                              }`}
                            >
                              [{member.badgeChip}]
                            </span>
                            <span className="text-[10px] font-mono text-neutral-400">
                              NODE 0{idx + 1}
                            </span>
                          </div>
                        </div>

                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-neutral-300">
                          {member.spec}
                        </span>
                      </div>

                      {/* Domain Icon & Subtitle */}
                      <div className="flex items-center gap-2 mb-2">
                        {getDomainIcon(member.initial)}
                        <span
                          className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                            isCyber
                              ? "text-cyan-400"
                              : isAI
                              ? "text-red-400"
                              : "text-blue-400"
                          }`}
                        >
                          {member.domain.split(",")[0]}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-1">
                        {member.name}
                      </h3>

                      {/* Role */}
                      <div
                        className={`text-xs font-mono ${
                          isCyber
                            ? "text-cyan-300"
                            : isAI
                            ? "text-red-300"
                            : "text-blue-300"
                        }`}
                      >
                        {member.role}
                      </div>

                      {/* Front Summary */}
                      <p className="mt-4 text-sm text-neutral-300 font-light leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>

                      {/* Key Tools Badges on Front */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {member.coreTools.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className={`rounded-md border px-2.5 py-1 text-[11px] font-mono ${
                              isCyber
                                ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-200"
                                : isAI
                                ? "border-red-500/30 bg-red-500/10 text-red-200"
                                : "border-blue-500/30 bg-blue-500/10 text-blue-200"
                            }`}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Front Bottom Bar: Stats & Flip Prompt */}
                    <div className="pt-5 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        {member.stats.map((st) => (
                          <div key={st.label} className="rounded-lg bg-black/60 p-2.5 border border-white/5 text-center">
                            <div
                              className={`text-base font-black font-mono ${
                                isCyber
                                  ? "text-cyan-300"
                                  : isAI
                                  ? "text-red-400"
                                  : "text-blue-300"
                              }`}
                            >
                              {st.value}
                            </div>
                            <div className="text-[10px] font-mono text-neutral-400 uppercase">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div
                        className={`flex items-center justify-between text-[11px] font-mono ${
                          isCyber
                            ? "text-cyan-400"
                            : isAI
                            ? "text-red-400"
                            : "text-blue-400"
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <RotateCw className="h-3 w-3" />
                          <span>Click or hover to reveal dossier</span>
                        </span>
                        <span className="font-bold uppercase tracking-wider">
                          [FLIP] →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ======================================================== */}
                  {/* BACK OF CARD (Detailed Technical Breakdown)              */}
                  {/* ======================================================== */}
                  <div
                    className={`absolute inset-0 h-full w-full rounded-2xl border p-7 flex flex-col justify-between backface-hidden rotate-y-180 backdrop-blur-2xl ${
                      isCyber
                        ? "border-cyan-400/80 bg-neutral-950/98 shadow-[0_0_50px_rgba(6,182,212,0.35)]"
                        : isAI
                        ? "border-red-400/80 bg-neutral-950/98 shadow-[0_0_50px_rgba(239,68,68,0.35)]"
                        : "border-blue-400/80 bg-neutral-950/98 shadow-[0_0_50px_rgba(59,130,246,0.35)]"
                    }`}
                  >
                    <div>
                      {/* Back Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`h-2 w-2 rounded-full animate-pulse ${
                              isCyber
                                ? "bg-cyan-400"
                                : isAI
                                ? "bg-red-500"
                                : "bg-blue-400"
                            }`}
                          />
                          <span
                            className={`text-xs font-mono uppercase tracking-widest font-bold ${
                              isCyber
                                ? "text-cyan-300"
                                : isAI
                                ? "text-red-300"
                                : "text-blue-300"
                            }`}
                          >
                            DOSSIER // {member.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-neutral-400">
                          ID: SRA-0{idx + 1}
                        </span>
                      </div>

                      {/* Role Specific Highlight Title */}
                      <div className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                        {getDomainIcon(member.initial)}
                        <span>{member.highlightTitle}</span>
                      </div>

                      {/* Role Specific Detailed Highlights Checklist */}
                      <div className="space-y-2 mb-4">
                        {member.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs font-light text-neutral-300">
                            <CheckCircle2
                              className={`h-3.5 w-3.5 flex-shrink-0 mt-0.5 ${
                                isCyber
                                  ? "text-cyan-400"
                                  : isAI
                                  ? "text-red-400"
                                  : "text-blue-400"
                              }`}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Full Technical Toolkit */}
                      <div className="mb-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                          Verified Toolchain:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {member.coreTools.map((tool) => (
                            <span
                              key={tool}
                              className={`rounded border px-2 py-0.5 text-[10px] font-mono ${
                                isCyber
                                  ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-200"
                                  : isAI
                                  ? "border-red-500/40 bg-red-500/10 text-red-200"
                                  : "border-blue-500/40 bg-blue-500/10 text-blue-200"
                              }`}
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Back Bottom Bar: Quick Command & Return */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-neutral-400">
                          Run in terminal:{" "}
                          <span
                            className={`font-bold ${
                              isCyber
                                ? "text-cyan-400"
                                : isAI
                                ? "text-red-400"
                                : "text-blue-400"
                            }`}
                          >
                            ${member.terminalCommand}
                          </span>
                        </span>
                        <span className="text-neutral-500 hover:text-white transition-colors flex items-center gap-1">
                          <span>Return</span> ↩
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
