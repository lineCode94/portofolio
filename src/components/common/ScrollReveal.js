import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal — Wraps children with Framer Motion `whileInView` animations.
 * 
 * @param {'fadeUp'|'fadeIn'|'slideLeft'|'slideRight'|'scaleUp'} variant
 * @param {number} delay — seconds
 * @param {number} duration — seconds
 * @param {number} threshold — 0 to 1, how much must be visible
 */
const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

const ScrollReveal = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  className = '',
  style = {},
  once = true,
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // ease-out-expo
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
