import { FeatureCard } from "@/components/system/FeatureCard";
import { SectionHeader, SectionSpacer } from "@/components/system/SectionHeader";
import { LeadPipelineTable } from "@/components/system/illustration/LeadPipelineTable";

/**
 * "What it actually looks like running" — the queue and the routing logic
 * made visible, in place of an abstract diagram.
 *
 * Same shell as BenchmarkTable/FaqList: SectionHeader + grid-layout +
 * FeatureCard. The two-card layout pattern (queue on the left, rules on the
 * right) is new content, not a new visual language — every color, font, and
 * spacing value below already exists elsewhere on this page.
 */

interface Rule {
  when: string;
  then: string;
}

const RULES: Rule[] = [
  { when: "Account clears signal score", then: "Enrich and verify contact" },
  {
    when: "Email verification fails",
    then: "Hold back, retarget next signal cycle",
  },
  { when: "No reply after the email sequence", then: "Move to LinkedIn" },
  {
    when: "Reply clears ICP + authority + next-step",
    then: "Push to CRM",
  },
];

export function AutomationDemo() {
  return (
    <section>
      <SectionHeader
        title="What it actually looks like running."
        subtitle="Not a diagram — the queue and the routing logic underneath it."
      />

      <div className="grid-layout relative">
        <div className="col-span-full py-4 lg:p-4">
          <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 lg:px-0">
            <FeatureCard as="div" className="gap-4 p-6 lg:p-8">
              <span className="text-xs/4 font-medium tracking-[0.02em] text-text-sub">
                The queue
              </span>
              <LeadPipelineTable />
              <p className="text-sm/5 text-text-sub">
                Every account that clears the signal score lands here first —
                most get scored and held, not sent.
              </p>
            </FeatureCard>

            <FeatureCard as="div" className="gap-4 p-6 lg:p-8">
              <span className="text-xs/4 font-medium tracking-[0.02em] text-text-sub">
                The routing
              </span>
              <ul className="flex flex-col divide-y divide-border-primary">
                {RULES.map((rule) => (
                  <li key={rule.when} className="flex flex-col gap-1 py-3">
                    <span className="flex items-baseline gap-2">
                      <span className="font-paper text-[10px]/4 font-semibold uppercase tracking-[0.04em] text-brand">
                        When
                      </span>
                      <span className="text-sm/5 text-text-main">
                        {rule.when}
                      </span>
                    </span>
                    <span className="flex items-baseline gap-2">
                      <span className="font-paper text-[10px]/4 font-semibold uppercase tracking-[0.04em] text-text-soft">
                        Then
                      </span>
                      <span className="text-sm/5 text-text-sub">
                        {rule.then}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </FeatureCard>
          </div>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
