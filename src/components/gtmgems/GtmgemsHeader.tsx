import Link from "next/link";

import { mintButton } from "@/components/system/button-variants";

import { GtmgemsMark, MenuIcon } from "./icons";

const NAV_ITEMS = [
  { label: "Infrastructure", href: "/cold-email-infrastructure" },
  { label: "LinkedIn", href: "/linkedin-outbound" },
  { label: "Pricing", href: "#pricing" },
];

export function GtmgemsHeader() {
  return (
    <>
      {/* Desktop — lg and up. Same chrome as the Mintlify clone: the header
          does not react to scroll (verified as intentional, see QA_REPORT.md
          in the clone research folder — kept as house style here). */}
      <header className="sticky top-0 z-[100] hidden w-full border-b border-border-line bg-background-main lg:block">
        <div className="grid-layout h-16 items-center">
          <nav className="relative col-span-full flex h-16 w-full items-center justify-between">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex items-center gap-2 rounded-[4px] outline-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand"
            >
              <GtmgemsMark className="size-6" />
              <span className="text-sm font-medium tracking-[-0.01em] text-text-main">
                gtmgems
              </span>
            </Link>

            <div className="absolute left-1/2 top-0 flex h-16 -translate-x-1/2 items-center">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex h-16 items-center gap-1 px-2.5 py-1 text-sm/4 font-medium text-text-main outline-offset-2 transition-colors duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-background-soft focus-visible:outline-2 focus-visible:outline-brand"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="#book-a-call"
              className={mintButton({ variant: "primary", size: "sm" })}
            >
              Book a call
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile — below lg */}
      <header className="sticky top-0 z-[100] w-full bg-neutral-0 lg:hidden">
        <div className="relative z-[110] flex h-16 items-center justify-between border-b border-border-line bg-neutral-0 px-5">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex items-center gap-2 rounded-[4px] outline-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand"
          >
            <GtmgemsMark className="size-6" />
            <span className="text-sm font-medium tracking-[-0.01em] text-text-main">
              gtmgems
            </span>
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
