import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ButtonLink from "@/app/components/ButtonLink"
import PageCta from "@/app/components/service/PageCta"
import { pageMetadata, siteConfig } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "About | SterFlies",
  description:
    "SterFlies uses aerial and ground-based capture methods to create reviewable spatial records of physical sites and changing conditions.",
  path: "/about",
})

const qualifications = [
  {
    title: "FAA Part 107",
    text: "Commercial aerial operations are conducted under an FAA Part 107 remote pilot certificate.",
  },
  {
    title: "OSHA 10",
    text: "Field work on construction and industrial sites is supported by OSHA 10 construction safety training.",
  },
  {
    title: "Insured Operations",
    text: "SterFlies maintains insurance appropriate to its field operations. Proof can be provided for an engagement upon request.",
  },
]

const audiences = [
  "Forensic consultants and expert witnesses",
  "Attorneys and investigation teams",
  "Industrial hygienists and EHS professionals",
  "Engineers, construction teams, and facility operators",
  "Insurers and claims professionals",
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <SectionHeader
            as="h1"
            eyebrow="About"
            title="Technical Field Documentation, Built Around the Site"
            description="SterFlies uses aerial and ground-based capture methods to create reviewable spatial records of physical sites and changing conditions."
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="max-w-3xl">
          <SectionHeader eyebrow="Practice" title="What SterFlies does" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
            <p>
              SterFlies documents physical site conditions so later review does not depend on memory, scattered photographs, or a site that has already changed. The work produces spatial and visual records. Qualified professionals interpret those records.
            </p>
            <p>
              The practice began in drone-based capture. It has evolved into a broader technical documentation workflow that selects aerial, terrestrial, thermal, and photogrammetric methods according to the site, the documentation objective, and the deliverables required.
            </p>
            <p>
              Hardware, sensors, and software are tools. They are not independent product brands. The service is the record: site context, measurable outputs, and organized files that can support investigation, construction, and industrial review.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Audience" title="Who the work supports" />
            <ul className="mt-8 space-y-3 text-base leading-relaxed">
              {audiences.map((item) => (
                <li key={item} className="border-t border-[var(--color-line)] pt-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Role" title="How SterFlies relates to technical work" />
            <p className="mt-8 text-base leading-relaxed text-[var(--color-muted)]">
              SterFlies captures and organizes field conditions. Interpretation of those conditions—including mold assessment, accident causation, electrical diagnosis, code determinations, and legal conclusions—remains with the appropriate qualified professional.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
              Photogrammetric products can support measurement and comparison. They do not replace a licensed land survey when a legal survey is required.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Qualifications"
            title="Field credentials that support the work"
            description="Operations are planned around access, safety, and the documentation objective."
          />
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {qualifications.map((item) => (
              <li key={item.title} className="border-t border-[var(--color-ink)] pt-4">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16">
        <SiteContainer className="max-w-3xl">
          <SectionHeader eyebrow="Location" title="Where work is based" />
          <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
            {siteConfig.serviceArea}
          </p>
          {siteConfig.companyRelationship ? (
            <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">
              {siteConfig.companyRelationship}
            </p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Discuss a Project</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">
              Read technical articles
            </ButtonLink>
            <ButtonLink href="/capabilities" variant="secondary">
              View capabilities
            </ButtonLink>
          </div>
        </SiteContainer>
      </section>

      <PageCta />
    </>
  )
}
