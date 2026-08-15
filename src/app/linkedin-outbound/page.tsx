import type { Metadata } from "next";

import { FinalCta } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/FinalCta";
import { Hero } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/Hero";
import { LinkedInSequenceDiagram } from "@/components/system/illustration/LinkedInSequenceDiagram";
import { BenchmarkTable } from "@/components/gtmgems/BenchmarkTable";
import { FaqList } from "@/components/gtmgems/FaqList";
import { GtmgemsFooter } from "@/components/gtmgems/GtmgemsFooter";
import {
  GtmgemsHeader,
  GtmgemsMobileHeader,
} from "@/components/gtmgems/GtmgemsHeader";
import {
  LINKEDIN_BENCHMARKS,
  LINKEDIN_FAQ,
} from "@/components/gtmgems/channel-content";

export const metadata: Metadata = {
  title: "LinkedIn Outbound: gtmgems",
  description:
    "The other channel, run on its own rules. Connection requests, message sequencing, reply detection.",
};

const HERO_VISUAL = (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-t-[2.22cqw] border-l border-r border-t border-border-primary bg-background-soft p-6">
    <div className="w-full max-w-sm">
      <LinkedInSequenceDiagram />
    </div>
  </div>
);

export default function LinkedInOutbound() {
  return (
    <div className="[--font-sans:var(--font-geist-sans)]">
      <GtmgemsMobileHeader />
      <div className="lg:mt-4 lg:flex lg:justify-center">
        <GtmgemsHeader />
      </div>
      <main>
        <Hero
          eyebrow={null}
          sectionId="book-a-call"
          title="The other channel, run on its own rules."
          titleClassName="font-sans text-[2.5rem]/[2.75rem] font-bold tracking-[-0.02em] text-text-main lg:text-[3.25rem]/[3.5rem]"
          description="Connection requests, message sequencing, reply detection: LinkedIn has its own throttling and its own failure modes, so it gets its own operating limits."
          primaryCta={{ label: "Book a call", href: "#book-a-call" }}
          visual={HERO_VISUAL}
        />

        <BenchmarkTable
          title="What the numbers actually look like."
          subtitle="Sourced, not estimated: this is what a well-run sequence hits."
          rows={LINKEDIN_BENCHMARKS}
        />

        <FaqList
          title="The questions worth asking before you buy."
          subtitle="Straight answers, including where we don't guarantee an outcome."
          items={LINKEDIN_FAQ}
        />

        <FinalCta
          title="Tell us your ACV and your current outbound setup."
          description="Fifteen minutes. We qualify live against the fit criteria on the homepage, no form, no pre-screen."
          secondaryCta={null}
          primaryCta={{ label: "Book a call", href: "#book-a-call" }}
        />
      </main>
      <GtmgemsFooter />
    </div>
  );
}
