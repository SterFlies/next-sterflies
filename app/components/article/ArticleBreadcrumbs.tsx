import Link from "next/link"

export default function ArticleBreadcrumbs({ title }: { title: string }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-muted)]">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="hover:text-[var(--color-ink)]">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href="/blog" className="hover:text-[var(--color-ink)]">
            Articles
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="min-w-0">
          <span className="block truncate text-[var(--color-ink)]" aria-current="page">
            {title}
          </span>
        </li>
      </ol>
    </nav>
  )
}
