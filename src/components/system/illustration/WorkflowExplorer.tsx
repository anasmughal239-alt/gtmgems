"use client";

import { useState } from "react";

import { LeadPipelineTable } from "./LeadPipelineTable";
import { STAGE_COLORS, type StageKey } from "./stageColors";

/**
 * Replaces PipelineFlow's role in AutomationDemo. A numbered-tab stage
 * explorer -- Airtable's "01 / 02 / 03 / 04" feature-nav pattern (read-only
 * inspection of airtable.com, not cloned) -- applied to gtmgems' pipeline so
 * every stage gets full detail without cramming it into one cluttered
 * diagram. Closes two real gaps the previous single-diagram version
 * (PipelineFlow) had: no explicit Enrich/Verify stage, and an orphaned
 * "qualified -> CRM" label with no CRM node to land on.
 *
 * All copy below is already-published fact (SignalLibrary, channel-content,
 * WHAT_WE_BUILD) -- no new numbers invented for this view.
 */

const STAGES: {
  key: StageKey;
  title: string;
  description: string;
}[] = [
  {
    key: "signal",
    title: "Signal",
    description:
      "9 weighted triggers scored against every account in market -- funding raised, a new VP Sales hire, an open SDR req, and 6 more.",
  },
  {
    key: "score",
    title: "Score",
    description:
      "Weighted total clears the threshold: enriched and verified. Otherwise, discarded -- most accounts never reach a sequence.",
  },
  {
    key: "enrich",
    title: "Enrich + verify",
    description:
      "Contact found, email verified, before it ever reaches a sequence. A row that fails verification doesn't get sent.",
  },
  {
    key: "email",
    title: "Email",
    description:
      "Sequence, from a real person. Verified sends only, 3 inboxes per domain, warmed for 14-21 days before the first live send.",
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    description:
      "Connect + message. Runs when the email sequence gets silence, not before. A reply halts the sequence immediately.",
  },
  {
    key: "crm",
    title: "CRM",
    description:
      "A qualified reply pushes straight through: ICP cleared, authority confirmed, a specific next step taken.",
  },
];

export function WorkflowExplorer() {
  const [active, setActive] = useState<StageKey>("signal");
  const stage = STAGES.find((s) => s.key === active) ?? STAGES[0];
  const color = STAGE_COLORS[stage.key];

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
      <nav className="flex shrink-0 gap-1 overflow-x-auto lg:w-56 lg:flex-col lg:overflow-visible">
        {STAGES.map((s, i) => {
          const c = STAGE_COLORS[s.key];
          const isActive = s.key === active;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(s.key)}
              className="flex shrink-0 items-center gap-3 rounded-[10px] px-3 py-2.5 text-left transition-colors duration-200"
              style={{
                backgroundColor: isActive ? c.bg : "transparent",
              }}
            >
              <span
                className="flex size-6 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: isActive ? c.hex : "transparent",
                  color: isActive ? "#fff" : c.hex,
                  border: isActive ? "none" : `1.5px solid ${c.hex}`,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="whitespace-nowrap text-sm font-medium"
                style={{ color: isActive ? c.hex : "var(--color-text-main)" }}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="flex-1">
        <div
          className="rounded-[20px] border border-border-sub bg-background-main p-6 shadow-[0_2px_12px_rgba(20,25,35,0.05)] lg:p-8"
          style={{ borderColor: color.hex + "33" }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em]"
            style={{ backgroundColor: color.bg, color: color.hex }}
          >
            Stage {String(STAGES.indexOf(stage) + 1).padStart(2, "0")}
          </span>
          <p className="mt-4 max-w-md text-base/6 text-text-main">
            {stage.description}
          </p>

          <div className="mt-6">
            <LeadPipelineTable compact />
          </div>
        </div>
      </div>
    </div>
  );
}
