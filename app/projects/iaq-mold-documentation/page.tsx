import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ServiceHero from "@/app/components/service/ServiceHero"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"
import ProjectFacts from "@/app/components/project/ProjectFacts"
import ProjectEmbed from "@/app/components/project/ProjectEmbed"
import { ProjectNotes, ProjectSidebar } from "@/app/components/project/ProjectContext"
import WithRail from "@/app/components/practice/WithRail"
import { cloudinaryUrl, pageMetadata } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "IAQ & Mold Existing Conditions Documentation | SterFlies",
  description:
    "Demonstration project illustrating combined interior walkthrough and exterior 3D documentation of existing site conditions.",
  path: "/projects/iaq-mold-documentation",
})

const MATTERPORT_URL = "https://my.matterport.com/show/?m=gB2RVDfqLvW"
const EXTERIOR_MODEL_URL =
  "https://www.spearatlas.com/share/v/_1YGNQJW0iLaVssUJiFALNV4qpVJ8rZbThCsbhPeuAw/embed"
const VIDEO =
  "https://res.cloudinary.com/dzlmoyomq/video/upload/v1757075500/reelmatter_vzpkqo.mp4"
const VIDEO_POSTER = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757090021/Screenshot_2025-09-05_113308_yh4rz0.png",
  1400
)
const ANNOTATED = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1768335085/Screenshot_2026-01-13_140858_guyvz2.png",
  1400
)
const COMBINED = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1769103746/ext-int3D_h28l56.jpg",
  1400
)
const FIELD = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757077084/matterportthumb_rosrlb.png",
  1200
)

export default function IaqProjectPage() {
  return (
    <>
      <WithRail sidebar={<ProjectSidebar slug="iaq-mold-documentation" />}>
      <ServiceHero
        parent={{ href: "/projects", label: "Projects" }}
        eyebrow="Existing Conditions / Reality Capture"
        title="IAQ & Mold Existing Conditions Documentation"
        description="Demonstration project illustrating an interior and exterior documentation workflow used to preserve site conditions as a reviewable spatial record."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/services/forensic-site-documentation", label: "View Forensic Mapping" }}
      />

      <section className="border-b border-[var(--color-line)] py-10 md:py-14">
        <SiteContainer>
          <ProjectFacts
            items={[
              { label: "Location", value: "San Antonio Area, TX" },
              { label: "Setting", value: "Interior and exterior" },
              { label: "Capture type", value: "Terrestrial walkthrough and exterior photogrammetry" },
              { label: "Outputs", value: "Walkthrough, exterior 3D model, annotated views" },
              { label: "Record type", value: "Demonstration project" },
            ]}
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Interior record"
            title="Interactive walkthrough"
            description="The interior tour preserves room layout, access, and annotated locations for later review."
          />
          <div className="mt-10">
            <ProjectEmbed src={MATTERPORT_URL} title="Interior walkthrough of documented existing conditions" tall />
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="max-w-3xl">
          <SectionHeader eyebrow="Overview" title="Project overview" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
            <p>
              The purpose of this work was to preserve interior and exterior conditions as a reviewable spatial record. Interior capture documents room relationships and close-range conditions. Exterior photogrammetry documents the building envelope, access, and surrounding context.
            </p>
            <p>
              Demonstration project illustrating an interior/exterior documentation workflow. Sampling labels or laboratory values shown in the models are fictional and included only to show how location context can be referenced inside a record.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Objective"
            title="What needed to be preserved"
            description="The record was scoped to conditions that later professional review would need after the site has changed."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              "Interior layout and room relationships",
              "Corridors, access, and transitions",
              "Exterior envelope and site context",
              "Visible conditions at the time of capture",
              "Location context for later sampling or review notes",
            ].map((item) => (
              <li key={item} className="border-t border-[var(--color-ink)] pt-4 text-base">
                {item}
              </li>
            ))}
          </ul>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Methods" title="Capture methods" />
            <ul className="mt-8 space-y-4 text-base leading-relaxed">
              <li>
                <span className="font-semibold">Matterport / terrestrial capture.</span>{" "}
                <span className="text-[var(--color-muted)]">
                  Interior scanning used to create a navigable walkthrough of rooms, corridors, and annotated locations.
                </span>
              </li>
              <li>
                <span className="font-semibold">Exterior photogrammetry.</span>{" "}
                <span className="text-[var(--color-muted)]">
                  Overlapping stills processed into an exterior 3D model of roof geometry, elevations, and access.
                </span>
              </li>
              <li>
                <span className="font-semibold">High-resolution imagery.</span>{" "}
                <span className="text-[var(--color-muted)]">
                  Still photography used for close visual reference and annotation.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="Deliverables" title="What was delivered" />
            <ul className="mt-8 space-y-3 text-base leading-relaxed text-[var(--color-muted)]">
              <li>Interior walkthrough</li>
              <li>Exterior 3D model</li>
              <li>Annotated views</li>
              <li>Spatial context connecting interior rooms to exterior conditions</li>
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">
              Deliverables were selected for this documentation objective. Not every forensic engagement includes the same set of products.
            </p>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Combined capture"
            title="Why interior and exterior records were paired"
            description="Interior capture provides room-level continuity. Exterior mapping provides broader site context that a walkthrough alone cannot reconstruct."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
              <Image
                src={COMBINED}
                alt="Combined interior and exterior 3D documentation of existing site conditions"
                width={1400}
                height={900}
                className="aspect-[16/10] w-full object-cover object-left"
              />
            </figure>
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
              <Image
                src={ANNOTATED}
                alt="Annotated interior view showing location context inside the walkthrough"
                width={1400}
                height={900}
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Exterior model"
            title="Exterior 3D documentation"
            description="The exterior model preserves roof planes, elevation transitions, and site access for later comparison with interior conditions."
          />
          <div className="mt-10">
            <ProjectEmbed src={EXTERIOR_MODEL_URL} title="Exterior 3D model of documented site conditions" tall />
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <SectionHeader eyebrow="Interior capture" title="Terrestrial scanning in the field" />
            <p className="mt-6 max-w-[42rem] text-base leading-relaxed text-[var(--color-muted)]">
              Interior capture was planned around line of sight, scan spacing, and room continuity so corridors and transitions would stitch into a navigable record. Matterport is the capture tool used for the walkthrough; the product is the interior documentation, not the scanner.
            </p>
            <figure className="mt-8 overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[#111]">
              <video controls playsInline preload="metadata" poster={VIDEO_POSTER} className="aspect-video w-full">
                <source src={VIDEO} type="video/mp4" />
              </video>
            </figure>
          </div>
          <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
            <Image
              src={FIELD}
              alt="Terrestrial scanner in place during interior documentation"
              width={900}
              height={700}
              className="aspect-[4/3] w-full object-cover"
            />
          </figure>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16">
        <SiteContainer className="max-w-3xl">
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            SterFlies documents field conditions. Mold assessment, industrial hygiene interpretation, and health-related conclusions remain with qualified professionals.
          </p>
        </SiteContainer>
      </section>

      <ProjectNotes slug="iaq-mold-documentation" />

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader eyebrow="Continue" title="Related service and reading" />
          <p className="mt-6">
            <Link
              href="/services/forensic-site-documentation"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              View Forensic Mapping & Site Documentation
            </Link>
          </p>
          <RelatedArticles
            items={[
              { href: "/blog/exterior-photogrammetry-interior-reality-capture", title: "Combining Exterior Photogrammetry with Interior Reality Capture" },
              { href: "/blog/what-is-forensic-site-documentation", title: "What Is Forensic Site Documentation" },
              { href: "/blog/why-existing-conditions-documentation-is-critical-for-ih-investigations", title: "Why Existing Conditions Documentation Is Critical for IH Investigations" },
              { href: "/blog/why-site-conditions-should-be-documented-before-they-are-altered-blog", title: "Why Site Conditions Should Be Documented Before They Are Altered" },
            ]}
          />
        </SiteContainer>
      </section>
      </WithRail>

      <PageCta />
    </>
  )
}
