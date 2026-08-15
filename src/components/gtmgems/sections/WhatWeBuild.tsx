import { GtmCard } from "../ui/Card";
import { Eyebrow, SectionShell } from "../ui/SectionShell";

const ITEMS = [
  {
    title: "Infrastructure, on accounts you own",
    body: "Domains, inboxes, enrichment, sequencer, CRM: purchased and owned by you, not us.",
    span: "lg:col-span-4",
  },
  {
    title: "Scored targeting, not list buying",
    body: "9 weighted signals decide who gets contacted.",
    span: "lg:col-span-2",
  },
  {
    title: "Email and LinkedIn, from a real person",
    body: "Dual-channel sequencing, no bot fingerprint.",
    span: "lg:col-span-3",
  },
  {
    title: "Deliverability engineered, not guessed",
    body: "Built by the team behind Bounso: 99.2% catch-all accuracy.",
    span: "lg:col-span-3",
  },
  {
    title: "Qualification logic in your reporting",
    body: "ICP, authority, and next-step checks, visible in your CRM.",
    span: "lg:col-span-3",
  },
  {
    title: "A GTM engineer's job is the system",
    body: "Not a lead count. That's the whole premise.",
    span: "lg:col-span-3",
  },
];

/** Replaces PlatformOverview's ambient-canvas card grid with a real
 *  asymmetric bento (design-taste-frontend Section 4.7): exact cell count,
 *  no empty tiles, varied spans instead of 6 equal boxes. */
export function WhatWeBuild() {
  return (
    <SectionShell id="what-we-build">
      <div className="flex flex-col gap-4">
        <Eyebrow>What we build</Eyebrow>
        <h2 className="max-w-lg text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
          The system, not a lead count.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-flow-dense lg:grid-cols-6">
        {ITEMS.map((item) => (
          <GtmCard key={item.title} className={item.span}>
            <h3 className="text-base font-medium text-text-main">
              {item.title}
            </h3>
            <p className="mt-2 text-sm/6 text-text-sub">{item.body}</p>
          </GtmCard>
        ))}
      </div>
    </SectionShell>
  );
}
