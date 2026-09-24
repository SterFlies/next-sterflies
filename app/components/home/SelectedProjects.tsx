import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import FeaturedProjectMedia from "@/app/components/home/FeaturedProjectMedia"
import { getHomepageProjects } from "@/app/projects/_data"

export default function SelectedProjects() {
  const { featured, supporting } = getHomepageProjects()

  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
      <SiteContainer>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Projects"
            title="Selected Field Documentation"
            description="Existing-conditions, mapping, thermal, and construction records. Each example is a real project, shown as a documentation case rather than a photography portfolio."
          />
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
          >
            All projects
          </Link>
        </div>

        <article className="mt-10 grid gap-6 border-t border-[var(--color-ink)] pt-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">
          <Link href={`/projects/${featured.slug}`} className="block overflow-hidden border border-[var(--color-line)] bg-[#111]">
            <FeaturedProjectMedia />
          </Link>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
              {featured.category}
            </p>
            <h3 className="mt-2 text-[1.65rem] font-semibold leading-snug tracking-tight md:text-[1.85rem]">
              <Link href={`/projects/${featured.slug}`} className="hover:text-[var(--color-accent)]">
                {featured.title}
              </Link>
            </h3>
            <dl className="mt-5 space-y-4 text-sm leading-relaxed md:text-base">
              <div>
                <dt className="font-semibold">What was documented</dt>
                <dd className="mt-1 text-[var(--color-muted)]">{featured.excerpt}</dd>
              </div>
              <div>
                <dt className="font-semibold">Documentation objective</dt>
                <dd className="mt-1 text-[var(--color-muted)]">{featured.objective}</dd>
              </div>
              <div>
                <dt className="font-semibold">Capture method</dt>
                <dd className="mt-1 text-[var(--color-muted)]">{featured.method}</dd>
              </div>
              <div>
                <dt className="font-semibold">Deliverables</dt>
                <dd className="mt-1 text-[var(--color-muted)]">{featured.deliverables}</dd>
              </div>
            </dl>
            <Link
              href={`/projects/${featured.slug}`}
              className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              View project
            </Link>
          </div>
        </article>

        <ul className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {supporting.map((project) => (
            <li key={project.slug}>
              <article className="grid gap-4 py-6 sm:grid-cols-[9.5rem_minmax(0,1fr)] sm:gap-6 md:grid-cols-[12rem_minmax(0,1fr)_auto] md:items-center">
                <Link href={`/projects/${project.slug}`} className="block overflow-hidden border border-[var(--color-line)]">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    width={480}
                    height={320}
                    sizes="(min-width: 768px) 192px, 160px"
                    className="aspect-[3/2] w-full object-cover"
                  />
                </Link>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">
                    {project.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold leading-snug tracking-tight">
                    <Link href={`/projects/${project.slug}`} className="hover:text-[var(--color-accent)]">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{project.objective}</p>
                  <p className="mt-2 text-sm text-[var(--color-ink)]">
                    <span className="font-semibold">Deliverables. </span>
                    {project.deliverables}
                  </p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline md:justify-end"
                >
                  View project
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  )
}
