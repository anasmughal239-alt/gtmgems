import { GtmButton } from "../ui/Button";
import { GtmCard } from "../ui/Card";
import { Eyebrow, SectionShell } from "../ui/SectionShell";

/** Replaces the Testimonials-as-fit-cards section (previously exactly 3
 *  equal cards in a row -- a banned AI tell). Asymmetric: the affirmative
 *  "Qualified" definition gets the wide card, the two negative cases share
 *  a row beneath it. */
export function FitChecker() {
  return (
    <SectionShell id="fit">
      <div className="flex flex-col gap-4">
        <Eyebrow>Fit</Eyebrow>
        <h2 className="max-w-lg text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
          What &ldquo;qualified&rdquo; actually means here.
        </h2>
        <p className="max-w-lg text-base/6 text-text-sub">
          And who we tell not to book a call.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4">
        <GtmCard accent>
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-brand">
            Qualified
          </span>
          <p className="mt-3 max-w-2xl text-base/7 text-text-main">
            The account cleared the signal score, the person replying holds
            budget authority or direct influence, and a specific next step
            was taken: call booked, proposal requested, pricing asked.
          </p>
        </GtmCard>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <GtmCard>
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-text-soft">
              Not a lead
            </span>
            <p className="mt-3 text-sm/6 text-text-sub">
              &ldquo;Thanks, send me more info.&rdquo; No ICP check, no
              authority, no next step. A polite reply isn&apos;t a qualified
              lead.
            </p>
          </GtmCard>

          <GtmCard>
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-text-soft">
              When we won&apos;t take the call
            </span>
            <p className="mt-3 text-sm/6 text-text-sub">
              Addressable market under 500 accounts, pure self-serve with no
              sales motion, no defined ICP yet, meetings needed this month,
              or a guaranteed lead count in writing.
            </p>
          </GtmCard>
        </div>
      </div>

      <div className="mt-10">
        <GtmButton href="#book-a-call">Book a call</GtmButton>
      </div>
    </SectionShell>
  );
}
