import type { Metadata } from "next";

import { FinalCta } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/FinalCta";
import { Hero } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/Hero";
import { StreamLines } from "@/components/system/illustration/StreamLines";
import { AskAiIllustration } from "@/components/system/illustration/presets";
import { BenchmarkTable } from "@/components/gtmgems/BenchmarkTable";
import { FaqList } from "@/components/gtmgems/FaqList";
import { GtmgemsFooter } from "@/components/gtmgems/GtmgemsFooter";
import { GtmgemsHeader } from "@/components/gtmgems/GtmgemsHeader";
import {
  LINKEDIN_BENCHMARKS,
  LINKEDIN_FAQ,
} from "@/components/gtmgems/channel-content";

export const metadata: Metadata = {
  title: "LinkedIn Outbound — gtmgems",
  description:
    "The other channel, run on its own rules. Connection requests, message sequencing, reply detection.",
};

const HERO_VISUAL = (
  <div className="absolute inset-0 overflow-hidden rounded-t-[2.22cqw] border-l border-r border-t border-border-primary bg-[#f9f6f3] dark:bg-[#0f0f12]">
    <StreamLines opacity={0.7} />
    <AskAiIllustration placeholder="Find warm accounts…" />
  </div>
);

export default function LinkedInOutbound() {
  return (
    <>
      <GtmgemsHeader />
      <main>
        <Hero
          eyebrow={null}
          title="The other channel, run on its own rules."
          description="Connection requests, message sequencing, reply detection — LinkedIn has its own throttling and its own failure modes, so it gets its own operating limits."
          primaryCta={{ label: "Book a call", href: "#book-a-call" }}
          visual={HERO_VISUAL}
        />

        <BenchmarkTable
          title="What the numbers actually look like."
          subtitle="Sourced, not estimated — this is what a well-run sequence hits."
          rows={LINKEDIN_BENCHMARKS}
        />

        <FaqList
          title="The questions worth asking before you buy."
          subtitle="Straight answers, including where we don't guarantee an outcome."
          items={LINKEDIN_FAQ}
        />

        <FinalCta
          title="Tell us your ACV and your current outbound setup."
          description="Fifteen minutes. We qualify live against the fit criteria on the homepage — no form, no pre-screen."
          secondaryCta={null}
          primaryCta={{ label: "Book a call", href: "#book-a-call" }}
        />
      </main>
      <GtmgemsFooter />
    </>
  );
}
