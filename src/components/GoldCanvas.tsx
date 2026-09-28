import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  speedY: number;
  speedX: number;
  hue: number;
  twinkleSpeed: number;
}

export const GoldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = prefersReducedMotion ? 20 : 45;
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const baseRadius = Math.random() * 2 + 0.6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: baseRadius,
        baseRadius,
        alpha: Math.random() * 0.6 + 0.2,
        speedY: (Math.random() * 0.35 + 0.1) * -1,
        speedX: (Math.random() - 0.5) * 0.25,
        hue: 42 + Math.random() * 8, // warm gold
        twinkleSpeed: Math.random() * 0.02 + 0.008,
      });
    }

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        // Twinkle alpha
        const currentAlpha = Math.max(0.1, p.alpha + Math.sin(time * 2 + i) * 0.25);

        // Wrap around bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // Draw glowing particle
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
        grad.addColorStop(0, `hsla(${p.hue}, 88%, 75%, ${currentAlpha})`);
        grad.addColorStop(0.4, `hsla(${p.hue}, 85%, 55%, ${currentAlpha * 0.6})`);
        grad.addColorStop(1, `hsla(${p.hue}, 90%, 45%, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Core bright spark
        ctx.fillStyle = `rgba(255, 255, 235, ${currentAlpha * 0.9})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
};
