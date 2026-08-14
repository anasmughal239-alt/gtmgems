import type { Metadata } from "next";

import { BusinessSizes } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/BusinessSizes";
import { FinalCta } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/FinalCta";
import { Hero } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/Hero";
import { LatestUpdates } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/LatestUpdates";
import { PlatformOverview } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/PlatformOverview";
import { ScaleAgentWeb } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/ScaleAgentWeb";
import { SiteFooter } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SiteHeader";
import { SocialProof } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SocialProof";
import { StartupsSection } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/StartupsSection";
import { Testimonials } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/Testimonials";

export const metadata: Metadata = {
  title: "Mintlify - The Knowledge Platform Built for Agents",
  description:
    "Self-updating documentation for startups, enterprises, and agents.",
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SocialProof />
        <PlatformOverview />
        <BusinessSizes />
        <ScaleAgentWeb />
        <StartupsSection />
        <Testimonials />
        <LatestUpdates />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
