# Design system

Everything under `src/components/system/` is page-agnostic and safe to use on new
pages. Everything under `src/components/sites/<site-key>/<page-key>/` is a clone of
one specific page — treat it as reference, or import it and pass your own props.

## Building a new page

```tsx
// src/app/pricing/page.tsx
import { SiteHeader } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SiteHeader";
import { SiteFooter } from "@/components/sites/www-mintlify-com-6fea74f6/root-8a5edab2/SiteFooter";
import { SectionHeader, SectionSpacer } from "@/components/system/SectionHeader";
import { FeatureCard } from "@/components/system/FeatureCard";
import { mintButton } from "@/components/system/button-variants";

export default function Pricing() {
  return (
    <>
      <SiteHeader />
      <main>
        <section>
          <SectionHeader
            title="Simple, predictable pricing."
            subtitle="Start free. Scale when you need to."
            cta={{ label: "Talk to sales", href: "/contact/sales" }}
          />
          <div className="grid-layout relative">
            <div className="col-span-full py-4 lg:p-4">
              <div className="grid grid-cols-1 gap-4 px-4 lg:grid-cols-3 lg:px-0">
                <FeatureCard>…</FeatureCard>
              </div>
            </div>
          </div>
          <SectionSpacer />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
```

## The layout primitive

`.grid-layout` (defined in `globals.css`) is what every section on the real site sits
on. Put it on a wrapper, then place children with `col-span-full` or explicit
`lg:col-start-N lg:col-end-M`.

| Breakpoint | Columns | Container |
| --- | --- | --- |
| base | 4 | 100% − 32px padding |
| md (768) | 12 | 100% − 47px padding |
| lg (1024+) | 24 | max-width 1088px, centered |

## Primitives

| Import | What it is |
| --- | --- |
| `system/SectionHeader` | `SectionHeader` (green tick + heading + optional CTA) and `SectionSpacer` (the 160px section gap). Every section on the site opens and closes with these. |
| `system/FeatureCard` | The warm `#f9f6f3` rounded-xl surface. `as` prop takes `article` / `div` / `figure`. |
| `system/button-variants` | `mintButton({ variant, size, icon, className })` → class string. |
| `system/CardCanvas` | Animated background. Variants: `grid`, `orbit`, `wave`, `pulse`. |
| `system/Odometer` | Rolling-digit counter. Non-digits render as static glyphs, so `"42.7%"` and `"18,204,663"` both work. |
| `system/icons` | `MintlifyLogo`, `ArrowRightIcon`, `ChevronDownIcon`, `MenuIcon`, `GoogleIcon`. |
| `system/AutomationCard` | Feature card: icon top-left, illustration floating, copy anchored bottom. |
| `system/illustration/StreamLines` | The fanning green lines. |
| `system/illustration/mock` | `IllustrationStage`, `MockWindow`, `MockBar`, `MockBadge`, `MockToggle`, `MockControlRow`, `MockConnector`. |
| `system/illustration/presets` | Four finished illustrations to copy and vary. |

## Automation cards

The illustrated feature cards. See `/kit` for all four rendered.

```tsx
<AutomationCard
  icon={<BookIcon />}
  title="Best-in-class docs without building anything"
  description="Point Mintlify to the repo you want documentation for."
  illustration={<DocsSyncIllustration />}
/>
```

**The grid needs an explicit row height** — without it the cards collapse and the
illustration collides with the copy:

```tsx
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:[grid-auto-rows:26rem]">
```

### Building a new illustration

Compose `mock.tsx` pieces inside an `IllustrationStage`. The stage is a
**fixed-size canvas that scales as a unit** rather than reflowing — that's what
keeps the composition identical at every breakpoint, and it's how the real site
does it. Position children with absolute pixel offsets against the stage's
`width` × `height`.

```tsx
export function MyIllustration() {
  return (
    <IllustrationStage width={635} height={247}>
      <MockWindow right={0} top={0} width={380} height={247}>
        <MockBar left={9} top={9} width={31} height={11} tone="accent" />
        <MockBar left={9} top={45} width={26} />
        <MockBar left={92} top={45} width={140} height={9} />
      </MockWindow>
      <MockConnector left={198} top={100} width={70} />
      <MockControlRow label="Update config" left={0} top={90} width={268} />
    </IllustrationStage>
  );
}
```

- `MockBar` tones: `muted` (grey skeleton, 50% opacity), `accent` (brand green), `strong` (darker grey)
- `MockToggle` defaults to the on state, 33×19
- `MockConnector` draws a dashed brand-green line; pass `vertical`
- Override the responsive scaling with `scaleClass` (default `scale-[0.36] sm:scale-[0.52] lg:scale-100`)

### StreamLines

`<StreamLines />` is the fanning green background. It's SVG, so it's crisp at
any size, renders on the server, and costs no JavaScript — unlike the homepage's
version of the same motif, which is painted into a `<canvas>` and therefore
couldn't be extracted at all. The 8 stroke colours are a verified linear
interpolation from `#18E299` to `#BAFF24`; the curves are generated from four
anchor points rather than shipping the original ~48KB of path data.

`AutomationCard` includes it by default; pass `streamLines={false}` to omit.

### mintButton

Emits classes rather than rendering a component, so it works on `<a>`, `<Link>`, and
`<button>` without forcing a client component — the same approach the real site uses.

```tsx
<Link href="/x" className={mintButton({ variant: "primary", size: "md", icon: "trailing" })}>
  Get started
  <ArrowRightIcon className="size-4 opacity-50 group-hover:opacity-100" />
</Link>
```

- **variant** — `primary` (near-black), `secondary` (white + hairline border), `muted` (warm white)
- **size** — `sm` (34px, header), `md` (42px, page CTAs)
- **icon** — `none` | `leading` | `trailing`, which sets the asymmetric padding the real
  buttons use (`pl-4 pr-3` with a trailing icon, etc.)

## Reusing cloned sections with your own content

Every section component takes optional props and falls back to the mintlify.com
content, so you can re-skin one without editing it:

```tsx
<Testimonials
  title="What our customers say"
  cta={{ label: "More stories", href: "/stories" }}
  testimonials={[{ name: "…", role: "…", quote: "…" }]}
/>
```

Props available: `SiteHeader({navItems})`, `SiteFooter({columns})`,
`SocialProof({stats, logoCards})`, `PlatformOverview({title, subtitle, cta, cards})`,
`BusinessSizes({…, slides})`, `ScaleAgentWeb({…, stats})`,
`StartupsSection({…, cards})`, `Testimonials({…, testimonials})`,
`LatestUpdates({…, posts})`.

Types live in `src/types/mintlify.ts`.

## Tokens

Use the semantic Tailwind classes, not raw hex — they are defined in `globals.css`
from the live site's computed custom properties.

- Surfaces: `bg-background-main`, `bg-background-primary`, `bg-background-invert`, `bg-background-soft`
- Text: `text-text-main`, `text-text-sub` (60%), `text-text-soft` (80%), `text-text-invert`
- Borders: `border-border-line` (section dividers), `border-border-sub` (controls), `border-border-primary`
- Brand: `text-brand`, `bg-brand-base`, plus `--color-gradient-green-1..6` for ramps
- Fonts: `font-sans` (Inter), `font-serif` (display), `font-paper` (mono numerals)

## Caveats

- `font-serif` is **Instrument Serif**, standing in for the licensed ABC Arizona Flare.
  `font-paper` is Geist Mono standing in for Paper Mono. Headline wrapping will differ
  slightly from mintlify.com.
- `CardCanvas` is an original animation, not a reproduction of the site's artwork.
- The template's `src/components/ui/button.tsx` is untouched stock shadcn/base-ui and
  is **not** used by any of this. Use `mintButton` instead.
