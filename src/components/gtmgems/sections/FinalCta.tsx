import { GtmButton } from "../ui/Button";

export function GtmFinalCta() {
  return (
    <section className="border-t border-border-line bg-background-main py-24 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-xl text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
          Tell us your ACV and your current outbound setup.
        </h2>
        <div className="flex flex-col items-start gap-4">
          <p className="max-w-sm text-sm/6 text-text-sub">
            Fifteen minutes. We qualify live against the fit criteria above,
            no form, no pre-screen. If it isn&apos;t a fit you&apos;ll hear
            that on the call, with what we&apos;d do instead.
          </p>
          <GtmButton href="#book-a-call">Book a call</GtmButton>
        </div>
      </div>
    </section>
  );
}
