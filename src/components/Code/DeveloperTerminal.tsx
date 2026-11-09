"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, CornerDownLeft, Sparkles, Cpu, Shield, Code2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export const DeveloperTerminal: React.FC = () => {
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "whoami",
      output:
        "SRA NEURAL — 3-Person First-Year B.Tech CSE Collective:\n" +
        "• S - Shaikh Zubaid Hussain: Cybersecurity & Security Architect\n" +
        "• R - Rahul Patar: AI/ML Engineering & Neural Models\n" +
        "• A - Ashish Das: CSE Core Systems & Software Architecture",
    },
    {
      cmd: "team",
      output:
        "SRA NEURAL TRIO (1st Year B.Tech CSE):\n" +
        "1. [S] Shaikh Zubaid Hussain — Cybersecurity, Penetration Testing & Network Security\n" +
        "2. [R] Rahul Patar — AI/ML Engineering, Neural Models, PyTorch & Next.js\n" +
        "3. [A] Ashish Das — CSE Core, Compilers, Distributed Systems & C++ Architecture",
    },
  ]);
  const [inputVal, setInputVal] = useState("");

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const matched = PORTFOLIO_DATA.terminalCommands.find((c) => c.cmd === trimmed);
    let output = "";
    if (matched) {
      output = matched.output;
    } else if (trimmed === "help") {
      output = "Available commands: whoami, team, cyber, aiml, systems, skills, projects, contact, status, clear";
    } else {
      output = `Command not found: "${cmd}". Type "help" or "team" for a list of available commands.`;
    }

    setHistory((prev) => [...prev, { cmd, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputVal.trim()) {
      runCommand(inputVal);
    }
  };

  return (
    <section className="relative z-20 bg-[#050505] px-6 py-20 sm:px-12 md:px-20 lg:px-28 border-t border-white/10">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-amber-300 backdrop-blur-md">
            <Terminal className="h-3.5 w-3.5 text-brand-orange" />
            <span>SRA Neural Terminal Interface</span>
          </div>

          <h3 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-display">
            Neural <span className="text-gradient-fire">Terminal.</span>
          </h3>

          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl">
            Query the SRA NEURAL collective directly. Inspect Shaikh Zubaid Hussain’s cybersecurity tools, Rahul Patar’s AI/ML neural pipeline, and Ashish Das’s core C++ systems.
          </p>
        </div>

        {/* Quick Command Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-neutral-500 mr-2">Quick run:</span>
          {["whoami", "team", "cyber", "aiml", "systems", "skills", "projects", "contact", "clear"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => runCommand(cmd)}
              className="rounded-lg border border-white/10 bg-neutral-900/80 px-3 py-1 text-xs font-mono text-amber-300 hover:border-amber-500/50 hover:bg-amber-500/10 transition-colors"
            >
              $ {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className="rounded-2xl border border-red-500/30 bg-[#080808] shadow-[0_0_50px_rgba(255,34,0,0.12)] overflow-hidden font-mono text-xs sm:text-sm">
          {/* Terminal Window Bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-neutral-950 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="text-xs text-neutral-400">sra-neural@workstation:~ (zsh)</span>
            <span className="text-[11px] text-amber-400 font-bold">KALI • PYTORCH • C++20</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 space-y-4 max-h-[360px] overflow-y-auto">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-amber-400">
                  <span className="text-neutral-500">➜</span>
                  <span className="text-neutral-400">sra-neural</span>
                  <span className="text-neutral-600">git:(</span>
                  <span className="text-red-400">main</span>
                  <span className="text-neutral-600">)</span>
                  <span className="text-white">$ {item.cmd}</span>
                </div>
                <pre className="text-neutral-300 whitespace-pre-wrap pl-4 font-mono text-xs leading-relaxed border-l-2 border-white/10">
                  {item.output}
                </pre>
              </div>
            ))}

            {/* Input Row */}
            <div className="flex items-center gap-2 text-amber-400 pt-2">
              <span className="text-neutral-500">➜</span>
              <span className="text-neutral-400">sra-neural</span>
              <span className="text-neutral-600">git:(</span>
              <span className="text-red-400">main</span>
              <span className="text-neutral-600">)</span>
              <span className="text-white">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. 'cyber', 'aiml', 'systems', 'team')..."
                className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder:text-neutral-600"
                autoFocus
              />
              <CornerDownLeft className="h-4 w-4 text-neutral-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
