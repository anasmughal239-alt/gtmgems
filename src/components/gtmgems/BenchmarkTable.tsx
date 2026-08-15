import { FeatureCard } from "@/components/system/FeatureCard";
import { SectionHeader, SectionSpacer } from "@/components/system/SectionHeader";

export interface BenchmarkRow {
  stat: string;
  meaning: string;
  source: string;
}

/**
 * Sourced-benchmark table for the two channel pages. Same FeatureCard +
 * SectionHeader shell as the homepage sections — just populated with a
 * table instead of stat cards or a carousel, the way BusinessSizes and
 * Testimonials each populate FeatureCard differently.
 */
export function BenchmarkTable({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: BenchmarkRow[];
}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid-layout relative">
        <div className="col-span-full overflow-x-auto py-4 lg:p-4">
          <FeatureCard as="div" className="min-w-[640px] gap-0 p-0 lg:min-w-0">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border-primary">
                  <th className="px-6 py-4 text-xs/4 font-medium tracking-[0.02em] text-text-sub lg:px-8">
                    Stat
                  </th>
                  <th className="px-6 py-4 text-xs/4 font-medium tracking-[0.02em] text-text-sub lg:px-8">
                    What it means
                  </th>
                  <th className="px-6 py-4 text-xs/4 font-medium tracking-[0.02em] text-text-sub lg:px-8">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-primary">
                {rows.map((row) => (
                  <tr key={row.stat}>
                    <td className="whitespace-nowrap px-6 py-4 font-paper text-sm/5 font-medium text-brand lg:px-8">
                      {row.stat}
                    </td>
                    <td className="px-6 py-4 text-sm/5 text-text-main lg:px-8">
                      {row.meaning}
                    </td>
                    <td className="px-6 py-4 text-sm/5 text-text-sub lg:px-8">
                      {row.source}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </FeatureCard>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
