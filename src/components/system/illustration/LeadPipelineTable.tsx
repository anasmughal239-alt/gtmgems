import { cn } from "@/lib/utils";
import { STATUS_COLORS } from "./stageColors";

/**
 * A literal (not abstract) mocked data table — pipeline stage per row.
 *
 * Structural pattern borrowed from scrapeloop.com's live lead table
 * (read-only inspection, not cloned): rounded-full status pills, small
 * semibold labels, monospace data cells. Recolored per Airtable's actual
 * multi-hue status-coding convention (read-only inspection of airtable.com's
 * inline SVG palette) instead of a single green/grey binary — each outcome
 * gets its own hue, the way Airtable colors a status column.
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
  const c = STATUS_COLORS[status];
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px]/4 font-semibold tracking-[0.01em]"
      style={{ backgroundColor: c.bg, color: c.hex }}
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
        "overflow-hidden rounded-[14px] border border-border-sub bg-background-main shadow-[0_2px_8px_rgba(20,25,35,0.06)]",
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
