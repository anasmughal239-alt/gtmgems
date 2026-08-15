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
    heading: "Fit",
    links: [
      { label: "Who this is for", href: "#fit" },
      { label: "Qualified lead definition", href: "#qualified" },
      { label: "The honest math", href: "#math" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Book a call", href: "#book-a-call" },
      { label: "Bounso", href: "https://bounso.com" },
    ],
  },
];

export function GtmgemsFooter() {
  return (
    <footer className="relative w-full pt-18 lg:pt-[104px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 border-t border-border-line bg-background-main"
      />
      <div className="grid-layout relative isolate gap-y-12 px-4 pb-18 lg:px-0 lg:pb-16">
        <div className="col-span-full mb-10 flex flex-col gap-6 lg:col-span-5 lg:mb-0">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="flex w-fit items-center gap-2 rounded-[4px] outline-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand"
          >
            <GtmgemsMark className="size-6" />
            <span className="text-sm font-medium tracking-[-0.01em] text-text-main">
              gtmgems
            </span>
          </Link>
          <p className="max-w-[28rem] text-sm/5 text-text-sub">
            Fractional GTM engineering for funded B2B SaaS. Signal-based
            outbound infrastructure, built on tools you own.
          </p>
        </div>

        <div className="col-span-full grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:col-span-19 lg:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="text-xs/4 font-medium tracking-[0.02em] text-text-sub">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm/5 text-text-main transition-colors duration-100 hover:text-text-sub"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="col-span-full mt-10 border-t border-border-line lg:mt-16" />

        <div className="col-span-full mt-10 flex items-center justify-between gap-4">
          <span className="text-xs/4 text-text-sub">
            © {new Date().getFullYear()} gtmgems.
          </span>
          <span className="text-xs/4 text-text-sub">
            No case study yet: we&apos;re running this system against our own
            pipeline first.
          </span>
        </div>
      </div>
    </footer>
  );
}
