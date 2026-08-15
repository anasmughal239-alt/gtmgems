import { AutomationDemo } from "@/components/gtmgems/AutomationDemo";
import {
  GtmgemsHeader,
  GtmgemsMobileHeader,
} from "@/components/gtmgems/GtmgemsHeader";
import { GtmgemsFooter } from "@/components/gtmgems/GtmgemsFooter";
import { PricingSection } from "@/components/gtmgems/PricingSection";
import { SignalLibrary } from "@/components/gtmgems/SignalLibrary";
import { DeliverabilitySpec } from "@/components/gtmgems/sections/DeliverabilitySpec";
import { GtmFinalCta } from "@/components/gtmgems/sections/FinalCta";
import { FitChecker } from "@/components/gtmgems/sections/FitChecker";
import { GtmHero } from "@/components/gtmgems/sections/Hero";
import { HonestMath } from "@/components/gtmgems/sections/HonestMath";
import { TrustStrip } from "@/components/gtmgems/sections/TrustStrip";
import { WhatWeBuild } from "@/components/gtmgems/sections/WhatWeBuild";
import { RevealOnScroll } from "@/components/system/RevealOnScroll";

// gtmgems homepage v2 -- gtmgems' own design system throughout (Button,
// Card, SectionShell), no longer reusing the shared Mintlify section
// components. Content, numbers, and claims are unchanged from the previous
// version; only construction and presentation are new. Scoped to Geist via
// the [--font-sans:...] override below -- /mintlify keeps Inter untouched.
export default function Home() {
  return (
    <div className="[--font-sans:var(--font-geist-sans)]">
      <GtmgemsMobileHeader />
      <div className="lg:mt-4 lg:flex lg:justify-center">
        <GtmgemsHeader />
      </div>
      <main>
        <RevealOnScroll>
          <GtmHero />
        </RevealOnScroll>

        <RevealOnScroll>
          <TrustStrip />
        </RevealOnScroll>

        <RevealOnScroll>
          <SignalLibrary />
        </RevealOnScroll>

        <RevealOnScroll>
          <WhatWeBuild />
        </RevealOnScroll>

        <RevealOnScroll>
          <AutomationDemo />
        </RevealOnScroll>

        <RevealOnScroll>
          <DeliverabilitySpec />
        </RevealOnScroll>

        <RevealOnScroll>
          <HonestMath />
        </RevealOnScroll>

        <RevealOnScroll>
          <FitChecker />
        </RevealOnScroll>

        <RevealOnScroll>
          <PricingSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <GtmFinalCta />
        </RevealOnScroll>
      </main>
      <GtmgemsFooter />
    </div>
  );
}
