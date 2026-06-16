import React from "react";
import { motion } from "framer-motion";

export default function PortfolioHome() {
  // SVG Signature Drawing Variables
  const signatureVariants = {
    hidden: { strokeDashoffset: 500, strokeDasharray: 500 },
    visible: {
      strokeDashoffset: 0,
      transition: { duration: 1.8, ease: [0.6, 0.05, 0.1, 0.9] },
    },
  };

  const heroElementVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-[#070913] text-slate-100 flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/5 to-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* --- MZ HANDWRITING ANIMATION --- */}
      <div className="w-40 h-24 mb-6 flex items-center justify-center text-cyan-400">
        <svg viewBox="0 0 200 100" className="w-full h-full fill-none stroke-current stroke-[3.5] stroke-linecap-round stroke-linejoin-round">
          {/* Custom designed paths representing 'M' and 'Z' seamlessly written */}
          <motion.path
            d="M 20 70 L 45 25 L 65 65 L 85 20 L 95 75 C 105 75, 120 25, 135 25 L 175 25 L 125 75 L 180 75"
            variants={signatureVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>

      {/* --- HERO CONTENT REVEALS POST SIGNATURE --- */}
      <motion.div 
        className="text-center max-w-xl"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15, delayChildren: 1.6 } }
        }}
      >
        <motion.h1 
          variants={heroElementVariants}
          className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400"
        >
          Designing Digital Systems.
        </motion.h1>
        
        <motion.p 
          variants={heroElementVariants}
          className="mt-4 text-base md:text-lg text-slate-400 font-normal leading-relaxed max-w-md mx-auto"
        >
          Senior Frontend Engineer specializing in advanced interactions, creative interfaces, and robust system architecture.
        </motion.p>

        <motion.div variants={heroElementVariants} className="mt-8 flex justify-center gap-4">
          <button className="px-5 py-2.5 rounded-full bg-white text-black font-medium text-sm hover:bg-slate-200 transition-colors duration-200 shadow-lg shadow-white/5">
            View Projects
          </button>
          <button className="px-5 py-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-800 transition-colors duration-200">
            Get in touch
          </button>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
