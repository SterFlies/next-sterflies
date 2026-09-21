import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import {
  articleCategories,
  formatArticleDate,
  getFeaturedArticle,
  getListedArticles,
} from "@/app/lib/articles"
import { siteConfig } from "@/app/config/site"

export const metadata: Metadata = {
  title: "Technical Articles & Field Notes | SterFlies",
  description:
    "Practical articles on forensic mapping, photogrammetry, reality capture, thermal documentation, construction records, and preserving site conditions for professional review.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Technical Articles & Field Notes | SterFlies",
    description:
      "Practical articles on forensic mapping, photogrammetry, reality capture, thermal documentation, construction records, and preserving site conditions for professional review.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: getFeaturedArticle().heroImage,
        width: 1200,
        height: 630,
        alt: getFeaturedArticle().heroAlt,
      },
    ],
  },
}

export default function BlogPage() {
  const featured = getFeaturedArticle()
  const listed = getListedArticles()
  const selected = listed
    .filter((article) => article.tier === "core" && !article.featured)
    .slice(0, 6)

  return (
    <div>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Articles
          </p>
          <h1 className="mt-3 max-w-[18ch] text-[2rem] font-semibold leading-[1.12] tracking-tight md:text-[2.5rem]">
            Technical Articles & Field Notes
          </h1>
          <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Practical guidance on forensic mapping, photogrammetry, reality capture, thermal
            documentation, and preserving site conditions for professional review.
          </p>
        </SiteContainer>
      </section>

      <SiteContainer className="py-12 md:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
          Featured
        </p>
        <Link href={`/blog/${featured.slug}`} className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <figure className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)]">
            <Image
              src={featured.heroImage}
              alt={featured.heroAlt}
              width={1400}
              height={900}
              priority
              className="aspect-[16/10] w-full object-cover"
            />
          </figure>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
              {featured.category}
            </p>
            <h2 className="mt-3 text-[1.65rem] font-semibold leading-tight tracking-tight md:text-[1.9rem]">
              {featured.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">{featured.excerpt}</p>
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              {formatArticleDate(featured.publishedAt)} · {featured.readingTime}
            </p>
          </div>
        </Link>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">Selected articles</h2>
          <ul className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {selected.map((article) => (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`} className="block">
                  <figure className="overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)]">
                    <Image
                      src={article.heroImage}
                      alt={article.heroAlt}
                      width={900}
                      height={600}
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </figure>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
                    {article.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug">{article.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{article.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">Categories</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articleCategories.map((category) => {
              const items = listed
                .filter((article) => article.category === category && article.tier !== "legacy")
                .sort((a, b) => {
                  if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1
                  if (a.tier !== b.tier) return a.tier === "core" ? -1 : 1
                  return b.publishedAt.localeCompare(a.publishedAt)
                })
              if (!items.length) return null
              return (
                <div key={category}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    {category}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {items.slice(0, 4).map((article) => (
                      <li key={article.slug}>
                        <Link href={`/blog/${article.slug}`} className="text-[0.975rem] leading-snug hover:text-[var(--color-accent)]">
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">All articles</h2>
          <ul className="mt-6 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {listed.map((article) => (
              <li key={article.slug}>
                <Link href={`/blog/${article.slug}`} className="flex min-h-11 flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-medium leading-snug">{article.title}</span>
                  <span className="shrink-0 text-sm text-[var(--color-muted)]">
                    {article.category} · {formatArticleDate(article.publishedAt)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </SiteContainer>
    </div>
  )
}
