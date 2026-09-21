import Image from "next/image"
import Link from "next/link"
import SiteContainer from "@/app/components/SiteContainer"
import SectionHeader from "@/app/components/SectionHeader"
import ServiceHero from "@/app/components/service/ServiceHero"
import ThermalNav from "@/app/components/service/ThermalNav"
import ProjectProof from "@/app/components/service/ProjectProof"
import RelatedArticles from "@/app/components/service/RelatedArticles"
import PageCta from "@/app/components/service/PageCta"
import { cloudinaryUrl, pageMetadata } from "@/app/config/site"

export const metadata = pageMetadata({
  title: "Thermal Documentation | SterFlies",
  description:
    "Temperature-pattern documentation used to support inspection and technical review of solar PV, electrical systems, building envelope, and industrial assets.",
  path: "/thermal/Applications",
})

const applications = [
  {
    title: "Solar PV",
    text: "Document apparent temperature variation across modules and strings so maintenance can be directed to specific locations.",
    image: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712045/Screenshot_2025-07-16_190608_gmv8aj.png",
      900
    ),
    alt: "Thermal documentation of a photovoltaic array",
  },
  {
    title: "Electrical systems",
    text: "Record apparent temperature patterns on accessible electrical equipment as supporting context for qualified electrical review.",
    image: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712045/Screenshot_2025-07-16_190633_vv1dmt.png",
      900
    ),
    alt: "Thermal imagery of electrical equipment",
  },
  {
    title: "Building envelope",
    text: "Capture exterior temperature patterns that can support later review of insulation, openings, and envelope conditions.",
    image: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712045/Screenshot_2025-07-16_190627_nktdiu.png",
      900
    ),
    alt: "Thermal imagery of a building envelope",
  },
  {
    title: "Industrial assets",
    text: "Document accessible industrial equipment and process areas where temperature variation is relevant to inspection workflows.",
    image: "/ThermalThumb.png",
    alt: "Thermal documentation of industrial photovoltaic arrays",
  },
  {
    title: "Roofing / moisture-investigation support",
    text: "Thermal patterns can support moisture or roofing investigations when interpreted with other observations by a qualified professional.",
    image: cloudinaryUrl(
      "https://res.cloudinary.com/dzlmoyomq/image/upload/v1752712055/Screenshot_2025-07-16_190648_nfdiqw.png",
      900
    ),
    alt: "Thermal imagery used as supporting context for roof or moisture review",
  },
]

export default function ThermalDocumentationPage() {
  return (
    <>
      <ThermalNav current="/thermal/Applications" />
      <ServiceHero
        parent={{ href: "/services", label: "Services" }}
        eyebrow="Service 03"
        title="Thermal Documentation"
        description="Thermal imaging captures apparent surface-temperature patterns that can help identify areas for further professional review."
        primary={{ href: "/contact", label: "Discuss a Project" }}
        secondary={{ href: "/thermal/case-studies", label: "View Case Studies" }}
        image={{
          src: "/ThermalThumb.png",
          alt: "Thermal documentation of a photovoltaic array",
          priority: true,
        }}
      />

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16">
        <SiteContainer className="max-w-3xl">
          <p className="text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Thermal imaging records apparent surface-temperature differences. It does not independently determine defect cause, moisture source, electrical failure, code violation, or liability unless interpreted by a qualified professional.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href="/thermal/method" className="text-[var(--color-accent)] hover:underline">
              Review the thermal method
            </Link>
            <Link href="/thermal/case-studies" className="text-[var(--color-accent)] hover:underline">
              View thermal case studies
            </Link>
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Applications"
            title="Where thermal documentation is used"
            description="These are current SterFlies thermal documentation applications. Capture is selected only when temperature variation is relevant to the work."
          />
          <div className="mt-12 space-y-12">
            {applications.map((item) => (
              <article
                key={item.title}
                className="grid gap-6 border-t border-[var(--color-line)] pt-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-[40rem] text-base leading-relaxed text-[var(--color-muted)]">
                    {item.text}
                  </p>
                </div>
                <div className="overflow-hidden rounded-[6px] border border-[var(--color-line)] bg-[var(--color-surface)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={900}
                    height={600}
                    className="aspect-[16/10] w-full object-contain bg-[var(--color-canvas)]"
                  />
                </div>
              </article>
            ))}
          </div>
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-surface)] py-12 md:py-16 lg:py-20">
        <SiteContainer>
          <SectionHeader
            eyebrow="Project"
            title="Selected thermal documentation"
          />
          <ProjectProof
            type="Thermal documentation"
            title="Solar PV Thermal Documentation"
            href="/projects/pv-farm-hotspots"
            image={{
              src: "/ThermalThumb.png",
              alt: "Thermal documentation of a photovoltaic array",
            }}
            documented="RGB and thermal documentation of a photovoltaic array."
            method="Paired thermal and visual capture with location context for later review."
            why="Locate underperforming modules so maintenance can be targeted rather than walked field-wide."
            deliverables="Thermal imagery, defect snapshots, and location context."
          />
        </SiteContainer>
      </section>

      <section className="border-b border-[var(--color-line)] py-12 md:py-16">
        <SiteContainer>
          <SectionHeader eyebrow="Articles" title="Related reading" />
          <RelatedArticles
            items={[
              { href: "/blog/thermal-reporting-standards-iec-62446-3", title: "Thermal Reporting Standards: IEC 62446-3" },
              { href: "/blog/solar-thermal-anomalies-drone-based-pv-inspections", title: "Solar Thermal Anomalies in PV Inspections" },
              { href: "/thermal/method", title: "Thermal documentation method" },
              { href: "/thermal/case-studies", title: "Thermal case studies" },
            ]}
          />
        </SiteContainer>
      </section>

      <PageCta
        title="Need thermal documentation?"
        text="Describe the asset, access, and what the record needs to support. We can determine whether thermal capture is appropriate."
      />
    </>
  )
}
