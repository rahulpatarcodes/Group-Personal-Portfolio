"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Cpu, Code2, Sparkles, Terminal, Flame, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const TeamProfiles: React.FC = () => {
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setImagesLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const getDomainIcon = (initial: "S" | "R" | "A") => {
    switch (initial) {
      case "S":
        return <Shield className="h-4 w-4 text-cyan-400" />;
      case "R":
        return <Cpu className="h-4 w-4 text-red-400" />;
      case "A":
        return <Code2 className="h-4 w-4 text-blue-400" />;
    }
  };

  return (
    <section
      id="about"
      className="relative z-20 bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28 border-t border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting matching the 3 distinct roles */}
      <div className="pointer-events-none absolute -top-32 left-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />
      <div className="pointer-events-none absolute -bottom-32 right-10 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-neutral-300 backdrop-blur-md">
            <Flame className="h-3.5 w-3.5 text-brand-orange" />
            <span>About // The SRA Neural Collective</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
                Engineered For <span className="text-gradient-fire">Impact.</span>
              </h2>
              <p className="mt-3 max-w-2xl text-base text-neutral-400 font-light leading-relaxed">
                Meet the three 1st Year B.Tech CSE engineers combining high-conviction Cybersecurity defense, real-time Neural Vision AI, and low-level Distributed Systems architecture.
              </p>
            </div>

            {/* Quick Status Pill */}
            <div className="hidden md:flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-900/80 backdrop-blur-md px-5 py-3 text-xs font-mono text-neutral-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>3 NODES ACTIVE // SRA TRIO</span>
            </div>
          </div>
        </div>

        {/* Responsive 3-Column Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.team.map((member, idx) => {
            const isLoaded = !!imagesLoaded[member.id];
            const theme = member.borderTheme;

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Outer Glow & Card Wrapper */}
                <div
                  className={`relative flex flex-col overflow-hidden rounded-2xl bg-neutral-900/80 backdrop-blur-md transition-all duration-300 ease-out hover:scale-105 ${theme.border} ${theme.shadow} ${theme.hoverBorder} ${theme.hoverShadow}`}
                >
                  {/* Portrait Container with Aspect Ratio 4/5 */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-950">
                    {/* Next.js Image with Blur-sm Loading State */}
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                      priority={idx === 0}
                      onLoad={() => handleImageLoad(member.id)}
                      className={`object-cover object-center transition-all duration-700 group-hover:scale-110 ${
                        isLoaded ? "blur-0 scale-100 opacity-100" : "blur-sm scale-105 opacity-60"
                      }`}
                    />

                    {/* Top Overlay: Acronym Monogram & Live Status */}
                    <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 backdrop-blur-md">
                        <span className="font-mono text-xs font-black text-white">
                          [{member.initial}]
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300">
                          NODE 0{idx + 1}
                        </span>
                      </div>

                      <div className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 backdrop-blur-md flex items-center gap-1.5">
                        <span className={`h-1.5 w-1.5 rounded-full ${
                          member.initial === "S"
                            ? "bg-cyan-400"
                            : member.initial === "R"
                            ? "bg-red-500"
                            : "bg-blue-400"
                        } animate-pulse`} />
                        <span className="text-[10px] font-mono text-neutral-300 uppercase">
                          {member.initial === "S" ? "SEC" : member.initial === "R" ? "AI/ML" : "SYS"}
                        </span>
                      </div>
                    </div>

                    {/* Soft Linear Gradient Overlays at bottom for maximum text contrast */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                    {/* Technical Badge Chip Overlaying the Corner */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <div
                        className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1 font-mono text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110 ${theme.badgeBg} ${theme.badgeBorder} ${theme.badgeText}`}
                      >
                        {getDomainIcon(member.initial)}
                        <span>{member.badgeChip}</span>
                      </div>
                    </div>

                    {/* Overlaid Bottom Details: Name & Designation */}
                    <div className="absolute bottom-4 left-4 right-28 z-20 space-y-1">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-neutral-300">
                        <span>{member.spec}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-display drop-shadow-md">
                        {member.name}
                      </h3>
                      <p
                        className={`text-xs font-mono font-medium drop-shadow ${
                          member.initial === "S"
                            ? "text-cyan-300"
                            : member.initial === "R"
                            ? "text-red-300"
                            : "text-blue-300"
                        }`}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Domain Overview, Tool Badges & Dossier Link */}
                  <div className="flex flex-col justify-between p-5 space-y-4 bg-neutral-950/90 border-t border-white/5">
                    <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Core Tools Badge Row */}
                    <div className="flex flex-wrap gap-1.5">
                      {member.coreTools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-mono text-neutral-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Pill */}
                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <Terminal className="h-3 w-3 text-neutral-400" />
                        <span>Command: <span className="text-white">${member.terminalCommand}</span></span>
                      </span>
                      <a
                        href="#team-section"
                        className="inline-flex items-center gap-1 text-white hover:text-brand-orange transition-colors"
                      >
                        <span>Inspect Dossier</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
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

