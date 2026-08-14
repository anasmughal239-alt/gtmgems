# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SiteHeader.tsx`
- **Interaction model:** static (sticky positioning only) + hover-opened nav dropdowns
- **Critical:** the header does **not** change on scroll. Verified by computed-style diff at
  `scrollY=0` vs `scrollY=600` — **zero properties differed**. Do not add a scroll listener,
  floating pill, shadow, or backdrop-filter.

## DOM Structure

Two sibling headers, swapped at `lg` (1024px):

```
<header class="sticky top-0 z-[100] hidden w-full border-b border-border-line bg-background-main lg:block">
  <div class="grid-layout h-16 items-center">
    <nav class="col-span-full flex h-16 w-full items-center justify-between relative">
      <a href="/" aria-label="Go to homepage">        <!-- logo, 104x24 -->
      <div class="absolute left-1/2 top-0 flex h-16 -translate-x-1/2 items-center">  <!-- nav items -->
      <div class="flex items-center gap-1.5">          <!-- Sign in + Contact sales -->
      <div class="absolute left-0 top-full isolate z-50 …">  <!-- dropdown viewport -->
    </nav>
  </div>
</header>

<header class="sticky top-0 z-[100] w-full bg-neutral-0 lg:hidden">
  <div class="relative z-[110] flex h-16 items-center justify-between border-b border-border-line bg-neutral-0 px-5">
    <a href="/" aria-label="Go to homepage">   <!-- same 104x24 logo -->
    <button aria-label="Open menu" class="-mr-1.5 inline-flex items-center justify-center rounded-[4px] border …">
  </div>
</header>
```

## Computed Styles (exact, from getComputedStyle)

### Desktop `<header>`
- position: `sticky`; top: `0px`; zIndex: `100`
- width: `100%`; height: `65px` (64px content + 1px border)
- backgroundColor: `lab(100 0 0)` → token `--color-background-main`
- borderBottom: `1px solid rgb(241, 240, 238)` → token `--color-border-line` (`#f1f0ee`)
- display: `block` at lg, `none` below

### `.grid-layout` wrapper
- display: `grid`; maxWidth: `1088px`; margin: `0 auto`; columnGap: `16px`
- height: `64px`; alignItems: `center`
- gridTemplateColumns: 24 × `29.91px` at 1440 / 12 × `45.41px` at md / 4 × `77.5px` at base

### `<nav>`
- display: `flex`; justifyContent: `space-between`; alignItems: `center`
- width: `1088px`; height: `64px`; position: `relative`

### Logo `<a>`
- display: `flex`; alignItems: `center`; height: `24px`; borderRadius: `4px`
- SVG is `104 × 24`, `viewBox="0 0 104 24"` — use `<MintlifyLogo />` from the shared icons module
- focus: `outline-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand`

### Nav item triggers (`Products`, `Solutions`, `Resources`, `Pricing`)
Centered group: `absolute left-1/2 top-0 flex h-16 -translate-x-1/2 items-center` (width 397.36px at 1440).

- fontSize: `14px`; fontWeight: `500`; lineHeight: `16px`
- color: `lab(2.42579 -0.165291 -0.470081)` → `--color-text-main`
- padding: `4px 10px`; height: `64px` (full-bleed hit target)
- display: `flex`; alignItems: `center`; gap: `4px`
- transition: `background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- `Products` / `Solutions` / `Resources` are `<button>` with a trailing chevron icon
- `Pricing` is `<a href="/pricing">` with **no** chevron

### Right-side actions — `div.flex.items-center.gap-1.5` (gap `6px`, width 202.66px)

**"Sign in"** — `<a href="https://app.mintlify.com">`, secondary variant:
- fontSize: `14px`; fontWeight: `500`; lineHeight: `16px`
- color: `--color-text-main`; backgroundColor: `lab(100 0 0)`
- padding: `8px 14px`; height: `34px`; borderRadius: `4px`
- border: `1px solid lab(2.42579 -0.165291 -0.470081 / 0.07)` → `--color-border-sub`
- display: `inline-flex`; alignItems: `center`; gap: `4px`
- transition: `transform, color, background-color, border-color 0.1s cubic-bezier(0.4, 0, 0.2, 1)`

**"Contact sales"** — `<a href="/contact/sales">`, primary variant:
- color: `lab(100 0 0)`; backgroundColor: `lab(2.42579 -0.165291 -0.470081)` → `--color-background-invert`
- padding: `8px 14px`; height: `34px`; borderRadius: `4px`; border: `1px solid transparent`
- same font metrics and transition as above

### Mobile `<header>` (below lg)
- position: `sticky`; top: `0`; zIndex: `100`; backgroundColor: `rgb(254, 253, 251)` → `--color-neutral-0`
- No border on the header itself; the **inner bar** carries it:
  - `relative z-[110] flex h-16 items-center justify-between border-b border-border-line bg-neutral-0 px-5`
  - height `64px`, horizontal padding `20px`
- Right side: single `<button aria-label="Open menu">`, `-mr-1.5`, `inline-flex items-center justify-center rounded-[4px] border`, containing a hamburger icon.

## States & Behaviors

### Scroll
**None.** See the note at the top — this is the single most important fact in this spec.

### Nav trigger hover
- **Trigger:** pointer enters trigger
- **Change:** background-color shifts to a subtle tint (`--color-background-soft`, `rgba(5,5,5,0.03)`)
- **Transition:** `background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

### Nav dropdown panels
Radix `NavigationMenu`: `data-slot="navigation-menu"`, triggers carry `data-state` /
`aria-expanded`, viewport anchored `absolute left-0 top-full isolate z-50` (top `64px`).

⚠️ **Panel contents were NOT captured** — Radix refuses to open for synthetic/driver pointer
events, so `[data-slot="navigation-menu-content"]` never mounted. **Build the triggers with a
standard shadcn `NavigationMenu` and leave the panel contents as a TODO comment.** Do not
invent menu links.

### Button hover
- Primary: `hover:bg-background-invert/90`
- Secondary / Sign in: `hover:bg-background-soft`
- Both `0.1s cubic-bezier(0.4, 0, 0.2, 1)`

## Assets
- `<MintlifyLogo />` — shared icons module (`src/components/sites/www-mintlify-com-6fea74f6/shared/icons.tsx`).
  Two-tone: mark paths `#18E299` and `#0C8C5E`, wordmark paths `fill="var(--color-text-main)"`.
- `<ChevronDownIcon />`, `<MenuIcon />` — same module.

## Text Content (verbatim)
`Products` · `Solutions` · `Resources` · `Pricing` · `Sign in` · `Contact sales`
Logo link `aria-label="Go to homepage"`; mobile button `aria-label="Open menu"`.

## Responsive Behavior
- **Desktop (≥1024px):** full header; logo left, nav absolutely centered, actions right.
- **Tablet (768px) & Mobile (390px):** desktop header `display:none`; mobile header shows
  logo + hamburger only, inner bar `px-5`, `h-16`, `bg #fefdfb`.
- **Breakpoint:** `lg` = 1024px.
