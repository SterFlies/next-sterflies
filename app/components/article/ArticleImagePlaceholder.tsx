export default function ArticleImagePlaceholder({
  label,
  detail,
  alt,
  caption,
  bare = false,
}: {
  label: string
  detail: string
  alt: string
  caption?: string
  bare?: boolean
}) {
  const frame = (
    <div
      role="img"
      aria-label={alt}
      className="flex aspect-[16/10] w-full items-center justify-center border border-[var(--color-line)] bg-[var(--color-canvas)] px-6 py-8 text-center"
    >
      <div className="max-w-[40rem]">
        <p className="text-sm font-semibold leading-snug tracking-tight text-[var(--color-ink)]">{label}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{detail}</p>
      </div>
    </div>
  )

  if (bare) return frame

  return (
    <figure className="article-figure">
      {frame}
      {caption ? <figcaption className="article-caption">{caption}</figcaption> : null}
    </figure>
  )
}
