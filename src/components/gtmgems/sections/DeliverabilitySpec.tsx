import { GtmButton } from "../ui/Button";
import { Eyebrow, SectionShell } from "../ui/SectionShell";

const STATS = [
  { value: "3", label: "inboxes per sending domain" },
  { value: "14-21 days", label: "warmup before first live send" },
  { value: "2%", label: "bounce rate (hard stop, domain paused)" },
];

/** Replaces ScaleAgentWeb: same 3 numbers, plain large mono display instead
 *  of an ambient canvas banner -- the numbers are the point. */
export function DeliverabilitySpec() {
  return (
    <SectionShell id="spec" tone="soft">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="flex flex-col gap-4">
          <Eyebrow>Spec</Eyebrow>
          <h2 className="max-w-lg text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
            The numbers we hold ourselves to.
          </h2>
          <p className="max-w-md text-base/6 text-text-sub">
            Most campaigns don&apos;t fail on copy. They fail because someone
            pushed volume through a domain that was already burning.
          </p>
        </div>
        <GtmButton href="/cold-email-infrastructure" variant="secondary">
          Read the full spec
        </GtmButton>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border-primary pt-10 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="font-[family-name:var(--font-geist-mono)] text-4xl font-medium tracking-[-0.02em] text-text-main">
              {stat.value}
            </span>
            <span className="text-sm/6 text-text-sub">{stat.label}</span>
          </div>
        ))}
      </div>

      <p className="mt-10 max-w-2xl text-sm/6 text-text-soft">
        SPF, DKIM, and DMARC enforced. Sending domains stay separate from the
        brand domain. Placement is tested weekly against a seed list across
        providers, and each account gets 1-2 contacts (multi-threading a
        small account reads as spam). If reply rate drops, we rewrite and
        retarget. We don&apos;t raise volume to hide it.
      </p>
    </SectionShell>
  );
}
