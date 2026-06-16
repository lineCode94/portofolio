import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedText — Premium text animation component.
 * Replaces the old letter-by-letter AnimatedLetters with Framer Motion.
 *
 * @param {string} text — The text to animate
 * @param {'word'|'letter'} mode — animate by word or letter
 * @param {number} delay — initial delay in seconds
 * @param {number} stagger — delay between each word/letter
 * @param {string} className — CSS class for the wrapper
 * @param {string} tag — HTML tag to render (default: 'span')
 * @param {boolean} gradient — apply gradient text effect
 */
const AnimatedText = ({
  text,
  mode = 'word',
  delay = 0,
  stagger = 0.08,
  className = '',
  tag = 'span',
  gradient = false,
  once = true,
}) => {
  const items = mode === 'word' ? text.split(' ') : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[tag] || motion.span;

  return (
    <motion.span
      className={`animated-text ${gradient ? 'gradient-text' : ''} ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.5 }}
      aria-label={text}
      style={{ display: 'inline' }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: 'inline-block',
            whiteSpace: mode === 'word' ? 'pre' : 'pre-wrap',
          }}
        >
          {mode === 'word' ? (index < items.length - 1 ? item + '\u00A0' : item) : item}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
