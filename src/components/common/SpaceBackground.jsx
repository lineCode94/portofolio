import React, { useEffect, useRef } from 'react';
import './SpaceBackground.scss';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Reduce particle count on mobile for performance
    const particleCount = window.innerWidth < 768 ? 60 : 150;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.15, // very slow floating
          vy: (Math.random() - 0.5) * 0.15,
          alpha: Math.random() * 0.6 + 0.1,
          alphaChange: (Math.random() * 0.01) - 0.005, // subtle twinkling
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
      
      if (isLightMode) {
        // Skip drawing entirely to remove the background in light mode
        animationFrameId = requestAnimationFrame(drawParticles);
        return;
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        
        // Fading / Twinkling
        p.alpha += p.alphaChange;
        if (p.alpha <= 0.1 || p.alpha >= 0.8) {
          p.alphaChange = -p.alphaChange;
        }
        
        // Wrap around edges to keep continuous flow
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // White/blue glow for dark mode
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.shadowColor = 'rgba(199, 210, 254, 0.8)';
        ctx.shadowBlur = p.radius * 3;
        
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };
    
    window.addEventListener('resize', resizeCanvas);
    
    // Initial setup
    resizeCanvas();
    initParticles();
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="space-background" />;
};

export default SpaceBackground;
