import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blog";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <main className="py-xl px-gutter">
        <div className="max-w-[780px] mx-auto">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-xs text-body-sm text-on-surface-variant mb-lg">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-on-surface truncate">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-sm text-label-sm text-on-surface-variant mb-md">
            <span className="px-sm py-xs bg-primary/10 text-primary rounded-full font-medium">{post.category}</span>
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-lg leading-tight">
            {post.title}
          </h1>

          {/* Cover */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-xl">
            <Image
              src={post.cover}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 780px) 100vw, 780px"
            />
          </div>

          {/* Body */}
          <article className="flex flex-col gap-md text-body-md text-on-surface-variant leading-relaxed">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          {/* CTA */}
          <div className="mt-xl p-lg bg-primary/8 rounded-2xl border border-primary/20 text-center">
            <p className="text-headline-sm text-on-surface mb-sm">Looking for a PG in Ahmedabad?</p>
            <p className="text-body-sm text-on-surface-variant mb-md">Rentastic Homes — Checked In, Worries Out!</p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-on-primary font-semibold px-lg py-sm rounded-full hover:bg-primary/90 transition-colors"
            >
              Enquire Now
            </Link>
          </div>

          {/* More posts */}
          {others.length > 0 && (
            <div className="mt-xl">
              <h2 className="text-headline-sm text-on-surface mb-lg">More Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                {others.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                    <div className="bg-surface-container rounded-xl p-md hover:bg-surface-container-high transition-colors">
                      <span className="text-label-sm text-on-surface-variant">{p.category} · {p.readTime}</span>
                      <p className="text-body-md font-semibold text-on-surface mt-xs group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
      <WhatsAppFab />
    </>
  );
}
