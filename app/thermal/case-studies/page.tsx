import Image from "next/image"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ThermalNav from "@/app/components/service/ThermalNav"
import CompareSlider from "@/app/components/service/CompareSlider"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"
import PageBreadcrumbs from "@/app/components/PageBreadcrumbs"
import ContextSidebar from "@/app/components/practice/ContextSidebar"
import WithRail from "@/app/components/practice/WithRail"
import { cloudinaryUrl, pageMetadata } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "Thermal Case Studies | SterFlies",
  description:
    "Field documentation of apparent temperature patterns on a photovoltaic array, paired with RGB context for later professional review.",
  path: "/thermal/case-studies",
})

const media = {
  rgb: cloudinaryUrl(
    "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757966482/heb-roofpv-ortho_ywek9f.jpg",
    1400
  ),
  thermal: cloudinaryUrl(
    "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757970946/HEB-RGB-ORTHO_xvcvyf.jpg",
    1400
  ),
  hotspots: [
    cloudinaryUrl("https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965883/Screenshot_2025-09-15_144810_adwvht.png", 400),
    cloudinaryUrl("https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965898/Screenshot_2025-09-15_144751_dtuqyx.png", 400),
    cloudinaryUrl("https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965883/Screenshot_2025-09-15_144800_pkvjwn.png", 400),
  ],
  diodes: [
    cloudinaryUrl("https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965883/Screenshot_2025-09-15_144845_wn9eqo.png", 400),
    cloudinaryUrl("https://res.cloudinary.com/dzlmoyomq/image/upload/v1757976032/Screenshot_2025-09-15_174021_rsjae4.png", 400),
  ],
  strings: [
    cloudinaryUrl("https://res.cloudinary.com/dzlmoyomq/image/upload/v1757965884/Screenshot_2025-09-15_144948_cjf5j3.png", 400),
    cloudinaryUrl("https://res.cloudinary.com/dzlmoyomq/image/upload/v1757976235/Screenshot_2025-09-15_174340_dxylfu.png", 400),
    cloudinaryUrl("https://res.cloudinary.com/dzlmoyomq/image/upload/v1757976338/Screenshot_2025-09-15_174435_xx890o.png", 400),
  ],
  annotated: cloudinaryUrl(
    "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967114/Screenshot_2025-09-15_151144_izd9ql.png",
    1200
  ),
  spread: cloudinaryUrl(
    "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757967074/Screenshot_2025-09-15_145057_bn0hpr.png",
    1200
  ),
  map: cloudinaryUrl(
    "https://res.cloudinary.com/dzlmoyomq/image/upload/v1757974109/Screenshot_2025-09-15_170815_tqwdqq.png",
    1200
  ),
}

function PanelGrid({
  srcs,
  captions,
  alt,
}: {
  srcs: string[]
  captions: string[]
  alt: string
}) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:max-w-xl">
      {srcs.map((src, i) => (
        <figure key={src} className="rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)] p-2">
          <Image src={src} alt={`${alt} ${i + 1}`} width={220} height={280} className="mx-auto h-auto w-full object-contain" />
          <figcaption className="mt-2 text-center text-xs text-[var(--color-muted)]">{captions[i]}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default function ThermalCaseStudiesPage() {
  return (
    <>
      <ThermalNav current="/thermal/case-studies" />
      <WithRail
        sidebar={
          <ContextSidebar
            articles={[
              { href: "/blog/solar-thermal-anomalies-drone-based-pv-inspections", title: "Solar Thermal Anomalies in PV Inspections" },
              { href: "/blog/thermal-reporting-standards-iec-62446-3", title: "Thermal Reporting Standards in Solar PV Inspections" },
              { href: "/blog/thermal101_blog", title: "What Thermal Imaging Shows and Does Not" },
            ]}
            services={[{ href: "/thermal/Applications", title: "Thermal Documentation" }]}
            projects={[{ href: "/projects/pv-farm-hotspots", title: "Solar PV Thermal Documentation" }]}
            resources={[{ href: "/thermal/method", title: "Thermal method" }]}
          />
        }
      >
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <div className="mb-5">
            <PageBreadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Thermal Documentation", href: "/thermal/Applications" },
                { name: "Case Studies" },
              ]}
            />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Case study
          </p>
          <h1 className="mt-3 max-w-[18ch] text-[2rem] font-semibold leading-[1.12] tracking-tight md:text-[2.5rem]">
            Solar PV Thermal Documentation
          </h1>
          <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            RGB and thermal documentation of a rooftop photovoltaic array. Apparent temperature patterns were recorded with location context so a facilities team could review and prioritize follow-up.
          </p>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer>
          <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border-t border-[var(--color-ink)] pt-4">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">Objective</dt>
              <dd className="mt-2 text-base leading-relaxed">Document temperature patterns across a rooftop PV system for later maintenance review.</dd>
            </div>
            <div className="border-t border-[var(--color-ink)] pt-4">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">What was captured</dt>
              <dd className="mt-2 text-base leading-relaxed">Paired thermal and RGB stills covering the array, with location context for observed temperature anomalies.</dd>
            </div>
            <div className="border-t border-[var(--color-ink)] pt-4">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">Capture method</dt>
              <dd className="mt-2 text-base leading-relaxed">Aerial thermal and visual capture planned for module-level coverage of the rooftop array.</dd>
            </div>
            <div className="border-t border-[var(--color-ink)] pt-4">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">RGB / thermal relationship</dt>
              <dd className="mt-2 text-base leading-relaxed">Thermal frames were reviewed against visual imagery so apparent heat signatures could be located on physical modules.</dd>
            </div>
            <div className="border-t border-[var(--color-ink)] pt-4">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">Findings documented</dt>
              <dd className="mt-2 text-base leading-relaxed">More than 160 thermal anomalies were recorded, including hotspot, multi-diode, and string-level temperature patterns.</dd>
            </div>
            <div className="border-t border-[var(--color-ink)] pt-4">
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]">Deliverables</dt>
              <dd className="mt-2 text-base leading-relaxed">Thermal imagery, RGB context, annotated snapshots, and location context for follow-up. PV reporting was organized with IEC 62446-3 in view.</dd>
            </div>
          </dl>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Context"
            title="RGB and thermal together"
            description="Thermal color is a visualization of apparent temperature. Location still depends on the paired visual record."
          />
          <div className="mx-auto mt-10 max-w-5xl">
            <CompareSlider leftSrc={media.rgb} rightSrc={media.thermal} leftLabel="RGB" rightLabel="Thermal" />
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Documented patterns"
            title="What the record showed"
            description="The patterns below were documented as apparent temperature differences. They are not independent determinations of electrical failure or liability."
          />
          <div className="mt-12 space-y-12">
            <div className="border-t border-[var(--color-line)] pt-8">
              <h3 className="text-xl font-semibold">Hotspots and multi-hotspots</h3>
              <p className="mt-3 max-w-[46rem] text-base leading-relaxed text-[var(--color-muted)]">
                Localized high-temperature cells and repeated hotspot patterns were recorded across the array so technicians could inspect specific modules rather than walking the field without location context.
              </p>
              <PanelGrid
                srcs={media.hotspots}
                captions={["Hotspot", "Multi-hotspot", "Multi-hotspot"]}
                alt="Documented PV hotspot thermal pattern"
              />
            </div>
            <div className="border-t border-[var(--color-line)] pt-8">
              <h3 className="text-xl font-semibold">Multi-diode temperature patterns</h3>
              <p className="mt-3 max-w-[46rem] text-base leading-relaxed text-[var(--color-muted)]">
                Repeated hot blocks within modules were documented as high-priority patterns for later electrical testing. The record locates the modules; it does not itself assign a root cause.
              </p>
              <PanelGrid
                srcs={media.diodes}
                captions={["Multi-diode pattern", "Single-diode pattern"]}
                alt="Documented multi-diode thermal pattern"
              />
            </div>
            <div className="border-t border-[var(--color-line)] pt-8">
              <h3 className="text-xl font-semibold">String-level patterns</h3>
              <p className="mt-3 max-w-[46rem] text-base leading-relaxed text-[var(--color-muted)]">
                Uneven heating along the same electrical string was documented so downstream review could consider inverter, combiner, or wiring issues as appropriate.
              </p>
              <PanelGrid
                srcs={media.strings}
                captions={["String pattern", "Uneven heating on one string", "Additional example"]}
                alt="Documented string-level thermal pattern"
              />
            </div>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Review context"
            title="Temperature spread"
            description="Comparing warmer and cooler modules under similar conditions helps later reviewers distinguish outliers from ordinary variation."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
              <Image
                src={media.annotated}
                alt="Annotated thermal frame showing repeated module-level temperature patterns"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
              <figcaption className="px-3 py-2 text-sm text-[var(--color-muted)]">
                Annotated thermal frames locating repeated module-level patterns.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
              <Image
                src={media.spread}
                alt="Temperature spread comparison across nearby PV modules"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
              <figcaption className="px-3 py-2 text-sm text-[var(--color-muted)]">
                Temperature spread (ΔT) used as supporting context for prioritization.
              </figcaption>
            </figure>
          </div>
          <figure className="mt-8 overflow-hidden rounded-[6px] border border-[var(--color-line)]">
            <Image
              src={media.map}
              alt="Annotated thermal map of documented PV temperature anomalies"
              width={1200}
              height={700}
              className="mx-auto h-auto w-full max-w-3xl object-contain"
            />
            <figcaption className="px-3 py-2 text-center text-sm text-[var(--color-muted)]">
              Annotated overview of documented thermal anomalies.
            </figcaption>
          </figure>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader eyebrow="Related" title="Continue" />
          <RelatedArticles
            items={[
              { href: "/projects/pv-farm-hotspots", title: "Solar PV Thermal Documentation" },
              { href: "/thermal/Applications", title: "Thermal documentation applications" },
              { href: "/thermal/method", title: "Thermal documentation method" },
              { href: "/blog/thermal-reporting-standards-iec-62446-3", title: "Thermal Reporting Standards: IEC 62446-3" },
              { href: "/blog/solar-thermal-anomalies-drone-based-pv-inspections", title: "Solar Thermal Anomalies in PV Inspections" },
            ]}
          />
        </SiteContainer>
      </section>
      </WithRail>

      <PageCta
        title="Need thermal documentation?"
        text="Describe the array or asset and what the record needs to support."
      />
    </>
  )
}
