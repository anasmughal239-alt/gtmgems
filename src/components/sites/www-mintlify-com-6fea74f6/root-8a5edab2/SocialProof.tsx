import type { ReactNode } from "react";

import Link from "next/link";

import { mintButton } from "@/components/system/button-variants";
import { ArrowRightIcon } from "@/components/system/icons";
import { Odometer } from "@/components/system/Odometer";
import type { LogoCard, SectionCta, StatItem } from "@/types/mintlify";

const DEFAULT_STATS: StatItem[] = [
  { label: "Pages read", value: "18,204,663" },
  { label: "Search requests", value: "902,415" },
  { label: "API requests", value: "51,338" },
  { label: "Feedback provided", value: "6,972" },
  { label: "Content updates", value: "34,180" },
];

// The live wall shows real customer trademarks (Alibaba, Perplexity, Lovable,
// and others). Those marks belong to their owners, so the clone reproduces the
// wall's geometry and cycling animation with neutral placeholders instead.
const DEFAULT_LOGO_CARDS: LogoCard[] = [
  { marks: ["NORTHWIND", "ACME"], delayMs: 0 },
  { marks: ["HELIOS", "VERTEX"], delayMs: 120 },
  { marks: ["QUANTA", "ORBIT"], delayMs: 240 },
  { marks: ["LUMEN", "ATLAS"], delayMs: 360 },
  { marks: ["CASCADE", "MERIDIAN"], delayMs: 480 },
  { marks: ["AURORA", "PINNACLE"], delayMs: 600 },
  { marks: ["SUMMIT", "BEACON"], delayMs: 720 },
  { marks: ["HARBOR", "KEYSTONE"], delayMs: 840 },
];

function StatsGroup({ stats }: { stats: StatItem[] }) {
  return (
    <div className="flex items-center gap-8 pr-8">
      {stats.map((stat) => (
        <span
          key={stat.label}
          className="flex shrink-0 items-center gap-2 whitespace-nowrap"
        >
          <span className="text-xs/4 font-medium tracking-[0.02em] text-text-sub">
            {stat.label}
          </span>
          <span className="rounded-[2px] bg-[rgba(31,167,122,0.08)] px-2 py-1 font-paper text-xs/4 font-medium tracking-[0.02em] text-brand [transform:translateZ(0)]">
            <Odometer value={stat.value} />
          </span>
        </span>
      ))}
    </div>
  );
}

export function SocialProof({
  headline = (
    <>
      Join <strong className="font-medium text-text-main">20,000+</strong> of
      the world&apos;s most ambitious companies building for agents.
    </>
  ),
  cta = { label: "Read customer stories", href: "/customers" },
  marqueeLabel = "Agents at work today",
  stats = DEFAULT_STATS,
  logoCards = DEFAULT_LOGO_CARDS,
}: {
  headline?: ReactNode;
  cta?: SectionCta;
  marqueeLabel?: string;
  stats?: StatItem[];
  logoCards?: LogoCard[];
} = {}) {
  return (
    <section className="border-t border-border-line">
      {/* intro + logo wall */}
      <div className="grid-layout relative">
        <div className="col-span-full flex flex-col lg:flex-row">
          <div className="flex flex-col justify-between gap-10 border-b border-border-primary p-7 lg:w-1/3">
            <h2 className="text-xl/6 font-medium tracking-[-0.01em] text-text-sub lg:text-2xl/7">
              {headline}
            </h2>
            <Link
              href={cta.href}
              className={mintButton({
                variant: "primary",
                size: "md",
                icon: "trailing",
                className: "w-fit",
              })}
            >
              {cta.label}
              <ArrowRightIcon className="size-4 opacity-50 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none" />
            </Link>
          </div>

          <div className="min-w-0 flex-1 lg:border-l lg:border-border-primary">
            <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-4">
              {logoCards.map((card) => (
                <div
                  key={card.marks[0]}
                  className="group/card relative isolate flex aspect-[163/104] items-center justify-center overflow-hidden rounded-[6px] border border-border-primary bg-neutral-100 lg:aspect-[160/155]"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-black/[0.02] opacity-0 transition-opacity duration-150 ease-out group-hover/card:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex translate-y-0 items-center justify-center text-sm font-medium tracking-[0.08em] text-text-main opacity-100 transition-[translate,opacity] ease-[cubic-bezier(0,0,0,1)] motion-reduce:translate-y-0"
                    style={{
                      transitionDuration: "500ms",
                      transitionDelay: `${card.delayMs}ms`,
                    }}
                  >
                    {card.marks[0]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* stats marquee band */}
      <div className="relative border-y border-border-line bg-background-main">
        <div className="grid-layout px-7">
          <div className="col-span-full flex items-center gap-4 py-5 lg:gap-6 lg:py-8">
            <span className="shrink-0 text-[15px]/6 font-medium text-text-main lg:text-base/6">
              {marqueeLabel}
            </span>
            <span
              aria-hidden="true"
              className="h-5 w-px shrink-0 bg-border-primary"
            />
            <div className="relative isolate -ml-4 min-w-0 flex-1 overflow-hidden lg:-ml-6">
              <div
                className="flex w-max [backface-visibility:hidden] [-webkit-perspective:1000px]"
                style={{ animation: "40s linear infinite stats-scroll" }}
              >
                {/* rendered twice so the -50% wrap is seamless */}
                <StatsGroup stats={stats} />
                <StatsGroup stats={stats} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-layout relative pb-40" />
    </section>
  );
}
