export default function ProcessSteps({
  steps,
}: {
  steps: { number: string; title: string; text: string }[]
}) {
  return (
    <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step) => (
        <li key={step.number} className="border-t border-[var(--color-ink)] pt-5">
          <p className="text-xs tracking-[0.14em] text-[var(--color-muted)]">{step.number}</p>
          <h3 className="mt-3 text-lg font-semibold leading-snug">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{step.text}</p>
        </li>
      ))}
    </ol>
  )
}
