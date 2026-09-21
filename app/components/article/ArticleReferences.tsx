export default function ArticleReferences({
  items,
}: {
  items: { href: string; label: string }[]
}) {
  if (!items.length) return null

  return (
    <section className="mt-14 border-t border-[var(--color-line)] pt-8">
      <h2 className="text-xl font-semibold tracking-tight">References</h2>
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-[0.975rem] leading-relaxed">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer" className="font-medium text-[var(--color-accent)] underline underline-offset-2">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
