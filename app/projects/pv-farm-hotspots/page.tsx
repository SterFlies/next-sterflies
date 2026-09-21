import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ServiceHero from "@/app/components/service/ServiceHero"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"
import ProjectFacts from "@/app/components/project/ProjectFacts"
import { cloudinaryUrl } from "@/app/config/site"

export const metadata: Metadata = {
  title: "Solar PV Thermal Documentation | SterFlies",
  description:
    "Paired thermal and RGB documentation of a photovoltaic array, with location context for later professional review.",
  alternates: { canonical: "/projects/pv-farm-hotspots" },
}

const HERO = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025050/Screenshot_2025-09-04_172830_jenh1y.png",
  1400
)
const PAIR = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_173015_tbmuho.png",
  1200
)
const ROW = cloudinaryUrl(
  "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757025051/Screenshot_2025-09-04_172933_ctigrw.png",
  1200
)

export default function PvProjectPage() {
  return (
    <>
      <ServiceHero
        eyebrow="Thermal Documentation"
        title="Solar PV Thermal Documentation"
        description="Document apparent temperature patterns across a photovoltaic array and preserve corresponding RGB and location context for later review."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/thermal/Applications", label: "View Thermal Documentation" }}
        image={{
          src: HERO,
          alt: "Thermal documentation of photovoltaic modules with apparent temperature variation",
          priority: true,
        }}
      />

      <section className="border-b border-[var(--color-line)] py-10 md:py-14">
        <SiteContainer>
          <ProjectFacts
            items={[
              { label: "Category", value: "Thermal Documentation" },
              { label: "Location", value: "Greater San Antonio, TX" },
              { label: "Capture method", value: "Thermal and RGB aerial capture" },
              { label: "Asset", value: "Photovoltaic array" },
            ]}
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="max-w-3xl">
          <SectionHeader eyebrow="Objective" title="Documentation objective" />
          <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
            Record apparent surface-temperature differences across the array and keep the corresponding visual and location context so maintenance or inspection teams could review specific modules rather than walking the field without a map.
          </p>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Methods" title="Capture method" />
            <p className="mt-6 text-base leading-relaxed text-[var(--color-muted)]">
              Thermal and RGB stills were captured together so apparent temperature patterns could be located on physical modules. Coverage was planned for module-level review of the array.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              Aerial thermal work for this project used a radiometric thermal sensor paired with a high-resolution RGB camera. Equipment is a method, not the service.
            </p>
          </div>
          <div>
            <SectionHeader eyebrow="Deliverables" title="What was delivered" />
            <ul className="mt-6 space-y-2 text-base leading-relaxed text-[var(--color-muted)]">
              <li>Thermal imagery</li>
              <li>RGB imagery</li>
              <li>Annotated snapshots with location context</li>
              <li>Mapped array context</li>
              <li>Review report organizing documented patterns</li>
            </ul>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Documented observations"
            title="Apparent temperature patterns"
            description="Thermal color is a visualization of apparent temperature. The patterns below were documented for later review. They are not independent determinations of module failure or liability."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Localized high-temperature cells",
                text: "Apparent hotspots were recorded so specific modules could be inspected later.",
              },
              {
                title: "Repeated block patterns",
                text: "Multi-cell temperature patterns were documented as areas identified for further electrical review.",
              },
              {
                title: "String-level variation",
                text: "Uneven heating along a string was recorded with location context for downstream review.",
              },
              {
                title: "RGB confirmation",
                text: "Thermal frames were reviewed against visual imagery to locate the pattern on the physical array.",
              },
            ].map((item) => (
              <li key={item.title} className="border-t border-[var(--color-ink)] pt-4">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{item.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-canvas)]">
              <Image
                src={PAIR}
                alt="Paired thermal and RGB frames locating apparent temperature variation on PV modules"
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
              <figcaption className="px-3 py-2 text-sm text-[var(--color-muted)]">
                Thermal and RGB frames used together so apparent heat signatures can be located on physical modules.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-canvas)]">
              <Image
                src={ROW}
                alt="Row-level thermal documentation with location context"
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
              <figcaption className="px-3 py-2 text-sm text-[var(--color-muted)]">
                Row-level context used to direct later inspection rather than a field-wide walk-down.
              </figcaption>
            </figure>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16">
        <SiteContainer className="max-w-3xl">
          <p className="text-sm leading-relaxed text-[var(--color-muted)]">
            Thermal imaging records apparent surface-temperature differences. Interpretation of those patterns, including any determination of defect cause, remains with qualified personnel.
          </p>
          <p className="mt-6">
            <Link
              href="/thermal/case-studies"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              Review additional thermal case-study context
            </Link>
          </p>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader eyebrow="Continue" title="Related service and reading" />
          <p className="mt-6">
            <Link
              href="/thermal/Applications"
              className="inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
            >
              View Thermal Documentation
            </Link>
          </p>
          <RelatedArticles
            items={[
              { href: "/blog/thermal-reporting-standards-iec-62446-3", title: "Thermal Reporting Standards: IEC 62446-3" },
              { href: "/blog/solar-thermal-anomalies-drone-based-pv-inspections", title: "Solar Thermal Anomalies in PV Inspections" },
              { href: "/thermal/method", title: "Thermal documentation method" },
            ]}
          />
        </SiteContainer>
      </section>

      <PageCta
        title="Need thermal documentation?"
        text="Describe the array or asset and what the record needs to support."
      />
    </>
  )
}
