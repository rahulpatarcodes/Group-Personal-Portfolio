"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Tag, Calendar, User, Cpu } from "lucide-react";
import { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0a0a0a] p-6 sm:p-10 shadow-[0_0_80px_rgba(255,77,0,0.15)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 rounded-full border border-white/10 bg-white/5 p-2 text-neutral-400 transition-colors hover:border-brand-orange hover:bg-brand-orange/20 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-brand-orange">
              <Cpu className="h-3.5 w-3.5" />
              <span>{project.category}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              {project.title}
            </h3>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-brand-orange" />
                {project.year}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-brand-orange" />
                {project.client}
              </span>
            </div>
          </div>

          {/* Deep Dive Content */}
          <div className="space-y-6 text-neutral-300">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Executive Overview
              </h4>
              <p className="text-base sm:text-lg font-light leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Performance Metrics */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Key Performance & Impact
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm font-mono text-white"
                  >
                    <ShieldCheck className="h-4 w-4 text-brand-orange flex-shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                Technical Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-neutral-900 px-3 py-1.5 text-xs font-mono text-neutral-300"
                  >
                    <Tag className="h-3 w-3 text-brand-orange" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-neutral-400">
              Built with precision & 60fps rigor
            </span>

            <button
              onClick={onClose}
              className="rounded-full bg-brand-orange px-6 py-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-white transition-all hover:bg-brand-flame hover:shadow-[0_0_25px_rgba(255,77,0,0.4)]"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
