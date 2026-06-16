import React from "react";
import "./loader.scss";

const Loader = () => {
  return (
    <div className="premium-loader-overlay">
      <div className="premium-loader-container">
        {/* Glow behind the briefcase */}
        <div className="premium-loader-glow" />
        
        {/* Briefcase animated SVG */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#loaderGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="premium-loader-svg"
        >
          <defs>
            <linearGradient id="loaderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06d6d6" />
            </linearGradient>
          </defs>
          {/* Handle */}
          <path d="M16 16V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12" className="briefcase-handle" />
          
          {/* Main briefcase body outline */}
          <rect width="20" height="14" x="2" y="6" rx="2" className="briefcase-body" />
          
          {/* Inside documents / items glowing */}
          <path d="M12 9v4M10 11h4" className="briefcase-contents" />
        </svg>

        {/* Loading text / indicators */}
        <div className="premium-loader-text">Loading Experience</div>
      </div>
    </div>
  );
};

export default Loader;
