import PageBreadcrumbs from "@/app/components/PageBreadcrumbs"

export default function ArticleBreadcrumbs({ title }: { title: string }) {
  return (
    <PageBreadcrumbs
      items={[
        { name: "Home", href: "/" },
        { name: "Articles", href: "/blog" },
        { name: title },
      ]}
    />
  )
}
