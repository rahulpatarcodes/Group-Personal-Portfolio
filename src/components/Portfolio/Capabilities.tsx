"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Cpu, Code2, Film, Terminal, Flame, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Capabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="capabilities"
      className="relative z-20 bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Cpu className="h-3.5 w-3.5 text-brand-orange" />
            <span>05 / Collective Engineering Matrix</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
            Team <span className="text-gradient-fire">Capabilities.</span>
          </h2>

          <p className="max-w-2xl text-base text-neutral-400 font-light leading-relaxed">
            Three specialized domains working in concert: Offensive & Defensive Cybersecurity (Shaikh Zubaid Hussain), Deep Learning & Computer Vision (Rahul Patar), and Low-Level CSE Systems & Distributed Architecture (Ashish Das).
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-6 mb-10">
          {PORTFOLIO_DATA.capabilities.map((cat, idx) => {
            const isCyber = cat.type === "cyber";
            const isAI = cat.type === "aiml";
            const isSystems = cat.type === "systems";
            const isActive = activeTab === idx;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-mono font-medium transition-all duration-300 ${
                  isActive
                    ? isCyber
                      ? "bg-emerald-400 text-black font-bold shadow-[0_0_20px_rgba(0,255,157,0.6)]"
                      : isAI
                      ? "bg-gradient-to-r from-amber-500 to-brand-amber text-black font-semibold shadow-[0_0_20px_rgba(255,140,0,0.5)]"
                      : "bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold shadow-[0_0_20px_rgba(255,170,0,0.4)]"
                    : "border border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/20 hover:text-white"
                }`}
              >
                {isCyber && <Shield className="h-3.5 w-3.5" />}
                {isAI && <Cpu className="h-3.5 w-3.5" />}
                {isSystems && <Code2 className="h-3.5 w-3.5" />}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PORTFOLIO_DATA.capabilities[activeTab].skills.map((skill, sIdx) => {
            const isCyber = PORTFOLIO_DATA.capabilities[activeTab].type === "cyber";
            const isAI = PORTFOLIO_DATA.capabilities[activeTab].type === "aiml";

            return (
              <div
                key={skill.name}
                className={`glass-card rounded-xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isCyber
                    ? "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(0,255,157,0.2)]"
                    : isAI
                    ? "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(255,140,0,0.15)]"
                    : "hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(255,170,0,0.15)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                      <Flame
                        className={`h-4 w-4 ${
                          isCyber
                            ? "text-emerald-400"
                            : isAI
                            ? "text-amber-400"
                            : "text-amber-300"
                        }`}
                      />
                      {skill.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-neutral-400">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 font-light mb-4">
                    {skill.note}
                  </p>
                </div>

                {/* Progress Level Bar */}
                <div className="h-1.5 w-full rounded-full bg-neutral-900 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: sIdx * 0.08 }}
                    className={`h-full rounded-full ${
                      isCyber
                        ? "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
                        : isAI
                        ? "bg-gradient-to-r from-amber-500 to-brand-orange"
                        : "bg-gradient-to-r from-amber-400 to-amber-600"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
