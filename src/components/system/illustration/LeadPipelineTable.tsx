import { cn } from "@/lib/utils";

/**
 * A literal (not abstract) mocked data table — pipeline stage per row, styled
 * entirely with existing Mintlify-derived tokens.
 *
 * Pattern borrowed from scrapeloop.com's live lead table (read-only
 * inspection, not cloned): rounded-full status pills, small semibold labels,
 * monospace data cells. Recreated here with gtmgems' own tokens — `font-paper`
 * (Mintlify's mono, already used for Odometer/benchmark numbers) stands in for
 * their IBM Plex Mono, and the pill tint is `--color-brand-vivid` at low
 * alpha, the same `rgba(31,167,122,…)` value already used for the Hero
 * "Agent traffic"-style badge elsewhere on the page — not a new color.
 */

export type PipelineStatus = "Qualified" | "Scored" | "Discarded";

export interface PipelineRow {
  account: string;
  signal: string;
  status: PipelineStatus;
}

const DEFAULT_ROWS: PipelineRow[] = [
  { account: "Northgate Robotics", signal: "Funding raised", status: "Qualified" },
  { account: "Vantage Analytics", signal: "New VP Sales hire", status: "Scored" },
  { account: "Halcyon Systems", signal: "Open SDR req", status: "Qualified" },
  { account: "Meridian Cloud", signal: "Conference exhibitor", status: "Discarded" },
  { account: "Ferrous Data", signal: "CRM migration", status: "Scored" },
];

function StatusPill({ status }: { status: PipelineStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px]/4 font-semibold tracking-[0.01em]",
        status === "Qualified" && "bg-[rgba(31,167,122,0.12)] text-brand",
        status === "Scored" && "bg-background-tertiary text-text-sub",
        status === "Discarded" && "bg-background-tertiary text-text-soft",
      )}
    >
      {status}
    </span>
  );
}

export function LeadPipelineTable({
  rows = DEFAULT_ROWS,
  className,
  compact = false,
}: {
  rows?: PipelineRow[];
  className?: string;
  /** Tighter padding/text for use inside the hero visual slot. */
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[8px] border border-border-sub bg-background-main",
        className,
      )}
    >
      {/* window chrome, matching the mock-window treatment used elsewhere
          in the illustration system (mock.tsx's MockWindow dots) */}
      <div className="flex items-center gap-1.5 border-b border-border-sub px-3 py-2">
        <span className="size-2 rounded-full bg-background-tertiary" />
        <span className="size-2 rounded-full bg-background-tertiary" />
        <span className="size-2 rounded-full bg-background-tertiary" />
        <span className="ml-2 text-[10px]/4 font-medium tracking-[0.02em] text-text-soft">
          Signal queue
        </span>
      </div>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-border-sub">
            {["Account", "Signal", "Status"].map((h) => (
              <th
                key={h}
                className={cn(
                  "font-paper text-[9px]/4 font-medium uppercase tracking-[0.04em] text-text-soft",
                  compact ? "px-3 py-1.5" : "px-4 py-2",
                )}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border-sub">
          {rows.map((row) => (
            <tr key={row.account}>
              <td
                className={cn(
                  "whitespace-nowrap text-xs/5 font-medium text-text-main",
                  compact ? "px-3 py-1.5" : "px-4 py-2.5",
                )}
              >
                {row.account}
              </td>
              <td
                className={cn(
                  "whitespace-nowrap font-paper text-[11px]/5 text-text-sub",
                  compact ? "px-3 py-1.5" : "px-4 py-2.5",
                )}
              >
                {row.signal}
              </td>
              <td className={cn(compact ? "px-3 py-1.5" : "px-4 py-2.5")}>
                <StatusPill status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
