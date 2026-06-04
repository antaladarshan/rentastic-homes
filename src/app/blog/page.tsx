import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export const metadata: Metadata = {
  title: "Blog — PG Life, Ahmedabad Guide & Student Tips | Rentastic Homes",
  description:
    "Practical articles about PG living, Ahmedabad neighbourhoods, student tips, and co-living. From the team at Rentastic Homes.",
};

export default function BlogPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-surface-container-low py-xl px-gutter text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
              Rentastic Blog
            </h1>
            <p className="text-body-lg text-on-surface-variant">
              Tips, guides, and honest advice for students and PG seekers in Ahmedabad.
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-xl px-gutter">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  {/* Cover image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.cover}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-sm py-xs bg-primary text-on-primary text-label-sm rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-lg flex flex-col flex-1 gap-sm">
                    <div className="flex items-center gap-sm text-label-sm text-on-surface-variant">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-headline-sm text-on-surface leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-body-sm text-on-surface-variant flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-primary font-semibold text-body-sm mt-xs">
                      Read more →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <WhatsAppFab />
    </>
  );
}
