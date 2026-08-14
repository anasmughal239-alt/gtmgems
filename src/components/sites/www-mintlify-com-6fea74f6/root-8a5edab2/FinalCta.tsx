import Link from "next/link";

import { mintButton } from "@/components/system/button-variants";
import { ArrowRightIcon } from "@/components/system/icons";
import type { SectionCta } from "@/types/mintlify";

export function FinalCta({
  title = "The knowledge platform built for agents",
  description,
  secondaryCta = { label: "Talk to sales", href: "/contact/sales" },
  primaryCta = {
    label: "Get started",
    href: "https://app.mintlify.com/signup",
  },
}: {
  title?: string;
  description?: string;
  /** Omit to show only the primary button. */
  secondaryCta?: SectionCta | null;
  primaryCta?: SectionCta;
} = {}) {
  return (
    <section className="relative overflow-x-clip border-y border-b-0 border-border-line bg-background-main">
      <div className="grid-layout relative border-x border-border-line">
        <div className="col-span-full flex min-w-0 flex-col items-start gap-10 px-8 pb-14 pt-8 text-left sm:gap-12 md:gap-14 lg:col-start-2 lg:col-end-24 lg:flex-row lg:items-center lg:justify-between lg:px-0 lg:py-12">
          <div className="flex max-w-[26rem] flex-col gap-3">
            <h2 className="text-balance font-serif text-[1.75rem]/[2rem] font-medium tracking-[-0.02em] text-foreground-primary sm:max-w-none lg:text-[2.25rem]/[2.5rem]">
              {title}
            </h2>
            {description ? (
              <p className="text-sm/5 text-text-sub">{description}</p>
            ) : null}
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2">
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={mintButton({ variant: "muted", size: "md" })}
              >
                {secondaryCta.label}
              </Link>
            ) : null}
            <a
              href={primaryCta.href}
              {...(primaryCta.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={mintButton({
                variant: "primary",
                size: "md",
                icon: "trailing",
                className: "pl-5",
              })}
            >
              {primaryCta.label}
              <ArrowRightIcon className="size-4 opacity-50 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
