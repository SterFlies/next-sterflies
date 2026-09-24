import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import ContextSidebar from "@/app/components/practice/ContextSidebar"
import WithRail from "@/app/components/practice/WithRail"
import { cloudinaryUrl, pageMetadata } from "@/app/config/site"
import {
  type Article,
  formatArticleDate,
  getArticle,
  getFeaturedArticle,
  getListedArticles,
} from "@/app/lib/articles"

const featuredArticle = getFeaturedArticle()

export const metadata = pageMetadata({
  title: "Technical Articles & Field Notes | SterFlies",
  description:
    "Practical articles on forensic mapping, photogrammetry, reality capture, thermal documentation, construction records, and preserving site conditions for professional review.",
  path: "/blog",
  image: {
    url: featuredArticle.heroImage,
    width: 1200,
    height: 630,
    alt: featuredArticle.heroAlt,
  },
})

/**
 * Index-only image swaps. Article pages keep their own heroes except where the
 * registry image itself was a generic stock photo replaced in articles.ts.
 */
const indexImages: Record<string, { src: string; alt: string }> = {
  "why-existing-conditions-documentation-is-critical-for-ih-investigations": {
    src: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png",
      1400
    ),
    alt: "Annotated interior documentation of visible site conditions",
  },
}

const startHere = [
  {
    slug: "what-is-forensic-site-documentation",
    eyebrow: "Forensic Mapping & Site Documentation",
    description:
      "Understand what spatial site documentation captures, how it differs from isolated photographs, and where it fits into professional review.",
  },
  {
    slug: "orthomosaic_blog",
    eyebrow: "Mapping & Photogrammetry",
    description:
      "Learn how overlapping aerial imagery becomes a mapped site record and what an orthomosaic can provide.",
  },
  {
    slug: "thermal101_blog",
    eyebrow: "Thermal Documentation",
    description:
      "Understand apparent temperature patterns, context, limitations, and professional interpretation.",
  },
] as const

const collections: {
  id: string
  eyebrow: string
  title: string
  lead: string
  rows: string[]
  moreHref: string
  moreLabel: string
  reverse?: boolean
}[] = [
  {
    id: "forensic-documentation",
    eyebrow: "Forensic & incident documentation",
    title: "Forensic & Incident Documentation",
    lead: "forensic-mapping-incident-investigations",
    rows: [
      "drone-mapping-forensic-site-investigations",
      "what-is-forensic-site-documentation",
      "why-site-conditions-should-be-documented-before-they-are-altered-blog",
      "why-expert-witnesses-need-more-than-photos-to-analyze-a-site",
      "chain-of-custody-digital-site-documentation-litigation",
      "you-dont-think-you-need-site-documentation-until-the-investigation-starts",
      "safety-investigations-fail-more-often-from-missing-context-than-missing-data",
      "why-photos-notes-and-memory-are-the-weakest-parts-of-a-safety-investigation",
    ],
    moreHref: "/services/forensic-site-documentation",
    moreLabel: "Forensic mapping service",
  },
  {
    id: "mapping-photogrammetry",
    eyebrow: "Mapping and photogrammetry",
    title: "Mapping & Photogrammetry",
    lead: "orthomosaic_blog",
    rows: [
      "rtk-ground-control-checkpoints-drone-mapping",
      "volumetric_blog",
      "topography_blog",
      "monthly-volumetric-reporting_blog",
    ],
    moreHref: "/services/mapping",
    moreLabel: "Mapping & photogrammetry service",
    reverse: true,
  },
  {
    id: "reality-capture",
    eyebrow: "Reality capture and 3D",
    title: "Reality Capture & 3D",
    lead: "3d_model",
    rows: [
      "point-clouds-site-documentation",
      "exterior-photogrammetry-interior-reality-capture",
      "rebuilding-reality-defensible-digital-site-environments",
      "digital-evidence-3d-reality-capture-legal-disputes",
    ],
    moreHref: "/capabilities#reality-capture",
    moreLabel: "Reality capture capability",
  },
  {
    id: "thermal-documentation",
    eyebrow: "Thermal documentation",
    title: "Thermal Documentation",
    lead: "thermal101_blog",
    rows: [
      "solar-thermal-anomalies-drone-based-pv-inspections",
      "thermal-reporting-standards-iec-62446-3",
    ],
    moreHref: "/thermal/Applications",
    moreLabel: "Thermal documentation service",
    reverse: true,
  },
  {
    id: "construction-records",
    eyebrow: "Construction and material records",
    title: "Construction & Material Records",
    lead: "construction-progress-monitoring-best-practices",
    rows: ["documenting-site-conditions-for-construction-defect-litigation"],
    moreHref: "/projects/65acresite",
    moreLabel: "65-acre mapping project",
  },
  {
    id: "existing-conditions",
    eyebrow: "Existing conditions",
    title: "Existing Conditions / Industrial Hygiene",
    lead: "why-existing-conditions-documentation-is-critical-for-ih-investigations",
    rows: ["documenting-mold-assessments-and-supporting-safety-decisions"],
    moreHref: "/projects/iaq-mold-documentation",
    moreLabel: "IAQ existing-conditions project",
    reverse: true,
  },
]

function visual(article: Article) {
  return indexImages[article.slug] ?? { src: article.heroImage, alt: article.heroAlt }
}

function metaLine(article: Article) {
  return `${article.category} · ${formatArticleDate(article.publishedAt)} · ${article.readingTime}`
}

function ReadArticleLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      aria-label={`Read article: ${title}`}
      className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
    >
      Read article
      <span aria-hidden="true"> →</span>
    </Link>
  )
}

function ArticleFigure({
  article,
  priority = false,
  sizes,
  flush = false,
}: {
  article: Article
  priority?: boolean
  sizes: string
  flush?: boolean
}) {
  const image = visual(article)
  return (
    <figure
      className={
        flush
          ? "bg-[var(--color-surface)]"
          : "overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)]"
      }
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={1400}
        height={875}
        priority={priority}
        sizes={sizes}
        className="aspect-[16/10] w-full object-cover"
      />
    </figure>
  )
}

export default function BlogPage() {
  const featured = getFeaturedArticle()
  const latest = getListedArticles().slice(0, 8)

  return (
    <div>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Articles
          </p>
          <h1 className="mt-3 max-w-[18ch] text-[2rem] font-semibold leading-[1.12] tracking-tight md:text-[2.5rem]">
            Technical Articles & Field Notes
          </h1>
          <p className="mt-4 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)]">
            Practical guidance on forensic mapping, photogrammetry, reality capture, thermal
            documentation, and preserving site conditions for professional review.
          </p>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)]" aria-labelledby="featured-article">
        <SiteContainer className="py-10 md:py-14">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-accent)]">
            Featured
          </p>
          <div className="mt-5 grid items-center gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)] lg:gap-10">
            <ArticleFigure
              article={featured}
              priority
              sizes="(min-width: 1024px) 640px, 100vw"
            />
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {featured.category}
              </p>
              <h2
                id="featured-article"
                className="mt-2 text-[1.65rem] font-semibold leading-tight tracking-tight md:text-[1.85rem]"
              >
                <Link href={`/blog/${featured.slug}`} className="hover:underline">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-3 max-w-[36rem] text-base leading-relaxed text-[var(--color-muted)]">
                {featured.excerpt}
              </p>
              <p className="mt-4 text-sm text-[var(--color-muted)]">{metaLine(featured)}</p>
              <div className="mt-2">
                <ReadArticleLink href={`/blog/${featured.slug}`} title={featured.title} />
              </div>
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)]" aria-labelledby="start-here">
        <SiteContainer className="py-12 md:py-16">
          <h2 id="start-here" className="text-[1.65rem] font-semibold tracking-tight">
            Start Here
          </h2>
          <ul className="mt-8 grid gap-6 lg:grid-cols-3">
            {startHere.map((item) => {
              const article = getArticle(item.slug)
              return (
                <li key={article.slug} className="min-w-0">
                  <article className="flex h-full flex-col overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)]">
                    <ArticleFigure article={article} flush sizes="(min-width: 1024px) 380px, 100vw" />
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold leading-snug">
                        <Link href={`/blog/${article.slug}`} className="hover:underline">
                          {article.title}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                        {item.description}
                      </p>
                      <div className="mt-auto pt-3">
                        <ReadArticleLink href={`/blog/${article.slug}`} title={article.title} />
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </SiteContainer>
      </section>

      <WithRail
        sidebar={
          <ContextSidebar
            topics={collections.map((collection) => ({
              href: `#${collection.id}`,
              title: collection.title,
            }))}
            services={[
              { href: "/services/forensic-site-documentation", title: "Forensic Mapping & Site Documentation" },
              { href: "/services/mapping", title: "Mapping & Photogrammetry" },
              { href: "/thermal/Applications", title: "Thermal Documentation" },
            ]}
          />
        }
      >
      <section className="border-b border-[var(--color-line)]" aria-labelledby="explore-by-topic">
        <SiteContainer className="py-12 md:py-16">
          <h2 id="explore-by-topic" className="text-[1.65rem] font-semibold tracking-tight">
            Explore by Topic
          </h2>
          <div className="mt-10 space-y-14 md:space-y-16">
            {collections.map((collection) => {
              const lead = getArticle(collection.lead)
              const rows = collection.rows.map((slug) => getArticle(slug))
              return (
                <section
                  key={collection.id}
                  id={collection.id}
                  aria-labelledby={`${collection.id}-title`}
                  className="scroll-mt-20"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    {collection.eyebrow}
                  </p>
                  <h3
                    id={`${collection.id}-title`}
                    className="mt-2 text-2xl font-semibold tracking-tight"
                  >
                    {collection.title}
                  </h3>
                  <div
                    className={`mt-6 grid items-start gap-8 lg:grid-cols-2 ${
                      collection.reverse ? "lg:[&>div:first-child]:order-2" : ""
                    }`}
                  >
                    <div className="min-w-0">
                      <ArticleFigure article={lead} sizes="(min-width: 1024px) 560px, 100vw" />
                      <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-accent)]">
                        {lead.category}
                      </p>
                      <h4 className="mt-2 text-xl font-semibold leading-snug">
                        <Link href={`/blog/${lead.slug}`} className="hover:underline">
                          {lead.title}
                        </Link>
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                        {lead.excerpt}
                      </p>
                      <p className="mt-3 text-sm text-[var(--color-muted)]">{metaLine(lead)}</p>
                      <ReadArticleLink href={`/blog/${lead.slug}`} title={lead.title} />
                    </div>
                    <ul className="min-w-0 border-t border-[var(--color-line)]">
                      {rows.map((article) => (
                        <li key={article.slug} className="border-b border-[var(--color-line)]">
                          <Link
                            href={`/blog/${article.slug}`}
                            className="block py-3.5 hover:underline"
                          >
                            <span className="block font-medium leading-snug">{article.title}</span>
                            <span className="mt-1 block text-sm text-[var(--color-muted)] no-underline">
                              {metaLine(article)}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={collection.moreHref}
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
                  >
                    {collection.moreLabel}
                    <span aria-hidden="true"> →</span>
                  </Link>
                </section>
              )
            })}
          </div>
        </SiteContainer>
      </section>

      <section aria-labelledby="latest-articles">
        <SiteContainer className="py-12 md:py-16">
          <h2 id="latest-articles" className="text-[1.65rem] font-semibold tracking-tight">
            Latest Articles
          </h2>
          <ul className="mt-6 border-t border-[var(--color-line)]">
            {latest.map((article) => (
              <li key={article.slug} className="border-b border-[var(--color-line)]">
                <Link
                  href={`/blog/${article.slug}`}
                  className="flex flex-col gap-1 py-4 hover:underline lg:flex-row lg:items-baseline lg:justify-between lg:gap-8"
                >
                  <span className="font-medium leading-snug">{article.title}</span>
                  <span className="text-sm text-[var(--color-muted)] lg:shrink-0 lg:text-right">
                    {metaLine(article)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>
      </WithRail>
    </div>
  )
}
