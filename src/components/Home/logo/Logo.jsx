import React, { useEffect, useRef, useState } from "react";
import "./logo.scss";

const Logo = () => {
  const mPathRef = useRef(null);
  const zPathRef = useRef(null);
  const [lengths, setLengths] = useState({ m: 0, z: 0 });
  const [phase, setPhase] = useState("drawing"); // drawing | glowing | idle

  useEffect(() => {
    if (mPathRef.current && zPathRef.current) {
      const mLength = mPathRef.current.getTotalLength();
      const zLength = zPathRef.current.getTotalLength();
      setLengths({ m: mLength, z: zLength });
    }

    const glowTimer = setTimeout(() => setPhase("glowing"), 4200);
    const idleTimer = setTimeout(() => setPhase("idle"), 5800);

    return () => {
      clearTimeout(glowTimer);
      clearTimeout(idleTimer);
    };
  }, []);

  const mStyle = lengths.m
    ? {
        strokeDasharray: lengths.m,
        strokeDashoffset: phase === "drawing" ? lengths.m : 0,
        transition: phase === "drawing" ? "none" : "stroke-dashoffset 1.8s ease-in-out",
      }
    : {};

  const zStyle = lengths.z
    ? {
        strokeDasharray: lengths.z,
        strokeDashoffset: phase === "drawing" ? lengths.z : 0,
        transition: phase === "drawing" ? "none" : "stroke-dashoffset 1.8s ease-in-out",
      }
    : {};

  return (
    <div className={`logo-container logo-container--${phase}`}>
      <div className="logo-grid" aria-hidden="true" />
      <div className="logo-orb logo-orb--purple" aria-hidden="true" />
      <div className="logo-orb logo-orb--cyan" aria-hidden="true" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 400"
        className="logo-svg"
        aria-label="MZ Code Monogram animation"
      >
        <defs>
          <linearGradient id="mGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="zGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
          <filter id="neonGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur1" />
            <feGaussianBlur stdDeviation="8" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g fill="none" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
          {/* Path 1: < M */}
          <path
            ref={mPathRef}
            d="M 90 130 L 30 200 L 90 270 M 130 270 L 130 130 L 170 200 L 210 130 L 210 270"
            stroke="url(#mGrad)"
            className="draw-path draw-path--m"
            style={mStyle}
            filter="url(#neonGlow)"
          />
          {/* Path 2: Z /> */}
          <path
            ref={zPathRef}
            d="M 250 130 L 310 130 L 250 270 L 310 270 M 340 280 L 380 120 M 410 130 L 470 200 L 410 270"
            stroke="url(#zGrad)"
            className="draw-path draw-path--z"
            style={zStyle}
            filter="url(#neonGlow)"
          />
        </g>
      </svg>

      <div className="sparkles" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`sparkle sparkle--${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Logo;
