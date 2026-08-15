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
import { PricingSection } from "@/components/gtmgems/PricingSection";
import { SignalLibrary } from "@/components/gtmgems/SignalLibrary";
import { RevealOnScroll } from "@/components/system/RevealOnScroll";
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
//
// Each section is wrapped in RevealOnScroll (motion/react whileInView) --
// design-taste-frontend's MOTION_INTENSITY: 7 read for this page requires
// actual shipped motion, not just a claimed dial value. Wrapping at this
// composition level, rather than inside the shared Mintlify components,
// keeps /mintlify's pixel-matched internals untouched.
export default function Home() {
  return (
    <>
      <GtmgemsHeader />
      <main>
        <RevealOnScroll>
          <Hero
            eyebrow={null}
            sectionId="book-a-call"
            title="We build the outbound system. Not the excuses."
            titleClassName="font-sans text-[2.5rem]/[2.75rem] font-bold tracking-[-0.02em] text-text-main lg:text-[3.25rem]/[3.5rem]"
            description={
              <>
                Signal-based targeting and deliverability infrastructure, built
                and operated on tools <span className="font-medium text-text-main">you own</span>.
                Not a lead-gen agency, not a cold email sender.
              </>
            }
            primaryCta={{ label: "Book a call", href: "#book-a-call" }}
            visual={HERO_VISUAL}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <SocialProof
            headline={
              <>
                Live in <strong className="font-medium text-text-main">30 days</strong>{" "}
                or the build phase is free. A delivery promise we control, not
                a promise about your revenue.
              </>
            }
            cta={{ label: "Book a call", href: "#book-a-call" }}
            marqueeLabel="What you're signing up for"
            stats={SPEC_STATS}
            logoCards={EMPTY_LOGO_CARDS}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <SignalLibrary />
        </RevealOnScroll>

        <RevealOnScroll>
          <PlatformOverview
            title="A GTM engineer's job is the system."
            subtitle="Not a lead count."
            cta={{ label: "Book a call", href: "#book-a-call" }}
            cards={WHAT_WE_BUILD}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <AutomationDemo />
        </RevealOnScroll>

        <RevealOnScroll>
          <ScaleAgentWeb
            title="The numbers we hold ourselves to."
            subtitle="Most campaigns don't fail on copy. They fail because someone pushed volume through a domain that was already burning."
            cta={{ label: "Read the full spec", href: "/cold-email-infrastructure" }}
            stats={DELIVERABILITY_STATS}
            note={DELIVERABILITY_NOTE}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <BusinessSizes
            title="The honest math."
            subtitle="The in-house hire looks cheaper only during the recruiting months: no salary yet, but no pipeline either."
            cta={{ label: "See pricing", href: "#pricing" }}
            slides={HONEST_MATH}
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <Testimonials
            title="What “qualified” actually means here."
            subtitle="And who we tell not to book a call."
            cta={{ label: "Book a call", href: "#book-a-call" }}
            testimonials={FIT_CARDS}
            gridClassName="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:px-0"
          />
        </RevealOnScroll>

        <RevealOnScroll>
          <PricingSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <FinalCta
            title="Tell us your ACV and your current outbound setup."
            description="Fifteen minutes. We qualify live against the fit criteria above, no form, no pre-screen. If it isn't a fit you'll hear that on the call, with what we'd do instead."
            secondaryCta={null}
            primaryCta={{ label: "Book a call", href: "#book-a-call" }}
          />
        </RevealOnScroll>
      </main>
      <GtmgemsFooter />
    </>
  );
}
