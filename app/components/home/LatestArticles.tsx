import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import { formatArticleDate, getHomepageArticles } from "@/app/lib/articles"

export default function LatestArticles() {
  const { featured, supporting } = getHomepageArticles(9)

  return (
    <section className="border-b border-[var(--color-line)] py-12 md:py-16">
      <SiteContainer>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Articles"
            title="Technical articles"
            description="Field notes on forensic mapping, photogrammetry, reality capture, thermal documentation, and the records used in professional review."
          />
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
          >
            View all articles
          </Link>
        </div>

        <article className="mt-10 grid items-center gap-6 border border-[var(--color-line)] bg-[var(--color-surface)] lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Link href={`/blog/${featured.slug}`} className="block">
            <Image
              src={featured.heroImage}
              alt={featured.heroAlt}
              width={1400}
              height={875}
              sizes="(min-width: 1024px) 680px, 100vw"
              className="aspect-[16/10] w-full object-cover object-[center_42%]"
            />
          </Link>
          <div className="px-5 py-5 sm:px-6 lg:py-8 lg:pr-8 lg:pl-2">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {featured.category}
            </p>
            <h3 className="mt-2 text-[1.45rem] font-semibold leading-snug tracking-tight md:text-[1.7rem]">
              <Link href={`/blog/${featured.slug}`} className="hover:underline">
                {featured.title}
              </Link>
            </h3>
            <p className="mt-3 max-w-[36rem] text-base leading-relaxed text-[var(--color-muted)]">
              {featured.cardExcerpt ?? featured.excerpt}
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              {formatArticleDate(featured.publishedAt)} · {featured.readingTime}
            </p>
            <Link
              href={`/blog/${featured.slug}`}
              className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              Read article
            </Link>
          </div>
        </article>

        <ul className="mt-6 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-2">
          {supporting.map((article) => (
            <li key={article.slug} className="bg-[var(--color-surface)]">
              <Link href={`/blog/${article.slug}`} className="grid h-full gap-4 p-4 hover:bg-[var(--color-canvas)] sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:p-5">
                <Image
                  src={article.heroImage}
                  alt=""
                  width={320}
                  height={200}
                  sizes="120px"
                  className="aspect-[16/10] w-full object-cover sm:aspect-[4/3]"
                />
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    {article.category}
                  </span>
                  <span className="mt-1 block text-base font-semibold leading-snug tracking-tight text-[var(--color-ink)]">
                    {article.title}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-[var(--color-muted)]">
                    {article.cardExcerpt ?? article.excerpt}
                  </span>
                  <span className="mt-2 block text-xs text-[var(--color-muted)]">
                    {formatArticleDate(article.publishedAt)} · {article.readingTime}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  )
}
