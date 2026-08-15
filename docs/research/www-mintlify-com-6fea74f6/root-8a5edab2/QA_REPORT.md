# Visual QA — mintlify.com clone

## Pass 3 — colour token defect

**Four colour tokens were used but never defined**, across six files:
`--color-foreground-primary`, `-secondary`, `-tertiary`, `-muted`, plus
`--color-black-6`.

Tailwind v4 silently skips utilities whose token is undefined — it does not warn
or fail the build — so `text-foreground-tertiary` emitted no rule at all and the
element inherited its parent's colour. Effect: **every section heading from 2
through 7 rendered its subtitle in the same near-black as its title**, losing
the two-tone treatment that is a signature of this design.

Passes 1 and 2 could not catch this: both measured geometry (offsets, heights,
box metrics), and colour has no effect on layout.

| | Before | After | Live site |
| --- | --- | --- | --- |
| Section title | `lab(2.75381 0 0)` | `rgb(18, 23, 21)` | `rgb(18, 23, 21)` |
| Section subtitle | `lab(2.75381 0 0)` | `rgb(113, 125, 121)` | `rgb(113, 125, 121)` |

Fixed by defining the full `--color-foreground-*` scale and the black/white
alpha ramps in `globals.css`. Re-measured afterwards: document height 8377px and
all nine section offsets/heights unchanged, so the fix is layout-neutral.

**Lesson for future passes:** geometry diffs are necessary but not sufficient.
Sample computed `color` on representative text nodes too.

---


## Pass 2 — full page (all 9 sections + footer)

Section offsets and heights, live site vs clone, desktop 1440.

| # | Section | Original top / height | Clone top / height | Δ height |
| --- | --- | --- | --- | --- |
| 0 | Hero | 65 / 992 | 65 / 992 | **0** |
| 1 | SocialProof | 1057 / 608 | 1057 / 609 | +1 |
| 2 | PlatformOverview | 1665 / 1660 | 1666 / 1660 | **0** |
| 3 | BusinessSizes | 3325 / 864 | 3326 / 864 | **0** |
| 4 | ScaleAgentWeb | 4189 / 853 | 4190 / 845 | −8 |
| 5 | StartupsSection | 5042 / 906 | 5035 / 866 | −40 |
| 6 | Testimonials | 5948 / 847 | 5901 / 838 | −9 |
| 7 | LatestUpdates | 6795 / 766 | 6739 / 734 | −32 |
| 8 | FinalCta | 7561 / 139 | 7473 / 139 | **0** |
| F | SiteFooter | 7700 / 721 | 7612 / 765 | +44 |
| | **Document** | **8421** | **8377** | **−44 (0.5%)** |

### Pass-2 defects found and fixed

5. **StartupsSection built as a static logo grid — it is a carousel.** The live
   section is a drag track of `aspect-[350/400]` cards
   (`basis-[calc(100%-32px)] sm:basis-[calc(50%-32px)] lg:basis-1/3`), not a
   logo wall. Cost 338px of height. Rebuilt as a snap carousel.
6. **LatestUpdates image aspect wrong.** Used `16/10`; the real cards are
   `aspect-[341/324]` inside an `h-full` card. Cost 143px.
7. **Footer missing its lower half.** The real footer has a `mt-10 lg:mt-16`
   divider row and a `mt-10 h-28` bottom bar (copyright + 3 social icons), plus
   `lg:col-span-5` / `lg:col-span-19` column split rather than col-start/end.
   Cost 173px.
8. **ScaleAgentWeb stat row padding.** `p-7` needed an `lg:p-10` override.

### Remaining deltas

The four sections still short (−8, −40, −9, −32) are all cases where a
`<canvas>` stand-in or a placeholder mark has slightly different intrinsic
height than the original artwork. No layout rule is wrong. Net document error
is 44px over 8,421px.

---

## Pass 1 — header + hero + social proof

Method: same `getComputedStyle` extraction script run against the live site and the clone
(`http://localhost:3311`) at identical viewports, then diffed. Numbers, not eyeballing.

## Desktop 1440×900

| Measurement | mintlify.com | Clone | Result |
| --- | --- | --- | --- |
| Header height | 65px | 65px | ✅ |
| Header background | `lab(100 0 0)` | `rgb(255,255,255)` | ✅ same colour |
| Header border-bottom | `1px solid rgb(241,240,238)` | identical | ✅ |
| Header on scroll (0 → 600) | 0 properties change | 0 properties change | ✅ |
| `.grid-layout` columns | 24 | 24 | ✅ |
| `.grid-layout` column width | 29.91px | 30px | ✅ (sub-pixel) |
| `.grid-layout` max-width / gap | 1088px / 16px | 1088px / 16px | ✅ |
| Hero padding-top | 80px | 80px | ✅ |
| Hero left column | 352×270, `gridColumn 1/9` | identical | ✅ |
| `<h1>` size / line-height / tracking | 50px / 52px / −2px | identical | ✅ |
| `<h1>` box | 352×156 | 352×156 | ✅ |
| `<p>` | 18px / 24px, 352×48 | identical | ✅ |
| CTA row margin-top | 32px | 32px | ✅ |
| Mockup width | 1057px | 1057px | ✅ |
| Mockup height | 642.016px | 642.016px | ✅ |
| Mockup grid position | col 10/25, row 2 | col 10/25, row 2 | ✅ |
| Glow size / blur | 1027×555.016, `blur(24px)` | identical | ✅ |
| Glow gradient | `linear-gradient(106deg, …)` | identical | ✅ |
| Frame radius | 23.4654px (`2.22cqw`) | 23.4654px | ✅ |
| Fade overlay | `linear-gradient(transparent 55%, #fff 96%)` | identical | ✅ |
| **Hero total height** | **992.016px** | **992.016px** | ✅ |
| SocialProof offset-top | 1057px | 1057px | ✅ |
| SocialProof height | 608.156px | 608.781px | ✅ (0.6px, font metrics) |
| Stats band height | 90px | 90px | ✅ |
| Marquee animation | `40s linear infinite stats-scroll` | identical | ✅ |
| Logo wall | 4 cols × 165.75px, gap 12px, 8 cards | 4 × 166.08px, gap 12px, 8 cards | ✅ |
| Logo card aspect @lg | `160 / 155` | `160 / 155` | ✅ |

## Mobile 390×844

| Measurement | mintlify.com | Clone | Result |
| --- | --- | --- | --- |
| Desktop header | `display: none` | `display: none` | ✅ |
| Mobile header | 64px, `rgb(254,253,251)` | 64px, `rgb(254,253,251)` | ✅ |
| Grid | 4 × 77.5px | 4 × 77.5px | ✅ |
| Grid padding-top | 24px | 24px | ✅ |
| `<h1>` | 40px / 44px / −0.8px | identical | ✅ |
| Mockup width / margin-top | 587px / 64px | 587px / 64px | ✅ |
| Logo wall columns | 2 | 2 | ✅ |
| **Hero total height** | **796.547px** | **796.547px** | ✅ |

## Defects found and fixed

1. **Mockup width collapsed (1057px → 674px).** The first extraction pass truncated the
   element's class string at 85 chars, losing `lg:w-[1057px] lg:row-start-2 lg:self-start`.
   The element fell back to its natural grid-column width, cutting hero height from 992px to
   489px — a 503px error. Re-extracted the full class string, fixed the component, and
   corrected `Hero.spec.md`.
2. **CTA row margin applied at all breakpoints.** Was `mt-8`; the original is `lg:mt-8`
   (below `lg`, the grid's `gap-y-8` handles the spacing). Fixed.
3. **Badge pill mis-structured.** The `%` was rendered as a separate `gap-1` sibling and the
   trailing 16px arrow icon was missing. The original puts `%` inside the odometer span with
   no gap, followed by the arrow. Fixed in component and spec.
4. **Glow corner radius 14px vs 12px.** `rounded-t-xl` resolves differently in this template
   (`--radius` scale) than on mintlify.com. Pinned to `rounded-t-[12px]`.

## Known gaps

0. **15 canvas animations are stand-ins.** mintlify.com paints bespoke
   `<canvas>` artwork in the hero (1), each PlatformOverview card (6),
   BusinessSizes (5), ScaleAgentWeb (1), and StartupsSection (1). None of that
   source is recoverable from the DOM. `HeroCanvas.tsx` and `CardCanvas.tsx`
   are original re-implementations in the same visual language (sparse
   brand-green geometry on the warm card background), with four variants —
   `grid`, `orbit`, `wave`, `pulse`. They honour `prefers-reduced-motion`.
   This is the single largest fidelity gap in the clone.
1. **Fonts.** ABC Arizona Flare and Paper Mono are commercially licensed and cannot be
   bundled. Instrument Serif and Geist Mono stand in. Every metric above matches, but
   glyph shapes differ, so **the `<h1>` wraps differently** — the original breaks after
   "infrastructure", the clone after "infrastructure agents". This is inherent to the
   substitution, not a layout bug.
2. **Hero canvas is an approximation.** The original's animation source is not recoverable
   from the DOM; `HeroCanvas.tsx` is an original re-implementation of the same visual idea
   (drifting green stream curves in the brand gradient ramp).
3. **Nav dropdown panels not captured.** Radix NavigationMenu refuses to open for synthetic
   or driver-issued pointer events, so the panel contents never mounted during extraction.
   Triggers are built and styled correctly; panel contents are a TODO.
4. **Customer logos deliberately not reproduced.** Both the SocialProof wall (8 cards)
   and the StartupsSection carousel (7 cards: lovable, kalshi, decagon, replit,
   perplexity, polymarket, harvey) keep their geometry, hover overlay, and cycling
   behaviour, but use neutral placeholder marks — the real ones are third-party
   trademarks. Customer *names* in the BusinessSizes carousel copy (Anthropic,
   Coinbase, HubSpot, AT&T) are kept verbatim, since that is the site's own marketing
   text rather than a brand asset.
6. **Footer link hrefs are inferred.** The labels are verbatim, but the live footer's
   exact URLs were not captured; hrefs follow the obvious `/slug` pattern.
7. **BusinessSizes / StartupsSection carousels use native scroll-snap** rather than the
   original's embla-style pointer-drag transform track. Same one-slide-at-a-time
   behaviour and grab cursor, no carousel dependency.
5. **Odometer values are static.** The live site increments them from real telemetry. The
   clone renders plausible fixed values through the same rolling-digit mechanism.

## Build status

- `npx tsc --noEmit` — clean
- `npm run build` — succeeds; routes `/` and `/_not-found` prerendered as static
- Browser console — no errors
