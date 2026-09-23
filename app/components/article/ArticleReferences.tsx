export default function ArticleReferences({
  items,
}: {
  items: { href: string; label: string }[]
}) {
  if (!items.length) return null

  return (
    <section className="article-references">
      <h2>References</h2>
      <ol>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}
