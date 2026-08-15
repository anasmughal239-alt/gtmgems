import { PipelineFlow } from "@/components/system/illustration/PipelineFlow";
import { Eyebrow, SectionShell } from "./ui/SectionShell";

/**
 * "What it actually looks like running" -- a flow diagram, in the pattern
 * of scrapeloop.com's hero (source -> engine -> table -> branching arrows
 * to channel cards with routing labels), restyled in gtmgems' own tokens
 * and gtmgems' own two real channels.
 */
export function AutomationDemo() {
  return (
    <SectionShell id="how-it-runs">
      <div className="flex flex-col gap-4">
        <Eyebrow>Process</Eyebrow>
        <h2 className="max-w-xl text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
          Not a diagram of the idea.
        </h2>
        <p className="max-w-xl text-base/6 text-text-sub">
          The queue and the routing logic underneath it: the same rules that
          decide whether an account gets a signal score, an email sequence,
          or a LinkedIn message next.
        </p>
      </div>

      <div className="mt-10 rounded-[2rem] bg-black/[0.03] p-1.5 ring-1 ring-black/[0.04]">
        <div className="rounded-[calc(2rem-0.375rem)] bg-background-main p-6 lg:p-10">
          <PipelineFlow />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start gap-3 rounded-[1.5rem] bg-[rgba(31,167,122,0.06)] p-6 ring-1 ring-[rgba(31,167,122,0.18)] sm:flex-row sm:items-center">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          className="size-5 shrink-0 text-brand"
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
