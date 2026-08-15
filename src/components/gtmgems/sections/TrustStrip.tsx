import { SectionShell } from "../ui/SectionShell";

const SPECS = [
  { label: "Stage", value: "Series A-B" },
  { label: "ACV", value: "$10K-100K" },
  { label: "Addressable market", value: "500+ accounts" },
  { label: "Minimum engagement", value: "3 months" },
];

/** Replaces the shared SocialProof odometer strip: same numbers, quieter
 *  presentation -- plain mono figures, no rolling-digit animation, since
 *  gtmgems has no usage metrics to make a spectacle of. */
export function TrustStrip() {
  return (
    <SectionShell tone="soft" className="!py-14 lg:!py-16">
      <div className="flex flex-col gap-8">
        <p className="max-w-xl text-base/6 text-text-main">
          Live in <span className="font-medium">30 days</span> or the build
          phase is free. A delivery promise we control, not a promise about
          your revenue.
        </p>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {SPECS.map((spec) => (
            <div key={spec.label} className="flex flex-col gap-1">
              <span className="text-xs/4 text-text-soft">{spec.label}</span>
              <span className="font-[family-name:var(--font-geist-mono)] text-lg/6 font-medium text-text-main">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
