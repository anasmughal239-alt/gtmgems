import Link from "next/link";

import { mintButton } from "@/components/system/button-variants";
import {
  ChevronDownIcon,
  MenuIcon,
  MintlifyLogo,
} from "@/components/system/icons";
import type { NavItem } from "@/types/mintlify";

// NOTE: the header does NOT change on scroll. Verified by diffing computed
// styles at scrollY 0 vs 600 on the live site — zero properties differed.
// It is a plain sticky bar; do not add a scroll listener.

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Products", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Pricing", href: "/pricing" },
];

const navItemClass =
  "flex h-16 cursor-pointer items-center gap-1 px-2.5 py-1 text-sm/4 font-medium text-text-main outline-offset-2 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-background-soft focus-visible:outline-2 focus-visible:outline-brand";

export function SiteHeader({
  navItems = DEFAULT_NAV_ITEMS,
}: { navItems?: NavItem[] } = {}) {
  return (
    <>
      {/* Desktop — lg and up */}
      <header className="sticky top-0 z-[100] hidden w-full border-b border-border-line bg-background-main lg:block">
        <div className="grid-layout h-16 items-center">
          <nav className="relative col-span-full flex h-16 w-full items-center justify-between">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex items-center rounded-[4px] outline-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand"
            >
              <MintlifyLogo />
            </Link>

            <div className="absolute left-1/2 top-0 flex h-16 -translate-x-1/2 items-center">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  // TODO: dropdown panel contents were not captured — Radix
                  // NavigationMenu refuses to open for synthetic pointer
                  // events, so the panels never mounted during extraction.
                  <button
                    key={item.label}
                    type="button"
                    aria-expanded="false"
                    className={navItemClass}
                  >
                    {item.label}
                    <ChevronDownIcon className="size-4 opacity-50" />
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? "#"}
                    className={navItemClass}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <a
                href="https://app.mintlify.com"
                className={mintButton({ variant: "secondary", size: "sm" })}
              >
                Sign in
              </a>
              <Link
                href="/contact/sales"
                className={mintButton({ variant: "primary", size: "sm" })}
              >
                Contact sales
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile — below lg */}
      <header className="sticky top-0 z-[100] w-full bg-neutral-0 lg:hidden">
        <div className="relative z-[110] flex h-16 items-center justify-between border-b border-border-line bg-neutral-0 px-5">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center rounded-[4px] outline-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand"
          >
            <MintlifyLogo />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="-mr-1.5 inline-flex size-[34px] items-center justify-center rounded-[4px] border border-border-sub text-text-main outline-offset-2 transition-colors duration-100 hover:bg-background-soft focus-visible:outline-2 focus-visible:outline-brand"
          >
            <MenuIcon className="size-4" />
          </button>
        </div>
      </header>
    </>
  );
}
