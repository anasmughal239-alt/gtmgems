"use client";

import { useEffect, useRef } from "react";

/**
 * Hero background: a drifting field of thin green "agent traffic" streams.
 *
 * The live site paints this with a canvas whose source is not recoverable from
 * the DOM, so this is an original re-implementation of the same visual idea —
 * an approximation, not a pixel match. Stroke colours come from the site's
 * --color-gradient-green-* ramp.
 */
const STREAM_COLORS = [
  "24, 226, 153",
  "88, 233, 127",
  "109, 238, 107",
  "129, 242, 90",
  "149, 246, 72",
];

interface Stream {
  /** Vertical origin as a fraction of height. */
  y: number;
  /** Vertical travel across the full width, as a fraction of height. */
  drift: number;
  amplitude: number;
  phase: number;
  speed: number;
  width: number;
  alpha: number;
  color: string;
}

function createStreams(count: number): Stream[] {
  return Array.from({ length: count }, (_, i) => {
    const t = i / count;
    return {
      y: 0.08 + t * 0.9,
      drift: -0.55 + Math.random() * 0.35,
      amplitude: 6 + Math.random() * 26,
      phase: Math.random() * Math.PI * 2,
      speed: 0.00008 + Math.random() * 0.00022,
      width: 0.6 + Math.random() * 0.9,
      alpha: 0.1 + Math.random() * 0.28,
      color: STREAM_COLORS[i % STREAM_COLORS.length],
    };
  });
}

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const streams = createStreams(46);
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of streams) {
        const startY = s.y * height;
        const endY = startY + s.drift * height;
        const wobble = Math.sin(time * s.speed + s.phase) * s.amplitude;

        ctx.beginPath();
        ctx.moveTo(-40, startY);
        ctx.bezierCurveTo(
          width * 0.3,
          startY + wobble,
          width * 0.62,
          endY - wobble,
          width + 40,
          endY,
        );
        ctx.strokeStyle = `rgba(${s.color}, ${s.alpha})`;
        ctx.lineWidth = s.width;
        ctx.stroke();
      }
    };

    const loop = (time: number) => {
      draw(time);
      frame = window.requestAnimationFrame(loop);
    };

    resize();

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      draw(0);
    } else {
      frame = window.requestAnimationFrame(loop);
    }

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 z-0 block size-full w-full max-w-[1920px] -translate-x-1/2"
    />
  );
}
