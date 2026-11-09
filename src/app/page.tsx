"use client";

import React, { useState } from "react";
import { ScrollyCanvas } from "@/components/CanvasScroller/ScrollyCanvas";
import { Overlay } from "@/components/CanvasScroller/Overlay";
import { Preloader } from "@/components/CanvasScroller/Preloader";
import { TeamProfiles } from "@/components/Portfolio/TeamProfiles";
import { TeamFlipCards } from "@/components/Portfolio/TeamFlipCards";
import { ProjectsSection } from "@/components/Portfolio/ProjectsSection";
import { ColorGradeSlider } from "@/components/Video/ColorGradeSlider";
import { DeveloperTerminal } from "@/components/Code/DeveloperTerminal";
import { Capabilities } from "@/components/Portfolio/Capabilities";
import { Philosophy } from "@/components/Portfolio/Philosophy";
import { Experience } from "@/components/Portfolio/Experience";
import { Contact } from "@/components/Portfolio/Contact";
import { Footer } from "@/components/Portfolio/Footer";

export default function HomePage() {
  const [loadedFrames, setLoadedFrames] = useState(0);
  const totalFrames = 180;

  return (
    <>
      {/* 2K Cinematic Sequence Preloader */}
      <Preloader loaded={loadedFrames} total={totalFrames} />

      {/* Scrollytelling 500vh Sticky Canvas & SRA Trio Parallax Overlay */}
      <ScrollyCanvas
        totalFrames={totalFrames}
        onLoadingProgress={(loaded) => setLoadedFrames(loaded)}
      >
        <Overlay />
      </ScrollyCanvas>

      {/* SRA Neural Core Collective Portrait Showcase */}
      <TeamProfiles />

      {/* Interactive 3D Flip Card Component: Shaikh Zubaid Hussain, Rahul, Ashish */}
      <TeamFlipCards />

      {/* Dynamic Team Projects Showcase by Member Domain */}
      <ProjectsSection />

      {/* Signature Module 1: DaVinci Resolve Color Science Comparison Slider */}
      <div id="color-grade">
        <ColorGradeSlider />
      </div>

      {/* Signature Module 2: SRA Neural Interactive Terminal */}
      <div id="terminal">
        <DeveloperTerminal />
      </div>

      {/* Team Capabilities Matrix: Cybersecurity, AI/ML, Core Systems */}
      <Capabilities />

      {/* SRA Neural Ethos & Impact Stats */}
      <Philosophy />

      {/* Academic & Production Journey */}
      <Experience />

      {/* Contact SRA Collective */}
      <Contact />

      {/* Footer */}
      <Footer />
    </>
  );
}
