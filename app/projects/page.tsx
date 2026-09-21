import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import PageCta from "@/app/components/service/PageCta"
import { projects } from "./_data"

export const metadata: Metadata = {
  title: "Selected Field Documentation | SterFlies",
  description:
    "Examples of aerial, terrestrial, thermal, and photogrammetric documentation used to preserve site conditions and support technical review.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsIndexPage() {
  const items = [...projects].sort((a, b) => (b.date || "").localeCompare(a.date || ""))

  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <SectionHeader
            as="h1"
            eyebrow="Projects"
            title="Selected Field Documentation"
            description="Examples of aerial, terrestrial, thermal, and photogrammetric documentation used to preserve site conditions, create spatial records, and support technical review."
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <div className="space-y-16">
            {items.map((project) => (
              <article
                key={project.slug}
                className="grid gap-8 border-t border-[var(--color-line)] pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="block overflow-hidden rounded-[6px] border border-[var(--color-line)]"
                >
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    width={1400}
                    height={900}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </Link>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    {project.category}
                  </p>
                  <h2 className="mt-2 text-[1.5rem] font-semibold tracking-tight md:text-[1.75rem]">
                    <Link href={`/projects/${project.slug}`} className="hover:text-[var(--color-accent)]">
                      {project.title}
                    </Link>
                  </h2>
                  <dl className="mt-6 space-y-4 text-sm leading-relaxed md:text-base">
                    <div>
                      <dt className="font-semibold">Documentation objective</dt>
                      <dd className="mt-1 text-[var(--color-muted)]">{project.objective}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Capture method</dt>
                      <dd className="mt-1 text-[var(--color-muted)]">{project.method}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold">Deliverables</dt>
                      <dd className="mt-1 text-[var(--color-muted)]">{project.deliverables}</dd>
                    </div>
                  </dl>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
                  >
                    View project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <PageCta />
    </>
  )
}
