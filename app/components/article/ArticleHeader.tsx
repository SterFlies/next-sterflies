import PrintButton from "@/app/components/article/PrintButton"
import { formatArticleDate, type Article } from "@/app/lib/articles"

export default function ArticleHeader({ article }: { article: Article }) {
  return (
    <header className="article-header">
      <p className="article-kicker">{article.category}</p>
      <h1 className="article-title">{article.title}</h1>
      <p className="article-dek">{article.excerpt}</p>
      <p className="article-byline">By {article.author}</p>
      <p className="article-meta">
        Published <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
      </p>
      {article.updatedAt ? (
        <p className="article-meta">
          Updated <time dateTime={article.updatedAt}>{formatArticleDate(article.updatedAt)}</time>
        </p>
      ) : null}
      <p className="article-meta">{article.readingTime}</p>
      <PrintButton />
    </header>
  )
}
