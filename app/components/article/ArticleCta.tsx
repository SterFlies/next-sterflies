import ButtonLink from "@/app/components/ButtonLink"

export default function ArticleCta() {
  return (
    <section className="mt-14 border-t border-[var(--color-line)] pt-8">
      <h2 className="text-xl font-semibold tracking-tight">Need a site documented?</h2>
      <p className="mt-3 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)]">
        SterFlies can help determine which capture method and deliverables fit the documentation
        objective.
      </p>
      <div className="mt-6">
        <ButtonLink href="/contact">Discuss a Project</ButtonLink>
      </div>
    </section>
  )
}
