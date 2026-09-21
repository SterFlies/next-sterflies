import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ServiceHero from "@/app/components/service/ServiceHero"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"
import ProjectFacts from "@/app/components/project/ProjectFacts"
import ProjectEmbed from "@/app/components/project/ProjectEmbed"
import { cloudinaryUrl, pageMetadata } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "65-Acre Site Mapping & Progress Documentation | SterFlies",
  description:
    "Recurring aerial photogrammetry used to create a shared spatial record of grading, utilities, pads, and access across a 65-acre development.",
  path: "/projects/65acresite",
})

const COVER = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081121_0005_V_nzvjey.jpg",
  1400
)
const PIX4D_MAP =
  "https://cloud.pix4d.com/embed/pro/map/2343984?shareToken=3674eb23-ce25-4347-af2b-7344c37e5128"
const STILLS = [
  {
    src: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081054_0001_V_ojcwvj.jpg",
      900
    ),
    alt: "Aerial view of material stock and site access on the 65-acre development",
  },
  {
    src: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015631/DJI_20250831081119_0004_V_rnq6vj.jpg",
      900
    ),
    alt: "Aerial view of grading and pad work across the development",
  },
  {
    src: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757015632/DJI_20250831081141_0006_V_wzu5oe.jpg",
      900
    ),
    alt: "Aerial overview of the 65-acre site and surrounding context",
  },
]

export default function MappingProjectPage() {
  return (
    <>
      <ServiceHero
        parent={{ href: "/projects", label: "Projects" }}
        eyebrow="Mapping & Photogrammetry"
        title="65-Acre Site Mapping & Progress Documentation"
        description="Recurring aerial photogrammetry used to create a shared spatial record of site conditions as the development advanced."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/services/mapping", label: "View Mapping & Photogrammetry" }}
        image={{ src: COVER, alt: "Aerial mapping of a 65-acre development site", priority: true }}
      />

      <section className="border-b border-[var(--color-line)] py-10 md:py-14">
        <SiteContainer>
          <ProjectFacts
            items={[
              { label: "Category", value: "Mapping & Photogrammetry" },
              { label: "Location", value: "Greater Houston, TX" },
              { label: "Site area", value: "Approximately 65 acres" },
              { label: "Cadence", value: "Weekly to biweekly by phase" },
            ]}
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="max-w-3xl">
          <SectionHeader eyebrow="Overview" title="Project overview" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
            <p>
              This 65-acre development had grading, utilities, pads, access, and staging moving in parallel. Project teams needed a repeatable way to see the whole site without relying on scattered stills or waiting on a full survey cycle.
            </p>
            <p>
              Recurring aerial photogrammetry produced a date-stamped orthomosaic and shareable web map. The map became a common spatial record for planning, field coordination, and later comparison.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Objective" title="Documentation objective" />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
              Create a repeatable spatial record of site conditions and progress so later visits could be compared to an earlier state.
            </p>
            <ul className="mt-6 space-y-2 text-base leading-relaxed text-[var(--color-muted)]">
              <li>Shared site context for project teams</li>
              <li>Grading, pad, and access reference</li>
              <li>Utility and staging visibility</li>
              <li>Progress documentation over time</li>
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Methods" title="Capture method" />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
              Aerial photogrammetry was flown on a consistent footprint so later captures could be compared. Overlapping stills were processed into an orthomosaic and published as a web map.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              Browser measurements are useful for coordination. They are not a substitute for a stamped land survey.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Deliverable"
            title="Interactive orthomosaic"
            description="Pan, zoom, and review site layout directly in the mapped record."
          />
          <div className="mt-10">
            <ProjectEmbed src={PIX4D_MAP} title="Orthomosaic of a 65-acre development site" tall />
          </div>
          <p className="mt-4 text-sm text-[var(--color-muted)]">
            Delivered outputs for this project were the orthomosaic, shareable web map, and site imagery.
          </p>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Why it mattered"
            title="A shared picture of changing conditions"
            description="On a site this size, pads, trenches, stockpiles, and access routes can change between visits. A versioned mapped record keeps those shifts visible."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {STILLS.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={600}
                  className="aspect-[16/10] w-full object-cover"
                />
              </figure>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader eyebrow="Continue" title="Related service and reading" />
          <p className="mt-6">
            <Link
              href="/services/mapping"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              View Mapping & Photogrammetry
            </Link>
          </p>
          <RelatedArticles
            items={[
              { href: "/blog/orthomosaic_blog", title: "Orthomosaic Mapping" },
              { href: "/blog/construction-progress-monitoring-best-practices", title: "Construction Progress Monitoring" },
              { href: "/blog/volumetric_blog", title: "Volumetric Data" },
            ]}
          />
        </SiteContainer>
      </section>

      <PageCta />
    </>
  )
}
