import { mintButton } from "@/components/system/button-variants";
import { FeatureCard } from "@/components/system/FeatureCard";

/**
 * A real pricing section — scrapeloop.com structural pattern (read-only
 * inspection, not cloned): centered intro block, card grid below, each card
 * bordered with a feature checklist and its own CTA. The retainer card gets
 * the same soft brand-tint treatment already established elsewhere on this
 * page (rgba(31,167,122,…)) as its "this is the one" signal, in place of
 * scrapeloop's "Most popular" badge — gtmgems only has two tiers, not three,
 * so a badge would overstate the choice.
 *
 * Previously gtmgems' pricing lived only inside the SocialProof stats strip
 * — this also resolves the dangling #pricing anchor (header nav, footer,
 * BusinessSizes CTA all already link here).
 */

interface Tier {
  eyebrow: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    eyebrow: "Build phase",
    price: "$1,000–3,000",
    cadence: "one-time",
    description: "Days 1–28. Scoped to email-only or email + LinkedIn.",
    features: [
      "ICP, signal weightings, disqualifier list",
      "Domains, DNS, auth, inboxes",
      "14–21 day warmup, untouched",
      "Placement testing + CRM handoff",
    ],
    cta: { label: "Book a call", href: "#book-a-call" },
  },
  {
    eyebrow: "Fractional retainer",
    price: "$10,000–12,000",
    cadence: "/mo",
    description: "Starts from first live send. 3-month minimum.",
    features: [
      "Scoped to your channel mix and volume",
      "Direct access to both operators — no account managers",
      "Weekly placement testing, ongoing",
      "Retarget and rewrite, not raise volume, when reply drops",
    ],
    cta: { label: "Book a call", href: "#book-a-call" },
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-16 border-t border-border-line bg-background-soft"
    >
      <div className="grid-layout relative py-16 lg:py-20">
        <div className="col-span-full mx-auto flex max-w-xl flex-col items-center gap-4 px-7 text-center lg:px-0">
          <span className="inline-flex w-fit items-center rounded-[2px] border border-border-sub bg-background-main px-2.5 py-1 text-xs/4 font-medium tracking-[0.02em] text-text-soft">
            Pricing
          </span>
          <h2 className="text-balance text-[1.75rem]/8 font-medium tracking-[-0.02em] text-foreground-primary lg:text-[2.25rem]/[2.5rem]">
            Flat build, metered retainer.
          </h2>
          <p className="text-base/6 text-text-sub">
            Tooling runs roughly $500–2,000/mo on top of this, quoted
            honestly before you commit. No lead-count guarantee — see why on
            the fit section above.
          </p>
        </div>

        <div className="col-span-full mt-10 grid grid-cols-1 gap-4 px-7 sm:grid-cols-2 lg:col-start-3 lg:col-end-23 lg:px-0">
          {TIERS.map((tier) => (
            <FeatureCard
              key={tier.eyebrow}
              as="div"
              className={
                tier.featured
                  ? "gap-6 border-[rgba(31,167,122,0.3)] bg-[rgba(31,167,122,0.05)] p-7"
                  : "gap-6 p-7"
              }
            >
              <div className="flex flex-col gap-1">
                <span
                  className={
                    tier.featured
                      ? "text-xs/4 font-medium tracking-[0.02em] text-brand"
                      : "text-xs/4 font-medium tracking-[0.02em] text-text-sub"
                  }
                >
                  {tier.eyebrow}
                </span>
                <span className="flex items-baseline gap-1 font-paper text-[1.75rem]/8 font-medium tracking-[-0.02em] text-text-main">
                  {tier.price}
                  <span className="font-sans text-sm/5 font-normal text-text-sub">
                    {tier.cadence}
                  </span>
                </span>
                <span className="text-sm/5 text-text-sub">
                  {tier.description}
                </span>
              </div>

              <ul className="flex flex-col gap-2.5">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm/5 text-text-main"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mt-0.5 size-4 shrink-0 text-brand"
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

              <a
                href={tier.cta.href}
                className={mintButton({
                  variant: tier.featured ? "primary" : "secondary",
                  size: "md",
                  className: "mt-auto justify-center",
                })}
              >
                {tier.cta.label}
              </a>
            </FeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
