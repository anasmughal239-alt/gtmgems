# Behaviors — mintlify.com

Findings from the mandatory interaction sweep (scroll / click / hover / responsive).
Scope of this sweep: header, hero, social-proof band.

## Scroll sweep

**Header does NOT change on scroll.** Verified by diffing `getComputedStyle` at
`scrollY = 0` vs `scrollY = 600`:

| Property | at 0 | at 600 |
| --- | --- | --- |
| backgroundColor | `lab(100 0 0)` | `lab(100 0 0)` |
| borderBottomColor | `rgb(241,240,238)` | `rgb(241,240,238)` |
| height | 65px | 65px |
| boxShadow / backdropFilter / maxWidth / borderRadius / transform | none / none / none / 0px / none | *(identical)* |

**Zero properties changed.** It is a plain `position: sticky; top: 0` bar — no floating
pill, no shrink, no shadow-on-scroll. Do not build a scroll listener for it.

No scroll-snap. No smooth-scroll library. No IntersectionObserver-driven state changes
observed in the scoped sections.

## Time-driven behaviors (the real animation on this page)

### 1. Hero background canvas
`<canvas class="block size-full pointer-events-none absolute inset-y-0 left-1/2 z-0 w-full max-w-[1920px] -translate-x-1/2">`

A continuously-animating field of thin green flowing curves ("agent traffic" streams)
sweeping left→right across the hero. JS-driven, source not recoverable from the DOM.
**Clone approach:** re-implement as an original animated canvas of bezier stream lines
using the brand gradient stops. This is an approximation, not a pixel match — flagged as
a known gap.

### 2. Odometer digit rolls (hero badge + stats band)
Shared primitive. Each digit is a `<span class="relative inline-flex h-[1em] overflow-hidden">`
containing a `flex flex-col` strip of `0..9` glyphs, moved by inline
`transform: translateY(-Nem) translateZ(0)`.

- transition: `transform 700ms var(--ease-out-soft)`
- `motion-reduce:transition-none`
- strip is `tabular-nums`, `font-paper` (mono), `text-xs/4`, `tracking-[0.02em]`, `text-brand`
- Digits update live (counter increments), driving new `translateY` values.

### 3. Stats band marquee
`<div class="flex w-max backface-hidden" style="animation: 40s linear infinite stats-scroll">`

```css
@keyframes stats-scroll { 0% { transform: translate(0px); } 100% { transform: translate(-50%); } }
```

Content is duplicated once (5 stat items × 2) so the `-50%` wrap is seamless.
Stat labels, in order: **Pages read · Search requests · API requests · Feedback provided · Content updates**.
Each stat = label span + odometer pill.

### 4. Logo wall cycling
8 cards. Each card holds a stack of brand marks; the visible one swaps on a timer via
`transition-[translate,opacity] ease-[cubic-bezier(0,0,0,1)]` with per-card inline
`transition-duration: 500ms; transition-delay: <staggered>ms`, animating
`translate-y-0 opacity-100` ⇄ offset/transparent.

## Hover sweep

| Element | Change | Transition |
| --- | --- | --- |
| Nav trigger (`Products`/`Solutions`/`Resources`) | background-color shift | `background-color 0.3s cubic-bezier(0.4,0,0.2,1)` |
| Primary button (black) | `hover:bg-background-invert/90` | `color, background-color, border-color 0.1s cubic-bezier(0.4,0,0.2,1)` |
| Secondary button (white) | `hover:bg-background-soft` | same 0.1s triplet |
| Hero badge pill | `hover:bg-background-soft` | `0.1s cubic-bezier(0.4,0,0.2,1)` |
| Button arrow icon | `opacity 0.5 → 1`, inner `<g>` `translate-x-0.5` | `opacity 150ms ease-out`, `transform 150ms ease-out` |
| Logo card | overlay `bg-black/[0.02]` `opacity 0 → 1` | `opacity 150ms ease-out` |

## Click sweep

Nav dropdowns (`Products`, `Solutions`, `Resources`) are **Radix NavigationMenu**
(`data-slot="navigation-menu"`, `group/navigation-menu`, `data-state` on triggers,
viewport anchored `top: 64px; z-50`).

⚠️ **Gap:** the panels never opened under automation. Radix gates opening on trusted
pointer events with `pointerType === "mouse"`; both synthetic `PointerEvent` dispatch and
driver-level hover/click left `data-state="closed"` and never mounted
`[data-slot="navigation-menu-content"]`. **Dropdown panel contents were not captured.**
The clone builds the triggers (label + chevron, correct metrics and hover transition)
against a standard shadcn `NavigationMenu`; panel contents are left as a documented TODO.

## Responsive sweep

Breakpoint that matters: **`lg` = 1024px** (header swap + hero column layout).

| | Mobile 390 | Tablet 768 | Desktop 1440 |
| --- | --- | --- | --- |
| Grid | 4 × 77.5px, w 358 | 12 × 45.41px, w 721 | 24 × 29.91px, w 1088 |
| Header | desktop `display:none`; mobile header `h-16`, `bg #fefdfb`, inner bar `px-5`, logo + "Open menu" button | same as mobile | desktop header `h-16` + 1px border, `grid-layout` |
| Hero `<h1>` | 40px / 44px, `-0.8px` | 40px / 44px, `-0.8px` | 50px / 52px, `-2px` |
| Hero grid padding-top | 24px | 24px | 80px |
| Hero mockup | `col 1/-1`, `mt-16` (64px), w 587px (overflows) | `col 1/-1`, `mt-12` (48px), w 865px | `col 10/25`, w 1057px |
| Hero height | 796.5px | 881.5px | 992px |
| Social proof left panel | stacked, full width | stacked | `lg:w-1/3`, right side `lg:border-l` |
| Logo wall grid | `grid-cols-2` | `sm:grid-cols-4` | 4 × 165.75px, gap 12px, `p-3` |
| Stats band | `gap-4 py-5` | `gap-4 py-5` | `lg:gap-6 lg:py-8` (h 90px) |

Hero copy `<p>` stays 18px/24px at every width.
