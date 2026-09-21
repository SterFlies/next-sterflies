import Link from "next/link"

export default function RelatedArticles({
  items,
}: {
  items: { href: string; title: string }[]
}) {
  return (
    <ul className="mt-10 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="flex min-h-11 items-center py-4 text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)]"
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
