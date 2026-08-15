import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Double-bezel nested card (high-end-visual-design's "Doppelrand"): an outer
 * shell (soft tint, hairline, large radius) housing an inner core (its own
 * background, inner highlight, smaller concentric radius) so cards read as
 * machined objects rather than a flat div with a border.
 */
export function GtmCard({
  className,
  innerClassName,
  accent = false,
  children,
}: {
  className?: string;
  innerClassName?: string;
  /** Soft brand-tinted variant for the "this is the one" card (e.g. the
   *  featured pricing tier). */
  accent?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] p-1.5",
        accent
          ? "bg-[rgba(31,167,122,0.12)] ring-1 ring-[rgba(31,167,122,0.18)]"
          : "bg-black/[0.03] ring-1 ring-black/[0.04]",
        className,
      )}
    >
      <div
        className={cn(
          "h-full rounded-[calc(1.75rem-0.375rem)] bg-background-main p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
          accent && "bg-[#fbfdfc]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
