"use client";

import { cn } from "@/lib/utils";

/**
 * Rolling-digit counter used in the hero badge and the stats band.
 *
 * Structure matches the live site exactly: each digit is a 1em-tall
 * overflow-hidden window over a vertical strip of the glyphs 0-9, positioned
 * with `translateY(-<digit>em)`. Separators (",", "%", ".") render as static
 * text between windows rather than as rolling digits.
 */
export function Odometer({
  value,
  className,
}: {
  /** Rendered as-is; any non-digit character becomes a static glyph. */
  value: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-[1em] items-center leading-[1em] tabular-nums",
        className,
      )}
    >
      {value.split("").map((char, i) => {
        const digit = Number.parseInt(char, 10);

        if (Number.isNaN(digit)) {
          return (
            <span key={i} className="flex h-[1em] items-center leading-[1em]">
              {char}
            </span>
          );
        }

        return (
          <span
            key={i}
            className="relative inline-flex h-[1em] overflow-hidden leading-[1em]"
          >
            <span
              className="flex flex-col transition-transform duration-700 ease-[var(--ease-out-soft)] motion-reduce:transition-none"
              style={{ transform: `translateY(-${digit}em) translateZ(0)` }}
            >
              {Array.from({ length: 10 }, (_, n) => (
                <span
                  key={n}
                  className="flex h-[1em] shrink-0 items-center justify-center leading-[1em]"
                >
                  {n}
                </span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
