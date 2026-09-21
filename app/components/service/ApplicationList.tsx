export default function ApplicationList({
  items,
}: {
  items: { title: string; text?: string }[]
}) {
  return (
    <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="border-t border-[var(--color-ink)] pt-4">
          <h3 className="text-base font-semibold">{item.title}</h3>
          {item.text ? (
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
