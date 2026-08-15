/**
 * gtmgems homepage content, mapped onto the existing (already-parameterized)
 * mintlify.com clone sections rather than new bespoke components — Hero,
 * SocialProof, PlatformOverview, ScaleAgentWeb, BusinessSizes, Testimonials,
 * FinalCta all accept content props already; this file only supplies gtmgems
 * copy for those props. See src/components/sites/.../root-8a5edab2/*.tsx.
 */
import { StreamLines } from "@/components/system/illustration/StreamLines";
import { LeadPipelineTable } from "@/components/system/illustration/LeadPipelineTable";
import type {
  CustomerStory,
  FeatureCardItem,
  LogoCard,
  StatItem,
  Testimonial,
} from "@/types/mintlify";

/** Hero's right-side visual: the live queue instead of an abstract
 *  illustration — same idea as scrapeloop.com leading with its table, styled
 *  in the existing Mintlify tokens. See AutomationDemo.tsx for the full
 *  version further down the page. */
export const HERO_VISUAL = (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-t-[2.22cqw] border-l border-r border-t border-border-primary bg-[#f9f6f3] p-6 dark:bg-[#0f0f12]">
    <StreamLines opacity={0.5} />
    <LeadPipelineTable
      compact
      className="relative w-full max-w-[26rem] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
    />
  </div>
);

/** SocialProof stats marquee — spec strip + pricing, in place of Mintlify's
 *  usage counters. Odometer renders digits and treats the rest as static. */
export const SPEC_STATS: StatItem[] = [
  { label: "Stage", value: "Series A-B" },
  { label: "ACV", value: "$10K-100K" },
  { label: "Addressable market", value: "500+ accounts" },
  { label: "Minimum engagement", value: "3 months" },
  { label: "Build phase", value: "$1,000-3,000" },
  { label: "Retainer", value: "$10,000-12,000/mo" },
];

/** SocialProof's logo wall, in its honest state — no fabricated clients. */
export const EMPTY_LOGO_CARDS: LogoCard[] = Array.from({ length: 8 }, (_, i) => ({
  marks: ["Open slot"],
  delayMs: i * 90,
}));

/** PlatformOverview's title-only card grid, repurposed as "what we build". */
export const WHAT_WE_BUILD: FeatureCardItem[] = [
  {
    title: "Infrastructure, on accounts you own",
    span: "sm:col-span-2 sm:aspect-[2/1]",
    variant: "grid",
  },
  {
    title: "Scored targeting, not list buying",
    span: "sm:col-span-1",
    variant: "pulse",
  },
  {
    title: "Email and LinkedIn, from a real person",
    span: "sm:col-span-1",
    variant: "orbit",
  },
  {
    title: "Qualification logic in your reporting",
    span: "sm:col-span-1",
    variant: "wave",
  },
  {
    title: "Deliverability engineered, not guessed",
    span: "sm:col-span-1",
    variant: "orbit",
  },
  {
    title: "Built by the team behind Bounso: 99.2% catch-all accuracy",
    span: "sm:col-span-2 sm:aspect-[2/1] lg:col-span-3",
    variant: "grid",
  },
];

/** ScaleAgentWeb's 3-stat row, repurposed as the deliverability spec. */
export const DELIVERABILITY_STATS: StatItem[] = [
  { value: "3", label: "inboxes per sending domain" },
  { value: "14-21 days", label: "warmup before first live send" },
  { value: "2%", label: "bounce rate (hard stop, domain paused)" },
];

export const DELIVERABILITY_NOTE =
  "SPF, DKIM, and DMARC enforced. Sending domains stay separate from the brand domain. Placement is tested weekly against a seed list across providers, and each account gets 1-2 contacts (multi-threading a small account reads as spam). If reply rate drops, we rewrite and retarget. We don't raise volume to hide it.";

/** BusinessSizes' customer-story carousel, repurposed as the cost comparison. */
export const HONEST_MATH: CustomerStory[] = [
  {
    title: "Hiring an in-house GTM engineer",
    href: "#math",
    stats: [
      { value: "$130K-260K", label: "total comp (median ~$176K)" },
      { value: "3-6 months", label: "to recruit, before any pipeline" },
    ],
  },
  {
    title: "gtmgems: a full-stack team, not one hire",
    href: "#pricing",
    stats: [
      { value: "$120K-144K", label: "per year equivalent" },
      { value: "4 weeks", label: "to live send" },
    ],
  },
  {
    title: "AI SDR tools solve message generation, not the bottleneck",
    href: "#math",
    stats: [
      { value: "$1.5K-5K", label: "per month" },
      { value: "0", label: "of it covers integration or data hygiene" },
    ],
  },
  {
    title: "Cheaper cold email agencies skip deliverability engineering",
    href: "#math",
    stats: [
      { value: "$2.5K-4K", label: "per month" },
      { value: "↑", label: "volume pushed through when placement slips" },
    ],
  },
];

/** Testimonials' name/role/quote card grid, repurposed as fit and qualification. */
export const FIT_CARDS: Testimonial[] = [
  {
    name: "Qualified",
    role: "The actual bar",
    quote:
      "The account cleared the signal score, the person replying holds budget authority or direct influence, and a specific next step was taken: call booked, proposal requested, pricing asked.",
  },
  {
    name: "Not a lead",
    role: "Logged as a reply only",
    quote:
      "“Thanks, send me more info.” No ICP check, no authority, no next step. A polite reply isn't a qualified lead.",
  },
  {
    name: "When we won't take the call",
    role: "Published on purpose",
    quote:
      "Addressable market under 500 accounts, pure self-serve with no sales motion, no defined ICP yet, meetings needed this month, or a guaranteed lead count in writing. We'll say so on the call, not after.",
  },
];
