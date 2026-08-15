import Link from "next/link";

import { GtmButton } from "./ui/Button";
import { GtmgemsMark } from "./icons";

const NAV_ITEMS = [
  { label: "Signals", href: "#signals" },
  { label: "Spec", href: "#spec" },
  { label: "Process", href: "#how-it-runs" },
  { label: "Fit", href: "#fit" },
  { label: "Pricing", href: "#pricing" },
];

/** Floating "Island" nav (high-end-visual-design's Fluid Island pattern):
 *  detached pill, not an edge-to-edge sticky bar. Sticky top-4 so it stays
 *  reachable without eating viewport like a full-width bar would. */
export function GtmgemsHeader() {
  return (
    <header className="sticky top-4 z-[100] mx-auto hidden w-fit lg:block">
      <nav className="flex items-center gap-1 rounded-full border border-border-primary bg-background-main/90 py-1.5 pl-4 pr-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-md">
        <Link
          href="/"
          aria-label="Go to homepage"
          className="mr-2 flex items-center gap-1.5 rounded-full outline-none focus-visible:outline-2 focus-visible:outline-brand"
        >
          <GtmgemsMark className="size-5" />
        </Link>

        {NAV_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-full px-3 py-1.5 text-sm text-text-sub transition-colors duration-200 hover:bg-black/[0.03] hover:text-text-main"
          >
            {item.label}
          </Link>
        ))}

        <div className="ml-1">
          <GtmButton href="#book-a-call" size="sm" icon={false}>
            Book a call
          </GtmButton>
        </div>
      </nav>
    </header>
  );
}

/** Mobile: simple bar, no floating pill (avoids fighting the viewport
 *  edge on small screens). */
export function GtmgemsMobileHeader() {
  return (
    <header className="sticky top-0 z-[100] flex w-full items-center justify-between border-b border-border-line bg-background-main px-5 py-3 lg:hidden">
      <Link
        href="/"
        aria-label="Go to homepage"
        className="flex items-center gap-1.5"
      >
        <GtmgemsMark className="size-5" />
        <span className="text-sm font-medium text-text-main">gtmgems</span>
      </Link>
      <GtmButton href="#book-a-call" size="sm" icon={false}>
        Book a call
      </GtmButton>
    </header>
  );
}
