# Hero Specification

## Overview
- **Target file:** `src/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/Hero.tsx`
- **Interaction model:** time-driven (background canvas animation + live odometer counter). No scroll or click behavior.

## DOM Structure

```
<section class="relative overflow-x-clip bg-background-main">     <!-- h 992px @1440 -->
  <canvas class="block size-full pointer-events-none absolute inset-y-0 left-1/2 z-0 w-full max-w-[1920px] -translate-x-1/2">
  <div class="relative z-10 grid-layout items-start gap-y-8 pt-6 lg:gap-y-0 lg:pb-0 lg:pt-20">
    <div class="col-span-full flex flex-col gap-4 lg:col-start-1 lg:col-end-9 lg:row-start-1">
      <a href="/data">  <!-- badge pill -->
      <h1>
      <p>
    </div>
    <div class="col-span-full flex flex-wrap items-start gap-2 lg:col-start-1 lg:col-end-9 lg:row-start-2 mt-8">
      <a>Get started</a>  <a>Sign up with Google</a>
    </div>
    <div class="relative isolate col-span-full mt-16 w-[587px] max-w-none sm:mt-12 sm:w-[120%] lg:col-start-10 lg:col-end-25 …">
      <div class="@container relative isolate aspect-[1080/656] w-full">
        <div class="… absolute inset-[15px] bottom-[72px] -z-10 rounded-t-xl blur-[24px]">   <!-- gradient glow -->
        <div class="absolute inset-0 overflow-hidden rounded-t-[2.22cqw] border-l border-r border-t">
          <img src="…preview-light.svg" class="pointer-events-none object-contain object-top dark:hidden" fill>
          <img src="…preview-dark.svg"  class="pointer-events-none hidden object-contain object-top dark:block" fill>
      <div class="pointer-events-none absolute inset-0 z-20">      <!-- white fade -->
```

## Computed Styles (exact values)

### `<section>`
- position: `relative`; overflow: `clip visible` (`overflow-x-clip`)
- backgroundColor: `lab(100 0 0)` → `--color-background-main`
- height: `992.016px` @1440 · `881.516px` @768 · `796.547px` @390

### `<canvas>`
- position: `absolute`; `inset-y-0`; left: `50%`; transform: `translateX(-50%)`
- width: `100%`; maxWidth: `1920px`; zIndex: `0`; pointerEvents: `none`

### Content grid
- `.grid-layout` + `relative z-10`
- padding: `80px 0 0` @lg (`pt-20`) · `24px 0 0` below lg (`pt-6`)
- rowGap: `32px` below lg (`gap-y-8`), `0` at lg
- alignItems: `flex-start`

### Left column (`lg:col-start-1 lg:col-end-9` → `gridColumn: 1 / 9`)
- display: `flex`; flexDirection: `column`; gap: `16px`; width: `352px` @1440

### Badge pill `<a href="/data">`
- display: `flex`; alignItems: `center`; gap: `6px`; width: `188.63px`; height: `34px`
- padding: `4px 4px 4px 10px` (`py-1 pl-2.5 pr-1`)
- backgroundColor: `lab(100 0 0)`; borderRadius: `2px`
- border: `1px solid lab(2.42579 -0.165291 -0.470081 / 0.07)` → `--color-border-sub`
- hover: `hover:bg-background-soft`, transition `color, background-color, border-color 0.1s cubic-bezier(0.4,0,0.2,1)`

Inner label `<span>`: fontSize `12px`; fontWeight `500`; lineHeight `16px`;
letterSpacing `0.24px` (`tracking-[0.02em]`); color `--color-text-soft` (`…/.8`); text **"Agent traffic"**.

Inner value `<span>`: `inline-flex items-center gap-1 rounded-[2px] py-1 pl-2 pr-1`;
backgroundColor `rgba(31, 167, 122, 0.08)`; width `92px`; height `24px`.

It has exactly **two** children, separated by the `gap-1` (4px):
1. `<span class="font-paper text-xs/4 font-medium tracking-[0.02em] text-brand">` (width `60px`)
   holding the `<Odometer>` — the `%` sits **inside this span**, immediately after the digits,
   with no gap before it.
2. A `size-4` (16px) arrow `<svg>`.

Do not render `%` as a separate gapped sibling, and do not omit the arrow.

### `<h1>`
- fontFamily: `font-serif` (Instrument Serif substitute — see OUTPUT_PLAN.md)
- fontWeight: `400`; color: `--color-text-main`
- **@1440:** fontSize `50px`; lineHeight `52px`; letterSpacing `-2px` (`text-[3.125rem]/[3.25rem] tracking-[-2px]`)
- **@768 and @390:** fontSize `40px`; lineHeight `44px`; letterSpacing `-0.8px` (`text-[2.5rem]/[2.75rem] tracking-[-0.8px]`)
- width `352px` / height `156px` @1440

### `<p>` (`text-lg/6 text-text-sub`)
- fontSize: `18px`; lineHeight: `24px`; color: `--color-text-sub` (`…/.6`) — at **all** breakpoints
- Emphasised spans: `font-medium text-text-main` → fontWeight `500`, color `--color-text-main`

### CTA row
- `gridColumn: 1 / 9`; display `flex`; flexWrap `wrap`; alignItems `flex-start`
- gap: `8px`; marginTop: `32px` (`mt-8`); height `42px`

**"Get started"** — `<a href="https://app.mintlify.com/signup">`, primary:
- fontSize `14px`; fontWeight `500`; lineHeight `16px`; color `lab(100 0 0)`
- backgroundColor `lab(2.42579 -0.165291 -0.470081)`; padding `12px 12px 12px 16px`
- height `42px`; width `124.67px`; borderRadius `4px`; border `1px solid transparent`
- gap `4px`; justifyContent `center`
- transition `color, background-color, border-color 0.1s cubic-bezier(0.4,0,0.2,1)`
- Trailing `<ArrowRightIcon />`: `size-4 opacity-50 group-hover:opacity-100`, `opacity 150ms ease-out`;
  inner `<g>` gets `group-hover:translate-x-0.5`, `transform 150ms ease-out`;
  the short stem path `M2.5 8H10.5` is `opacity-0 group-hover:opacity-100`.

**"Sign up with Google"** — `<a href="https://app.mintlify.com/api/auth/google/discovery">`, secondary:
- color `--color-text-main`; backgroundColor `lab(100 0 0)`; padding `12px 16px 12px 12px`
- height `42px`; width `186.09px`; borderRadius `4px`
- border `1px solid lab(2.42579 -0.165291 -0.470081 / 0.07)`; gap `6px`
- Leading `<GoogleIcon />` `size-4`, 4-colour: `#4285F4`, `#34A853`, `#FBBC05`, `#EA4335`

### Mockup column

Full class string (this was truncated during the first extraction pass and caused the
single largest QA defect — the width collapsed to the grid column's natural 674px and
dragged hero height from 992px to 489px):

```
relative isolate col-span-full mt-16 w-[587px] max-w-none sm:mt-12 sm:w-[120%]
lg:col-start-10 lg:col-end-[25] lg:row-start-2 lg:mt-0 lg:w-[1057px] lg:self-start
```

`lg:w-[1057px]` is a **fixed width that deliberately overflows** its grid column
(cols 10–25 measure only ~674px). The section's `overflow-x-clip` is what contains it.
It sits on `lg:row-start-2`, sharing row 2 with the CTA row — not spanning rows 1–3.

- **@1440:** `gridColumn: 10 / 25`; `gridRow: 2`; width `1057px`; height `642.02px`
- **@768:** `gridColumn: 1 / -1`; width `865.19px`; marginTop `48px` (`sm:mt-12`, `sm:w-[120%]`)
- **@390:** `gridColumn: 1 / -1`; width `587px` (overflows, `max-w-none`); marginTop `64px` (`mt-16`)
- Inner frame: `@container relative isolate aspect-[1080/656] w-full`

**Gradient glow** (`absolute inset-[15px] bottom-[72px] -z-10 rounded-t-xl blur-[24px]`):
- backgroundImage: `linear-gradient(106deg, rgba(68, 174, 255, 0.5) 0%, rgba(24, 226, 153, 0.5) 35%, rgba(186, 255, 36, 0.5) 65%, rgba(24, 226, 153, 0.5) 100%)`
- borderRadius: `12px 12px 0 0`; width `1027px`; height `555.02px` @1440

**Screenshot frame** (`absolute inset-0 overflow-hidden rounded-t-[2.22cqw] border-l border-r border-t`):
- borderRadius: `23.4654px 23.4654px 0 0` @1057px width (container-query unit — keep `2.22cqw`)
- Contains the two `<Image fill>` previews, `object-contain object-top`

**White fade overlay** (`pointer-events-none absolute inset-0 z-20`):
- backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 55%, lab(100 0 0) 96%)`

## States & Behaviors

### Background canvas (time-driven)
Continuously animating thin green "agent traffic" stream curves sweeping across the hero,
full-bleed behind the content. Original JS not recoverable from the DOM.
**Implement `HeroCanvas.tsx`** as an original `requestAnimationFrame` canvas: a family of
horizontal bezier streams, stroke colours drawn from `--color-gradient-green-1..6` at low
alpha, drifting left→right, with device-pixel-ratio scaling and a `prefers-reduced-motion`
early-out that paints a single static frame. **Approximation — flagged as a known gap.**

### Odometer (time-driven)
Use the shared `<Odometer>` primitive. Each digit is a `1em`-tall overflow-hidden window over
a `flex flex-col` strip of glyphs `0`–`9`, positioned by
`transform: translateY(-<digit>em) translateZ(0)`, transitioning
`transform 700ms var(--ease-out-soft)`, with `motion-reduce:transition-none`.

### Hover states
Badge pill → `bg-background-soft`. Buttons → as specified above. Nothing else.

## Assets
- `public/sites/www-mintlify-com-6fea74f6/root-8a5edab2/images/docs-preview-light.svg` (1080×656)
- `public/sites/www-mintlify-com-6fea74f6/root-8a5edab2/images/docs-preview-dark.svg` (1080×656)
- Icons from the shared module: `<ArrowRightIcon />`, `<GoogleIcon />`

## Text Content (verbatim)
- Badge: `Agent traffic` + live percentage + `%`
- `<h1>`: **The knowledge infrastructure agents build on**
- `<p>`: `Self-updating documentation for ` **`startups`** `, ` **`enterprises`** `, and ` **`agents`** `.`
  (the three bold words are `<span class="font-medium text-text-main">`)
- CTAs: `Get started` · `Sign up with Google`

## Responsive Behavior
- **Desktop (≥1024px):** two columns — copy in grid cols 1–9, mockup in cols 10–25. `pt-20`.
- **Tablet (768px):** single column; mockup full-width at `120%`, `mt-12`. h1 drops to 40/44.
- **Mobile (390px):** single column; mockup `587px` wide and deliberately overflowing; `mt-16`. `pt-6`.
- **Breakpoint:** `lg` = 1024px for the column split; `sm` governs the mockup width/margin.
