"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Philosophy: React.FC = () => {
  return (
    <section className="relative z-20 bg-[#050505] border-y border-white/10 px-6 py-24 sm:px-12 md:px-20 lg:px-28 overflow-hidden">
      {/* Warm glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[500px] -translate-y-1/2 rounded-full bg-brand-crimson/15 blur-[150px]" />
      <div className="pointer-events-none absolute left-0 top-1/4 h-[350px] w-[450px] rounded-full bg-brand-amber/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        {/* Large Editorial Ethos */}
        <div className="mb-20 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-amber-300">
            <span>06 / The SRA Ethos</span>
          </div>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight uppercase font-display">
            “THREE MINDS. <span className="text-gradient-fire">ONE NEURAL COLLECTIVE.</span> LIMITLESS SYNERGY.”
          </h3>
          <p className="text-base sm:text-xl text-neutral-400 font-light leading-relaxed">
            First-Year B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning) students at the frontier. Mathematical precision in PyTorch latent spaces; cinematic emotion through DaVinci Resolve color science; silky execution at 60 FPS.
          </p>
        </div>

        {/* Highlight Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="space-y-1.5"
            >
              <div className="text-4xl sm:text-5xl font-black font-display text-gradient-fire">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white">{stat.label}</div>
              <div className="text-xs font-mono text-neutral-500">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
