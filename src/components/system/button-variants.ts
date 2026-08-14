import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button styling as a class string rather than a component.
 *
 * mintlify.com applies its button classes directly to <a> elements (they carry
 * `data-slot="button"`), so the same treatment has to work on <a>, next/link
 * <Link>, and <button> alike. Emitting classes keeps all three server-rendered
 * — wrapping the base-ui <Button> would force every CTA into a client
 * component for no gain.
 *
 * Padding is asymmetric depending on which side the icon sits, matching the
 * live site's `has-data-[icon=inline-end]` behaviour.
 */
export const mintButton = cva(
  "group inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-[4px] font-medium outline-offset-2 transition-[color,background-color,border-color] duration-100 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-2 focus-visible:outline-brand [&_svg]:pointer-events-none",
  {
    variants: {
      variant: {
        /** Near-black fill. The dominant CTA across the site. */
        primary:
          "border border-transparent bg-background-invert text-text-invert hover:bg-background-invert/90",
        /** White fill, hairline border. "Sign in", "Sign up with Google". */
        secondary:
          "border border-border-sub bg-background-main text-text-main hover:bg-background-soft",
        /** Warm-white fill used on the final CTA band ("Talk to sales"). */
        muted:
          "border border-[rgba(0,0,0,0.05)] bg-neutral-0 text-foreground-primary hover:bg-background-soft",
      },
      size: {
        /** 34px — header actions. */
        sm: "h-[34px] py-2 text-sm/4",
        /** 42px — hero and section CTAs. */
        md: "h-[42px] py-3 text-sm/4",
      },
      icon: {
        none: "",
        leading: "",
        trailing: "",
      },
    },
    compoundVariants: [
      { size: "sm", icon: "none", class: "px-3.5" },
      { size: "sm", icon: "trailing", class: "pl-3.5 pr-2.5" },
      { size: "sm", icon: "leading", class: "pl-2.5 pr-3.5" },
      { size: "md", icon: "none", class: "px-5" },
      { size: "md", icon: "trailing", class: "pl-4 pr-3" },
      { size: "md", icon: "leading", class: "pl-3 pr-4" },
    ],
    defaultVariants: { variant: "primary", size: "md", icon: "none" },
  },
);

export type MintButtonProps = VariantProps<typeof mintButton>;
