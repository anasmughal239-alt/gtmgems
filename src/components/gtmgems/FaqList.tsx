import { SectionHeader, SectionSpacer } from "@/components/system/SectionHeader";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Native <details>/<summary> accordion — zero JS, server-rendered. Same
 * pattern used for the homepage's objections list, factored out since both
 * channel pages need one.
 */
export function FaqList({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: FaqItem[];
}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} />

      <div className="grid-layout relative">
        <div className="col-span-full px-4 py-4 lg:px-0 lg:p-4">
          <div className="flex flex-col divide-y divide-border-primary border-y border-border-primary">
            {items.map((item) => (
              <details key={item.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm/5 font-medium text-text-main marker:content-none">
                  {item.q}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    className="size-4 shrink-0 text-text-sub transition-transform duration-150 group-open:rotate-180"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className="pb-4 text-sm/5 text-text-sub">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
