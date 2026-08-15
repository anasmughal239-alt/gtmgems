# SocialProof Specification

## Overview
- **Target file:** `src/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SocialProof.tsx`
- **Interaction model:** time-driven (logo cards cycle on a timer; stats band scrolls as a CSS marquee). No click or scroll behavior.
- Section height `608.16px` @1440, made of three stacked blocks.

## DOM Structure

```
<section class="border-t border-border-line">                       <!-- 608.16px -->
  <!-- BLOCK 1: intro + logo wall (357.16px) -->
  <div class="grid-layout relative">
    <div class="col-span-full flex flex-col lg:flex-row">
      <div class="flex flex-col justify-between gap-10 border-b border-border-primary p-7 lg:w-1/3">
        <h2>…</h2>
        <a href="/customers">Read customer stories</a>
      </div>
      <div class="min-w-0 flex-1 lg:border-l lg:border-border-primary">
        <div class="grid grid-cols-2 gap-3 p-3 sm:grid-cols-4">
          8 × logo card
        </div>
      </div>
    </div>
  </div>

  <!-- BLOCK 2: stats marquee band (90px) -->
  <div class="relative border-y border-border-line bg-background-main">
    <div class="grid-layout px-7">
      <div class="col-span-full flex items-center gap-4 py-5 lg:gap-6 lg:py-8">
        <span>Agents at work today</span>
        <span aria-hidden="true" class="h-5 w-px shrink-0 bg-border-primary">
        <div class="relative isolate -ml-4 min-w-0 flex-1 overflow-hidden lg:-ml-6">
          <div class="flex w-max backface-hidden" style="animation: 40s linear infinite stats-scroll">
            <div class="flex items-center gap-8 pr-8"> 5 stat items </div>
            <div class="flex items-center gap-8 pr-8"> same 5 again </div>
```

  <!-- BLOCK 3: spacer -->
  `<div class="grid-layout relative pb-40">` — empty, `padding-bottom: 160px`

## Computed Styles (exact values)

### `<section>`
- borderTop: `1px solid rgb(241, 240, 238)` → `--color-border-line`
- height: `608.156px` @1440

### Block 1 — left intro panel
- `flex flex-col justify-between gap-10 border-b border-border-primary p-7 lg:w-1/3`
- padding: `28px`; gap: `40px`; width: `361.98px` @1440; height: `357.16px`
- borderColor: `rgba(0, 0, 0, 0.04)` → `--color-border-primary`

`<h2 class="text-xl/6 font-medium tracking-[-0.01em] text-text-sub lg:text-2xl/7">`
- **@1440:** fontSize `24px`; lineHeight `28px`; letterSpacing `-0.24px`; fontWeight `500`
- **below lg:** fontSize `20px`; lineHeight `24px`
- color: `--color-text-sub` (`…/.6`); the `<strong>` is `font-medium text-text-main`

`<a href="/customers">` — primary button, `w-fit`:
- fontSize `14px`; fontWeight `500`; lineHeight `16px`; color `lab(100 0 0)`
- backgroundColor `--color-background-invert`; `py-3 pl-4 pr-3`; borderRadius `4px`
- `hover:bg-background-invert/90`; transition `[color,background-color,border-color] 0.1s`
- Trailing `<ArrowRightIcon />` — identical hover treatment to the hero CTA

### Block 1 — logo wall
- Container: `min-w-0 flex-1 lg:border-l lg:border-border-primary`; width `724.02px` @1440
- Grid: `grid grid-cols-2 gap-3 p-3 sm:grid-cols-4`
  - @1440: 4 × `165.75px`, gap `12px`, padding `12px`, height `357.16px`

Each of the **8 cards**:
- `group/card relative isolate flex items-center justify-center overflow-hidden rounded-[6px] border border-border-primary bg-neutral-100`
- aspectRatio: `163 / 104` below lg, **`160 / 155` at lg**
- backgroundColor: `rgb(250, 248, 245)` → `--color-neutral-100`
- borderRadius: `6px`; border: `1px solid rgba(0, 0, 0, 0.04)`
- Hover overlay `<span>`: `absolute inset-0 bg-black/[0.02] opacity-0 group-hover/card:opacity-100`,
  transition `opacity 150ms ease-out`
- Mark wrapper `<span>`: `absolute inset-0 flex items-center justify-center text-text-main`,
  `[&_svg]:h-6 [&_svg]:w-auto [&_svg]:max-w-[120px]`,
  transition `[translate,opacity] cubic-bezier(0,0,0,1)`, inline
  `transition-duration: 500ms; transition-delay: <staggered per card>ms`,
  active state `translate-y-0 opacity-100`

### Block 2 — stats band
- Wrapper: `relative border-y border-border-line bg-background-main`; height `90px`;
  borderTop/Bottom `1px solid rgb(241, 240, 238)`
- `.grid-layout px-7` → padding `0 28px`, columns shrink to `27.66px` @1440
- Row: `col-span-full flex items-center gap-4 py-5 lg:gap-6 lg:py-8`
  → @1440 padding `32px 0`; gap `24px`; height `88px`; width `1032px`

Label `<span class="shrink-0 text-[15px]/6 font-medium text-text-main lg:text-base/6">`
- below lg `15px/24px`, at lg `16px/24px`; fontWeight `500`; color `--color-text-main`

Divider `<span aria-hidden="true" class="h-5 w-px shrink-0 bg-border-primary">` — `20px × 1px`

Marquee track: `flex w-max backface-hidden [-webkit-perspective:1000px]`,
`animation: 40s linear infinite stats-scroll`

```css
@keyframes stats-scroll {
  0%   { transform: translate(0px); }
  100% { transform: translate(-50%); }
}
```

Each stat item `<span class="flex shrink-0 items-center gap-2 whitespace-nowrap">`:
- Label `<span class="text-xs/4 font-medium tracking-[0.02em] text-text-sub">` → `12px/16px`, `0.24px`, `…/.6`
- Value pill `<span class="rounded-[2px] bg-[rgba(31,167,122,0.08)] px-2 py-1 font-paper text-xs/4 font-medium tracking-[0.02em] text-brand [transform:translateZ(0)]">`
  containing an `<Odometer>`

Item group: `flex items-center gap-8 pr-8` → gap `32px`, paddingRight `32px`.
**Render the group twice** so the `-50%` wrap is seamless.

### Block 3 — spacer
`grid-layout relative pb-40` → `padding-bottom: 160px`, height `160px`, no content.

## Per-State Content

### Stat items (in order, both copies identical)
1. `Pages read`
2. `Search requests`
3. `API requests`
4. `Feedback provided`
5. `Content updates`

Values are live-incrementing odometers with thousands separators (`,` glyphs sit between
digit windows as static text, not odometer digits).

### Logo cards
8 cards, each cycling through several customer marks (observed: Alibaba, Perplexity, Lovable,
plus unlabeled others).

⚠️ **Deliberate deviation:** these are third-party trademarks. Do **not** reproduce the real
customer logos. Build the wall's structure, geometry, hover overlay, and staggered cycling
animation using **neutral placeholder marks** (e.g. simple wordmark text or generic glyphs)
supplied from a local array. Everything else in this spec is exact.

## Assets
- No downloaded images. Icons from the shared module: `<ArrowRightIcon />`.
- `<Odometer>` from the shared primitives module.

## Text Content (verbatim)
- `<h2>`: `Join ` **`20,000+`** ` of the world's most ambitious companies building for agents.`
  (the `20,000+` is `<strong class="font-medium text-text-main">`)
- Button: `Read customer stories`
- Band label: `Agents at work today`
- Stat labels: as listed above

## Responsive Behavior
- **Desktop (≥1024px):** intro panel `lg:w-1/3` on the left, logo wall right with `lg:border-l`;
  cards `aspect-[160/155]`; band `lg:gap-6 lg:py-8`.
- **Tablet (768px):** intro stacks above the wall (`flex-col`); wall already `sm:grid-cols-4`;
  cards revert to `aspect-[163/104]`; band `gap-4 py-5`.
- **Mobile (390px):** wall drops to `grid-cols-2`; everything stacked.
- **Breakpoints:** `sm` for the wall column count, `lg` for the side-by-side split.
