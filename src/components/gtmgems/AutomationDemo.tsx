import { WorkflowExplorer } from "@/components/system/illustration/WorkflowExplorer";
import { STAGE_COLORS } from "@/components/system/illustration/stageColors";
import { Eyebrow, SectionShell } from "./ui/SectionShell";

/**
 * "What it actually looks like running" -- a numbered stage explorer
 * (Airtable's "01/02/03" feature-nav pattern, read-only inspection, not
 * cloned) replacing the old single flow diagram. Every stage of the real
 * pipeline gets its own tab and detail card, closing two gaps the old
 * diagram had: no explicit Enrich/Verify stage, and an orphaned
 * "qualified -> CRM" label with nowhere to land.
 */
export function AutomationDemo() {
  return (
    <SectionShell id="how-it-runs">
      <div className="flex flex-col gap-4">
        <Eyebrow>Process</Eyebrow>
        <h2 className="max-w-xl text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
          Six stages. Not a diagram of the idea.
        </h2>
        <p className="max-w-xl text-base/6 text-text-sub">
          Click through the pipeline the same way it actually runs: signal,
          score, enrich, sequence, route, and land in your CRM.
        </p>
      </div>

      <div className="mt-10">
        <WorkflowExplorer />
      </div>

      <div
        className="mt-8 flex flex-col items-start gap-3 rounded-[1.5rem] p-6 sm:flex-row sm:items-center"
        style={{ backgroundColor: STAGE_COLORS.linkedin.bg }}
      >
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="size-5 shrink-0"
          style={{ color: STAGE_COLORS.linkedin.hex }}
        >
          <path
            d="M8 1.5 9.6 5.9 14 7.5 9.6 9.1 8 13.5 6.4 9.1 2 7.5 6.4 5.9 8 1.5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
        <p className="text-sm/6 text-text-main">
          <span className="font-medium">Nothing gets one shot.</span> An
          account that ignores the full email sequence drops to LinkedIn, not
          because a rule guesses it should, but because it already
          didn&apos;t reply.
        </p>
      </div>
    </SectionShell>
  );
}
