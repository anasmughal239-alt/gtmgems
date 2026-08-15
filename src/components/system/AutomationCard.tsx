import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { StreamLines } from "./illustration/StreamLines";

/**
 * Mintlify's feature card: a warm panel with an icon pinned top-left, a
 * layered illustration floating in the middle, and the copy anchored to the
 * bottom via `mt-auto`.
 *
 * Measurements from mintlify.com/startups:
 *   min-h-[26rem] · rounded-[6px] · border-black-6 · bg-background-secondary
 *   p-6 lg:p-8 · title text-base/6 · body mt-2 text-sm/5 text-foreground-secondary
 *
 * The copy sits in a `relative` block so it stacks above the illustration,
 * which is `pointer-events-none absolute inset-0`.
 */
export function AutomationCard({
  icon,
  title,
  description,
  illustration,
  streamLines = true,
  className,
}: {
  /** Small mark pinned to the top-left. */
  icon?: ReactNode;
  title: string;
  description?: string;
  /** Usually an <IllustrationStage> composed of mock.tsx pieces. */
  illustration?: ReactNode;
  /** The fanning green lines behind the illustration. */
  streamLines?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-[26rem] flex-col overflow-hidden rounded-[6px] border border-black-6 bg-background-secondary p-6 lg:min-h-0 lg:p-8",
        className,
      )}
    >
      {streamLines ? <StreamLines /> : null}

      {icon ? (
        <span className="relative text-foreground-muted [&_svg]:size-5">
          {icon}
        </span>
      ) : null}

      {illustration}

      <div className="relative mt-auto">
        <h3 className="text-base/6 font-medium text-foreground-primary">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 text-sm/5 text-foreground-secondary">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
