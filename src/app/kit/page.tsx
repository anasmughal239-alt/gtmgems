import type { Metadata } from "next";

import { AutomationCard } from "@/components/system/AutomationCard";
import {
  AskAiIllustration,
  ConfigUpdateIllustration,
  DocsSyncIllustration,
  ReaderInsightsIllustration,
} from "@/components/system/illustration/presets";
import { SectionHeader } from "@/components/system/SectionHeader";
import { SiteHeader } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SiteHeader";

export const metadata: Metadata = {
  title: "Kit — automation cards",
  description: "Reference page for the AutomationCard illustration primitives.",
};

function BookIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3H9v14H4.5A1.5 1.5 0 0 1 3 15.5v-11ZM17 4.5A1.5 1.5 0 0 0 15.5 3H11v14h4.5a1.5 1.5 0 0 0 1.5-1.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M7 6l-4 4 4 4M13 6l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2.5l1.6 4.4 4.4 1.6-4.4 1.6L10 14.5l-1.6-4.4L4 8.5l4.4-1.6L10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path
        d="M2 10s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Kit() {
  return (
    <>
      <SiteHeader />
      <main>
        <section>
          <SectionHeader
            title="Automation cards."
            subtitle="Composable illustrations built from the system primitives."
          />

          <div className="grid-layout relative">
            <div className="col-span-full py-4 lg:p-4">
              {/* lg:[grid-auto-rows:26rem] matches the live grid — without an
                  explicit row height the cards collapse and the illustration
                  collides with the copy. */}
              <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 lg:px-0 lg:[grid-auto-rows:26rem]">
                <AutomationCard
                  className="lg:col-span-2"
                  icon={<BookIcon />}
                  title="Best-in-class docs without building anything"
                  description="Point Mintlify to the repo you want documentation for. You're done. Launch day could be today."
                  illustration={<DocsSyncIllustration />}
                />

                <AutomationCard
                  icon={<CodeIcon />}
                  title="Docs update from the same pull requests as your code"
                  description="When you ship code, Mintlify automations update your docs. Keep shipping and let Mintlify keep your customers up to date on how your product works."
                  illustration={<ConfigUpdateIllustration />}
                />

                <AutomationCard
                  icon={<SparkleIcon />}
                  title="The AI assistant answers before tickets reach you"
                  description="Readers get answers from your docs instantly, so your team fields fewer repeat questions."
                  illustration={<AskAiIllustration />}
                />

                <AutomationCard
                  className="lg:col-span-2"
                  icon={<EyeIcon />}
                  title="Your docs readers are your warmest leads"
                  description="See which companies read which pages, and turn documentation traffic into pipeline."
                  illustration={<ReaderInsightsIllustration />}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
