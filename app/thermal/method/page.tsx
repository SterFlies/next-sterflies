import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ThermalNav from "@/app/components/service/ThermalNav"
import ProcessSteps from "@/app/components/service/ProcessSteps"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"

export const metadata: Metadata = {
  title: "Thermal Documentation Method | SterFlies",
  description:
    "How SterFlies plans, captures, and organizes thermal and RGB documentation for later professional review.",
  alternates: { canonical: "/thermal/method" },
}

const steps = [
  {
    number: "01",
    title: "Objective",
    text: "Define what temperature-pattern documentation needs to support: inspection review, location context, or a repeatable record of current conditions.",
  },
  {
    number: "02",
    title: "Capture planning",
    text: "Review access, sun and load conditions, emissivity and reflectivity concerns, overlap, and altitude so coverage matches the required record.",
  },
  {
    number: "03",
    title: "Thermal data collection",
    text: "Capture radiometric thermal stills systematically across the asset or area, checking coverage before leaving the site.",
  },
  {
    number: "04",
    title: "RGB context",
    text: "Pair thermal frames with visual imagery so apparent temperature patterns can be located on the physical asset.",
  },
  {
    number: "05",
    title: "Review and reporting",
    text: "Organize thermal and RGB stills, location context, and supporting files for the people who will interpret the record.",
  },
]

export default function ThermalMethodPage() {
  return (
    <>
      <ThermalNav current="/thermal/method" />
      <section className="border-b border-[var(--color-line)]">
        <SiteContainer className="py-10 md:py-14">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-muted)]">
            Thermal documentation
          </p>
          <h1 className="mt-3 max-w-[16ch] text-[2rem] font-semibold leading-[1.12] tracking-tight md:text-[2.5rem]">
            Method
          </h1>
          <p className="mt-4 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Thermal documentation is planned around the record required, then captured with paired visual context so later review can locate apparent temperature patterns on the asset.
          </p>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader eyebrow="Workflow" title="From objective to organized record" />
          <ProcessSteps steps={steps} />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div>
            <SectionHeader
              eyebrow="Technology"
              title="Equipment and processing"
              description="Aerial systems, thermal sensors, and software are tools. They are selected after the documentation objective is defined."
            />
            <p className="mt-6 max-w-[42rem] text-base leading-relaxed text-[var(--color-muted)]">
              Current aerial thermal work uses a radiometric thermal sensor paired with a high-resolution RGB camera. When RTK or other positional control is used, it can improve alignment between thermal overlays and real-world location. Alignment still depends on capture conditions and the control method specified for the engagement.
            </p>
            <p className="mt-4 max-w-[42rem] text-base leading-relaxed text-[var(--color-muted)]">
              For photovoltaic inspections, reporting can be organized to support review under IEC 62446-3. That standard is specific to PV thermal inspection and is not a general thermal-documentation protocol.
            </p>
            <p className="mt-4 max-w-[42rem] text-sm leading-relaxed text-[var(--color-muted)]">
              Thermal imaging records apparent surface-temperature differences. Interpretation remains with the appropriate qualified professional.
            </p>
          </div>
          <figure className="overflow-hidden rounded-[6px] border border-[var(--color-line)]">
            <Image
              src="/ThermalThumb.png"
              alt="Thermal documentation of a photovoltaic array"
              width={900}
              height={600}
              className="aspect-[16/10] w-full object-cover"
            />
            <figcaption className="border-t border-[var(--color-line)] px-3 py-2 text-[0.7rem] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]">
              Thermal record
            </figcaption>
          </figure>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader eyebrow="Related" title="Continue" />
          <RelatedArticles
            items={[
              { href: "/thermal/Applications", title: "Thermal documentation applications" },
              { href: "/thermal/case-studies", title: "Thermal case studies" },
              { href: "/blog/thermal-reporting-standards-iec-62446-3", title: "Thermal Reporting Standards: IEC 62446-3" },
              { href: "/blog/solar-thermal-anomalies-drone-based-pv-inspections", title: "Solar Thermal Anomalies in PV Inspections" },
            ]}
          />
          <Link
            href="/projects/pv-farm-hotspots"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--color-accent)] hover:underline"
          >
            View Solar PV Thermal Documentation
          </Link>
        </SiteContainer>
      </section>

      <PageCta
        title="Need thermal documentation?"
        text="Describe the asset and the review the record needs to support."
      />
    </>
  )
}
