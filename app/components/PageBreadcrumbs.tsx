import Link from "next/link"
import BreadcrumbJsonLd, {
  type BreadcrumbItem,
} from "@/app/components/seo/BreadcrumbJsonLd"

export default function PageBreadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <BreadcrumbJsonLd items={items} />
      <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-muted)]">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((item, index) => {
            const last = index === items.length - 1
            return (
              <li key={`${item.name}-${index}`} className="flex min-w-0 items-center gap-x-2">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last || !item.href ? (
                  <span
                    className="block truncate text-[var(--color-ink)]"
                    aria-current={last ? "page" : undefined}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[var(--color-ink)]">
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
