import { CardCanvas } from "@/components/system/CardCanvas";
import type { FeatureCardItem, SectionCta } from "@/types/mintlify";
import { FeatureCard } from "@/components/system/FeatureCard";
import {
  SectionHeader,
  SectionSpacer,
} from "@/components/system/SectionHeader";

// Span pattern from the live grid: 2+1 / 1+1+1 / 3, over lg:[grid-auto-rows:25.75rem].
const DEFAULT_CARDS: FeatureCardItem[] = [
  {
    title: "Agent-native platform",
    span: "sm:col-span-2 sm:aspect-[2/1]",
    variant: "grid",
  },
  { title: "Self-updating knowledge", span: "sm:col-span-1", variant: "pulse" },
  { title: "Control who has access", span: "sm:col-span-1", variant: "orbit" },
  { title: "Connect with your systems", span: "sm:col-span-1", variant: "wave" },
  {
    title: "Collaborate with your team & agents",
    span: "sm:col-span-1",
    variant: "orbit",
  },
  {
    title: "Build on top of your existing setup",
    span: "sm:col-span-2 sm:aspect-[2/1] lg:col-span-3",
    variant: "grid",
  },
];

export function PlatformOverview({
  title = "One platform for your entire knowledge stack.",
  subtitle = "Agents that keep work moving 24/7.",
  cta = {
    label: "Get started",
    href: "https://app.mintlify.com/signup",
    external: true,
  },
  cards = DEFAULT_CARDS,
}: {
  title?: string;
  subtitle?: string;
  cta?: SectionCta;
  cards?: FeatureCardItem[];
} = {}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} cta={cta} />

      <div className="grid-layout relative">
        <div className="relative col-span-full py-4 lg:p-4">
          <div className="grid grid-cols-1 gap-3 px-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:px-0 lg:[grid-auto-rows:25.75rem]">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`group relative isolate aspect-[338/412] w-full lg:aspect-auto lg:min-h-0 ${card.span}`}
              >
                <FeatureCard>
                  <div className="absolute inset-0 size-full">
                    <CardCanvas
                      variant={card.variant}
                      className="block size-full"
                    />
                  </div>
                  <div className="relative z-10 flex h-full flex-col">
                    <h3 className="mt-auto pt-8 text-base/6 font-medium text-text-main">
                      {card.title}
                    </h3>
                  </div>
                </FeatureCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
