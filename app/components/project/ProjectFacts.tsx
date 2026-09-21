export default function ProjectFacts({
  items,
}: {
  items: { label: string; value: string }[]
}) {
  return (
    <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="border-t border-[var(--color-ink)] pt-4">
          <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm leading-relaxed md:text-base">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
