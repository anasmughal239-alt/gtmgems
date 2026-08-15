import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * Macro-whitespace section wrapper for gtmgems' own sections -- py-24/py-32,
 * not the Mintlify grid's tighter py-16/py-20. Alternating soft/main
 * background continues the rhythm already established.
 */
export function SectionShell({
  id,
  tone = "main",
  className,
  children,
}: {
  id?: string;
  tone?: "main" | "soft";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-t border-border-line py-24 lg:py-32",
        tone === "soft" ? "bg-background-soft" : "bg-background-main",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-border-sub bg-background-main px-3 py-1 text-[10px]/4 font-medium uppercase tracking-[0.16em] text-text-soft">
      {children}
    </span>
  );
}
