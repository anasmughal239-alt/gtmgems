/** Content for /cold-email-infrastructure and /linkedin-outbound. */
import type { BenchmarkRow } from "./BenchmarkTable";
import type { FaqItem } from "./FaqList";

export const COLD_EMAIL_BENCHMARKS: BenchmarkRow[] = [
  {
    stat: "3.43%",
    meaning: "Average reply rate, all cold email",
    source: "Instantly Cold Email Benchmark Report 2026",
  },
  {
    stat: "3–5%",
    meaning: "Well-run campaign reply rate",
    source: "Apollo",
  },
  {
    stat: "8–12%",
    meaning: "Elite-tier reply rate",
    source: "Instantly 2026",
  },
  {
    stat: "7–8%",
    meaning: "Average bounce rate industry-wide",
    source: "LeadHaste 2026",
  },
  {
    stat: "<1.5%",
    meaning: "Best-in-class bounce rate",
    source: "LeadHaste 2026",
  },
  {
    stat: "95%+",
    meaning: "Target inbox placement",
    source: "Amplemarket 2026",
  },
  {
    stat: "<0.1%",
    meaning: "Safe spam complaint rate (Google/Yahoo cap at 0.3%)",
    source: "Amplemarket",
  },
  {
    stat: "58%",
    meaning: "Of replies come from the first email in sequence",
    source: "Cleanlist 2026",
  },
  {
    stat: "2–6x",
    meaning: "Reply lift from verified vs. unverified/purchased lists",
    source: "Cleanlist",
  },
];

export const COLD_EMAIL_FAQ: FaqItem[] = [
  {
    q: "Why can't warmup be faster?",
    a: "Mailbox providers score sending reputation off real usage patterns over time — there's no way to compress that signal. We ramp 14–21 days before the first live send; pushing volume earlier just gets the domain flagged before it's earned trust.",
  },
  {
    q: "What happens when a domain gets flagged?",
    a: "It's paused and diagnosed immediately — our hard stop is a 2% bounce rate. We don't keep sending through a domain that's already burning; we find the cause, fix it, and re-warm before it goes back into rotation.",
  },
  {
    q: "Why no guaranteed reply rate?",
    a: "Reply rate depends on your offer, ICP, and market conditions — none of which we control. We're accountable for the system working correctly, the same standard an in-house hire is held to, not for a number that isn't ours to guarantee.",
  },
  {
    q: "Why does infrastructure work beat a cheaper sending tool alone?",
    a: "A sending tool doesn't own domain architecture, authentication, warmup discipline, or placement testing — those are engineering problems, not settings you toggle. Skip them and volume looks fine until the day it isn't.",
  },
];

export const LINKEDIN_BENCHMARKS: BenchmarkRow[] = [
  {
    stat: "28–30%",
    meaning: "Average connection acceptance rate",
    source: "Expandi 2026 (13.2M data points)",
  },
  {
    stat: "45% vs 15%",
    meaning: "Personalized vs. generic request acceptance",
    source: "Expandi 2026",
  },
  {
    stat: "10.4%",
    meaning: "Average reply rate to post-connection messages",
    source: "Overloop 2026",
  },
  {
    stat: "10–25%",
    meaning: "Typical InMail reply rate range",
    source: "Belkins 2026",
  },
  {
    stat: "30–50%",
    meaning: "Top-performing personalized sequence reply rate",
    source: "Belkins 2026",
  },
  {
    stat: "15–25/day",
    meaning: "Safe connection requests, warmed account (~100/week)",
    source: "LeadLoft 2026",
  },
  {
    stat: "100–150/day",
    meaning: "Safe messages to existing connections",
    source: "ConnectSafely 2026",
  },
  {
    stat: "<30%",
    meaning: "Acceptance rate that triggers LinkedIn throttling",
    source: "LeadLoft 2026",
  },
  {
    stat: "Tuesday",
    meaning: "Best-performing day for replies (6.90%)",
    source: "Expandi 2026",
  },
];

export const LINKEDIN_FAQ: FaqItem[] = [
  {
    q: "Why are the volume limits conservative on purpose?",
    a: "An acceptance rate under 30% is what triggers LinkedIn's own throttling. We stay well inside 15–25 connection requests and 100–150 messages a day per warmed account — the ceiling isn't the goal, staying off LinkedIn's radar is.",
  },
  {
    q: "Why cloud-based automation over a Chrome extension?",
    a: "Extension-based tools run through your browser session and tie activity to a fingerprint LinkedIn can flag in one pass. Cloud-based automation runs independently, with human-like pacing, and doesn't put your personal account at risk.",
  },
  {
    q: "What happens on reply?",
    a: "The sequence halts immediately — no more scheduled steps go out once someone responds. Everything past that point is a real conversation, not automation.",
  },
  {
    q: "Why no guaranteed acceptance or reply rate?",
    a: "Same reason as email: those numbers depend on your ICP, your profile, and your offer. We publish the benchmark ranges as context, not as a number in the contract.",
  },
];
