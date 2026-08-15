import { GtmCard } from "../ui/Card";
import { Eyebrow, SectionShell } from "../ui/SectionShell";

const ROWS = [
  {
    title: "Hiring an in-house GTM engineer",
    stats: [
      { value: "$130K-260K", label: "total comp (median ~$176K)" },
      { value: "3-6 months", label: "to recruit, before any pipeline" },
    ],
  },
  {
    title: "gtmgems: a full-stack team, not one hire",
    featured: true,
    stats: [
      { value: "$120K-144K", label: "per year equivalent" },
      { value: "4 weeks", label: "to live send" },
    ],
  },
  {
    title: "AI SDR tools solve message generation, not the bottleneck",
    stats: [
      { value: "$1.5K-5K", label: "per month" },
      { value: "0", label: "of it covers integration or data hygiene" },
    ],
  },
  {
    title: "Cheaper cold email agencies skip deliverability engineering",
    stats: [
      { value: "$2.5K-4K", label: "per month" },
      { value: "up", label: "volume pushed through when placement slips" },
    ],
  },
];

/** Replaces BusinessSizes' carousel with a static 2x2 comparison grid --
 *  the point is to be scanned, not swiped through. */
export function HonestMath() {
  return (
    <SectionShell id="math" tone="soft">
      <div className="flex flex-col gap-4">
        <Eyebrow>The honest math</Eyebrow>
        <h2 className="max-w-lg text-balance text-3xl/9 font-medium tracking-[-0.02em] text-text-main lg:text-4xl/10">
          The in-house hire looks cheaper only during the recruiting months.
        </h2>
        <p className="max-w-lg text-base/6 text-text-sub">
          No salary yet, but no pipeline either.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {ROWS.map((row) => (
          <GtmCard key={row.title} accent={row.featured}>
            <h3 className="text-base font-medium text-text-main">
              {row.title}
            </h3>
            <div className="mt-6 flex gap-8">
              {row.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-geist-mono)] text-2xl font-medium tracking-[-0.02em] text-text-main">
                    {stat.value}
                  </span>
                  <span className="text-xs/5 text-text-sub">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </GtmCard>
        ))}
      </div>
    </SectionShell>
  );
}
