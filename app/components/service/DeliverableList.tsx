export default function DeliverableList({
  items,
  note,
}: {
  items: { title: string; text: string }[]
  note: string
}) {
  return (
    <>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.title} className="border-t border-[var(--color-ink)] pt-4">
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-[46rem] text-sm leading-relaxed text-[var(--color-muted)]">{note}</p>
    </>
  )
}
