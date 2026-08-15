# Output Plan — mintlify.com clone

| Field | Value |
| --- | --- |
| Source URL | `https://www.mintlify.com/` |
| Normalized origin | `https://www.mintlify.com` |
| Normalized pathname | `/` |
| `<app-root>` | `.` (repo root) |
| `<site-key>` | `www-mintlify-com-6fea74f6` |
| `<page-key>` | `root-8a5edab2` |
| Destination route | `/` → `src/app/page.tsx` |
| Artifact root | `docs/research/www-mintlify-com-6fea74f6/root-8a5edab2/` |
| Screenshot root | `docs/design-references/www-mintlify-com-6fea74f6/root-8a5edab2/` |
| Component root | `src/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/` |
| Shared components | `src/components/sites/www-mintlify-com-6fea74f6/shared/` |
| Asset root | `public/sites/www-mintlify-com-6fea74f6/root-8a5edab2/` |
| Download script | `scripts/download-assets-www-mintlify-com-6fea74f6-root-8a5edab2.mjs` |

Hashes: `sha256("https://www.mintlify.com")[0:8] = 6fea74f6`, `sha256("/")[0:8] = 8a5edab2`.

## Route safety

Pre-existing routes inventoried before any write:

- `src/app/page.tsx` — **untouched template scaffold** (renders "Clone target not yet built. Run /clone-website to start."). Per skill routing defaults, the first single-URL clone in an untouched template may replace this scaffold so the clone is served at `/`. **Approved replacement.**

No other routes, component namespaces, research artifacts, screenshots, or asset namespaces existed. No collisions.

## Approved scope (user decision)

This run builds **header + hero + social-proof band only** (page topology sections H, 0, 1),
then pauses for review before continuing to sections 2–8 and the footer.

## Foundation changes required

- `src/app/layout.tsx` — font wiring (see substitutions below)
- `src/app/globals.css` — Mintlify design tokens merged in

Both are safe: the only existing route is the scaffold being replaced.

## Font substitutions (legal constraint)

mintlify.com self-hosts two **commercially licensed** typefaces that cannot be
downloaded or redistributed. Free substitutes are used and documented here.

| Role | Original | Substitute | Notes |
| --- | --- | --- | --- |
| UI / body | **Inter** | Inter (`next/font/google`) | Exact match, freely licensed |
| Display serif (`font-serif`, h1) | **ABC Arizona Flare** (Dinamo, commercial) | *Instrument Serif* | Closest free high-contrast flared serif; metrics differ slightly |
| Mono (`font-paper`, numerals/badges) | **Paper Mono** (commercial) | *Geist Mono* | Already a template dependency; tabular-nums behave equivalently |

Consequence: headline line-breaks and numeral widths will not be pixel-identical.
All other measurements are exact.

## Third-party brand assets (deliberate deviation)

The social-proof logo wall displays customer trademarks (Alibaba, Perplexity,
Lovable, and others). These are third-party marks, and the template's own
README excludes reproducing brand assets that belong to their owners. The clone
reproduces the wall's **structure, geometry, and cycling animation** with neutral
placeholder marks instead of the real customer logos.
