import { FeatureCard } from "@/components/system/FeatureCard";
import type { SectionCta, Testimonial } from "@/types/mintlify";
import {
  SectionHeader,
  SectionSpacer,
} from "@/components/system/SectionHeader";

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Agam Jain",
    role: "Founder, TensorFuse",
    quote:
      "Love the story and more so the product. Mintlify has been amazing and a core part of our product. Happy user here!",
  },
  {
    name: "Anish Agrawal",
    role: "Engineering, Scale AI",
    quote:
      "I can vouch for Mintlify getting the job done. Super great team + support",
  },
  {
    name: "Nicolas Machado",
    role: "Co-founder, Lume AI (acquired by Harvey)",
    quote:
      "HIGHLY recommend Mintlify. They’re beautiful out of the box, evolve the API reference based on your openAPI spec, and the markdown is super easy. Our customers love the search too",
  },
  {
    name: "Taylor Halliday",
    role: "CEO, Ravenna",
    quote:
      "Documentation is usually an afterthought. We worked with our friends at Mintlify and Arcade to transform our docs from “functional” to “fantastic.”",
  },
];

export function Testimonials({
  title = "Trusted by teams building for agents.",
  subtitle = "",
  cta = { label: "Read more", href: "/customers" },
  testimonials = DEFAULT_TESTIMONIALS,
  gridClassName = "grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 lg:px-0",
}: {
  title?: string;
  subtitle?: string;
  cta?: SectionCta;
  testimonials?: Testimonial[];
  /**
   * Grid classes for the card wrapper. Defaults to mintlify.com's exact
   * grid-cols-3 at lg. Override when the card count is exactly 3 -- three
   * equal cards in one row is a banned pattern (design-taste-frontend
   * skill, Section 9.C); at 4 testimonials (the Mintlify default) it wraps
   * 3+1 and isn't the same tell, so the default stays untouched.
   */
  gridClassName?: string;
} = {}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} cta={cta} />

      <div className="grid-layout relative">
        <div className="col-span-full py-4 lg:p-4">
          <div className={gridClassName}>
            {testimonials.map((t) => (
              <FeatureCard as="figure" key={t.name} className="gap-6 p-7">
                <figcaption className="flex flex-col gap-0.5">
                  <span className="text-sm/5 font-medium text-text-main">
                    {t.name}
                  </span>
                  <span className="text-xs/4 text-text-sub">{t.role}</span>
                </figcaption>
                <blockquote className="text-base/6 text-text-sub">
                  {t.quote}
                </blockquote>
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
