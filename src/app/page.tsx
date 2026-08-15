import { BusinessSizes } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/BusinessSizes";
import { FinalCta } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/FinalCta";
import { Hero } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/Hero";
import { PlatformOverview } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/PlatformOverview";
import { ScaleAgentWeb } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/ScaleAgentWeb";
import { SocialProof } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SocialProof";
import { Testimonials } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/Testimonials";
import { AutomationDemo } from "@/components/gtmgems/AutomationDemo";
import { GtmgemsFooter } from "@/components/gtmgems/GtmgemsFooter";
import { GtmgemsHeader } from "@/components/gtmgems/GtmgemsHeader";
import {
  DELIVERABILITY_NOTE,
  DELIVERABILITY_STATS,
  EMPTY_LOGO_CARDS,
  FIT_CARDS,
  HERO_VISUAL,
  HONEST_MATH,
  SPEC_STATS,
  WHAT_WE_BUILD,
} from "@/components/gtmgems/content";

// gtmgems homepage — built on the mintlify.com clone's design system.
// Every section below is the same parameterized component used at /mintlify;
// only the content props differ. See src/components/gtmgems/content.tsx.
export default function Home() {
  return (
    <>
      <GtmgemsHeader />
      <main>
        <Hero
          eyebrow={null}
          title="We build the outbound system. Not the excuses."
          description={
            <>
              Signal-based targeting and deliverability infrastructure, built
              and operated on tools <span className="font-medium text-text-main">you own</span> —
              not a lead-gen agency, not a cold email sender.
            </>
          }
          primaryCta={{ label: "Book a call", href: "#book-a-call" }}
          visual={HERO_VISUAL}
        />

        <SocialProof
          headline={
            <>
              Live in <strong className="font-medium text-text-main">30 days</strong>{" "}
              or the build phase is free. A delivery promise we control — not
              a promise about your revenue.
            </>
          }
          cta={{ label: "Book a call", href: "#book-a-call" }}
          marqueeLabel="What you're signing up for"
          stats={SPEC_STATS}
          logoCards={EMPTY_LOGO_CARDS}
        />

        <PlatformOverview
          title="A GTM engineer's job is the system."
          subtitle="Not a lead count."
          cta={{ label: "Book a call", href: "#book-a-call" }}
          cards={WHAT_WE_BUILD}
        />

        <AutomationDemo />

        <ScaleAgentWeb
          title="The numbers we hold ourselves to."
          subtitle="Most campaigns don't fail on copy — they fail because someone pushed volume through a domain that was already burning."
          cta={{ label: "Read the full spec", href: "/cold-email-infrastructure" }}
          stats={DELIVERABILITY_STATS}
          note={DELIVERABILITY_NOTE}
        />

        <BusinessSizes
          title="The honest math."
          subtitle="The in-house hire looks cheaper only during the recruiting months — no salary yet, but no pipeline either."
          cta={{ label: "See pricing", href: "#pricing" }}
          slides={HONEST_MATH}
        />

        <Testimonials
          title="What “qualified” actually means here."
          subtitle="And who we tell not to book a call."
          cta={{ label: "Book a call", href: "#book-a-call" }}
          testimonials={FIT_CARDS}
        />

        <FinalCta
          title="Tell us your ACV and your current outbound setup."
          description="Fifteen minutes. We qualify live against the fit criteria above — no form, no pre-screen. If it isn't a fit you'll hear that on the call, with what we'd do instead."
          secondaryCta={null}
          primaryCta={{ label: "Book a call", href: "#book-a-call" }}
        />
      </main>
      <GtmgemsFooter />
    </>
  );
}
