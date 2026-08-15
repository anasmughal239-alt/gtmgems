import { FeatureCard } from "@/components/system/FeatureCard";
import { SectionHeader, SectionSpacer } from "@/components/system/SectionHeader";
import { PipelineFlow } from "@/components/system/illustration/PipelineFlow";

/**
 * "What it actually looks like running" — a flow diagram, in the pattern of
 * scrapeloop.com's hero (source → engine → table → branching arrows to
 * channel cards with routing labels), restyled in gtmgems' own Mintlify
 * tokens and gtmgems' own two real channels.
 */
export function AutomationDemo() {
  return (
    <section>
      <SectionHeader
        title="What it actually looks like running."
        subtitle="Not a diagram of the idea — the queue and the routing logic underneath it."
      />

      <div className="grid-layout relative">
        <div className="col-span-full py-4 lg:p-4">
          <FeatureCard as="div" className="items-start gap-0 p-6 lg:p-10">
            <PipelineFlow />
          </FeatureCard>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
