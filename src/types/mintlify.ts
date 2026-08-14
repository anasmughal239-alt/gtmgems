import type { CardCanvasVariant } from "@/components/system/CardCanvas";

/** Content structures observed on https://www.mintlify.com/ */

export interface NavItem {
  label: string;
  /** Present for plain links; absent for dropdown triggers. */
  href?: string;
  /** True for Radix NavigationMenu triggers (render a chevron). */
  hasDropdown?: boolean;
}

export interface SectionCta {
  label: string;
  href: string;
  external?: boolean;
}

export interface StatItem {
  label: string;
  /** Digits plus separators; non-digits render as static glyphs. */
  value: string;
}

export interface LogoCard {
  /** Neutral placeholder marks — real customer trademarks are not reproduced. */
  marks: string[];
  /** Stagger applied to this card's cross-fade, in ms. */
  delayMs: number;
}

export interface FeatureCardItem {
  title: string;
  /** Tailwind span classes controlling the card's footprint in the grid. */
  span: string;
  variant: CardCanvasVariant;
}

export interface CustomerStory {
  title: string;
  href: string;
  stats: StatItem[];
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface BlogPost {
  category: string;
  date: string;
  title: string;
  href: string;
  image: string;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
