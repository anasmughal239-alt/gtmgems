import Image from "next/image";
import Link from "next/link";

import {
  SectionHeader,
  SectionSpacer,
} from "@/components/system/SectionHeader";
import type { BlogPost, SectionCta } from "@/types/mintlify";

const ASSETS = "/sites/www-mintlify-com-6fea74f6/root-8a5edab2/images";

const DEFAULT_POSTS: BlogPost[] = [
  {
    category: "Announcements",
    date: "Aug 6, 2026",
    title: "Introducing Mintlify Index",
    href: "/blog/mintlify-index",
    image: `${ASSETS}/blog-mintlify-index.webp`,
  },
  {
    category: "AI Trends",
    date: "Jul 29, 2026",
    title: "The state of docs traffic: a 2026 midyear report",
    href: "/blog/state-of-docs-traffic",
    image: `${ASSETS}/blog-state-of-docs-traffic.webp`,
  },
  {
    category: "Agent Score",
    date: "Apr 27, 2026",
    title: "Can agents read your docs?",
    href: "https://www.mintlify.com/score",
    image: `${ASSETS}/blog-agent-score.webp`,
  },
];

export function LatestUpdates({
  title = "Latest updates",
  subtitle = "",
  cta = { label: "All posts", href: "/blog" },
  posts = DEFAULT_POSTS,
}: {
  title?: string;
  subtitle?: string;
  cta?: SectionCta;
  posts?: BlogPost[];
} = {}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} cta={cta} />

      <div className="grid-layout relative">
        <div className="col-span-full py-4 lg:p-4">
          <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-0">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group flex h-full flex-col gap-5 rounded-xl outline-offset-2 transition-opacity duration-300 focus-visible:outline-2 focus-visible:outline-brand"
              >
                <div className="relative aspect-[341/324] w-full overflow-hidden rounded-xl border border-border-sub bg-neutral-100">
                  <Image
                    src={post.image}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2 text-xs/4 font-medium tracking-[0.02em] text-text-sub">
                    {post.category}
                    <span
                      aria-hidden="true"
                      className="size-[3px] rounded-full bg-border-soft"
                    />
                    {post.date}
                  </span>
                  <h3 className="text-base/6 font-medium text-text-main">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <SectionSpacer />
    </section>
  );
}
