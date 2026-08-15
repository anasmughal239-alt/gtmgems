import type { ReactNode } from "react";

/**
 * Shared step-sequence primitives for the two channel-page hero diagrams --
 * the vertical numbered-step pattern used by Instantly/Smartlead/lemlist
 * (email) and Expandi/Waalaxy/Dripify (LinkedIn) sequence builders
 * (read-only inspection of the category, not any single product cloned),
 * restyled in gtmgems' own rounded/soft-shadow language with a per-channel
 * accent color from stageColors.ts.
 */

export function SequenceStep({
  n,
  title,
  detail,
  color,
  last = false,
}: {
  n: number;
  title: string;
  detail?: string;
  color: string;
  last?: boolean;
}) {
  return (
    <div className="relative flex gap-3">
      <div className="flex flex-col items-center">
        <span
          className="flex size-7 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-geist-mono)] text-[11px] font-semibold text-white"
          style={{ backgroundColor: color }}
        >
          {n}
        </span>
        {!last ? (
          <span
            className="mt-1 w-px flex-1"
            style={{ backgroundColor: color + "40" }}
          />
        ) : null}
      </div>
      <div className="pb-6">
        <p className="text-sm font-medium text-text-main">{title}</p>
        {detail ? (
          <p className="mt-0.5 text-xs text-text-sub">{detail}</p>
        ) : null}
      </div>
    </div>
  );
}

/** A wait/pause marker inline in the step list. */
export function WaitChip({ label, color }: { label: string; color: string }) {
  return (
    <div className="relative flex gap-3">
      <div className="flex w-7 shrink-0 justify-center">
        <span
          className="mb-1 w-px flex-1"
          style={{ backgroundColor: color + "40" }}
        />
      </div>
      <span
        className="mb-1 inline-flex w-fit items-center rounded-full px-2.5 py-0.5 font-[family-name:var(--font-geist-mono)] text-[10px] font-medium"
        style={{ backgroundColor: color + "1a", color }}
      >
        {label}
      </span>
    </div>
  );
}

/** A threshold/guardrail callout -- the hard-stop rules, distinct from the
 *  ordinary sequence steps. */
export function GuardrailNote({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <div
      className="mt-2 rounded-[10px] border-l-[3px] px-3 py-2.5 text-xs text-text-main"
      style={{ borderColor: color, backgroundColor: color + "0d" }}
    >
      {children}
    </div>
  );
}

/** A daily-quota gauge -- a labelled bar, not a bare number. */
export function CapGauge({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-[10px] bg-background-soft px-3 py-2">
      <span className="text-xs text-text-sub">{label}</span>
      <span
        className="font-[family-name:var(--font-geist-mono)] text-xs font-semibold"
        style={{ color }}
      >
        {value}
      </span>
    </div>
  );
}

export function TimelineFrame({
  eyebrow,
  color,
  children,
}: {
  eyebrow: string;
  color: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[20px] border border-border-sub bg-background-main p-6 shadow-[0_4px_20px_rgba(20,25,35,0.06)]">
      <span
        className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em]"
        style={{ backgroundColor: color + "1a", color }}
      >
        {eyebrow}
      </span>
      <div className="mt-5">{children}</div>
    </div>
  );
}
