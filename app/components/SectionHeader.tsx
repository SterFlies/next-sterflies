import React from "react"

export default function SectionHeader({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
}: {
  eyebrow?: string
  title: string
  description?: string
  as?: "h1" | "h2"
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-muted)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--color-ink)] md:text-[2.125rem] lg:text-[2.5rem]">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
