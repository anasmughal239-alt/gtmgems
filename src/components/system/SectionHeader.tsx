import Link from "next/link";

import { mintButton } from "./button-variants";
import { ArrowRightIcon } from "./icons";

/**
 * The header block that opens sections 2-7. Structure is identical across all
 * of them: a 2px brand-green tick pinned to the left edge, a heading whose
 * second sentence is muted, and an optional CTA aligned to the baseline.
 */
export function SectionHeader({
  title,
  subtitle,
  cta,
}: {
  title: string;
  /** Rendered as a muted block below the title, inside the same <h2>. */
  subtitle: string;
  cta?: { label: string; href: string; external?: boolean };
}) {
  return (
    <div className="bg-background-main">
      <div className="grid-layout relative py-8 lg:py-10">
        <span
          aria-hidden="true"
          className="absolute left-0 top-12 block h-6 w-[2px] -translate-y-1/2 bg-brand-base lg:top-15"
        />
        <header className="col-span-full flex flex-col gap-10 px-7 md:flex-row md:items-end md:justify-between md:gap-6 lg:col-start-2 lg:col-end-24 lg:px-0">
          <div className="flex max-w-[41.5rem] flex-col gap-7 md:self-start">
            <div className="flex flex-col gap-4">
              <h2 className="text-balance text-[1.75rem]/8 font-medium tracking-[-0.72px] text-foreground-primary lg:text-[2.25rem]/[2.5rem]">
                {title}
                <span className="block text-foreground-tertiary">
                  {subtitle}
                </span>
              </h2>
            </div>
          </div>
          {cta ? (
            <div className="shrink-0 md:pb-1">
              <Link
                href={cta.href}
                {...(cta.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={mintButton({
                  variant: "primary",
                  size: "md",
                  icon: "trailing",
                })}
              >
                {cta.label}
                <ArrowRightIcon className="size-4 opacity-50 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none" />
              </Link>
            </div>
          ) : null}
        </header>
      </div>
    </div>
  );
}

/** The empty 160px spacer that closes sections 2-7. */
export function SectionSpacer() {
  return <div className="grid-layout relative pb-30 lg:pb-40" />;
}
