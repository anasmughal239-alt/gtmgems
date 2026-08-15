import { StreamLines } from "@/components/system/illustration/StreamLines";
import { LeadPipelineTable } from "@/components/system/illustration/LeadPipelineTable";
import { GtmButton } from "../ui/Button";
import { Eyebrow } from "../ui/SectionShell";

/**
 * Bespoke gtmgems hero -- asymmetric split (Editorial Split archetype),
 * Geist display type, the live queue as the visual half instead of an
 * abstract illustration. Copy content unchanged from the previous version.
 */
export function GtmHero() {
  return (
    <section id="book-a-call" className="relative overflow-hidden bg-background-main pt-16 lg:pt-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col gap-6">
          <Eyebrow>Fractional GTM engineering</Eyebrow>

          <h1 className="text-balance text-[2.75rem]/[1.05] font-medium tracking-[-0.03em] text-text-main lg:text-[3.75rem]/[1.02]">
            We build the outbound system. Not the excuses.
          </h1>

          <p className="max-w-md text-lg/7 text-text-sub">
            Signal-based targeting and deliverability infrastructure, built
            and operated on tools <span className="font-medium text-text-main">you own</span>.
            Not a lead-gen agency, not a cold email sender.
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <GtmButton href="#book-a-call">Book a call</GtmButton>
            <span className="text-sm text-text-soft">
              15 minutes. We&apos;ll tell you if you shouldn&apos;t buy this.
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] border border-border-primary bg-[#f9f6f3] p-8">
            <StreamLines opacity={0.45} />
            <LeadPipelineTable
              className="relative w-full max-w-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
