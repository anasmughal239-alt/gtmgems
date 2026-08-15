# Page Topology — mintlify.com

Captured at 1440×900. Total document height **8421px**. Framework: Next.js App Router
(no `__NEXT_DATA__`; RSC payload). Tailwind v4 with `@layer theme` custom properties.
`<html class="light">` — a dark theme exists (`dark:` variants throughout) but light is default.

## Layout primitive: `.grid-layout`

Every section lays content on one shared grid:

| Breakpoint | Columns | Column width | Gap | Container width |
| --- | --- | --- | --- | --- |
| base (390px) | 4 | 77.5px | 16px | 358px |
| md (768px) | 12 | 45.41px | 16px | 721px |
| lg (1440px) | 24 | 29.91px | 16px | 1088px (max-width, auto margins) |

`max-width: 1088px; margin-inline: auto;` — at 1440px viewport that is `0 168.5px`.

## Section order (top → bottom)

| # | Name | Top | Height | Interaction model | In scope this run |
| --- | --- | --- | --- | --- | --- |
| H | `SiteHeader` (sticky) | 0 | 65px | static (sticky only) + hover dropdowns | ✅ |
| 0 | `Hero` | 65 | 992px | time-driven (canvas + odometer) | ✅ |
| 1 | `SocialProof` | 1057 | 608px | time-driven (logo cycle + marquee) | ✅ |
| 2 | `PlatformOverview` — "One platform for your entire knowledge stack." | 1665 | 1660px | TBD | ⬜ |
| 3 | `BusinessSizes` — "Powering businesses of all sizes." | 3325 | 864px | TBD | ⬜ |
| 4 | `ScaleAgentWeb` — "Built to scale with the agent web." | 4189 | 853px | TBD | ⬜ |
| 5 | `StartupsSection` — "Enabling the next generation of startups." | 5042 | 906px | TBD | ⬜ |
| 6 | `Testimonials` — "Trusted by teams building for agents." | 5948 | 847px | TBD | ⬜ |
| 7 | `LatestUpdates` — blog cards | 6795 | 766px | TBD | ⬜ |
| 8 | `FinalCTA` — "The knowledge platform built for agents" | 7561 | 139px | static | ⬜ |
| F | `SiteFooter` | 7700 | ~721px | static | ⬜ |

## Z-index / overlay layers

- `header` — `position: sticky; top: 0; z-index: 100`. Desktop header is `hidden lg:block`;
  a **separate** mobile header (`lg:hidden`, `z-100`, inner bar `z-110`) renders below 1024px.
- Hero `<canvas>` — `absolute inset-y-0 left-1/2 -translate-x-1/2 z-0 max-w-[1920px]`, full-bleed
  behind hero content.
- Hero content grid — `relative z-10`.
- Hero mockup white fade overlay — `absolute inset-0 z-20`,
  `linear-gradient(rgba(0,0,0,0) 55%, #fff 96%)`.
- Nav dropdown viewport — `z-50`, anchored `top: 64px` (below header bar).

## Scroll container

Native document scroll. **No Lenis / Locomotive** (`.lenis` absent, `window.Lenis` undefined).
No `scroll-snap` on the page container. `body` has `overflow-x: hidden`.

## Section boundaries

Sections are separated by `border-t border-border-line` (`#f1f0ee`, 1px) rather than
background changes — the whole upper page is `#fff` / `lab(100 0 0)`.
