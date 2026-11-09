"use client";

import React, { useEffect, useRef, useState, useCallback, createContext, useContext } from "react";
import { useScroll, useMotionValueEvent, useSpring, MotionValue } from "framer-motion";

interface ScrollyContextType {
  scrollYProgress: MotionValue<number>;
}

const ScrollyContext = createContext<ScrollyContextType | null>(null);

export const useScrolly = () => {
  const ctx = useContext(ScrollyContext);
  return ctx;
};

interface ScrollyCanvasProps {
  totalFrames?: number;
  onProgressUpdate?: (progress: number) => void;
  onLoadingProgress?: (loaded: number, total: number) => void;
  children?: React.ReactNode | ((scrollYProgress: MotionValue<number>) => React.ReactNode);
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({
  totalFrames = 180,
  onProgressUpdate,
  onLoadingProgress,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);
  const [isFirstFrameLoaded, setIsFirstFrameLoaded] = useState(false);

  // Framer Motion scroll tracking over the 500vh container
  const { scrollYProgress: rawScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Inertia spring smoothing for buttery 60-120 FPS glide without discrete wheel jumps
  const smoothProgress = useSpring(rawScrollProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.22,
    restDelta: 0.0001,
  });

  // Object-fit: cover calculation helper
  const drawImageCover = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement
  ) => {
    const w = canvas.width;
    const h = canvas.height;
    const imgW = img.naturalWidth || img.width;
    const imgH = img.naturalHeight || img.height;

    if (imgW === 0 || imgH === 0) return;

    const imgAspect = imgW / imgH;
    const canvasAspect = w / h;

    let renderW = w;
    let renderH = h;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasAspect > imgAspect) {
      renderW = w;
      renderH = w / imgAspect;
      offsetY = (h - renderH) / 2;
    } else {
      renderH = h;
      renderW = h * imgAspect;
      offsetX = (w - renderW) / 2;
    }

    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, w, h);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, imgW, imgH, offsetX, offsetY, renderW, renderH);
  };

  // 60 FPS Tri-Member Neural & Color HUD Overlay drawn directly on canvas
  const drawTriMemberHUD = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    progress: number
  ) => {
    const w = canvas.width;
    const h = canvas.height;

    // Pulse animation based on time & progress
    const t = Date.now() * 0.003;
    const pulse = 0.5 + 0.5 * Math.sin(t);

    // Positions for the 3 members across the screen
    // Member 1 (S - Shourya, Left), Member 2 (R - Rahul Patar, Center), Member 3 (A - Aman, Right)
    const yCenter = h * 0.46;
    const p1 = { x: w * 0.22, y: yCenter + Math.sin(progress * 6 + 0) * 15 };
    const p2 = { x: w * 0.50, y: yCenter - 25 + Math.cos(progress * 6 + 2) * 15 };
    const p3 = { x: w * 0.78, y: yCenter + Math.sin(progress * 6 + 4) * 15 };

    // 1. Draw neural synaptic interconnect lines linking the three boys
    ctx.save();
    ctx.lineWidth = Math.max(1, w * 0.0008);

    // Line 1 -> 2 (Cyber Emerald / Amber gradient)
    const grad1 = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
    grad1.addColorStop(0, "rgba(0, 255, 157, 0.35)");
    grad1.addColorStop(0.5, `rgba(255, 140, 0, ${0.3 + 0.25 * pulse})`);
    grad1.addColorStop(1, "rgba(255, 140, 0, 0.25)");

    ctx.strokeStyle = grad1;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.bezierCurveTo(p1.x + (p2.x - p1.x) * 0.5, p1.y - 40, p2.x - (p2.x - p1.x) * 0.5, p2.y + 40, p2.x, p2.y);
    ctx.stroke();

    // Line 2 -> 3
    const grad2 = ctx.createLinearGradient(p2.x, p2.y, p3.x, p3.y);
    grad2.addColorStop(0, "rgba(255, 34, 0, 0.25)");
    grad2.addColorStop(0.5, `rgba(255, 77, 0, ${0.3 + 0.25 * pulse})`);
    grad2.addColorStop(1, "rgba(255, 140, 0, 0.25)");

    ctx.strokeStyle = grad2;
    ctx.beginPath();
    ctx.moveTo(p2.x, p2.y);
    ctx.bezierCurveTo(p2.x + (p3.x - p2.x) * 0.5, p2.y + 40, p3.x - (p3.x - p2.x) * 0.5, p3.y - 40, p3.x, p3.y);
    ctx.stroke();

    // 2. Member biometric telemetry tracking brackets
    const drawMemberTarget = (
      pt: { x: number; y: number },
      initial: string,
      label: string,
      sub: string,
      accent: string
    ) => {
      const boxSize = Math.max(45, w * 0.045);
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.2;

      // Outer targeting brackets
      const arm = boxSize * 0.25;
      // Top-left
      ctx.beginPath();
      ctx.moveTo(pt.x - boxSize, pt.y - boxSize + arm);
      ctx.lineTo(pt.x - boxSize, pt.y - boxSize);
      ctx.lineTo(pt.x - boxSize + arm, pt.y - boxSize);
      ctx.stroke();

      // Top-right
      ctx.beginPath();
      ctx.moveTo(pt.x + boxSize - arm, pt.y - boxSize);
      ctx.lineTo(pt.x + boxSize, pt.y - boxSize);
      ctx.lineTo(pt.x + boxSize, pt.y - boxSize + arm);
      ctx.stroke();

      // Bottom-left
      ctx.beginPath();
      ctx.moveTo(pt.x - boxSize, pt.y + boxSize - arm);
      ctx.lineTo(pt.x - boxSize, pt.y + boxSize);
      ctx.lineTo(pt.x - boxSize + arm, pt.y + boxSize);
      ctx.stroke();

      // Bottom-right
      ctx.beginPath();
      ctx.moveTo(pt.x + boxSize - arm, pt.y + boxSize);
      ctx.lineTo(pt.x + boxSize, pt.y + boxSize);
      ctx.lineTo(pt.x + boxSize, pt.y + boxSize - arm);
      ctx.stroke();

      // Center glowing neural node
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Telemetry label
      ctx.font = `${Math.max(10, Math.round(w * 0.009))}px monospace`;
      ctx.fillStyle = "rgba(240, 240, 240, 0.75)";
      ctx.fillText(`[${initial}] ${label}`, pt.x - boxSize, pt.y + boxSize + 16);

      ctx.font = `${Math.max(8, Math.round(w * 0.0075))}px monospace`;
      ctx.fillStyle = "rgba(255, 140, 0, 0.65)";
      ctx.fillText(sub, pt.x - boxSize, pt.y + boxSize + 28);
    };

    // Draw only with subtle opacity based on scroll state
    if (progress < 0.95) {
      drawMemberTarget(p1, "S", "SHAIKH // CYBERSEC", "PENETRATION • NIDS", "rgba(0, 255, 157, 0.85)");
      drawMemberTarget(p2, "R", "RAHUL // AI & VISION", "PYTORCH • NEURAL", "rgba(255, 140, 0, 0.75)");
      drawMemberTarget(p3, "A", "ASHISH // CSE SYSTEMS", "C++ • COMPILERS", "rgba(255, 170, 0, 0.65)");
    }

    // 3. Ambient Deep Red & Cinematic Amber rim glow at the edges
    const rimGrad = ctx.createRadialGradient(w / 2, h / 2, h * 0.4, w / 2, h / 2, w * 0.75);
    rimGrad.addColorStop(0, "transparent");
    rimGrad.addColorStop(0.7, "rgba(255, 34, 0, 0.03)");
    rimGrad.addColorStop(1, "rgba(255, 77, 0, 0.08)");
    ctx.fillStyle = rimGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.restore();
  };

  // Render a specific frame with object-fit: cover math and tri-character HUD
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Clamp index
    const clampedIndex = Math.max(0, Math.min(frameIndex, totalFrames - 1));
    const img = imagesRef.current[clampedIndex];

    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find closest loaded frame to prevent blank screen
      let fallbackImg: HTMLImageElement | null = null;
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[clampedIndex - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          fallbackImg = prev;
          break;
        }
        const next = imagesRef.current[clampedIndex + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          fallbackImg = next;
          break;
        }
      }
      if (fallbackImg) {
        drawImageCover(ctx, canvas, fallbackImg);
        drawTriMemberHUD(ctx, canvas, currentProgressRef.current);
      }
      return;
    }

    drawImageCover(ctx, canvas, img);
    drawTriMemberHUD(ctx, canvas, currentProgressRef.current);
  }, [totalFrames]);

  // Resize canvas with devicePixelRatio scaling (capped at 2 for 60 FPS performance)
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
      }
    }

    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload all 180 images into memory
  useEffect(() => {
    imagesRef.current = new Array(totalFrames).fill(null);
    let loadedCounter = 0;

    const getWebpPath = (index: number) => {
      const padded = String(index + 1).padStart(3, "0");
      return `/sequence/frame_${padded}.webp`;
    };

    const getJpgPath = (index: number) => {
      const padded = String(index + 1).padStart(3, "0");
      return `/sequence/frame_${padded}.jpg`;
    };

    // Priority load: frame 0 first for instant paint
    const firstImg = new Image();
    firstImg.src = getWebpPath(0);
    firstImg.onload = () => {
      imagesRef.current[0] = firstImg;
      loadedCounter++;
      setIsFirstFrameLoaded(true);
      handleResize();
      renderFrame(0);
      onLoadingProgress?.(loadedCounter, totalFrames);

      // Load remaining frames progressively
      for (let i = 1; i < totalFrames; i++) {
        const img = new Image();
        img.src = getWebpPath(i);
        img.onload = () => {
          imagesRef.current[i] = img;
          loadedCounter++;
          onLoadingProgress?.(loadedCounter, totalFrames);

          if (currentFrameRef.current === i) {
            renderFrame(i);
          }
        };
        img.onerror = () => {
          // Fallback to JPEG
          const fallback = new Image();
          fallback.src = getJpgPath(i);
          fallback.onload = () => {
            imagesRef.current[i] = fallback;
            loadedCounter++;
            onLoadingProgress?.(loadedCounter, totalFrames);
          };
        };
      }
    };

    firstImg.onerror = () => {
      firstImg.src = getJpgPath(0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [totalFrames, handleResize, renderFrame, onLoadingProgress]);

  // Subscribe to Framer Motion spring-smoothed scroll changes
  useMotionValueEvent(smoothProgress, "change", (latestProgress) => {
    currentProgressRef.current = latestProgress;
    onProgressUpdate?.(latestProgress);

    // Map 0 -> 1 to frame index 0 -> totalFrames - 1
    const frameIndex = Math.max(0, Math.min(Math.round(latestProgress * (totalFrames - 1)), totalFrames - 1));

    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;

      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      animationFrameIdRef.current = requestAnimationFrame(() => {
        renderFrame(frameIndex);
      });
    }
  });

  return (
    <div
      ref={containerRef}
      id="scrolly-section"
      className="relative h-[500vh] w-full bg-[#050505]"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 block h-full w-full object-cover"
          style={{
            backgroundColor: "#050505",
            opacity: isFirstFrameLoaded ? 1 : 0.4,
            transition: "opacity 0.6s ease-out",
          }}
        />

        {/* Cinematic Vignette & Edge Blending into #050505 */}
        <div className="canvas-vignette absolute inset-0 z-[5]" />

        {/* Fiery Deep Red & Amber Glow Accent that breathes with the background */}
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-brand-crimson/15 blur-[150px]" />
        <div className="pointer-events-none absolute top-10 right-1/4 h-[300px] w-[400px] rounded-full bg-brand-amber/10 blur-[130px]" />

        {/* Narrative Parallax Overlay sitting at z-10 with smoothed scroll progress */}
        <ScrollyContext.Provider value={{ scrollYProgress: smoothProgress }}>
          <div className="absolute inset-0 z-10">
            {typeof children === "function" ? children(smoothProgress) : children}
          </div>
        </ScrollyContext.Provider>
      </div>
    </div>
  );
};
