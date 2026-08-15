import { FeatureCard } from "@/components/system/FeatureCard";

/**
 * The 9 weighted signal triggers, as if/then rule cards — Scrapeloop's
 * "WHEN Row created → THEN Find owner email → verify it" pattern (read-only
 * inspection, not cloned), applied to gtmgems' own scoring weights.
 *
 * A trailing 10th row closes the loop: once the weighted total clears
 * the threshold, the account is scored and enriched; otherwise discarded.
 * That's the literal "scored/discarded" outcome pattern requested — every
 * other row's THEN is a score contribution, this row's THEN is the gate.
 */

interface Rule {
  when: string;
  then: string;
  weight?: number;
}

const SIGNALS: Rule[] = [
  { when: "Funding raised recently", then: "scored", weight: 30 },
  { when: "New Head of Growth / VP Sales hire", then: "scored", weight: 25 },
  { when: "Open GTM / SDR req", then: "scored", weight: 20 },
  { when: "Job posts naming outbound tools", then: "scored", weight: 15 },
  { when: "Enterprise tier shipped", then: "scored", weight: 15 },
  { when: "Headcount growth", then: "scored", weight: 10 },
  { when: "CRM migration", then: "scored", weight: 10 },
  { when: "New product or vertical launched", then: "scored", weight: 10 },
  { when: "Conference exhibitor", then: "scored", weight: 5 },
];

const THRESHOLD_RULE: Rule = {
  when: "Weighted total clears the threshold",
  then: "enriched and verified, otherwise discarded",
};

export function SignalLibrary() {
  return (
    <section id="signals" className="border-t border-border-line bg-background-soft">
      <div className="grid-layout relative py-16 lg:py-20">
        <div className="col-span-full flex flex-col gap-4 px-7 lg:col-start-2 lg:col-end-20 lg:px-0">
          <span className="inline-flex w-fit items-center rounded-[2px] border border-border-sub bg-background-main px-2.5 py-1 text-xs/4 font-medium tracking-[0.02em] text-text-soft">
            Signals
          </span>
          <h2 className="max-w-xl text-balance text-[1.75rem]/8 font-medium tracking-[-0.02em] text-foreground-primary lg:text-[2.25rem]/[2.5rem]">
            &ldquo;Signal-based&rdquo; is what everyone says.
          </h2>
          <p className="max-w-xl text-base/6 text-text-sub">
            Here&apos;s what we actually watch: 9 triggers, weighted by how
            strongly each one predicts intent, scored against every account
            in market.
          </p>
        </div>

        {/*
          self-start: without it, this grid item's height is set by CSS
          Grid's default align-items: stretch BEFORE FeatureCard's h-full
          resolves — a circular dependency where FeatureCard then restretches
          to that pre-computed height (ignoring the callout box below it),
          and the callout renders past the row's committed box into the next
          section. self-start makes this item size to its actual content.
        */}
        <div className="col-span-full mt-10 self-start px-7 lg:col-start-2 lg:col-end-20 lg:px-0">
          <FeatureCard as="div" className="gap-0 p-0">
            <ul className="divide-y divide-border-primary">
              {SIGNALS.map((rule) => (
                <li
                  key={rule.when}
                  className="flex flex-col gap-1.5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 lg:px-8"
                >
                  <span className="flex items-baseline gap-2.5">
                    <span className="font-paper text-[10px]/4 font-semibold uppercase tracking-[0.04em] text-text-soft">
                      When
                    </span>
                    <span className="text-sm/5 text-text-main">
                      {rule.when}
                    </span>
                  </span>
                  <span className="flex items-baseline gap-2.5 sm:pl-4">
                    <span className="font-paper text-[10px]/4 font-semibold uppercase tracking-[0.04em] text-brand">
                      Then
                    </span>
                    <span className="text-sm/5 text-text-sub">
                      {rule.then}
                      {rule.weight !== undefined ? (
                        <span className="ml-1.5 font-paper text-xs/4 font-medium text-brand">
                          +{rule.weight}
                        </span>
                      ) : null}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </FeatureCard>

          <div className="mt-4 flex flex-col items-start gap-2.5 rounded-[8px] border border-[rgba(31,167,122,0.2)] bg-[rgba(31,167,122,0.06)] px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <span className="flex items-baseline gap-2.5">
              <span className="font-paper text-[10px]/4 font-semibold uppercase tracking-[0.04em] text-brand">
                When
              </span>
              <span className="text-sm/5 font-medium text-text-main">
                {THRESHOLD_RULE.when}
              </span>
            </span>
            <span className="flex items-baseline gap-2.5 sm:pl-4">
              <span className="font-paper text-[10px]/4 font-semibold uppercase tracking-[0.04em] text-brand">
                Then
              </span>
              <span className="text-sm/5 font-medium text-text-main">
                {THRESHOLD_RULE.then}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
