import Link from "next/link";

import { GtmgemsMark } from "./icons";

const COLUMNS = [
  {
    heading: "Service",
    links: [
      { label: "Cold email infrastructure", href: "/cold-email-infrastructure" },
      { label: "LinkedIn outbound", href: "/linkedin-outbound" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "How it works",
    links: [
      { label: "Signals", href: "#signals" },
      { label: "Deliverability spec", href: "#spec" },
      { label: "Process", href: "#how-it-runs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Who this is for", href: "#fit" },
      { label: "Book a call", href: "#book-a-call" },
      { label: "Bounso", href: "https://bounso.com" },
    ],
  },
];

export function GtmgemsFooter() {
  return (
    <footer className="border-t border-border-line bg-background-main pb-16 pt-16 lg:pt-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex w-fit items-center gap-2 rounded-full outline-none focus-visible:outline-2 focus-visible:outline-brand"
            >
              <GtmgemsMark className="size-6" />
              <span className="text-sm font-medium tracking-[-0.01em] text-text-main">
                gtmgems
              </span>
            </Link>
            <p className="max-w-sm text-sm/6 text-text-sub">
              Fractional GTM engineering for funded B2B SaaS. Signal-based
              outbound infrastructure, built on tools you own.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <h3 className="text-xs font-medium uppercase tracking-[0.08em] text-text-soft">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-main transition-colors duration-200 hover:text-text-sub"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-text-soft">
            &copy; {new Date().getFullYear()} gtmgems.
          </span>
          <span className="text-xs text-text-soft">
            No case study yet: we&apos;re running this system against our own
            pipeline first.
          </span>
        </div>
      </div>
    </footer>
  );
}
