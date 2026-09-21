import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ServiceHero from "@/app/components/service/ServiceHero"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"
import ProjectFacts from "@/app/components/project/ProjectFacts"
import ProjectEmbed from "@/app/components/project/ProjectEmbed"
import { cloudinaryUrl } from "@/app/config/site"

export const metadata: Metadata = {
  title: "Custom Home 3D Progress Documentation | SterFlies",
  description:
    "Recurring photogrammetric 3D documentation of a custom home used to preserve changing construction conditions for remote review.",
  alternates: { canonical: "/projects/custom-home-3d-model" },
}

const COVER = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757016149/flighttomesh_ae4avk.png",
  1400
)
const MESH =
  "https://cloud.pix4d.com/embed/pro/mesh/2296493?shareToken=47b2a408687641a3bc946816afe5b10d"
const FRAMING = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757023984/Screenshot_2025-09-04_171243_h3pjwq.png",
  1200
)
const ROUGH_IN = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757023989/Screenshot_2025-09-04_171148_r6ocqt.png",
  1200
)

export default function CustomHomeProjectPage() {
  return (
    <>
      <ServiceHero
        eyebrow="3D Progress Documentation"
        title="Custom Home 3D Progress Documentation"
        description="Recurring 3D documentation of a custom home so changing construction conditions could be reviewed remotely as work advanced."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/services/mapping", label: "View Mapping & Photogrammetry" }}
        image={{
          src: COVER,
          alt: "Photogrammetric 3D model of a custom home during construction",
          priority: true,
        }}
      />

      <section className="border-b border-[var(--color-line)] py-10 md:py-14">
        <SiteContainer>
          <ProjectFacts
            items={[
              { label: "Category", value: "3D Progress Documentation" },
              { label: "Location", value: "San Antonio Area, TX" },
              { label: "Capture method", value: "Aerial photogrammetry" },
              { label: "Cadence", value: "Milestone-based repeat capture" },
            ]}
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="max-w-3xl">
          <SectionHeader eyebrow="Overview" title="Project overview" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
            <p>
              Construction conditions on this custom home changed quickly as framing, roof geometry, and rough-in advanced. The documentation objective was to preserve a repeatable 3D record of those conditions so the project team could review progress without reconstructing the site from disconnected photographs.
            </p>
            <p>
              Each capture produced a navigable model that could be compared with earlier visits. The record supported remote review, coordination, and later confirmation of what had changed.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Deliverable"
            title="Interactive 3D model"
            description="Orbit and zoom the reconstructed geometry. Viewer measurements are useful for planning; record drawings remain with survey or engineering when those are required."
          />
          <div className="mt-10">
            <ProjectEmbed src={MESH} title="3D progress model of a custom home under construction" tall />
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Objective" title="What needed to be preserved" />
            <ul className="mt-6 space-y-2 text-base leading-relaxed text-[var(--color-muted)]">
              <li>Framing and roof geometry as work advanced</li>
              <li>Openings, chases, and rough-in context</li>
              <li>A comparable 3D record between visits</li>
              <li>Remote review of changing construction conditions</li>
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Methods" title="Capture method" />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
              Aerial photogrammetry used overlapping stills around the structure, then processed those stills into a 3D model. Repeat visits used comparable camera geometry so later models could be compared with earlier ones.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              When RTK or other positional control is used, it can improve alignment between visits. Alignment still depends on capture conditions and the control method specified for the engagement.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Why it mattered"
            title="Progress visible after the site has changed"
            description="Once sheathing, wrap, or interiors proceed, earlier geometry is no longer available on site. A dated 3D record keeps that state reviewable."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
              <Image
                src={FRAMING}
                alt="3D model view of framing and roof geometry during construction"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="px-3 py-2 text-sm text-[var(--color-muted)]">
                Framing and roof geometry preserved for later comparison.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
              <Image
                src={ROUGH_IN}
                alt="3D model view of construction rough-in paths"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="px-3 py-2 text-sm text-[var(--color-muted)]">
                Rough-in context captured while it was still visible.
              </figcaption>
            </figure>
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
              { href: "/blog/3d_model", title: "3D Models" },
              { href: "/blog/construction-progress-monitoring-best-practices", title: "Construction Progress Monitoring" },
              { href: "/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog", title: "Why Site Conditions Should Be Documented Before They Are Altered" },
            ]}
          />
        </SiteContainer>
      </section>

      <PageCta />
    </>
  )
}
