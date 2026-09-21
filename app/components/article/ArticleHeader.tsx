import { formatArticleDate, type Article } from "@/app/lib/articles"

export default function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="mt-6">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
        {article.category}
      </p>
      <h1 className="mt-3 text-[1.85rem] font-semibold leading-[1.15] tracking-tight text-[var(--color-ink)] md:text-[2.25rem]">
        {article.title}
      </h1>
      <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--color-muted)] md:text-[1.125rem]">
        {article.excerpt}
      </p>
      <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-[var(--color-muted)]">
        <span>{article.author}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
        {article.updatedAt ? (
          <>
            <span aria-hidden="true">·</span>
            <time dateTime={article.updatedAt}>Updated {formatArticleDate(article.updatedAt)}</time>
          </>
        ) : null}
        <span aria-hidden="true">·</span>
        <span>{article.readingTime}</span>
      </p>
    </header>
  )
}
