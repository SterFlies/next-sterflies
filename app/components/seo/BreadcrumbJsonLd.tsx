import { siteConfig } from "@/app/config/site"

export type BreadcrumbItem = {
  name: string
  href?: string
}

export default function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
      }
      if (item.href) {
        entry.item = item.href.startsWith("http")
          ? item.href
          : `${siteConfig.url}${item.href}`
      }
      return entry
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
