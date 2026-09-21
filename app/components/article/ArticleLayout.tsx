import Image from "next/image"
import ArticleBreadcrumbs from "@/app/components/article/ArticleBreadcrumbs"
import ArticleCta from "@/app/components/article/ArticleCta"
import ArticleHeader from "@/app/components/article/ArticleHeader"
import ArticleReferences from "@/app/components/article/ArticleReferences"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import { getArticle, getRelatedArticles } from "@/app/lib/articles"

export default function ArticleLayout({
  slug,
  children,
  references,
}: {
  slug: string
  children: React.ReactNode
  references?: { href: string; label: string }[]
}) {
  const article = getArticle(slug)
  const related = getRelatedArticles(article.relatedSlugs)

  return (
    <article className="bg-[var(--color-canvas)] pb-16 pt-8 md:pb-20 md:pt-10">
      <div className="article-measure">
        <ArticleBreadcrumbs title={article.title} />
        <ArticleHeader article={article} />
      </div>

      <figure className="article-figure-wide mt-8">
        <Image
          src={article.heroImage}
          alt={article.heroAlt}
          width={1600}
          height={1000}
          priority
          className="h-auto w-full object-cover"
        />
        {article.heroCaption ? (
          <figcaption className="mt-2 text-[0.9375rem] text-[var(--color-muted)]">
            {article.heroCaption}
          </figcaption>
        ) : null}
      </figure>

      <div className="article-measure mt-10">
        <div className="article-body">{children}</div>
        {references?.length ? <ArticleReferences items={references} /> : null}
        {related.length ? (
          <section className="mt-14 border-t border-[var(--color-line)] pt-8">
            <h2 className="text-xl font-semibold tracking-tight">Related articles</h2>
            <RelatedArticles
              items={related.map((item) => ({
                href: `/blog/${item.slug}`,
                title: item.title,
              }))}
            />
          </section>
        ) : null}
        <ArticleCta />
      </div>
    </article>
  )
}
