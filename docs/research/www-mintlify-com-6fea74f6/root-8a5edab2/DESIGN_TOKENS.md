# Design Tokens — mintlify.com

Read from `getComputedStyle(document.documentElement)` — these are the resolved
Tailwind v4 `@layer theme` custom properties, not guesses.

## Brand

| Token | Value |
| --- | --- |
| `--color-brand-base` | `#0c8c5e` |
| `--color-brand` / `--color-brand-light` | `lab(51.3415% -41.5657 15.3527)` |
| `--color-brand-vivid` | `#1fa77a` |
| `--color-speedy-mint` | `#18e299` |
| `--color-mint-dark` | `#17cf85` |
| `--color-light-mint` | `#d2f7ea` |
| `--color-grass` | `#1b4637` |
| `--color-midnight-green` | `#0e1d18` |
| `--color-new-green` | `#003723` |
| `--color-brand-8 / -10 / -20` | `rgba(12,140,94,.08 / .1 / .2)` |

## Gradient ramp (hero glow, accents)

`--color-gradient-green-1..6`: `#18e299`, `#58e97f`, `#6dee6b`, `#81f25a`, `#95f648`, `#a8fb36`

Hero mockup glow: `linear-gradient(106deg, rgba(68,174,255,.5) 0%, rgba(24,226,153,.5) 35%, rgba(186,255,36,.5) 65%, rgba(24,226,153,.5) 100%)` + `blur(24px)`

## Neutrals

| Token | Value |
| --- | --- |
| `--color-neutral-0` | `#fefdfb` |
| `--color-neutral-100` | `#faf8f5` |
| `--color-neutral-200` | `#ebe9e6` |
| `--color-neutral-250` | `#d9d7d4` |
| `--color-neutral-300` | `#cfcdca` |
| `--color-neutral-400` | `#969e9b` |
| `--color-neutral-500` | `#717d79` |
| `--color-neutral-700` | `#485450` |
| `--color-neutral-800` | `#121715` |

## Surfaces

| Token | Value |
| --- | --- |
| `--color-background-main` | `lab(100% 0 0)` (= `#fff`) |
| `--color-background-primary` | `#fefdfb` |
| `--color-background-secondary` | `#faf8f5` |
| `--color-background-tertiary` | `#ebe9e6` |
| `--color-background-invert` | `lab(2.42579% -.165291 -.470081)` (near-black `#050505`) |
| `--color-background-soft` | `lab(2.42579% -.165291 -.470081/.03)` |

## Text

| Token | Value | Used for |
| --- | --- | --- |
| `--color-text-main` | `lab(2.42579% -.165291 -.470081)` | headings, nav labels |
| `--color-text-soft` | `…/.8` | badge label |
| `--color-text-sub` | `…/.6` | hero paragraph, section subheads |
| `--color-text-base-tertiary` | `…/.4` | — |
| `--color-muted` | `…/.5` | — |
| `--color-text-invert` | `lab(100% 0 0)` | text on black buttons |

## Borders

| Token | Value | Used for |
| --- | --- | --- |
| `--color-border-line` | `#f1f0ee` | section dividers, header bottom border |
| `--color-border-primary` | `rgba(0,0,0,.04)` | cards, logo-wall cells |
| `--color-border-secondary` | `rgba(0,0,0,.06)` | — |
| `--color-border-sub` | `…/.07` | secondary buttons, hero badge |
| `--color-border-soft` | `…/.15` | — |

## Type scale

`--text-xs .75rem` (lh `1/.75`) · `--text-sm .875rem` (lh `1.25/.875`) · `--text-base 1rem`
· `--text-lg 1.125rem` · `--text-xl 1.25rem` · `--text-2xl 1.5rem` · `--text-3xl 1.875rem`

Weights: `400 / 500 / 600 / 700`. Body and UI are almost entirely 400 and 500.

## Radii

`--radius-sm .25rem` · `--radius-md .375rem` · `--radius-lg .5rem` · `--radius-xl .75rem`
· `--radius-2xl 1rem` · `--radius-3xl 1.5rem` · `--radius-4xl 2rem`

Observed in use: `2px` (badges, logo pills), `4px` (buttons), `6px` (logo cards),
`12px` (glow), `2.22cqw` container-relative (mockup top corners → 23.47px at 1057px).

## Spacing

`--spacing: .25rem` (Tailwind default 4px step).

## Motion

| Token | Value |
| --- | --- |
| `--text-swap-dur` | `.15s` |
| `--text-swap-ease` | `ease-in-out` |
| `--text-swap-translate-y` | `4px` |
| `--text-swap-blur` | `2px` |
| `--ease-out-soft` | used by odometer (`transform 700ms`) |

Standard button easing: `cubic-bezier(0.4, 0, 0.2, 1)` at `0.1s`.
Icon easing: `ease-out` at `150ms`. Nav hover: `0.3s cubic-bezier(0.4,0,0.2,1)`.

## Fonts (as shipped by mintlify.com)

| CSS family | Real face | Role |
| --- | --- | --- |
| `inter` | Inter | all UI + body |
| `arizonaFlare` (`font-serif`) | ABC Arizona Flare — **commercial** | `<h1>` display |
| `paperMono` (`font-paper`) | Paper Mono — **commercial** | numerals in badges/stats |

See `OUTPUT_PLAN.md` for the free substitutes used in the clone.
