export default function ArticleCallout({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-[var(--color-accent)] pl-4 text-[1.05rem] leading-relaxed text-[var(--color-muted)]">
      {children}
    </aside>
  )
}
