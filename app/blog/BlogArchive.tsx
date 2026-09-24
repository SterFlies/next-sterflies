"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import SiteContainer from "@/app/components/SiteContainer"
import {
  articleCategories,
  type Article,
  type ArticleCategory,
  formatArticleDate,
  getFeaturedArticle,
  getListedArticles,
} from "@/app/lib/articles"
import { cloudinaryUrl } from "@/app/config/site"

const PAGE_SIZE = 9

const indexImages: Record<string, { src: string; alt: string }> = {
  "why-existing-conditions-documentation-is-critical-for-ih-investigations": {
    src: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png",
      1400
    ),
    alt: "Annotated interior documentation of visible site conditions",
  },
}

function categorySlug(category: ArticleCategory) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const categoryBySlug = new Map(articleCategories.map((category) => [categorySlug(category), category]))

function visual(article: Article) {
  return indexImages[article.slug] ?? { src: article.heroImage, alt: article.heroAlt }
}

function cardText(article: Article) {
  return article.cardExcerpt ?? article.excerpt
}

function matchesQuery(article: Article, query: string) {
  const haystack = [article.title, article.excerpt, article.cardExcerpt, article.description, article.category]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
  const normalized = query.trim().toLowerCase()
  if (!normalized) return true
  if (haystack.includes(normalized)) return true
  const tokens = normalized.split(/\s+/).filter((token) => token.length > 1)
  return tokens.length > 0 && tokens.every((token) => haystack.includes(token))
}

function archiveHref({
  q,
  category,
  page,
}: {
  q?: string
  category?: string
  page?: number
}) {
  const params = new URLSearchParams()
  if (category) params.set("category", category)
  const query = q?.trim()
  if (query) params.set("q", query)
  if (page && page > 1) params.set("page", String(page))
  const value = params.toString()
  return value ? `/blog?${value}` : "/blog"
}

function plural(count: number, singular: string, pluralLabel = `${singular}s`) {
  return `${count} ${count === 1 ? singular : pluralLabel}`
}

export default function BlogArchive() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const qParam = searchParams.get("q") ?? ""
  const categoryParam = searchParams.get("category") ?? ""
  const pageParam = Number.parseInt(searchParams.get("page") ?? "1", 10)
  const category = categoryBySlug.get(categoryParam)
  const [qInput, setQInput] = useState(qParam)

  useEffect(() => {
    setQInput(qParam)
  }, [qParam])

  useEffect(() => {
    if (qInput.trim() === qParam.trim()) return
    const timer = window.setTimeout(() => {
      router.replace(archiveHref({ q: qInput, category: category ? categoryParam : undefined, page: 1 }), {
        scroll: false,
      })
    }, 250)
    return () => window.clearTimeout(timer)
  }, [qInput, qParam, category, categoryParam, router])

  const listed = useMemo(() => getListedArticles(), [])

  const filtered = useMemo(() => {
    return listed.filter((article) => {
      if (category && article.category !== category) return false
      return matchesQuery(article, qParam)
    })
  }, [listed, category, qParam])

  const searching = qParam.trim().length > 0
  const featured = useMemo(() => {
    if (searching || filtered.length === 0) return null
    if (!category) return getFeaturedArticle()
    return filtered.find((article) => article.featured) ?? filtered[0]
  }, [searching, filtered, category])

  const gridSource = featured ? filtered.filter((article) => article.slug !== featured.slug) : filtered
  const pageCount = Math.max(1, Math.ceil(gridSource.length / PAGE_SIZE) || 1)
  const requestedPage = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1
  const page = Math.min(requestedPage, pageCount)
  const pageItems = gridSource.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => {
    if (!searching && filtered.length === 0) return
    if (requestedPage !== page) {
      router.replace(
        archiveHref({
          q: qParam,
          category: category ? categoryParam : undefined,
          page,
        }),
        { scroll: false }
      )
    }
  }, [requestedPage, page, searching, filtered.length, qParam, category, categoryParam, router])

  const countLabel = searching
    ? `${plural(filtered.length, "result")} for “${qParam.trim()}”`
    : category
      ? `${plural(filtered.length, "article")} in ${category}`
      : plural(filtered.length, "article")

  return (
    <div>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-8 md:py-10">
          <h1 className="text-[2rem] font-semibold leading-tight tracking-tight md:text-[2.35rem]">Articles</h1>
          <p className="mt-3 max-w-[44rem] text-base leading-relaxed text-[var(--color-muted)]">
            Technical articles on forensic mapping, reality capture, site documentation, photogrammetry,
            thermal documentation, construction documentation, and spatial data.
          </p>

          <form
            className="mt-6 max-w-[28rem]"
            role="search"
            onSubmit={(event) => {
              event.preventDefault()
              router.push(
                archiveHref({ q: qInput, category: category ? categoryParam : undefined, page: 1 }),
                { scroll: false }
              )
            }}
          >
            <label htmlFor="article-search" className="sr-only">
              Search articles
            </label>
            <input
              id="article-search"
              type="search"
              value={qInput}
              onChange={(event) => setQInput(event.target.value)}
              placeholder="Search articles..."
              className="min-h-11 w-full rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)] px-3 text-base text-[var(--color-ink)] outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
            />
          </form>

          <nav aria-label="Article categories" className="mt-4">
            <ul className="-mx-[var(--page-pad-x)] flex gap-2 overflow-x-auto px-[var(--page-pad-x)] pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
              <li className="shrink-0">
                <CategoryPill
                  href={archiveHref({ q: qParam, page: 1 })}
                  current={!category}
                >
                  All
                </CategoryPill>
              </li>
              {articleCategories.map((item) => {
                const slug = categorySlug(item)
                return (
                  <li key={item} className="shrink-0">
                    <CategoryPill
                      href={archiveHref({ q: qParam, category: slug, page: 1 })}
                      current={category === item}
                    >
                      {item}
                    </CategoryPill>
                  </li>
                )
              })}
            </ul>
          </nav>
        </SiteContainer>
      </section>

      {filtered.length === 0 ? (
        <SiteContainer className="py-14 md:py-16">
          <h2 className="text-xl font-semibold tracking-tight">No articles found.</h2>
          <p className="mt-3 max-w-[36rem] text-base leading-relaxed text-[var(--color-muted)]">
            Nothing in the archive matches this search{category ? " in the selected category" : ""}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {searching ? (
              <Link
                href={archiveHref({ category: category ? categoryParam : undefined, page: 1 })}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
              >
                Clear search
              </Link>
            ) : null}
            <Link
              href="/blog"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              View all articles
            </Link>
          </div>
        </SiteContainer>
      ) : (
        <>
          {featured ? (
            <section className="border-b border-[var(--color-line)]" aria-labelledby="featured-article">
              <SiteContainer className="py-8 md:py-10">
                <article className="grid overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)] lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                  <Link href={`/blog/${featured.slug}`} className="block min-h-0 bg-[var(--color-canvas)]">
                    <Image
                      src={visual(featured).src}
                      alt={visual(featured).alt}
                      width={1400}
                      height={875}
                      priority
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="aspect-[16/10] h-full w-full object-cover lg:aspect-auto lg:min-h-[22rem]"
                    />
                  </Link>
                  <div className="flex flex-col justify-center px-5 py-6 sm:px-7 sm:py-8 lg:px-8">
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                      Featured Article
                    </p>
                    <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
                      {featured.category}
                    </p>
                    <h2
                      id="featured-article"
                      className="mt-2 text-[1.45rem] font-semibold leading-snug tracking-tight md:text-[1.7rem]"
                    >
                      <Link href={`/blog/${featured.slug}`} className="hover:underline">
                        {featured.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">{featured.excerpt}</p>
                    <p className="mt-4 text-sm text-[var(--color-muted)]">
                      {formatArticleDate(featured.publishedAt)} · {featured.readingTime}
                    </p>
                    <Link
                      href={`/blog/${featured.slug}`}
                      className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
                    >
                      Read article
                      <span aria-hidden="true"> →</span>
                    </Link>
                  </div>
                </article>
              </SiteContainer>
            </section>
          ) : null}

          <section aria-labelledby="all-articles">
            <SiteContainer className="py-8 md:py-10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h2 id="all-articles" className="text-[1.45rem] font-semibold tracking-tight md:text-[1.65rem]">
                  All Articles
                </h2>
                <p className="text-sm text-[var(--color-muted)]" aria-live="polite">
                  {countLabel}
                </p>
              </div>

              {pageItems.length > 0 ? (
                <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {pageItems.map((article) => {
                    const image = visual(article)
                    return (
                      <li key={article.slug} className="min-w-0">
                        <article className="flex h-full flex-col overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-accent)]">
                          <Link href={`/blog/${article.slug}`} className="block bg-[var(--color-canvas)]">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={1400}
                              height={875}
                              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                              className="aspect-[16/10] w-full object-cover"
                            />
                          </Link>
                          <div className="flex flex-1 flex-col p-4">
                            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
                              {article.category}
                            </p>
                            <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight">
                              <Link href={`/blog/${article.slug}`} className="hover:underline">
                                {article.title}
                              </Link>
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{cardText(article)}</p>
                            <p className="mt-auto pt-3 text-xs text-[var(--color-muted)]">
                              {formatArticleDate(article.publishedAt)} · {article.readingTime}
                            </p>
                          </div>
                        </article>
                      </li>
                    )
                  })}
                </ul>
              ) : null}

              {pageCount > 1 ? (
                <Pagination
                  page={page}
                  pageCount={pageCount}
                  hrefFor={(nextPage) =>
                    archiveHref({
                      q: qParam,
                      category: category ? categoryParam : undefined,
                      page: nextPage,
                    })
                  }
                />
              ) : null}
            </SiteContainer>
          </section>
        </>
      )}
    </div>
  )
}

function CategoryPill({
  href,
  current,
  children,
}: {
  href: string
  current: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "true" : undefined}
      className={`inline-flex min-h-11 items-center rounded-full border px-3.5 text-sm ${
        current
          ? "border-[var(--color-accent)] bg-[var(--color-accent)] font-semibold text-white"
          : "border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)] hover:border-[var(--color-accent)]"
      }`}
    >
      {children}
    </Link>
  )
}

function Pagination({
  page,
  pageCount,
  hrefFor,
}: {
  page: number
  pageCount: number
  hrefFor: (page: number) => string
}) {
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

  return (
    <nav aria-label="Pagination" className="mt-8 flex flex-wrap items-center gap-2">
      {page > 1 ? (
        <Link
          href={hrefFor(page - 1)}
          className="inline-flex min-h-11 items-center rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)] px-3 text-sm font-semibold hover:border-[var(--color-accent)]"
        >
          Previous
        </Link>
      ) : (
        <span className="inline-flex min-h-11 items-center rounded-[6px] border border-[var(--color-line)] px-3 text-sm text-[var(--color-muted)]">
          Previous
        </span>
      )}
      <ol className="flex flex-wrap gap-2">
        {pages.map((number) => (
          <li key={number}>
            {number === page ? (
              <span
                aria-current="page"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] border border-[var(--color-accent)] bg-[var(--color-accent)] text-sm font-semibold text-white"
              >
                {number}
              </span>
            ) : (
              <Link
                href={hrefFor(number)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)] text-sm font-semibold hover:border-[var(--color-accent)]"
              >
                {number}
              </Link>
            )}
          </li>
        ))}
      </ol>
      {page < pageCount ? (
        <Link
          href={hrefFor(page + 1)}
          className="inline-flex min-h-11 items-center rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)] px-3 text-sm font-semibold hover:border-[var(--color-accent)]"
        >
          Next
        </Link>
      ) : (
        <span className="inline-flex min-h-11 items-center rounded-[6px] border border-[var(--color-line)] px-3 text-sm text-[var(--color-muted)]">
          Next
        </span>
      )}
    </nav>
  )
}
