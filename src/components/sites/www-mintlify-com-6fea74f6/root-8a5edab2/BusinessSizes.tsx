import Link from "next/link";

import { CardCanvas } from "@/components/system/CardCanvas";
import { ArrowRightIcon } from "@/components/system/icons";
import {
  SectionHeader,
  SectionSpacer,
} from "@/components/system/SectionHeader";
import type { CustomerStory, SectionCta } from "@/types/mintlify";

const DEFAULT_SLIDES: CustomerStory[] = [
  {
    title: "See how Anthropic accelerates AI adoption with Mintlify",
    href: "/customers/anthropic",
    stats: [
      { value: "2M", label: "Monthly active developers" },
      { value: "4+", label: "Products serviced" },
    ],
  },
  {
    title: "How Coinbase became agent-ready with Mintlify",
    href: "/customers/coinbase",
    stats: [
      { value: "+50x", label: "Faster deployment time" },
      { value: "12+", label: "Products serviced" },
    ],
  },
  {
    title: "How HubSpot powers next-gen developer experience with Mintlify",
    href: "/customers/hubspot",
    stats: [
      { value: "+2x", label: "Faster time to production" },
      { value: "60%", label: "Reduction in engineering resources" },
    ],
  },
  {
    title:
      "See how AT&T modernized their knowledge infrastructure with Mintlify",
    href: "/customers/att",
    stats: [
      { value: "50K+", label: "Monthly active users" },
      { value: "4+", label: "Products serviced" },
    ],
  },
];

export function BusinessSizes({
  title = "Powering businesses of all sizes.",
  subtitle = "Run your business on a reliable platform that adapts to your needs.",
  cta = { label: "For enterprises", href: "/enterprise" },
  slides = DEFAULT_SLIDES,
}: {
  title?: string;
  subtitle?: string;
  cta?: SectionCta;
  slides?: CustomerStory[];
} = {}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} cta={cta} />

      <div className="grid-layout relative">
        <div className="relative isolate col-span-full py-4 lg:p-4">
          <CardCanvas
            variant="wave"
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-screen"
          />

          {/*
            The live carousel is an embla-style pointer-drag track. This uses
            native scroll-snap instead — same one-slide-at-a-time behaviour and
            drag affordance, without pulling in a carousel library.
          */}
          <div className="relative cursor-grab active:cursor-grabbing">
            <div className="-mx-2 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {slides.map((slide) => (
                <div
                  key={slide.href}
                  className="min-w-0 shrink-0 grow-0 basis-[calc(100%-32px)] snap-start px-2 lg:basis-[100%]"
                >
                  <Link
                    href={slide.href}
                    className="group relative flex h-[472px] flex-col overflow-hidden rounded-md border border-border-sub bg-[#f9f6f3] p-8 outline-offset-2 transition-opacity duration-300 hover:opacity-95 focus-visible:outline-2 focus-visible:outline-brand dark:bg-[#0f0f12]"
                  >
                    <CardCanvas
                      variant="orbit"
                      className="pointer-events-none absolute inset-0 block size-full"
                    />

                    <div className="relative z-10 mt-auto flex flex-col gap-8">
                      <h3 className="max-w-[32rem] text-balance text-[1.5rem]/8 font-medium tracking-[-0.02em] text-text-main">
                        {slide.title}
                      </h3>

                      <div className="flex flex-wrap items-start gap-12">
                        {slide.stats.map((stat) => (
                          <div key={stat.label} className="flex flex-col gap-1">
                            <span className="font-paper text-[2rem]/[2.25rem] font-medium tracking-[-0.02em] text-text-main">
                              {stat.value}
                            </span>
                            <span className="text-xs/4 font-medium tracking-[0.02em] text-text-sub">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <span className="inline-flex items-center gap-1 text-sm/4 font-medium text-text-main">
                        Read the story
                        <ArrowRightIcon className="size-4 opacity-50 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none" />
                      </span>
                    </div>
                  </Link>
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
