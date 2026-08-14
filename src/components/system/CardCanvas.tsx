"use client";

import { useEffect, useRef } from "react";

/**
 * mintlify.com paints a bespoke <canvas> animation inside each feature card
 * (15 across the page). None of that source is recoverable from the DOM, so
 * this is an original stand-in that keeps the same visual language — sparse
 * brand-green geometry drifting over the card's warm background.
 *
 * Documented approximation, not a pixel match. See QA_REPORT.md.
 */
export type CardCanvasVariant = "grid" | "orbit" | "wave" | "pulse";

const BRAND = "12, 140, 94";
const MINT = "24, 226, 153";

export function CardCanvas({
  variant = "grid",
  className,
}: {
  variant?: CardCanvasVariant;
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const time = t * 0.001;

      if (variant === "grid") {
        const step = 32;
        ctx.strokeStyle = `rgba(${BRAND}, 0.07)`;
        ctx.lineWidth = 1;
        for (let x = (time * 8) % step; x < w; x += step) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
        }
        for (let y = 0; y < h; y += step) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
        }
      }

      if (variant === "orbit") {
        const cx = w / 2;
        const cy = h * 0.42;
        for (let i = 1; i <= 4; i++) {
          const r = i * Math.min(w, h) * 0.11;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${BRAND}, ${0.12 - i * 0.02})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          const a = time * (0.4 / i) + i;
          ctx.beginPath();
          ctx.arc(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${MINT}, 0.75)`;
          ctx.fill();
        }
      }

      if (variant === "wave") {
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          for (let x = 0; x <= w; x += 6) {
            const y =
              h * 0.45 +
              Math.sin(x * 0.012 + time * 0.6 + i * 0.7) * (10 + i * 5) +
              i * 14;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(${BRAND}, ${0.18 - i * 0.025})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      if (variant === "pulse") {
        const cx = w / 2;
        const cy = h * 0.44;
        for (let i = 0; i < 3; i++) {
          const p = (time * 0.35 + i / 3) % 1;
          ctx.beginPath();
          ctx.arc(cx, cy, p * Math.min(w, h) * 0.45, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${MINT}, ${0.35 * (1 - p)})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(cx, cy, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${BRAND}, 0.8)`;
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      frame = window.requestAnimationFrame(loop);
    };

    resize();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) draw(0);
    else frame = window.requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [variant]);

  return <canvas ref={ref} aria-hidden="true" className={className} />;
}
