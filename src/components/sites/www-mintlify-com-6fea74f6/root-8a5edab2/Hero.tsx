import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

import { mintButton } from "@/components/system/button-variants";
import { ArrowRightIcon, GoogleIcon } from "@/components/system/icons";
import { Odometer } from "@/components/system/Odometer";
import type { SectionCta } from "@/types/mintlify";

import { HeroCanvas } from "./HeroCanvas";

const ASSETS = "/sites/www-mintlify-com-6fea74f6/root-8a5edab2/images";

interface EyebrowBadge {
  label: string;
  value: string;
  href: string;
}

const DEFAULT_EYEBROW: EyebrowBadge = {
  label: "Agent traffic",
  value: "42.7%",
  href: "/data",
};

const DEFAULT_VISUAL = (
  <>
    <div
      aria-hidden="true"
      // rounded-t-[12px], not rounded-t-xl: this template's radius scale
      // resolves xl to 14px, mintlify.com's to 12px.
      className="pointer-events-none absolute inset-[15px] bottom-[72px] -z-10 rounded-t-[12px] blur-[24px] dark:hidden"
      style={{
        backgroundImage:
          "linear-gradient(106deg, rgba(68, 174, 255, 0.5) 0%, rgba(24, 226, 153, 0.5) 35%, rgba(186, 255, 36, 0.5) 65%, rgba(24, 226, 153, 0.5) 100%)",
      }}
    />
    <div className="absolute inset-0 overflow-hidden rounded-t-[2.22cqw] border-l border-r border-t border-border-primary">
      <Image
        src={`${ASSETS}/docs-preview-light.svg`}
        alt=""
        aria-hidden="true"
        fill
        priority
        className="pointer-events-none object-contain object-top dark:hidden"
      />
      <Image
        src={`${ASSETS}/docs-preview-dark.svg`}
        alt=""
        aria-hidden="true"
        fill
        className="pointer-events-none hidden object-contain object-top dark:block"
      />
    </div>
  </>
);

export function Hero({
  eyebrow = DEFAULT_EYEBROW,
  title = "The knowledge infrastructure agents build on",
  description = (
    <>
      Self-updating documentation for{" "}
      <span className="font-medium text-text-main">startups</span>,{" "}
      <span className="font-medium text-text-main">enterprises</span>, and{" "}
      <span className="font-medium text-text-main">agents</span>.
    </>
  ),
  primaryCta = {
    label: "Get started",
    href: "https://app.mintlify.com/signup",
  },
  secondaryCta,
  secondaryIcon = <GoogleIcon className="size-4" />,
  visual = DEFAULT_VISUAL,
  titleClassName = "font-serif text-[2.5rem]/[2.75rem] tracking-[-0.8px] text-text-main lg:text-[3.125rem]/[3.25rem] lg:tracking-[-2px]",
}: {
  eyebrow?: EyebrowBadge | null;
  title?: string;
  description?: ReactNode;
  primaryCta?: SectionCta;
  /** Omit to drop the secondary button entirely. */
  secondaryCta?: SectionCta;
  /** Leading icon for the secondary button. Defaults to the Google mark used on mintlify.com. */
  secondaryIcon?: ReactNode;
  /** The framed panel on the right. Defaults to the docs-preview mockup. */
  visual?: ReactNode;
  /**
   * Classes for the <h1>. Defaults to mintlify.com's exact font-serif +
   * -2px tracking. That tracking value is tuned for Arizona Flare (the
   * commercial font Mintlify actually ships); on the Instrument Serif
   * substitute — a much lighter, looser display face — the same negative
   * tracking crowds the letterforms. Override per-page rather than editing
   * the default, so /mintlify's pixel fidelity stays untouched.
   */
  titleClassName?: string;
}) {
  return (
    <section className="relative overflow-x-clip bg-background-main">
      <HeroCanvas />

      <div className="grid-layout relative z-10 items-start gap-y-8 pt-6 lg:gap-y-0 lg:pb-0 lg:pt-20">
        <div className="col-span-full flex flex-col gap-4 lg:col-start-1 lg:col-end-9 lg:row-start-1">
          {eyebrow ? (
            <Link
              href={eyebrow.href}
              className="group inline-flex w-fit items-center gap-1.5 rounded-[2px] border border-border-sub bg-background-main py-1 pl-2.5 pr-1 outline-offset-2 transition-colors duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-background-soft focus-visible:outline-2 focus-visible:outline-brand"
            >
              <span className="text-xs/4 font-medium tracking-[0.02em] text-text-soft">
                {eyebrow.label}
              </span>
              <span className="inline-flex items-center gap-1 rounded-[2px] bg-[rgba(31,167,122,0.08)] py-1 pl-2 pr-1">
                <Odometer
                  value={eyebrow.value}
                  className="font-paper text-xs/4 font-medium tracking-[0.02em] text-brand"
                />
                <ArrowRightIcon className="size-4 text-brand" />
              </span>
            </Link>
          ) : null}

          <h1 className={titleClassName}>{title}</h1>

          <p className="text-lg/6 text-text-sub">{description}</p>
        </div>

        <div className="col-span-full flex flex-wrap items-start gap-2 lg:col-start-1 lg:col-end-9 lg:row-start-2 lg:mt-8">
          <a
            href={primaryCta.href}
            {...(primaryCta.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={mintButton({
              variant: "primary",
              size: "md",
              icon: "trailing",
            })}
          >
            {primaryCta.label}
            <ArrowRightIcon className="size-4 opacity-50 transition-opacity duration-150 ease-out group-hover:opacity-100 motion-reduce:transition-none" />
          </a>
          {secondaryCta ? (
            <a
              href={secondaryCta.href}
              {...(secondaryCta.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={mintButton({
                variant: "secondary",
                size: "md",
                icon: "leading",
                className: "gap-1.5",
              })}
            >
              {secondaryIcon}
              {secondaryCta.label}
            </a>
          ) : null}
        </div>

        {/* lg:w-[1057px] deliberately overflows its grid column — the section's
            overflow-x-clip is what contains it. */}
        <div className="relative isolate col-span-full mt-16 w-[587px] max-w-none sm:mt-12 sm:w-[120%] lg:col-start-10 lg:col-end-[25] lg:row-start-2 lg:mt-0 lg:w-[1057px] lg:self-start">
          <div className="@container relative isolate aspect-[1080/656] w-full">
            {visual}
          </div>

          {/* white fade so the mockup dissolves into the page floor */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0) 55%, #ffffff 96%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
