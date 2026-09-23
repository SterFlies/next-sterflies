import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import PageCta from "@/app/components/service/PageCta"
import ContextSidebar from "@/app/components/practice/ContextSidebar"
import WithRail from "@/app/components/practice/WithRail"
import { pageMetadata } from "@/app/config/site"
import { projects, type ProjectCategory } from "./_data"

export const metadata = pageMetadata({
  title: "Selected Field Documentation | SterFlies",
  description:
    "Examples of aerial, terrestrial, thermal, and photogrammetric documentation used to preserve site conditions and support technical review.",
  path: "/projects",
})

const groupOrder: ProjectCategory[] = [
  "Existing Conditions / Reality Capture",
  "Mapping & Photogrammetry",
  "3D Progress Documentation",
  "Thermal Documentation",
]

const groupNotes: Record<ProjectCategory, string> = {
  "Existing Conditions / Reality Capture":
    "Interior and exterior records used to preserve conditions for later professional review.",
  "Mapping & Photogrammetry":
    "Repeatable aerial mapping used as a shared spatial record of a large site.",
  "3D Progress Documentation":
    "Milestone models of visible construction geometry for remote review.",
  "Thermal Documentation":
    "Paired thermal and RGB records for later qualified review.",
}

export default function ProjectsIndexPage() {
  const grouped = groupOrder.map((category) => ({
    category,
    items: projects.filter((project) => project.category === category),
  }))

  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <SectionHeader
            as="h1"
            eyebrow="Projects"
            title="Selected Field Documentation"
            description="Examples of aerial, terrestrial, thermal, and photogrammetric documentation used to preserve site conditions, create spatial records, and support technical review. The set is small and real. It is organized so later projects can join the same practice categories."
          />
        </SiteContainer>
      </section>

      <WithRail
        sidebar={
          <ContextSidebar
            services={[
              { href: "/services/forensic-site-documentation", title: "Forensic Mapping & Site Documentation" },
              { href: "/services/mapping", title: "Mapping & Photogrammetry" },
              { href: "/thermal/Applications", title: "Thermal Documentation" },
            ]}
            resources={[
              { href: "/blog/what-is-forensic-site-documentation", title: "What Is Forensic Site Documentation" },
              { href: "/blog/orthomosaic_blog", title: "Understanding Orthomosaic Mapping" },
              { href: "/blog/thermal101_blog", title: "What Thermal Imaging Shows and Does Not" },
            ]}
          />
        }
      >
        <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
          <SiteContainer className="space-y-16">
            {grouped.map((group) => (
              <div key={group.category}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  {group.category}
                </h2>
                <p className="mt-2 max-w-[40rem] text-sm leading-relaxed text-[var(--color-muted)]">
                  {groupNotes[group.category]}
                </p>
                <div className="mt-8 space-y-16">
                  {group.items.map((project) => (
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
                        <h3 className="text-[1.5rem] font-semibold tracking-tight md:text-[1.75rem]">
                          <Link href={`/projects/${project.slug}`} className="hover:text-[var(--color-accent)]">
                            {project.title}
                          </Link>
                        </h3>
                        <dl className="mt-6 space-y-4 text-sm leading-relaxed md:text-base">
                          <div>
                            <dt className="font-semibold">Professional context</dt>
                            <dd className="mt-1 text-[var(--color-muted)]">{project.excerpt}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold">Documentation objective</dt>
                            <dd className="mt-1 text-[var(--color-muted)]">{project.objective}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold">Capture methods</dt>
                            <dd className="mt-1 text-[var(--color-muted)]">{project.method}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold">Deliverables</dt>
                            <dd className="mt-1 text-[var(--color-muted)]">{project.deliverables}</dd>
                          </div>
                        </dl>
                        <Link
                          href={project.serviceHref}
                          className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
                        >
                          {project.serviceLabel}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </SiteContainer>
        </section>
      </WithRail>

      <PageCta />
    </>
  )
}
