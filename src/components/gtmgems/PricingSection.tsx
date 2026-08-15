import { GtmButton } from "./ui/Button";
import { GtmCard } from "./ui/Card";
import { Eyebrow, SectionShell } from "./ui/SectionShell";

interface Tier {
  eyebrow: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    eyebrow: "Build phase",
    price: "$1,000-3,000",
    cadence: "one-time",
    description: "Days 1-28. Scoped to email-only or email + LinkedIn.",
    features: [
      "ICP, signal weightings, disqualifier list",
      "Domains, DNS, auth, inboxes",
      "14-21 day warmup, untouched",
      "Placement testing + CRM handoff",
    ],
  },
  {
    eyebrow: "Fractional retainer",
    price: "$10,000-12,000",
    cadence: "/mo",
    description: "Starts from first live send. 3-month minimum.",
    features: [
      "Scoped to your channel mix and volume",
      "Direct access to both operators, no account managers",
      "Weekly placement testing, ongoing",
      "Retarget and rewrite, not raise volume, when reply drops",
    ],
    featured: true,
  },
];

export function PricingSection() {
  return (
    <SectionShell id="pricing" tone="soft">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 text-center">
        <Eyebrow>Pricing</Eyebrow>
        <h2 className="text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
          Flat build, metered retainer.
        </h2>
        <p className="text-base/6 text-text-sub">
          Tooling runs roughly $500-2,000/mo on top of this, quoted honestly
          before you commit. No lead-count guarantee: see why on the fit
          section above.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {TIERS.map((tier) => (
          <GtmCard
            key={tier.eyebrow}
            accent={tier.featured}
            className="flex h-full flex-col"
            innerClassName="flex h-full flex-col"
          >
            <span
              className={
                tier.featured
                  ? "text-xs font-medium uppercase tracking-[0.1em] text-brand"
                  : "text-xs font-medium uppercase tracking-[0.1em] text-text-soft"
              }
            >
              {tier.eyebrow}
            </span>
            <span className="mt-2 flex items-baseline gap-1 font-[family-name:var(--font-geist-mono)] text-[1.75rem] font-medium tracking-[-0.02em] text-text-main">
              {tier.price}
              <span className="font-sans text-sm font-normal text-text-sub">
                {tier.cadence}
              </span>
            </span>
            <span className="mt-1 text-sm text-text-sub">
              {tier.description}
            </span>

            <ul className="mt-6 flex flex-col gap-2.5">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm/6 text-text-main"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="mt-1 size-4 shrink-0 text-brand"
                  >
                    <path
                      d="M3 8.5l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <GtmButton
                href="#book-a-call"
                variant={tier.featured ? "primary" : "secondary"}
                className="w-full justify-center"
              >
                Book a call
              </GtmButton>
            </div>
          </GtmCard>
        ))}
      </div>
    </SectionShell>
  );
}
