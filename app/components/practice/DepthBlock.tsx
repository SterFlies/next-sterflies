import SectionHeader from "@/app/components/SectionHeader"
import SiteContainer from "@/app/components/SiteContainer"

export default function DepthBlock({
  id,
  eyebrow,
  title,
  children,
  surface = false,
}: {
  id?: string
  eyebrow: string
  title: string
  children: React.ReactNode
  surface?: boolean
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-[var(--color-line)] py-12 md:py-16 ${
        surface ? "bg-[var(--color-surface)]" : ""
      }`}
    >
      <SiteContainer>
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="depth-copy mt-6 max-w-[46rem]">{children}</div>
      </SiteContainer>
    </section>
  )
}
