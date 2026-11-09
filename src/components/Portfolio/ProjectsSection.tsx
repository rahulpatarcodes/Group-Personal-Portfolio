"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, Shield, Cpu, Code2, ShieldCheck, Sparkles, Terminal, Users, Film } from "lucide-react";
import { PORTFOLIO_DATA, Project, ProjectType } from "@/data/portfolio";
import { ProjectModal } from "@/components/UI/ProjectModal";
import { VideoModal } from "@/components/UI/VideoModal";
import { usePortfolioMode } from "@/context/ModeContext";

export const ProjectsSection: React.FC = () => {
  const { mode } = usePortfolioMode();
  const [filter, setFilter] = useState<"all" | "cyber" | "aiml" | "systems" | "video">("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  // Sync filter when global mode changes
  useEffect(() => {
    if (mode === "video") setFilter("video");
    else if (mode === "code") setFilter("aiml");
    else setFilter("all");
  }, [mode]);

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === "all") return true;
    return p.type === filter;
  });

  const getMemberColor = (initial: "S" | "R" | "A") => {
    switch (initial) {
      case "S":
        return "text-emerald-400 border-emerald-500/40 bg-emerald-500/10 shadow-[0_0_12px_rgba(0,255,157,0.15)]";
      case "R":
        return "text-amber-500 border-amber-500/30 bg-amber-500/10";
      case "A":
        return "text-amber-300 border-amber-400/30 bg-amber-400/10";
    }
  };

  const getMemberIcon = (type: ProjectType) => {
    switch (type) {
      case "cyber":
        return <Shield className="h-3.5 w-3.5 text-emerald-400" />;
      case "aiml":
        return <Cpu className="h-3.5 w-3.5 text-amber-500" />;
      case "systems":
        return <Code2 className="h-3.5 w-3.5 text-amber-300" />;
      case "video":
        return <Film className="h-3.5 w-3.5 text-red-400" />;
    }
  };

  return (
    <section
      id="projects"
      className="relative z-20 min-h-screen bg-[#050505] px-6 py-24 sm:px-12 md:px-20 lg:px-28"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[450px] w-[550px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[170px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[600px] rounded-full bg-brand-amber/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
            <span>04 / Domain Productions & Systems</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-display">
                Featured <span className="text-gradient-fire">Productions.</span>
              </h2>
              <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Dedicated engineering showcases aligned with each member’s domain: Network Intrusion Detection (Shaikh Zubaid Hussain), PyTorch Deep Learning & Computer Vision (Rahul Patar), and Custom Compilers & Distributed Systems (Ashish Das).
              </p>
            </div>

            {/* Filter Tabs by Member Domain */}
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-neutral-900/70 p-1.5 backdrop-blur-md">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all ${
                  filter === "all"
                    ? "bg-gradient-to-r from-red-600 via-brand-amber to-amber-500 text-white shadow-[0_0_15px_rgba(255,140,0,0.4)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                All Works ({PORTFOLIO_DATA.projects.length})
              </button>

              <button
                onClick={() => setFilter("cyber")}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-mono font-medium transition-all ${
                  filter === "cyber"
                    ? "bg-emerald-400 text-black font-bold shadow-[0_0_18px_rgba(0,255,157,0.6)]"
                    : "text-neutral-400 hover:text-emerald-400"
                }`}
              >
                <Shield className="h-3 w-3" />
                <span>Cybersecurity [Shaikh]</span>
              </button>

              <button
                onClick={() => setFilter("aiml")}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-mono font-medium transition-all ${
                  filter === "aiml"
                    ? "bg-amber-500 text-black font-semibold shadow-[0_0_15px_rgba(255,140,0,0.5)]"
                    : "text-neutral-400 hover:text-amber-400"
                }`}
              >
                <Cpu className="h-3 w-3" />
                <span>AI & Vision [Rahul]</span>
              </button>

              <button
                onClick={() => setFilter("systems")}
                className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-mono font-medium transition-all ${
                  filter === "systems"
                    ? "bg-gradient-to-r from-amber-400 to-amber-600 text-black font-semibold shadow-[0_0_15px_rgba(255,170,0,0.4)]"
                    : "text-neutral-400 hover:text-amber-300"
                }`}
              >
                <Code2 className="h-3 w-3" />
                <span>CSE Systems [Ashish]</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const isVideo = project.type === "video";
              const isCyber = project.type === "cyber";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 ${
                    isCyber
                      ? "border-emerald-500/25 bg-neutral-950/75 hover:border-emerald-500/60 hover:shadow-[0_0_45px_rgba(0,255,157,0.22)]"
                      : "border-white/10 bg-neutral-950/70 hover:border-amber-500/50 hover:shadow-[0_0_45px_rgba(255,140,0,0.18)]"
                  }`}
                >
                  <div>
                    {/* Meta Header with Member Attribution Badge */}
                    <div className="flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 mb-6 gap-2">
                      <span className="flex items-center gap-2">
                        {getMemberIcon(project.type)}
                        <span className="font-bold text-white uppercase">
                          {project.type.toUpperCase()}
                        </span>
                        <span className="text-neutral-600">/</span>
                        <span className="text-neutral-400">{project.category}</span>
                      </span>

                      {/* Lead Member Tag */}
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full border ${getMemberColor(project.memberInitial)}`}>
                          <span className="font-black">[{project.memberInitial}]</span>
                          <span>{project.leadMember}</span>
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-neutral-400">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-2xl sm:text-3xl font-bold tracking-tight text-white transition-colors duration-300 mb-4 flex items-center justify-between ${
                        isCyber ? "group-hover:text-emerald-400" : "group-hover:text-brand-amber"
                      }`}
                    >
                      <span>{project.title}</span>
                      {isVideo ? (
                        <Play className="h-6 w-6 text-neutral-500 transition-all duration-300 group-hover:text-red-500 group-hover:scale-110" />
                      ) : (
                        <ArrowUpRight
                          className={`h-6 w-6 text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                            isCyber ? "group-hover:text-emerald-400" : "group-hover:text-brand-amber"
                          }`}
                        />
                      )}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>

                    {/* Metrics Highlight Pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1 text-xs font-mono ${
                            isCyber
                              ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-300"
                              : "border-white/10 bg-white/[0.03] text-neutral-300"
                          }`}
                        >
                          <ShieldCheck className={`h-3 w-3 ${isCyber ? "text-emerald-400" : "text-brand-amber"}`} />
                          <span>{metric}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Tags & Action Button */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-neutral-300 bg-neutral-900/80 px-2.5 py-1 rounded-md border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {isVideo ? (
                      <button
                        onClick={() => setSelectedVideo(project)}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-brand-crimson hover:from-red-500 hover:to-brand-orange px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(255,34,0,0.3)] transition-all flex-shrink-0"
                      >
                        <Play className="h-3.5 w-3.5 fill-current" />
                        <span>Watch Film</span>
                      </button>
                    ) : isCyber ? (
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-300 transition-all flex-shrink-0 shadow-[0_0_15px_rgba(0,255,157,0.15)]"
                      >
                        <Shield className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Security Intel</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 px-5 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider text-amber-300 transition-all flex-shrink-0"
                      >
                        <Terminal className="h-3.5 w-3.5" />
                        <span>Architecture</span>
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedCaseStudy && (
        <ProjectModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {/* Cinema Video Player Modal */}
      {selectedVideo && (
        <VideoModal
          project={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
};

// Also export as Projects for backwards-compatibility
export { ProjectsSection as Projects };
