import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * gtmgems' own button -- not the shared mintButton (system/button-variants),
 * which stays untouched so /mintlify's fidelity holds. Pill shape,
 * button-in-button trailing icon, magnetic hover -- synthesizing
 * design-taste-frontend's motion-motivated restraint with
 * high-end-visual-design's concrete "Island" button architecture.
 */

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" className="size-3.5">
    <path
      d="M4 8h7M7.5 4.5 11 8l-3.5 3.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function GtmButton({
  href,
  variant = "primary",
  size = "md",
  icon = true,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  /** Trailing button-in-button arrow. Off for cases like pricing-card CTAs
   *  that already read as buttons without it. */
  icon?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">) {
  const external = href.startsWith("http");
  const Comp = external ? "a" : Link;

  return (
    <Comp
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group/btn inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full font-medium outline-offset-2 transition-[transform,background-color,color,border-color] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible:outline-2 focus-visible:outline-brand active:scale-[0.98]",
        size === "md" ? "py-1.5 pl-5 pr-1.5 text-sm" : "py-1 pl-4 pr-1 text-[13px]",
        variant === "primary" &&
          "border border-transparent bg-text-main text-background-main hover:bg-text-main/90",
        variant === "secondary" &&
          "border border-border-primary bg-background-main text-text-main hover:border-text-main/30",
        className,
      )}
      {...rest}
    >
      {children}
      {icon ? (
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-0.5",
            size === "md" ? "size-7" : "size-6",
            variant === "primary"
              ? "bg-background-main/15 text-background-main"
              : "bg-text-main/5 text-text-main",
          )}
        >
          <ArrowIcon />
        </span>
      ) : null}
    </Comp>
  );
}
