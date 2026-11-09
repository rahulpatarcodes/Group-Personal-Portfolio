"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Check, Copy, ArrowUpRight, MessageSquare, Flame, Users } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative z-20 bg-[#050505] px-6 py-28 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
    >
      {/* Background radial spotlight */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand-crimson/15 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl text-center space-y-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-amber-300 backdrop-blur-md">
          <Flame className="h-3.5 w-3.5 text-brand-orange" />
          <span>08 / Connect With SRA NEURAL</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase font-display leading-[1.05]">
            LET’S ENGINEER <br />
            <span className="text-gradient-fire">SOMETHING ICONIC.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-xl text-neutral-400 font-light leading-relaxed">
            Need high-impact commercial video editing with DaVinci color grading, real-time computer vision pipelines, or high-performance AI web applications? The 3 boys are ready.
          </p>
        </div>

        {/* Copyable Email Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-3 rounded-full border border-white/20 bg-neutral-900/80 px-8 py-4 font-mono text-sm sm:text-base text-white backdrop-blur-md transition-all duration-300 hover:border-brand-amber hover:bg-neutral-800 hover:shadow-[0_0_35px_rgba(255,140,0,0.3)]"
          >
            <Mail className="h-4 w-4 text-brand-amber" />
            <span>{PORTFOLIO_DATA.contact.email}</span>
            <span className="rounded-full bg-white/10 p-1.5 transition-colors group-hover:bg-brand-amber group-hover:text-black">
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </span>
          </button>

          <a
            href={`mailto:${PORTFOLIO_DATA.contact.email}`}
            className="rounded-full bg-gradient-to-r from-red-600 via-brand-crimson to-brand-amber px-8 py-4 font-mono text-sm sm:text-base font-semibold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(255,34,0,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Send Collective Email
          </a>
        </div>

        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono text-brand-amber"
          >
            ✓ Collective email address copied to your clipboard!
          </motion.div>
        )}

        {/* Social Pill Grid */}
        <div className="pt-10 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
          {PORTFOLIO_DATA.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 text-xs font-mono text-neutral-300 transition-all duration-300 hover:border-brand-amber hover:text-white hover:bg-white/5"
            >
              <span>{social.name}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
