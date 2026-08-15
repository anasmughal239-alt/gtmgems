import { GtmCard } from "./ui/Card";
import { Eyebrow, SectionShell } from "./ui/SectionShell";

/**
 * The 9 weighted signal triggers, as if/then rule cards -- Scrapeloop's
 * "WHEN Row created -> THEN Find owner email -> verify it" pattern
 * (read-only inspection, not cloned), applied to gtmgems' own scoring
 * weights.
 *
 * A trailing 10th row closes the loop: once the weighted total clears the
 * threshold, the account is scored and enriched; otherwise discarded.
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

function RuleRow({ rule, strong = false }: { rule: Rule; strong?: boolean }) {
  return (
    <div className="flex flex-col gap-1.5 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <span className="flex items-baseline gap-2.5">
        <span className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.08em] text-text-soft">
          When
        </span>
        <span
          className={
            strong
              ? "text-sm font-medium text-text-main"
              : "text-sm text-text-main"
          }
        >
          {rule.when}
        </span>
      </span>
      <span className="flex items-baseline gap-2.5 sm:pl-4">
        <span className="font-[family-name:var(--font-geist-mono)] text-[10px] font-semibold uppercase tracking-[0.08em] text-brand">
          Then
        </span>
        <span
          className={
            strong ? "text-sm font-medium text-text-main" : "text-sm text-text-sub"
          }
        >
          {rule.then}
          {rule.weight !== undefined ? (
            <span className="ml-1.5 font-[family-name:var(--font-geist-mono)] text-xs font-medium text-brand">
              +{rule.weight}
            </span>
          ) : null}
        </span>
      </span>
    </div>
  );
}

export function SignalLibrary() {
  return (
    <SectionShell id="signals" tone="soft">
      <div className="flex flex-col gap-4">
        <Eyebrow>Signals</Eyebrow>
        <h2 className="max-w-xl text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
          &ldquo;Signal-based&rdquo; is what everyone says.
        </h2>
        <p className="max-w-xl text-base/6 text-text-sub">
          Here&apos;s what we actually watch: 9 triggers, weighted by how
          strongly each one predicts intent, scored against every account in
          market.
        </p>
      </div>

      <div className="mt-10 max-w-2xl">
        <GtmCard>
          <div className="divide-y divide-border-primary">
            {SIGNALS.map((rule) => (
              <RuleRow key={rule.when} rule={rule} />
            ))}
          </div>
        </GtmCard>

        <div className="mt-4 rounded-[1.5rem] bg-[rgba(31,167,122,0.06)] p-6 ring-1 ring-[rgba(31,167,122,0.18)]">
          <RuleRow rule={THRESHOLD_RULE} strong />
        </div>
      </div>
    </SectionShell>
  );
}
