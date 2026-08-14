import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * The warm surface card used by the feature grid, the customer carousel, and
 * the testimonial wall: rounded-xl, hairline border, #f9f6f3 fill.
 */
export function FeatureCard({
  as: Tag = "article",
  className,
  children,
}: {
  as?: "article" | "div" | "figure";
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-xl border border-border-sub bg-[#f9f6f3] p-8 dark:bg-[#0f0f12]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
