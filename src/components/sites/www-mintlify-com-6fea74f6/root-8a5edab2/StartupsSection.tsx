import { CardCanvas } from "@/components/system/CardCanvas";
import {
  SectionHeader,
  SectionSpacer,
} from "@/components/system/SectionHeader";
import type { SectionCta } from "@/types/mintlify";

// The live section is a drag carousel of 7 startup customer cards (lovable,
// kalshi, decagon, replit, perplexity, polymarket, harvey), each a
// aspect-[350/400] artwork tile with a light and dark asset. Those are
// third-party trademarks, so the clone keeps the carousel's geometry and
// substitutes neutral placeholder marks. See OUTPUT_PLAN.md.
const CARDS = [
  "NORTHWIND",
  "HELIOS",
  "QUANTA",
  "LUMEN",
  "CASCADE",
  "AURORA",
  "SUMMIT",
];

export function StartupsSection({
  title = "Enabling the next generation of startups.",
  subtitle = "Powering a quarter of the last YC batch to 40% of the Forbes AI 50.",
  cta = { label: "For startups", href: "/startups" },
  cards = CARDS,
}: {
  title?: string;
  subtitle?: string;
  cta?: SectionCta;
  cards?: string[];
} = {}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} cta={cta} />

      <div className="grid-layout relative">
        <div className="relative isolate col-span-full py-4 lg:p-4">
          <div className="relative cursor-grab [clip-path:inset(0px_-100vw_0px_-100vw)] active:cursor-grabbing sm:[clip-path:inset(0px_-100vw_0px_0px)]">
            <div className="-mx-2 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {cards.map((mark) => (
                <div
                  key={mark}
                  className="min-w-0 shrink-0 grow-0 basis-[calc(100%-32px)] snap-start px-2 sm:basis-[calc(50%-32px)] lg:basis-1/3"
                >
                  <div className="flex flex-col gap-6">
                    <div className="relative aspect-[350/400] w-full overflow-hidden rounded-md border border-border-sub bg-neutral-100">
                      <CardCanvas
                        variant="orbit"
                        className="pointer-events-none absolute inset-0 block size-full"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center text-sm font-medium tracking-[0.08em] text-text-main"
                      >
                        {mark}
                      </span>
                    </div>
                    <span className="text-sm/5 font-medium text-text-main">
                      {mark}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
