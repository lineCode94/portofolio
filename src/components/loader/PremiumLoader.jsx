import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function PremiumLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [phase, setPhase] = useState("drawing"); // drawing -> glowing

  const mPathRef = useRef(null);
  const zPathRef = useRef(null);
  const [lengths, setLengths] = useState({ m: 1000, z: 1000 }); // fallback

  useEffect(() => {
    if (mPathRef.current && zPathRef.current) {
      setLengths({
        m: mPathRef.current.getTotalLength(),
        z: zPathRef.current.getTotalLength(),
      });
    }
  }, []);

  // 1. Natural progress simulation matching smooth interface timing
  useEffect(() => {
    let timeoutId;
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsCompleted(true);
          setPhase("glowing");
          timeoutId = setTimeout(() => {
            if (onComplete) onComplete();
          }, 1500); // Hold to show full glow before fade out
          return 100;
        }

        const remaining = 100 - prev;
        const increment = Math.max(
          1,
          Math.floor(Math.random() * (remaining * 0.18)),
        );
        timeoutId = setTimeout(updateProgress, Math.random() * 90 + 40);
        return prev + increment;
      });
    };

    timeoutId = setTimeout(updateProgress, 300);
    return () => clearTimeout(timeoutId);
  }, [onComplete]);

  // 2. Custom Cubic Bezier for Luxury Handoffs
  const easeInOutCubic = [0.65, 0, 0.35, 1];

  const mOffset = lengths.m - (progress / 100) * lengths.m;
  const zOffset = lengths.z - (progress / 100) * lengths.z;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
      transition={{ duration: 0.8, ease: easeInOutCubic }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg-main)", // Seamless transition to theme
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "240px",
          height: "240px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* --- PREMIUM COMPREHENSIVE LIGHTING SYSTEM --- */}
        <div
          style={{
            position: "absolute",
            width: "160px",
            height: "160px",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, rgba(6, 182, 212, 0.04) 65%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(28px)",
            pointerEvents: "none",
            transition: "opacity 1s ease",
            opacity: phase === "glowing" ? 1 : 0.4,
          }}
        />

        {/* --- RE-ENGINEERED ICON SYSTEM (CODE MONOGRAM) --- */}
        <motion.div
          animate={{ scale: isCompleted ? 1.05 : 1 }}
          transition={{ duration: 1.2, ease: easeInOutCubic }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <svg
            viewBox="0 0 500 400"
            style={{
              width: "100%",
              height: "100%",
              overflow: "visible",
              fill: "none",
            }}
          >
            <defs>
              <linearGradient id="loadMGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
              <linearGradient id="loadZGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="100%" stopColor="#7C3AED" />
              </linearGradient>
              <filter id="loadNeonGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4" result="blur1" />
                <feGaussianBlur stdDeviation="12" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g fill="none" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
              <motion.path
                ref={mPathRef}
                d="M 90 130 L 30 200 L 90 270 M 130 270 L 130 130 L 170 200 L 210 130 L 210 270"
                stroke="url(#loadMGrad)"
                strokeDasharray={lengths.m}
                strokeDashoffset={mOffset}
                style={{
                  transition: "stroke-dashoffset 0.1s linear",
                  filter: phase === "glowing" ? "url(#loadNeonGlow)" : "none",
                }}
              />
              <motion.path
                ref={zPathRef}
                d="M 250 130 L 310 130 L 250 270 L 310 270 M 340 280 L 380 120 M 410 130 L 470 200 L 410 270"
                stroke="url(#loadZGrad)"
                strokeDasharray={lengths.z}
                strokeDashoffset={zOffset}
                style={{
                  transition: "stroke-dashoffset 0.1s linear",
                  filter: phase === "glowing" ? "url(#loadNeonGlow)" : "none",
                }}
              />
            </g>
          </svg>
        </motion.div>

        {/* Minimal Monospace Percentage Text Indicator */}
        <motion.p
          animate={{ opacity: isCompleted ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          style={{
            position: "absolute",
            bottom: "0px",
            fontSize: "11px",
            fontFamily: "var(--font-mono)",
            fontWeight: "600",
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
            margin: 0,
            userSelect: "none",
          }}
        >
          {isCompleted ? "100%" : String(Math.round(progress)).padStart(2, "0") + "%"}
        </motion.p>
      </div>
    </motion.div>
  );
}
