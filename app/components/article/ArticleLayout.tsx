import Image from "next/image"
import ArticleBreadcrumbs from "@/app/components/article/ArticleBreadcrumbs"
import ArticleCta from "@/app/components/article/ArticleCta"
import ArticleHeader from "@/app/components/article/ArticleHeader"
import ArticleJsonLd from "@/app/components/article/ArticleJsonLd"
import ArticleReferences from "@/app/components/article/ArticleReferences"
import ArticleToc from "@/app/components/article/ArticleToc"
import ContextSidebar from "@/app/components/practice/ContextSidebar"
import { getArticle } from "@/app/lib/articles"
import { articlePractice } from "@/app/lib/practice"

export default function ArticleLayout({
  slug,
  children,
  references,
  wordCount,
}: {
  slug: string
  children: React.ReactNode
  references?: { href: string; label: string }[]
  wordCount?: number
}) {
  const article = getArticle(slug)
  const practice = articlePractice(article)

  return (
    <article className="article-document bg-[var(--color-canvas)] pb-16 pt-8 md:pb-20 md:pt-10">
      <ArticleJsonLd article={article} wordCount={wordCount} />
      <div className="article-shell">
        <div>
          <div className="article-measure">
            <div className="article-no-print">
              <ArticleBreadcrumbs title={article.title} />
            </div>
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
              <figcaption className="article-caption">
                {article.heroCaption}
              </figcaption>
            ) : null}
          </figure>

          <div className="article-measure mt-10">
            <div className="article-body">{children}</div>
            {references?.length ? <ArticleReferences items={references} /> : null}
            <div className="article-no-print">
              <ArticleCta />
            </div>
          </div>
        </div>

        <aside className="article-rail article-no-print" aria-label="Article resources">
          <div className="article-rail-inner">
            <ContextSidebar
              toc={<ArticleToc />}
              articles={practice.articles}
              services={[practice.service]}
              projects={practice.project ? [practice.project] : []}
            />
          </div>
        </aside>
      </div>
    </article>
  )
}
