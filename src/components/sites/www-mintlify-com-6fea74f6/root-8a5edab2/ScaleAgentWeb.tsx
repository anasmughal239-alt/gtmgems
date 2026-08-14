import type { ReactNode } from "react";

import { CardCanvas } from "@/components/system/CardCanvas";
import {
  SectionHeader,
  SectionSpacer,
} from "@/components/system/SectionHeader";
import type { SectionCta, StatItem } from "@/types/mintlify";

const DEFAULT_STATS: StatItem[] = [
  { value: "300M+", label: "visitors in the past year" },
  { value: "2B+", label: "agents in the past year" },
  { value: "99.99%", label: "uptime across all services" },
];

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-5 text-foreground-muted"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.5 2.5 3.5 5.8 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.8-3.5-9s1-6.5 3.5-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ScaleAgentWeb({
  title = "Built to scale with the agent web.",
  subtitle = "Built for scale with enterprise-grade reliability and performance.",
  cta = { label: "For enterprises", href: "/enterprise" },
  stats = DEFAULT_STATS,
  note,
}: {
  title?: string;
  subtitle?: string;
  cta?: SectionCta;
  stats?: StatItem[];
  /** Optional line rendered below the stat row. */
  note?: ReactNode;
} = {}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} cta={cta} />

      <div className="grid-layout relative">
        <div className="relative col-span-full p-0 lg:p-0">
          <div className="flex flex-col">
            <CardCanvas
              variant="wave"
              className="pointer-events-none -mt-12 mb-10 block h-[304px] w-full"
            />

            <div className="grid grid-cols-1 divide-y divide-border-primary border-t border-border-line p-7 lg:grid-cols-3 lg:divide-x lg:divide-y-0 lg:p-10 [&>*:not(:first-child)]:pt-8 lg:[&>*:not(:first-child)]:pt-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-6 ${
                    i === 0 ? "lg:pr-8" : i === 1 ? "lg:px-8" : "lg:pl-8"
                  }`}
                >
                  <GlobeIcon />
                  <div className="flex flex-col gap-2">
                    <span className="font-paper text-[2rem]/[2.25rem] font-medium tracking-[-0.02em] text-text-main">
                      {stat.value}
                    </span>
                    <span className="text-sm/5 text-text-sub">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {note ? (
              <p className="border-t border-border-line px-7 py-6 text-sm/5 text-text-sub lg:px-10">
                {note}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
