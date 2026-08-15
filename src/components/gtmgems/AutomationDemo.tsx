import { PipelineFlow } from "@/components/system/illustration/PipelineFlow";

/**
 * "What it actually looks like running" — restructured to match
 * scrapeloop.com's actual section pattern (read-only inspection, not
 * cloned): a left-aligned intro block (not the centered-with-baseline-CTA
 * shape every other section on this page uses), full-width content below,
 * and a highlighted accent-tinted callout closing the section — the same
 * treatment scrapeloop uses to punctuate its "channels" section ("Nothing
 * gets one shot...").
 *
 * Soft background band (bg-background-soft, full-bleed border-t) breaks the
 * pure-white monotony of the surrounding Mintlify-shared sections — same
 * alternating-band pattern scrapeloop uses between every section.
 */
export function AutomationDemo() {
  return (
    <section
      id="how-it-runs"
      className="border-t border-border-line bg-background-soft"
    >
      <div className="grid-layout relative py-16 lg:py-20">
        <div className="col-span-full flex flex-col gap-4 px-7 lg:col-start-2 lg:col-end-20 lg:px-0">
          <span className="inline-flex w-fit items-center rounded-[2px] border border-border-sub bg-background-main px-2.5 py-1 text-xs/4 font-medium tracking-[0.02em] text-text-soft">
            How it runs
          </span>
          <h2 className="max-w-xl text-balance text-[1.75rem]/8 font-medium tracking-[-0.02em] text-foreground-primary lg:text-[2.25rem]/[2.5rem]">
            Not a diagram of the idea.
          </h2>
          <p className="max-w-xl text-base/6 text-text-sub">
            The queue and the routing logic underneath it — the same rules
            that decide whether an account gets a signal score, an email
            sequence, or a LinkedIn message next.
          </p>
        </div>

        <div className="col-span-full mt-10 px-7 lg:col-start-2 lg:col-end-24 lg:px-0">
          <PipelineFlow />
        </div>

        <div className="col-span-full mt-8 px-7 lg:col-start-2 lg:col-end-20 lg:px-0">
          <div className="flex flex-col items-start gap-3 rounded-[8px] border border-[rgba(31,167,122,0.2)] bg-[rgba(31,167,122,0.06)] p-5 sm:flex-row sm:items-center">
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
            <p className="text-sm/5 text-text-main">
              <span className="font-medium">
                Nothing gets one shot.
              </span>{" "}
              An account that ignores the full email sequence drops to
              LinkedIn — not because a rule guesses it should, but because it
              already didn&apos;t reply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
