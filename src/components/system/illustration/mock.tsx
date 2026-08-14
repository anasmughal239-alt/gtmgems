import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Building blocks for the "automation" illustrations on Mintlify's feature
 * cards — abstracted product UI rendered as plain DOM, not screenshots.
 *
 * All measurements are lifted from mintlify.com/startups. The originals are
 * absolutely positioned at fixed pixel offsets inside a fixed-size stage that
 * is then scaled per breakpoint, which is what keeps the composition identical
 * at every viewport instead of reflowing. IllustrationStage reproduces that.
 */

/**
 * Fixed-size canvas for an illustration, centred in its card and scaled — not
 * reflowed — on small screens. Children position themselves absolutely against
 * `width` × `height`.
 *
 * Tailwind v4 composes translate and scale utilities into a single transform,
 * so the centring and the responsive scale coexist on one element.
 */
export function IllustrationStage({
  width,
  height,
  top = "38%",
  scaleClass = "scale-[0.36] sm:scale-[0.52] lg:scale-100",
  className,
  children,
}: {
  width: number;
  height: number;
  /** Vertical anchor within the card. The live cards use 36-40%. */
  top?: string;
  /** Responsive scale utilities applied to the stage. */
  scaleClass?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none"
    >
      <div
        className={cn(
          "absolute left-1/2 -translate-x-1/2 -translate-y-1/2",
          scaleClass,
          className,
        )}
        style={{ top, width, height }}
      >
        {children}
      </div>
    </div>
  );
}

/** Shared absolute-placement props for pieces inside a stage. */
interface Placed {
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  className?: string;
}

const place = ({ left, right, top, bottom }: Placed): CSSProperties => ({
  left,
  right,
  top,
  bottom,
});

/** A rounded product-window panel. */
export function MockWindow({
  width,
  height,
  radius = 11.5,
  className,
  children,
  ...pos
}: Placed & {
  width: number | string;
  height: number | string;
  radius?: number;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute border border-background-tertiary bg-background-primary",
        className,
      )}
      style={{ ...place(pos), width, height, borderRadius: radius }}
    >
      {children}
    </div>
  );
}

/**
 * A skeleton content bar. The live cards use 6px tall bars at 50% opacity for
 * body lines, and taller pills for chrome.
 */
export function MockBar({
  width,
  height = 6,
  tone = "muted",
  radius,
  className,
  ...pos
}: Placed & {
  width: number | string;
  height?: number;
  /** `muted` = grey skeleton, `accent` = brand green, `strong` = darker grey. */
  tone?: "muted" | "accent" | "strong";
  radius?: number;
}) {
  return (
    <span
      className={cn(
        "absolute",
        radius === undefined && "rounded-full",
        tone === "muted" && "bg-background-tertiary opacity-50",
        tone === "accent" && "bg-mint-dark",
        tone === "strong" && "bg-background-gray-emphasis",
        className,
      )}
      style={{ ...place(pos), width, height, borderRadius: radius }}
    />
  );
}

/** The rounded-square brand badge that fronts each mock row. */
export function MockBadge({
  size = 23,
  radius = 9,
  className,
  children,
  ...pos
}: Placed & {
  size?: number;
  radius?: number;
  children?: ReactNode;
}) {
  const positioned =
    pos.left !== undefined ||
    pos.right !== undefined ||
    pos.top !== undefined ||
    pos.bottom !== undefined;

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center bg-mint-dark text-white",
        positioned && "absolute",
        className,
      )}
      style={{ ...place(pos), width: size, height: size, borderRadius: radius }}
    >
      {children}
    </span>
  );
}

/** An on-state pill switch. */
export function MockToggle({
  width = 33,
  height = 19,
  on = true,
  className,
}: {
  width?: number;
  height?: number;
  on?: boolean;
  className?: string;
}) {
  const knob = height - 4;
  return (
    <span
      className={cn(
        "relative inline-block shrink-0 rounded-full",
        on ? "bg-mint-dark" : "bg-background-tertiary",
        className,
      )}
      style={{ width, height }}
    >
      <span
        className="absolute rounded-full bg-white"
        style={{
          width: knob,
          height: knob,
          top: 2,
          left: on ? width - knob - 2 : 2,
        }}
      />
    </span>
  );
}

/**
 * A labelled control row — badge, label, trailing toggle. This is the
 * "Update config" row on the live site.
 */
export function MockControlRow({
  label,
  icon,
  width,
  height = 51,
  radius = 19,
  className,
  ...pos
}: Placed & {
  label: string;
  icon?: ReactNode;
  width: number | string;
  height?: number;
  radius?: number;
}) {
  return (
    <div
      className={cn(
        "absolute flex items-center border border-background-tertiary bg-background-primary pl-[13px] pr-5",
        className,
      )}
      style={{ ...place(pos), width, height, borderRadius: radius }}
    >
      <MockBadge>{icon}</MockBadge>
      <span className="ml-[9px] text-[17px]/[19px] font-medium text-background-tertiary">
        {label}
      </span>
      <MockToggle className="ml-auto" />
    </div>
  );
}

/** A dashed brand-green connector for wiring two mock panels together. */
export function MockConnector({
  width,
  height,
  vertical = false,
  className,
  ...pos
}: Placed & {
  width?: number | string;
  height?: number | string;
  vertical?: boolean;
}) {
  return (
    <span
      className={cn("absolute opacity-60", className)}
      style={{
        ...place(pos),
        width: vertical ? 0 : width,
        height: vertical ? height : 0,
        borderTop: vertical ? undefined : "1px dashed rgb(24,226,153)",
        borderLeft: vertical ? "1px dashed rgb(24,226,153)" : undefined,
      }}
    />
  );
}
