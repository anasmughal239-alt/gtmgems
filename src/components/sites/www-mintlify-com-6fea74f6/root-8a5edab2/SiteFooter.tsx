import Link from "next/link";

import { MintlifyLogo } from "@/components/system/icons";
import type { FooterColumn } from "@/types/mintlify";

const DEFAULT_COLUMNS: FooterColumn[] =
  [
    {
      heading: "Explore",
      links: [
        { label: "Startups", href: "/startups" },
        { label: "Enterprise", href: "/enterprise" },
        { label: "Build vs Buy", href: "/build-vs-buy" },
        { label: "Switch", href: "/switch" },
        { label: "OSS program", href: "/oss" },
      ],
    },
    {
      heading: "Learn",
      links: [
        { label: "Resources", href: "/resources" },
        { label: "Customers", href: "/customers" },
        { label: "Blog", href: "/blog" },
        { label: "Pricing", href: "/pricing" },
        { label: "Guides", href: "/guides" },
        { label: "Feature requests", href: "/feature-requests" },
        { label: "Library", href: "/library" },
        { label: "Index", href: "/index" },
        { label: "Convert from code", href: "/convert" },
        { label: "Agent score", href: "/score" },
      ],
    },
    {
      heading: "Documentation",
      links: [
        { label: "Getting started", href: "/docs" },
        { label: "API reference", href: "/docs/api-reference" },
        { label: "Components", href: "/docs/components" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Careers", href: "/careers" },
        { label: "Events", href: "/events" },
        { label: "Wall of love", href: "/wall-of-love" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy policy", href: "/legal/privacy" },
        { label: "Responsible disclosure", href: "/legal/disclosure" },
        { label: "Terms of service", href: "/legal/terms" },
        { label: "Security", href: "/security" },
        { label: "DSR/DSAR", href: "/legal/dsr" },
      ],
    },
  ];

function XIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M12.6 1.5h2.3l-5 5.7 5.9 7.8h-4.6l-3.6-4.7-4.1 4.7H1.2l5.4-6.1L1 1.5h4.7l3.3 4.3 3.6-4.3Zm-.8 12.1h1.3L4.9 2.8H3.5l8.3 10.8Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M8 .2a8 8 0 0 0-2.5 15.6c.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.4.7 0-.6.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1 0-.2-.3-1 .1-2.1 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.5.8 1.2.8 2.1 0 3.1-1.8 3.8-3.6 4 .3.2.5.7.5 1.5v2.2c0 .2.1.5.6.4A8 8 0 0 0 8 .2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M3.6 5.3H1V15h2.6V5.3ZM2.3 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM15 9.4c0-2.6-1.4-3.8-3.2-3.8-1.5 0-2.2.8-2.6 1.4V5.3H6.6V15h2.6V9.6c0-1.1.5-1.8 1.5-1.8s1.4.7 1.4 1.8V15H15V9.4Z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "X", href: "https://x.com/mintlify", Icon: XIcon },
  { label: "GitHub", href: "https://github.com/mintlify", Icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/mintlify",
    Icon: LinkedInIcon,
  },
];

export function SiteFooter({
  columns = DEFAULT_COLUMNS,
}: { columns?: FooterColumn[] } = {}) {
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
            className="flex w-fit items-center rounded-[4px] outline-none outline-offset-2 focus-visible:outline-2 focus-visible:outline-brand"
          >
            <MintlifyLogo />
          </Link>

          <span className="inline-flex w-fit items-center gap-1.5 rounded border border-black/[0.04] bg-neutral-0 py-1 pl-1.5 pr-2 text-xs/4 font-medium tracking-[0.02em] text-text-sub">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-brand-base"
            />
            All systems normal
          </span>
        </div>

        <div className="col-span-full grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:col-span-19 lg:grid-cols-5">
          {columns.map((col) => (
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
            © {new Date().getFullYear()} Mintlify, Inc.
          </span>
          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-foreground-muted transition-colors duration-100 hover:text-text-main"
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
