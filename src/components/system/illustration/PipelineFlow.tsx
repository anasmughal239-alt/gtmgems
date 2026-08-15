import { LeadPipelineTable } from "./LeadPipelineTable";

/**
 * The flow-diagram pattern from scrapeloop.com's hero — a source card feeding
 * a central engine feeding a table, with arrows branching out to channel
 * cards carrying routing labels — recreated with gtmgems' own tokens and
 * gtmgems' own two real channels (email + LinkedIn; no SMS/GoHighLevel-style
 * claims Scrapeloop makes for itself).
 *
 * Fixed 1040×380 stage so the connector SVG's coordinates stay meaningful;
 * wrapped in overflow-x-auto on small screens rather than scaled, matching
 * the precedent already set by BenchmarkTable for wide fixed-width content.
 */

function NodeCard({
  eyebrow,
  title,
  detail,
  className,
}: {
  eyebrow: string;
  title: string;
  detail: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute w-[240px] rounded-[8px] border border-border-sub bg-background-main p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)] ${className ?? ""}`}
    >
      <span className="font-paper text-[9px]/4 font-medium uppercase tracking-[0.05em] text-text-soft">
        {eyebrow}
      </span>
      <p className="mt-1.5 text-sm/5 font-medium text-text-main">{title}</p>
      <p className="mt-1 text-xs/4 text-text-sub">{detail}</p>
    </div>
  );
}

function RouteLabel({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <span
      className={`absolute w-fit rounded-full border border-border-sub bg-background-main px-2.5 py-1 font-paper text-[9px]/4 font-medium tracking-[0.02em] text-text-sub shadow-[0_1px_2px_rgba(0,0,0,0.03)] ${className ?? ""}`}
    >
      {children}
    </span>
  );
}

export function PipelineFlow() {
  return (
    <div className="overflow-x-auto">
      <div className="relative h-[380px] w-[1040px]">
        {/* connector lines, drawn behind everything */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1040 380"
          className="pointer-events-none absolute inset-0 size-full"
        >
          {/* source -> engine */}
          <path
            d="M 236 70 L 300 70"
            stroke="var(--color-border-primary)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrow)"
          />
          {/* engine -> queue */}
          <path
            d="M 356 70 L 420 70"
            stroke="var(--color-border-primary)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrow)"
          />
          {/* queue -> email card */}
          <path
            d="M 720 60 C 780 60, 780 60, 800 60"
            stroke="var(--color-border-primary)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrow)"
          />
          {/* queue -> linkedin card */}
          <path
            d="M 720 230 C 780 230, 780 260, 800 280"
            stroke="var(--color-border-primary)"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrow)"
          />
          {/* email -> linkedin, "no reply" loop */}
          <path
            d="M 920 130 C 960 170, 960 220, 920 260"
            stroke="var(--color-border-primary)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            fill="none"
            markerEnd="url(#arrow)"
          />
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--color-border-primary)" />
            </marker>
          </defs>
        </svg>

        <NodeCard
          eyebrow="Signal sweep"
          title="Weekly, automatic"
          detail="9 weighted triggers scored against every account in market."
          className="left-0 top-[46px]"
        />

        {/* animated engine node — plain CSS animation, no client JS needed */}
        <div className="absolute left-[300px] top-[46px] flex size-14 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-brand/30" />
          <span className="absolute inset-0 animate-ping rounded-full border border-brand/40 [animation-duration:2.5s]" />
          <span className="relative flex size-8 items-center justify-center rounded-full bg-[rgba(31,167,122,0.12)] text-brand">
            <svg viewBox="0 0 16 16" fill="none" className="size-4">
              <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </span>
        </div>

        <LeadPipelineTable
          compact
          className="absolute left-[420px] top-0 w-[300px]"
        />

        <RouteLabel className="left-[725px] top-[48px] text-brand">
          email verified
        </RouteLabel>
        <NodeCard
          eyebrow="Cold email"
          title="Sequence, from a real person"
          detail="Verified sends only. 3 inboxes per domain, warmed."
          className="left-[800px] top-[20px]"
        />

        <RouteLabel className="left-[725px] top-[218px]">
          no reply after sequence
        </RouteLabel>
        <NodeCard
          eyebrow="LinkedIn DM"
          title="Connect + message"
          detail="Runs when the email sequence gets silence, not before."
          className="left-[800px] top-[260px]"
        />

        <RouteLabel className="left-[930px] top-[190px] text-brand">
          qualified → CRM
        </RouteLabel>
      </div>
    </div>
  );
}
