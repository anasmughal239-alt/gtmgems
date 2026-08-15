"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Fade-up scroll reveal, wrapping a whole section as it enters the
 * viewport. Follows design-taste-frontend's canonical scroll-reveal
 * skeleton (Section 5.C): motion/react's whileInView, not GSAP/
 * ScrollTrigger — this is a one-shot enter, not a pin/scrub.
 *
 * Motivation (per the skill's "motion must be motivated" rule): this
 * communicates arrival, not decoration — each section asserts itself as
 * its own beat in the page rather than snapping into place, which is the
 * one motion moment MOTION_INTENSITY: 7 actually requires.
 *
 * Wraps at the page-composition level (around each <Section .../> call)
 * rather than inside the shared Mintlify section components, so it
 * doesn't touch /mintlify's pixel-matched internals.
 */
export function RevealOnScroll({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
