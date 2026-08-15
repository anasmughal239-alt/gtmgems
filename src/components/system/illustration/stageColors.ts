/**
 * Per-stage accent colors for the workflow visuals -- Airtable's actual
 * palette (read-only inspection of airtable.com's inline SVG fills, not
 * cloned), applied to gtmgems' pipeline stages instead of a single brand
 * green. Airtable color-codes status/type by hue across its database UI;
 * this does the same for pipeline stages.
 */
export const STAGE_COLORS = {
  signal: { hex: "#458FFF", bg: "rgba(69,143,255,0.10)", label: "Signal" },
  score: { hex: "#9B67F0", bg: "rgba(155,103,240,0.10)", label: "Score" },
  enrich: { hex: "#0DBDB4", bg: "rgba(13,189,180,0.10)", label: "Enrich + verify" },
  email: { hex: "#F5620C", bg: "rgba(245,98,12,0.10)", label: "Email" },
  linkedin: { hex: "#DD04A8", bg: "rgba(221,4,168,0.10)", label: "LinkedIn" },
  crm: { hex: "#39BF45", bg: "rgba(57,191,69,0.10)", label: "CRM" },
} as const;

export type StageKey = keyof typeof STAGE_COLORS;

/** Status-pill colors for the lead table -- distinct hues per outcome,
 *  not a single green/grey binary. */
export const STATUS_COLORS = {
  Qualified: { hex: "#39BF45", bg: "rgba(57,191,69,0.12)" },
  Scored: { hex: "#458FFF", bg: "rgba(69,143,255,0.12)" },
  Discarded: { hex: "#9297A0", bg: "rgba(146,151,160,0.14)" },
} as const;
